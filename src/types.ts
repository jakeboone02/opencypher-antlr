export interface ASTNode {
  type: CypherASTNodeType;
}
// Rules
export interface Cypher extends ASTNode {
  type: "Cypher";
  statements: (Statement | Comment)[];
  hasSemicolon?: boolean;
}
export interface Statement extends ASTNode {
  type: "Statement";
  query: Query;
}
export interface Query extends ASTNode {
  type: "Query";
  value: RegularQuery | StandaloneCall;
}
export interface RegularQuery extends ASTNode {
  type: "RegularQuery";
  value: SingleQuery | Union;
}
export interface Union extends ASTNode {
  type: "Union";
  all?: boolean;
  left: Union | SingleQuery;
  right: SingleQuery;
}
export interface SingleQuery extends ASTNode {
  type: "SingleQuery";
  query: SinglePartQuery | MultiPartQuery;
}
export interface SinglePartQuery extends ASTNode {
  type: "SinglePartQuery";
  reading: ReadingClause[];
  updating: UpdatingClause[];
  return: Return;
}
export interface MultiPartQuery extends ASTNode {
  type: "MultiPartQuery";
  reading: ReadingClause[];
  updating: UpdatingClause[];
  query: SinglePartQuery;
}
export interface UpdatingClause extends ASTNode {
  type: "UpdatingClause";
  value: Create | Merge | Delete | Set | Remove;
}
export interface ReadingClause extends ASTNode {
  type: "ReadingClause";
  value: Match | Unwind | InQueryCall;
}
export interface Match extends ASTNode {
  type: "Match";
  optional?: boolean;
  pattern: Pattern;
  where?: Where;
}
export interface Unwind extends ASTNode {
  type: "Unwind";
  expression: Expression;
  variable: Variable;
}
export interface Merge extends ASTNode {
  type: "Merge";
  patternPart: PatternPart;
  actions: MergeAction[];
}
export interface MergeAction extends ASTNode {
  type: "MergeAction";
  on: "MATCH" | "CREATE";
  set: Set;
}
export interface Create extends ASTNode {
  type: "Create";
  pattern: Pattern;
}
export interface Set extends ASTNode {
  type: "Set";
  items: [SetItem, ...SetItem[]];
}
export interface SetItem extends ASTNode {
  type: "SetItem";
  // TODO
}
export interface Delete extends ASTNode {
  type: "Delete";
  detach?: boolean;
  expressions: [Expression, ...Expression[]];
}
export interface Remove extends ASTNode {
  type: "Remove";
  items: [RemoveItem, ...RemoveItem[]];
}
export interface RemoveItem extends ASTNode {
  type: "RemoveItem";
  variable?: Variable;
  labels?: NodeLabels;
  expression?: PropertyExpression;
}
export interface InQueryCall extends ASTNode {
  type: "InQueryCall";
  procedure: ExplicitProcedureInvocation;
  yield?: YieldItems;
}
export interface StandaloneCall extends ASTNode {
  type: "StandaloneCall";
  procedure: ExplicitProcedureInvocation | ImplicitProcedureInvocation;
  yield?: "*" | YieldItems;
}
export interface YieldItems extends ASTNode {
  type: "YieldItems";
  items: [YieldItem, ...YieldItem[]];
  where?: Where;
}
export interface YieldItem extends ASTNode {
  type: "YieldItem";
  name?: ProcedureResultField;
  variable: Variable;
}
export interface With extends ASTNode {
  type: "With";
  projection: ProjectionBody;
  where?: Where;
}
export interface Return extends ASTNode {
  type: "Return";
  projection: ProjectionBody;
}
export interface ProjectionBody extends ASTNode {
  type: "ProjectionBody";
  distinct?: boolean;
  items: ProjectionItems;
  order?: Order;
  skip?: Skip;
  limit?: Limit;
}
export interface ProjectionItems extends ASTNode {
  type: "ProjectionItems";
  items: ["*", ...ProjectionItem[]] | [ProjectionItem, ...ProjectionItem[]];
}
export interface ProjectionItem extends ASTNode {
  type: "ProjectionItem";
  expression: Expression;
  variable?: Variable;
}
export interface Order extends ASTNode {
  type: "Order";
  sort: [SortItem, ...SortItem[]];
}
export interface Skip extends ASTNode {
  type: "Skip";
  expression: Expression;
}
export interface Limit extends ASTNode {
  type: "Limit";
  expression: Expression;
}
export interface SortItem extends ASTNode {
  type: "SortItem";
  expression: Expression;
  direction?: "ASC" | "ASCENDING" | "DESC" | "DESCENDING";
}
export interface Where extends ASTNode {
  type: "Where";
  expression: Expression;
}
export interface Pattern extends ASTNode {
  type: "Pattern";
  parts: [PatternPart, ...PatternPart[]];
}
export interface PatternPart extends ASTNode {
  type: "PatternPart";
  variable?: Variable;
  part: AnonymousPatternPart;
}
export interface AnonymousPatternPart extends ASTNode {
  type: "AnonymousPatternPart";
  element: PatternElement;
}
export interface PatternElement extends ASTNode {
  type: "PatternElement";
  parens?: boolean;
  left: NodePattern;
  relationships: PatternElementChain;
}
export interface NodePattern extends ASTNode {
  type: "NodePattern";
  variable?: Variable;
  labels?: NodeLabels;
  properties?: Properties;
}
export interface PatternElementChain extends ASTNode {
  type: "PatternElementChain";
  value: [
    [RelationshipPattern, NodePattern],
    ...[RelationshipPattern, NodePattern][]
  ];
}
export interface RelationshipPattern extends ASTNode {
  type: "RelationshipPattern";
  leftArrowHead?: LeftArrowHead;
  leftDash: Dash;
  rightDash: Dash;
  rightArrowHead?: RightArrowHead;
  detail: RelationshipDetail;
}
export interface RelationshipDetail extends ASTNode {
  type: "RelationshipDetail";
  variable?: Variable;
  relationshipTypes?: RelationshipTypes;
  range?: RangeLiteral;
  properties?: Properties;
}
export interface Properties extends ASTNode {
  type: "Properties";
  value: MapLiteral | Parameter;
}
export interface RelationshipTypes extends ASTNode {
  type: "RelationshipTypes";
  names: [RelationshipType, ...RelationshipType[]];
}
export interface RelationshipType extends ASTNode {
  type: "RelationshipType";
  precedingSemicolon?: boolean;
  name: RelTypeName;
}
export interface NodeLabels extends ASTNode {
  type: "NodeLabels";
  labels: NodeLabel[];
}
export interface NodeLabel extends ASTNode {
  type: "NodeLabel";
  value: LabelName;
}
export interface RangeLiteral extends ASTNode {
  type: "RangeLiteral";
  left?: IntegerLiteral;
  right?: IntegerLiteral;
}
export interface LabelName extends ASTNode {
  type: "LabelName";
  value: SchemaName;
}
export interface RelTypeName extends ASTNode {
  type: "RelTypeName";
  value: SchemaName;
}
export interface Expression extends ASTNode {
  type: "Expression";
  value:
    | OrExpression
    | AndExpression
    | XorExpression
    | PropertyOrLabelsExpression
    | ComparisonExpression;
}
export interface OrExpression extends ASTNode {
  type: "OrExpression";
  left: Expression;
  right: Expression;
}
export interface XorExpression extends ASTNode {
  type: "XorExpression";
  left: Expression;
  right: Expression;
}
export interface AndExpression extends ASTNode {
  type: "AndExpression";
  left: Expression;
  right: Expression;
}
export interface NotExpression extends ASTNode {
  type: "NotExpression";
  expression: Expression;
}
export interface ComparisonExpression extends ASTNode {
  type: "ComparisonExpression";
  left: Expression;
  right: PartialComparisonExpression;
}
export interface AddOrSubtractExpression extends ASTNode {
  type: "AddOrSubtractExpression";
  left: Expression;
  operator: "+" | "-";
  right: Expression;
}
export interface MultiplyDivideModuloExpression extends ASTNode {
  type: "MultiplyDivideModuloExpression";
  left: Expression;
  operator: "*" | "/" | "%";
  right: Expression;
}
export interface PowerOfExpression extends ASTNode {
  type: "PowerOfExpression";
  left: Expression;
  right: Expression;
}
export interface UnaryAddOrSubtractExpression extends ASTNode {
  type: "UnaryAddOrSubtractExpression";
  operators: ["+" | "-", ...("+" | "-")[]];
  right: Expression;
}
export interface StringListNullOperatorExpression extends ASTNode {
  type: "StringListNullOperatorExpression";
  left: Expression;
  right:
    | StringOperatorExpression
    | ListOperatorExpression
    | NullOperatorExpression;
}
export interface ListOperatorExpression extends ASTNode {
  type: "ListOperatorExpression";
  in?: PropertyOrLabelsExpression;
  expression1?: Expression;
  expression2?: Expression;
}
export interface StringOperatorExpression extends ASTNode {
  type: "StringOperatorExpression";
  operator: "STARTS WITH" | "ENDS WITH" | "CONTAINS";
  right: PropertyOrLabelsExpression;
}
export interface NullOperatorExpression extends ASTNode {
  type: "NullOperatorExpression";
  not?: boolean; // `true` means "IS NOT NULL", otherwise "IS NULL"
}
export interface PropertyOrLabelsExpression extends ASTNode {
  type: "PropertyOrLabelsExpression";
  value: Atom;
  properties?: PropertyLookup[];
  labels?: NodeLabels;
}
export interface Atom extends ASTNode {
  type: "Atom";
  value:
    | Literal
    | Parameter
    | CaseExpression
    | "COUNT" // implies "COUNT(*)"
    | ListComprehension
    | PatternComprehension
    | "ALL"
    | "ANY"
    | "NONE"
    | "SINGLE"
    | RelationshipsPattern
    | ParenthesizedExpression
    | FunctionInvocation
    | ExistentialSubquery
    | Variable;
  filter?: FilterExpression; // Present for values 'ALL', 'ANY', 'NONE', 'SINGLE'
}
export interface Literal extends ASTNode {
  type: "Literal";
  value:
    | NumberLiteral
    | StringLiteral
    | BooleanLiteral
    | "NULL"
    | MapLiteral
    | ListLiteral;
}
export interface BooleanLiteral extends ASTNode {
  type: "BooleanLiteral";
  value: boolean;
}
export interface ListLiteral extends ASTNode {
  type: "ListLiteral";
  expressions: [Expression, ...Expression[]];
}
export interface PartialComparisonExpression extends ASTNode {
  type: "PartialComparisonExpression";
  operator: ComparisonOperator;
  right: Expression;
}
export interface ParenthesizedExpression extends ASTNode {
  type: "ParenthesizedExpression";
  value: Expression;
}
export interface RelationshipsPattern extends ASTNode {
  type: "RelationshipsPattern";
  left: NodePattern;
  right?: PatternElementChain;
}
export interface FilterExpression extends ASTNode {
  type: "FilterExpression";
  value: IdInColl;
  where?: Where;
}
export interface IdInColl extends ASTNode {
  type: "IdInColl";
  variable: Variable;
  expression: Expression;
}
export interface FunctionInvocation extends ASTNode {
  type: "FunctionInvocation";
  name: FunctionName;
  distinct?: boolean;
  parameters: Expression[];
}
export interface FunctionName extends ASTNode {
  type: "FunctionName";
  names: [Namespace, ...SymbolicName[]]; // names.map(n => n.text).join('.')
}
export interface ExistentialSubquery extends ASTNode {
  type: "ExistentialSubquery";
  // `query` and `pattern` are mutually exclusive
  query?: RegularQuery;
  pattern?: Pattern;
  where?: Where; // optionally exists only if `pattern` is present
}
export interface ExplicitProcedureInvocation extends ASTNode {
  type: "ExplicitProcedureInvocation";
  name: ProcedureName;
  parameters: Expression[];
}
export interface ImplicitProcedureInvocation extends ASTNode {
  type: "ImplicitProcedureInvocation";
  name: ProcedureName;
}
export interface ProcedureResultField extends ASTNode {
  type: "ProcedureResultField";
}
export interface ProcedureName extends ASTNode {
  type: "ProcedureName";
  names: [Namespace, ...SymbolicName[]]; // names.join('.')
}
export interface Namespace extends ASTNode {
  type: "Namespace";
  value: SymbolicName;
}
export interface ListComprehension extends ASTNode {
  type: "ListComprehension";
  filter: FilterExpression;
  expression?: Expression;
}
export interface PatternComprehension extends ASTNode {
  type: "PatternComprehension";
  variable?: Variable;
  relationships: RelationshipsPattern;
  where?: Where;
  expression: Expression;
}
export interface PropertyLookup extends ASTNode {
  type: "PropertyLookup";
  value: PropertyKeyName;
}
export interface CaseExpression extends ASTNode {
  type: "CaseExpression";
  expression?: Expression;
  alternatives?: CaseAlternative[];
  else?: Expression;
}
export interface CaseAlternative extends ASTNode {
  type: "CaseAlternative";
  when: Expression;
  then: Expression;
}
export interface Variable extends ASTNode {
  type: "Variable";
  value: SymbolicName;
}
export interface NumberLiteral extends ASTNode {
  type: "NumberLiteral";
  value: DoubleLiteral | IntegerLiteral;
}
export interface MapLiteral extends ASTNode {
  type: "MapLiteral";
  tuples: [[PropertyKeyName, Expression], ...[PropertyKeyName, Expression][]];
}
export interface Parameter extends ASTNode {
  type: "Parameter";
  value: SymbolicName | DecimalInteger;
}
export interface PropertyExpression extends ASTNode {
  type: "PropertyExpression";
  value: Atom;
  properties?: PropertyLookup[];
}
export interface PropertyKeyName extends ASTNode {
  type: "PropertyKeyName";
  value: SchemaName;
}
export interface IntegerLiteral extends ASTNode {
  type: "IntegerLiteral";
  value: HexInteger | OctalInteger | DecimalInteger;
}
export interface DoubleLiteral extends ASTNode {
  type: "DoubleLiteral";
  value: ExponentDecimalReal | RegularDecimalReal;
}
export interface SchemaName extends ASTNode {
  type: "SchemaName";
  value: SymbolicName | ReservedWord;
}
export interface SymbolicName extends ASTNode {
  type: "SymbolicName";
  value:
    | UnescapedSymbolicName
    | EscapedSymbolicName
    | HexLetter
    | "COUNT"
    | "FILTER"
    | "EXTRACT"
    | "ANY"
    | "NONE"
    | "SINGLE";
}
// Symbolic names
export interface UnescapedSymbolicName extends ASTNode {
  type: "UnescapedSymbolicName";
  value: string;
}
export interface EscapedSymbolicName extends ASTNode {
  type: "EscapedSymbolicName";
  value: string;
}
export interface Comment extends ASTNode {
  type: "Comment";
  value: string;
}
export interface StringLiteral extends ASTNode {
  type: "StringLiteral";
  delimiter: '"' | "'";
  value: string;
}
export interface HexInteger extends ASTNode {
  type: "HexInteger";
  value: string;
}
export interface DecimalInteger extends ASTNode {
  type: "DecimalInteger";
  value: string;
}
export interface OctalInteger extends ASTNode {
  type: "OctalInteger";
  value: string;
}
export interface HexDigit extends ASTNode {
  type: "HexDigit";
  value: string;
}
export interface Digit extends ASTNode {
  type: "Digit";
  value: string;
}
export interface NonZeroDigit extends ASTNode {
  type: "NonZeroDigit";
  value: string;
}
export interface NonZeroOctDigit extends ASTNode {
  type: "NonZeroOctDigit";
  value: string;
}
export interface OctDigit extends ASTNode {
  type: "OctDigit";
  value: string;
}
export interface ZeroDigit extends ASTNode {
  type: "ZeroDigit";
  value: string;
}
export interface ExponentDecimalReal extends ASTNode {
  type: "ExponentDecimalReal";
  value: string;
}
export interface RegularDecimalReal extends ASTNode {
  type: "RegularDecimalReal";
  value: string;
}

export type ComparisonOperator = "=" | "<>" | "<" | ">" | "<=" | ">=";
export type HexLetter = "A" | "B" | "C" | "D" | "E" | "F";
export type LeftArrowHead = "<" | "⟨" | "〈" | "﹤" | "＜";
export type RightArrowHead = ">" | "⟩" | "〉" | "﹥" | "＞";
export type Dash =
  | "-"
  | "\u00ad"
  | "\u2010"
  | "\u2011"
  | "\u2012"
  | "\u2013"
  | "\u2014"
  | "\u2015"
  | "\u2212"
  | "\ufe58"
  | "\ufe63"
  | "\uff0d";

type CypherASTNodeType =
  | "Cypher"
  | "Statement"
  | "Query"
  | "RegularQuery"
  | "Union"
  | "SingleQuery"
  | "SinglePartQuery"
  | "MultiPartQuery"
  | "UpdatingClause"
  | "ReadingClause"
  | "Match"
  | "Unwind"
  | "Merge"
  | "MergeAction"
  | "Create"
  | "Set"
  | "SetItem"
  | "Delete"
  | "Remove"
  | "RemoveItem"
  | "InQueryCall"
  | "StandaloneCall"
  | "YieldItems"
  | "YieldItem"
  | "With"
  | "Return"
  | "ProjectionBody"
  | "ProjectionItems"
  | "ProjectionItem"
  | "Order"
  | "Skip"
  | "Limit"
  | "SortItem"
  | "Where"
  | "Pattern"
  | "PatternPart"
  | "AnonymousPatternPart"
  | "PatternElement"
  | "NodePattern"
  | "PatternElementChain"
  | "RelationshipPattern"
  | "RelationshipDetail"
  | "Properties"
  | "RelationshipType"
  | "RelationshipTypes"
  | "NodeLabels"
  | "NodeLabel"
  | "RangeLiteral"
  | "LabelName"
  | "RelTypeName"
  | "Expression"
  | "OrExpression"
  | "XorExpression"
  | "AndExpression"
  | "NotExpression"
  | "ComparisonExpression"
  | "AddOrSubtractExpression"
  | "MultiplyDivideModuloExpression"
  | "PowerOfExpression"
  | "UnaryAddOrSubtractExpression"
  | "StringListNullOperatorExpression"
  | "ListOperatorExpression"
  | "StringOperatorExpression"
  | "NullOperatorExpression"
  | "PropertyOrLabelsExpression"
  | "Atom"
  | "Literal"
  | "BooleanLiteral"
  | "ListLiteral"
  | "PartialComparisonExpression"
  | "ParenthesizedExpression"
  | "RelationshipsPattern"
  | "FilterExpression"
  | "IdInColl"
  | "FunctionInvocation"
  | "FunctionName"
  | "ExistentialSubquery"
  | "ExplicitProcedureInvocation"
  | "ImplicitProcedureInvocation"
  | "ProcedureResultField"
  | "ProcedureName"
  | "Namespace"
  | "ListComprehension"
  | "PatternComprehension"
  | "PropertyLookup"
  | "CaseExpression"
  | "CaseAlternative"
  | "Variable"
  | "NumberLiteral"
  | "MapLiteral"
  | "Parameter"
  | "PropertyExpression"
  | "PropertyKeyName"
  | "IntegerLiteral"
  | "DoubleLiteral"
  | "SchemaName"
  | "ReservedWord"
  | "SymbolicName"
  | "LeftArrowHead"
  | "RightArrowHead"
  | "Dash"
  | "UnescapedSymbolicName"
  | "EscapedSymbolicName"
  | "Comment"
  | "StringLiteral"
  | "HexInteger"
  | "DecimalInteger"
  | "OctalInteger"
  | "HexLetter"
  | "HexDigit"
  | "Digit"
  | "NonZeroDigit"
  | "NonZeroOctDigit"
  | "OctDigit"
  | "ZeroDigit"
  | "ExponentDecimalReal"
  | "RegularDecimalReal";

type ReservedWord =
  | "ALL"
  | "ASC"
  | "ASCENDING"
  | "BY"
  | "CREATE"
  | "DELETE"
  | "DESC"
  | "DESCENDING"
  | "DETACH"
  | "EXISTS"
  | "LIMIT"
  | "MATCH"
  | "MERGE"
  | "ON"
  | "OPTIONAL"
  | "ORDER"
  | "REMOVE"
  | "RETURN"
  | "SET"
  | "SKIP"
  | "WHERE"
  | "WITH"
  | "UNION"
  | "UNWIND"
  | "AND"
  | "AS"
  | "CONTAINS"
  | "DISTINCT"
  | "ENDS"
  | "IN"
  | "IS"
  | "NOT"
  | "OR"
  | "STARTS"
  | "XOR"
  | "FALSE"
  | "TRUE"
  | "NULL"
  | "CONSTRAINT"
  | "DO"
  | "FOR"
  | "REQUIRE"
  | "UNIQUE"
  | "CASE"
  | "WHEN"
  | "THEN"
  | "ELSE"
  | "END"
  | "MANDATORY"
  | "SCALAR"
  | "OF"
  | "ADD"
  | "DROP";

// This list is from the Jison attempt
/*
  type CypherASTNodeType =
  | 'AnonymousPatternPart'
  | 'BooleanLiteral'
  | 'Create'
  | 'Cypher'
  | 'DecimalInteger'
  | 'Delete'
  | 'ExplicitProcedureInvocation'
  | 'ExponentDecimalReal'
  | 'Expression'
  | 'ExpressionList'
  | 'HexInteger'
  | 'InQueryCall'
  | 'LabelName'
  | 'Limit'
  | 'ListLiteral'
  | 'MapLiteral'
  | 'MapLiteralItem'
  | 'MapLiteralItemList'
  | 'Match'
  | 'Merge'
  | 'MergeAction'
  | 'MergeActionList'
  | 'MultiPartQuery'
  | 'MultiPartQueryClause'
  | 'MultiPartQueryClauseList'
  | 'Namespace'
  | 'Namespaces'
  | 'NodeLabels'
  | 'NodePattern'
  | 'NullLiteral'
  | 'NumberLiteral'
  | 'OctalInteger'
  | 'Order'
  | 'Parameter'
  | 'Pattern'
  | 'PatternElementChain'
  | 'PatternPart'
  | 'ProcedureName'
  | 'ProcedureName'
  | 'ProcedureResultField'
  | 'ProjectionBody'
  | 'ProjectionItem'
  | 'ProjectionItemList'
  | 'ProjectionItems'
  | 'PropertyExpression'
  | 'Query'
  | 'Reading'
  | 'RegularDecimalReal'
  | 'RelationshipDetail'
  | 'RelationshipPattern'
  | 'Remove'
  | 'RemoveItem'
  | 'RemoveItemList'
  | 'ReservedWord'
  | 'Return'
  | 'SchemaName'
  | 'Set'
  | 'SetItem'
  | 'SetItemList'
  | 'SinglePartQuery'
  | 'SingleQuery'
  | 'Skip'
  | 'SortDirection'
  | 'SortItem'
  | 'SortItemList'
  | 'StandaloneCall'
  | 'Statement'
  | 'StringLiteral'
  | 'SymbolicName'
  | 'Union'
  | 'Unwind'
  | 'Updating'
  | 'Variable'
  | 'Where'
  | 'YieldItem'
  | 'YieldItems';
*/
