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

const inputStream = CharStreams.fromString(
  "MATCH () RETURN *; MATCH () RETURN *;"
);
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
    console.log(`${'  '.repeat(ctx.depth() - 1)}${getRuleName(ctx.constructor.name)}: "${ctx.text}"`);
  }
}

const listener: CypherScriptListener = new Listener();
ParseTreeWalker.DEFAULT.walk(listener, tree);

console.log("\nVISITOR PATTERN:");

class Visitor
  extends AbstractParseTreeVisitor<string>
  implements CypherScriptVisitor<string>
{
  constructor() {
    super();
  }
  defaultResult() {
    return "";
  }
  visitOC_Cypher(ctx: OC_CypherContext) {
    return ctx.text;
  }

  // visit(node: ParseTree): string {
  //   return this.visitOC_Cypher(tree);
  // }
  // visitChildren(node: RuleNode): string {
  //   if (node.childCount > 0) {
  //     const texts: string[] = [];
  //     for (let i = 0; i < node.childCount; i++) {
  //       texts.push(`${node.constructor.name}: "${node.getChild(i).text}"`);
  //     }
  //     return texts.join(", ");
  //   }
  //   return node.text;
  // }
  // visitErrorNode(node: ErrorNode): string {
  //   return node.text;
  // }
  // visitTerminal(node: TerminalNode): string {
  //   return node.text;
  // }
}

const visitor = new Visitor();
console.log(visitor.visitOC_Cypher(tree));
