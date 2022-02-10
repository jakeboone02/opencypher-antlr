export interface CypherASTNode {
  type: CypherASTNodeType;
}
// Rules
export interface Cypher extends CypherASTNode {
  type: "Cypher";
  statements: (Statement | Comment)[];
  hasSemicolon?: boolean;
}
export interface Statement extends CypherASTNode {
  type: "Statement";
  query: Query;
}
export interface Query extends CypherASTNode {
  type: "Query";
  value: RegularQuery | StandaloneCall;
}
export interface RegularQuery extends CypherASTNode {
  type: "RegularQuery";
  value: SingleQuery | Union;
}
export interface Union extends CypherASTNode {
  type: "Union";
  all?: boolean;
  left: Union | SingleQuery;
  right: SingleQuery;
}
export interface SingleQuery extends CypherASTNode {
  type: "SingleQuery";
  query: SinglePartQuery | MultiPartQuery;
}
export interface SinglePartQuery extends CypherASTNode {
  type: "SinglePartQuery";
  reading?: ReadingClause[];
  updating?: UpdatingClause[];
  return?: Return; // optional only if an `updating` clause is present
}
export interface MultiPartQuery extends CypherASTNode {
  type: "MultiPartQuery";
  reading: ReadingClause[];
  updating: UpdatingClause[];
  query: SinglePartQuery;
}
export interface UpdatingClause extends CypherASTNode {
  type: "UpdatingClause";
  value: Create | Merge | Delete | Set | Remove;
}
export interface ReadingClause extends CypherASTNode {
  type: "ReadingClause";
  value: Match | Unwind | InQueryCall;
}
export interface Match extends CypherASTNode {
  type: "Match";
  optional?: boolean;
  pattern: Pattern;
  where?: Where;
}
export interface Unwind extends CypherASTNode {
  type: "Unwind";
  expression: Expression;
  variable: Variable;
}
export interface Merge extends CypherASTNode {
  type: "Merge";
  patternPart: PatternPart;
  actions: MergeAction[];
}
export interface MergeAction extends CypherASTNode {
  type: "MergeAction";
  on: "MATCH" | "CREATE";
  set: Set;
}
export interface Create extends CypherASTNode {
  type: "Create";
  pattern: Pattern;
}
export interface Set extends CypherASTNode {
  type: "Set";
  items: [SetItem, ...SetItem[]];
}
export interface SetItem extends CypherASTNode {
  type: "SetItem";
  left: PropertyExpression | Variable;
  operator?: '=' | '+=';
  right: Expression | NodeLabels;
}
export interface Delete extends CypherASTNode {
  type: "Delete";
  detach?: boolean;
  expressions: [Expression, ...Expression[]];
}
export interface Remove extends CypherASTNode {
  type: "Remove";
  items: [RemoveItem, ...RemoveItem[]];
}
export interface RemoveItem extends CypherASTNode {
  type: "RemoveItem";
  variable?: Variable;
  labels?: NodeLabels;
  expression?: PropertyExpression;
}
export interface InQueryCall extends CypherASTNode {
  type: "InQueryCall";
  procedure: ExplicitProcedureInvocation;
  yield?: YieldItems;
}
export interface StandaloneCall extends CypherASTNode {
  type: "StandaloneCall";
  procedure: ExplicitProcedureInvocation | ImplicitProcedureInvocation;
  yield?: "*" | YieldItems;
}
export interface YieldItems extends CypherASTNode {
  type: "YieldItems";
  items: [YieldItem, ...YieldItem[]];
  where?: Where;
}
export interface YieldItem extends CypherASTNode {
  type: "YieldItem";
  name?: ProcedureResultField;
  variable: Variable;
}
export interface With extends CypherASTNode {
  type: "With";
  projection: ProjectionBody;
  where?: Where;
}
export interface Return extends CypherASTNode {
  type: "Return";
  projection: ProjectionBody;
}
export interface ProjectionBody extends CypherASTNode {
  type: "ProjectionBody";
  distinct?: boolean;
  items: ProjectionItems;
  order?: Order;
  skip?: Skip;
  limit?: Limit;
}
export interface ProjectionItems extends CypherASTNode {
  type: "ProjectionItems";
  items: ["*", ...ProjectionItem[]] | [ProjectionItem, ...ProjectionItem[]];
}
export interface ProjectionItem extends CypherASTNode {
  type: "ProjectionItem";
  expression: Expression;
  variable?: Variable;
}
export interface Order extends CypherASTNode {
  type: "Order";
  sort: [SortItem, ...SortItem[]];
}
export interface Skip extends CypherASTNode {
  type: "Skip";
  expression: Expression;
}
export interface Limit extends CypherASTNode {
  type: "Limit";
  expression: Expression;
}
export interface SortItem extends CypherASTNode {
  type: "SortItem";
  expression: Expression;
  direction?: "ASC" | "ASCENDING" | "DESC" | "DESCENDING";
}
export interface Where extends CypherASTNode {
  type: "Where";
  expression: Expression;
}
export interface Pattern extends CypherASTNode {
  type: "Pattern";
  parts: [PatternPart, ...PatternPart[]];
}
export interface PatternPart extends CypherASTNode {
  type: "PatternPart";
  variable?: Variable;
  part: AnonymousPatternPart;
}
export interface AnonymousPatternPart extends CypherASTNode {
  type: "AnonymousPatternPart";
  element: PatternElement;
}
export interface PatternElement extends CypherASTNode {
  type: "PatternElement";
  parens?: boolean;
  left: NodePattern;
  relationships: PatternElementChain;
}
export interface NodePattern extends CypherASTNode {
  type: "NodePattern";
  variable?: Variable;
  labels?: NodeLabels;
  properties?: Properties;
}
export interface PatternElementChain extends CypherASTNode {
  type: "PatternElementChain";
  value: [
    [RelationshipPattern, NodePattern],
    ...[RelationshipPattern, NodePattern][]
  ];
}
export interface RelationshipPattern extends CypherASTNode {
  type: "RelationshipPattern";
  leftArrowHead?: LeftArrowHead;
  leftDash: Dash;
  rightDash: Dash;
  rightArrowHead?: RightArrowHead;
  detail: RelationshipDetail;
}
export interface RelationshipDetail extends CypherASTNode {
  type: "RelationshipDetail";
  variable?: Variable;
  relationshipTypes?: RelationshipTypes;
  range?: RangeLiteral;
  properties?: Properties;
}
export interface Properties extends CypherASTNode {
  type: "Properties";
  value: MapLiteral | Parameter;
}
export interface RelationshipTypes extends CypherASTNode {
  type: "RelationshipTypes";
  names: [RelationshipType, ...RelationshipType[]];
}
export interface RelationshipType extends CypherASTNode {
  type: "RelationshipType";
  precedingSemicolon?: boolean;
  name: RelTypeName;
}
export interface NodeLabels extends CypherASTNode {
  type: "NodeLabels";
  labels: NodeLabel[];
}
export interface NodeLabel extends CypherASTNode {
  type: "NodeLabel";
  value: LabelName;
}
export interface RangeLiteral extends CypherASTNode {
  type: "RangeLiteral";
  left?: IntegerLiteral;
  right?: IntegerLiteral;
}
export interface LabelName extends CypherASTNode {
  type: "LabelName";
  value: SchemaName;
}
export interface RelTypeName extends CypherASTNode {
  type: "RelTypeName";
  value: SchemaName;
}
export interface Expression extends CypherASTNode {
  type: "Expression";
  value:
    | OrExpression
    | AndExpression
    | XorExpression
    | PropertyOrLabelsExpression
    | ComparisonExpression;
}
export interface OrExpression extends CypherASTNode {
  type: "OrExpression";
  left: Expression;
  right: Expression;
}
export interface XorExpression extends CypherASTNode {
  type: "XorExpression";
  left: Expression;
  right: Expression;
}
export interface AndExpression extends CypherASTNode {
  type: "AndExpression";
  left: Expression;
  right: Expression;
}
export interface NotExpression extends CypherASTNode {
  type: "NotExpression";
  expression: Expression;
}
export interface ComparisonExpression extends CypherASTNode {
  type: "ComparisonExpression";
  left: Expression;
  right: PartialComparisonExpression;
}
export interface AddOrSubtractExpression extends CypherASTNode {
  type: "AddOrSubtractExpression";
  left: Expression;
  operator: "+" | "-";
  right: Expression;
}
export interface MultiplyDivideModuloExpression extends CypherASTNode {
  type: "MultiplyDivideModuloExpression";
  left: Expression;
  operator: "*" | "/" | "%";
  right: Expression;
}
export interface PowerOfExpression extends CypherASTNode {
  type: "PowerOfExpression";
  left: Expression;
  right: Expression;
}
export interface UnaryAddOrSubtractExpression extends CypherASTNode {
  type: "UnaryAddOrSubtractExpression";
  operators: ["+" | "-", ...("+" | "-")[]];
  right: Expression;
}
export interface StringListNullOperatorExpression extends CypherASTNode {
  type: "StringListNullOperatorExpression";
  left: Expression;
  right:
    | StringOperatorExpression
    | ListOperatorExpression
    | NullOperatorExpression;
}
export interface ListOperatorExpression extends CypherASTNode {
  type: "ListOperatorExpression";
  in?: PropertyOrLabelsExpression;
  expression1?: Expression;
  expression2?: Expression;
}
export interface StringOperatorExpression extends CypherASTNode {
  type: "StringOperatorExpression";
  operator: "STARTS WITH" | "ENDS WITH" | "CONTAINS";
  right: PropertyOrLabelsExpression;
}
export interface NullOperatorExpression extends CypherASTNode {
  type: "NullOperatorExpression";
  not?: boolean; // `true` means "IS NOT NULL", otherwise "IS NULL"
}
export interface PropertyOrLabelsExpression extends CypherASTNode {
  type: "PropertyOrLabelsExpression";
  value: Atom;
  properties?: PropertyLookup[];
  labels?: NodeLabels;
}
export interface Atom extends CypherASTNode {
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
export interface Literal extends CypherASTNode {
  type: "Literal";
  value:
    | NumberLiteral
    | StringLiteral
    | BooleanLiteral
    | "NULL"
    | MapLiteral
    | ListLiteral;
}
export interface BooleanLiteral extends CypherASTNode {
  type: "BooleanLiteral";
  value: boolean;
}
export interface ListLiteral extends CypherASTNode {
  type: "ListLiteral";
  expressions: [Expression, ...Expression[]];
}
export interface PartialComparisonExpression extends CypherASTNode {
  type: "PartialComparisonExpression";
  operator: ComparisonOperator;
  right: Expression;
}
export interface ParenthesizedExpression extends CypherASTNode {
  type: "ParenthesizedExpression";
  value: Expression;
}
export interface RelationshipsPattern extends CypherASTNode {
  type: "RelationshipsPattern";
  left: NodePattern;
  right?: PatternElementChain;
}
export interface FilterExpression extends CypherASTNode {
  type: "FilterExpression";
  value: IdInColl;
  where?: Where;
}
export interface IdInColl extends CypherASTNode {
  type: "IdInColl";
  variable: Variable;
  expression: Expression;
}
export interface FunctionInvocation extends CypherASTNode {
  type: "FunctionInvocation";
  name: FunctionName;
  distinct?: boolean;
  parameters: Expression[];
}
export interface FunctionName extends CypherASTNode {
  type: "FunctionName";
  names: [Namespace, ...SymbolicName[]]; // names.map(n => n.text.trim()).join('.')
}
export interface ExistentialSubquery extends CypherASTNode {
  type: "ExistentialSubquery";
  // `query` and `pattern` are mutually exclusive
  query?: RegularQuery;
  pattern?: Pattern;
  where?: Where; // optionally exists only if `pattern` is present
}
export interface ExplicitProcedureInvocation extends CypherASTNode {
  type: "ExplicitProcedureInvocation";
  name: ProcedureName;
  parameters: Expression[];
}
export interface ImplicitProcedureInvocation extends CypherASTNode {
  type: "ImplicitProcedureInvocation";
  name: ProcedureName;
}
export interface ProcedureResultField extends CypherASTNode {
  type: "ProcedureResultField";
  value: SymbolicName;
}
export interface ProcedureName extends CypherASTNode {
  type: "ProcedureName";
  names: [Namespace, ...SymbolicName[]]; // names.join('.')
}
export interface Namespace extends CypherASTNode {
  type: "Namespace";
  value: SymbolicName;
}
export interface ListComprehension extends CypherASTNode {
  type: "ListComprehension";
  filter: FilterExpression;
  expression?: Expression;
}
export interface PatternComprehension extends CypherASTNode {
  type: "PatternComprehension";
  variable?: Variable;
  relationships: RelationshipsPattern;
  where?: Where;
  expression: Expression;
}
export interface PropertyLookup extends CypherASTNode {
  type: "PropertyLookup";
  value: PropertyKeyName;
}
export interface CaseExpression extends CypherASTNode {
  type: "CaseExpression";
  expression?: Expression;
  alternatives?: CaseAlternative[];
  else?: Expression;
}
export interface CaseAlternative extends CypherASTNode {
  type: "CaseAlternative";
  when: Expression;
  then: Expression;
}
export interface Variable extends CypherASTNode {
  type: "Variable";
  value: SymbolicName;
}
export interface NumberLiteral extends CypherASTNode {
  type: "NumberLiteral";
  value: DoubleLiteral | IntegerLiteral;
}
export interface MapLiteral extends CypherASTNode {
  type: "MapLiteral";
  tuples: [[PropertyKeyName, Expression], ...[PropertyKeyName, Expression][]];
}
export interface Parameter extends CypherASTNode {
  type: "Parameter";
  value: SymbolicName | DecimalInteger;
}
export interface PropertyExpression extends CypherASTNode {
  type: "PropertyExpression";
  value: Atom;
  properties?: PropertyLookup[];
}
export interface PropertyKeyName extends CypherASTNode {
  type: "PropertyKeyName";
  value: SchemaName;
}
export interface IntegerLiteral extends CypherASTNode {
  type: "IntegerLiteral";
  value: HexInteger | OctalInteger | DecimalInteger;
}
export interface DoubleLiteral extends CypherASTNode {
  type: "DoubleLiteral";
  value: ExponentDecimalReal | RegularDecimalReal;
}
export interface SchemaName extends CypherASTNode {
  type: "SchemaName";
  value: SymbolicName | ReservedWord;
}
export interface SymbolicName extends CypherASTNode {
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
export interface UnescapedSymbolicName extends CypherASTNode {
  type: "UnescapedSymbolicName";
  value: string;
}
export interface EscapedSymbolicName extends CypherASTNode {
  type: "EscapedSymbolicName";
  value: string;
}
export interface Comment extends CypherASTNode {
  type: "Comment";
  value: string;
}
export interface StringLiteral extends CypherASTNode {
  type: "StringLiteral";
  delimiter: '"' | "'";
  value: string;
}
export interface HexInteger extends CypherASTNode {
  type: "HexInteger";
  value: string;
}
export interface DecimalInteger extends CypherASTNode {
  type: "DecimalInteger";
  value: string;
}
export interface OctalInteger extends CypherASTNode {
  type: "OctalInteger";
  value: string;
}
export interface HexDigit extends CypherASTNode {
  type: "HexDigit";
  value: string;
}
export interface Digit extends CypherASTNode {
  type: "Digit";
  value: string;
}
export interface NonZeroDigit extends CypherASTNode {
  type: "NonZeroDigit";
  value: string;
}
export interface NonZeroOctDigit extends CypherASTNode {
  type: "NonZeroOctDigit";
  value: string;
}
export interface OctDigit extends CypherASTNode {
  type: "OctDigit";
  value: string;
}
export interface ZeroDigit extends CypherASTNode {
  type: "ZeroDigit";
  value: string;
}
export interface ExponentDecimalReal extends CypherASTNode {
  type: "ExponentDecimalReal";
  value: string;
}
export interface RegularDecimalReal extends CypherASTNode {
  type: "RegularDecimalReal";
  value: string;
}

// Character lists
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

export type CypherASTNodeType =
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

export type ReservedWord =
  | "ADD"
  | "ALL"
  | "AND"
  | "AS"
  | "ASC"
  | "ASCENDING"
  | "BY"
  | "CASE"
  | "CONSTRAINT"
  | "CONTAINS"
  | "CREATE"
  | "DELETE"
  | "DESC"
  | "DESCENDING"
  | "DETACH"
  | "DISTINCT"
  | "DO"
  | "DROP"
  | "ELSE"
  | "END"
  | "ENDS"
  | "EXISTS"
  | "FALSE"
  | "FOR"
  | "IN"
  | "IS"
  | "LIMIT"
  | "MANDATORY"
  | "MATCH"
  | "MERGE"
  | "NOT"
  | "NULL"
  | "OF"
  | "ON"
  | "OPTIONAL"
  | "OR"
  | "ORDER"
  | "REMOVE"
  | "REQUIRE"
  | "RETURN"
  | "SCALAR"
  | "SET"
  | "SKIP"
  | "STARTS"
  | "THEN"
  | "TRUE"
  | "UNION"
  | "UNIQUE"
  | "UNWIND"
  | "WHEN"
  | "WHERE"
  | "WITH"
  | "XOR";
