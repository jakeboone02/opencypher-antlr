import { CharStreams, CommonTokenStream, ParserRuleContext } from "antlr4ts";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { ParseTreeWalker } from "antlr4ts/tree/ParseTreeWalker";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { CypherScriptLexer } from "./antlr/CypherScriptLexer";
import { CypherScriptListener } from "./antlr/CypherScriptListener";
import {
  CypherScriptParser,
  OC_CypherContext,
} from "./antlr/CypherScriptParser";
import { CypherScriptVisitor } from "./antlr/CypherScriptVisitor";
import {
  Comment,
  Cypher,
  CypherASTNode,
  CypherASTNodeType,
  Statement,
} from "./types";
import fs from 'fs';

const script = fs.readFileSync('./src/test.cypher').toString();
const inputStream = CharStreams.fromString(script);
// const lexer = new CypherScriptLexer(inputStream);
// const tokenStream = new CommonTokenStream(lexer);
// const parser = new CypherScriptParser(tokenStream);
const parser = new CypherScriptParser(
  new CommonTokenStream(new CypherScriptLexer(inputStream))
);
parser.buildParseTree = true;
parser.removeErrorListeners();
parser.addErrorListener({
  syntaxError(_recognizer, offendingSymbol, line, charPositionInLine, msg, _e) {
    console.error(
      `${offendingSymbol} line ${line}, col ${charPositionInLine}: ${msg}`
    );
  },
});

const tree = parser.oC_Cypher();

const getRuleName = (name: string) => name.replace(/(^OC_|Context$)/g, "");

console.log("LISTENER PATTERN:");

class Listener implements CypherScriptListener {
  enterEveryRule(ctx: ParserRuleContext) {
    console.log(
      `${"  ".repeat(ctx.depth() - 1)}${getRuleName(
        ctx.constructor.name
      )}: ${JSON.stringify(ctx.text)}`
    );
  }
  visitTerminal(node: TerminalNode) {
    console.log(`TerminalNode: ${JSON.stringify(node.text)}`);
  }
}

const listener: CypherScriptListener = new Listener();
ParseTreeWalker.DEFAULT.walk(listener, tree);

console.log("\nVISITOR PATTERN:");

// class StringVisitor
//   extends AbstractParseTreeVisitor<string>
//   implements CypherScriptVisitor<string>
// {
//   constructor() {
//     super();
//   }
//   defaultResult() {
//     return "";
//   }
//   visitOC_Cypher(ctx: OC_CypherContext) {
//     return ctx.text;
//   }

//   // visit(node: ParseTree): string {
//   //   return this.visitOC_Cypher(tree);
//   // }
//   // visitChildren(node: RuleNode): string {
//   //   if (node.childCount > 0) {
//   //     const texts: string[] = [];
//   //     for (let i = 0; i < node.childCount; i++) {
//   //       texts.push(`${node.constructor.name}: "${node.getChild(i).text}"`);
//   //     }
//   //     return texts.join(", ");
//   //   }
//   //   return node.text;
//   // }
//   // visitErrorNode(node: ErrorNode): string {
//   //   return node.text;
//   // }
//   // visitTerminal(node: TerminalNode): string {
//   //   return node.text;
//   // }
// }

// const stringVisitor = new StringVisitor();
// console.log(stringVisitor.visitOC_Cypher(tree));

const notImplementedCommentNode: Comment = {
  type: "Comment",
  value: "/* NOT IMPLEMENTED */",
};
const ruleName = (nodeType: CypherASTNodeType) => `OC_${nodeType}Context`;

class ASTVisitor
  extends AbstractParseTreeVisitor<CypherASTNode>
  implements CypherScriptVisitor<CypherASTNode>
{
  constructor() {
    super();
  }
  defaultResult() {
    const node: Comment = notImplementedCommentNode;
    return node;
  }
  visitOC_Cypher(ctx: OC_CypherContext) {
    const statements = ctx.children?.map((c): Statement | Comment =>
      c.constructor.name === ruleName("Statement")
        ? {
            type: "Statement",
            query: {
              type: "Query",
              value: {
                type: "RegularQuery",
                value: {
                  type: "SingleQuery",
                  query: {
                    type: "SinglePartQuery",
                    return: {
                      type: "Return",
                      projection: {
                        type: "ProjectionBody",
                        items: { type: "ProjectionItems", items: ["*"] },
                      },
                    },
                  },
                },
              },
            },
          }
        : { type: "Comment", value: `${c.constructor.name}: ${JSON.stringify(c.text)}` }
    );
    const node: Cypher = { type: "Cypher", statements };
    return node;
  }
  visitTerminal(node: TerminalNode): Comment {
    return { type: 'Comment', value: node.text }
  }
}

const astVisitor = new ASTVisitor();
console.log(JSON.stringify(astVisitor.visitOC_Cypher(tree), null, 2));
