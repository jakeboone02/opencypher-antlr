import { CharStreams, CommonTokenStream, ParserRuleContext } from "antlr4ts";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { CypherLexer } from "./antlr/CypherLexer";
import { CypherListener } from "./antlr/CypherListener";
import { CypherParser } from "./antlr/CypherParser";
import { CypherVisitor } from "./antlr/CypherVisitor";

const inputStream = CharStreams.fromString("MATCH () RETURN *; MATCH () RETURN *;");
const lexer = new CypherLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new CypherParser(tokenStream);

const tree = parser.oC_Cypher();

// LISTENER

class Listener implements CypherListener {
  enterEveryRule(ctx: ParserRuleContext) {
    console.log(ctx.text);
  }
}

const listener: CypherListener = new Listener();
ParseTreeWalker.DEFAULT.walk(listener, tree)

// VISITOR

class Visitor implements CypherVisitor<string> {
  visit(tree: ParseTree): string {
    return tree.text;
  }
  visitChildren(node: RuleNode): string {
    return node.text;
  }
  visitErrorNode(node: ErrorNode): string {
    return node.text;
  }
  visitTerminal(node: TerminalNode): string {
    return node.text;
  }
}

console.log(tree.accept(new Visitor()));
