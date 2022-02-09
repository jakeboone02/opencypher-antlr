// Generated from CypherScript.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `CypherScriptParser`.
 */
export interface CypherScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Cypher`.
	 * @param ctx the parse tree
	 */
	enterOC_Cypher?: (ctx: OC_CypherContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Cypher`.
	 * @param ctx the parse tree
	 */
	exitOC_Cypher?: (ctx: OC_CypherContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Statement`.
	 * @param ctx the parse tree
	 */
	enterOC_Statement?: (ctx: OC_StatementContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Statement`.
	 * @param ctx the parse tree
	 */
	exitOC_Statement?: (ctx: OC_StatementContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Query`.
	 * @param ctx the parse tree
	 */
	enterOC_Query?: (ctx: OC_QueryContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Query`.
	 * @param ctx the parse tree
	 */
	exitOC_Query?: (ctx: OC_QueryContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_RegularQuery`.
	 * @param ctx the parse tree
	 */
	enterOC_RegularQuery?: (ctx: OC_RegularQueryContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_RegularQuery`.
	 * @param ctx the parse tree
	 */
	exitOC_RegularQuery?: (ctx: OC_RegularQueryContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Union`.
	 * @param ctx the parse tree
	 */
	enterOC_Union?: (ctx: OC_UnionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Union`.
	 * @param ctx the parse tree
	 */
	exitOC_Union?: (ctx: OC_UnionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_SingleQuery`.
	 * @param ctx the parse tree
	 */
	enterOC_SingleQuery?: (ctx: OC_SingleQueryContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_SingleQuery`.
	 * @param ctx the parse tree
	 */
	exitOC_SingleQuery?: (ctx: OC_SingleQueryContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_SinglePartQuery`.
	 * @param ctx the parse tree
	 */
	enterOC_SinglePartQuery?: (ctx: OC_SinglePartQueryContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_SinglePartQuery`.
	 * @param ctx the parse tree
	 */
	exitOC_SinglePartQuery?: (ctx: OC_SinglePartQueryContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_MultiPartQuery`.
	 * @param ctx the parse tree
	 */
	enterOC_MultiPartQuery?: (ctx: OC_MultiPartQueryContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_MultiPartQuery`.
	 * @param ctx the parse tree
	 */
	exitOC_MultiPartQuery?: (ctx: OC_MultiPartQueryContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_UpdatingClause`.
	 * @param ctx the parse tree
	 */
	enterOC_UpdatingClause?: (ctx: OC_UpdatingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_UpdatingClause`.
	 * @param ctx the parse tree
	 */
	exitOC_UpdatingClause?: (ctx: OC_UpdatingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ReadingClause`.
	 * @param ctx the parse tree
	 */
	enterOC_ReadingClause?: (ctx: OC_ReadingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ReadingClause`.
	 * @param ctx the parse tree
	 */
	exitOC_ReadingClause?: (ctx: OC_ReadingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Match`.
	 * @param ctx the parse tree
	 */
	enterOC_Match?: (ctx: OC_MatchContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Match`.
	 * @param ctx the parse tree
	 */
	exitOC_Match?: (ctx: OC_MatchContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Unwind`.
	 * @param ctx the parse tree
	 */
	enterOC_Unwind?: (ctx: OC_UnwindContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Unwind`.
	 * @param ctx the parse tree
	 */
	exitOC_Unwind?: (ctx: OC_UnwindContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Merge`.
	 * @param ctx the parse tree
	 */
	enterOC_Merge?: (ctx: OC_MergeContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Merge`.
	 * @param ctx the parse tree
	 */
	exitOC_Merge?: (ctx: OC_MergeContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_MergeAction`.
	 * @param ctx the parse tree
	 */
	enterOC_MergeAction?: (ctx: OC_MergeActionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_MergeAction`.
	 * @param ctx the parse tree
	 */
	exitOC_MergeAction?: (ctx: OC_MergeActionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Create`.
	 * @param ctx the parse tree
	 */
	enterOC_Create?: (ctx: OC_CreateContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Create`.
	 * @param ctx the parse tree
	 */
	exitOC_Create?: (ctx: OC_CreateContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Set`.
	 * @param ctx the parse tree
	 */
	enterOC_Set?: (ctx: OC_SetContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Set`.
	 * @param ctx the parse tree
	 */
	exitOC_Set?: (ctx: OC_SetContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_SetItem`.
	 * @param ctx the parse tree
	 */
	enterOC_SetItem?: (ctx: OC_SetItemContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_SetItem`.
	 * @param ctx the parse tree
	 */
	exitOC_SetItem?: (ctx: OC_SetItemContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Delete`.
	 * @param ctx the parse tree
	 */
	enterOC_Delete?: (ctx: OC_DeleteContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Delete`.
	 * @param ctx the parse tree
	 */
	exitOC_Delete?: (ctx: OC_DeleteContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Remove`.
	 * @param ctx the parse tree
	 */
	enterOC_Remove?: (ctx: OC_RemoveContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Remove`.
	 * @param ctx the parse tree
	 */
	exitOC_Remove?: (ctx: OC_RemoveContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_RemoveItem`.
	 * @param ctx the parse tree
	 */
	enterOC_RemoveItem?: (ctx: OC_RemoveItemContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_RemoveItem`.
	 * @param ctx the parse tree
	 */
	exitOC_RemoveItem?: (ctx: OC_RemoveItemContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_InQueryCall`.
	 * @param ctx the parse tree
	 */
	enterOC_InQueryCall?: (ctx: OC_InQueryCallContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_InQueryCall`.
	 * @param ctx the parse tree
	 */
	exitOC_InQueryCall?: (ctx: OC_InQueryCallContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_StandaloneCall`.
	 * @param ctx the parse tree
	 */
	enterOC_StandaloneCall?: (ctx: OC_StandaloneCallContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_StandaloneCall`.
	 * @param ctx the parse tree
	 */
	exitOC_StandaloneCall?: (ctx: OC_StandaloneCallContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_YieldItems`.
	 * @param ctx the parse tree
	 */
	enterOC_YieldItems?: (ctx: OC_YieldItemsContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_YieldItems`.
	 * @param ctx the parse tree
	 */
	exitOC_YieldItems?: (ctx: OC_YieldItemsContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_YieldItem`.
	 * @param ctx the parse tree
	 */
	enterOC_YieldItem?: (ctx: OC_YieldItemContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_YieldItem`.
	 * @param ctx the parse tree
	 */
	exitOC_YieldItem?: (ctx: OC_YieldItemContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_With`.
	 * @param ctx the parse tree
	 */
	enterOC_With?: (ctx: OC_WithContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_With`.
	 * @param ctx the parse tree
	 */
	exitOC_With?: (ctx: OC_WithContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Return`.
	 * @param ctx the parse tree
	 */
	enterOC_Return?: (ctx: OC_ReturnContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Return`.
	 * @param ctx the parse tree
	 */
	exitOC_Return?: (ctx: OC_ReturnContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ProjectionBody`.
	 * @param ctx the parse tree
	 */
	enterOC_ProjectionBody?: (ctx: OC_ProjectionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ProjectionBody`.
	 * @param ctx the parse tree
	 */
	exitOC_ProjectionBody?: (ctx: OC_ProjectionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ProjectionItems`.
	 * @param ctx the parse tree
	 */
	enterOC_ProjectionItems?: (ctx: OC_ProjectionItemsContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ProjectionItems`.
	 * @param ctx the parse tree
	 */
	exitOC_ProjectionItems?: (ctx: OC_ProjectionItemsContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ProjectionItem`.
	 * @param ctx the parse tree
	 */
	enterOC_ProjectionItem?: (ctx: OC_ProjectionItemContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ProjectionItem`.
	 * @param ctx the parse tree
	 */
	exitOC_ProjectionItem?: (ctx: OC_ProjectionItemContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Order`.
	 * @param ctx the parse tree
	 */
	enterOC_Order?: (ctx: OC_OrderContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Order`.
	 * @param ctx the parse tree
	 */
	exitOC_Order?: (ctx: OC_OrderContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Skip`.
	 * @param ctx the parse tree
	 */
	enterOC_Skip?: (ctx: OC_SkipContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Skip`.
	 * @param ctx the parse tree
	 */
	exitOC_Skip?: (ctx: OC_SkipContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Limit`.
	 * @param ctx the parse tree
	 */
	enterOC_Limit?: (ctx: OC_LimitContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Limit`.
	 * @param ctx the parse tree
	 */
	exitOC_Limit?: (ctx: OC_LimitContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_SortItem`.
	 * @param ctx the parse tree
	 */
	enterOC_SortItem?: (ctx: OC_SortItemContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_SortItem`.
	 * @param ctx the parse tree
	 */
	exitOC_SortItem?: (ctx: OC_SortItemContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Where`.
	 * @param ctx the parse tree
	 */
	enterOC_Where?: (ctx: OC_WhereContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Where`.
	 * @param ctx the parse tree
	 */
	exitOC_Where?: (ctx: OC_WhereContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Pattern`.
	 * @param ctx the parse tree
	 */
	enterOC_Pattern?: (ctx: OC_PatternContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Pattern`.
	 * @param ctx the parse tree
	 */
	exitOC_Pattern?: (ctx: OC_PatternContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_PatternPart`.
	 * @param ctx the parse tree
	 */
	enterOC_PatternPart?: (ctx: OC_PatternPartContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_PatternPart`.
	 * @param ctx the parse tree
	 */
	exitOC_PatternPart?: (ctx: OC_PatternPartContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_AnonymousPatternPart`.
	 * @param ctx the parse tree
	 */
	enterOC_AnonymousPatternPart?: (ctx: OC_AnonymousPatternPartContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_AnonymousPatternPart`.
	 * @param ctx the parse tree
	 */
	exitOC_AnonymousPatternPart?: (ctx: OC_AnonymousPatternPartContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_PatternElement`.
	 * @param ctx the parse tree
	 */
	enterOC_PatternElement?: (ctx: OC_PatternElementContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_PatternElement`.
	 * @param ctx the parse tree
	 */
	exitOC_PatternElement?: (ctx: OC_PatternElementContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_NodePattern`.
	 * @param ctx the parse tree
	 */
	enterOC_NodePattern?: (ctx: OC_NodePatternContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_NodePattern`.
	 * @param ctx the parse tree
	 */
	exitOC_NodePattern?: (ctx: OC_NodePatternContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_PatternElementChain`.
	 * @param ctx the parse tree
	 */
	enterOC_PatternElementChain?: (ctx: OC_PatternElementChainContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_PatternElementChain`.
	 * @param ctx the parse tree
	 */
	exitOC_PatternElementChain?: (ctx: OC_PatternElementChainContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_RelationshipPattern`.
	 * @param ctx the parse tree
	 */
	enterOC_RelationshipPattern?: (ctx: OC_RelationshipPatternContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_RelationshipPattern`.
	 * @param ctx the parse tree
	 */
	exitOC_RelationshipPattern?: (ctx: OC_RelationshipPatternContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_RelationshipDetail`.
	 * @param ctx the parse tree
	 */
	enterOC_RelationshipDetail?: (ctx: OC_RelationshipDetailContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_RelationshipDetail`.
	 * @param ctx the parse tree
	 */
	exitOC_RelationshipDetail?: (ctx: OC_RelationshipDetailContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Properties`.
	 * @param ctx the parse tree
	 */
	enterOC_Properties?: (ctx: OC_PropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Properties`.
	 * @param ctx the parse tree
	 */
	exitOC_Properties?: (ctx: OC_PropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_RelationshipTypes`.
	 * @param ctx the parse tree
	 */
	enterOC_RelationshipTypes?: (ctx: OC_RelationshipTypesContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_RelationshipTypes`.
	 * @param ctx the parse tree
	 */
	exitOC_RelationshipTypes?: (ctx: OC_RelationshipTypesContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_NodeLabels`.
	 * @param ctx the parse tree
	 */
	enterOC_NodeLabels?: (ctx: OC_NodeLabelsContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_NodeLabels`.
	 * @param ctx the parse tree
	 */
	exitOC_NodeLabels?: (ctx: OC_NodeLabelsContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_NodeLabel`.
	 * @param ctx the parse tree
	 */
	enterOC_NodeLabel?: (ctx: OC_NodeLabelContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_NodeLabel`.
	 * @param ctx the parse tree
	 */
	exitOC_NodeLabel?: (ctx: OC_NodeLabelContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_RangeLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_RangeLiteral?: (ctx: OC_RangeLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_RangeLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_RangeLiteral?: (ctx: OC_RangeLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_LabelName`.
	 * @param ctx the parse tree
	 */
	enterOC_LabelName?: (ctx: OC_LabelNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_LabelName`.
	 * @param ctx the parse tree
	 */
	exitOC_LabelName?: (ctx: OC_LabelNameContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_RelTypeName`.
	 * @param ctx the parse tree
	 */
	enterOC_RelTypeName?: (ctx: OC_RelTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_RelTypeName`.
	 * @param ctx the parse tree
	 */
	exitOC_RelTypeName?: (ctx: OC_RelTypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Expression`.
	 * @param ctx the parse tree
	 */
	enterOC_Expression?: (ctx: OC_ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Expression`.
	 * @param ctx the parse tree
	 */
	exitOC_Expression?: (ctx: OC_ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_OrExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_OrExpression?: (ctx: OC_OrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_OrExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_OrExpression?: (ctx: OC_OrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_XorExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_XorExpression?: (ctx: OC_XorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_XorExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_XorExpression?: (ctx: OC_XorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_AndExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_AndExpression?: (ctx: OC_AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_AndExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_AndExpression?: (ctx: OC_AndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_NotExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_NotExpression?: (ctx: OC_NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_NotExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_NotExpression?: (ctx: OC_NotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ComparisonExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_ComparisonExpression?: (ctx: OC_ComparisonExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ComparisonExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_ComparisonExpression?: (ctx: OC_ComparisonExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_AddOrSubtractExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_AddOrSubtractExpression?: (ctx: OC_AddOrSubtractExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_AddOrSubtractExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_AddOrSubtractExpression?: (ctx: OC_AddOrSubtractExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_MultiplyDivideModuloExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_MultiplyDivideModuloExpression?: (ctx: OC_MultiplyDivideModuloExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_MultiplyDivideModuloExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_MultiplyDivideModuloExpression?: (ctx: OC_MultiplyDivideModuloExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_PowerOfExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_PowerOfExpression?: (ctx: OC_PowerOfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_PowerOfExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_PowerOfExpression?: (ctx: OC_PowerOfExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_UnaryAddOrSubtractExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_UnaryAddOrSubtractExpression?: (ctx: OC_UnaryAddOrSubtractExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_UnaryAddOrSubtractExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_UnaryAddOrSubtractExpression?: (ctx: OC_UnaryAddOrSubtractExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_StringListNullOperatorExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_StringListNullOperatorExpression?: (ctx: OC_StringListNullOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_StringListNullOperatorExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_StringListNullOperatorExpression?: (ctx: OC_StringListNullOperatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ListOperatorExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_ListOperatorExpression?: (ctx: OC_ListOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ListOperatorExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_ListOperatorExpression?: (ctx: OC_ListOperatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_StringOperatorExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_StringOperatorExpression?: (ctx: OC_StringOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_StringOperatorExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_StringOperatorExpression?: (ctx: OC_StringOperatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_NullOperatorExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_NullOperatorExpression?: (ctx: OC_NullOperatorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_NullOperatorExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_NullOperatorExpression?: (ctx: OC_NullOperatorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_PropertyOrLabelsExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_PropertyOrLabelsExpression?: (ctx: OC_PropertyOrLabelsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_PropertyOrLabelsExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_PropertyOrLabelsExpression?: (ctx: OC_PropertyOrLabelsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Atom`.
	 * @param ctx the parse tree
	 */
	enterOC_Atom?: (ctx: OC_AtomContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Atom`.
	 * @param ctx the parse tree
	 */
	exitOC_Atom?: (ctx: OC_AtomContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Literal`.
	 * @param ctx the parse tree
	 */
	enterOC_Literal?: (ctx: OC_LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Literal`.
	 * @param ctx the parse tree
	 */
	exitOC_Literal?: (ctx: OC_LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_BooleanLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_BooleanLiteral?: (ctx: OC_BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_BooleanLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_BooleanLiteral?: (ctx: OC_BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ListLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_ListLiteral?: (ctx: OC_ListLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ListLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_ListLiteral?: (ctx: OC_ListLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_PartialComparisonExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_PartialComparisonExpression?: (ctx: OC_PartialComparisonExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_PartialComparisonExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_PartialComparisonExpression?: (ctx: OC_PartialComparisonExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ParenthesizedExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_ParenthesizedExpression?: (ctx: OC_ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ParenthesizedExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_ParenthesizedExpression?: (ctx: OC_ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_RelationshipsPattern`.
	 * @param ctx the parse tree
	 */
	enterOC_RelationshipsPattern?: (ctx: OC_RelationshipsPatternContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_RelationshipsPattern`.
	 * @param ctx the parse tree
	 */
	exitOC_RelationshipsPattern?: (ctx: OC_RelationshipsPatternContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_FilterExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_FilterExpression?: (ctx: OC_FilterExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_FilterExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_FilterExpression?: (ctx: OC_FilterExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_IdInColl`.
	 * @param ctx the parse tree
	 */
	enterOC_IdInColl?: (ctx: OC_IdInCollContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_IdInColl`.
	 * @param ctx the parse tree
	 */
	exitOC_IdInColl?: (ctx: OC_IdInCollContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_FunctionInvocation`.
	 * @param ctx the parse tree
	 */
	enterOC_FunctionInvocation?: (ctx: OC_FunctionInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_FunctionInvocation`.
	 * @param ctx the parse tree
	 */
	exitOC_FunctionInvocation?: (ctx: OC_FunctionInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_FunctionName`.
	 * @param ctx the parse tree
	 */
	enterOC_FunctionName?: (ctx: OC_FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_FunctionName`.
	 * @param ctx the parse tree
	 */
	exitOC_FunctionName?: (ctx: OC_FunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ExistentialSubquery`.
	 * @param ctx the parse tree
	 */
	enterOC_ExistentialSubquery?: (ctx: OC_ExistentialSubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ExistentialSubquery`.
	 * @param ctx the parse tree
	 */
	exitOC_ExistentialSubquery?: (ctx: OC_ExistentialSubqueryContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ExplicitProcedureInvocation`.
	 * @param ctx the parse tree
	 */
	enterOC_ExplicitProcedureInvocation?: (ctx: OC_ExplicitProcedureInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ExplicitProcedureInvocation`.
	 * @param ctx the parse tree
	 */
	exitOC_ExplicitProcedureInvocation?: (ctx: OC_ExplicitProcedureInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ImplicitProcedureInvocation`.
	 * @param ctx the parse tree
	 */
	enterOC_ImplicitProcedureInvocation?: (ctx: OC_ImplicitProcedureInvocationContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ImplicitProcedureInvocation`.
	 * @param ctx the parse tree
	 */
	exitOC_ImplicitProcedureInvocation?: (ctx: OC_ImplicitProcedureInvocationContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ProcedureResultField`.
	 * @param ctx the parse tree
	 */
	enterOC_ProcedureResultField?: (ctx: OC_ProcedureResultFieldContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ProcedureResultField`.
	 * @param ctx the parse tree
	 */
	exitOC_ProcedureResultField?: (ctx: OC_ProcedureResultFieldContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ProcedureName`.
	 * @param ctx the parse tree
	 */
	enterOC_ProcedureName?: (ctx: OC_ProcedureNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ProcedureName`.
	 * @param ctx the parse tree
	 */
	exitOC_ProcedureName?: (ctx: OC_ProcedureNameContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Namespace`.
	 * @param ctx the parse tree
	 */
	enterOC_Namespace?: (ctx: OC_NamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Namespace`.
	 * @param ctx the parse tree
	 */
	exitOC_Namespace?: (ctx: OC_NamespaceContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ListComprehension`.
	 * @param ctx the parse tree
	 */
	enterOC_ListComprehension?: (ctx: OC_ListComprehensionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ListComprehension`.
	 * @param ctx the parse tree
	 */
	exitOC_ListComprehension?: (ctx: OC_ListComprehensionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_PatternComprehension`.
	 * @param ctx the parse tree
	 */
	enterOC_PatternComprehension?: (ctx: OC_PatternComprehensionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_PatternComprehension`.
	 * @param ctx the parse tree
	 */
	exitOC_PatternComprehension?: (ctx: OC_PatternComprehensionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_PropertyLookup`.
	 * @param ctx the parse tree
	 */
	enterOC_PropertyLookup?: (ctx: OC_PropertyLookupContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_PropertyLookup`.
	 * @param ctx the parse tree
	 */
	exitOC_PropertyLookup?: (ctx: OC_PropertyLookupContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_CaseExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_CaseExpression?: (ctx: OC_CaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_CaseExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_CaseExpression?: (ctx: OC_CaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_CaseAlternative`.
	 * @param ctx the parse tree
	 */
	enterOC_CaseAlternative?: (ctx: OC_CaseAlternativeContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_CaseAlternative`.
	 * @param ctx the parse tree
	 */
	exitOC_CaseAlternative?: (ctx: OC_CaseAlternativeContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Variable`.
	 * @param ctx the parse tree
	 */
	enterOC_Variable?: (ctx: OC_VariableContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Variable`.
	 * @param ctx the parse tree
	 */
	exitOC_Variable?: (ctx: OC_VariableContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_NumberLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_NumberLiteral?: (ctx: OC_NumberLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_NumberLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_NumberLiteral?: (ctx: OC_NumberLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_MapLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_MapLiteral?: (ctx: OC_MapLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_MapLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_MapLiteral?: (ctx: OC_MapLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Parameter`.
	 * @param ctx the parse tree
	 */
	enterOC_Parameter?: (ctx: OC_ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Parameter`.
	 * @param ctx the parse tree
	 */
	exitOC_Parameter?: (ctx: OC_ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_PropertyExpression`.
	 * @param ctx the parse tree
	 */
	enterOC_PropertyExpression?: (ctx: OC_PropertyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_PropertyExpression`.
	 * @param ctx the parse tree
	 */
	exitOC_PropertyExpression?: (ctx: OC_PropertyExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_PropertyKeyName`.
	 * @param ctx the parse tree
	 */
	enterOC_PropertyKeyName?: (ctx: OC_PropertyKeyNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_PropertyKeyName`.
	 * @param ctx the parse tree
	 */
	exitOC_PropertyKeyName?: (ctx: OC_PropertyKeyNameContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_IntegerLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_IntegerLiteral?: (ctx: OC_IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_IntegerLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_IntegerLiteral?: (ctx: OC_IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_DoubleLiteral`.
	 * @param ctx the parse tree
	 */
	enterOC_DoubleLiteral?: (ctx: OC_DoubleLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_DoubleLiteral`.
	 * @param ctx the parse tree
	 */
	exitOC_DoubleLiteral?: (ctx: OC_DoubleLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_SchemaName`.
	 * @param ctx the parse tree
	 */
	enterOC_SchemaName?: (ctx: OC_SchemaNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_SchemaName`.
	 * @param ctx the parse tree
	 */
	exitOC_SchemaName?: (ctx: OC_SchemaNameContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_ReservedWord`.
	 * @param ctx the parse tree
	 */
	enterOC_ReservedWord?: (ctx: OC_ReservedWordContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_ReservedWord`.
	 * @param ctx the parse tree
	 */
	exitOC_ReservedWord?: (ctx: OC_ReservedWordContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_SymbolicName`.
	 * @param ctx the parse tree
	 */
	enterOC_SymbolicName?: (ctx: OC_SymbolicNameContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_SymbolicName`.
	 * @param ctx the parse tree
	 */
	exitOC_SymbolicName?: (ctx: OC_SymbolicNameContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_LeftArrowHead`.
	 * @param ctx the parse tree
	 */
	enterOC_LeftArrowHead?: (ctx: OC_LeftArrowHeadContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_LeftArrowHead`.
	 * @param ctx the parse tree
	 */
	exitOC_LeftArrowHead?: (ctx: OC_LeftArrowHeadContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_RightArrowHead`.
	 * @param ctx the parse tree
	 */
	enterOC_RightArrowHead?: (ctx: OC_RightArrowHeadContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_RightArrowHead`.
	 * @param ctx the parse tree
	 */
	exitOC_RightArrowHead?: (ctx: OC_RightArrowHeadContext) => void;

	/**
	 * Enter a parse tree produced by `CypherScriptParser.oC_Dash`.
	 * @param ctx the parse tree
	 */
	enterOC_Dash?: (ctx: OC_DashContext) => void;
	/**
	 * Exit a parse tree produced by `CypherScriptParser.oC_Dash`.
	 * @param ctx the parse tree
	 */
	exitOC_Dash?: (ctx: OC_DashContext) => void;
}

