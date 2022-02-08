// Generated from src/antlr/Cypher.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CypherListener } from "./CypherListener";
import { CypherVisitor } from "./CypherVisitor";


export class CypherParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly UNION = 46;
	public static readonly ALL = 47;
	public static readonly OPTIONAL = 48;
	public static readonly MATCH = 49;
	public static readonly UNWIND = 50;
	public static readonly AS = 51;
	public static readonly MERGE = 52;
	public static readonly ON = 53;
	public static readonly CREATE = 54;
	public static readonly SET = 55;
	public static readonly DETACH = 56;
	public static readonly DELETE = 57;
	public static readonly REMOVE = 58;
	public static readonly CALL = 59;
	public static readonly YIELD = 60;
	public static readonly WITH = 61;
	public static readonly RETURN = 62;
	public static readonly DISTINCT = 63;
	public static readonly ORDER = 64;
	public static readonly BY = 65;
	public static readonly L_SKIP = 66;
	public static readonly LIMIT = 67;
	public static readonly ASCENDING = 68;
	public static readonly ASC = 69;
	public static readonly DESCENDING = 70;
	public static readonly DESC = 71;
	public static readonly WHERE = 72;
	public static readonly OR = 73;
	public static readonly XOR = 74;
	public static readonly AND = 75;
	public static readonly NOT = 76;
	public static readonly IN = 77;
	public static readonly STARTS = 78;
	public static readonly ENDS = 79;
	public static readonly CONTAINS = 80;
	public static readonly IS = 81;
	public static readonly NULL = 82;
	public static readonly COUNT = 83;
	public static readonly ANY = 84;
	public static readonly NONE = 85;
	public static readonly SINGLE = 86;
	public static readonly TRUE = 87;
	public static readonly FALSE = 88;
	public static readonly EXISTS = 89;
	public static readonly CASE = 90;
	public static readonly ELSE = 91;
	public static readonly END = 92;
	public static readonly WHEN = 93;
	public static readonly THEN = 94;
	public static readonly StringLiteral = 95;
	public static readonly EscapedChar = 96;
	public static readonly HexInteger = 97;
	public static readonly DecimalInteger = 98;
	public static readonly OctalInteger = 99;
	public static readonly HexLetter = 100;
	public static readonly HexDigit = 101;
	public static readonly Digit = 102;
	public static readonly NonZeroDigit = 103;
	public static readonly NonZeroOctDigit = 104;
	public static readonly OctDigit = 105;
	public static readonly ZeroDigit = 106;
	public static readonly ExponentDecimalReal = 107;
	public static readonly RegularDecimalReal = 108;
	public static readonly CONSTRAINT = 109;
	public static readonly DO = 110;
	public static readonly FOR = 111;
	public static readonly REQUIRE = 112;
	public static readonly UNIQUE = 113;
	public static readonly MANDATORY = 114;
	public static readonly SCALAR = 115;
	public static readonly OF = 116;
	public static readonly ADD = 117;
	public static readonly DROP = 118;
	public static readonly FILTER = 119;
	public static readonly EXTRACT = 120;
	public static readonly UnescapedSymbolicName = 121;
	public static readonly IdentifierStart = 122;
	public static readonly IdentifierPart = 123;
	public static readonly EscapedSymbolicName = 124;
	public static readonly SP = 125;
	public static readonly WHITESPACE = 126;
	public static readonly Comment = 127;
	public static readonly RULE_oC_Cypher = 0;
	public static readonly RULE_oC_Statement = 1;
	public static readonly RULE_oC_Query = 2;
	public static readonly RULE_oC_RegularQuery = 3;
	public static readonly RULE_oC_Union = 4;
	public static readonly RULE_oC_SingleQuery = 5;
	public static readonly RULE_oC_SinglePartQuery = 6;
	public static readonly RULE_oC_MultiPartQuery = 7;
	public static readonly RULE_oC_UpdatingClause = 8;
	public static readonly RULE_oC_ReadingClause = 9;
	public static readonly RULE_oC_Match = 10;
	public static readonly RULE_oC_Unwind = 11;
	public static readonly RULE_oC_Merge = 12;
	public static readonly RULE_oC_MergeAction = 13;
	public static readonly RULE_oC_Create = 14;
	public static readonly RULE_oC_Set = 15;
	public static readonly RULE_oC_SetItem = 16;
	public static readonly RULE_oC_Delete = 17;
	public static readonly RULE_oC_Remove = 18;
	public static readonly RULE_oC_RemoveItem = 19;
	public static readonly RULE_oC_InQueryCall = 20;
	public static readonly RULE_oC_StandaloneCall = 21;
	public static readonly RULE_oC_YieldItems = 22;
	public static readonly RULE_oC_YieldItem = 23;
	public static readonly RULE_oC_With = 24;
	public static readonly RULE_oC_Return = 25;
	public static readonly RULE_oC_ProjectionBody = 26;
	public static readonly RULE_oC_ProjectionItems = 27;
	public static readonly RULE_oC_ProjectionItem = 28;
	public static readonly RULE_oC_Order = 29;
	public static readonly RULE_oC_Skip = 30;
	public static readonly RULE_oC_Limit = 31;
	public static readonly RULE_oC_SortItem = 32;
	public static readonly RULE_oC_Where = 33;
	public static readonly RULE_oC_Pattern = 34;
	public static readonly RULE_oC_PatternPart = 35;
	public static readonly RULE_oC_AnonymousPatternPart = 36;
	public static readonly RULE_oC_PatternElement = 37;
	public static readonly RULE_oC_NodePattern = 38;
	public static readonly RULE_oC_PatternElementChain = 39;
	public static readonly RULE_oC_RelationshipPattern = 40;
	public static readonly RULE_oC_RelationshipDetail = 41;
	public static readonly RULE_oC_Properties = 42;
	public static readonly RULE_oC_RelationshipTypes = 43;
	public static readonly RULE_oC_NodeLabels = 44;
	public static readonly RULE_oC_NodeLabel = 45;
	public static readonly RULE_oC_RangeLiteral = 46;
	public static readonly RULE_oC_LabelName = 47;
	public static readonly RULE_oC_RelTypeName = 48;
	public static readonly RULE_oC_Expression = 49;
	public static readonly RULE_oC_OrExpression = 50;
	public static readonly RULE_oC_XorExpression = 51;
	public static readonly RULE_oC_AndExpression = 52;
	public static readonly RULE_oC_NotExpression = 53;
	public static readonly RULE_oC_ComparisonExpression = 54;
	public static readonly RULE_oC_AddOrSubtractExpression = 55;
	public static readonly RULE_oC_MultiplyDivideModuloExpression = 56;
	public static readonly RULE_oC_PowerOfExpression = 57;
	public static readonly RULE_oC_UnaryAddOrSubtractExpression = 58;
	public static readonly RULE_oC_StringListNullOperatorExpression = 59;
	public static readonly RULE_oC_ListOperatorExpression = 60;
	public static readonly RULE_oC_StringOperatorExpression = 61;
	public static readonly RULE_oC_NullOperatorExpression = 62;
	public static readonly RULE_oC_PropertyOrLabelsExpression = 63;
	public static readonly RULE_oC_Atom = 64;
	public static readonly RULE_oC_Literal = 65;
	public static readonly RULE_oC_BooleanLiteral = 66;
	public static readonly RULE_oC_ListLiteral = 67;
	public static readonly RULE_oC_PartialComparisonExpression = 68;
	public static readonly RULE_oC_ParenthesizedExpression = 69;
	public static readonly RULE_oC_RelationshipsPattern = 70;
	public static readonly RULE_oC_FilterExpression = 71;
	public static readonly RULE_oC_IdInColl = 72;
	public static readonly RULE_oC_FunctionInvocation = 73;
	public static readonly RULE_oC_FunctionName = 74;
	public static readonly RULE_oC_ExistentialSubquery = 75;
	public static readonly RULE_oC_ExplicitProcedureInvocation = 76;
	public static readonly RULE_oC_ImplicitProcedureInvocation = 77;
	public static readonly RULE_oC_ProcedureResultField = 78;
	public static readonly RULE_oC_ProcedureName = 79;
	public static readonly RULE_oC_Namespace = 80;
	public static readonly RULE_oC_ListComprehension = 81;
	public static readonly RULE_oC_PatternComprehension = 82;
	public static readonly RULE_oC_PropertyLookup = 83;
	public static readonly RULE_oC_CaseExpression = 84;
	public static readonly RULE_oC_CaseAlternative = 85;
	public static readonly RULE_oC_Variable = 86;
	public static readonly RULE_oC_NumberLiteral = 87;
	public static readonly RULE_oC_MapLiteral = 88;
	public static readonly RULE_oC_Parameter = 89;
	public static readonly RULE_oC_PropertyExpression = 90;
	public static readonly RULE_oC_PropertyKeyName = 91;
	public static readonly RULE_oC_IntegerLiteral = 92;
	public static readonly RULE_oC_DoubleLiteral = 93;
	public static readonly RULE_oC_SchemaName = 94;
	public static readonly RULE_oC_ReservedWord = 95;
	public static readonly RULE_oC_SymbolicName = 96;
	public static readonly RULE_oC_LeftArrowHead = 97;
	public static readonly RULE_oC_RightArrowHead = 98;
	public static readonly RULE_oC_Dash = 99;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"oC_Cypher", "oC_Statement", "oC_Query", "oC_RegularQuery", "oC_Union", 
		"oC_SingleQuery", "oC_SinglePartQuery", "oC_MultiPartQuery", "oC_UpdatingClause", 
		"oC_ReadingClause", "oC_Match", "oC_Unwind", "oC_Merge", "oC_MergeAction", 
		"oC_Create", "oC_Set", "oC_SetItem", "oC_Delete", "oC_Remove", "oC_RemoveItem", 
		"oC_InQueryCall", "oC_StandaloneCall", "oC_YieldItems", "oC_YieldItem", 
		"oC_With", "oC_Return", "oC_ProjectionBody", "oC_ProjectionItems", "oC_ProjectionItem", 
		"oC_Order", "oC_Skip", "oC_Limit", "oC_SortItem", "oC_Where", "oC_Pattern", 
		"oC_PatternPart", "oC_AnonymousPatternPart", "oC_PatternElement", "oC_NodePattern", 
		"oC_PatternElementChain", "oC_RelationshipPattern", "oC_RelationshipDetail", 
		"oC_Properties", "oC_RelationshipTypes", "oC_NodeLabels", "oC_NodeLabel", 
		"oC_RangeLiteral", "oC_LabelName", "oC_RelTypeName", "oC_Expression", 
		"oC_OrExpression", "oC_XorExpression", "oC_AndExpression", "oC_NotExpression", 
		"oC_ComparisonExpression", "oC_AddOrSubtractExpression", "oC_MultiplyDivideModuloExpression", 
		"oC_PowerOfExpression", "oC_UnaryAddOrSubtractExpression", "oC_StringListNullOperatorExpression", 
		"oC_ListOperatorExpression", "oC_StringOperatorExpression", "oC_NullOperatorExpression", 
		"oC_PropertyOrLabelsExpression", "oC_Atom", "oC_Literal", "oC_BooleanLiteral", 
		"oC_ListLiteral", "oC_PartialComparisonExpression", "oC_ParenthesizedExpression", 
		"oC_RelationshipsPattern", "oC_FilterExpression", "oC_IdInColl", "oC_FunctionInvocation", 
		"oC_FunctionName", "oC_ExistentialSubquery", "oC_ExplicitProcedureInvocation", 
		"oC_ImplicitProcedureInvocation", "oC_ProcedureResultField", "oC_ProcedureName", 
		"oC_Namespace", "oC_ListComprehension", "oC_PatternComprehension", "oC_PropertyLookup", 
		"oC_CaseExpression", "oC_CaseAlternative", "oC_Variable", "oC_NumberLiteral", 
		"oC_MapLiteral", "oC_Parameter", "oC_PropertyExpression", "oC_PropertyKeyName", 
		"oC_IntegerLiteral", "oC_DoubleLiteral", "oC_SchemaName", "oC_ReservedWord", 
		"oC_SymbolicName", "oC_LeftArrowHead", "oC_RightArrowHead", "oC_Dash",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "','", "'='", "'+='", "'*'", "'('", "')'", "'['", "']'", 
		"':'", "'|'", "'..'", "'+'", "'-'", "'/'", "'%'", "'^'", "'<>'", "'<'", 
		"'>'", "'<='", "'>='", "'{'", "'}'", "'.'", "'$'", "'\u27E8'", "'\u3008'", 
		"'\uFE64'", "'\uFF1C'", "'\u27E9'", "'\u3009'", "'\uFE65'", "'\uFF1E'", 
		"'\u00AD'", "'\u2010'", "'\u2011'", "'\u2012'", "'\u2013'", "'\u2014'", 
		"'\u2015'", "'\u2212'", "'\uFE58'", "'\uFE63'", "'\uFF0D'", undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'0'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "UNION", "ALL", "OPTIONAL", 
		"MATCH", "UNWIND", "AS", "MERGE", "ON", "CREATE", "SET", "DETACH", "DELETE", 
		"REMOVE", "CALL", "YIELD", "WITH", "RETURN", "DISTINCT", "ORDER", "BY", 
		"L_SKIP", "LIMIT", "ASCENDING", "ASC", "DESCENDING", "DESC", "WHERE", 
		"OR", "XOR", "AND", "NOT", "IN", "STARTS", "ENDS", "CONTAINS", "IS", "NULL", 
		"COUNT", "ANY", "NONE", "SINGLE", "TRUE", "FALSE", "EXISTS", "CASE", "ELSE", 
		"END", "WHEN", "THEN", "StringLiteral", "EscapedChar", "HexInteger", "DecimalInteger", 
		"OctalInteger", "HexLetter", "HexDigit", "Digit", "NonZeroDigit", "NonZeroOctDigit", 
		"OctDigit", "ZeroDigit", "ExponentDecimalReal", "RegularDecimalReal", 
		"CONSTRAINT", "DO", "FOR", "REQUIRE", "UNIQUE", "MANDATORY", "SCALAR", 
		"OF", "ADD", "DROP", "FILTER", "EXTRACT", "UnescapedSymbolicName", "IdentifierStart", 
		"IdentifierPart", "EscapedSymbolicName", "SP", "WHITESPACE", "Comment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CypherParser._LITERAL_NAMES, CypherParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CypherParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Cypher.g4"; }

	// @Override
	public get ruleNames(): string[] { return CypherParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CypherParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CypherParser._ATN, this);
	}
	// @RuleVersion(0)
	public oC_Cypher(): OC_CypherContext {
		let _localctx: OC_CypherContext = new OC_CypherContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CypherParser.RULE_oC_Cypher);
		let _la: number;
		try {
			let _alt: number;
			this.state = 243;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 200;
					this.match(CypherParser.SP);
					}
				}

				this.state = 203;
				this.oC_Statement();
				this.state = 208;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 205;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 204;
						this.match(CypherParser.SP);
						}
					}

					this.state = 207;
					this.match(CypherParser.T__0);
					}
					break;
				}
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 210;
					this.match(CypherParser.SP);
					}
				}

				this.state = 213;
				this.match(CypherParser.EOF);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 215;
					this.match(CypherParser.SP);
					}
				}

				this.state = 218;
				this.oC_Statement();
				this.state = 229;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 220;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 219;
							this.match(CypherParser.SP);
							}
						}

						this.state = 222;
						this.match(CypherParser.T__0);
						this.state = 224;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 223;
							this.match(CypherParser.SP);
							}
						}

						this.state = 226;
						this.oC_Statement();
						}
						}
					}
					this.state = 231;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
				}
				this.state = 236;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 233;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 232;
						this.match(CypherParser.SP);
						}
					}

					this.state = 235;
					this.match(CypherParser.T__0);
					}
					break;
				}
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 238;
					this.match(CypherParser.SP);
					}
				}

				this.state = 241;
				this.match(CypherParser.EOF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Statement(): OC_StatementContext {
		let _localctx: OC_StatementContext = new OC_StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CypherParser.RULE_oC_Statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.oC_Query();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Query(): OC_QueryContext {
		let _localctx: OC_QueryContext = new OC_QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CypherParser.RULE_oC_Query);
		try {
			this.state = 249;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 247;
				this.oC_RegularQuery();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 248;
				this.oC_StandaloneCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RegularQuery(): OC_RegularQueryContext {
		let _localctx: OC_RegularQueryContext = new OC_RegularQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CypherParser.RULE_oC_RegularQuery);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 251;
			this.oC_SingleQuery();
			this.state = 258;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 252;
						this.match(CypherParser.SP);
						}
					}

					this.state = 255;
					this.oC_Union();
					}
					}
				}
				this.state = 260;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Union(): OC_UnionContext {
		let _localctx: OC_UnionContext = new OC_UnionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CypherParser.RULE_oC_Union);
		let _la: number;
		try {
			this.state = 273;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 261;
				this.match(CypherParser.UNION);
				this.state = 262;
				this.match(CypherParser.SP);
				this.state = 263;
				this.match(CypherParser.ALL);
				this.state = 265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 264;
					this.match(CypherParser.SP);
					}
				}

				this.state = 267;
				this.oC_SingleQuery();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 268;
				this.match(CypherParser.UNION);
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 269;
					this.match(CypherParser.SP);
					}
				}

				this.state = 272;
				this.oC_SingleQuery();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_SingleQuery(): OC_SingleQueryContext {
		let _localctx: OC_SingleQueryContext = new OC_SingleQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CypherParser.RULE_oC_SingleQuery);
		try {
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 275;
				this.oC_SinglePartQuery();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 276;
				this.oC_MultiPartQuery();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_SinglePartQuery(): OC_SinglePartQueryContext {
		let _localctx: OC_SinglePartQueryContext = new OC_SinglePartQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CypherParser.RULE_oC_SinglePartQuery);
		let _la: number;
		try {
			let _alt: number;
			this.state = 314;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CypherParser.OPTIONAL - 48)) | (1 << (CypherParser.MATCH - 48)) | (1 << (CypherParser.UNWIND - 48)) | (1 << (CypherParser.CALL - 48)))) !== 0)) {
					{
					{
					this.state = 279;
					this.oC_ReadingClause();
					this.state = 281;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 280;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 287;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 288;
				this.oC_Return();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CypherParser.OPTIONAL - 48)) | (1 << (CypherParser.MATCH - 48)) | (1 << (CypherParser.UNWIND - 48)) | (1 << (CypherParser.CALL - 48)))) !== 0)) {
					{
					{
					this.state = 289;
					this.oC_ReadingClause();
					this.state = 291;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 290;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 297;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 298;
				this.oC_UpdatingClause();
				this.state = 305;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 300;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 299;
							this.match(CypherParser.SP);
							}
						}

						this.state = 302;
						this.oC_UpdatingClause();
						}
						}
					}
					this.state = 307;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
				}
				this.state = 312;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 309;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 308;
						this.match(CypherParser.SP);
						}
					}

					this.state = 311;
					this.oC_Return();
					}
					break;
				}
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_MultiPartQuery(): OC_MultiPartQueryContext {
		let _localctx: OC_MultiPartQueryContext = new OC_MultiPartQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CypherParser.RULE_oC_MultiPartQuery);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 338;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 322;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CypherParser.OPTIONAL - 48)) | (1 << (CypherParser.MATCH - 48)) | (1 << (CypherParser.UNWIND - 48)) | (1 << (CypherParser.CALL - 48)))) !== 0)) {
						{
						{
						this.state = 316;
						this.oC_ReadingClause();
						this.state = 318;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 317;
							this.match(CypherParser.SP);
							}
						}

						}
						}
						this.state = 324;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 331;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (CypherParser.MERGE - 52)) | (1 << (CypherParser.CREATE - 52)) | (1 << (CypherParser.SET - 52)) | (1 << (CypherParser.DETACH - 52)) | (1 << (CypherParser.DELETE - 52)) | (1 << (CypherParser.REMOVE - 52)))) !== 0)) {
						{
						{
						this.state = 325;
						this.oC_UpdatingClause();
						this.state = 327;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 326;
							this.match(CypherParser.SP);
							}
						}

						}
						}
						this.state = 333;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 334;
					this.oC_With();
					this.state = 336;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 335;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 340;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 342;
			this.oC_SinglePartQuery();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_UpdatingClause(): OC_UpdatingClauseContext {
		let _localctx: OC_UpdatingClauseContext = new OC_UpdatingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CypherParser.RULE_oC_UpdatingClause);
		try {
			this.state = 349;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.CREATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 344;
				this.oC_Create();
				}
				break;
			case CypherParser.MERGE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 345;
				this.oC_Merge();
				}
				break;
			case CypherParser.DETACH:
			case CypherParser.DELETE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 346;
				this.oC_Delete();
				}
				break;
			case CypherParser.SET:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 347;
				this.oC_Set();
				}
				break;
			case CypherParser.REMOVE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 348;
				this.oC_Remove();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ReadingClause(): OC_ReadingClauseContext {
		let _localctx: OC_ReadingClauseContext = new OC_ReadingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CypherParser.RULE_oC_ReadingClause);
		try {
			this.state = 354;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.OPTIONAL:
			case CypherParser.MATCH:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 351;
				this.oC_Match();
				}
				break;
			case CypherParser.UNWIND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 352;
				this.oC_Unwind();
				}
				break;
			case CypherParser.CALL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 353;
				this.oC_InQueryCall();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Match(): OC_MatchContext {
		let _localctx: OC_MatchContext = new OC_MatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CypherParser.RULE_oC_Match);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.OPTIONAL) {
				{
				this.state = 356;
				this.match(CypherParser.OPTIONAL);
				this.state = 357;
				this.match(CypherParser.SP);
				}
			}

			this.state = 360;
			this.match(CypherParser.MATCH);
			this.state = 362;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 361;
				this.match(CypherParser.SP);
				}
			}

			this.state = 364;
			this.oC_Pattern();
			this.state = 369;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 365;
					this.match(CypherParser.SP);
					}
				}

				this.state = 368;
				this.oC_Where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Unwind(): OC_UnwindContext {
		let _localctx: OC_UnwindContext = new OC_UnwindContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CypherParser.RULE_oC_Unwind);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(CypherParser.UNWIND);
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 372;
				this.match(CypherParser.SP);
				}
			}

			this.state = 375;
			this.oC_Expression();
			this.state = 376;
			this.match(CypherParser.SP);
			this.state = 377;
			this.match(CypherParser.AS);
			this.state = 378;
			this.match(CypherParser.SP);
			this.state = 379;
			this.oC_Variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Merge(): OC_MergeContext {
		let _localctx: OC_MergeContext = new OC_MergeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CypherParser.RULE_oC_Merge);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.match(CypherParser.MERGE);
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 382;
				this.match(CypherParser.SP);
				}
			}

			this.state = 385;
			this.oC_PatternPart();
			this.state = 390;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 386;
					this.match(CypherParser.SP);
					this.state = 387;
					this.oC_MergeAction();
					}
					}
				}
				this.state = 392;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 42, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_MergeAction(): OC_MergeActionContext {
		let _localctx: OC_MergeActionContext = new OC_MergeActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CypherParser.RULE_oC_MergeAction);
		try {
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 393;
				this.match(CypherParser.ON);
				this.state = 394;
				this.match(CypherParser.SP);
				this.state = 395;
				this.match(CypherParser.MATCH);
				this.state = 396;
				this.match(CypherParser.SP);
				this.state = 397;
				this.oC_Set();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 398;
				this.match(CypherParser.ON);
				this.state = 399;
				this.match(CypherParser.SP);
				this.state = 400;
				this.match(CypherParser.CREATE);
				this.state = 401;
				this.match(CypherParser.SP);
				this.state = 402;
				this.oC_Set();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Create(): OC_CreateContext {
		let _localctx: OC_CreateContext = new OC_CreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CypherParser.RULE_oC_Create);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.match(CypherParser.CREATE);
			this.state = 407;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 406;
				this.match(CypherParser.SP);
				}
			}

			this.state = 409;
			this.oC_Pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Set(): OC_SetContext {
		let _localctx: OC_SetContext = new OC_SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CypherParser.RULE_oC_Set);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.match(CypherParser.SET);
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 412;
				this.match(CypherParser.SP);
				}
			}

			this.state = 415;
			this.oC_SetItem();
			this.state = 426;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 417;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 416;
						this.match(CypherParser.SP);
						}
					}

					this.state = 419;
					this.match(CypherParser.T__1);
					this.state = 421;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 420;
						this.match(CypherParser.SP);
						}
					}

					this.state = 423;
					this.oC_SetItem();
					}
					}
				}
				this.state = 428;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_SetItem(): OC_SetItemContext {
		let _localctx: OC_SetItemContext = new OC_SetItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CypherParser.RULE_oC_SetItem);
		let _la: number;
		try {
			this.state = 465;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 429;
				this.oC_PropertyExpression();
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 430;
					this.match(CypherParser.SP);
					}
				}

				this.state = 433;
				this.match(CypherParser.T__2);
				this.state = 435;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 434;
					this.match(CypherParser.SP);
					}
				}

				this.state = 437;
				this.oC_Expression();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 439;
				this.oC_Variable();
				this.state = 441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 440;
					this.match(CypherParser.SP);
					}
				}

				this.state = 443;
				this.match(CypherParser.T__2);
				this.state = 445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 444;
					this.match(CypherParser.SP);
					}
				}

				this.state = 447;
				this.oC_Expression();
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 449;
				this.oC_Variable();
				this.state = 451;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 450;
					this.match(CypherParser.SP);
					}
				}

				this.state = 453;
				this.match(CypherParser.T__3);
				this.state = 455;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 454;
					this.match(CypherParser.SP);
					}
				}

				this.state = 457;
				this.oC_Expression();
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 459;
				this.oC_Variable();
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 460;
					this.match(CypherParser.SP);
					}
				}

				this.state = 463;
				this.oC_NodeLabels();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Delete(): OC_DeleteContext {
		let _localctx: OC_DeleteContext = new OC_DeleteContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CypherParser.RULE_oC_Delete);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.DETACH) {
				{
				this.state = 467;
				this.match(CypherParser.DETACH);
				this.state = 468;
				this.match(CypherParser.SP);
				}
			}

			this.state = 471;
			this.match(CypherParser.DELETE);
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 472;
				this.match(CypherParser.SP);
				}
			}

			this.state = 475;
			this.oC_Expression();
			this.state = 486;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 477;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 476;
						this.match(CypherParser.SP);
						}
					}

					this.state = 479;
					this.match(CypherParser.T__1);
					this.state = 481;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 480;
						this.match(CypherParser.SP);
						}
					}

					this.state = 483;
					this.oC_Expression();
					}
					}
				}
				this.state = 488;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Remove(): OC_RemoveContext {
		let _localctx: OC_RemoveContext = new OC_RemoveContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CypherParser.RULE_oC_Remove);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(CypherParser.REMOVE);
			this.state = 490;
			this.match(CypherParser.SP);
			this.state = 491;
			this.oC_RemoveItem();
			this.state = 502;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 493;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 492;
						this.match(CypherParser.SP);
						}
					}

					this.state = 495;
					this.match(CypherParser.T__1);
					this.state = 497;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 496;
						this.match(CypherParser.SP);
						}
					}

					this.state = 499;
					this.oC_RemoveItem();
					}
					}
				}
				this.state = 504;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 64, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RemoveItem(): OC_RemoveItemContext {
		let _localctx: OC_RemoveItemContext = new OC_RemoveItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CypherParser.RULE_oC_RemoveItem);
		try {
			this.state = 509;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 505;
				this.oC_Variable();
				this.state = 506;
				this.oC_NodeLabels();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 508;
				this.oC_PropertyExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_InQueryCall(): OC_InQueryCallContext {
		let _localctx: OC_InQueryCallContext = new OC_InQueryCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CypherParser.RULE_oC_InQueryCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(CypherParser.CALL);
			this.state = 512;
			this.match(CypherParser.SP);
			this.state = 513;
			this.oC_ExplicitProcedureInvocation();
			this.state = 520;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 514;
					this.match(CypherParser.SP);
					}
				}

				this.state = 517;
				this.match(CypherParser.YIELD);
				this.state = 518;
				this.match(CypherParser.SP);
				this.state = 519;
				this.oC_YieldItems();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_StandaloneCall(): OC_StandaloneCallContext {
		let _localctx: OC_StandaloneCallContext = new OC_StandaloneCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CypherParser.RULE_oC_StandaloneCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this.match(CypherParser.CALL);
			this.state = 523;
			this.match(CypherParser.SP);
			this.state = 526;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				{
				this.state = 524;
				this.oC_ExplicitProcedureInvocation();
				}
				break;

			case 2:
				{
				this.state = 525;
				this.oC_ImplicitProcedureInvocation();
				}
				break;
			}
			this.state = 537;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 528;
					this.match(CypherParser.SP);
					}
				}

				this.state = 531;
				this.match(CypherParser.YIELD);
				this.state = 532;
				this.match(CypherParser.SP);
				this.state = 535;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CypherParser.T__4:
					{
					this.state = 533;
					this.match(CypherParser.T__4);
					}
					break;
				case CypherParser.COUNT:
				case CypherParser.ANY:
				case CypherParser.NONE:
				case CypherParser.SINGLE:
				case CypherParser.HexLetter:
				case CypherParser.FILTER:
				case CypherParser.EXTRACT:
				case CypherParser.UnescapedSymbolicName:
				case CypherParser.EscapedSymbolicName:
					{
					this.state = 534;
					this.oC_YieldItems();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_YieldItems(): OC_YieldItemsContext {
		let _localctx: OC_YieldItemsContext = new OC_YieldItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CypherParser.RULE_oC_YieldItems);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			this.oC_YieldItem();
			this.state = 550;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 541;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 540;
						this.match(CypherParser.SP);
						}
					}

					this.state = 543;
					this.match(CypherParser.T__1);
					this.state = 545;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 544;
						this.match(CypherParser.SP);
						}
					}

					this.state = 547;
					this.oC_YieldItem();
					}
					}
				}
				this.state = 552;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 74, this._ctx);
			}
			this.state = 557;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 553;
					this.match(CypherParser.SP);
					}
				}

				this.state = 556;
				this.oC_Where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_YieldItem(): OC_YieldItemContext {
		let _localctx: OC_YieldItemContext = new OC_YieldItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CypherParser.RULE_oC_YieldItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 559;
				this.oC_ProcedureResultField();
				this.state = 560;
				this.match(CypherParser.SP);
				this.state = 561;
				this.match(CypherParser.AS);
				this.state = 562;
				this.match(CypherParser.SP);
				}
				break;
			}
			this.state = 566;
			this.oC_Variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_With(): OC_WithContext {
		let _localctx: OC_WithContext = new OC_WithContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CypherParser.RULE_oC_With);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 568;
			this.match(CypherParser.WITH);
			this.state = 569;
			this.oC_ProjectionBody();
			this.state = 574;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 570;
					this.match(CypherParser.SP);
					}
				}

				this.state = 573;
				this.oC_Where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Return(): OC_ReturnContext {
		let _localctx: OC_ReturnContext = new OC_ReturnContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CypherParser.RULE_oC_Return);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 576;
			this.match(CypherParser.RETURN);
			this.state = 577;
			this.oC_ProjectionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ProjectionBody(): OC_ProjectionBodyContext {
		let _localctx: OC_ProjectionBodyContext = new OC_ProjectionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CypherParser.RULE_oC_ProjectionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				{
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 579;
					this.match(CypherParser.SP);
					}
				}

				this.state = 582;
				this.match(CypherParser.DISTINCT);
				}
				break;
			}
			this.state = 585;
			this.match(CypherParser.SP);
			this.state = 586;
			this.oC_ProjectionItems();
			this.state = 589;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 587;
				this.match(CypherParser.SP);
				this.state = 588;
				this.oC_Order();
				}
				break;
			}
			this.state = 593;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 591;
				this.match(CypherParser.SP);
				this.state = 592;
				this.oC_Skip();
				}
				break;
			}
			this.state = 597;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 595;
				this.match(CypherParser.SP);
				this.state = 596;
				this.oC_Limit();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ProjectionItems(): OC_ProjectionItemsContext {
		let _localctx: OC_ProjectionItemsContext = new OC_ProjectionItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CypherParser.RULE_oC_ProjectionItems);
		let _la: number;
		try {
			let _alt: number;
			this.state = 627;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.T__4:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 599;
				this.match(CypherParser.T__4);
				this.state = 610;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 601;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 600;
							this.match(CypherParser.SP);
							}
						}

						this.state = 603;
						this.match(CypherParser.T__1);
						this.state = 605;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 604;
							this.match(CypherParser.SP);
							}
						}

						this.state = 607;
						this.oC_ProjectionItem();
						}
						}
					}
					this.state = 612;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
				}
				}
				}
				break;
			case CypherParser.T__5:
			case CypherParser.T__7:
			case CypherParser.T__12:
			case CypherParser.T__13:
			case CypherParser.T__22:
			case CypherParser.T__25:
			case CypherParser.ALL:
			case CypherParser.NOT:
			case CypherParser.NULL:
			case CypherParser.COUNT:
			case CypherParser.ANY:
			case CypherParser.NONE:
			case CypherParser.SINGLE:
			case CypherParser.TRUE:
			case CypherParser.FALSE:
			case CypherParser.EXISTS:
			case CypherParser.CASE:
			case CypherParser.StringLiteral:
			case CypherParser.HexInteger:
			case CypherParser.DecimalInteger:
			case CypherParser.OctalInteger:
			case CypherParser.HexLetter:
			case CypherParser.ExponentDecimalReal:
			case CypherParser.RegularDecimalReal:
			case CypherParser.FILTER:
			case CypherParser.EXTRACT:
			case CypherParser.UnescapedSymbolicName:
			case CypherParser.EscapedSymbolicName:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 613;
				this.oC_ProjectionItem();
				this.state = 624;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 615;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 614;
							this.match(CypherParser.SP);
							}
						}

						this.state = 617;
						this.match(CypherParser.T__1);
						this.state = 619;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 618;
							this.match(CypherParser.SP);
							}
						}

						this.state = 621;
						this.oC_ProjectionItem();
						}
						}
					}
					this.state = 626;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ProjectionItem(): OC_ProjectionItemContext {
		let _localctx: OC_ProjectionItemContext = new OC_ProjectionItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CypherParser.RULE_oC_ProjectionItem);
		try {
			this.state = 636;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 629;
				this.oC_Expression();
				this.state = 630;
				this.match(CypherParser.SP);
				this.state = 631;
				this.match(CypherParser.AS);
				this.state = 632;
				this.match(CypherParser.SP);
				this.state = 633;
				this.oC_Variable();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 635;
				this.oC_Expression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Order(): OC_OrderContext {
		let _localctx: OC_OrderContext = new OC_OrderContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CypherParser.RULE_oC_Order);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this.match(CypherParser.ORDER);
			this.state = 639;
			this.match(CypherParser.SP);
			this.state = 640;
			this.match(CypherParser.BY);
			this.state = 641;
			this.match(CypherParser.SP);
			this.state = 642;
			this.oC_SortItem();
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__1) {
				{
				{
				this.state = 643;
				this.match(CypherParser.T__1);
				this.state = 645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 644;
					this.match(CypherParser.SP);
					}
				}

				this.state = 647;
				this.oC_SortItem();
				}
				}
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Skip(): OC_SkipContext {
		let _localctx: OC_SkipContext = new OC_SkipContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CypherParser.RULE_oC_Skip);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this.match(CypherParser.L_SKIP);
			this.state = 654;
			this.match(CypherParser.SP);
			this.state = 655;
			this.oC_Expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Limit(): OC_LimitContext {
		let _localctx: OC_LimitContext = new OC_LimitContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CypherParser.RULE_oC_Limit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 657;
			this.match(CypherParser.LIMIT);
			this.state = 658;
			this.match(CypherParser.SP);
			this.state = 659;
			this.oC_Expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_SortItem(): OC_SortItemContext {
		let _localctx: OC_SortItemContext = new OC_SortItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CypherParser.RULE_oC_SortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.oC_Expression();
			this.state = 666;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 663;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 662;
					this.match(CypherParser.SP);
					}
				}

				this.state = 665;
				_la = this._input.LA(1);
				if (!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CypherParser.ASCENDING - 68)) | (1 << (CypherParser.ASC - 68)) | (1 << (CypherParser.DESCENDING - 68)) | (1 << (CypherParser.DESC - 68)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Where(): OC_WhereContext {
		let _localctx: OC_WhereContext = new OC_WhereContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CypherParser.RULE_oC_Where);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			this.match(CypherParser.WHERE);
			this.state = 669;
			this.match(CypherParser.SP);
			this.state = 670;
			this.oC_Expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Pattern(): OC_PatternContext {
		let _localctx: OC_PatternContext = new OC_PatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CypherParser.RULE_oC_Pattern);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this.oC_PatternPart();
			this.state = 683;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 674;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 673;
						this.match(CypherParser.SP);
						}
					}

					this.state = 676;
					this.match(CypherParser.T__1);
					this.state = 678;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 677;
						this.match(CypherParser.SP);
						}
					}

					this.state = 680;
					this.oC_PatternPart();
					}
					}
				}
				this.state = 685;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PatternPart(): OC_PatternPartContext {
		let _localctx: OC_PatternPartContext = new OC_PatternPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CypherParser.RULE_oC_PatternPart);
		let _la: number;
		try {
			this.state = 697;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.COUNT:
			case CypherParser.ANY:
			case CypherParser.NONE:
			case CypherParser.SINGLE:
			case CypherParser.HexLetter:
			case CypherParser.FILTER:
			case CypherParser.EXTRACT:
			case CypherParser.UnescapedSymbolicName:
			case CypherParser.EscapedSymbolicName:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 686;
				this.oC_Variable();
				this.state = 688;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 687;
					this.match(CypherParser.SP);
					}
				}

				this.state = 690;
				this.match(CypherParser.T__2);
				this.state = 692;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 691;
					this.match(CypherParser.SP);
					}
				}

				this.state = 694;
				this.oC_AnonymousPatternPart();
				}
				}
				break;
			case CypherParser.T__5:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 696;
				this.oC_AnonymousPatternPart();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_AnonymousPatternPart(): OC_AnonymousPatternPartContext {
		let _localctx: OC_AnonymousPatternPartContext = new OC_AnonymousPatternPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CypherParser.RULE_oC_AnonymousPatternPart);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 699;
			this.oC_PatternElement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PatternElement(): OC_PatternElementContext {
		let _localctx: OC_PatternElementContext = new OC_PatternElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CypherParser.RULE_oC_PatternElement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 715;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 701;
				this.oC_NodePattern();
				this.state = 708;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 703;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 702;
							this.match(CypherParser.SP);
							}
						}

						this.state = 705;
						this.oC_PatternElementChain();
						}
						}
					}
					this.state = 710;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 104, this._ctx);
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 711;
				this.match(CypherParser.T__5);
				this.state = 712;
				this.oC_PatternElement();
				this.state = 713;
				this.match(CypherParser.T__6);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_NodePattern(): OC_NodePatternContext {
		let _localctx: OC_NodePatternContext = new OC_NodePatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CypherParser.RULE_oC_NodePattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 717;
			this.match(CypherParser.T__5);
			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 718;
				this.match(CypherParser.SP);
				}
			}

			this.state = 725;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (CypherParser.COUNT - 83)) | (1 << (CypherParser.ANY - 83)) | (1 << (CypherParser.NONE - 83)) | (1 << (CypherParser.SINGLE - 83)) | (1 << (CypherParser.HexLetter - 83)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CypherParser.FILTER - 119)) | (1 << (CypherParser.EXTRACT - 119)) | (1 << (CypherParser.UnescapedSymbolicName - 119)) | (1 << (CypherParser.EscapedSymbolicName - 119)))) !== 0)) {
				{
				this.state = 721;
				this.oC_Variable();
				this.state = 723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 722;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 731;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__9) {
				{
				this.state = 727;
				this.oC_NodeLabels();
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 728;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 737;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__22 || _la === CypherParser.T__25) {
				{
				this.state = 733;
				this.oC_Properties();
				this.state = 735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 734;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 739;
			this.match(CypherParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PatternElementChain(): OC_PatternElementChainContext {
		let _localctx: OC_PatternElementChainContext = new OC_PatternElementChainContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CypherParser.RULE_oC_PatternElementChain);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this.oC_RelationshipPattern();
			this.state = 743;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 742;
				this.match(CypherParser.SP);
				}
			}

			this.state = 745;
			this.oC_NodePattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RelationshipPattern(): OC_RelationshipPatternContext {
		let _localctx: OC_RelationshipPatternContext = new OC_RelationshipPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CypherParser.RULE_oC_RelationshipPattern);
		let _la: number;
		try {
			this.state = 811;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 747;
				this.oC_LeftArrowHead();
				this.state = 749;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 748;
					this.match(CypherParser.SP);
					}
				}

				this.state = 751;
				this.oC_Dash();
				this.state = 753;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
				case 1:
					{
					this.state = 752;
					this.match(CypherParser.SP);
					}
					break;
				}
				this.state = 756;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.T__7) {
					{
					this.state = 755;
					this.oC_RelationshipDetail();
					}
				}

				this.state = 759;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 758;
					this.match(CypherParser.SP);
					}
				}

				this.state = 761;
				this.oC_Dash();
				this.state = 763;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 762;
					this.match(CypherParser.SP);
					}
				}

				this.state = 765;
				this.oC_RightArrowHead();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 767;
				this.oC_LeftArrowHead();
				this.state = 769;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 768;
					this.match(CypherParser.SP);
					}
				}

				this.state = 771;
				this.oC_Dash();
				this.state = 773;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
				case 1:
					{
					this.state = 772;
					this.match(CypherParser.SP);
					}
					break;
				}
				this.state = 776;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.T__7) {
					{
					this.state = 775;
					this.oC_RelationshipDetail();
					}
				}

				this.state = 779;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 778;
					this.match(CypherParser.SP);
					}
				}

				this.state = 781;
				this.oC_Dash();
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 783;
				this.oC_Dash();
				this.state = 785;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
				case 1:
					{
					this.state = 784;
					this.match(CypherParser.SP);
					}
					break;
				}
				this.state = 788;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.T__7) {
					{
					this.state = 787;
					this.oC_RelationshipDetail();
					}
				}

				this.state = 791;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 790;
					this.match(CypherParser.SP);
					}
				}

				this.state = 793;
				this.oC_Dash();
				this.state = 795;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 794;
					this.match(CypherParser.SP);
					}
				}

				this.state = 797;
				this.oC_RightArrowHead();
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 799;
				this.oC_Dash();
				this.state = 801;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 127, this._ctx) ) {
				case 1:
					{
					this.state = 800;
					this.match(CypherParser.SP);
					}
					break;
				}
				this.state = 804;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.T__7) {
					{
					this.state = 803;
					this.oC_RelationshipDetail();
					}
				}

				this.state = 807;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 806;
					this.match(CypherParser.SP);
					}
				}

				this.state = 809;
				this.oC_Dash();
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RelationshipDetail(): OC_RelationshipDetailContext {
		let _localctx: OC_RelationshipDetailContext = new OC_RelationshipDetailContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CypherParser.RULE_oC_RelationshipDetail);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 813;
			this.match(CypherParser.T__7);
			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 814;
				this.match(CypherParser.SP);
				}
			}

			this.state = 821;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (CypherParser.COUNT - 83)) | (1 << (CypherParser.ANY - 83)) | (1 << (CypherParser.NONE - 83)) | (1 << (CypherParser.SINGLE - 83)) | (1 << (CypherParser.HexLetter - 83)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CypherParser.FILTER - 119)) | (1 << (CypherParser.EXTRACT - 119)) | (1 << (CypherParser.UnescapedSymbolicName - 119)) | (1 << (CypherParser.EscapedSymbolicName - 119)))) !== 0)) {
				{
				this.state = 817;
				this.oC_Variable();
				this.state = 819;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 818;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 827;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__9) {
				{
				this.state = 823;
				this.oC_RelationshipTypes();
				this.state = 825;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 824;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__4) {
				{
				this.state = 829;
				this.oC_RangeLiteral();
				}
			}

			this.state = 836;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__22 || _la === CypherParser.T__25) {
				{
				this.state = 832;
				this.oC_Properties();
				this.state = 834;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 833;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 838;
			this.match(CypherParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Properties(): OC_PropertiesContext {
		let _localctx: OC_PropertiesContext = new OC_PropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CypherParser.RULE_oC_Properties);
		try {
			this.state = 842;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.T__22:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 840;
				this.oC_MapLiteral();
				}
				break;
			case CypherParser.T__25:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 841;
				this.oC_Parameter();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RelationshipTypes(): OC_RelationshipTypesContext {
		let _localctx: OC_RelationshipTypesContext = new OC_RelationshipTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CypherParser.RULE_oC_RelationshipTypes);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 844;
			this.match(CypherParser.T__9);
			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 845;
				this.match(CypherParser.SP);
				}
			}

			this.state = 848;
			this.oC_RelTypeName();
			this.state = 862;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 850;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 849;
						this.match(CypherParser.SP);
						}
					}

					this.state = 852;
					this.match(CypherParser.T__10);
					this.state = 854;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.T__9) {
						{
						this.state = 853;
						this.match(CypherParser.T__9);
						}
					}

					this.state = 857;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 856;
						this.match(CypherParser.SP);
						}
					}

					this.state = 859;
					this.oC_RelTypeName();
					}
					}
				}
				this.state = 864;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 144, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_NodeLabels(): OC_NodeLabelsContext {
		let _localctx: OC_NodeLabelsContext = new OC_NodeLabelsContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CypherParser.RULE_oC_NodeLabels);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 865;
			this.oC_NodeLabel();
			this.state = 872;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 867;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 866;
						this.match(CypherParser.SP);
						}
					}

					this.state = 869;
					this.oC_NodeLabel();
					}
					}
				}
				this.state = 874;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 146, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_NodeLabel(): OC_NodeLabelContext {
		let _localctx: OC_NodeLabelContext = new OC_NodeLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CypherParser.RULE_oC_NodeLabel);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 875;
			this.match(CypherParser.T__9);
			this.state = 877;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 876;
				this.match(CypherParser.SP);
				}
			}

			this.state = 879;
			this.oC_LabelName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RangeLiteral(): OC_RangeLiteralContext {
		let _localctx: OC_RangeLiteralContext = new OC_RangeLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CypherParser.RULE_oC_RangeLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 881;
			this.match(CypherParser.T__4);
			this.state = 883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 882;
				this.match(CypherParser.SP);
				}
			}

			this.state = 889;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CypherParser.HexInteger - 97)) | (1 << (CypherParser.DecimalInteger - 97)) | (1 << (CypherParser.OctalInteger - 97)))) !== 0)) {
				{
				this.state = 885;
				this.oC_IntegerLiteral();
				this.state = 887;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 886;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 901;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__11) {
				{
				this.state = 891;
				this.match(CypherParser.T__11);
				this.state = 893;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 892;
					this.match(CypherParser.SP);
					}
				}

				this.state = 899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CypherParser.HexInteger - 97)) | (1 << (CypherParser.DecimalInteger - 97)) | (1 << (CypherParser.OctalInteger - 97)))) !== 0)) {
					{
					this.state = 895;
					this.oC_IntegerLiteral();
					this.state = 897;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 896;
						this.match(CypherParser.SP);
						}
					}

					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_LabelName(): OC_LabelNameContext {
		let _localctx: OC_LabelNameContext = new OC_LabelNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CypherParser.RULE_oC_LabelName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 903;
			this.oC_SchemaName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RelTypeName(): OC_RelTypeNameContext {
		let _localctx: OC_RelTypeNameContext = new OC_RelTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CypherParser.RULE_oC_RelTypeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 905;
			this.oC_SchemaName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Expression(): OC_ExpressionContext {
		let _localctx: OC_ExpressionContext = new OC_ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CypherParser.RULE_oC_Expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 907;
			this.oC_OrExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_OrExpression(): OC_OrExpressionContext {
		let _localctx: OC_OrExpressionContext = new OC_OrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CypherParser.RULE_oC_OrExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 909;
			this.oC_XorExpression();
			this.state = 916;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 910;
					this.match(CypherParser.SP);
					this.state = 911;
					this.match(CypherParser.OR);
					this.state = 912;
					this.match(CypherParser.SP);
					this.state = 913;
					this.oC_XorExpression();
					}
					}
				}
				this.state = 918;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 155, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_XorExpression(): OC_XorExpressionContext {
		let _localctx: OC_XorExpressionContext = new OC_XorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CypherParser.RULE_oC_XorExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 919;
			this.oC_AndExpression();
			this.state = 926;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 920;
					this.match(CypherParser.SP);
					this.state = 921;
					this.match(CypherParser.XOR);
					this.state = 922;
					this.match(CypherParser.SP);
					this.state = 923;
					this.oC_AndExpression();
					}
					}
				}
				this.state = 928;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_AndExpression(): OC_AndExpressionContext {
		let _localctx: OC_AndExpressionContext = new OC_AndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CypherParser.RULE_oC_AndExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 929;
			this.oC_NotExpression();
			this.state = 936;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 930;
					this.match(CypherParser.SP);
					this.state = 931;
					this.match(CypherParser.AND);
					this.state = 932;
					this.match(CypherParser.SP);
					this.state = 933;
					this.oC_NotExpression();
					}
					}
				}
				this.state = 938;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_NotExpression(): OC_NotExpressionContext {
		let _localctx: OC_NotExpressionContext = new OC_NotExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CypherParser.RULE_oC_NotExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 945;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.NOT) {
				{
				{
				this.state = 939;
				this.match(CypherParser.NOT);
				this.state = 941;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 940;
					this.match(CypherParser.SP);
					}
				}

				}
				}
				this.state = 947;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 948;
			this.oC_ComparisonExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ComparisonExpression(): OC_ComparisonExpressionContext {
		let _localctx: OC_ComparisonExpressionContext = new OC_ComparisonExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CypherParser.RULE_oC_ComparisonExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			this.oC_AddOrSubtractExpression();
			this.state = 957;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 952;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 951;
						this.match(CypherParser.SP);
						}
					}

					this.state = 954;
					this.oC_PartialComparisonExpression();
					}
					}
				}
				this.state = 959;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 161, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext {
		let _localctx: OC_AddOrSubtractExpressionContext = new OC_AddOrSubtractExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CypherParser.RULE_oC_AddOrSubtractExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 960;
			this.oC_MultiplyDivideModuloExpression();
			this.state = 979;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 977;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
					case 1:
						{
						{
						this.state = 962;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 961;
							this.match(CypherParser.SP);
							}
						}

						this.state = 964;
						this.match(CypherParser.T__12);
						this.state = 966;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 965;
							this.match(CypherParser.SP);
							}
						}

						this.state = 968;
						this.oC_MultiplyDivideModuloExpression();
						}
						}
						break;

					case 2:
						{
						{
						this.state = 970;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 969;
							this.match(CypherParser.SP);
							}
						}

						this.state = 972;
						this.match(CypherParser.T__13);
						this.state = 974;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 973;
							this.match(CypherParser.SP);
							}
						}

						this.state = 976;
						this.oC_MultiplyDivideModuloExpression();
						}
						}
						break;
					}
					}
				}
				this.state = 981;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_MultiplyDivideModuloExpression(): OC_MultiplyDivideModuloExpressionContext {
		let _localctx: OC_MultiplyDivideModuloExpressionContext = new OC_MultiplyDivideModuloExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 982;
			this.oC_PowerOfExpression();
			this.state = 1009;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1007;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
					case 1:
						{
						{
						this.state = 984;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 983;
							this.match(CypherParser.SP);
							}
						}

						this.state = 986;
						this.match(CypherParser.T__4);
						this.state = 988;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 987;
							this.match(CypherParser.SP);
							}
						}

						this.state = 990;
						this.oC_PowerOfExpression();
						}
						}
						break;

					case 2:
						{
						{
						this.state = 992;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 991;
							this.match(CypherParser.SP);
							}
						}

						this.state = 994;
						this.match(CypherParser.T__14);
						this.state = 996;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 995;
							this.match(CypherParser.SP);
							}
						}

						this.state = 998;
						this.oC_PowerOfExpression();
						}
						}
						break;

					case 3:
						{
						{
						this.state = 1000;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 999;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1002;
						this.match(CypherParser.T__15);
						this.state = 1004;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 1003;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1006;
						this.oC_PowerOfExpression();
						}
						}
						break;
					}
					}
				}
				this.state = 1011;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 175, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PowerOfExpression(): OC_PowerOfExpressionContext {
		let _localctx: OC_PowerOfExpressionContext = new OC_PowerOfExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CypherParser.RULE_oC_PowerOfExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1012;
			this.oC_UnaryAddOrSubtractExpression();
			this.state = 1023;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1014;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1013;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1016;
					this.match(CypherParser.T__16);
					this.state = 1018;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1017;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1020;
					this.oC_UnaryAddOrSubtractExpression();
					}
					}
				}
				this.state = 1025;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_UnaryAddOrSubtractExpression(): OC_UnaryAddOrSubtractExpressionContext {
		let _localctx: OC_UnaryAddOrSubtractExpressionContext = new OC_UnaryAddOrSubtractExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CypherParser.RULE_oC_UnaryAddOrSubtractExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1032;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__12 || _la === CypherParser.T__13) {
				{
				{
				this.state = 1026;
				_la = this._input.LA(1);
				if (!(_la === CypherParser.T__12 || _la === CypherParser.T__13)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1027;
					this.match(CypherParser.SP);
					}
				}

				}
				}
				this.state = 1034;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1035;
			this.oC_StringListNullOperatorExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_StringListNullOperatorExpression(): OC_StringListNullOperatorExpressionContext {
		let _localctx: OC_StringListNullOperatorExpressionContext = new OC_StringListNullOperatorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CypherParser.RULE_oC_StringListNullOperatorExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1037;
			this.oC_PropertyOrLabelsExpression();
			this.state = 1043;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1041;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
					case 1:
						{
						this.state = 1038;
						this.oC_StringOperatorExpression();
						}
						break;

					case 2:
						{
						this.state = 1039;
						this.oC_ListOperatorExpression();
						}
						break;

					case 3:
						{
						this.state = 1040;
						this.oC_NullOperatorExpression();
						}
						break;
					}
					}
				}
				this.state = 1045;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 182, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ListOperatorExpression(): OC_ListOperatorExpressionContext {
		let _localctx: OC_ListOperatorExpressionContext = new OC_ListOperatorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CypherParser.RULE_oC_ListOperatorExpression);
		let _la: number;
		try {
			this.state = 1071;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 188, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1046;
				this.match(CypherParser.SP);
				this.state = 1047;
				this.match(CypherParser.IN);
				this.state = 1049;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1048;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1051;
				this.oC_PropertyOrLabelsExpression();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1053;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1052;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1055;
				this.match(CypherParser.T__7);
				this.state = 1056;
				this.oC_Expression();
				this.state = 1057;
				this.match(CypherParser.T__8);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1060;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1059;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1062;
				this.match(CypherParser.T__7);
				this.state = 1064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.T__5) | (1 << CypherParser.T__7) | (1 << CypherParser.T__12) | (1 << CypherParser.T__13) | (1 << CypherParser.T__22) | (1 << CypherParser.T__25))) !== 0) || _la === CypherParser.ALL || _la === CypherParser.NOT || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (CypherParser.NULL - 82)) | (1 << (CypherParser.COUNT - 82)) | (1 << (CypherParser.ANY - 82)) | (1 << (CypherParser.NONE - 82)) | (1 << (CypherParser.SINGLE - 82)) | (1 << (CypherParser.TRUE - 82)) | (1 << (CypherParser.FALSE - 82)) | (1 << (CypherParser.EXISTS - 82)) | (1 << (CypherParser.CASE - 82)) | (1 << (CypherParser.StringLiteral - 82)) | (1 << (CypherParser.HexInteger - 82)) | (1 << (CypherParser.DecimalInteger - 82)) | (1 << (CypherParser.OctalInteger - 82)) | (1 << (CypherParser.HexLetter - 82)) | (1 << (CypherParser.ExponentDecimalReal - 82)) | (1 << (CypherParser.RegularDecimalReal - 82)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CypherParser.FILTER - 119)) | (1 << (CypherParser.EXTRACT - 119)) | (1 << (CypherParser.UnescapedSymbolicName - 119)) | (1 << (CypherParser.EscapedSymbolicName - 119)))) !== 0)) {
					{
					this.state = 1063;
					this.oC_Expression();
					}
				}

				this.state = 1066;
				this.match(CypherParser.T__11);
				this.state = 1068;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.T__5) | (1 << CypherParser.T__7) | (1 << CypherParser.T__12) | (1 << CypherParser.T__13) | (1 << CypherParser.T__22) | (1 << CypherParser.T__25))) !== 0) || _la === CypherParser.ALL || _la === CypherParser.NOT || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (CypherParser.NULL - 82)) | (1 << (CypherParser.COUNT - 82)) | (1 << (CypherParser.ANY - 82)) | (1 << (CypherParser.NONE - 82)) | (1 << (CypherParser.SINGLE - 82)) | (1 << (CypherParser.TRUE - 82)) | (1 << (CypherParser.FALSE - 82)) | (1 << (CypherParser.EXISTS - 82)) | (1 << (CypherParser.CASE - 82)) | (1 << (CypherParser.StringLiteral - 82)) | (1 << (CypherParser.HexInteger - 82)) | (1 << (CypherParser.DecimalInteger - 82)) | (1 << (CypherParser.OctalInteger - 82)) | (1 << (CypherParser.HexLetter - 82)) | (1 << (CypherParser.ExponentDecimalReal - 82)) | (1 << (CypherParser.RegularDecimalReal - 82)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CypherParser.FILTER - 119)) | (1 << (CypherParser.EXTRACT - 119)) | (1 << (CypherParser.UnescapedSymbolicName - 119)) | (1 << (CypherParser.EscapedSymbolicName - 119)))) !== 0)) {
					{
					this.state = 1067;
					this.oC_Expression();
					}
				}

				this.state = 1070;
				this.match(CypherParser.T__8);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_StringOperatorExpression(): OC_StringOperatorExpressionContext {
		let _localctx: OC_StringOperatorExpressionContext = new OC_StringOperatorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CypherParser.RULE_oC_StringOperatorExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1083;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1073;
				this.match(CypherParser.SP);
				this.state = 1074;
				this.match(CypherParser.STARTS);
				this.state = 1075;
				this.match(CypherParser.SP);
				this.state = 1076;
				this.match(CypherParser.WITH);
				}
				}
				break;

			case 2:
				{
				{
				this.state = 1077;
				this.match(CypherParser.SP);
				this.state = 1078;
				this.match(CypherParser.ENDS);
				this.state = 1079;
				this.match(CypherParser.SP);
				this.state = 1080;
				this.match(CypherParser.WITH);
				}
				}
				break;

			case 3:
				{
				{
				this.state = 1081;
				this.match(CypherParser.SP);
				this.state = 1082;
				this.match(CypherParser.CONTAINS);
				}
				}
				break;
			}
			this.state = 1086;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1085;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1088;
			this.oC_PropertyOrLabelsExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_NullOperatorExpression(): OC_NullOperatorExpressionContext {
		let _localctx: OC_NullOperatorExpressionContext = new OC_NullOperatorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CypherParser.RULE_oC_NullOperatorExpression);
		try {
			this.state = 1100;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 191, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1090;
				this.match(CypherParser.SP);
				this.state = 1091;
				this.match(CypherParser.IS);
				this.state = 1092;
				this.match(CypherParser.SP);
				this.state = 1093;
				this.match(CypherParser.NULL);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1094;
				this.match(CypherParser.SP);
				this.state = 1095;
				this.match(CypherParser.IS);
				this.state = 1096;
				this.match(CypherParser.SP);
				this.state = 1097;
				this.match(CypherParser.NOT);
				this.state = 1098;
				this.match(CypherParser.SP);
				this.state = 1099;
				this.match(CypherParser.NULL);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
		let _localctx: OC_PropertyOrLabelsExpressionContext = new OC_PropertyOrLabelsExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CypherParser.RULE_oC_PropertyOrLabelsExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1102;
			this.oC_Atom();
			this.state = 1109;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1104;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1103;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1106;
					this.oC_PropertyLookup();
					}
					}
				}
				this.state = 1111;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
			}
			this.state = 1116;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				{
				this.state = 1113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1112;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1115;
				this.oC_NodeLabels();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Atom(): OC_AtomContext {
		let _localctx: OC_AtomContext = new OC_AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CypherParser.RULE_oC_Atom);
		let _la: number;
		try {
			this.state = 1197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1118;
				this.oC_Literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1119;
				this.oC_Parameter();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1120;
				this.oC_CaseExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 1121;
				this.match(CypherParser.COUNT);
				this.state = 1123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1122;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1125;
				this.match(CypherParser.T__5);
				this.state = 1127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1126;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1129;
				this.match(CypherParser.T__4);
				this.state = 1131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1130;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1133;
				this.match(CypherParser.T__6);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1134;
				this.oC_ListComprehension();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1135;
				this.oC_PatternComprehension();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				{
				this.state = 1136;
				this.match(CypherParser.ALL);
				this.state = 1138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1137;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1140;
				this.match(CypherParser.T__5);
				this.state = 1142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1141;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1144;
				this.oC_FilterExpression();
				this.state = 1146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1145;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1148;
				this.match(CypherParser.T__6);
				}
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				{
				this.state = 1150;
				this.match(CypherParser.ANY);
				this.state = 1152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1151;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1154;
				this.match(CypherParser.T__5);
				this.state = 1156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1155;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1158;
				this.oC_FilterExpression();
				this.state = 1160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1159;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1162;
				this.match(CypherParser.T__6);
				}
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				{
				this.state = 1164;
				this.match(CypherParser.NONE);
				this.state = 1166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1165;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1168;
				this.match(CypherParser.T__5);
				this.state = 1170;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1169;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1172;
				this.oC_FilterExpression();
				this.state = 1174;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1173;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1176;
				this.match(CypherParser.T__6);
				}
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				{
				this.state = 1178;
				this.match(CypherParser.SINGLE);
				this.state = 1180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1179;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1182;
				this.match(CypherParser.T__5);
				this.state = 1184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1183;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1186;
				this.oC_FilterExpression();
				this.state = 1188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1187;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1190;
				this.match(CypherParser.T__6);
				}
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1192;
				this.oC_RelationshipsPattern();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1193;
				this.oC_ParenthesizedExpression();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1194;
				this.oC_FunctionInvocation();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1195;
				this.oC_ExistentialSubquery();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1196;
				this.oC_Variable();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Literal(): OC_LiteralContext {
		let _localctx: OC_LiteralContext = new OC_LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CypherParser.RULE_oC_Literal);
		try {
			this.state = 1205;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.HexInteger:
			case CypherParser.DecimalInteger:
			case CypherParser.OctalInteger:
			case CypherParser.ExponentDecimalReal:
			case CypherParser.RegularDecimalReal:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1199;
				this.oC_NumberLiteral();
				}
				break;
			case CypherParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1200;
				this.match(CypherParser.StringLiteral);
				}
				break;
			case CypherParser.TRUE:
			case CypherParser.FALSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1201;
				this.oC_BooleanLiteral();
				}
				break;
			case CypherParser.NULL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1202;
				this.match(CypherParser.NULL);
				}
				break;
			case CypherParser.T__22:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1203;
				this.oC_MapLiteral();
				}
				break;
			case CypherParser.T__7:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1204;
				this.oC_ListLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_BooleanLiteral(): OC_BooleanLiteralContext {
		let _localctx: OC_BooleanLiteralContext = new OC_BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CypherParser.RULE_oC_BooleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1207;
			_la = this._input.LA(1);
			if (!(_la === CypherParser.TRUE || _la === CypherParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ListLiteral(): OC_ListLiteralContext {
		let _localctx: OC_ListLiteralContext = new OC_ListLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CypherParser.RULE_oC_ListLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1209;
			this.match(CypherParser.T__7);
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1210;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.T__5) | (1 << CypherParser.T__7) | (1 << CypherParser.T__12) | (1 << CypherParser.T__13) | (1 << CypherParser.T__22) | (1 << CypherParser.T__25))) !== 0) || _la === CypherParser.ALL || _la === CypherParser.NOT || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (CypherParser.NULL - 82)) | (1 << (CypherParser.COUNT - 82)) | (1 << (CypherParser.ANY - 82)) | (1 << (CypherParser.NONE - 82)) | (1 << (CypherParser.SINGLE - 82)) | (1 << (CypherParser.TRUE - 82)) | (1 << (CypherParser.FALSE - 82)) | (1 << (CypherParser.EXISTS - 82)) | (1 << (CypherParser.CASE - 82)) | (1 << (CypherParser.StringLiteral - 82)) | (1 << (CypherParser.HexInteger - 82)) | (1 << (CypherParser.DecimalInteger - 82)) | (1 << (CypherParser.OctalInteger - 82)) | (1 << (CypherParser.HexLetter - 82)) | (1 << (CypherParser.ExponentDecimalReal - 82)) | (1 << (CypherParser.RegularDecimalReal - 82)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CypherParser.FILTER - 119)) | (1 << (CypherParser.EXTRACT - 119)) | (1 << (CypherParser.UnescapedSymbolicName - 119)) | (1 << (CypherParser.EscapedSymbolicName - 119)))) !== 0)) {
				{
				this.state = 1213;
				this.oC_Expression();
				this.state = 1215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1214;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CypherParser.T__1) {
					{
					{
					this.state = 1217;
					this.match(CypherParser.T__1);
					this.state = 1219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1218;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1221;
					this.oC_Expression();
					this.state = 1223;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1222;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 1229;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1232;
			this.match(CypherParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PartialComparisonExpression(): OC_PartialComparisonExpressionContext {
		let _localctx: OC_PartialComparisonExpressionContext = new OC_PartialComparisonExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CypherParser.RULE_oC_PartialComparisonExpression);
		let _la: number;
		try {
			this.state = 1264;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 1234;
				this.match(CypherParser.T__2);
				this.state = 1236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1235;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1238;
				this.oC_AddOrSubtractExpression();
				}
				}
				break;
			case CypherParser.T__17:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1239;
				this.match(CypherParser.T__17);
				this.state = 1241;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1240;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1243;
				this.oC_AddOrSubtractExpression();
				}
				}
				break;
			case CypherParser.T__18:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 1244;
				this.match(CypherParser.T__18);
				this.state = 1246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1245;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1248;
				this.oC_AddOrSubtractExpression();
				}
				}
				break;
			case CypherParser.T__19:
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 1249;
				this.match(CypherParser.T__19);
				this.state = 1251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1250;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1253;
				this.oC_AddOrSubtractExpression();
				}
				}
				break;
			case CypherParser.T__20:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 1254;
				this.match(CypherParser.T__20);
				this.state = 1256;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1255;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1258;
				this.oC_AddOrSubtractExpression();
				}
				}
				break;
			case CypherParser.T__21:
				this.enterOuterAlt(_localctx, 6);
				{
				{
				this.state = 1259;
				this.match(CypherParser.T__21);
				this.state = 1261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1260;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1263;
				this.oC_AddOrSubtractExpression();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ParenthesizedExpression(): OC_ParenthesizedExpressionContext {
		let _localctx: OC_ParenthesizedExpressionContext = new OC_ParenthesizedExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CypherParser.RULE_oC_ParenthesizedExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1266;
			this.match(CypherParser.T__5);
			this.state = 1268;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1267;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1270;
			this.oC_Expression();
			this.state = 1272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1271;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1274;
			this.match(CypherParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RelationshipsPattern(): OC_RelationshipsPatternContext {
		let _localctx: OC_RelationshipsPatternContext = new OC_RelationshipsPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CypherParser.RULE_oC_RelationshipsPattern);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1276;
			this.oC_NodePattern();
			this.state = 1281;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1278;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1277;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1280;
					this.oC_PatternElementChain();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1283;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 229, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_FilterExpression(): OC_FilterExpressionContext {
		let _localctx: OC_FilterExpressionContext = new OC_FilterExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CypherParser.RULE_oC_FilterExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1285;
			this.oC_IdInColl();
			this.state = 1290;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
			case 1:
				{
				this.state = 1287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1286;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1289;
				this.oC_Where();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_IdInColl(): OC_IdInCollContext {
		let _localctx: OC_IdInCollContext = new OC_IdInCollContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CypherParser.RULE_oC_IdInColl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1292;
			this.oC_Variable();
			this.state = 1293;
			this.match(CypherParser.SP);
			this.state = 1294;
			this.match(CypherParser.IN);
			this.state = 1295;
			this.match(CypherParser.SP);
			this.state = 1296;
			this.oC_Expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_FunctionInvocation(): OC_FunctionInvocationContext {
		let _localctx: OC_FunctionInvocationContext = new OC_FunctionInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CypherParser.RULE_oC_FunctionInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1298;
			this.oC_FunctionName();
			this.state = 1300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1299;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1302;
			this.match(CypherParser.T__5);
			this.state = 1304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1303;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.DISTINCT) {
				{
				this.state = 1306;
				this.match(CypherParser.DISTINCT);
				this.state = 1308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1307;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 1329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.T__5) | (1 << CypherParser.T__7) | (1 << CypherParser.T__12) | (1 << CypherParser.T__13) | (1 << CypherParser.T__22) | (1 << CypherParser.T__25))) !== 0) || _la === CypherParser.ALL || _la === CypherParser.NOT || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (CypherParser.NULL - 82)) | (1 << (CypherParser.COUNT - 82)) | (1 << (CypherParser.ANY - 82)) | (1 << (CypherParser.NONE - 82)) | (1 << (CypherParser.SINGLE - 82)) | (1 << (CypherParser.TRUE - 82)) | (1 << (CypherParser.FALSE - 82)) | (1 << (CypherParser.EXISTS - 82)) | (1 << (CypherParser.CASE - 82)) | (1 << (CypherParser.StringLiteral - 82)) | (1 << (CypherParser.HexInteger - 82)) | (1 << (CypherParser.DecimalInteger - 82)) | (1 << (CypherParser.OctalInteger - 82)) | (1 << (CypherParser.HexLetter - 82)) | (1 << (CypherParser.ExponentDecimalReal - 82)) | (1 << (CypherParser.RegularDecimalReal - 82)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CypherParser.FILTER - 119)) | (1 << (CypherParser.EXTRACT - 119)) | (1 << (CypherParser.UnescapedSymbolicName - 119)) | (1 << (CypherParser.EscapedSymbolicName - 119)))) !== 0)) {
				{
				this.state = 1312;
				this.oC_Expression();
				this.state = 1314;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1313;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CypherParser.T__1) {
					{
					{
					this.state = 1316;
					this.match(CypherParser.T__1);
					this.state = 1318;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1317;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1320;
					this.oC_Expression();
					this.state = 1322;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1321;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 1328;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1331;
			this.match(CypherParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_FunctionName(): OC_FunctionNameContext {
		let _localctx: OC_FunctionNameContext = new OC_FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CypherParser.RULE_oC_FunctionName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1333;
			this.oC_Namespace();
			this.state = 1334;
			this.oC_SymbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ExistentialSubquery(): OC_ExistentialSubqueryContext {
		let _localctx: OC_ExistentialSubqueryContext = new OC_ExistentialSubqueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CypherParser.RULE_oC_ExistentialSubquery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1336;
			this.match(CypherParser.EXISTS);
			this.state = 1338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1337;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1340;
			this.match(CypherParser.T__22);
			this.state = 1342;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1341;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1352;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.OPTIONAL:
			case CypherParser.MATCH:
			case CypherParser.UNWIND:
			case CypherParser.MERGE:
			case CypherParser.CREATE:
			case CypherParser.SET:
			case CypherParser.DETACH:
			case CypherParser.DELETE:
			case CypherParser.REMOVE:
			case CypherParser.CALL:
			case CypherParser.WITH:
			case CypherParser.RETURN:
				{
				this.state = 1344;
				this.oC_RegularQuery();
				}
				break;
			case CypherParser.T__5:
			case CypherParser.COUNT:
			case CypherParser.ANY:
			case CypherParser.NONE:
			case CypherParser.SINGLE:
			case CypherParser.HexLetter:
			case CypherParser.FILTER:
			case CypherParser.EXTRACT:
			case CypherParser.UnescapedSymbolicName:
			case CypherParser.EscapedSymbolicName:
				{
				{
				this.state = 1345;
				this.oC_Pattern();
				this.state = 1350;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 244, this._ctx) ) {
				case 1:
					{
					this.state = 1347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1346;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1349;
					this.oC_Where();
					}
					break;
				}
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1354;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1357;
			this.match(CypherParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ExplicitProcedureInvocation(): OC_ExplicitProcedureInvocationContext {
		let _localctx: OC_ExplicitProcedureInvocationContext = new OC_ExplicitProcedureInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CypherParser.RULE_oC_ExplicitProcedureInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1359;
			this.oC_ProcedureName();
			this.state = 1361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1360;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1363;
			this.match(CypherParser.T__5);
			this.state = 1365;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1364;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1384;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.T__5) | (1 << CypherParser.T__7) | (1 << CypherParser.T__12) | (1 << CypherParser.T__13) | (1 << CypherParser.T__22) | (1 << CypherParser.T__25))) !== 0) || _la === CypherParser.ALL || _la === CypherParser.NOT || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (CypherParser.NULL - 82)) | (1 << (CypherParser.COUNT - 82)) | (1 << (CypherParser.ANY - 82)) | (1 << (CypherParser.NONE - 82)) | (1 << (CypherParser.SINGLE - 82)) | (1 << (CypherParser.TRUE - 82)) | (1 << (CypherParser.FALSE - 82)) | (1 << (CypherParser.EXISTS - 82)) | (1 << (CypherParser.CASE - 82)) | (1 << (CypherParser.StringLiteral - 82)) | (1 << (CypherParser.HexInteger - 82)) | (1 << (CypherParser.DecimalInteger - 82)) | (1 << (CypherParser.OctalInteger - 82)) | (1 << (CypherParser.HexLetter - 82)) | (1 << (CypherParser.ExponentDecimalReal - 82)) | (1 << (CypherParser.RegularDecimalReal - 82)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CypherParser.FILTER - 119)) | (1 << (CypherParser.EXTRACT - 119)) | (1 << (CypherParser.UnescapedSymbolicName - 119)) | (1 << (CypherParser.EscapedSymbolicName - 119)))) !== 0)) {
				{
				this.state = 1367;
				this.oC_Expression();
				this.state = 1369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1368;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CypherParser.T__1) {
					{
					{
					this.state = 1371;
					this.match(CypherParser.T__1);
					this.state = 1373;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1372;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1375;
					this.oC_Expression();
					this.state = 1377;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1376;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 1383;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1386;
			this.match(CypherParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ImplicitProcedureInvocation(): OC_ImplicitProcedureInvocationContext {
		let _localctx: OC_ImplicitProcedureInvocationContext = new OC_ImplicitProcedureInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CypherParser.RULE_oC_ImplicitProcedureInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1388;
			this.oC_ProcedureName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ProcedureResultField(): OC_ProcedureResultFieldContext {
		let _localctx: OC_ProcedureResultFieldContext = new OC_ProcedureResultFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CypherParser.RULE_oC_ProcedureResultField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1390;
			this.oC_SymbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ProcedureName(): OC_ProcedureNameContext {
		let _localctx: OC_ProcedureNameContext = new OC_ProcedureNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CypherParser.RULE_oC_ProcedureName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1392;
			this.oC_Namespace();
			this.state = 1393;
			this.oC_SymbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Namespace(): OC_NamespaceContext {
		let _localctx: OC_NamespaceContext = new OC_NamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CypherParser.RULE_oC_Namespace);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1400;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 254, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1395;
					this.oC_SymbolicName();
					this.state = 1396;
					this.match(CypherParser.T__24);
					}
					}
				}
				this.state = 1402;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 254, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ListComprehension(): OC_ListComprehensionContext {
		let _localctx: OC_ListComprehensionContext = new OC_ListComprehensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, CypherParser.RULE_oC_ListComprehension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1403;
			this.match(CypherParser.T__7);
			this.state = 1405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1404;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1407;
			this.oC_FilterExpression();
			this.state = 1416;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 258, this._ctx) ) {
			case 1:
				{
				this.state = 1409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1408;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1411;
				this.match(CypherParser.T__10);
				this.state = 1413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1412;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1415;
				this.oC_Expression();
				}
				break;
			}
			this.state = 1419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1418;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1421;
			this.match(CypherParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PatternComprehension(): OC_PatternComprehensionContext {
		let _localctx: OC_PatternComprehensionContext = new OC_PatternComprehensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CypherParser.RULE_oC_PatternComprehension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1423;
			this.match(CypherParser.T__7);
			this.state = 1425;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1424;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (CypherParser.COUNT - 83)) | (1 << (CypherParser.ANY - 83)) | (1 << (CypherParser.NONE - 83)) | (1 << (CypherParser.SINGLE - 83)) | (1 << (CypherParser.HexLetter - 83)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CypherParser.FILTER - 119)) | (1 << (CypherParser.EXTRACT - 119)) | (1 << (CypherParser.UnescapedSymbolicName - 119)) | (1 << (CypherParser.EscapedSymbolicName - 119)))) !== 0)) {
				{
				this.state = 1427;
				this.oC_Variable();
				this.state = 1429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1428;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1431;
				this.match(CypherParser.T__2);
				this.state = 1433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1432;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 1437;
			this.oC_RelationshipsPattern();
			this.state = 1439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1438;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1445;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.WHERE) {
				{
				this.state = 1441;
				this.oC_Where();
				this.state = 1443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1442;
					this.match(CypherParser.SP);
					}
				}

				}
			}

			this.state = 1447;
			this.match(CypherParser.T__10);
			this.state = 1449;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1448;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1451;
			this.oC_Expression();
			this.state = 1453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1452;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1455;
			this.match(CypherParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PropertyLookup(): OC_PropertyLookupContext {
		let _localctx: OC_PropertyLookupContext = new OC_PropertyLookupContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, CypherParser.RULE_oC_PropertyLookup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1457;
			this.match(CypherParser.T__24);
			this.state = 1459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1458;
				this.match(CypherParser.SP);
				}
			}

			{
			this.state = 1461;
			this.oC_PropertyKeyName();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_CaseExpression(): OC_CaseExpressionContext {
		let _localctx: OC_CaseExpressionContext = new OC_CaseExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CypherParser.RULE_oC_CaseExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1485;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 275, this._ctx) ) {
			case 1:
				{
				{
				this.state = 1463;
				this.match(CypherParser.CASE);
				this.state = 1468;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1465;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 1464;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1467;
						this.oC_CaseAlternative();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1470;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 271, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				}
				break;

			case 2:
				{
				{
				this.state = 1472;
				this.match(CypherParser.CASE);
				this.state = 1474;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1473;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1476;
				this.oC_Expression();
				this.state = 1481;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1478;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === CypherParser.SP) {
							{
							this.state = 1477;
							this.match(CypherParser.SP);
							}
						}

						this.state = 1480;
						this.oC_CaseAlternative();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1483;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 274, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				}
				break;
			}
			this.state = 1495;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 278, this._ctx) ) {
			case 1:
				{
				this.state = 1488;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1487;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1490;
				this.match(CypherParser.ELSE);
				this.state = 1492;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1491;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1494;
				this.oC_Expression();
				}
				break;
			}
			this.state = 1498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1497;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1500;
			this.match(CypherParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_CaseAlternative(): OC_CaseAlternativeContext {
		let _localctx: OC_CaseAlternativeContext = new OC_CaseAlternativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CypherParser.RULE_oC_CaseAlternative);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1502;
			this.match(CypherParser.WHEN);
			this.state = 1504;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1503;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1506;
			this.oC_Expression();
			this.state = 1508;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1507;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1510;
			this.match(CypherParser.THEN);
			this.state = 1512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1511;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1514;
			this.oC_Expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Variable(): OC_VariableContext {
		let _localctx: OC_VariableContext = new OC_VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, CypherParser.RULE_oC_Variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1516;
			this.oC_SymbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_NumberLiteral(): OC_NumberLiteralContext {
		let _localctx: OC_NumberLiteralContext = new OC_NumberLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, CypherParser.RULE_oC_NumberLiteral);
		try {
			this.state = 1520;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.ExponentDecimalReal:
			case CypherParser.RegularDecimalReal:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1518;
				this.oC_DoubleLiteral();
				}
				break;
			case CypherParser.HexInteger:
			case CypherParser.DecimalInteger:
			case CypherParser.OctalInteger:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1519;
				this.oC_IntegerLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_MapLiteral(): OC_MapLiteralContext {
		let _localctx: OC_MapLiteralContext = new OC_MapLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, CypherParser.RULE_oC_MapLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1522;
			this.match(CypherParser.T__22);
			this.state = 1524;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SP) {
				{
				this.state = 1523;
				this.match(CypherParser.SP);
				}
			}

			this.state = 1559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (CypherParser.UNION - 46)) | (1 << (CypherParser.ALL - 46)) | (1 << (CypherParser.OPTIONAL - 46)) | (1 << (CypherParser.MATCH - 46)) | (1 << (CypherParser.UNWIND - 46)) | (1 << (CypherParser.AS - 46)) | (1 << (CypherParser.MERGE - 46)) | (1 << (CypherParser.ON - 46)) | (1 << (CypherParser.CREATE - 46)) | (1 << (CypherParser.SET - 46)) | (1 << (CypherParser.DETACH - 46)) | (1 << (CypherParser.DELETE - 46)) | (1 << (CypherParser.REMOVE - 46)) | (1 << (CypherParser.WITH - 46)) | (1 << (CypherParser.RETURN - 46)) | (1 << (CypherParser.DISTINCT - 46)) | (1 << (CypherParser.ORDER - 46)) | (1 << (CypherParser.BY - 46)) | (1 << (CypherParser.L_SKIP - 46)) | (1 << (CypherParser.LIMIT - 46)) | (1 << (CypherParser.ASCENDING - 46)) | (1 << (CypherParser.ASC - 46)) | (1 << (CypherParser.DESCENDING - 46)) | (1 << (CypherParser.DESC - 46)) | (1 << (CypherParser.WHERE - 46)) | (1 << (CypherParser.OR - 46)) | (1 << (CypherParser.XOR - 46)) | (1 << (CypherParser.AND - 46)) | (1 << (CypherParser.NOT - 46)) | (1 << (CypherParser.IN - 46)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CypherParser.STARTS - 78)) | (1 << (CypherParser.ENDS - 78)) | (1 << (CypherParser.CONTAINS - 78)) | (1 << (CypherParser.IS - 78)) | (1 << (CypherParser.NULL - 78)) | (1 << (CypherParser.COUNT - 78)) | (1 << (CypherParser.ANY - 78)) | (1 << (CypherParser.NONE - 78)) | (1 << (CypherParser.SINGLE - 78)) | (1 << (CypherParser.TRUE - 78)) | (1 << (CypherParser.FALSE - 78)) | (1 << (CypherParser.EXISTS - 78)) | (1 << (CypherParser.CASE - 78)) | (1 << (CypherParser.ELSE - 78)) | (1 << (CypherParser.END - 78)) | (1 << (CypherParser.WHEN - 78)) | (1 << (CypherParser.THEN - 78)) | (1 << (CypherParser.HexLetter - 78)) | (1 << (CypherParser.CONSTRAINT - 78)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CypherParser.DO - 110)) | (1 << (CypherParser.FOR - 110)) | (1 << (CypherParser.REQUIRE - 110)) | (1 << (CypherParser.UNIQUE - 110)) | (1 << (CypherParser.MANDATORY - 110)) | (1 << (CypherParser.SCALAR - 110)) | (1 << (CypherParser.OF - 110)) | (1 << (CypherParser.ADD - 110)) | (1 << (CypherParser.DROP - 110)) | (1 << (CypherParser.FILTER - 110)) | (1 << (CypherParser.EXTRACT - 110)) | (1 << (CypherParser.UnescapedSymbolicName - 110)) | (1 << (CypherParser.EscapedSymbolicName - 110)))) !== 0)) {
				{
				this.state = 1526;
				this.oC_PropertyKeyName();
				this.state = 1528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1527;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1530;
				this.match(CypherParser.T__9);
				this.state = 1532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1531;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1534;
				this.oC_Expression();
				this.state = 1536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.SP) {
					{
					this.state = 1535;
					this.match(CypherParser.SP);
					}
				}

				this.state = 1556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CypherParser.T__1) {
					{
					{
					this.state = 1538;
					this.match(CypherParser.T__1);
					this.state = 1540;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1539;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1542;
					this.oC_PropertyKeyName();
					this.state = 1544;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1543;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1546;
					this.match(CypherParser.T__9);
					this.state = 1548;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1547;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1550;
					this.oC_Expression();
					this.state = 1552;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1551;
						this.match(CypherParser.SP);
						}
					}

					}
					}
					this.state = 1558;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1561;
			this.match(CypherParser.T__23);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Parameter(): OC_ParameterContext {
		let _localctx: OC_ParameterContext = new OC_ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, CypherParser.RULE_oC_Parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1563;
			this.match(CypherParser.T__25);
			this.state = 1566;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.COUNT:
			case CypherParser.ANY:
			case CypherParser.NONE:
			case CypherParser.SINGLE:
			case CypherParser.HexLetter:
			case CypherParser.FILTER:
			case CypherParser.EXTRACT:
			case CypherParser.UnescapedSymbolicName:
			case CypherParser.EscapedSymbolicName:
				{
				this.state = 1564;
				this.oC_SymbolicName();
				}
				break;
			case CypherParser.DecimalInteger:
				{
				this.state = 1565;
				this.match(CypherParser.DecimalInteger);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PropertyExpression(): OC_PropertyExpressionContext {
		let _localctx: OC_PropertyExpressionContext = new OC_PropertyExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, CypherParser.RULE_oC_PropertyExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1568;
			this.oC_Atom();
			this.state = 1573;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1570;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CypherParser.SP) {
						{
						this.state = 1569;
						this.match(CypherParser.SP);
						}
					}

					this.state = 1572;
					this.oC_PropertyLookup();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1575;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 296, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
		let _localctx: OC_PropertyKeyNameContext = new OC_PropertyKeyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, CypherParser.RULE_oC_PropertyKeyName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1577;
			this.oC_SchemaName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_IntegerLiteral(): OC_IntegerLiteralContext {
		let _localctx: OC_IntegerLiteralContext = new OC_IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, CypherParser.RULE_oC_IntegerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1579;
			_la = this._input.LA(1);
			if (!(((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CypherParser.HexInteger - 97)) | (1 << (CypherParser.DecimalInteger - 97)) | (1 << (CypherParser.OctalInteger - 97)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_DoubleLiteral(): OC_DoubleLiteralContext {
		let _localctx: OC_DoubleLiteralContext = new OC_DoubleLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, CypherParser.RULE_oC_DoubleLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1581;
			_la = this._input.LA(1);
			if (!(_la === CypherParser.ExponentDecimalReal || _la === CypherParser.RegularDecimalReal)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_SchemaName(): OC_SchemaNameContext {
		let _localctx: OC_SchemaNameContext = new OC_SchemaNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, CypherParser.RULE_oC_SchemaName);
		try {
			this.state = 1585;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.COUNT:
			case CypherParser.ANY:
			case CypherParser.NONE:
			case CypherParser.SINGLE:
			case CypherParser.HexLetter:
			case CypherParser.FILTER:
			case CypherParser.EXTRACT:
			case CypherParser.UnescapedSymbolicName:
			case CypherParser.EscapedSymbolicName:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1583;
				this.oC_SymbolicName();
				}
				break;
			case CypherParser.UNION:
			case CypherParser.ALL:
			case CypherParser.OPTIONAL:
			case CypherParser.MATCH:
			case CypherParser.UNWIND:
			case CypherParser.AS:
			case CypherParser.MERGE:
			case CypherParser.ON:
			case CypherParser.CREATE:
			case CypherParser.SET:
			case CypherParser.DETACH:
			case CypherParser.DELETE:
			case CypherParser.REMOVE:
			case CypherParser.WITH:
			case CypherParser.RETURN:
			case CypherParser.DISTINCT:
			case CypherParser.ORDER:
			case CypherParser.BY:
			case CypherParser.L_SKIP:
			case CypherParser.LIMIT:
			case CypherParser.ASCENDING:
			case CypherParser.ASC:
			case CypherParser.DESCENDING:
			case CypherParser.DESC:
			case CypherParser.WHERE:
			case CypherParser.OR:
			case CypherParser.XOR:
			case CypherParser.AND:
			case CypherParser.NOT:
			case CypherParser.IN:
			case CypherParser.STARTS:
			case CypherParser.ENDS:
			case CypherParser.CONTAINS:
			case CypherParser.IS:
			case CypherParser.NULL:
			case CypherParser.TRUE:
			case CypherParser.FALSE:
			case CypherParser.EXISTS:
			case CypherParser.CASE:
			case CypherParser.ELSE:
			case CypherParser.END:
			case CypherParser.WHEN:
			case CypherParser.THEN:
			case CypherParser.CONSTRAINT:
			case CypherParser.DO:
			case CypherParser.FOR:
			case CypherParser.REQUIRE:
			case CypherParser.UNIQUE:
			case CypherParser.MANDATORY:
			case CypherParser.SCALAR:
			case CypherParser.OF:
			case CypherParser.ADD:
			case CypherParser.DROP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1584;
				this.oC_ReservedWord();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ReservedWord(): OC_ReservedWordContext {
		let _localctx: OC_ReservedWordContext = new OC_ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, CypherParser.RULE_oC_ReservedWord);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1587;
			_la = this._input.LA(1);
			if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (CypherParser.UNION - 46)) | (1 << (CypherParser.ALL - 46)) | (1 << (CypherParser.OPTIONAL - 46)) | (1 << (CypherParser.MATCH - 46)) | (1 << (CypherParser.UNWIND - 46)) | (1 << (CypherParser.AS - 46)) | (1 << (CypherParser.MERGE - 46)) | (1 << (CypherParser.ON - 46)) | (1 << (CypherParser.CREATE - 46)) | (1 << (CypherParser.SET - 46)) | (1 << (CypherParser.DETACH - 46)) | (1 << (CypherParser.DELETE - 46)) | (1 << (CypherParser.REMOVE - 46)) | (1 << (CypherParser.WITH - 46)) | (1 << (CypherParser.RETURN - 46)) | (1 << (CypherParser.DISTINCT - 46)) | (1 << (CypherParser.ORDER - 46)) | (1 << (CypherParser.BY - 46)) | (1 << (CypherParser.L_SKIP - 46)) | (1 << (CypherParser.LIMIT - 46)) | (1 << (CypherParser.ASCENDING - 46)) | (1 << (CypherParser.ASC - 46)) | (1 << (CypherParser.DESCENDING - 46)) | (1 << (CypherParser.DESC - 46)) | (1 << (CypherParser.WHERE - 46)) | (1 << (CypherParser.OR - 46)) | (1 << (CypherParser.XOR - 46)) | (1 << (CypherParser.AND - 46)) | (1 << (CypherParser.NOT - 46)) | (1 << (CypherParser.IN - 46)))) !== 0) || ((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (CypherParser.STARTS - 78)) | (1 << (CypherParser.ENDS - 78)) | (1 << (CypherParser.CONTAINS - 78)) | (1 << (CypherParser.IS - 78)) | (1 << (CypherParser.NULL - 78)) | (1 << (CypherParser.TRUE - 78)) | (1 << (CypherParser.FALSE - 78)) | (1 << (CypherParser.EXISTS - 78)) | (1 << (CypherParser.CASE - 78)) | (1 << (CypherParser.ELSE - 78)) | (1 << (CypherParser.END - 78)) | (1 << (CypherParser.WHEN - 78)) | (1 << (CypherParser.THEN - 78)) | (1 << (CypherParser.CONSTRAINT - 78)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CypherParser.DO - 110)) | (1 << (CypherParser.FOR - 110)) | (1 << (CypherParser.REQUIRE - 110)) | (1 << (CypherParser.UNIQUE - 110)) | (1 << (CypherParser.MANDATORY - 110)) | (1 << (CypherParser.SCALAR - 110)) | (1 << (CypherParser.OF - 110)) | (1 << (CypherParser.ADD - 110)) | (1 << (CypherParser.DROP - 110)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_SymbolicName(): OC_SymbolicNameContext {
		let _localctx: OC_SymbolicNameContext = new OC_SymbolicNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, CypherParser.RULE_oC_SymbolicName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1589;
			_la = this._input.LA(1);
			if (!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & ((1 << (CypherParser.COUNT - 83)) | (1 << (CypherParser.ANY - 83)) | (1 << (CypherParser.NONE - 83)) | (1 << (CypherParser.SINGLE - 83)) | (1 << (CypherParser.HexLetter - 83)))) !== 0) || ((((_la - 119)) & ~0x1F) === 0 && ((1 << (_la - 119)) & ((1 << (CypherParser.FILTER - 119)) | (1 << (CypherParser.EXTRACT - 119)) | (1 << (CypherParser.UnescapedSymbolicName - 119)) | (1 << (CypherParser.EscapedSymbolicName - 119)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_LeftArrowHead(): OC_LeftArrowHeadContext {
		let _localctx: OC_LeftArrowHeadContext = new OC_LeftArrowHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, CypherParser.RULE_oC_LeftArrowHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1591;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.T__18) | (1 << CypherParser.T__26) | (1 << CypherParser.T__27) | (1 << CypherParser.T__28) | (1 << CypherParser.T__29))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RightArrowHead(): OC_RightArrowHeadContext {
		let _localctx: OC_RightArrowHeadContext = new OC_RightArrowHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, CypherParser.RULE_oC_RightArrowHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1593;
			_la = this._input.LA(1);
			if (!(((((_la - 20)) & ~0x1F) === 0 && ((1 << (_la - 20)) & ((1 << (CypherParser.T__19 - 20)) | (1 << (CypherParser.T__30 - 20)) | (1 << (CypherParser.T__31 - 20)) | (1 << (CypherParser.T__32 - 20)) | (1 << (CypherParser.T__33 - 20)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Dash(): OC_DashContext {
		let _localctx: OC_DashContext = new OC_DashContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, CypherParser.RULE_oC_Dash);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1595;
			_la = this._input.LA(1);
			if (!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (CypherParser.T__13 - 14)) | (1 << (CypherParser.T__34 - 14)) | (1 << (CypherParser.T__35 - 14)) | (1 << (CypherParser.T__36 - 14)) | (1 << (CypherParser.T__37 - 14)) | (1 << (CypherParser.T__38 - 14)) | (1 << (CypherParser.T__39 - 14)) | (1 << (CypherParser.T__40 - 14)) | (1 << (CypherParser.T__41 - 14)) | (1 << (CypherParser.T__42 - 14)) | (1 << (CypherParser.T__43 - 14)) | (1 << (CypherParser.T__44 - 14)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x81\u0640\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x03\x02\x05\x02\xCC\n\x02\x03" +
		"\x02\x03\x02\x05\x02\xD0\n\x02\x03\x02\x05\x02\xD3\n\x02\x03\x02\x05\x02" +
		"\xD6\n\x02\x03\x02\x03\x02\x03\x02\x05\x02\xDB\n\x02\x03\x02\x03\x02\x05" +
		"\x02\xDF\n\x02\x03\x02\x03\x02\x05\x02\xE3\n\x02\x03\x02\x07\x02\xE6\n" +
		"\x02\f\x02\x0E\x02\xE9\v\x02\x03\x02\x05\x02\xEC\n\x02\x03\x02\x05\x02" +
		"\xEF\n\x02\x03\x02\x05\x02\xF2\n\x02\x03\x02\x03\x02\x05\x02\xF6\n\x02" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x05\x04\xFC\n\x04\x03\x05\x03\x05\x05" +
		"\x05\u0100\n\x05\x03\x05\x07\x05\u0103\n\x05\f\x05\x0E\x05\u0106\v\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u010C\n\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\u0111\n\x06\x03\x06\x05\x06\u0114\n\x06\x03\x07\x03\x07\x05" +
		"\x07\u0118\n\x07\x03\b\x03\b\x05\b\u011C\n\b\x07\b\u011E\n\b\f\b\x0E\b" +
		"\u0121\v\b\x03\b\x03\b\x03\b\x05\b\u0126\n\b\x07\b\u0128\n\b\f\b\x0E\b" +
		"\u012B\v\b\x03\b\x03\b\x05\b\u012F\n\b\x03\b\x07\b\u0132\n\b\f\b\x0E\b" +
		"\u0135\v\b\x03\b\x05\b\u0138\n\b\x03\b\x05\b\u013B\n\b\x05\b\u013D\n\b" +
		"\x03\t\x03\t\x05\t\u0141\n\t\x07\t\u0143\n\t\f\t\x0E\t\u0146\v\t\x03\t" +
		"\x03\t\x05\t\u014A\n\t\x07\t\u014C\n\t\f\t\x0E\t\u014F\v\t\x03\t\x03\t" +
		"\x05\t\u0153\n\t\x06\t\u0155\n\t\r\t\x0E\t\u0156\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x05\n\u0160\n\n\x03\v\x03\v\x03\v\x05\v\u0165\n\v" +
		"\x03\f\x03\f\x05\f\u0169\n\f\x03\f\x03\f\x05\f\u016D\n\f\x03\f\x03\f\x05" +
		"\f\u0171\n\f\x03\f\x05\f\u0174\n\f\x03\r\x03\r\x05\r\u0178\n\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x05\x0E\u0182\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x07\x0E\u0187\n\x0E\f\x0E\x0E\x0E\u018A\v\x0E\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\u0196\n\x0F\x03\x10\x03\x10\x05\x10\u019A\n\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x05\x11\u01A0\n\x11\x03\x11\x03\x11\x05\x11\u01A4\n\x11" +
		"\x03\x11\x03\x11\x05\x11\u01A8\n\x11\x03\x11\x07\x11\u01AB\n\x11\f\x11" +
		"\x0E\x11\u01AE\v\x11\x03\x12\x03\x12\x05\x12\u01B2\n\x12\x03\x12\x03\x12" +
		"\x05\x12\u01B6\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u01BC\n\x12" +
		"\x03\x12\x03\x12\x05\x12\u01C0\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05" +
		"\x12\u01C6\n\x12\x03\x12\x03\x12\x05\x12\u01CA\n\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x05\x12\u01D0\n\x12\x03\x12\x03\x12\x05\x12\u01D4\n\x12\x03" +
		"\x13\x03\x13\x05\x13\u01D8\n\x13\x03\x13\x03\x13\x05\x13\u01DC\n\x13\x03" +
		"\x13\x03\x13\x05\x13\u01E0\n\x13\x03\x13\x03\x13\x05\x13\u01E4\n\x13\x03" +
		"\x13\x07\x13\u01E7\n\x13\f\x13\x0E\x13\u01EA\v\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\u01F0\n\x14\x03\x14\x03\x14\x05\x14\u01F4\n\x14\x03" +
		"\x14\x07\x14\u01F7\n\x14\f\x14\x0E\x14\u01FA\v\x14\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x05\x15\u0200\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16" +
		"\u0206\n\x16\x03\x16\x03\x16\x03\x16\x05\x16\u020B\n\x16\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x05\x17\u0211\n\x17\x03\x17\x05\x17\u0214\n\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x05\x17\u021A\n\x17\x05\x17\u021C\n\x17\x03\x18" +
		"\x03\x18\x05\x18\u0220\n\x18\x03\x18\x03\x18\x05\x18\u0224\n\x18\x03\x18" +
		"\x07\x18\u0227\n\x18\f\x18\x0E\x18\u022A\v\x18\x03\x18\x05\x18\u022D\n" +
		"\x18\x03\x18\x05\x18\u0230\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x05\x19\u0237\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u023E" +
		"\n\x1A\x03\x1A\x05\x1A\u0241\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x05" +
		"\x1C\u0247\n\x1C\x03\x1C\x05\x1C\u024A\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x05\x1C\u0250\n\x1C\x03\x1C\x03\x1C\x05\x1C\u0254\n\x1C\x03\x1C\x03" +
		"\x1C\x05\x1C\u0258\n\x1C\x03\x1D\x03\x1D\x05\x1D\u025C\n\x1D\x03\x1D\x03" +
		"\x1D\x05\x1D\u0260\n\x1D\x03\x1D\x07\x1D\u0263\n\x1D\f\x1D\x0E\x1D\u0266" +
		"\v\x1D\x03\x1D\x03\x1D\x05\x1D\u026A\n\x1D\x03\x1D\x03\x1D\x05\x1D\u026E" +
		"\n\x1D\x03\x1D\x07\x1D\u0271\n\x1D\f\x1D\x0E\x1D\u0274\v\x1D\x05\x1D\u0276" +
		"\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E" +
		"\u027F\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05" +
		"\x1F\u0288\n\x1F\x03\x1F\x07\x1F\u028B\n\x1F\f\x1F\x0E\x1F\u028E\v\x1F" +
		"\x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03\"\x03\"\x05\"\u029A\n\"\x03" +
		"\"\x05\"\u029D\n\"\x03#\x03#\x03#\x03#\x03$\x03$\x05$\u02A5\n$\x03$\x03" +
		"$\x05$\u02A9\n$\x03$\x07$\u02AC\n$\f$\x0E$\u02AF\v$\x03%\x03%\x05%\u02B3" +
		"\n%\x03%\x03%\x05%\u02B7\n%\x03%\x03%\x03%\x05%\u02BC\n%\x03&\x03&\x03" +
		"\'\x03\'\x05\'\u02C2\n\'\x03\'\x07\'\u02C5\n\'\f\'\x0E\'\u02C8\v\'\x03" +
		"\'\x03\'\x03\'\x03\'\x05\'\u02CE\n\'\x03(\x03(\x05(\u02D2\n(\x03(\x03" +
		"(\x05(\u02D6\n(\x05(\u02D8\n(\x03(\x03(\x05(\u02DC\n(\x05(\u02DE\n(\x03" +
		"(\x03(\x05(\u02E2\n(\x05(\u02E4\n(\x03(\x03(\x03)\x03)\x05)\u02EA\n)\x03" +
		")\x03)\x03*\x03*\x05*\u02F0\n*\x03*\x03*\x05*\u02F4\n*\x03*\x05*\u02F7" +
		"\n*\x03*\x05*\u02FA\n*\x03*\x03*\x05*\u02FE\n*\x03*\x03*\x03*\x03*\x05" +
		"*\u0304\n*\x03*\x03*\x05*\u0308\n*\x03*\x05*\u030B\n*\x03*\x05*\u030E" +
		"\n*\x03*\x03*\x03*\x03*\x05*\u0314\n*\x03*\x05*\u0317\n*\x03*\x05*\u031A" +
		"\n*\x03*\x03*\x05*\u031E\n*\x03*\x03*\x03*\x03*\x05*\u0324\n*\x03*\x05" +
		"*\u0327\n*\x03*\x05*\u032A\n*\x03*\x03*\x05*\u032E\n*\x03+\x03+\x05+\u0332" +
		"\n+\x03+\x03+\x05+\u0336\n+\x05+\u0338\n+\x03+\x03+\x05+\u033C\n+\x05" +
		"+\u033E\n+\x03+\x05+\u0341\n+\x03+\x03+\x05+\u0345\n+\x05+\u0347\n+\x03" +
		"+\x03+\x03,\x03,\x05,\u034D\n,\x03-\x03-\x05-\u0351\n-\x03-\x03-\x05-" +
		"\u0355\n-\x03-\x03-\x05-\u0359\n-\x03-\x05-\u035C\n-\x03-\x07-\u035F\n" +
		"-\f-\x0E-\u0362\v-\x03.\x03.\x05.\u0366\n.\x03.\x07.\u0369\n.\f.\x0E." +
		"\u036C\v.\x03/\x03/\x05/\u0370\n/\x03/\x03/\x030\x030\x050\u0376\n0\x03" +
		"0\x030\x050\u037A\n0\x050\u037C\n0\x030\x030\x050\u0380\n0\x030\x030\x05" +
		"0\u0384\n0\x050\u0386\n0\x050\u0388\n0\x031\x031\x032\x032\x033\x033\x03" +
		"4\x034\x034\x034\x034\x074\u0395\n4\f4\x0E4\u0398\v4\x035\x035\x035\x03" +
		"5\x035\x075\u039F\n5\f5\x0E5\u03A2\v5\x036\x036\x036\x036\x036\x076\u03A9" +
		"\n6\f6\x0E6\u03AC\v6\x037\x037\x057\u03B0\n7\x077\u03B2\n7\f7\x0E7\u03B5" +
		"\v7\x037\x037\x038\x038\x058\u03BB\n8\x038\x078\u03BE\n8\f8\x0E8\u03C1" +
		"\v8\x039\x039\x059\u03C5\n9\x039\x039\x059\u03C9\n9\x039\x039\x059\u03CD" +
		"\n9\x039\x039\x059\u03D1\n9\x039\x079\u03D4\n9\f9\x0E9\u03D7\v9\x03:\x03" +
		":\x05:\u03DB\n:\x03:\x03:\x05:\u03DF\n:\x03:\x03:\x05:\u03E3\n:\x03:\x03" +
		":\x05:\u03E7\n:\x03:\x03:\x05:\u03EB\n:\x03:\x03:\x05:\u03EF\n:\x03:\x07" +
		":\u03F2\n:\f:\x0E:\u03F5\v:\x03;\x03;\x05;\u03F9\n;\x03;\x03;\x05;\u03FD" +
		"\n;\x03;\x07;\u0400\n;\f;\x0E;\u0403\v;\x03<\x03<\x05<\u0407\n<\x07<\u0409" +
		"\n<\f<\x0E<\u040C\v<\x03<\x03<\x03=\x03=\x03=\x03=\x07=\u0414\n=\f=\x0E" +
		"=\u0417\v=\x03>\x03>\x03>\x05>\u041C\n>\x03>\x03>\x05>\u0420\n>\x03>\x03" +
		">\x03>\x03>\x03>\x05>\u0427\n>\x03>\x03>\x05>\u042B\n>\x03>\x03>\x05>" +
		"\u042F\n>\x03>\x05>\u0432\n>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03" +
		"?\x03?\x05?\u043E\n?\x03?\x05?\u0441\n?\x03?\x03?\x03@\x03@\x03@\x03@" +
		"\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u044F\n@\x03A\x03A\x05A\u0453\nA\x03" +
		"A\x07A\u0456\nA\fA\x0EA\u0459\vA\x03A\x05A\u045C\nA\x03A\x05A\u045F\n" +
		"A\x03B\x03B\x03B\x03B\x03B\x05B\u0466\nB\x03B\x03B\x05B\u046A\nB\x03B" +
		"\x03B\x05B\u046E\nB\x03B\x03B\x03B\x03B\x03B\x05B\u0475\nB\x03B\x03B\x05" +
		"B\u0479\nB\x03B\x03B\x05B\u047D\nB\x03B\x03B\x03B\x03B\x05B\u0483\nB\x03" +
		"B\x03B\x05B\u0487\nB\x03B\x03B\x05B\u048B\nB\x03B\x03B\x03B\x03B\x05B" +
		"\u0491\nB\x03B\x03B\x05B\u0495\nB\x03B\x03B\x05B\u0499\nB\x03B\x03B\x03" +
		"B\x03B\x05B\u049F\nB\x03B\x03B\x05B\u04A3\nB\x03B\x03B\x05B\u04A7\nB\x03" +
		"B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u04B0\nB\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x05C\u04B8\nC\x03D\x03D\x03E\x03E\x05E\u04BE\nE\x03E\x03E\x05E" +
		"\u04C2\nE\x03E\x03E\x05E\u04C6\nE\x03E\x03E\x05E\u04CA\nE\x07E\u04CC\n" +
		"E\fE\x0EE\u04CF\vE\x05E\u04D1\nE\x03E\x03E\x03F\x03F\x05F\u04D7\nF\x03" +
		"F\x03F\x03F\x05F\u04DC\nF\x03F\x03F\x03F\x05F\u04E1\nF\x03F\x03F\x03F" +
		"\x05F\u04E6\nF\x03F\x03F\x03F\x05F\u04EB\nF\x03F\x03F\x03F\x05F\u04F0" +
		"\nF\x03F\x05F\u04F3\nF\x03G\x03G\x05G\u04F7\nG\x03G\x03G\x05G\u04FB\n" +
		"G\x03G\x03G\x03H\x03H\x05H\u0501\nH\x03H\x06H\u0504\nH\rH\x0EH\u0505\x03" +
		"I\x03I\x05I\u050A\nI\x03I\x05I\u050D\nI\x03J\x03J\x03J\x03J\x03J\x03J" +
		"\x03K\x03K\x05K\u0517\nK\x03K\x03K\x05K\u051B\nK\x03K\x03K\x05K\u051F" +
		"\nK\x05K\u0521\nK\x03K\x03K\x05K\u0525\nK\x03K\x03K\x05K\u0529\nK\x03" +
		"K\x03K\x05K\u052D\nK\x07K\u052F\nK\fK\x0EK\u0532\vK\x05K\u0534\nK\x03" +
		"K\x03K\x03L\x03L\x03L\x03M\x03M\x05M\u053D\nM\x03M\x03M\x05M\u0541\nM" +
		"\x03M\x03M\x03M\x05M\u0546\nM\x03M\x05M\u0549\nM\x05M\u054B\nM\x03M\x05" +
		"M\u054E\nM\x03M\x03M\x03N\x03N\x05N\u0554\nN\x03N\x03N\x05N\u0558\nN\x03" +
		"N\x03N\x05N\u055C\nN\x03N\x03N\x05N\u0560\nN\x03N\x03N\x05N\u0564\nN\x07" +
		"N\u0566\nN\fN\x0EN\u0569\vN\x05N\u056B\nN\x03N\x03N\x03O\x03O\x03P\x03" +
		"P\x03Q\x03Q\x03Q\x03R\x03R\x03R\x07R\u0579\nR\fR\x0ER\u057C\vR\x03S\x03" +
		"S\x05S\u0580\nS\x03S\x03S\x05S\u0584\nS\x03S\x03S\x05S\u0588\nS\x03S\x05" +
		"S\u058B\nS\x03S\x05S\u058E\nS\x03S\x03S\x03T\x03T\x05T\u0594\nT\x03T\x03" +
		"T\x05T\u0598\nT\x03T\x03T\x05T\u059C\nT\x05T\u059E\nT\x03T\x03T\x05T\u05A2" +
		"\nT\x03T\x03T\x05T\u05A6\nT\x05T\u05A8\nT\x03T\x03T\x05T\u05AC\nT\x03" +
		"T\x03T\x05T\u05B0\nT\x03T\x03T\x03U\x03U\x05U\u05B6\nU\x03U\x03U\x03V" +
		"\x03V\x05V\u05BC\nV\x03V\x06V\u05BF\nV\rV\x0EV\u05C0\x03V\x03V\x05V\u05C5" +
		"\nV\x03V\x03V\x05V\u05C9\nV\x03V\x06V\u05CC\nV\rV\x0EV\u05CD\x05V\u05D0" +
		"\nV\x03V\x05V\u05D3\nV\x03V\x03V\x05V\u05D7\nV\x03V\x05V\u05DA\nV\x03" +
		"V\x05V\u05DD\nV\x03V\x03V\x03W\x03W\x05W\u05E3\nW\x03W\x03W\x05W\u05E7" +
		"\nW\x03W\x03W\x05W\u05EB\nW\x03W\x03W\x03X\x03X\x03Y\x03Y\x05Y\u05F3\n" +
		"Y\x03Z\x03Z\x05Z\u05F7\nZ\x03Z\x03Z\x05Z\u05FB\nZ\x03Z\x03Z\x05Z\u05FF" +
		"\nZ\x03Z\x03Z\x05Z\u0603\nZ\x03Z\x03Z\x05Z\u0607\nZ\x03Z\x03Z\x05Z\u060B" +
		"\nZ\x03Z\x03Z\x05Z\u060F\nZ\x03Z\x03Z\x05Z\u0613\nZ\x07Z\u0615\nZ\fZ\x0E" +
		"Z\u0618\vZ\x05Z\u061A\nZ\x03Z\x03Z\x03[\x03[\x03[\x05[\u0621\n[\x03\\" +
		"\x03\\\x05\\\u0625\n\\\x03\\\x06\\\u0628\n\\\r\\\x0E\\\u0629\x03]\x03" +
		"]\x03^\x03^\x03_\x03_\x03`\x03`\x05`\u0634\n`\x03a\x03a\x03b\x03b\x03" +
		"c\x03c\x03d\x03d\x03e\x03e\x03e\x02\x02\x02f\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x02" +
		"6\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02" +
		"\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02" +
		"\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02" +
		"\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02" +
		"\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\x02\f\x03\x02" +
		"FI\x03\x02\x0F\x10\x03\x02YZ\x03\x02ce\x03\x02mn\x06\x020<?TY`ox\x06\x02" +
		"UXffy{~~\x04\x02\x15\x15\x1D \x04\x02\x16\x16!$\x04\x02\x10\x10%/\x02" +
		"\u0726\x02\xF5\x03\x02\x02\x02\x04\xF7\x03\x02\x02\x02\x06\xFB\x03\x02" +
		"\x02\x02\b\xFD\x03\x02\x02\x02\n\u0113\x03\x02\x02\x02\f\u0117\x03\x02" +
		"\x02\x02\x0E\u013C\x03\x02\x02\x02\x10\u0154\x03\x02\x02\x02\x12\u015F" +
		"\x03\x02\x02\x02\x14\u0164\x03\x02\x02\x02\x16\u0168\x03\x02\x02\x02\x18" +
		"\u0175\x03\x02\x02\x02\x1A\u017F\x03\x02\x02\x02\x1C\u0195\x03\x02\x02" +
		"\x02\x1E\u0197\x03\x02\x02\x02 \u019D\x03\x02\x02\x02\"\u01D3\x03\x02" +
		"\x02\x02$\u01D7\x03\x02\x02\x02&\u01EB\x03\x02\x02\x02(\u01FF\x03\x02" +
		"\x02\x02*\u0201\x03\x02\x02\x02,\u020C\x03\x02\x02\x02.\u021D\x03\x02" +
		"\x02\x020\u0236\x03\x02\x02\x022\u023A\x03\x02\x02\x024\u0242\x03\x02" +
		"\x02\x026\u0249\x03\x02\x02\x028\u0275\x03\x02\x02\x02:\u027E\x03\x02" +
		"\x02\x02<\u0280\x03\x02\x02\x02>\u028F\x03\x02\x02\x02@\u0293\x03\x02" +
		"\x02\x02B\u0297\x03\x02\x02\x02D\u029E\x03\x02\x02\x02F\u02A2\x03\x02" +
		"\x02\x02H\u02BB\x03\x02\x02\x02J\u02BD\x03\x02\x02\x02L\u02CD\x03\x02" +
		"\x02\x02N\u02CF\x03\x02\x02\x02P\u02E7\x03\x02\x02\x02R\u032D\x03\x02" +
		"\x02\x02T\u032F\x03\x02\x02\x02V\u034C\x03\x02\x02\x02X\u034E\x03\x02" +
		"\x02\x02Z\u0363\x03\x02\x02\x02\\\u036D\x03\x02\x02\x02^\u0373\x03\x02" +
		"\x02\x02`\u0389\x03\x02\x02\x02b\u038B\x03\x02\x02\x02d\u038D\x03\x02" +
		"\x02\x02f\u038F\x03\x02\x02\x02h\u0399\x03\x02\x02\x02j\u03A3\x03\x02" +
		"\x02\x02l\u03B3\x03\x02\x02\x02n\u03B8\x03\x02\x02\x02p\u03C2\x03\x02" +
		"\x02\x02r\u03D8\x03\x02\x02\x02t\u03F6\x03\x02\x02\x02v\u040A\x03\x02" +
		"\x02\x02x\u040F\x03\x02\x02\x02z\u0431\x03\x02\x02\x02|\u043D\x03\x02" +
		"\x02\x02~\u044E\x03\x02\x02\x02\x80\u0450\x03\x02\x02\x02\x82\u04AF\x03" +
		"\x02\x02\x02\x84\u04B7\x03\x02\x02\x02\x86\u04B9\x03\x02\x02\x02\x88\u04BB" +
		"\x03\x02\x02\x02\x8A\u04F2\x03\x02\x02\x02\x8C\u04F4\x03\x02\x02\x02\x8E" +
		"\u04FE\x03\x02\x02\x02\x90\u0507\x03\x02\x02\x02\x92\u050E\x03\x02\x02" +
		"\x02\x94\u0514\x03\x02\x02\x02\x96\u0537\x03\x02\x02\x02\x98\u053A\x03" +
		"\x02\x02\x02\x9A\u0551\x03\x02\x02\x02\x9C\u056E\x03\x02\x02\x02\x9E\u0570" +
		"\x03\x02\x02\x02\xA0\u0572\x03\x02\x02\x02\xA2\u057A\x03\x02\x02\x02\xA4" +
		"\u057D\x03\x02\x02\x02\xA6\u0591\x03\x02\x02\x02\xA8\u05B3\x03\x02\x02" +
		"\x02\xAA\u05CF\x03\x02\x02\x02\xAC\u05E0\x03\x02\x02\x02\xAE\u05EE\x03" +
		"\x02\x02\x02\xB0\u05F2\x03\x02\x02\x02\xB2\u05F4\x03\x02\x02\x02\xB4\u061D" +
		"\x03\x02\x02\x02\xB6\u0622\x03\x02\x02\x02\xB8\u062B\x03\x02\x02\x02\xBA" +
		"\u062D\x03\x02\x02\x02\xBC\u062F\x03\x02\x02\x02\xBE\u0633\x03\x02\x02" +
		"\x02\xC0\u0635\x03\x02\x02\x02\xC2\u0637\x03\x02\x02\x02\xC4\u0639\x03" +
		"\x02\x02\x02\xC6\u063B\x03\x02\x02\x02\xC8\u063D\x03\x02\x02\x02\xCA\xCC" +
		"\x07\x7F\x02\x02\xCB\xCA\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCD" +
		"\x03\x02\x02\x02\xCD\xD2\x05\x04\x03\x02\xCE\xD0\x07\x7F\x02\x02\xCF\xCE" +
		"\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD3" +
		"\x07\x03\x02\x02\xD2\xCF\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD5" +
		"\x03\x02\x02\x02\xD4\xD6\x07\x7F\x02\x02\xD5\xD4\x03\x02\x02\x02\xD5\xD6" +
		"\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x07\x02\x02\x03\xD8\xF6" +
		"\x03\x02\x02\x02\xD9\xDB\x07\x7F\x02\x02\xDA\xD9\x03\x02\x02\x02\xDA\xDB" +
		"\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xE7\x05\x04\x03\x02\xDD\xDF" +
		"\x07\x7F\x02\x02\xDE\xDD\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0" +
		"\x03\x02\x02\x02\xE0\xE2\x07\x03\x02\x02\xE1\xE3\x07\x7F\x02\x02\xE2\xE1" +
		"\x03\x02\x02\x02\xE2\xE3\x03\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE6" +
		"\x05\x04\x03\x02\xE5\xDE\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5" +
		"\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEE\x03\x02\x02\x02\xE9\xE7" +
		"\x03\x02\x02\x02\xEA\xEC\x07\x7F\x02\x02\xEB\xEA\x03\x02\x02\x02\xEB\xEC" +
		"\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEF\x07\x03\x02\x02\xEE\xEB" +
		"\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF1\x03\x02\x02\x02\xF0\xF2" +
		"\x07\x7F\x02\x02\xF1\xF0\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF3" +
		"\x03\x02\x02\x02\xF3\xF4\x07\x02\x02\x03\xF4\xF6\x03\x02\x02\x02\xF5\xCB" +
		"\x03\x02\x02\x02\xF5\xDA\x03\x02\x02\x02\xF6\x03\x03\x02\x02\x02\xF7\xF8" +
		"\x05\x06\x04\x02\xF8\x05\x03\x02\x02\x02\xF9\xFC\x05\b\x05\x02\xFA\xFC" +
		"\x05,\x17\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFA\x03\x02\x02\x02\xFC\x07" +
		"\x03\x02\x02\x02\xFD\u0104\x05\f\x07\x02\xFE\u0100\x07\x7F\x02\x02\xFF" +
		"\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x03\x02\x02" +
		"\x02\u0101\u0103\x05\n\x06\x02\u0102\xFF\x03\x02\x02\x02\u0103\u0106\x03" +
		"\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105" +
		"\t\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0107\u0108\x070\x02\x02" +
		"\u0108\u0109\x07\x7F\x02\x02\u0109\u010B\x071\x02\x02\u010A\u010C\x07" +
		"\x7F\x02\x02\u010B\u010A\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C" +
		"\u010D\x03\x02\x02\x02\u010D\u0114\x05\f\x07\x02\u010E\u0110\x070\x02" +
		"\x02\u010F\u0111\x07\x7F\x02\x02\u0110\u010F\x03\x02\x02\x02\u0110\u0111" +
		"\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114\x05\f\x07\x02" +
		"\u0113\u0107\x03\x02\x02\x02\u0113\u010E\x03\x02\x02\x02\u0114\v\x03\x02" +
		"\x02\x02\u0115\u0118\x05\x0E\b\x02\u0116\u0118\x05\x10\t\x02\u0117\u0115" +
		"\x03\x02\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118\r\x03\x02\x02\x02\u0119" +
		"\u011B\x05";
	private static readonly _serializedATNSegment1: string =
		"\x14\v\x02\u011A\u011C\x07\x7F\x02\x02\u011B\u011A\x03\x02\x02\x02\u011B" +
		"\u011C\x03\x02\x02\x02\u011C\u011E\x03\x02\x02\x02\u011D\u0119\x03\x02" +
		"\x02\x02\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u011F" +
		"\u0120\x03\x02\x02\x02\u0120\u0122\x03\x02\x02\x02\u0121\u011F\x03\x02" +
		"\x02\x02\u0122\u013D\x054\x1B\x02\u0123\u0125\x05\x14\v\x02\u0124\u0126" +
		"\x07\x7F\x02\x02\u0125\u0124\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02" +
		"\u0126\u0128\x03\x02\x02\x02\u0127\u0123\x03\x02\x02\x02\u0128\u012B\x03" +
		"\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A" +
		"\u012C\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u0133\x05\x12" +
		"\n\x02\u012D\u012F\x07\x7F\x02\x02\u012E\u012D\x03\x02\x02\x02\u012E\u012F" +
		"\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0132\x05\x12\n\x02" +
		"\u0131\u012E\x03\x02\x02\x02\u0132\u0135\x03\x02\x02\x02\u0133\u0131\x03" +
		"\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u013A\x03\x02\x02\x02\u0135" +
		"\u0133\x03\x02\x02\x02\u0136\u0138\x07\x7F\x02\x02\u0137\u0136\x03\x02" +
		"\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139" +
		"\u013B\x054\x1B\x02\u013A\u0137\x03\x02\x02\x02\u013A\u013B\x03\x02\x02" +
		"\x02\u013B\u013D\x03\x02\x02\x02\u013C\u011F\x03\x02\x02\x02\u013C\u0129" +
		"\x03\x02\x02\x02\u013D\x0F\x03\x02\x02\x02\u013E\u0140\x05\x14\v\x02\u013F" +
		"\u0141\x07\x7F\x02\x02\u0140\u013F\x03\x02\x02\x02\u0140\u0141\x03\x02" +
		"\x02\x02\u0141\u0143\x03\x02\x02\x02\u0142\u013E\x03\x02\x02\x02\u0143" +
		"\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0144\u0145\x03\x02" +
		"\x02\x02\u0145\u014D\x03\x02\x02\x02\u0146\u0144\x03\x02\x02\x02\u0147" +
		"\u0149\x05\x12\n\x02\u0148\u014A\x07\x7F\x02\x02\u0149\u0148\x03\x02\x02" +
		"\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014C\x03\x02\x02\x02\u014B\u0147" +
		"\x03\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02\x02\x02" +
		"\u014D\u014E\x03\x02\x02\x02\u014E\u0150\x03\x02\x02\x02\u014F\u014D\x03" +
		"\x02\x02\x02\u0150\u0152\x052\x1A\x02\u0151\u0153\x07\x7F\x02\x02\u0152" +
		"\u0151\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0155\x03\x02" +
		"\x02\x02\u0154\u0144\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156" +
		"\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x03\x02" +
		"\x02\x02\u0158\u0159\x05\x0E\b\x02\u0159\x11\x03\x02\x02\x02\u015A\u0160" +
		"\x05\x1E\x10\x02\u015B\u0160\x05\x1A\x0E\x02\u015C\u0160\x05$\x13\x02" +
		"\u015D\u0160\x05 \x11\x02\u015E\u0160\x05&\x14\x02\u015F\u015A\x03\x02" +
		"\x02\x02\u015F\u015B\x03\x02\x02\x02\u015F\u015C\x03\x02\x02\x02\u015F" +
		"\u015D\x03\x02\x02\x02\u015F\u015E\x03\x02\x02\x02\u0160\x13\x03\x02\x02" +
		"\x02\u0161\u0165\x05\x16\f\x02\u0162\u0165\x05\x18\r\x02\u0163\u0165\x05" +
		"*\x16\x02\u0164\u0161\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0164" +
		"\u0163\x03\x02\x02\x02\u0165\x15\x03\x02\x02\x02\u0166\u0167\x072\x02" +
		"\x02\u0167\u0169\x07\x7F\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169" +
		"\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016C\x073\x02\x02" +
		"\u016B\u016D\x07\x7F\x02\x02\u016C\u016B\x03\x02\x02\x02\u016C\u016D\x03" +
		"\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0173\x05F$\x02\u016F\u0171" +
		"\x07\x7F\x02\x02\u0170\u016F\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02" +
		"\u0171\u0172\x03\x02\x02\x02\u0172\u0174\x05D#\x02\u0173\u0170\x03\x02" +
		"\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\x17\x03\x02\x02\x02\u0175\u0177" +
		"\x074\x02\x02\u0176\u0178\x07\x7F\x02\x02\u0177\u0176\x03\x02\x02\x02" +
		"\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\u017A\x05" +
		"d3\x02\u017A\u017B\x07\x7F\x02\x02\u017B\u017C\x075\x02\x02\u017C\u017D" +
		"\x07\x7F\x02\x02\u017D\u017E\x05\xAEX\x02\u017E\x19\x03\x02\x02\x02\u017F" +
		"\u0181\x076\x02\x02\u0180\u0182\x07\x7F\x02\x02\u0181\u0180\x03\x02\x02" +
		"\x02\u0181\u0182\x03\x02\x02\x02\u0182\u0183\x03\x02\x02\x02\u0183\u0188" +
		"\x05H%\x02\u0184\u0185\x07\x7F\x02\x02\u0185\u0187\x05\x1C\x0F\x02\u0186" +
		"\u0184\x03\x02\x02\x02\u0187\u018A\x03\x02\x02\x02\u0188\u0186\x03\x02" +
		"\x02\x02\u0188\u0189\x03\x02\x02\x02\u0189\x1B\x03\x02\x02\x02\u018A\u0188" +
		"\x03\x02\x02\x02\u018B\u018C\x077\x02\x02\u018C\u018D\x07\x7F\x02\x02" +
		"\u018D\u018E\x073\x02\x02\u018E\u018F\x07\x7F\x02\x02\u018F\u0196\x05" +
		" \x11\x02\u0190\u0191\x077\x02\x02\u0191\u0192\x07\x7F\x02\x02\u0192\u0193" +
		"\x078\x02\x02\u0193\u0194\x07\x7F\x02\x02\u0194\u0196\x05 \x11\x02\u0195" +
		"\u018B\x03\x02\x02\x02\u0195\u0190\x03\x02\x02\x02\u0196\x1D\x03\x02\x02" +
		"\x02\u0197\u0199\x078\x02\x02\u0198\u019A\x07\x7F\x02\x02\u0199\u0198" +
		"\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02" +
		"\u019B\u019C\x05F$\x02\u019C\x1F\x03\x02\x02\x02\u019D\u019F\x079\x02" +
		"\x02\u019E\u01A0\x07\x7F\x02\x02\u019F\u019E\x03\x02\x02\x02\u019F\u01A0" +
		"\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01AC\x05\"\x12\x02" +
		"\u01A2\u01A4\x07\x7F\x02\x02\u01A3\u01A2\x03\x02\x02\x02\u01A3\u01A4\x03" +
		"\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A7\x07\x04\x02\x02\u01A6" +
		"\u01A8\x07\x7F\x02\x02\u01A7\u01A6\x03\x02\x02\x02\u01A7\u01A8\x03\x02" +
		"\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x05\"\x12\x02\u01AA\u01A3" +
		"\x03\x02\x02\x02\u01AB\u01AE\x03\x02\x02\x02\u01AC\u01AA\x03\x02\x02\x02" +
		"\u01AC\u01AD\x03\x02\x02\x02\u01AD!\x03\x02\x02\x02\u01AE\u01AC\x03\x02" +
		"\x02\x02\u01AF\u01B1\x05\xB6\\\x02\u01B0\u01B2\x07\x7F\x02\x02\u01B1\u01B0" +
		"\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02" +
		"\u01B3\u01B5\x07\x05\x02\x02\u01B4\u01B6\x07\x7F\x02\x02\u01B5\u01B4\x03" +
		"\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7" +
		"\u01B8\x05d3\x02\u01B8\u01D4\x03\x02\x02\x02\u01B9\u01BB\x05\xAEX\x02" +
		"\u01BA\u01BC\x07\x7F\x02\x02\u01BB\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03" +
		"\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BF\x07\x05\x02\x02\u01BE" +
		"\u01C0\x07\x7F\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01BF\u01C0\x03\x02" +
		"\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C2\x05d3\x02\u01C2\u01D4" +
		"\x03\x02\x02\x02\u01C3\u01C5\x05\xAEX\x02\u01C4\u01C6\x07\x7F\x02\x02" +
		"\u01C5\u01C4\x03\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7\x03" +
		"\x02\x02\x02\u01C7\u01C9\x07\x06\x02\x02\u01C8\u01CA\x07\x7F\x02\x02\u01C9" +
		"\u01C8\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02\u01CA\u01CB\x03\x02" +
		"\x02\x02\u01CB\u01CC\x05d3\x02\u01CC\u01D4\x03\x02\x02\x02\u01CD\u01CF" +
		"\x05\xAEX\x02\u01CE\u01D0\x07\x7F\x02\x02\u01CF\u01CE\x03\x02\x02\x02" +
		"\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x05" +
		"Z.\x02\u01D2\u01D4\x03\x02\x02\x02\u01D3\u01AF\x03\x02\x02\x02\u01D3\u01B9" +
		"\x03\x02\x02\x02\u01D3\u01C3\x03\x02\x02\x02\u01D3\u01CD\x03\x02\x02\x02" +
		"\u01D4#\x03\x02\x02\x02\u01D5\u01D6\x07:\x02\x02\u01D6\u01D8\x07\x7F\x02" +
		"\x02\u01D7\u01D5\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D9" +
		"\x03\x02\x02\x02\u01D9\u01DB\x07;\x02\x02\u01DA\u01DC\x07\x7F\x02\x02" +
		"\u01DB\u01DA\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DD\x03" +
		"\x02\x02\x02\u01DD\u01E8\x05d3\x02\u01DE\u01E0\x07\x7F\x02\x02\u01DF\u01DE" +
		"\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02" +
		"\u01E1\u01E3\x07\x04\x02\x02\u01E2\u01E4\x07\x7F\x02\x02\u01E3\u01E2\x03" +
		"\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5" +
		"\u01E7\x05d3\x02\u01E6\u01DF\x03\x02\x02\x02\u01E7\u01EA\x03\x02\x02\x02" +
		"\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9%\x03\x02" +
		"\x02\x02\u01EA\u01E8\x03\x02\x02\x02\u01EB\u01EC\x07<\x02\x02\u01EC\u01ED" +
		"\x07\x7F\x02\x02\u01ED\u01F8\x05(\x15\x02\u01EE\u01F0\x07\x7F\x02\x02" +
		"\u01EF\u01EE\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F1\x03" +
		"\x02\x02\x02\u01F1\u01F3\x07\x04\x02\x02\u01F2\u01F4\x07\x7F\x02\x02\u01F3" +
		"\u01F2\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u01F5\x03\x02" +
		"\x02\x02\u01F5\u01F7\x05(\x15\x02\u01F6\u01EF\x03\x02\x02\x02\u01F7\u01FA" +
		"\x03\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02" +
		"\u01F9\'\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FB\u01FC\x05\xAE" +
		"X\x02\u01FC\u01FD\x05Z.\x02\u01FD\u0200\x03\x02\x02\x02\u01FE\u0200\x05" +
		"\xB6\\\x02\u01FF\u01FB\x03\x02\x02\x02\u01FF\u01FE\x03\x02\x02\x02\u0200" +
		")\x03\x02\x02\x02\u0201\u0202\x07=\x02\x02\u0202\u0203\x07\x7F\x02\x02" +
		"\u0203\u020A\x05\x9AN\x02\u0204\u0206\x07\x7F\x02\x02\u0205\u0204\x03" +
		"\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207" +
		"\u0208\x07>\x02\x02\u0208\u0209\x07\x7F\x02\x02\u0209\u020B\x05.\x18\x02" +
		"\u020A\u0205\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B+\x03\x02" +
		"\x02\x02\u020C\u020D\x07=\x02\x02\u020D\u0210\x07\x7F\x02\x02\u020E\u0211" +
		"\x05\x9AN\x02\u020F\u0211\x05\x9CO\x02\u0210\u020E\x03\x02\x02\x02\u0210" +
		"\u020F\x03\x02\x02\x02\u0211\u021B\x03\x02\x02\x02\u0212\u0214\x07\x7F" +
		"\x02\x02\u0213\u0212\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214" +
		"\u0215\x03\x02\x02\x02\u0215\u0216\x07>\x02\x02\u0216\u0219\x07\x7F\x02" +
		"\x02\u0217\u021A\x07\x07\x02\x02\u0218\u021A\x05.\x18\x02\u0219\u0217" +
		"\x03\x02\x02\x02\u0219\u0218\x03\x02\x02\x02\u021A\u021C\x03\x02\x02\x02" +
		"\u021B\u0213\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C-\x03\x02" +
		"\x02\x02\u021D\u0228\x050\x19\x02\u021E\u0220\x07\x7F\x02\x02\u021F\u021E" +
		"\x03\x02\x02\x02\u021F\u0220\x03\x02\x02\x02\u0220\u0221\x03\x02\x02\x02" +
		"\u0221\u0223\x07\x04\x02\x02\u0222\u0224\x07\x7F\x02\x02\u0223\u0222\x03" +
		"\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225" +
		"\u0227\x050\x19\x02\u0226\u021F\x03\x02\x02\x02\u0227\u022A\x03\x02\x02" +
		"\x02\u0228\u0226\x03\x02\x02\x02\u0228\u0229\x03\x02\x02\x02\u0229\u022F" +
		"\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022B\u022D\x07\x7F\x02\x02" +
		"\u022C\u022B\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u022E\x03" +
		"\x02\x02\x02\u022E\u0230\x05D#\x02\u022F\u022C\x03\x02\x02\x02\u022F\u0230" +
		"\x03\x02\x02\x02\u0230/\x03\x02\x02\x02\u0231\u0232\x05\x9EP\x02\u0232" +
		"\u0233\x07\x7F\x02\x02\u0233\u0234\x075\x02\x02\u0234\u0235\x07\x7F\x02" +
		"\x02\u0235\u0237\x03\x02\x02\x02\u0236\u0231\x03\x02\x02\x02\u0236\u0237" +
		"\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u0239\x05\xAEX\x02" +
		"\u02391\x03\x02\x02\x02\u023A\u023B\x07?\x02\x02\u023B\u0240\x056\x1C" +
		"\x02\u023C\u023E\x07\x7F\x02\x02\u023D\u023C\x03\x02\x02\x02\u023D\u023E" +
		"\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02\u023F\u0241\x05D#\x02\u0240" +
		"\u023D\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02\u02413\x03\x02\x02" +
		"\x02\u0242\u0243\x07@\x02\x02\u0243\u0244\x056\x1C\x02\u02445\x03\x02" +
		"\x02\x02\u0245\u0247\x07\x7F\x02\x02\u0246\u0245\x03\x02\x02\x02\u0246" +
		"\u0247\x03\x02\x02\x02\u0247\u0248\x03\x02\x02\x02\u0248\u024A\x07A\x02" +
		"\x02\u0249\u0246\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02\u024A\u024B" +
		"\x03\x02\x02\x02\u024B\u024C\x07\x7F\x02\x02\u024C\u024F\x058\x1D\x02" +
		"\u024D\u024E\x07\x7F\x02\x02\u024E\u0250\x05<\x1F\x02\u024F\u024D\x03" +
		"\x02\x02\x02\u024F\u0250\x03\x02\x02\x02\u0250\u0253\x03\x02\x02\x02\u0251" +
		"\u0252\x07\x7F\x02\x02\u0252\u0254\x05> \x02\u0253\u0251\x03\x02\x02\x02" +
		"\u0253\u0254\x03\x02\x02\x02\u0254\u0257\x03\x02\x02\x02\u0255\u0256\x07" +
		"\x7F\x02\x02\u0256\u0258\x05@!\x02\u0257\u0255\x03\x02\x02\x02\u0257\u0258" +
		"\x03\x02\x02\x02\u02587\x03\x02\x02\x02\u0259\u0264\x07\x07\x02\x02\u025A" +
		"\u025C\x07\x7F\x02\x02\u025B\u025A\x03\x02\x02\x02\u025B\u025C\x03\x02" +
		"\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025F\x07\x04\x02\x02\u025E" +
		"\u0260\x07\x7F\x02\x02\u025F\u025E\x03\x02\x02\x02\u025F\u0260\x03\x02" +
		"\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0263\x05:\x1E\x02\u0262\u025B" +
		"\x03\x02\x02\x02\u0263\u0266\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02" +
		"\u0264\u0265\x03\x02\x02\x02\u0265\u0276\x03\x02\x02\x02\u0266\u0264\x03" +
		"\x02\x02\x02\u0267\u0272\x05:\x1E\x02\u0268\u026A\x07\x7F\x02\x02\u0269" +
		"\u0268\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026B\x03\x02" +
		"\x02\x02\u026B\u026D\x07\x04\x02\x02\u026C\u026E\x07\x7F\x02\x02\u026D" +
		"\u026C\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x03\x02" +
		"\x02\x02\u026F\u0271\x05:\x1E\x02\u0270\u0269\x03\x02\x02\x02\u0271\u0274" +
		"\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02" +
		"\u0273\u0276\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0275\u0259\x03" +
		"\x02\x02\x02\u0275\u0267\x03\x02\x02\x02\u02769\x03\x02\x02\x02\u0277" +
		"\u0278\x05d3\x02\u0278\u0279\x07\x7F\x02\x02\u0279\u027A\x075\x02\x02" +
		"\u027A\u027B\x07\x7F\x02\x02\u027B\u027C\x05\xAEX\x02\u027C\u027F\x03" +
		"\x02\x02\x02\u027D\u027F\x05d3\x02\u027E\u0277\x03\x02\x02\x02\u027E\u027D" +
		"\x03\x02\x02\x02\u027F;\x03\x02\x02\x02\u0280\u0281\x07B\x02\x02\u0281" +
		"\u0282\x07\x7F\x02\x02\u0282\u0283\x07C\x02\x02\u0283\u0284\x07\x7F\x02" +
		"\x02\u0284\u028C\x05B\"\x02\u0285\u0287\x07\x04\x02\x02\u0286\u0288\x07" +
		"\x7F\x02\x02\u0287\u0286\x03\x02\x02\x02\u0287\u0288\x03\x02\x02\x02\u0288" +
		"\u0289\x03\x02\x02\x02\u0289\u028B\x05B\"\x02\u028A\u0285\x03\x02\x02" +
		"\x02\u028B\u028E\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D" +
		"\x03\x02\x02\x02\u028D=\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F" +
		"\u0290\x07D\x02\x02\u0290\u0291\x07\x7F\x02\x02\u0291\u0292\x05d3\x02" +
		"\u0292?\x03\x02\x02\x02\u0293\u0294\x07E\x02\x02\u0294\u0295\x07\x7F\x02" +
		"\x02\u0295\u0296\x05d3\x02\u0296A\x03\x02\x02\x02\u0297\u029C\x05d3\x02" +
		"\u0298\u029A\x07\x7F\x02\x02\u0299\u0298\x03\x02\x02\x02\u0299\u029A\x03" +
		"\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u029D\t\x02\x02\x02\u029C" +
		"\u0299\x03\x02\x02\x02\u029C\u029D\x03\x02\x02\x02\u029DC\x03\x02\x02" +
		"\x02\u029E\u029F\x07J\x02\x02\u029F\u02A0\x07\x7F\x02\x02\u02A0\u02A1" +
		"\x05d3\x02\u02A1E\x03\x02\x02\x02\u02A2\u02AD\x05H%\x02\u02A3\u02A5\x07" +
		"\x7F\x02\x02\u02A4\u02A3\x03\x02\x02\x02\u02A4\u02A5\x03\x02\x02\x02\u02A5" +
		"\u02A6\x03\x02\x02\x02\u02A6\u02A8\x07\x04\x02\x02\u02A7\u02A9\x07\x7F" +
		"\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A8\u02A9\x03\x02\x02\x02\u02A9" +
		"\u02AA\x03\x02\x02\x02\u02AA\u02AC\x05H%\x02\u02AB\u02A4\x03\x02\x02\x02" +
		"\u02AC\u02AF\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AD\u02AE\x03" +
		"\x02\x02\x02\u02AEG\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02B0" +
		"\u02B2\x05\xAEX\x02\u02B1\u02B3\x07\x7F\x02\x02\u02B2\u02B1\x03\x02\x02" +
		"\x02\u02B2\u02B3\x03\x02\x02\x02\u02B3\u02B4\x03\x02\x02\x02\u02B4\u02B6" +
		"\x07\x05\x02\x02\u02B5\u02B7\x07\x7F\x02\x02\u02B6\u02B5\x03\x02\x02\x02" +
		"\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02B9\x05" +
		"J&\x02\u02B9\u02BC\x03\x02\x02\x02\u02BA\u02BC\x05J&\x02\u02BB\u02B0\x03" +
		"\x02\x02\x02\u02BB\u02BA\x03\x02\x02\x02\u02BCI\x03\x02\x02\x02\u02BD" +
		"\u02BE\x05L\'\x02\u02BEK\x03\x02\x02\x02\u02BF\u02C6\x05N(\x02\u02C0\u02C2" +
		"\x07\x7F\x02\x02\u02C1\u02C0\x03\x02\x02\x02\u02C1\u02C2\x03\x02\x02\x02" +
		"\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C5\x05P)\x02\u02C4\u02C1\x03\x02" +
		"\x02\x02\u02C5\u02C8\x03\x02\x02\x02\u02C6\u02C4\x03\x02\x02\x02\u02C6" +
		"\u02C7\x03\x02\x02\x02\u02C7\u02CE\x03\x02\x02\x02\u02C8\u02C6\x03\x02" +
		"\x02\x02\u02C9\u02CA\x07\b\x02\x02\u02CA\u02CB\x05L\'\x02\u02CB\u02CC" +
		"\x07\t\x02\x02\u02CC\u02CE\x03\x02\x02\x02\u02CD\u02BF\x03\x02\x02\x02" +
		"\u02CD\u02C9\x03\x02\x02\x02\u02CEM\x03\x02\x02\x02\u02CF\u02D1\x07\b" +
		"\x02\x02\u02D0\u02D2\x07\x7F\x02\x02\u02D1\u02D0\x03\x02\x02\x02\u02D1" +
		"\u02D2\x03\x02\x02\x02\u02D2\u02D7\x03\x02\x02\x02\u02D3\u02D5\x05\xAE" +
		"X\x02\u02D4\u02D6\x07\x7F\x02\x02\u02D5\u02D4\x03\x02\x02\x02\u02D5\u02D6" +
		"\x03\x02\x02\x02\u02D6\u02D8\x03\x02\x02\x02\u02D7\u02D3\x03\x02\x02\x02" +
		"\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02DD\x03\x02\x02\x02\u02D9\u02DB\x05" +
		"Z.\x02\u02DA\u02DC\x07\x7F\x02\x02\u02DB\u02DA\x03\x02\x02\x02\u02DB\u02DC" +
		"\x03\x02\x02\x02\u02DC\u02DE\x03\x02\x02\x02\u02DD\u02D9\x03\x02\x02\x02" +
		"\u02DD\u02DE\x03\x02\x02\x02\u02DE\u02E3\x03\x02\x02\x02\u02DF\u02E1\x05" +
		"V,\x02\u02E0\u02E2\x07\x7F\x02\x02\u02E1\u02E0\x03\x02\x02\x02\u02E1\u02E2" +
		"\x03\x02\x02\x02\u02E2\u02E4\x03\x02\x02\x02\u02E3\u02DF\x03\x02\x02\x02" +
		"\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\u02E6\x07" +
		"\t\x02\x02\u02E6O\x03\x02\x02\x02\u02E7\u02E9\x05R*\x02\u02E8\u02EA\x07" +
		"\x7F\x02\x02\u02E9\u02E8\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA" +
		"\u02EB\x03\x02\x02\x02\u02EB\u02EC\x05N(\x02\u02ECQ\x03\x02\x02\x02\u02ED" +
		"\u02EF\x05\xC4c\x02\u02EE\u02F0\x07\x7F\x02\x02\u02EF\u02EE\x03\x02\x02" +
		"\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F3" +
		"\x05\xC8e\x02\u02F2\u02F4\x07\x7F\x02\x02\u02F3\u02F2\x03\x02\x02\x02" +
		"\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F6\x03\x02\x02\x02\u02F5\u02F7\x05" +
		"T+\x02\u02F6\u02F5\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F9" +
		"\x03\x02\x02\x02\u02F8\u02FA\x07\x7F\x02\x02\u02F9\u02F8\x03\x02\x02\x02" +
		"\u02F9\u02FA\x03\x02\x02\x02\u02FA\u02FB\x03\x02\x02\x02\u02FB\u02FD\x05" +
		"\xC8e\x02\u02FC\u02FE\x07\x7F\x02\x02\u02FD\u02FC\x03\x02\x02\x02\u02FD" +
		"\u02FE\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0300\x05\xC6" +
		"d\x02\u0300\u032E\x03\x02\x02\x02\u0301\u0303\x05\xC4c\x02\u0302\u0304" +
		"\x07\x7F\x02\x02\u0303\u0302\x03\x02\x02\x02\u0303\u0304\x03\x02\x02\x02" +
		"\u0304\u0305\x03\x02\x02\x02\u0305\u0307\x05\xC8e\x02\u0306\u0308\x07" +
		"\x7F\x02\x02\u0307\u0306\x03\x02\x02\x02\u0307\u0308\x03\x02\x02\x02\u0308" +
		"\u030A\x03\x02\x02\x02\u0309\u030B\x05T+\x02\u030A\u0309\x03\x02\x02\x02" +
		"\u030A\u030B\x03\x02\x02\x02\u030B\u030D\x03\x02\x02\x02\u030C\u030E\x07" +
		"\x7F\x02\x02\u030D\u030C\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E" +
		"\u030F\x03\x02\x02\x02\u030F\u0310\x05\xC8e\x02\u0310\u032E\x03\x02\x02" +
		"\x02\u0311\u0313\x05\xC8e\x02\u0312\u0314\x07\x7F\x02\x02\u0313\u0312" +
		"\x03\x02\x02\x02\u0313\u0314\x03\x02\x02\x02\u0314\u0316\x03\x02\x02\x02" +
		"\u0315\u0317\x05T+\x02\u0316\u0315\x03\x02\x02\x02\u0316\u0317\x03\x02" +
		"\x02\x02\u0317\u0319\x03\x02\x02\x02\u0318\u031A\x07\x7F\x02\x02\u0319" +
		"\u0318\x03\x02\x02\x02\u0319\u031A\x03\x02\x02\x02\u031A\u031B\x03\x02" +
		"\x02\x02\u031B\u031D\x05\xC8e\x02\u031C\u031E\x07\x7F\x02\x02\u031D\u031C" +
		"\x03\x02\x02\x02\u031D\u031E\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02" +
		"\u031F\u0320\x05\xC6d\x02\u0320\u032E\x03\x02\x02\x02\u0321\u0323\x05" +
		"\xC8e\x02\u0322\u0324\x07\x7F\x02\x02\u0323\u0322\x03\x02\x02\x02\u0323" +
		"\u0324\x03\x02\x02\x02\u0324\u0326\x03\x02\x02\x02\u0325\u0327\x05T+\x02" +
		"\u0326\u0325\x03\x02\x02\x02\u0326\u0327\x03\x02\x02\x02\u0327\u0329\x03" +
		"\x02\x02\x02\u0328\u032A\x07\x7F\x02\x02\u0329\u0328\x03\x02\x02\x02\u0329" +
		"\u032A\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032C\x05\xC8" +
		"e\x02\u032C\u032E\x03\x02\x02\x02\u032D\u02ED\x03\x02\x02\x02\u032D\u0301" +
		"\x03\x02\x02\x02\u032D\u0311\x03\x02\x02\x02\u032D\u0321\x03\x02\x02\x02" +
		"\u032ES\x03\x02\x02\x02\u032F\u0331\x07\n\x02\x02\u0330\u0332\x07\x7F" +
		"\x02\x02\u0331\u0330\x03\x02\x02\x02\u0331\u0332\x03\x02\x02\x02\u0332" +
		"\u0337\x03\x02\x02\x02\u0333\u0335\x05\xAEX\x02\u0334\u0336\x07\x7F\x02" +
		"\x02\u0335\u0334\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u0338" +
		"\x03\x02\x02\x02\u0337\u0333\x03\x02\x02\x02\u0337\u0338\x03\x02\x02\x02" +
		"\u0338\u033D\x03\x02\x02\x02\u0339\u033B\x05X-\x02\u033A\u033C\x07\x7F" +
		"\x02\x02\u033B\u033A\x03\x02\x02\x02\u033B\u033C\x03\x02\x02\x02\u033C" +
		"\u033E\x03\x02\x02\x02\u033D\u0339\x03\x02\x02\x02\u033D\u033E\x03\x02" +
		"\x02\x02\u033E\u0340\x03\x02\x02\x02\u033F\u0341\x05^0\x02\u0340\u033F" +
		"\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\u0346\x03\x02\x02\x02" +
		"\u0342\u0344\x05V,\x02\u0343\u0345\x07\x7F\x02\x02\u0344\u0343\x03\x02" +
		"\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\u0347\x03\x02\x02\x02\u0346" +
		"\u0342\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347\u0348\x03\x02" +
		"\x02\x02\u0348\u0349\x07\v\x02\x02\u0349U\x03\x02\x02\x02\u034A\u034D" +
		"\x05\xB2Z\x02\u034B\u034D\x05\xB4[\x02\u034C\u034A\x03\x02\x02\x02\u034C" +
		"\u034B\x03\x02\x02\x02\u034DW\x03\x02\x02\x02\u034E\u0350\x07\f\x02\x02" +
		"\u034F\u0351\x07\x7F\x02\x02\u0350\u034F\x03\x02\x02\x02\u0350\u0351\x03" +
		"\x02\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352\u0360\x05b2\x02\u0353\u0355" +
		"\x07\x7F\x02\x02\u0354\u0353\x03\x02\x02\x02\u0354\u0355\x03\x02\x02\x02" +
		"\u0355\u0356\x03\x02\x02\x02\u0356\u0358\x07\r\x02\x02\u0357\u0359\x07" +
		"\f\x02\x02\u0358\u0357\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359" +
		"\u035B\x03\x02\x02\x02\u035A\u035C\x07\x7F\x02\x02\u035B\u035A\x03\x02" +
		"\x02\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D" +
		"\u035F\x05b2\x02\u035E\u0354\x03\x02\x02\x02\u035F\u0362\x03\x02\x02\x02" +
		"\u0360\u035E\x03\x02\x02\x02\u0360\u0361\x03\x02\x02\x02\u0361Y\x03\x02" +
		"\x02\x02\u0362\u0360\x03\x02\x02\x02\u0363\u036A\x05\\/\x02\u0364\u0366" +
		"\x07\x7F\x02\x02\u0365\u0364\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02" +
		"\u0366\u0367\x03\x02\x02\x02\u0367\u0369\x05\\/\x02\u0368\u0365\x03\x02" +
		"\x02\x02\u0369\u036C\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02\u036A" +
		"\u036B\x03\x02\x02\x02\u036B[\x03\x02\x02\x02\u036C\u036A\x03\x02\x02" +
		"\x02\u036D\u036F\x07\f\x02\x02\u036E\u0370\x07\x7F\x02\x02\u036F\u036E" +
		"\x03\x02\x02\x02\u036F\u0370\x03\x02\x02\x02\u0370\u0371\x03\x02\x02\x02" +
		"\u0371\u0372\x05`1\x02\u0372]\x03\x02\x02\x02\u0373\u0375\x07\x07\x02" +
		"\x02\u0374\u0376\x07\x7F\x02\x02\u0375\u0374\x03\x02\x02\x02\u0375\u0376" +
		"\x03\x02\x02\x02\u0376\u037B\x03\x02\x02\x02\u0377\u0379\x05\xBA^\x02" +
		"\u0378\u037A\x07\x7F\x02\x02\u0379\u0378\x03\x02\x02\x02\u0379\u037A\x03" +
		"\x02\x02\x02\u037A\u037C\x03\x02\x02\x02\u037B\u0377\x03\x02\x02\x02\u037B" +
		"\u037C\x03\x02\x02\x02\u037C\u0387\x03\x02\x02\x02\u037D\u037F\x07\x0E" +
		"\x02\x02\u037E\u0380\x07\x7F\x02\x02\u037F\u037E\x03\x02\x02\x02\u037F" +
		"\u0380\x03\x02\x02\x02\u0380\u0385\x03\x02\x02\x02\u0381\u0383\x05\xBA" +
		"^\x02\u0382\u0384\x07\x7F\x02\x02\u0383\u0382\x03\x02\x02\x02\u0383\u0384" +
		"\x03\x02\x02\x02\u0384\u0386\x03\x02\x02\x02\u0385\u0381\x03\x02\x02\x02" +
		"\u0385\u0386\x03\x02\x02\x02\u0386\u0388\x03\x02\x02\x02\u0387\u037D\x03" +
		"\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388_\x03\x02\x02\x02\u0389" +
		"\u038A\x05\xBE`\x02\u038Aa\x03\x02\x02\x02\u038B\u038C\x05\xBE`\x02\u038C" +
		"c\x03\x02\x02\x02\u038D\u038E\x05f4\x02\u038Ee\x03\x02\x02\x02\u038F\u0396" +
		"\x05h5\x02\u0390\u0391\x07\x7F\x02\x02\u0391\u0392\x07K\x02\x02\u0392" +
		"\u0393\x07\x7F\x02\x02\u0393\u0395\x05h5\x02\u0394\u0390\x03\x02\x02\x02" +
		"\u0395\u0398\x03\x02\x02\x02\u0396\u0394\x03\x02\x02\x02\u0396\u0397\x03" +
		"\x02\x02\x02\u0397g\x03\x02\x02\x02\u0398\u0396\x03\x02\x02\x02\u0399" +
		"\u03A0\x05j6\x02\u039A\u039B\x07\x7F\x02\x02\u039B\u039C\x07L\x02\x02" +
		"\u039C\u039D\x07\x7F\x02\x02\u039D\u039F\x05j6\x02\u039E\u039A\x03\x02" +
		"\x02\x02\u039F\u03A2\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A0" +
		"\u03A1\x03\x02\x02\x02\u03A1i\x03\x02\x02\x02\u03A2\u03A0\x03\x02\x02" +
		"\x02\u03A3\u03AA\x05l7\x02\u03A4\u03A5\x07\x7F\x02\x02\u03A5\u03A6\x07" +
		"M\x02\x02\u03A6\u03A7\x07\x7F\x02\x02\u03A7\u03A9\x05l7\x02\u03A8\u03A4" +
		"\x03\x02\x02\x02\u03A9\u03AC\x03\x02\x02\x02\u03AA\u03A8\x03\x02\x02\x02" +
		"\u03AA\u03AB\x03\x02\x02\x02\u03ABk\x03\x02\x02\x02\u03AC\u03AA\x03\x02" +
		"\x02\x02\u03AD\u03AF\x07N\x02\x02\u03AE\u03B0\x07\x7F\x02\x02\u03AF\u03AE" +
		"\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02\u03B0\u03B2\x03\x02\x02\x02" +
		"\u03B1\u03AD\x03\x02\x02\x02\u03B2\u03B5\x03\x02\x02\x02\u03B3\u03B1\x03" +
		"\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B6\x03\x02\x02\x02\u03B5" +
		"\u03B3\x03\x02\x02\x02\u03B6\u03B7\x05n8\x02\u03B7m\x03\x02\x02\x02\u03B8" +
		"\u03BF\x05p9\x02\u03B9\u03BB\x07\x7F\x02\x02\u03BA\u03B9\x03\x02\x02\x02" +
		"\u03BA\u03BB\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BE\x05" +
		"\x8AF\x02\u03BD\u03BA\x03\x02\x02\x02\u03BE\u03C1\x03\x02\x02\x02\u03BF" +
		"\u03BD\x03\x02\x02\x02\u03BF\u03C0\x03\x02\x02\x02\u03C0o\x03\x02\x02" +
		"\x02\u03C1\u03BF\x03\x02\x02\x02\u03C2\u03D5\x05r:\x02\u03C3\u03C5\x07" +
		"\x7F\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u03C4\u03C3\x03\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C6" +
		"\x03\x02\x02\x02\u03C6\u03C8\x07\x0F\x02\x02\u03C7\u03C9\x07\x7F\x02\x02" +
		"\u03C8\u03C7\x03\x02\x02\x02\u03C8\u03C9\x03\x02\x02\x02\u03C9\u03CA\x03" +
		"\x02\x02\x02\u03CA\u03D4\x05r:\x02\u03CB\u03CD\x07\x7F\x02\x02\u03CC\u03CB" +
		"\x03\x02\x02\x02\u03CC\u03CD\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02" +
		"\u03CE\u03D0\x07\x10\x02\x02\u03CF\u03D1\x07\x7F\x02\x02\u03D0\u03CF\x03" +
		"\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\u03D2\x03\x02\x02\x02\u03D2" +
		"\u03D4\x05r:\x02\u03D3\u03C4\x03\x02\x02\x02\u03D3\u03CC\x03\x02\x02\x02" +
		"\u03D4\u03D7\x03\x02\x02\x02\u03D5\u03D3\x03\x02\x02\x02\u03D5\u03D6\x03" +
		"\x02\x02\x02\u03D6q\x03\x02\x02\x02\u03D7\u03D5\x03\x02\x02\x02\u03D8" +
		"\u03F3\x05t;\x02\u03D9\u03DB\x07\x7F\x02\x02\u03DA\u03D9\x03\x02\x02\x02" +
		"\u03DA\u03DB\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DE\x07" +
		"\x07\x02\x02\u03DD\u03DF\x07\x7F\x02\x02\u03DE\u03DD\x03\x02\x02\x02\u03DE" +
		"\u03DF\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0\u03F2\x05t;\x02" +
		"\u03E1\u03E3\x07\x7F\x02\x02\u03E2\u03E1\x03\x02\x02\x02\u03E2\u03E3\x03" +
		"\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E6\x07\x11\x02\x02\u03E5" +
		"\u03E7\x07\x7F\x02\x02\u03E6\u03E5\x03\x02\x02\x02\u03E6\u03E7\x03\x02" +
		"\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03F2\x05t;\x02\u03E9\u03EB" +
		"\x07\x7F\x02\x02\u03EA\u03E9\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02\x02" +
		"\u03EB\u03EC\x03\x02\x02\x02\u03EC\u03EE\x07\x12\x02\x02\u03ED\u03EF\x07" +
		"\x7F\x02\x02\u03EE\u03ED\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF" +
		"\u03F0\x03\x02\x02\x02\u03F0\u03F2\x05t;\x02\u03F1\u03DA\x03\x02\x02\x02" +
		"\u03F1\u03E2\x03\x02\x02\x02\u03F1\u03EA\x03\x02\x02\x02\u03F2\u03F5\x03" +
		"\x02\x02\x02\u03F3\u03F1\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4" +
		"s\x03\x02\x02\x02\u03F5\u03F3\x03\x02\x02\x02\u03F6\u0401\x05v<\x02\u03F7" +
		"\u03F9\x07\x7F\x02\x02\u03F8\u03F7\x03\x02\x02\x02\u03F8\u03F9\x03\x02" +
		"\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA\u03FC\x07\x13\x02\x02\u03FB" +
		"\u03FD\x07\x7F\x02\x02\u03FC\u03FB\x03\x02\x02\x02\u03FC\u03FD\x03\x02" +
		"\x02\x02\u03FD\u03FE\x03\x02\x02\x02\u03FE\u0400\x05v<\x02\u03FF\u03F8" +
		"\x03\x02\x02\x02\u0400\u0403\x03\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02" +
		"\u0401\u0402\x03\x02\x02\x02\u0402u\x03\x02\x02\x02\u0403\u0401\x03\x02" +
		"\x02\x02\u0404\u0406\t\x03\x02\x02\u0405\u0407\x07\x7F\x02\x02\u0406\u0405" +
		"\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02\u0407\u0409\x03\x02\x02\x02" +
		"\u0408\u0404\x03\x02\x02\x02\u0409\u040C\x03\x02\x02\x02\u040A\u0408\x03" +
		"\x02\x02\x02\u040A\u040B\x03\x02\x02\x02\u040B\u040D\x03\x02\x02\x02\u040C" +
		"\u040A\x03\x02\x02\x02\u040D\u040E\x05x=\x02\u040Ew\x03\x02\x02\x02\u040F" +
		"\u0415\x05\x80A\x02\u0410\u0414\x05|?\x02\u0411\u0414\x05z>\x02\u0412" +
		"\u0414\x05~@\x02\u0413\u0410\x03\x02\x02\x02\u0413\u0411\x03\x02\x02\x02" +
		"\u0413\u0412\x03\x02\x02\x02\u0414\u0417\x03\x02\x02\x02\u0415\u0413\x03" +
		"\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416y\x03\x02\x02\x02\u0417" +
		"\u0415\x03\x02\x02\x02\u0418\u0419\x07\x7F\x02\x02\u0419\u041B\x07O\x02" +
		"\x02\u041A\u041C\x07\x7F\x02\x02\u041B\u041A\x03\x02\x02\x02\u041B\u041C" +
		"\x03\x02\x02\x02\u041C\u041D\x03\x02\x02\x02\u041D\u0432\x05\x80A\x02" +
		"\u041E\u0420\x07\x7F\x02\x02\u041F\u041E\x03\x02\x02\x02\u041F\u0420\x03" +
		"\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0422\x07\n\x02\x02\u0422" +
		"\u0423\x05d3\x02\u0423\u0424\x07\v\x02\x02\u0424\u0432\x03\x02\x02\x02" +
		"\u0425\u0427\x07\x7F\x02\x02\u0426\u0425\x03\x02\x02\x02\u0426\u0427\x03" +
		"\x02\x02\x02\u0427\u0428\x03\x02\x02\x02\u0428\u042A\x07\n\x02\x02\u0429" +
		"\u042B\x05d3\x02\u042A\u0429\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02" +
		"\u042B\u042C\x03\x02\x02\x02\u042C\u042E\x07\x0E\x02\x02\u042D\u042F\x05" +
		"d3\x02\u042E\u042D\x03\x02\x02\x02\u042E\u042F\x03\x02\x02\x02\u042F\u0430" +
		"\x03\x02\x02\x02\u0430\u0432\x07\v\x02\x02\u0431\u0418\x03\x02\x02\x02" +
		"\u0431\u041F\x03\x02\x02\x02\u0431\u0426\x03\x02\x02\x02\u0432{\x03\x02" +
		"\x02\x02\u0433\u0434\x07\x7F\x02\x02\u0434\u0435\x07P\x02\x02\u0435\u0436" +
		"\x07\x7F\x02\x02\u0436\u043E\x07?\x02\x02\u0437\u0438\x07\x7F\x02\x02" +
		"\u0438\u0439\x07Q\x02\x02\u0439\u043A\x07\x7F\x02\x02\u043A\u043E\x07" +
		"?\x02\x02\u043B\u043C\x07\x7F\x02\x02\u043C\u043E\x07R\x02\x02\u043D\u0433" +
		"\x03\x02\x02\x02\u043D\u0437\x03\x02\x02\x02\u043D\u043B\x03\x02\x02\x02" +
		"\u043E\u0440\x03\x02\x02\x02\u043F\u0441\x07\x7F\x02\x02\u0440\u043F\x03" +
		"\x02\x02\x02\u0440\u0441\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442" +
		"\u0443\x05\x80A\x02\u0443}\x03\x02\x02\x02\u0444\u0445\x07\x7F\x02\x02" +
		"\u0445\u0446\x07S\x02\x02\u0446\u0447\x07\x7F\x02\x02\u0447\u044F\x07" +
		"T\x02\x02\u0448\u0449\x07\x7F\x02\x02\u0449\u044A\x07S\x02\x02\u044A\u044B" +
		"\x07\x7F\x02\x02\u044B\u044C\x07N\x02\x02\u044C\u044D\x07\x7F\x02\x02" +
		"\u044D\u044F\x07T\x02\x02\u044E\u0444\x03\x02\x02\x02\u044E\u0448\x03" +
		"\x02\x02\x02\u044F\x7F\x03\x02\x02\x02\u0450\u0457\x05\x82B\x02\u0451" +
		"\u0453\x07\x7F\x02\x02\u0452\u0451\x03\x02\x02\x02\u0452\u0453\x03\x02" +
		"\x02\x02\u0453\u0454\x03\x02\x02\x02\u0454\u0456\x05\xA8U\x02\u0455\u0452" +
		"\x03\x02\x02\x02\u0456\u0459\x03\x02\x02\x02\u0457\u0455\x03\x02\x02\x02" +
		"\u0457\u0458\x03\x02\x02\x02\u0458\u045E\x03\x02\x02\x02\u0459\u0457\x03" +
		"\x02\x02\x02\u045A\u045C\x07\x7F\x02\x02\u045B\u045A\x03\x02\x02\x02\u045B" +
		"\u045C\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D\u045F\x05Z.\x02" +
		"\u045E\u045B\x03\x02\x02\x02\u045E\u045F\x03\x02\x02\x02\u045F\x81\x03" +
		"\x02\x02\x02\u0460\u04B0\x05\x84C\x02\u0461\u04B0\x05\xB4[\x02\u0462\u04B0" +
		"\x05\xAAV\x02\u0463\u0465\x07U\x02\x02\u0464\u0466\x07\x7F\x02\x02\u0465" +
		"\u0464\x03\x02\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466\u0467\x03\x02" +
		"\x02\x02\u0467\u0469\x07\b\x02\x02\u0468\u046A\x07\x7F\x02\x02\u0469\u0468" +
		"\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\u046B\x03\x02\x02\x02" +
		"\u046B\u046D\x07\x07\x02\x02\u046C\u046E\x07\x7F\x02\x02\u046D\u046C\x03" +
		"\x02\x02\x02\u046D\u046E\x03\x02\x02\x02\u046E\u046F\x03\x02\x02\x02\u046F" +
		"\u04B0\x07\t\x02\x02\u0470\u04B0\x05\xA4S\x02\u0471\u04B0\x05\xA6T\x02" +
		"\u0472\u0474\x071\x02\x02\u0473\u0475\x07\x7F\x02\x02\u0474\u0473\x03" +
		"\x02\x02\x02\u0474\u0475\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476" +
		"\u0478\x07\b\x02\x02\u0477\u0479\x07\x7F\x02\x02\u0478\u0477\x03\x02\x02" +
		"\x02\u0478\u0479\x03\x02\x02\x02\u0479\u047A\x03\x02\x02\x02\u047A\u047C" +
		"\x05\x90I\x02\u047B\u047D\x07\x7F\x02\x02\u047C\u047B\x03\x02\x02\x02" +
		"\u047C\u047D\x03\x02\x02\x02\u047D\u047E\x03\x02\x02\x02\u047E\u047F\x07" +
		"\t\x02\x02\u047F\u04B0\x03\x02\x02\x02\u0480\u0482\x07V\x02\x02\u0481" +
		"\u0483\x07\x7F\x02\x02\u0482\u0481\x03\x02\x02\x02\u0482\u0483\x03\x02" +
		"\x02\x02\u0483\u0484\x03\x02\x02\x02\u0484\u0486\x07\b\x02\x02\u0485\u0487" +
		"\x07\x7F\x02\x02\u0486\u0485\x03\x02\x02\x02\u0486\u0487\x03\x02\x02\x02" +
		"\u0487\u0488\x03\x02\x02\x02\u0488\u048A\x05\x90I\x02\u0489\u048B\x07" +
		"\x7F\x02\x02\u048A\u0489\x03\x02\x02\x02\u048A\u048B\x03\x02\x02\x02\u048B" +
		"\u048C\x03\x02\x02\x02\u048C\u048D\x07\t\x02\x02\u048D\u04B0\x03\x02\x02" +
		"\x02\u048E\u0490\x07W\x02\x02\u048F\u0491\x07\x7F\x02\x02\u0490\u048F" +
		"\x03\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u0492\x03\x02\x02\x02" +
		"\u0492\u0494\x07\b\x02\x02\u0493\u0495\x07\x7F\x02\x02\u0494\u0493\x03" +
		"\x02\x02\x02\u0494\u0495\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496" +
		"\u0498\x05\x90I\x02\u0497\u0499\x07\x7F\x02\x02\u0498\u0497\x03\x02\x02" +
		"\x02\u0498\u0499\x03\x02\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A\u049B" +
		"\x07\t\x02\x02\u049B\u04B0\x03\x02\x02\x02\u049C\u049E\x07X\x02\x02\u049D" +
		"\u049F\x07\x7F\x02\x02\u049E\u049D\x03\x02\x02\x02\u049E\u049F\x03\x02" +
		"\x02\x02\u049F\u04A0\x03\x02\x02\x02\u04A0\u04A2\x07\b\x02\x02\u04A1\u04A3" +
		"\x07\x7F\x02\x02\u04A2\u04A1\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02" +
		"\u04A3\u04A4\x03\x02\x02\x02\u04A4\u04A6\x05\x90I\x02\u04A5\u04A7\x07" +
		"\x7F\x02\x02\u04A6\u04A5\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7" +
		"\u04A8\x03\x02\x02\x02\u04A8\u04A9\x07\t\x02\x02\u04A9\u04B0\x03\x02\x02" +
		"\x02\u04AA\u04B0\x05\x8EH\x02\u04AB\u04B0\x05\x8CG\x02\u04AC\u04B0\x05" +
		"\x94K\x02\u04AD\u04B0\x05\x98M\x02\u04AE\u04B0\x05\xAEX\x02\u04AF\u0460" +
		"\x03\x02\x02\x02\u04AF\u0461\x03\x02\x02\x02\u04AF\u0462\x03\x02\x02\x02" +
		"\u04AF\u0463\x03\x02\x02\x02\u04AF\u0470\x03\x02\x02\x02\u04AF\u0471\x03" +
		"\x02\x02\x02\u04AF\u0472\x03\x02\x02\x02\u04AF\u0480\x03\x02\x02\x02\u04AF" +
		"\u048E\x03\x02\x02\x02\u04AF\u049C\x03\x02\x02\x02\u04AF\u04AA\x03\x02" +
		"\x02\x02\u04AF\u04AB\x03\x02\x02\x02\u04AF\u04AC\x03\x02\x02\x02\u04AF" +
		"\u04AD\x03\x02\x02\x02\u04AF\u04AE\x03\x02\x02\x02\u04B0\x83\x03\x02\x02" +
		"\x02\u04B1\u04B8\x05\xB0Y\x02\u04B2\u04B8\x07a\x02\x02\u04B3\u04B8\x05" +
		"\x86D\x02\u04B4\u04B8\x07T\x02\x02\u04B5\u04B8\x05\xB2Z\x02\u04B6\u04B8" +
		"\x05\x88E\x02\u04B7\u04B1\x03\x02\x02\x02\u04B7\u04B2\x03\x02\x02\x02" +
		"\u04B7\u04B3\x03\x02\x02\x02\u04B7\u04B4\x03\x02\x02\x02\u04B7\u04B5\x03" +
		"\x02\x02\x02\u04B7\u04B6\x03\x02\x02\x02\u04B8\x85\x03\x02\x02\x02\u04B9" +
		"\u04BA\t\x04\x02\x02\u04BA\x87\x03\x02\x02\x02\u04BB\u04BD\x07\n\x02\x02" +
		"\u04BC\u04BE\x07\x7F\x02\x02\u04BD\u04BC\x03\x02\x02\x02\u04BD\u04BE\x03" +
		"\x02\x02\x02\u04BE\u04D0\x03\x02\x02\x02\u04BF\u04C1\x05d3\x02\u04C0\u04C2" +
		"\x07\x7F\x02\x02\u04C1\u04C0\x03\x02\x02\x02\u04C1\u04C2\x03\x02\x02\x02" +
		"\u04C2\u04CD\x03\x02\x02\x02\u04C3\u04C5\x07\x04\x02\x02\u04C4\u04C6\x07" +
		"\x7F\x02\x02\u04C5\u04C4\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6" +
		"\u04C7\x03\x02\x02\x02\u04C7\u04C9\x05d3\x02\u04C8\u04CA\x07\x7F\x02\x02" +
		"\u04C9\u04C8\x03\x02\x02\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04CC\x03" +
		"\x02\x02\x02\u04CB\u04C3\x03\x02\x02\x02\u04CC\u04CF\x03\x02\x02\x02\u04CD" +
		"\u04CB\x03\x02\x02\x02\u04CD\u04CE\x03\x02\x02\x02\u04CE\u04D1\x03\x02" +
		"\x02\x02\u04CF\u04CD\x03\x02\x02\x02\u04D0\u04BF\x03\x02\x02\x02\u04D0" +
		"\u04D1\x03\x02\x02\x02\u04D1\u04D2\x03\x02\x02\x02\u04D2\u04D3\x07\v\x02" +
		"\x02\u04D3\x89\x03\x02\x02\x02\u04D4\u04D6\x07\x05\x02\x02\u04D5\u04D7" +
		"\x07\x7F\x02\x02\u04D6\u04D5\x03\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02" +
		"\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04F3\x05p9\x02\u04D9\u04DB\x07\x14" +
		"\x02\x02\u04DA\u04DC\x07\x7F\x02\x02\u04DB\u04DA\x03\x02\x02\x02\u04DB" +
		"\u04DC\x03\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD\u04F3\x05p9\x02" +
		"\u04DE\u04E0\x07\x15\x02\x02\u04DF\u04E1\x07\x7F\x02\x02\u04E0\u04DF\x03" +
		"\x02\x02\x02\u04E0\u04E1\x03\x02\x02\x02\u04E1\u04E2\x03\x02\x02\x02\u04E2" +
		"\u04F3\x05p9\x02\u04E3\u04E5\x07\x16\x02\x02\u04E4\u04E6\x07\x7F\x02\x02" +
		"\u04E5\u04E4\x03\x02\x02\x02\u04E5\u04E6\x03\x02\x02\x02\u04E6\u04E7\x03" +
		"\x02\x02\x02\u04E7\u04F3\x05p9\x02\u04E8\u04EA\x07\x17\x02\x02\u04E9\u04EB" +
		"\x07\x7F\x02\x02\u04EA\u04E9\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02" +
		"\u04EB\u04EC\x03\x02\x02\x02\u04EC\u04F3\x05p9\x02\u04ED\u04EF\x07\x18" +
		"\x02\x02\u04EE\u04F0\x07\x7F\x02\x02\u04EF\u04EE\x03\x02\x02\x02\u04EF" +
		"\u04F0\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02\u04F1\u04F3\x05p9\x02" +
		"\u04F2\u04D4\x03\x02\x02\x02\u04F2\u04D9\x03\x02\x02\x02\u04F2\u04DE\x03" +
		"\x02\x02\x02\u04F2\u04E3\x03\x02\x02\x02\u04F2\u04E8\x03\x02\x02\x02\u04F2" +
		"\u04ED\x03\x02\x02\x02\u04F3\x8B\x03\x02\x02\x02\u04F4\u04F6\x07\b\x02" +
		"\x02\u04F5\u04F7\x07\x7F\x02\x02\u04F6\u04F5\x03\x02\x02\x02\u04F6\u04F7" +
		"\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8\u04FA\x05d3\x02\u04F9" +
		"\u04FB\x07\x7F\x02\x02\u04FA\u04F9\x03\x02\x02\x02\u04FA\u04FB\x03\x02" +
		"\x02\x02\u04FB\u04FC\x03\x02\x02\x02\u04FC\u04FD\x07\t\x02\x02\u04FD\x8D" +
		"\x03\x02\x02\x02\u04FE\u0503\x05N(\x02\u04FF\u0501\x07\x7F\x02\x02\u0500" +
		"\u04FF\x03\x02\x02\x02\u0500\u0501\x03\x02\x02\x02\u0501\u0502\x03\x02" +
		"\x02\x02\u0502\u0504\x05P)\x02\u0503\u0500\x03\x02\x02\x02\u0504\u0505" +
		"\x03\x02\x02\x02\u0505\u0503\x03\x02\x02\x02\u0505\u0506\x03\x02\x02\x02" +
		"\u0506\x8F\x03\x02\x02\x02\u0507\u050C\x05\x92J\x02\u0508\u050A\x07\x7F" +
		"\x02\x02\u0509\u0508\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02\u050A" +
		"\u050B\x03\x02\x02\x02\u050B\u050D\x05D#\x02\u050C\u0509\x03\x02\x02\x02" +
		"\u050C\u050D\x03\x02\x02\x02\u050D\x91\x03\x02\x02\x02\u050E\u050F\x05" +
		"\xAEX\x02\u050F\u0510\x07\x7F\x02\x02\u0510\u0511\x07O\x02\x02\u0511\u0512" +
		"\x07\x7F\x02\x02\u0512\u0513\x05d3\x02\u0513\x93\x03\x02\x02\x02\u0514" +
		"\u0516\x05\x96L\x02\u0515\u0517\x07\x7F\x02\x02\u0516\u0515\x03\x02\x02" +
		"\x02\u0516\u0517\x03\x02\x02\x02\u0517\u0518\x03\x02\x02\x02\u0518\u051A" +
		"\x07\b\x02\x02\u0519\u051B\x07\x7F\x02\x02\u051A\u0519\x03\x02\x02\x02" +
		"\u051A\u051B\x03\x02\x02\x02\u051B\u0520\x03\x02\x02\x02\u051C\u051E\x07" +
		"A\x02\x02\u051D\u051F\x07\x7F\x02\x02\u051E\u051D\x03\x02\x02\x02\u051E" +
		"\u051F\x03\x02\x02\x02\u051F\u0521\x03\x02\x02\x02\u0520\u051C\x03\x02" +
		"\x02\x02\u0520\u0521\x03\x02\x02\x02\u0521\u0533\x03\x02\x02\x02\u0522" +
		"\u0524\x05d3\x02\u0523\u0525\x07\x7F\x02\x02\u0524\u0523\x03\x02\x02\x02" +
		"\u0524\u0525\x03\x02\x02\x02\u0525\u0530\x03\x02\x02\x02\u0526\u0528\x07" +
		"\x04\x02\x02\u0527\u0529\x07\x7F\x02\x02\u0528\u0527\x03\x02\x02\x02\u0528" +
		"\u0529\x03\x02\x02\x02\u0529\u052A\x03\x02\x02\x02\u052A\u052C\x05d3\x02" +
		"\u052B\u052D\x07\x7F\x02\x02\u052C\u052B\x03\x02\x02\x02\u052C\u052D\x03" +
		"\x02\x02\x02\u052D\u052F\x03\x02\x02\x02\u052E\u0526\x03\x02\x02\x02\u052F" +
		"\u0532\x03\x02\x02\x02\u0530\u052E\x03\x02\x02\x02\u0530\u0531\x03\x02" +
		"\x02\x02\u0531\u0534\x03\x02\x02\x02\u0532\u0530\x03\x02\x02\x02\u0533" +
		"\u0522\x03\x02\x02\x02\u0533\u0534\x03\x02\x02\x02\u0534\u0535\x03\x02" +
		"\x02\x02\u0535\u0536\x07\t\x02\x02\u0536\x95\x03\x02\x02\x02\u0537\u0538" +
		"\x05\xA2R\x02\u0538\u0539\x05\xC2b\x02\u0539\x97\x03\x02\x02\x02\u053A" +
		"\u053C\x07[\x02\x02\u053B\u053D\x07\x7F\x02\x02\u053C\u053B\x03\x02\x02" +
		"\x02\u053C\u053D\x03\x02\x02\x02\u053D\u053E\x03\x02\x02\x02\u053E\u0540" +
		"\x07\x19\x02\x02\u053F\u0541\x07\x7F\x02\x02\u0540\u053F\x03\x02\x02\x02" +
		"\u0540\u0541\x03\x02\x02\x02\u0541\u054A\x03\x02\x02\x02\u0542\u054B\x05" +
		"\b\x05\x02\u0543\u0548\x05F$\x02\u0544\u0546\x07\x7F\x02\x02\u0545\u0544" +
		"\x03\x02\x02\x02\u0545\u0546\x03\x02\x02\x02\u0546\u0547\x03\x02\x02\x02" +
		"\u0547\u0549\x05D#\x02\u0548\u0545\x03\x02\x02\x02\u0548\u0549\x03\x02" +
		"\x02\x02\u0549\u054B\x03\x02\x02\x02\u054A\u0542\x03\x02\x02\x02\u054A" +
		"\u0543\x03\x02\x02\x02\u054B\u054D\x03\x02\x02\x02\u054C\u054E\x07\x7F" +
		"\x02\x02\u054D\u054C\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E" +
		"\u054F\x03\x02\x02\x02\u054F\u0550\x07\x1A\x02\x02\u0550\x99\x03\x02\x02" +
		"\x02\u0551\u0553\x05\xA0Q\x02\u0552\u0554\x07\x7F\x02\x02\u0553\u0552" +
		"\x03\x02\x02\x02\u0553\u0554\x03\x02\x02\x02\u0554\u0555\x03\x02\x02\x02" +
		"\u0555\u0557\x07\b\x02\x02\u0556\u0558\x07\x7F\x02\x02\u0557\u0556\x03" +
		"\x02\x02\x02\u0557\u0558\x03\x02\x02\x02\u0558\u056A\x03\x02\x02\x02\u0559" +
		"\u055B\x05d3\x02\u055A\u055C\x07\x7F\x02\x02\u055B\u055A\x03\x02\x02\x02" +
		"\u055B\u055C\x03\x02\x02\x02\u055C\u0567\x03\x02\x02\x02\u055D\u055F\x07" +
		"\x04\x02\x02\u055E\u0560\x07\x7F\x02\x02\u055F\u055E\x03\x02\x02\x02\u055F" +
		"\u0560\x03\x02\x02\x02\u0560\u0561\x03\x02\x02\x02\u0561\u0563\x05d3\x02" +
		"\u0562\u0564\x07\x7F\x02\x02\u0563\u0562\x03\x02\x02\x02\u0563\u0564\x03" +
		"\x02\x02\x02\u0564\u0566\x03\x02\x02\x02\u0565\u055D\x03\x02\x02\x02\u0566" +
		"\u0569\x03\x02\x02\x02\u0567\u0565\x03\x02\x02\x02\u0567\u0568\x03\x02" +
		"\x02\x02\u0568\u056B\x03\x02\x02\x02\u0569\u0567\x03\x02\x02\x02\u056A" +
		"\u0559\x03\x02\x02\x02\u056A\u056B\x03\x02\x02\x02\u056B\u056C\x03\x02" +
		"\x02\x02\u056C\u056D\x07\t\x02\x02\u056D\x9B\x03\x02\x02\x02\u056E\u056F" +
		"\x05\xA0Q\x02\u056F\x9D\x03\x02\x02\x02\u0570\u0571\x05\xC2b\x02\u0571" +
		"\x9F\x03\x02\x02\x02\u0572\u0573\x05\xA2R\x02\u0573\u0574\x05\xC2b\x02" +
		"\u0574\xA1\x03\x02\x02\x02\u0575\u0576\x05\xC2b\x02\u0576\u0577\x07\x1B" +
		"\x02\x02\u0577\u0579\x03\x02\x02\x02\u0578\u0575\x03\x02\x02\x02\u0579" +
		"\u057C\x03\x02\x02\x02\u057A\u0578\x03\x02\x02\x02\u057A\u057B\x03\x02" +
		"\x02\x02\u057B\xA3\x03\x02\x02\x02\u057C\u057A\x03\x02\x02\x02\u057D\u057F" +
		"\x07\n\x02\x02\u057E\u0580\x07\x7F\x02\x02\u057F\u057E\x03\x02\x02\x02" +
		"\u057F\u0580\x03\x02\x02\x02\u0580\u0581\x03\x02\x02\x02\u0581\u058A\x05" +
		"\x90I\x02\u0582\u0584\x07\x7F\x02\x02\u0583\u0582\x03\x02\x02\x02\u0583" +
		"\u0584\x03\x02\x02\x02\u0584\u0585\x03\x02\x02\x02\u0585\u0587\x07\r\x02" +
		"\x02\u0586\u0588\x07\x7F\x02\x02\u0587\u0586\x03\x02\x02\x02\u0587\u0588" +
		"\x03\x02\x02\x02\u0588\u0589\x03\x02\x02\x02\u0589\u058B\x05d3\x02\u058A" +
		"\u0583\x03\x02\x02\x02\u058A\u058B\x03\x02\x02\x02\u058B\u058D\x03\x02" +
		"\x02\x02\u058C\u058E\x07\x7F\x02\x02\u058D\u058C\x03\x02\x02\x02\u058D" +
		"\u058E\x03\x02\x02\x02\u058E\u058F\x03\x02\x02\x02\u058F\u0590\x07\v\x02" +
		"\x02\u0590\xA5\x03\x02\x02\x02\u0591\u0593\x07\n\x02\x02\u0592\u0594\x07" +
		"\x7F\x02\x02\u0593\u0592\x03\x02\x02\x02\u0593\u0594\x03\x02\x02\x02\u0594" +
		"\u059D\x03\x02\x02\x02\u0595\u0597\x05\xAEX\x02\u0596\u0598\x07\x7F\x02" +
		"\x02\u0597\u0596\x03\x02\x02\x02\u0597\u0598\x03\x02\x02\x02\u0598\u0599" +
		"\x03\x02\x02\x02\u0599\u059B\x07\x05\x02\x02\u059A\u059C\x07\x7F\x02\x02" +
		"\u059B\u059A\x03\x02\x02\x02\u059B\u059C\x03\x02\x02\x02\u059C\u059E\x03" +
		"\x02\x02\x02\u059D\u0595\x03\x02\x02\x02\u059D\u059E\x03\x02\x02\x02\u059E" +
		"\u059F\x03\x02\x02\x02\u059F\u05A1\x05\x8EH\x02\u05A0\u05A2\x07\x7F\x02" +
		"\x02\u05A1\u05A0\x03\x02\x02\x02\u05A1\u05A2\x03\x02\x02\x02\u05A2\u05A7" +
		"\x03\x02\x02\x02\u05A3\u05A5\x05D#\x02\u05A4\u05A6\x07\x7F\x02\x02\u05A5" +
		"\u05A4\x03\x02\x02\x02\u05A5\u05A6\x03\x02\x02\x02\u05A6\u05A8\x03\x02" +
		"\x02\x02\u05A7\u05A3\x03\x02\x02\x02\u05A7\u05A8\x03\x02\x02\x02\u05A8" +
		"\u05A9\x03\x02\x02\x02\u05A9\u05AB\x07\r\x02\x02\u05AA\u05AC\x07\x7F\x02" +
		"\x02\u05AB\u05AA\x03\x02\x02\x02\u05AB\u05AC\x03\x02\x02\x02\u05AC\u05AD" +
		"\x03\x02\x02\x02\u05AD\u05AF\x05d3\x02\u05AE\u05B0\x07\x7F\x02\x02\u05AF" +
		"\u05AE\x03\x02\x02\x02\u05AF\u05B0\x03\x02\x02\x02\u05B0\u05B1\x03\x02" +
		"\x02\x02\u05B1\u05B2\x07\v\x02\x02\u05B2\xA7\x03\x02\x02\x02\u05B3\u05B5" +
		"\x07\x1B\x02\x02\u05B4\u05B6\x07\x7F\x02\x02\u05B5\u05B4\x03\x02\x02\x02" +
		"\u05B5\u05B6\x03\x02\x02\x02\u05B6\u05B7\x03\x02\x02\x02\u05B7\u05B8\x05" +
		"\xB8]\x02\u05B8\xA9\x03\x02\x02\x02\u05B9\u05BE\x07\\\x02\x02\u05BA\u05BC" +
		"\x07\x7F\x02\x02\u05BB\u05BA\x03\x02\x02\x02\u05BB\u05BC\x03\x02\x02\x02" +
		"\u05BC\u05BD\x03\x02\x02\x02\u05BD\u05BF\x05\xACW\x02\u05BE\u05BB\x03" +
		"\x02\x02\x02\u05BF\u05C0\x03\x02\x02\x02\u05C0\u05BE\x03\x02\x02\x02\u05C0" +
		"\u05C1\x03\x02\x02\x02\u05C1\u05D0\x03\x02\x02\x02\u05C2\u05C4\x07\\\x02" +
		"\x02\u05C3\u05C5\x07\x7F\x02\x02\u05C4\u05C3\x03\x02\x02\x02\u05C4\u05C5" +
		"\x03\x02\x02\x02\u05C5\u05C6\x03\x02\x02\x02\u05C6\u05CB\x05d3\x02\u05C7" +
		"\u05C9\x07\x7F\x02\x02\u05C8\u05C7\x03\x02\x02\x02\u05C8\u05C9\x03\x02" +
		"\x02\x02\u05C9\u05CA\x03\x02\x02\x02\u05CA\u05CC\x05\xACW\x02\u05CB\u05C8" +
		"\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD\u05CB\x03\x02\x02\x02" +
		"\u05CD\u05CE\x03\x02\x02\x02\u05CE\u05D0\x03\x02\x02\x02\u05CF\u05B9\x03" +
		"\x02\x02\x02\u05CF\u05C2\x03\x02\x02\x02\u05D0\u05D9\x03\x02\x02\x02\u05D1" +
		"\u05D3\x07\x7F\x02\x02\u05D2\u05D1\x03\x02\x02\x02\u05D2\u05D3\x03\x02" +
		"\x02\x02\u05D3\u05D4\x03\x02\x02\x02\u05D4\u05D6\x07]\x02\x02\u05D5\u05D7" +
		"\x07\x7F\x02\x02\u05D6\u05D5\x03\x02\x02\x02\u05D6\u05D7\x03\x02\x02\x02" +
		"\u05D7\u05D8\x03\x02\x02\x02\u05D8\u05DA\x05d3\x02\u05D9\u05D2\x03\x02" +
		"\x02\x02\u05D9\u05DA\x03\x02\x02\x02\u05DA\u05DC\x03\x02\x02\x02\u05DB" +
		"\u05DD\x07\x7F\x02\x02\u05DC\u05DB\x03\x02\x02\x02\u05DC\u05DD\x03\x02" +
		"\x02\x02\u05DD\u05DE\x03\x02\x02\x02\u05DE\u05DF\x07^\x02\x02\u05DF\xAB" +
		"\x03\x02\x02\x02\u05E0\u05E2\x07_\x02\x02\u05E1\u05E3\x07\x7F\x02\x02" +
		"\u05E2\u05E1\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3\u05E4\x03" +
		"\x02\x02\x02\u05E4\u05E6\x05d3\x02\u05E5\u05E7\x07\x7F\x02\x02\u05E6\u05E5" +
		"\x03\x02\x02\x02\u05E6\u05E7\x03\x02\x02\x02\u05E7\u05E8\x03\x02\x02\x02" +
		"\u05E8\u05EA\x07`\x02\x02\u05E9\u05EB\x07\x7F\x02\x02\u05EA\u05E9\x03" +
		"\x02\x02\x02\u05EA\u05EB\x03\x02\x02\x02\u05EB\u05EC\x03\x02\x02\x02\u05EC" +
		"\u05ED\x05d3\x02\u05ED\xAD\x03\x02\x02\x02\u05EE\u05EF\x05\xC2b\x02\u05EF" +
		"\xAF\x03\x02\x02\x02\u05F0\u05F3\x05\xBC_\x02\u05F1\u05F3\x05\xBA^\x02" +
		"\u05F2\u05F0\x03\x02\x02\x02\u05F2\u05F1\x03\x02\x02\x02\u05F3\xB1\x03" +
		"\x02\x02\x02\u05F4\u05F6\x07\x19\x02\x02\u05F5\u05F7\x07\x7F\x02\x02\u05F6" +
		"\u05F5\x03\x02\x02\x02\u05F6\u05F7\x03\x02\x02\x02\u05F7\u0619\x03\x02" +
		"\x02\x02\u05F8\u05FA\x05\xB8]\x02\u05F9\u05FB\x07\x7F\x02\x02\u05FA\u05F9" +
		"\x03\x02\x02\x02\u05FA\u05FB\x03\x02\x02\x02\u05FB\u05FC\x03\x02\x02\x02" +
		"\u05FC\u05FE\x07\f\x02\x02\u05FD\u05FF\x07\x7F\x02\x02\u05FE\u05FD\x03" +
		"\x02\x02\x02\u05FE\u05FF\x03\x02\x02\x02\u05FF\u0600\x03\x02\x02\x02\u0600" +
		"\u0602\x05d3\x02\u0601\u0603\x07\x7F\x02\x02\u0602\u0601\x03\x02\x02\x02" +
		"\u0602\u0603\x03\x02\x02\x02\u0603\u0616\x03\x02\x02\x02\u0604\u0606\x07" +
		"\x04\x02\x02\u0605\u0607\x07\x7F\x02\x02\u0606\u0605\x03\x02\x02\x02\u0606" +
		"\u0607\x03\x02\x02\x02\u0607\u0608\x03\x02\x02\x02\u0608\u060A\x05\xB8" +
		"]\x02\u0609\u060B\x07\x7F\x02\x02\u060A\u0609\x03\x02\x02\x02\u060A\u060B" +
		"\x03\x02\x02\x02\u060B\u060C\x03\x02\x02\x02\u060C\u060E\x07\f\x02\x02" +
		"\u060D\u060F\x07\x7F\x02\x02\u060E\u060D\x03\x02\x02\x02\u060E\u060F\x03" +
		"\x02\x02\x02\u060F\u0610\x03\x02\x02\x02\u0610\u0612\x05d3\x02\u0611\u0613" +
		"\x07\x7F\x02\x02\u0612\u0611\x03\x02\x02\x02\u0612\u0613\x03\x02\x02\x02" +
		"\u0613\u0615\x03\x02\x02\x02\u0614\u0604\x03\x02\x02\x02\u0615\u0618\x03" +
		"\x02\x02\x02\u0616\u0614\x03\x02\x02\x02\u0616\u0617\x03\x02\x02\x02\u0617" +
		"\u061A\x03\x02\x02\x02\u0618\u0616\x03\x02\x02\x02\u0619\u05F8\x03\x02" +
		"\x02\x02\u0619\u061A\x03\x02\x02\x02\u061A\u061B\x03\x02\x02\x02\u061B" +
		"\u061C\x07\x1A\x02\x02\u061C\xB3\x03\x02\x02\x02\u061D\u0620\x07\x1C\x02" +
		"\x02\u061E\u0621\x05\xC2b\x02\u061F\u0621\x07d\x02\x02\u0620\u061E\x03" +
		"\x02\x02\x02\u0620\u061F\x03\x02\x02\x02\u0621\xB5\x03\x02\x02\x02\u0622" +
		"\u0627\x05\x82B\x02\u0623\u0625\x07\x7F\x02\x02\u0624\u0623\x03\x02\x02" +
		"\x02\u0624\u0625\x03\x02\x02\x02\u0625\u0626\x03\x02\x02\x02\u0626\u0628" +
		"\x05\xA8U\x02\u0627\u0624\x03\x02\x02\x02\u0628\u0629\x03\x02\x02\x02" +
		"\u0629\u0627\x03\x02\x02\x02\u0629\u062A\x03\x02\x02\x02\u062A\xB7\x03" +
		"\x02\x02\x02\u062B\u062C\x05\xBE`\x02\u062C\xB9\x03\x02\x02\x02\u062D" +
		"\u062E\t\x05\x02\x02\u062E\xBB\x03\x02\x02\x02\u062F\u0630\t\x06\x02\x02" +
		"\u0630\xBD\x03\x02\x02\x02\u0631\u0634\x05\xC2b\x02\u0632\u0634\x05\xC0" +
		"a\x02\u0633\u0631\x03\x02\x02\x02\u0633\u0632\x03\x02\x02\x02\u0634\xBF" +
		"\x03\x02\x02\x02\u0635\u0636\t\x07\x02\x02\u0636\xC1\x03\x02\x02\x02\u0637" +
		"\u0638\t\b\x02\x02\u0638\xC3\x03\x02\x02\x02\u0639\u063A\t\t\x02\x02\u063A" +
		"\xC5\x03\x02\x02\x02\u063B\u063C\t\n\x02\x02\u063C\xC7\x03\x02\x02\x02" +
		"\u063D\u063E\t\v\x02\x02\u063E\xC9\x03\x02\x02\x02\u012C\xCB\xCF\xD2\xD5" +
		"\xDA\xDE\xE2\xE7\xEB\xEE\xF1\xF5\xFB\xFF\u0104\u010B\u0110\u0113\u0117" +
		"\u011B\u011F\u0125\u0129\u012E\u0133\u0137\u013A\u013C\u0140\u0144\u0149" +
		"\u014D\u0152\u0156\u015F\u0164\u0168\u016C\u0170\u0173\u0177\u0181\u0188" +
		"\u0195\u0199\u019F\u01A3\u01A7\u01AC\u01B1\u01B5\u01BB\u01BF\u01C5\u01C9" +
		"\u01CF\u01D3\u01D7\u01DB\u01DF\u01E3\u01E8\u01EF\u01F3\u01F8\u01FF\u0205" +
		"\u020A\u0210\u0213\u0219\u021B\u021F\u0223\u0228\u022C\u022F\u0236\u023D" +
		"\u0240\u0246\u0249\u024F\u0253\u0257\u025B\u025F\u0264\u0269\u026D\u0272" +
		"\u0275\u027E\u0287\u028C\u0299\u029C\u02A4\u02A8\u02AD\u02B2\u02B6\u02BB" +
		"\u02C1\u02C6\u02CD\u02D1\u02D5\u02D7\u02DB\u02DD\u02E1\u02E3\u02E9\u02EF" +
		"\u02F3\u02F6\u02F9\u02FD\u0303\u0307\u030A\u030D\u0313\u0316\u0319\u031D" +
		"\u0323\u0326\u0329\u032D\u0331\u0335\u0337\u033B\u033D\u0340\u0344\u0346" +
		"\u034C\u0350\u0354\u0358\u035B\u0360\u0365\u036A\u036F\u0375\u0379\u037B" +
		"\u037F\u0383\u0385\u0387\u0396\u03A0\u03AA\u03AF\u03B3\u03BA\u03BF\u03C4" +
		"\u03C8\u03CC\u03D0\u03D3\u03D5\u03DA\u03DE\u03E2\u03E6\u03EA\u03EE\u03F1" +
		"\u03F3\u03F8\u03FC\u0401\u0406\u040A\u0413\u0415\u041B\u041F\u0426\u042A" +
		"\u042E\u0431\u043D\u0440\u044E\u0452\u0457\u045B\u045E\u0465\u0469\u046D" +
		"\u0474\u0478\u047C\u0482\u0486\u048A\u0490\u0494\u0498\u049E\u04A2\u04A6" +
		"\u04AF\u04B7\u04BD\u04C1\u04C5\u04C9\u04CD\u04D0\u04D6\u04DB\u04E0";
	private static readonly _serializedATNSegment3: string =
		"\u04E5\u04EA\u04EF\u04F2\u04F6\u04FA\u0500\u0505\u0509\u050C\u0516\u051A" +
		"\u051E\u0520\u0524\u0528\u052C\u0530\u0533\u053C\u0540\u0545\u0548\u054A" +
		"\u054D\u0553\u0557\u055B\u055F\u0563\u0567\u056A\u057A\u057F\u0583\u0587" +
		"\u058A\u058D\u0593\u0597\u059B\u059D\u05A1\u05A5\u05A7\u05AB\u05AF\u05B5" +
		"\u05BB\u05C0\u05C4\u05C8\u05CD\u05CF\u05D2\u05D6\u05D9\u05DC\u05E2\u05E6" +
		"\u05EA\u05F2\u05F6\u05FA\u05FE\u0602\u0606\u060A\u060E\u0612\u0616\u0619" +
		"\u0620\u0624\u0629\u0633";
	public static readonly _serializedATN: string = Utils.join(
		[
			CypherParser._serializedATNSegment0,
			CypherParser._serializedATNSegment1,
			CypherParser._serializedATNSegment2,
			CypherParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CypherParser.__ATN) {
			CypherParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CypherParser._serializedATN));
		}

		return CypherParser.__ATN;
	}

}

export class OC_CypherContext extends ParserRuleContext {
	public oC_Statement(): OC_StatementContext[];
	public oC_Statement(i: number): OC_StatementContext;
	public oC_Statement(i?: number): OC_StatementContext | OC_StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_StatementContext);
		} else {
			return this.getRuleContext(i, OC_StatementContext);
		}
	}
	public EOF(): TerminalNode { return this.getToken(CypherParser.EOF, 0); }
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Cypher; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Cypher) {
			listener.enterOC_Cypher(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Cypher) {
			listener.exitOC_Cypher(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Cypher) {
			return visitor.visitOC_Cypher(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_StatementContext extends ParserRuleContext {
	public oC_Query(): OC_QueryContext {
		return this.getRuleContext(0, OC_QueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Statement; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Statement) {
			listener.enterOC_Statement(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Statement) {
			listener.exitOC_Statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Statement) {
			return visitor.visitOC_Statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_QueryContext extends ParserRuleContext {
	public oC_RegularQuery(): OC_RegularQueryContext | undefined {
		return this.tryGetRuleContext(0, OC_RegularQueryContext);
	}
	public oC_StandaloneCall(): OC_StandaloneCallContext | undefined {
		return this.tryGetRuleContext(0, OC_StandaloneCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Query; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Query) {
			listener.enterOC_Query(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Query) {
			listener.exitOC_Query(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Query) {
			return visitor.visitOC_Query(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RegularQueryContext extends ParserRuleContext {
	public oC_SingleQuery(): OC_SingleQueryContext {
		return this.getRuleContext(0, OC_SingleQueryContext);
	}
	public oC_Union(): OC_UnionContext[];
	public oC_Union(i: number): OC_UnionContext;
	public oC_Union(i?: number): OC_UnionContext | OC_UnionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_UnionContext);
		} else {
			return this.getRuleContext(i, OC_UnionContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RegularQuery; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RegularQuery) {
			listener.enterOC_RegularQuery(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RegularQuery) {
			listener.exitOC_RegularQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RegularQuery) {
			return visitor.visitOC_RegularQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_UnionContext extends ParserRuleContext {
	public UNION(): TerminalNode | undefined { return this.tryGetToken(CypherParser.UNION, 0); }
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ALL, 0); }
	public oC_SingleQuery(): OC_SingleQueryContext | undefined {
		return this.tryGetRuleContext(0, OC_SingleQueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Union; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Union) {
			listener.enterOC_Union(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Union) {
			listener.exitOC_Union(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Union) {
			return visitor.visitOC_Union(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SingleQueryContext extends ParserRuleContext {
	public oC_SinglePartQuery(): OC_SinglePartQueryContext | undefined {
		return this.tryGetRuleContext(0, OC_SinglePartQueryContext);
	}
	public oC_MultiPartQuery(): OC_MultiPartQueryContext | undefined {
		return this.tryGetRuleContext(0, OC_MultiPartQueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_SingleQuery; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_SingleQuery) {
			listener.enterOC_SingleQuery(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_SingleQuery) {
			listener.exitOC_SingleQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_SingleQuery) {
			return visitor.visitOC_SingleQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SinglePartQueryContext extends ParserRuleContext {
	public oC_Return(): OC_ReturnContext | undefined {
		return this.tryGetRuleContext(0, OC_ReturnContext);
	}
	public oC_ReadingClause(): OC_ReadingClauseContext[];
	public oC_ReadingClause(i: number): OC_ReadingClauseContext;
	public oC_ReadingClause(i?: number): OC_ReadingClauseContext | OC_ReadingClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ReadingClauseContext);
		} else {
			return this.getRuleContext(i, OC_ReadingClauseContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_UpdatingClause(): OC_UpdatingClauseContext[];
	public oC_UpdatingClause(i: number): OC_UpdatingClauseContext;
	public oC_UpdatingClause(i?: number): OC_UpdatingClauseContext | OC_UpdatingClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_UpdatingClauseContext);
		} else {
			return this.getRuleContext(i, OC_UpdatingClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_SinglePartQuery; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_SinglePartQuery) {
			listener.enterOC_SinglePartQuery(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_SinglePartQuery) {
			listener.exitOC_SinglePartQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_SinglePartQuery) {
			return visitor.visitOC_SinglePartQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_MultiPartQueryContext extends ParserRuleContext {
	public oC_SinglePartQuery(): OC_SinglePartQueryContext {
		return this.getRuleContext(0, OC_SinglePartQueryContext);
	}
	public oC_With(): OC_WithContext[];
	public oC_With(i: number): OC_WithContext;
	public oC_With(i?: number): OC_WithContext | OC_WithContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_WithContext);
		} else {
			return this.getRuleContext(i, OC_WithContext);
		}
	}
	public oC_ReadingClause(): OC_ReadingClauseContext[];
	public oC_ReadingClause(i: number): OC_ReadingClauseContext;
	public oC_ReadingClause(i?: number): OC_ReadingClauseContext | OC_ReadingClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ReadingClauseContext);
		} else {
			return this.getRuleContext(i, OC_ReadingClauseContext);
		}
	}
	public oC_UpdatingClause(): OC_UpdatingClauseContext[];
	public oC_UpdatingClause(i: number): OC_UpdatingClauseContext;
	public oC_UpdatingClause(i?: number): OC_UpdatingClauseContext | OC_UpdatingClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_UpdatingClauseContext);
		} else {
			return this.getRuleContext(i, OC_UpdatingClauseContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_MultiPartQuery; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_MultiPartQuery) {
			listener.enterOC_MultiPartQuery(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_MultiPartQuery) {
			listener.exitOC_MultiPartQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_MultiPartQuery) {
			return visitor.visitOC_MultiPartQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_UpdatingClauseContext extends ParserRuleContext {
	public oC_Create(): OC_CreateContext | undefined {
		return this.tryGetRuleContext(0, OC_CreateContext);
	}
	public oC_Merge(): OC_MergeContext | undefined {
		return this.tryGetRuleContext(0, OC_MergeContext);
	}
	public oC_Delete(): OC_DeleteContext | undefined {
		return this.tryGetRuleContext(0, OC_DeleteContext);
	}
	public oC_Set(): OC_SetContext | undefined {
		return this.tryGetRuleContext(0, OC_SetContext);
	}
	public oC_Remove(): OC_RemoveContext | undefined {
		return this.tryGetRuleContext(0, OC_RemoveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_UpdatingClause; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_UpdatingClause) {
			listener.enterOC_UpdatingClause(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_UpdatingClause) {
			listener.exitOC_UpdatingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_UpdatingClause) {
			return visitor.visitOC_UpdatingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ReadingClauseContext extends ParserRuleContext {
	public oC_Match(): OC_MatchContext | undefined {
		return this.tryGetRuleContext(0, OC_MatchContext);
	}
	public oC_Unwind(): OC_UnwindContext | undefined {
		return this.tryGetRuleContext(0, OC_UnwindContext);
	}
	public oC_InQueryCall(): OC_InQueryCallContext | undefined {
		return this.tryGetRuleContext(0, OC_InQueryCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ReadingClause; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ReadingClause) {
			listener.enterOC_ReadingClause(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ReadingClause) {
			listener.exitOC_ReadingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ReadingClause) {
			return visitor.visitOC_ReadingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_MatchContext extends ParserRuleContext {
	public MATCH(): TerminalNode { return this.getToken(CypherParser.MATCH, 0); }
	public oC_Pattern(): OC_PatternContext {
		return this.getRuleContext(0, OC_PatternContext);
	}
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(CypherParser.OPTIONAL, 0); }
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_Where(): OC_WhereContext | undefined {
		return this.tryGetRuleContext(0, OC_WhereContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Match; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Match) {
			listener.enterOC_Match(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Match) {
			listener.exitOC_Match(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Match) {
			return visitor.visitOC_Match(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_UnwindContext extends ParserRuleContext {
	public UNWIND(): TerminalNode { return this.getToken(CypherParser.UNWIND, 0); }
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public AS(): TerminalNode { return this.getToken(CypherParser.AS, 0); }
	public oC_Variable(): OC_VariableContext {
		return this.getRuleContext(0, OC_VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Unwind; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Unwind) {
			listener.enterOC_Unwind(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Unwind) {
			listener.exitOC_Unwind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Unwind) {
			return visitor.visitOC_Unwind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_MergeContext extends ParserRuleContext {
	public MERGE(): TerminalNode { return this.getToken(CypherParser.MERGE, 0); }
	public oC_PatternPart(): OC_PatternPartContext {
		return this.getRuleContext(0, OC_PatternPartContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_MergeAction(): OC_MergeActionContext[];
	public oC_MergeAction(i: number): OC_MergeActionContext;
	public oC_MergeAction(i?: number): OC_MergeActionContext | OC_MergeActionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_MergeActionContext);
		} else {
			return this.getRuleContext(i, OC_MergeActionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Merge; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Merge) {
			listener.enterOC_Merge(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Merge) {
			listener.exitOC_Merge(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Merge) {
			return visitor.visitOC_Merge(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_MergeActionContext extends ParserRuleContext {
	public ON(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ON, 0); }
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(CypherParser.MATCH, 0); }
	public oC_Set(): OC_SetContext | undefined {
		return this.tryGetRuleContext(0, OC_SetContext);
	}
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.CREATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_MergeAction; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_MergeAction) {
			listener.enterOC_MergeAction(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_MergeAction) {
			listener.exitOC_MergeAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_MergeAction) {
			return visitor.visitOC_MergeAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_CreateContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(CypherParser.CREATE, 0); }
	public oC_Pattern(): OC_PatternContext {
		return this.getRuleContext(0, OC_PatternContext);
	}
	public SP(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Create; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Create) {
			listener.enterOC_Create(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Create) {
			listener.exitOC_Create(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Create) {
			return visitor.visitOC_Create(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SetContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(CypherParser.SET, 0); }
	public oC_SetItem(): OC_SetItemContext[];
	public oC_SetItem(i: number): OC_SetItemContext;
	public oC_SetItem(i?: number): OC_SetItemContext | OC_SetItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_SetItemContext);
		} else {
			return this.getRuleContext(i, OC_SetItemContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Set; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Set) {
			listener.enterOC_Set(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Set) {
			listener.exitOC_Set(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Set) {
			return visitor.visitOC_Set(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SetItemContext extends ParserRuleContext {
	public oC_PropertyExpression(): OC_PropertyExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_PropertyExpressionContext);
	}
	public oC_Expression(): OC_ExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_ExpressionContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	public oC_NodeLabels(): OC_NodeLabelsContext | undefined {
		return this.tryGetRuleContext(0, OC_NodeLabelsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_SetItem; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_SetItem) {
			listener.enterOC_SetItem(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_SetItem) {
			listener.exitOC_SetItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_SetItem) {
			return visitor.visitOC_SetItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_DeleteContext extends ParserRuleContext {
	public DELETE(): TerminalNode { return this.getToken(CypherParser.DELETE, 0); }
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	public DETACH(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DETACH, 0); }
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Delete; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Delete) {
			listener.enterOC_Delete(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Delete) {
			listener.exitOC_Delete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Delete) {
			return visitor.visitOC_Delete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RemoveContext extends ParserRuleContext {
	public REMOVE(): TerminalNode { return this.getToken(CypherParser.REMOVE, 0); }
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_RemoveItem(): OC_RemoveItemContext[];
	public oC_RemoveItem(i: number): OC_RemoveItemContext;
	public oC_RemoveItem(i?: number): OC_RemoveItemContext | OC_RemoveItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_RemoveItemContext);
		} else {
			return this.getRuleContext(i, OC_RemoveItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Remove; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Remove) {
			listener.enterOC_Remove(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Remove) {
			listener.exitOC_Remove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Remove) {
			return visitor.visitOC_Remove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RemoveItemContext extends ParserRuleContext {
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	public oC_NodeLabels(): OC_NodeLabelsContext | undefined {
		return this.tryGetRuleContext(0, OC_NodeLabelsContext);
	}
	public oC_PropertyExpression(): OC_PropertyExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_PropertyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RemoveItem; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RemoveItem) {
			listener.enterOC_RemoveItem(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RemoveItem) {
			listener.exitOC_RemoveItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RemoveItem) {
			return visitor.visitOC_RemoveItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_InQueryCallContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(CypherParser.CALL, 0); }
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_ExplicitProcedureInvocation(): OC_ExplicitProcedureInvocationContext {
		return this.getRuleContext(0, OC_ExplicitProcedureInvocationContext);
	}
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(CypherParser.YIELD, 0); }
	public oC_YieldItems(): OC_YieldItemsContext | undefined {
		return this.tryGetRuleContext(0, OC_YieldItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_InQueryCall; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_InQueryCall) {
			listener.enterOC_InQueryCall(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_InQueryCall) {
			listener.exitOC_InQueryCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_InQueryCall) {
			return visitor.visitOC_InQueryCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_StandaloneCallContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(CypherParser.CALL, 0); }
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_ExplicitProcedureInvocation(): OC_ExplicitProcedureInvocationContext | undefined {
		return this.tryGetRuleContext(0, OC_ExplicitProcedureInvocationContext);
	}
	public oC_ImplicitProcedureInvocation(): OC_ImplicitProcedureInvocationContext | undefined {
		return this.tryGetRuleContext(0, OC_ImplicitProcedureInvocationContext);
	}
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(CypherParser.YIELD, 0); }
	public oC_YieldItems(): OC_YieldItemsContext | undefined {
		return this.tryGetRuleContext(0, OC_YieldItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_StandaloneCall; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_StandaloneCall) {
			listener.enterOC_StandaloneCall(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_StandaloneCall) {
			listener.exitOC_StandaloneCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_StandaloneCall) {
			return visitor.visitOC_StandaloneCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_YieldItemsContext extends ParserRuleContext {
	public oC_YieldItem(): OC_YieldItemContext[];
	public oC_YieldItem(i: number): OC_YieldItemContext;
	public oC_YieldItem(i?: number): OC_YieldItemContext | OC_YieldItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_YieldItemContext);
		} else {
			return this.getRuleContext(i, OC_YieldItemContext);
		}
	}
	public oC_Where(): OC_WhereContext | undefined {
		return this.tryGetRuleContext(0, OC_WhereContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_YieldItems; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_YieldItems) {
			listener.enterOC_YieldItems(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_YieldItems) {
			listener.exitOC_YieldItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_YieldItems) {
			return visitor.visitOC_YieldItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_YieldItemContext extends ParserRuleContext {
	public oC_Variable(): OC_VariableContext {
		return this.getRuleContext(0, OC_VariableContext);
	}
	public oC_ProcedureResultField(): OC_ProcedureResultFieldContext | undefined {
		return this.tryGetRuleContext(0, OC_ProcedureResultFieldContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_YieldItem; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_YieldItem) {
			listener.enterOC_YieldItem(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_YieldItem) {
			listener.exitOC_YieldItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_YieldItem) {
			return visitor.visitOC_YieldItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_WithContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(CypherParser.WITH, 0); }
	public oC_ProjectionBody(): OC_ProjectionBodyContext {
		return this.getRuleContext(0, OC_ProjectionBodyContext);
	}
	public oC_Where(): OC_WhereContext | undefined {
		return this.tryGetRuleContext(0, OC_WhereContext);
	}
	public SP(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_With; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_With) {
			listener.enterOC_With(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_With) {
			listener.exitOC_With(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_With) {
			return visitor.visitOC_With(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ReturnContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(CypherParser.RETURN, 0); }
	public oC_ProjectionBody(): OC_ProjectionBodyContext {
		return this.getRuleContext(0, OC_ProjectionBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Return; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Return) {
			listener.enterOC_Return(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Return) {
			listener.exitOC_Return(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Return) {
			return visitor.visitOC_Return(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ProjectionBodyContext extends ParserRuleContext {
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_ProjectionItems(): OC_ProjectionItemsContext {
		return this.getRuleContext(0, OC_ProjectionItemsContext);
	}
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DISTINCT, 0); }
	public oC_Order(): OC_OrderContext | undefined {
		return this.tryGetRuleContext(0, OC_OrderContext);
	}
	public oC_Skip(): OC_SkipContext | undefined {
		return this.tryGetRuleContext(0, OC_SkipContext);
	}
	public oC_Limit(): OC_LimitContext | undefined {
		return this.tryGetRuleContext(0, OC_LimitContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ProjectionBody; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ProjectionBody) {
			listener.enterOC_ProjectionBody(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ProjectionBody) {
			listener.exitOC_ProjectionBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ProjectionBody) {
			return visitor.visitOC_ProjectionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ProjectionItemsContext extends ParserRuleContext {
	public oC_ProjectionItem(): OC_ProjectionItemContext[];
	public oC_ProjectionItem(i: number): OC_ProjectionItemContext;
	public oC_ProjectionItem(i?: number): OC_ProjectionItemContext | OC_ProjectionItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ProjectionItemContext);
		} else {
			return this.getRuleContext(i, OC_ProjectionItemContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ProjectionItems; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ProjectionItems) {
			listener.enterOC_ProjectionItems(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ProjectionItems) {
			listener.exitOC_ProjectionItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ProjectionItems) {
			return visitor.visitOC_ProjectionItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ProjectionItemContext extends ParserRuleContext {
	public oC_Expression(): OC_ExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_ExpressionContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.AS, 0); }
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ProjectionItem; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ProjectionItem) {
			listener.enterOC_ProjectionItem(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ProjectionItem) {
			listener.exitOC_ProjectionItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ProjectionItem) {
			return visitor.visitOC_ProjectionItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_OrderContext extends ParserRuleContext {
	public ORDER(): TerminalNode { return this.getToken(CypherParser.ORDER, 0); }
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public BY(): TerminalNode { return this.getToken(CypherParser.BY, 0); }
	public oC_SortItem(): OC_SortItemContext[];
	public oC_SortItem(i: number): OC_SortItemContext;
	public oC_SortItem(i?: number): OC_SortItemContext | OC_SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_SortItemContext);
		} else {
			return this.getRuleContext(i, OC_SortItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Order; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Order) {
			listener.enterOC_Order(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Order) {
			listener.exitOC_Order(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Order) {
			return visitor.visitOC_Order(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SkipContext extends ParserRuleContext {
	public L_SKIP(): TerminalNode { return this.getToken(CypherParser.L_SKIP, 0); }
	public SP(): TerminalNode { return this.getToken(CypherParser.SP, 0); }
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Skip; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Skip) {
			listener.enterOC_Skip(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Skip) {
			listener.exitOC_Skip(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Skip) {
			return visitor.visitOC_Skip(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_LimitContext extends ParserRuleContext {
	public LIMIT(): TerminalNode { return this.getToken(CypherParser.LIMIT, 0); }
	public SP(): TerminalNode { return this.getToken(CypherParser.SP, 0); }
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Limit; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Limit) {
			listener.enterOC_Limit(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Limit) {
			listener.exitOC_Limit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Limit) {
			return visitor.visitOC_Limit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SortItemContext extends ParserRuleContext {
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	public ASCENDING(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ASCENDING, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ASC, 0); }
	public DESCENDING(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DESCENDING, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DESC, 0); }
	public SP(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_SortItem; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_SortItem) {
			listener.enterOC_SortItem(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_SortItem) {
			listener.exitOC_SortItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_SortItem) {
			return visitor.visitOC_SortItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_WhereContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(CypherParser.WHERE, 0); }
	public SP(): TerminalNode { return this.getToken(CypherParser.SP, 0); }
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Where; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Where) {
			listener.enterOC_Where(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Where) {
			listener.exitOC_Where(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Where) {
			return visitor.visitOC_Where(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PatternContext extends ParserRuleContext {
	public oC_PatternPart(): OC_PatternPartContext[];
	public oC_PatternPart(i: number): OC_PatternPartContext;
	public oC_PatternPart(i?: number): OC_PatternPartContext | OC_PatternPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PatternPartContext);
		} else {
			return this.getRuleContext(i, OC_PatternPartContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Pattern; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Pattern) {
			listener.enterOC_Pattern(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Pattern) {
			listener.exitOC_Pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Pattern) {
			return visitor.visitOC_Pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PatternPartContext extends ParserRuleContext {
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	public oC_AnonymousPatternPart(): OC_AnonymousPatternPartContext | undefined {
		return this.tryGetRuleContext(0, OC_AnonymousPatternPartContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PatternPart; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PatternPart) {
			listener.enterOC_PatternPart(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PatternPart) {
			listener.exitOC_PatternPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PatternPart) {
			return visitor.visitOC_PatternPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_AnonymousPatternPartContext extends ParserRuleContext {
	public oC_PatternElement(): OC_PatternElementContext {
		return this.getRuleContext(0, OC_PatternElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_AnonymousPatternPart; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_AnonymousPatternPart) {
			listener.enterOC_AnonymousPatternPart(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_AnonymousPatternPart) {
			listener.exitOC_AnonymousPatternPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_AnonymousPatternPart) {
			return visitor.visitOC_AnonymousPatternPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PatternElementContext extends ParserRuleContext {
	public oC_NodePattern(): OC_NodePatternContext | undefined {
		return this.tryGetRuleContext(0, OC_NodePatternContext);
	}
	public oC_PatternElementChain(): OC_PatternElementChainContext[];
	public oC_PatternElementChain(i: number): OC_PatternElementChainContext;
	public oC_PatternElementChain(i?: number): OC_PatternElementChainContext | OC_PatternElementChainContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PatternElementChainContext);
		} else {
			return this.getRuleContext(i, OC_PatternElementChainContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_PatternElement(): OC_PatternElementContext | undefined {
		return this.tryGetRuleContext(0, OC_PatternElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PatternElement; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PatternElement) {
			listener.enterOC_PatternElement(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PatternElement) {
			listener.exitOC_PatternElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PatternElement) {
			return visitor.visitOC_PatternElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NodePatternContext extends ParserRuleContext {
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	public oC_NodeLabels(): OC_NodeLabelsContext | undefined {
		return this.tryGetRuleContext(0, OC_NodeLabelsContext);
	}
	public oC_Properties(): OC_PropertiesContext | undefined {
		return this.tryGetRuleContext(0, OC_PropertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_NodePattern; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_NodePattern) {
			listener.enterOC_NodePattern(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_NodePattern) {
			listener.exitOC_NodePattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_NodePattern) {
			return visitor.visitOC_NodePattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PatternElementChainContext extends ParserRuleContext {
	public oC_RelationshipPattern(): OC_RelationshipPatternContext {
		return this.getRuleContext(0, OC_RelationshipPatternContext);
	}
	public oC_NodePattern(): OC_NodePatternContext {
		return this.getRuleContext(0, OC_NodePatternContext);
	}
	public SP(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PatternElementChain; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PatternElementChain) {
			listener.enterOC_PatternElementChain(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PatternElementChain) {
			listener.exitOC_PatternElementChain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PatternElementChain) {
			return visitor.visitOC_PatternElementChain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RelationshipPatternContext extends ParserRuleContext {
	public oC_LeftArrowHead(): OC_LeftArrowHeadContext | undefined {
		return this.tryGetRuleContext(0, OC_LeftArrowHeadContext);
	}
	public oC_Dash(): OC_DashContext[];
	public oC_Dash(i: number): OC_DashContext;
	public oC_Dash(i?: number): OC_DashContext | OC_DashContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_DashContext);
		} else {
			return this.getRuleContext(i, OC_DashContext);
		}
	}
	public oC_RightArrowHead(): OC_RightArrowHeadContext | undefined {
		return this.tryGetRuleContext(0, OC_RightArrowHeadContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_RelationshipDetail(): OC_RelationshipDetailContext | undefined {
		return this.tryGetRuleContext(0, OC_RelationshipDetailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RelationshipPattern; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RelationshipPattern) {
			listener.enterOC_RelationshipPattern(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RelationshipPattern) {
			listener.exitOC_RelationshipPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RelationshipPattern) {
			return visitor.visitOC_RelationshipPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RelationshipDetailContext extends ParserRuleContext {
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	public oC_RelationshipTypes(): OC_RelationshipTypesContext | undefined {
		return this.tryGetRuleContext(0, OC_RelationshipTypesContext);
	}
	public oC_RangeLiteral(): OC_RangeLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_RangeLiteralContext);
	}
	public oC_Properties(): OC_PropertiesContext | undefined {
		return this.tryGetRuleContext(0, OC_PropertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RelationshipDetail; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RelationshipDetail) {
			listener.enterOC_RelationshipDetail(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RelationshipDetail) {
			listener.exitOC_RelationshipDetail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RelationshipDetail) {
			return visitor.visitOC_RelationshipDetail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PropertiesContext extends ParserRuleContext {
	public oC_MapLiteral(): OC_MapLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_MapLiteralContext);
	}
	public oC_Parameter(): OC_ParameterContext | undefined {
		return this.tryGetRuleContext(0, OC_ParameterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Properties; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Properties) {
			listener.enterOC_Properties(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Properties) {
			listener.exitOC_Properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Properties) {
			return visitor.visitOC_Properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RelationshipTypesContext extends ParserRuleContext {
	public oC_RelTypeName(): OC_RelTypeNameContext[];
	public oC_RelTypeName(i: number): OC_RelTypeNameContext;
	public oC_RelTypeName(i?: number): OC_RelTypeNameContext | OC_RelTypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_RelTypeNameContext);
		} else {
			return this.getRuleContext(i, OC_RelTypeNameContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RelationshipTypes; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RelationshipTypes) {
			listener.enterOC_RelationshipTypes(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RelationshipTypes) {
			listener.exitOC_RelationshipTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RelationshipTypes) {
			return visitor.visitOC_RelationshipTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NodeLabelsContext extends ParserRuleContext {
	public oC_NodeLabel(): OC_NodeLabelContext[];
	public oC_NodeLabel(i: number): OC_NodeLabelContext;
	public oC_NodeLabel(i?: number): OC_NodeLabelContext | OC_NodeLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_NodeLabelContext);
		} else {
			return this.getRuleContext(i, OC_NodeLabelContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_NodeLabels; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_NodeLabels) {
			listener.enterOC_NodeLabels(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_NodeLabels) {
			listener.exitOC_NodeLabels(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_NodeLabels) {
			return visitor.visitOC_NodeLabels(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NodeLabelContext extends ParserRuleContext {
	public oC_LabelName(): OC_LabelNameContext {
		return this.getRuleContext(0, OC_LabelNameContext);
	}
	public SP(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_NodeLabel; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_NodeLabel) {
			listener.enterOC_NodeLabel(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_NodeLabel) {
			listener.exitOC_NodeLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_NodeLabel) {
			return visitor.visitOC_NodeLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RangeLiteralContext extends ParserRuleContext {
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_IntegerLiteral(): OC_IntegerLiteralContext[];
	public oC_IntegerLiteral(i: number): OC_IntegerLiteralContext;
	public oC_IntegerLiteral(i?: number): OC_IntegerLiteralContext | OC_IntegerLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_IntegerLiteralContext);
		} else {
			return this.getRuleContext(i, OC_IntegerLiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RangeLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RangeLiteral) {
			listener.enterOC_RangeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RangeLiteral) {
			listener.exitOC_RangeLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RangeLiteral) {
			return visitor.visitOC_RangeLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_LabelNameContext extends ParserRuleContext {
	public oC_SchemaName(): OC_SchemaNameContext {
		return this.getRuleContext(0, OC_SchemaNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_LabelName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_LabelName) {
			listener.enterOC_LabelName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_LabelName) {
			listener.exitOC_LabelName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_LabelName) {
			return visitor.visitOC_LabelName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RelTypeNameContext extends ParserRuleContext {
	public oC_SchemaName(): OC_SchemaNameContext {
		return this.getRuleContext(0, OC_SchemaNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RelTypeName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RelTypeName) {
			listener.enterOC_RelTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RelTypeName) {
			listener.exitOC_RelTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RelTypeName) {
			return visitor.visitOC_RelTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ExpressionContext extends ParserRuleContext {
	public oC_OrExpression(): OC_OrExpressionContext {
		return this.getRuleContext(0, OC_OrExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Expression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Expression) {
			listener.enterOC_Expression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Expression) {
			listener.exitOC_Expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Expression) {
			return visitor.visitOC_Expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_OrExpressionContext extends ParserRuleContext {
	public oC_XorExpression(): OC_XorExpressionContext[];
	public oC_XorExpression(i: number): OC_XorExpressionContext;
	public oC_XorExpression(i?: number): OC_XorExpressionContext | OC_XorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_XorExpressionContext);
		} else {
			return this.getRuleContext(i, OC_XorExpressionContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.OR);
		} else {
			return this.getToken(CypherParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_OrExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_OrExpression) {
			listener.enterOC_OrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_OrExpression) {
			listener.exitOC_OrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_OrExpression) {
			return visitor.visitOC_OrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_XorExpressionContext extends ParserRuleContext {
	public oC_AndExpression(): OC_AndExpressionContext[];
	public oC_AndExpression(i: number): OC_AndExpressionContext;
	public oC_AndExpression(i?: number): OC_AndExpressionContext | OC_AndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_AndExpressionContext);
		} else {
			return this.getRuleContext(i, OC_AndExpressionContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public XOR(): TerminalNode[];
	public XOR(i: number): TerminalNode;
	public XOR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.XOR);
		} else {
			return this.getToken(CypherParser.XOR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_XorExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_XorExpression) {
			listener.enterOC_XorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_XorExpression) {
			listener.exitOC_XorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_XorExpression) {
			return visitor.visitOC_XorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_AndExpressionContext extends ParserRuleContext {
	public oC_NotExpression(): OC_NotExpressionContext[];
	public oC_NotExpression(i: number): OC_NotExpressionContext;
	public oC_NotExpression(i?: number): OC_NotExpressionContext | OC_NotExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_NotExpressionContext);
		} else {
			return this.getRuleContext(i, OC_NotExpressionContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.AND);
		} else {
			return this.getToken(CypherParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_AndExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_AndExpression) {
			listener.enterOC_AndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_AndExpression) {
			listener.exitOC_AndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_AndExpression) {
			return visitor.visitOC_AndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NotExpressionContext extends ParserRuleContext {
	public oC_ComparisonExpression(): OC_ComparisonExpressionContext {
		return this.getRuleContext(0, OC_ComparisonExpressionContext);
	}
	public NOT(): TerminalNode[];
	public NOT(i: number): TerminalNode;
	public NOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.NOT);
		} else {
			return this.getToken(CypherParser.NOT, i);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_NotExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_NotExpression) {
			listener.enterOC_NotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_NotExpression) {
			listener.exitOC_NotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_NotExpression) {
			return visitor.visitOC_NotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ComparisonExpressionContext extends ParserRuleContext {
	public oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext {
		return this.getRuleContext(0, OC_AddOrSubtractExpressionContext);
	}
	public oC_PartialComparisonExpression(): OC_PartialComparisonExpressionContext[];
	public oC_PartialComparisonExpression(i: number): OC_PartialComparisonExpressionContext;
	public oC_PartialComparisonExpression(i?: number): OC_PartialComparisonExpressionContext | OC_PartialComparisonExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PartialComparisonExpressionContext);
		} else {
			return this.getRuleContext(i, OC_PartialComparisonExpressionContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ComparisonExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ComparisonExpression) {
			listener.enterOC_ComparisonExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ComparisonExpression) {
			listener.exitOC_ComparisonExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ComparisonExpression) {
			return visitor.visitOC_ComparisonExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_AddOrSubtractExpressionContext extends ParserRuleContext {
	public oC_MultiplyDivideModuloExpression(): OC_MultiplyDivideModuloExpressionContext[];
	public oC_MultiplyDivideModuloExpression(i: number): OC_MultiplyDivideModuloExpressionContext;
	public oC_MultiplyDivideModuloExpression(i?: number): OC_MultiplyDivideModuloExpressionContext | OC_MultiplyDivideModuloExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_MultiplyDivideModuloExpressionContext);
		} else {
			return this.getRuleContext(i, OC_MultiplyDivideModuloExpressionContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_AddOrSubtractExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_AddOrSubtractExpression) {
			listener.enterOC_AddOrSubtractExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_AddOrSubtractExpression) {
			listener.exitOC_AddOrSubtractExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_AddOrSubtractExpression) {
			return visitor.visitOC_AddOrSubtractExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_MultiplyDivideModuloExpressionContext extends ParserRuleContext {
	public oC_PowerOfExpression(): OC_PowerOfExpressionContext[];
	public oC_PowerOfExpression(i: number): OC_PowerOfExpressionContext;
	public oC_PowerOfExpression(i?: number): OC_PowerOfExpressionContext | OC_PowerOfExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PowerOfExpressionContext);
		} else {
			return this.getRuleContext(i, OC_PowerOfExpressionContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_MultiplyDivideModuloExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_MultiplyDivideModuloExpression) {
			listener.enterOC_MultiplyDivideModuloExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_MultiplyDivideModuloExpression) {
			listener.exitOC_MultiplyDivideModuloExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_MultiplyDivideModuloExpression) {
			return visitor.visitOC_MultiplyDivideModuloExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PowerOfExpressionContext extends ParserRuleContext {
	public oC_UnaryAddOrSubtractExpression(): OC_UnaryAddOrSubtractExpressionContext[];
	public oC_UnaryAddOrSubtractExpression(i: number): OC_UnaryAddOrSubtractExpressionContext;
	public oC_UnaryAddOrSubtractExpression(i?: number): OC_UnaryAddOrSubtractExpressionContext | OC_UnaryAddOrSubtractExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_UnaryAddOrSubtractExpressionContext);
		} else {
			return this.getRuleContext(i, OC_UnaryAddOrSubtractExpressionContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PowerOfExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PowerOfExpression) {
			listener.enterOC_PowerOfExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PowerOfExpression) {
			listener.exitOC_PowerOfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PowerOfExpression) {
			return visitor.visitOC_PowerOfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_UnaryAddOrSubtractExpressionContext extends ParserRuleContext {
	public oC_StringListNullOperatorExpression(): OC_StringListNullOperatorExpressionContext {
		return this.getRuleContext(0, OC_StringListNullOperatorExpressionContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_UnaryAddOrSubtractExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_UnaryAddOrSubtractExpression) {
			listener.enterOC_UnaryAddOrSubtractExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_UnaryAddOrSubtractExpression) {
			listener.exitOC_UnaryAddOrSubtractExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_UnaryAddOrSubtractExpression) {
			return visitor.visitOC_UnaryAddOrSubtractExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_StringListNullOperatorExpressionContext extends ParserRuleContext {
	public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
		return this.getRuleContext(0, OC_PropertyOrLabelsExpressionContext);
	}
	public oC_StringOperatorExpression(): OC_StringOperatorExpressionContext[];
	public oC_StringOperatorExpression(i: number): OC_StringOperatorExpressionContext;
	public oC_StringOperatorExpression(i?: number): OC_StringOperatorExpressionContext | OC_StringOperatorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_StringOperatorExpressionContext);
		} else {
			return this.getRuleContext(i, OC_StringOperatorExpressionContext);
		}
	}
	public oC_ListOperatorExpression(): OC_ListOperatorExpressionContext[];
	public oC_ListOperatorExpression(i: number): OC_ListOperatorExpressionContext;
	public oC_ListOperatorExpression(i?: number): OC_ListOperatorExpressionContext | OC_ListOperatorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ListOperatorExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ListOperatorExpressionContext);
		}
	}
	public oC_NullOperatorExpression(): OC_NullOperatorExpressionContext[];
	public oC_NullOperatorExpression(i: number): OC_NullOperatorExpressionContext;
	public oC_NullOperatorExpression(i?: number): OC_NullOperatorExpressionContext | OC_NullOperatorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_NullOperatorExpressionContext);
		} else {
			return this.getRuleContext(i, OC_NullOperatorExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_StringListNullOperatorExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_StringListNullOperatorExpression) {
			listener.enterOC_StringListNullOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_StringListNullOperatorExpression) {
			listener.exitOC_StringListNullOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_StringListNullOperatorExpression) {
			return visitor.visitOC_StringListNullOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ListOperatorExpressionContext extends ParserRuleContext {
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(CypherParser.IN, 0); }
	public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_PropertyOrLabelsExpressionContext);
	}
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ListOperatorExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ListOperatorExpression) {
			listener.enterOC_ListOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ListOperatorExpression) {
			listener.exitOC_ListOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ListOperatorExpression) {
			return visitor.visitOC_ListOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_StringOperatorExpressionContext extends ParserRuleContext {
	public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
		return this.getRuleContext(0, OC_PropertyOrLabelsExpressionContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public STARTS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.STARTS, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(CypherParser.WITH, 0); }
	public ENDS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ENDS, 0); }
	public CONTAINS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.CONTAINS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_StringOperatorExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_StringOperatorExpression) {
			listener.enterOC_StringOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_StringOperatorExpression) {
			listener.exitOC_StringOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_StringOperatorExpression) {
			return visitor.visitOC_StringOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NullOperatorExpressionContext extends ParserRuleContext {
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.IS, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(CypherParser.NULL, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_NullOperatorExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_NullOperatorExpression) {
			listener.enterOC_NullOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_NullOperatorExpression) {
			listener.exitOC_NullOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_NullOperatorExpression) {
			return visitor.visitOC_NullOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PropertyOrLabelsExpressionContext extends ParserRuleContext {
	public oC_Atom(): OC_AtomContext {
		return this.getRuleContext(0, OC_AtomContext);
	}
	public oC_PropertyLookup(): OC_PropertyLookupContext[];
	public oC_PropertyLookup(i: number): OC_PropertyLookupContext;
	public oC_PropertyLookup(i?: number): OC_PropertyLookupContext | OC_PropertyLookupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PropertyLookupContext);
		} else {
			return this.getRuleContext(i, OC_PropertyLookupContext);
		}
	}
	public oC_NodeLabels(): OC_NodeLabelsContext | undefined {
		return this.tryGetRuleContext(0, OC_NodeLabelsContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PropertyOrLabelsExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PropertyOrLabelsExpression) {
			listener.enterOC_PropertyOrLabelsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PropertyOrLabelsExpression) {
			listener.exitOC_PropertyOrLabelsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PropertyOrLabelsExpression) {
			return visitor.visitOC_PropertyOrLabelsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_AtomContext extends ParserRuleContext {
	public oC_Literal(): OC_LiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_LiteralContext);
	}
	public oC_Parameter(): OC_ParameterContext | undefined {
		return this.tryGetRuleContext(0, OC_ParameterContext);
	}
	public oC_CaseExpression(): OC_CaseExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_CaseExpressionContext);
	}
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.COUNT, 0); }
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_ListComprehension(): OC_ListComprehensionContext | undefined {
		return this.tryGetRuleContext(0, OC_ListComprehensionContext);
	}
	public oC_PatternComprehension(): OC_PatternComprehensionContext | undefined {
		return this.tryGetRuleContext(0, OC_PatternComprehensionContext);
	}
	public ALL(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ALL, 0); }
	public oC_FilterExpression(): OC_FilterExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_FilterExpressionContext);
	}
	public ANY(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ANY, 0); }
	public NONE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.NONE, 0); }
	public SINGLE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SINGLE, 0); }
	public oC_RelationshipsPattern(): OC_RelationshipsPatternContext | undefined {
		return this.tryGetRuleContext(0, OC_RelationshipsPatternContext);
	}
	public oC_ParenthesizedExpression(): OC_ParenthesizedExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_ParenthesizedExpressionContext);
	}
	public oC_FunctionInvocation(): OC_FunctionInvocationContext | undefined {
		return this.tryGetRuleContext(0, OC_FunctionInvocationContext);
	}
	public oC_ExistentialSubquery(): OC_ExistentialSubqueryContext | undefined {
		return this.tryGetRuleContext(0, OC_ExistentialSubqueryContext);
	}
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Atom; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Atom) {
			listener.enterOC_Atom(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Atom) {
			listener.exitOC_Atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Atom) {
			return visitor.visitOC_Atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_LiteralContext extends ParserRuleContext {
	public oC_NumberLiteral(): OC_NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_NumberLiteralContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CypherParser.StringLiteral, 0); }
	public oC_BooleanLiteral(): OC_BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_BooleanLiteralContext);
	}
	public NULL(): TerminalNode | undefined { return this.tryGetToken(CypherParser.NULL, 0); }
	public oC_MapLiteral(): OC_MapLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_MapLiteralContext);
	}
	public oC_ListLiteral(): OC_ListLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_ListLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Literal; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Literal) {
			listener.enterOC_Literal(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Literal) {
			listener.exitOC_Literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Literal) {
			return visitor.visitOC_Literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_BooleanLiteralContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_BooleanLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_BooleanLiteral) {
			listener.enterOC_BooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_BooleanLiteral) {
			listener.exitOC_BooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_BooleanLiteral) {
			return visitor.visitOC_BooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ListLiteralContext extends ParserRuleContext {
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ListLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ListLiteral) {
			listener.enterOC_ListLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ListLiteral) {
			listener.exitOC_ListLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ListLiteral) {
			return visitor.visitOC_ListLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PartialComparisonExpressionContext extends ParserRuleContext {
	public oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_AddOrSubtractExpressionContext);
	}
	public SP(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PartialComparisonExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PartialComparisonExpression) {
			listener.enterOC_PartialComparisonExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PartialComparisonExpression) {
			listener.exitOC_PartialComparisonExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PartialComparisonExpression) {
			return visitor.visitOC_PartialComparisonExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ParenthesizedExpressionContext extends ParserRuleContext {
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ParenthesizedExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ParenthesizedExpression) {
			listener.enterOC_ParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ParenthesizedExpression) {
			listener.exitOC_ParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ParenthesizedExpression) {
			return visitor.visitOC_ParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RelationshipsPatternContext extends ParserRuleContext {
	public oC_NodePattern(): OC_NodePatternContext {
		return this.getRuleContext(0, OC_NodePatternContext);
	}
	public oC_PatternElementChain(): OC_PatternElementChainContext[];
	public oC_PatternElementChain(i: number): OC_PatternElementChainContext;
	public oC_PatternElementChain(i?: number): OC_PatternElementChainContext | OC_PatternElementChainContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PatternElementChainContext);
		} else {
			return this.getRuleContext(i, OC_PatternElementChainContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RelationshipsPattern; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RelationshipsPattern) {
			listener.enterOC_RelationshipsPattern(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RelationshipsPattern) {
			listener.exitOC_RelationshipsPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RelationshipsPattern) {
			return visitor.visitOC_RelationshipsPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_FilterExpressionContext extends ParserRuleContext {
	public oC_IdInColl(): OC_IdInCollContext {
		return this.getRuleContext(0, OC_IdInCollContext);
	}
	public oC_Where(): OC_WhereContext | undefined {
		return this.tryGetRuleContext(0, OC_WhereContext);
	}
	public SP(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_FilterExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_FilterExpression) {
			listener.enterOC_FilterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_FilterExpression) {
			listener.exitOC_FilterExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_FilterExpression) {
			return visitor.visitOC_FilterExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_IdInCollContext extends ParserRuleContext {
	public oC_Variable(): OC_VariableContext {
		return this.getRuleContext(0, OC_VariableContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public IN(): TerminalNode { return this.getToken(CypherParser.IN, 0); }
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_IdInColl; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_IdInColl) {
			listener.enterOC_IdInColl(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_IdInColl) {
			listener.exitOC_IdInColl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_IdInColl) {
			return visitor.visitOC_IdInColl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_FunctionInvocationContext extends ParserRuleContext {
	public oC_FunctionName(): OC_FunctionNameContext {
		return this.getRuleContext(0, OC_FunctionNameContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DISTINCT, 0); }
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_FunctionInvocation; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_FunctionInvocation) {
			listener.enterOC_FunctionInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_FunctionInvocation) {
			listener.exitOC_FunctionInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_FunctionInvocation) {
			return visitor.visitOC_FunctionInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_FunctionNameContext extends ParserRuleContext {
	public oC_Namespace(): OC_NamespaceContext {
		return this.getRuleContext(0, OC_NamespaceContext);
	}
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getRuleContext(0, OC_SymbolicNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_FunctionName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_FunctionName) {
			listener.enterOC_FunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_FunctionName) {
			listener.exitOC_FunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_FunctionName) {
			return visitor.visitOC_FunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ExistentialSubqueryContext extends ParserRuleContext {
	public EXISTS(): TerminalNode { return this.getToken(CypherParser.EXISTS, 0); }
	public oC_RegularQuery(): OC_RegularQueryContext | undefined {
		return this.tryGetRuleContext(0, OC_RegularQueryContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_Pattern(): OC_PatternContext | undefined {
		return this.tryGetRuleContext(0, OC_PatternContext);
	}
	public oC_Where(): OC_WhereContext | undefined {
		return this.tryGetRuleContext(0, OC_WhereContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ExistentialSubquery; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ExistentialSubquery) {
			listener.enterOC_ExistentialSubquery(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ExistentialSubquery) {
			listener.exitOC_ExistentialSubquery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ExistentialSubquery) {
			return visitor.visitOC_ExistentialSubquery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ExplicitProcedureInvocationContext extends ParserRuleContext {
	public oC_ProcedureName(): OC_ProcedureNameContext {
		return this.getRuleContext(0, OC_ProcedureNameContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ExplicitProcedureInvocation; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ExplicitProcedureInvocation) {
			listener.enterOC_ExplicitProcedureInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ExplicitProcedureInvocation) {
			listener.exitOC_ExplicitProcedureInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ExplicitProcedureInvocation) {
			return visitor.visitOC_ExplicitProcedureInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ImplicitProcedureInvocationContext extends ParserRuleContext {
	public oC_ProcedureName(): OC_ProcedureNameContext {
		return this.getRuleContext(0, OC_ProcedureNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ImplicitProcedureInvocation; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ImplicitProcedureInvocation) {
			listener.enterOC_ImplicitProcedureInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ImplicitProcedureInvocation) {
			listener.exitOC_ImplicitProcedureInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ImplicitProcedureInvocation) {
			return visitor.visitOC_ImplicitProcedureInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ProcedureResultFieldContext extends ParserRuleContext {
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getRuleContext(0, OC_SymbolicNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ProcedureResultField; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ProcedureResultField) {
			listener.enterOC_ProcedureResultField(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ProcedureResultField) {
			listener.exitOC_ProcedureResultField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ProcedureResultField) {
			return visitor.visitOC_ProcedureResultField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ProcedureNameContext extends ParserRuleContext {
	public oC_Namespace(): OC_NamespaceContext {
		return this.getRuleContext(0, OC_NamespaceContext);
	}
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getRuleContext(0, OC_SymbolicNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ProcedureName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ProcedureName) {
			listener.enterOC_ProcedureName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ProcedureName) {
			listener.exitOC_ProcedureName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ProcedureName) {
			return visitor.visitOC_ProcedureName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NamespaceContext extends ParserRuleContext {
	public oC_SymbolicName(): OC_SymbolicNameContext[];
	public oC_SymbolicName(i: number): OC_SymbolicNameContext;
	public oC_SymbolicName(i?: number): OC_SymbolicNameContext | OC_SymbolicNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_SymbolicNameContext);
		} else {
			return this.getRuleContext(i, OC_SymbolicNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Namespace; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Namespace) {
			listener.enterOC_Namespace(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Namespace) {
			listener.exitOC_Namespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Namespace) {
			return visitor.visitOC_Namespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ListComprehensionContext extends ParserRuleContext {
	public oC_FilterExpression(): OC_FilterExpressionContext {
		return this.getRuleContext(0, OC_FilterExpressionContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_Expression(): OC_ExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ListComprehension; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ListComprehension) {
			listener.enterOC_ListComprehension(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ListComprehension) {
			listener.exitOC_ListComprehension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ListComprehension) {
			return visitor.visitOC_ListComprehension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PatternComprehensionContext extends ParserRuleContext {
	public oC_RelationshipsPattern(): OC_RelationshipsPatternContext {
		return this.getRuleContext(0, OC_RelationshipsPatternContext);
	}
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	public oC_Where(): OC_WhereContext | undefined {
		return this.tryGetRuleContext(0, OC_WhereContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PatternComprehension; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PatternComprehension) {
			listener.enterOC_PatternComprehension(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PatternComprehension) {
			listener.exitOC_PatternComprehension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PatternComprehension) {
			return visitor.visitOC_PatternComprehension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PropertyLookupContext extends ParserRuleContext {
	public oC_PropertyKeyName(): OC_PropertyKeyNameContext | undefined {
		return this.tryGetRuleContext(0, OC_PropertyKeyNameContext);
	}
	public SP(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PropertyLookup; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PropertyLookup) {
			listener.enterOC_PropertyLookup(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PropertyLookup) {
			listener.exitOC_PropertyLookup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PropertyLookup) {
			return visitor.visitOC_PropertyLookup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_CaseExpressionContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(CypherParser.END, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ELSE, 0); }
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public CASE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.CASE, 0); }
	public oC_CaseAlternative(): OC_CaseAlternativeContext[];
	public oC_CaseAlternative(i: number): OC_CaseAlternativeContext;
	public oC_CaseAlternative(i?: number): OC_CaseAlternativeContext | OC_CaseAlternativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_CaseAlternativeContext);
		} else {
			return this.getRuleContext(i, OC_CaseAlternativeContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_CaseExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_CaseExpression) {
			listener.enterOC_CaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_CaseExpression) {
			listener.exitOC_CaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_CaseExpression) {
			return visitor.visitOC_CaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_CaseAlternativeContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(CypherParser.WHEN, 0); }
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	public THEN(): TerminalNode { return this.getToken(CypherParser.THEN, 0); }
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_CaseAlternative; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_CaseAlternative) {
			listener.enterOC_CaseAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_CaseAlternative) {
			listener.exitOC_CaseAlternative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_CaseAlternative) {
			return visitor.visitOC_CaseAlternative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_VariableContext extends ParserRuleContext {
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getRuleContext(0, OC_SymbolicNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Variable; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Variable) {
			listener.enterOC_Variable(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Variable) {
			listener.exitOC_Variable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Variable) {
			return visitor.visitOC_Variable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NumberLiteralContext extends ParserRuleContext {
	public oC_DoubleLiteral(): OC_DoubleLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_DoubleLiteralContext);
	}
	public oC_IntegerLiteral(): OC_IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_IntegerLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_NumberLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_NumberLiteral) {
			listener.enterOC_NumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_NumberLiteral) {
			listener.exitOC_NumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_NumberLiteral) {
			return visitor.visitOC_NumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_MapLiteralContext extends ParserRuleContext {
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	public oC_PropertyKeyName(): OC_PropertyKeyNameContext[];
	public oC_PropertyKeyName(i: number): OC_PropertyKeyNameContext;
	public oC_PropertyKeyName(i?: number): OC_PropertyKeyNameContext | OC_PropertyKeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PropertyKeyNameContext);
		} else {
			return this.getRuleContext(i, OC_PropertyKeyNameContext);
		}
	}
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_MapLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_MapLiteral) {
			listener.enterOC_MapLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_MapLiteral) {
			listener.exitOC_MapLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_MapLiteral) {
			return visitor.visitOC_MapLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ParameterContext extends ParserRuleContext {
	public oC_SymbolicName(): OC_SymbolicNameContext | undefined {
		return this.tryGetRuleContext(0, OC_SymbolicNameContext);
	}
	public DecimalInteger(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DecimalInteger, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Parameter; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Parameter) {
			listener.enterOC_Parameter(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Parameter) {
			listener.exitOC_Parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Parameter) {
			return visitor.visitOC_Parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PropertyExpressionContext extends ParserRuleContext {
	public oC_Atom(): OC_AtomContext {
		return this.getRuleContext(0, OC_AtomContext);
	}
	public oC_PropertyLookup(): OC_PropertyLookupContext[];
	public oC_PropertyLookup(i: number): OC_PropertyLookupContext;
	public oC_PropertyLookup(i?: number): OC_PropertyLookupContext | OC_PropertyLookupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PropertyLookupContext);
		} else {
			return this.getRuleContext(i, OC_PropertyLookupContext);
		}
	}
	public SP(): TerminalNode[];
	public SP(i: number): TerminalNode;
	public SP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.SP);
		} else {
			return this.getToken(CypherParser.SP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PropertyExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PropertyExpression) {
			listener.enterOC_PropertyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PropertyExpression) {
			listener.exitOC_PropertyExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PropertyExpression) {
			return visitor.visitOC_PropertyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PropertyKeyNameContext extends ParserRuleContext {
	public oC_SchemaName(): OC_SchemaNameContext {
		return this.getRuleContext(0, OC_SchemaNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PropertyKeyName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PropertyKeyName) {
			listener.enterOC_PropertyKeyName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PropertyKeyName) {
			listener.exitOC_PropertyKeyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PropertyKeyName) {
			return visitor.visitOC_PropertyKeyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_IntegerLiteralContext extends ParserRuleContext {
	public HexInteger(): TerminalNode | undefined { return this.tryGetToken(CypherParser.HexInteger, 0); }
	public OctalInteger(): TerminalNode | undefined { return this.tryGetToken(CypherParser.OctalInteger, 0); }
	public DecimalInteger(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DecimalInteger, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_IntegerLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_IntegerLiteral) {
			listener.enterOC_IntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_IntegerLiteral) {
			listener.exitOC_IntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_IntegerLiteral) {
			return visitor.visitOC_IntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_DoubleLiteralContext extends ParserRuleContext {
	public ExponentDecimalReal(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ExponentDecimalReal, 0); }
	public RegularDecimalReal(): TerminalNode | undefined { return this.tryGetToken(CypherParser.RegularDecimalReal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_DoubleLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_DoubleLiteral) {
			listener.enterOC_DoubleLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_DoubleLiteral) {
			listener.exitOC_DoubleLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_DoubleLiteral) {
			return visitor.visitOC_DoubleLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SchemaNameContext extends ParserRuleContext {
	public oC_SymbolicName(): OC_SymbolicNameContext | undefined {
		return this.tryGetRuleContext(0, OC_SymbolicNameContext);
	}
	public oC_ReservedWord(): OC_ReservedWordContext | undefined {
		return this.tryGetRuleContext(0, OC_ReservedWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_SchemaName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_SchemaName) {
			listener.enterOC_SchemaName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_SchemaName) {
			listener.exitOC_SchemaName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_SchemaName) {
			return visitor.visitOC_SchemaName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ReservedWordContext extends ParserRuleContext {
	public ALL(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ALL, 0); }
	public ASC(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ASC, 0); }
	public ASCENDING(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ASCENDING, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(CypherParser.BY, 0); }
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.CREATE, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DELETE, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DESC, 0); }
	public DESCENDING(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DESCENDING, 0); }
	public DETACH(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DETACH, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.EXISTS, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.LIMIT, 0); }
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(CypherParser.MATCH, 0); }
	public MERGE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.MERGE, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ON, 0); }
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(CypherParser.OPTIONAL, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ORDER, 0); }
	public REMOVE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.REMOVE, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(CypherParser.RETURN, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SET, 0); }
	public L_SKIP(): TerminalNode | undefined { return this.tryGetToken(CypherParser.L_SKIP, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.WHERE, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(CypherParser.WITH, 0); }
	public UNION(): TerminalNode | undefined { return this.tryGetToken(CypherParser.UNION, 0); }
	public UNWIND(): TerminalNode | undefined { return this.tryGetToken(CypherParser.UNWIND, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(CypherParser.AND, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.AS, 0); }
	public CONTAINS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.CONTAINS, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DISTINCT, 0); }
	public ENDS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ENDS, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(CypherParser.IN, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.IS, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.NOT, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(CypherParser.OR, 0); }
	public STARTS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.STARTS, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(CypherParser.XOR, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.FALSE, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.TRUE, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(CypherParser.NULL, 0); }
	public CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.CONSTRAINT, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DO, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(CypherParser.FOR, 0); }
	public REQUIRE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.REQUIRE, 0); }
	public UNIQUE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.UNIQUE, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.CASE, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(CypherParser.WHEN, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(CypherParser.THEN, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ELSE, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(CypherParser.END, 0); }
	public MANDATORY(): TerminalNode | undefined { return this.tryGetToken(CypherParser.MANDATORY, 0); }
	public SCALAR(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SCALAR, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(CypherParser.OF, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ADD, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DROP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ReservedWord; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ReservedWord) {
			listener.enterOC_ReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ReservedWord) {
			listener.exitOC_ReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ReservedWord) {
			return visitor.visitOC_ReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SymbolicNameContext extends ParserRuleContext {
	public UnescapedSymbolicName(): TerminalNode | undefined { return this.tryGetToken(CypherParser.UnescapedSymbolicName, 0); }
	public EscapedSymbolicName(): TerminalNode | undefined { return this.tryGetToken(CypherParser.EscapedSymbolicName, 0); }
	public HexLetter(): TerminalNode | undefined { return this.tryGetToken(CypherParser.HexLetter, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.COUNT, 0); }
	public FILTER(): TerminalNode | undefined { return this.tryGetToken(CypherParser.FILTER, 0); }
	public EXTRACT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.EXTRACT, 0); }
	public ANY(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ANY, 0); }
	public NONE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.NONE, 0); }
	public SINGLE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SINGLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_SymbolicName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_SymbolicName) {
			listener.enterOC_SymbolicName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_SymbolicName) {
			listener.exitOC_SymbolicName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_SymbolicName) {
			return visitor.visitOC_SymbolicName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_LeftArrowHeadContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_LeftArrowHead; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_LeftArrowHead) {
			listener.enterOC_LeftArrowHead(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_LeftArrowHead) {
			listener.exitOC_LeftArrowHead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_LeftArrowHead) {
			return visitor.visitOC_LeftArrowHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RightArrowHeadContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RightArrowHead; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RightArrowHead) {
			listener.enterOC_RightArrowHead(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RightArrowHead) {
			listener.exitOC_RightArrowHead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RightArrowHead) {
			return visitor.visitOC_RightArrowHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_DashContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Dash; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Dash) {
			listener.enterOC_Dash(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Dash) {
			listener.exitOC_Dash(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Dash) {
			return visitor.visitOC_Dash(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


