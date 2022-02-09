// Generated from CypherScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { OC_CypherContext } from "./CypherScriptParser";
import { OC_StatementContext } from "./CypherScriptParser";
import { OC_QueryContext } from "./CypherScriptParser";
import { OC_RegularQueryContext } from "./CypherScriptParser";
import { OC_UnionContext } from "./CypherScriptParser";
import { OC_SingleQueryContext } from "./CypherScriptParser";
import { OC_SinglePartQueryContext } from "./CypherScriptParser";
import { OC_MultiPartQueryContext } from "./CypherScriptParser";
import { OC_UpdatingClauseContext } from "./CypherScriptParser";
import { OC_ReadingClauseContext } from "./CypherScriptParser";
import { OC_MatchContext } from "./CypherScriptParser";
import { OC_UnwindContext } from "./CypherScriptParser";
import { OC_MergeContext } from "./CypherScriptParser";
import { OC_MergeActionContext } from "./CypherScriptParser";
import { OC_CreateContext } from "./CypherScriptParser";
import { OC_SetContext } from "./CypherScriptParser";
import { OC_SetItemContext } from "./CypherScriptParser";
import { OC_DeleteContext } from "./CypherScriptParser";
import { OC_RemoveContext } from "./CypherScriptParser";
import { OC_RemoveItemContext } from "./CypherScriptParser";
import { OC_InQueryCallContext } from "./CypherScriptParser";
import { OC_StandaloneCallContext } from "./CypherScriptParser";
import { OC_YieldItemsContext } from "./CypherScriptParser";
import { OC_YieldItemContext } from "./CypherScriptParser";
import { OC_WithContext } from "./CypherScriptParser";
import { OC_ReturnContext } from "./CypherScriptParser";
import { OC_ProjectionBodyContext } from "./CypherScriptParser";
import { OC_ProjectionItemsContext } from "./CypherScriptParser";
import { OC_ProjectionItemContext } from "./CypherScriptParser";
import { OC_OrderContext } from "./CypherScriptParser";
import { OC_SkipContext } from "./CypherScriptParser";
import { OC_LimitContext } from "./CypherScriptParser";
import { OC_SortItemContext } from "./CypherScriptParser";
import { OC_WhereContext } from "./CypherScriptParser";
import { OC_PatternContext } from "./CypherScriptParser";
import { OC_PatternPartContext } from "./CypherScriptParser";
import { OC_AnonymousPatternPartContext } from "./CypherScriptParser";
import { OC_PatternElementContext } from "./CypherScriptParser";
import { OC_NodePatternContext } from "./CypherScriptParser";
import { OC_PatternElementChainContext } from "./CypherScriptParser";
import { OC_RelationshipPatternContext } from "./CypherScriptParser";
import { OC_RelationshipDetailContext } from "./CypherScriptParser";
import { OC_PropertiesContext } from "./CypherScriptParser";
import { OC_RelationshipTypesContext } from "./CypherScriptParser";
import { OC_NodeLabelsContext } from "./CypherScriptParser";
import { OC_NodeLabelContext } from "./CypherScriptParser";
import { OC_RangeLiteralContext } from "./CypherScriptParser";
import { OC_LabelNameContext } from "./CypherScriptParser";
import { OC_RelTypeNameContext } from "./CypherScriptParser";
import { OC_ExpressionContext } from "./CypherScriptParser";
import { OC_OrExpressionContext } from "./CypherScriptParser";
import { OC_XorExpressionContext } from "./CypherScriptParser";
import { OC_AndExpressionContext } from "./CypherScriptParser";
import { OC_NotExpressionContext } from "./CypherScriptParser";
import { OC_ComparisonExpressionContext } from "./CypherScriptParser";
import { OC_AddOrSubtractExpressionContext } from "./CypherScriptParser";
import { OC_MultiplyDivideModuloExpressionContext } from "./CypherScriptParser";
import { OC_PowerOfExpressionContext } from "./CypherScriptParser";
import { OC_UnaryAddOrSubtractExpressionContext } from "./CypherScriptParser";
import { OC_StringListNullOperatorExpressionContext } from "./CypherScriptParser";
import { OC_ListOperatorExpressionContext } from "./CypherScriptParser";
import { OC_StringOperatorExpressionContext } from "./CypherScriptParser";
import { OC_NullOperatorExpressionContext } from "./CypherScriptParser";
import { OC_PropertyOrLabelsExpressionContext } from "./CypherScriptParser";
import { OC_AtomContext } from "./CypherScriptParser";
import { OC_LiteralContext } from "./CypherScriptParser";
import { OC_BooleanLiteralContext } from "./CypherScriptParser";
import { OC_ListLiteralContext } from "./CypherScriptParser";
import { OC_PartialComparisonExpressionContext } from "./CypherScriptParser";
import { OC_ParenthesizedExpressionContext } from "./CypherScriptParser";
import { OC_RelationshipsPatternContext } from "./CypherScriptParser";
import { OC_FilterExpressionContext } from "./CypherScriptParser";
import { OC_IdInCollContext } from "./CypherScriptParser";
import { OC_FunctionInvocationContext } from "./CypherScriptParser";
import { OC_FunctionNameContext } from "./CypherScriptParser";
import { OC_ExistentialSubqueryContext } from "./CypherScriptParser";
import { OC_ExplicitProcedureInvocationContext } from "./CypherScriptParser";
import { OC_ImplicitProcedureInvocationContext } from "./CypherScriptParser";
import { OC_ProcedureResultFieldContext } from "./CypherScriptParser";
import { OC_ProcedureNameContext } from "./CypherScriptParser";
import { OC_NamespaceContext } from "./CypherScriptParser";
import { OC_ListComprehensionContext } from "./CypherScriptParser";
import { OC_PatternComprehensionContext } from "./CypherScriptParser";
import { OC_PropertyLookupContext } from "./CypherScriptParser";
import { OC_CaseExpressionContext } from "./CypherScriptParser";
import { OC_CaseAlternativeContext } from "./CypherScriptParser";
import { OC_VariableContext } from "./CypherScriptParser";
import { OC_NumberLiteralContext } from "./CypherScriptParser";
import { OC_MapLiteralContext } from "./CypherScriptParser";
import { OC_ParameterContext } from "./CypherScriptParser";
import { OC_PropertyExpressionContext } from "./CypherScriptParser";
import { OC_PropertyKeyNameContext } from "./CypherScriptParser";
import { OC_IntegerLiteralContext } from "./CypherScriptParser";
import { OC_DoubleLiteralContext } from "./CypherScriptParser";
import { OC_SchemaNameContext } from "./CypherScriptParser";
import { OC_ReservedWordContext } from "./CypherScriptParser";
import { OC_SymbolicNameContext } from "./CypherScriptParser";
import { OC_LeftArrowHeadContext } from "./CypherScriptParser";
import { OC_RightArrowHeadContext } from "./CypherScriptParser";
import { OC_DashContext } from "./CypherScriptParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CypherScriptParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CypherScriptVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Cypher`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Cypher?: (ctx: OC_CypherContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Statement?: (ctx: OC_StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Query?: (ctx: OC_QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_RegularQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RegularQuery?: (ctx: OC_RegularQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Union`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Union?: (ctx: OC_UnionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_SingleQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_SingleQuery?: (ctx: OC_SingleQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_SinglePartQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_SinglePartQuery?: (ctx: OC_SinglePartQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_MultiPartQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_MultiPartQuery?: (ctx: OC_MultiPartQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_UpdatingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_UpdatingClause?: (ctx: OC_UpdatingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ReadingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ReadingClause?: (ctx: OC_ReadingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Match`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Match?: (ctx: OC_MatchContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Unwind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Unwind?: (ctx: OC_UnwindContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Merge`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Merge?: (ctx: OC_MergeContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_MergeAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_MergeAction?: (ctx: OC_MergeActionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Create`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Create?: (ctx: OC_CreateContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Set?: (ctx: OC_SetContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_SetItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_SetItem?: (ctx: OC_SetItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Delete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Delete?: (ctx: OC_DeleteContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Remove`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Remove?: (ctx: OC_RemoveContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_RemoveItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RemoveItem?: (ctx: OC_RemoveItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_InQueryCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_InQueryCall?: (ctx: OC_InQueryCallContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_StandaloneCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_StandaloneCall?: (ctx: OC_StandaloneCallContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_YieldItems`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_YieldItems?: (ctx: OC_YieldItemsContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_YieldItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_YieldItem?: (ctx: OC_YieldItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_With`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_With?: (ctx: OC_WithContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Return?: (ctx: OC_ReturnContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ProjectionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ProjectionBody?: (ctx: OC_ProjectionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ProjectionItems`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ProjectionItems?: (ctx: OC_ProjectionItemsContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ProjectionItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ProjectionItem?: (ctx: OC_ProjectionItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Order`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Order?: (ctx: OC_OrderContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Skip`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Skip?: (ctx: OC_SkipContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Limit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Limit?: (ctx: OC_LimitContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_SortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_SortItem?: (ctx: OC_SortItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Where`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Where?: (ctx: OC_WhereContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Pattern?: (ctx: OC_PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_PatternPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PatternPart?: (ctx: OC_PatternPartContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_AnonymousPatternPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_AnonymousPatternPart?: (ctx: OC_AnonymousPatternPartContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_PatternElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PatternElement?: (ctx: OC_PatternElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_NodePattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_NodePattern?: (ctx: OC_NodePatternContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_PatternElementChain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PatternElementChain?: (ctx: OC_PatternElementChainContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_RelationshipPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RelationshipPattern?: (ctx: OC_RelationshipPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_RelationshipDetail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RelationshipDetail?: (ctx: OC_RelationshipDetailContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Properties?: (ctx: OC_PropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_RelationshipTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RelationshipTypes?: (ctx: OC_RelationshipTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_NodeLabels`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_NodeLabels?: (ctx: OC_NodeLabelsContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_NodeLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_NodeLabel?: (ctx: OC_NodeLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_RangeLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RangeLiteral?: (ctx: OC_RangeLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_LabelName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_LabelName?: (ctx: OC_LabelNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_RelTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RelTypeName?: (ctx: OC_RelTypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Expression?: (ctx: OC_ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_OrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_OrExpression?: (ctx: OC_OrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_XorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_XorExpression?: (ctx: OC_XorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_AndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_AndExpression?: (ctx: OC_AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_NotExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_NotExpression?: (ctx: OC_NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ComparisonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ComparisonExpression?: (ctx: OC_ComparisonExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_AddOrSubtractExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_AddOrSubtractExpression?: (ctx: OC_AddOrSubtractExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_MultiplyDivideModuloExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_MultiplyDivideModuloExpression?: (ctx: OC_MultiplyDivideModuloExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_PowerOfExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PowerOfExpression?: (ctx: OC_PowerOfExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_UnaryAddOrSubtractExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_UnaryAddOrSubtractExpression?: (ctx: OC_UnaryAddOrSubtractExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_StringListNullOperatorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_StringListNullOperatorExpression?: (ctx: OC_StringListNullOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ListOperatorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ListOperatorExpression?: (ctx: OC_ListOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_StringOperatorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_StringOperatorExpression?: (ctx: OC_StringOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_NullOperatorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_NullOperatorExpression?: (ctx: OC_NullOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_PropertyOrLabelsExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PropertyOrLabelsExpression?: (ctx: OC_PropertyOrLabelsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Atom?: (ctx: OC_AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Literal?: (ctx: OC_LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_BooleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_BooleanLiteral?: (ctx: OC_BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ListLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ListLiteral?: (ctx: OC_ListLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_PartialComparisonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PartialComparisonExpression?: (ctx: OC_PartialComparisonExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ParenthesizedExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ParenthesizedExpression?: (ctx: OC_ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_RelationshipsPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RelationshipsPattern?: (ctx: OC_RelationshipsPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_FilterExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_FilterExpression?: (ctx: OC_FilterExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_IdInColl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_IdInColl?: (ctx: OC_IdInCollContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_FunctionInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_FunctionInvocation?: (ctx: OC_FunctionInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_FunctionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_FunctionName?: (ctx: OC_FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ExistentialSubquery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ExistentialSubquery?: (ctx: OC_ExistentialSubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ExplicitProcedureInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ExplicitProcedureInvocation?: (ctx: OC_ExplicitProcedureInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ImplicitProcedureInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ImplicitProcedureInvocation?: (ctx: OC_ImplicitProcedureInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ProcedureResultField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ProcedureResultField?: (ctx: OC_ProcedureResultFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ProcedureName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ProcedureName?: (ctx: OC_ProcedureNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Namespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Namespace?: (ctx: OC_NamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ListComprehension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ListComprehension?: (ctx: OC_ListComprehensionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_PatternComprehension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PatternComprehension?: (ctx: OC_PatternComprehensionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_PropertyLookup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PropertyLookup?: (ctx: OC_PropertyLookupContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_CaseExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_CaseExpression?: (ctx: OC_CaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_CaseAlternative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_CaseAlternative?: (ctx: OC_CaseAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Variable?: (ctx: OC_VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_NumberLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_NumberLiteral?: (ctx: OC_NumberLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_MapLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_MapLiteral?: (ctx: OC_MapLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Parameter?: (ctx: OC_ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_PropertyExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PropertyExpression?: (ctx: OC_PropertyExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_PropertyKeyName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PropertyKeyName?: (ctx: OC_PropertyKeyNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_IntegerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_IntegerLiteral?: (ctx: OC_IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_DoubleLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_DoubleLiteral?: (ctx: OC_DoubleLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_SchemaName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_SchemaName?: (ctx: OC_SchemaNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_ReservedWord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ReservedWord?: (ctx: OC_ReservedWordContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_SymbolicName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_SymbolicName?: (ctx: OC_SymbolicNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_LeftArrowHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_LeftArrowHead?: (ctx: OC_LeftArrowHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_RightArrowHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RightArrowHead?: (ctx: OC_RightArrowHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherScriptParser.oC_Dash`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Dash?: (ctx: OC_DashContext) => Result;
}

