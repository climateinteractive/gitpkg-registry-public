type SourceName = string;
type VarId = string;
type DatasetKey = string;
type Dataset = Map<number, number>;
type DatasetMap = Map<DatasetKey, Dataset>;

/** A unique identifier for the scenario, derived from its input settings. */
type ScenarioSpecUid = string;
type InputPosition = 'at-default' | 'at-minimum' | 'at-maximum';
interface PositionSetting {
    kind: 'position';
    inputVarId: VarId;
    position: InputPosition;
}
interface ValueSetting {
    kind: 'value';
    inputVarId: VarId;
    value: number;
}
type InputSetting = PositionSetting | ValueSetting;
interface InputSettingsSpec {
    kind: 'input-settings';
    uid: ScenarioSpecUid;
    settings: InputSetting[];
}
interface AllInputsSpec {
    kind: 'all-inputs';
    uid: ScenarioSpecUid;
    position: InputPosition;
}
type ScenarioSpec = InputSettingsSpec | AllInputsSpec;

interface DatasetsResult {
    /**
     * The map of datasets for the scenario.
     */
    datasetMap: DatasetMap;
    /**
     * The number of milliseconds that elapsed when running the model, or undefined if the model
     * wasn't run for this scenario.
     */
    modelRunTime?: number;
}
interface DataSource {
    /** Return the datasets that result from running the given scenario. */
    getDatasetsForScenario(scenarioSpec: ScenarioSpec, datasetKeys: DatasetKey[]): Promise<DatasetsResult>;
}

/**
 * Holds information about an item related to a variable used in the model.
 * For example, this can be used to attach information about a graph that
 * an output variable is used in, or a slider that controls an input variable.
 */
interface RelatedItem {
    id: string;
    locationPath: string[];
}
/** A unique, stable input identifier. */
type InputId = string;
/**
 * Holds information about an input variable used in the model.
 */
interface InputVar {
    /**
     * Whether this input is controlled by a continuous range/slider or a discrete on/off switch.
     * If undefined, 'slider' will be assumed.
     */
    kind?: 'slider' | 'switch';
    /**
     * A unique, stable identifier string for this input.
     *
     * This can be used to identify an input variable in a way that is resilient
     * to the variable's name being changed between two versions of the model.
     *
     * For example, if both the "left" and "right" versions of the model have an
     * input with an `inputId` of 2, but the variable is called "Variable 2" in
     * the left and "Variable Two" in the right, the inputs can be correlated and
     * compared despite the different variable names.
     */
    inputId: InputId;
    /** The variable identifier (typically a simplified/canonical ID, like the form used in SDE). */
    varId: VarId;
    /** The full variable name as used in the modeling tool. */
    varName: string;
    /** The default value of the input. */
    defaultValue: number;
    /** The minimum value of the input. */
    minValue: number;
    /** The maximum value of the input. */
    maxValue: number;
    /** The metadata for the related input control. */
    relatedItem?: RelatedItem;
}
/**
 * Holds information about an output variable used in the model.
 */
interface OutputVar {
    /** The unique dataset key for this variable (it should include `sourceName` and `varId`). */
    datasetKey: DatasetKey;
    /**
     * The source for the variable (e.g., undefined for a normal model output, "Data" for a variable
     * that is defined in an external data file).
     */
    sourceName?: SourceName;
    /** The variable identifier (typically a simplified/canonical ID, like the form used in SDE). */
    varId: VarId;
    /** The full variable name as used in the modeling tool. */
    varName: string;
    /** The metadata for the related visuals/graphs in which this variable is used. */
    relatedItems?: RelatedItem[];
}
/**
 * Holds information about a subscript used in the model.
 */
interface Subscript {
    /** The subscript identifier, as used in SDE. */
    id: string;
    /** The subscript name, as used in Vensim. */
    name: string;
}
/**
 * Holds information about a dimension (subscript family) used in the model.
 */
interface Dimension {
    /** The dimension identifier, as used in SDE. */
    id: string;
    /** The dimension name, as used in Vensim. */
    name: string;
    /** The set of subscripts in this dimension. */
    subscripts: Subscript[];
}
/**
 * Holds information about a variable used in the model implementation.
 */
interface ImplVar {
    /** The variable identifier, as used in SDE. */
    varId: VarId;
    /** The variable name, as used in the modeling tool. */
    varName: string;
    /** The variable index, used by SDE to reference the value in the generated model. */
    varIndex: number;
    /** The set of dimensions for this variable. */
    dimensions: Dimension[];
    /** The variable type (e.g. 'level', 'const'). */
    varType: string;
}

/**
 * Includes the properties needed to display a legend item in the UI.
 */
interface LegendItem {
    /** The item text. */
    label: string;
    /** The color of the item (in CSS/hex format). */
    color: string;
}
/**
 * Includes the properties needed to display a link item in the UI.
 */
interface LinkItem {
    /** Whether content is a URL or text to be copied to the clipboard. */
    kind: 'url' | 'copy';
    /** The link text that appears in the UI. */
    text: string;
    /** The link content (a URL or text). */
    content: string;
}
type BundleGraphId = string;
/**
 * Describes a dataset in a bundle-specific graph.
 */
interface BundleGraphDatasetSpec {
    /** The dataset key. */
    datasetKey: DatasetKey;
    /** The dataset or variable name. */
    varName: string;
    /** The source name. */
    sourceName?: string;
    /** The label string (as it appears in the graph legend). */
    label?: string;
    /** The color of the plot (in CSS/hex format). */
    color: string;
}
/**
 * Describes a bundle-specific graph.
 */
interface BundleGraphSpec {
    /** The graph identifier. */
    id: BundleGraphId;
    /** The graph title. */
    title: string;
    /** The legend items for the graph. */
    legendItems: LegendItem[];
    /** The datasets displayed in this graph. */
    datasets: BundleGraphDatasetSpec[];
    /** Metadata for the graph that can be used to diff to another graph. */
    metadata: Map<string, string>;
}
/**
 * Allows for displaying a bundle-specific graph.
 */
interface BundleGraphView {
    /** Destroy the underlying graph view and any associated resources. */
    destroy(): void;
}
/**
 * Wrapper around data that can be used to initialize a graph view.
 */
interface BundleGraphData {
    /** Return a graph view that can be attached to the given canvas element. */
    createGraphView(canvas: HTMLCanvasElement): BundleGraphView;
}
/**
 * Describes the model that is contained in this bundle.
 */
interface ModelSpec {
    /** The size of the model binary, in bytes. */
    modelSizeInBytes: number;
    /** The size of the static data, in bytes. */
    dataSizeInBytes: number;
    /** The map of all input variables in this version of the model. */
    inputVars: Map<VarId, InputVar>;
    /** The map of all output (and static data) variables in this version of the model. */
    outputVars: Map<DatasetKey, OutputVar>;
    /** The map of all variables (both internal and exported) in this version of the model. */
    implVars: Map<DatasetKey, ImplVar>;
    /** The custom input variable aliases defined for this model. */
    inputAliases?: Map<string, VarId>;
    /** The custom input variable groups defined for this model. */
    inputGroups?: Map<string, InputVar[]>;
    /** The custom dataset (output variable) groups defined for this model. */
    datasetGroups?: Map<string, DatasetKey[]>;
    /** The start time (year) for the model. */
    startTime?: number;
    /** The end time (year) for the model. */
    endTime?: number;
    /** The specs for the bundled graphs. */
    graphSpecs?: BundleGraphSpec[];
}
/**
 * An interface that allows for running the bundled model under different input scenarios
 * and capturing the resulting output data.
 */
interface BundleModel extends DataSource {
    /** The spec for the bundled model. */
    modelSpec: ModelSpec;
    /**
     * Load the data used to display the graph by running the model with inputs
     * configured for the given scenario.
     */
    getGraphDataForScenario(scenarioSpec: ScenarioSpec, graphId: BundleGraphId): Promise<BundleGraphData>;
    /** Return the links to be displayed for the graph in the given scenario. */
    getGraphLinksForScenario(scenarioSpec: ScenarioSpec, graphId: BundleGraphId): LinkItem[];
}
/**
 * Provides access to the model that is contained in this bundle for use in
 * model-check packages.
 */
interface Bundle {
    /**
     * The version of the bundle.  This should be incremented when there is an
     * incompatible change to the bundle format.  The model-check tools can use
     * this value to skip tests if two bundles have different version numbers.
     */
    version: number;
    /** The spec for the bundled model. */
    modelSpec: ModelSpec;
    /** Asynchronously initialize the underlying model. */
    initModel(): Promise<BundleModel>;
}
/**
 * Associates a name with a `Bundle`.
 */
interface NamedBundle {
    /** The name of the bundle, for example, "Current" or "Baseline". */
    name: string;
    /** The associated bundle. */
    bundle: Bundle;
}
/**
 * Represents a bundle that has had its model initialized.
 */
interface LoadedBundle {
    /** The name of the bundle, for example, "Current" or "Baseline". */
    name: string;
    /** The version of the bundle. */
    version: number;
    /** The initialized model. */
    model: BundleModel;
}

type CheckDataRequestKey = string;
/**
 * Coordinates on-demand loading of data used to display a graph representation
 * of a check/predicate.
 */
declare class CheckDataCoordinator {
    readonly bundleModel: BundleModel;
    private readonly taskQueue;
    constructor(bundleModel: BundleModel);
    requestDataset(requestKey: CheckDataRequestKey, scenarioSpec: ScenarioSpec, datasetKey: DatasetKey, onResponse: (dataset: Dataset) => void): void;
    cancelRequest(key: CheckDataRequestKey): void;
}

type CheckPredicateOp = 'gt' | 'gte' | 'lt' | 'lte' | 'eq' | 'approx';

type CheckPredicateTimeSingle = number;
type CheckPredicateTimeRange = [number, number];
interface CheckPredicateTimeOptions {
    after_excl?: number;
    after_incl?: number;
    before_excl?: number;
    before_incl?: number;
}
type CheckPredicateTimeSpec = CheckPredicateTimeSingle | CheckPredicateTimeRange | CheckPredicateTimeOptions;

interface CheckResultErrorInfo {
    kind: 'unknown-dataset' | 'unknown-input' | 'unknown-input-group' | 'empty-input-group';
    name: string;
}
interface CheckResult {
    status: 'passed' | 'failed' | 'error';
    message?: string;
    failValue?: number;
    failOp?: CheckPredicateOp;
    failRefValue?: number;
    failTime?: number;
    errorInfo?: CheckResultErrorInfo;
}

type CheckDatasetError = 'no-matches-for-dataset' | 'no-matches-for-group' | 'no-matches-for-type';
interface CheckDataset {
    /** The key for the matched dataset; can be undefined if no dataset matched. */
    datasetKey?: DatasetKey;
    /** The name of the matched dataset, or the name associated with the error, if defined. */
    name: string;
    /** The error info if the dataset query failed to match. */
    error?: CheckDatasetError;
}

interface CheckScenarioError {
    kind: 'unknown-input-group' | 'empty-input-group';
    /** The name of the input group that failed to match. */
    name: string;
}
interface CheckScenarioInputDesc {
    /** The name of the input. */
    name: string;
    /** The matched input variable; can be undefined if no input matched. */
    inputVar?: InputVar;
    /** The position of the input, if this is a position scenario. */
    position?: InputPosition;
    /** The value of the input, for the given position or explicit value. */
    value?: number;
}
interface CheckScenario {
    /** The spec used to configure the model with the matched input(s); can be undefined if input(s) failed to match. */
    spec?: ScenarioSpec;
    /** The name of the associated input group, if any. */
    inputGroupName?: string;
    /** The descriptions of the inputs; if empty, it is an "all inputs" scenario. */
    inputDescs: CheckScenarioInputDesc[];
    /** The error info if the scenario/input query failed to match. */
    error?: CheckScenarioError;
}

/**
 * The key type for data references (in the form `<ScenarioUid::DatasetKey>`).
 */
type CheckDataRefKey = string;
/**
 * The scenario and dataset referenced by a particular predicate (for cases
 * where the check is against another dataset rather than a constant value).
 */
interface CheckDataRef {
    /** The key for the reference; can be undefined if inputs or datasets failed to match. */
    key?: CheckDataRefKey;
    /** The scenario used to generate the referenced dataset. */
    scenario: CheckScenario;
    /** The referenced dataset. */
    dataset: CheckDataset;
}

type CheckKey = number;

type CheckStatus = 'passed' | 'failed' | 'error';
interface CheckPredicateOpConstantRef {
    kind: 'constant';
    value: number;
}
interface CheckPredicateOpDataRef {
    kind: 'data';
    dataRef: CheckDataRef;
}
type CheckPredicateOpRef = CheckPredicateOpConstantRef | CheckPredicateOpDataRef;
interface CheckPredicateReport {
    checkKey: CheckKey;
    result: CheckResult;
    opRefs: Map<CheckPredicateOp, CheckPredicateOpRef>;
    opValues: string[];
    time?: CheckPredicateTimeSpec;
    tolerance?: number;
}
interface CheckDatasetReport {
    checkDataset: CheckDataset;
    status: CheckStatus;
    predicates: CheckPredicateReport[];
}
interface CheckScenarioReport {
    checkScenario: CheckScenario;
    status: CheckStatus;
    datasets: CheckDatasetReport[];
}
interface CheckTestReport {
    name: string;
    status: CheckStatus;
    scenarios: CheckScenarioReport[];
}
interface CheckGroupReport {
    name: string;
    tests: CheckTestReport[];
}
interface CheckReport {
    groups: CheckGroupReport[];
}
type StyleFunc = (s: string) => string;
/**
 * Return a string representation of the given scenario.
 *
 * @param scenario The scenario report.
 * @param bold A function that applies bold styling to a string.
 */
declare function scenarioMessage(scenario: CheckScenarioReport, bold: StyleFunc): string;
/**
 * Return a string representation of the given dataset.
 *
 * @param dataset The dataset report.
 * @param bold A function that applies bold styling to a string.
 */
declare function datasetMessage(dataset: CheckDatasetReport, bold: StyleFunc): string;
/**
 * Return a string representation of the given predicate.
 *
 * @param predicate The predicate report.
 * @param bold A function that applies bold styling to a string.
 */
declare function predicateMessage(predicate: CheckPredicateReport, bold: StyleFunc): string;

interface CheckOptions {
    /** The strings containing check tests in YAML format. */
    tests: string[];
}
interface CheckConfig {
    /** The loaded bundle being checked. */
    bundle: LoadedBundle;
    /** The strings containing check tests in YAML format. */
    tests: string[];
}

/**
 * A simplified/terse version of `CheckPredicateReport` that matches the
 * format of the JSON objects emitted by the CLI in terse mode.
 */
interface CheckPredicateSummary {
    checkKey: CheckKey;
    result: CheckResult;
}
/**
 * A simplified/terse version of `CheckReport` that matches the
 * format of the JSON objects emitted by the CLI in terse mode.
 * This only contains predicate summaries for checks that have a status
 * of 'failed' or 'error'.
 */
interface CheckSummary {
    predicateSummaries: CheckPredicateSummary[];
}
/**
 * Convert a full `CheckReport` to a simplified `CheckSummary` that only includes
 * failed/errored checks.
 *
 * @param checkReport The full check report.
 * @return The converted check summary.
 */
declare function checkSummaryFromReport(checkReport: CheckReport): CheckSummary;
/**
 * Convert a simplified `CheckSummary` to a full `CheckReport` that restores the
 * structure of the tests from the given configuration.
 *
 * @param checkConfig The config used to reconstruct the check test structure.
 * @param checkSummary The simplified check summary.
 * @return The converted check report.
 */
declare function checkReportFromSummary(checkConfig: CheckConfig, checkSummary: CheckSummary): CheckReport | undefined;

type ComparisonScenarioId = string;
type ComparisonScenarioTitle = string;
type ComparisonScenarioSubtitle = string;
type ComparisonScenarioInputName = string;
type ComparisonScenarioInputPosition = 'default' | 'min' | 'max';
/**
 * Specifies an input that is set to a specific position (default / min / max).
 */
interface ComparisonScenarioInputAtPositionSpec {
    kind: 'input-at-position';
    /** The requested input name or alias. */
    inputName: ComparisonScenarioInputName;
    /** The requested position of the input. */
    position: ComparisonScenarioInputPosition;
}
/**
 * Specifies an input that is set to a specific number value.
 */
interface ComparisonScenarioInputAtValueSpec {
    kind: 'input-at-value';
    /** The requested input name or alias. */
    inputName: ComparisonScenarioInputName;
    /** The number value of the input. */
    value: number;
}
/**
 * A single input setting for a scenario.  An input can be set to a specific number value,
 * or it can be set to a "position" (default / min / max).
 */
type ComparisonScenarioInputSpec = ComparisonScenarioInputAtPositionSpec | ComparisonScenarioInputAtValueSpec;
/**
 * Specifies a single scenario that sets one or more inputs to a value/position.
 */
interface ComparisonScenarioWithInputsSpec {
    kind: 'scenario-with-inputs';
    /** The unique identifier for the scenario. */
    id?: ComparisonScenarioId;
    /** The title of the scenario. */
    title?: ComparisonScenarioTitle;
    /** The subtitle of the scenario. */
    subtitle?: ComparisonScenarioSubtitle;
    /** The input settings for this scenario. */
    inputs: ComparisonScenarioInputSpec[];
}
/**
 * Specifies a single scenario that sets all available inputs to position.
 */
interface ComparisonScenarioWithAllInputsSpec {
    kind: 'scenario-with-all-inputs';
    /** The unique identifier for the scenario. */
    id?: ComparisonScenarioId;
    /** The title of the scenario. */
    title?: ComparisonScenarioTitle;
    /** The subtitle of the scenario. */
    subtitle?: ComparisonScenarioSubtitle;
    /** The position that will be used for all available inputs. */
    position: ComparisonScenarioInputPosition;
}
/**
 * Special preset that expands to many scenarios:
 * - one scenario with all inputs at their default
 * - two scenarios for each available input:
 *     - one scenario with the input at its minimum
 *     - one scenario with the input at its maximum
 */
interface ComparisonScenarioPresetMatrixSpec {
    kind: 'scenario-matrix';
}
/**
 * A definition of input scenario(s).  A scenario can set one input to a value/position, or it
 * can set multiple inputs to particular values/positions.
 */
type ComparisonScenarioSpec = ComparisonScenarioWithInputsSpec | ComparisonScenarioWithAllInputsSpec | ComparisonScenarioPresetMatrixSpec;
/** A reference to a scenario definition. */
interface ComparisonScenarioRefSpec {
    kind: 'scenario-ref';
    /** The ID of the scenario that is referenced. */
    scenarioId: ComparisonScenarioId;
    /** The optional title that is used instead of the referenced scenario's title. */
    title?: ComparisonScenarioTitle;
    /** The optional subtitle that is used instead of the referenced scenario's subtitle. */
    subtitle?: ComparisonScenarioSubtitle;
}
type ComparisonScenarioGroupId = string;
type ComparisonScenarioGroupTitle = string;
/**
 * A definition of a group of input scenarios.  Multiple scenarios can be grouped together under a single name, and
 * can later be referenced by group ID in a view definition.
 */
interface ComparisonScenarioGroupSpec {
    kind: 'scenario-group';
    /** The unique identifier for the group. */
    id?: ComparisonScenarioGroupId;
    /** The title of the group. */
    title: ComparisonScenarioGroupTitle;
    /** The scenarios that are included in this group. */
    scenarios: (ComparisonScenarioSpec | ComparisonScenarioRefSpec)[];
}
/** A reference to a scenario group definition. */
interface ComparisonScenarioGroupRefSpec {
    kind: 'scenario-group-ref';
    /** The ID of the scenario group that is referenced. */
    groupId: ComparisonScenarioGroupId;
}
type ComparisonViewTitle = string;
type ComparisonViewSubtitle = string;
type ComparisonViewGraphId = string;
/**
 * Specifies a list of graphs to be shown in a view.
 */
interface ComparisonViewGraphsArraySpec {
    kind: 'graphs-array';
    /** The array of IDs for graphs to show. */
    graphIds: ComparisonViewGraphId[];
}
/**
 * Specifies a preset list of graphs to be shown in a view.
 */
interface ComparisonViewGraphsPresetSpec {
    kind: 'graphs-preset';
    /** The preset (currently only "all" is supported, which shows all available graphs). */
    preset: 'all';
}
/**
 * Specifies a set of graphs to be shown in a view.
 */
type ComparisonViewGraphsSpec = ComparisonViewGraphsArraySpec | ComparisonViewGraphsPresetSpec;
/**
 * A definition of a view.  A view presents a set of graphs for a single input scenario.
 */
interface ComparisonViewSpec {
    kind: 'view';
    /** The title of the view.  If undefined, the title will be inferred from the scenario. */
    title?: ComparisonViewTitle;
    /** The subtitle of the view.  If undefined, the subtitle will be inferred from the scenario. */
    subtitle?: ComparisonViewGroupTitle;
    /** The scenario to be shown in the view. */
    scenarioId: ComparisonScenarioId;
    /** The graphs to be shown for each scenario view. */
    graphs: ComparisonViewGraphsSpec;
}
type ComparisonViewGroupTitle = string;
/**
 * Specifies a view group with an explicit array of view definitions.
 */
interface ComparisonViewGroupWithViewsSpec {
    kind: 'view-group-with-views';
    /** The title of the group of views. */
    title: ComparisonViewGroupTitle;
    /** The views that are included in this group. */
    views: ComparisonViewSpec[];
}
/**
 * Specifies a view group by declaring the scenarios included in the group (one view per scenario), along
 * with a set of graphs that will shown in each view.
 */
interface ComparisonViewGroupWithScenariosSpec {
    kind: 'view-group-with-scenarios';
    /** The title of the group of views. */
    title: ComparisonViewGroupTitle;
    /** The scenarios to be included (one view will be created for each scenario). */
    scenarios: (ComparisonScenarioRefSpec | ComparisonScenarioGroupRefSpec)[];
    /** The graphs to be shown for each scenario view. */
    graphs: ComparisonViewGraphsSpec;
}
/**
 * A definition of a group of views.  Multiple related views can be grouped together under a single title
 * to make them easy to distinguish in a report.
 */
type ComparisonViewGroupSpec = ComparisonViewGroupWithViewsSpec | ComparisonViewGroupWithScenariosSpec;
/**
 * Contains the scenario and view definitions from one or more sources (JSON/YAML files or manually
 * defined specs).
 */
interface ComparisonSpecs {
    /** The requested scenarios. */
    scenarios: ComparisonScenarioSpec[];
    /** The requested scenario groups. */
    scenarioGroups: ComparisonScenarioGroupSpec[];
    /** The requested view groups. */
    viewGroups: ComparisonViewGroupSpec[];
}
/** A source of comparison scenario and specifications. */
interface ComparisonSpecsSource {
    kind: 'yaml' | 'json';
    /** The source filename, if known. */
    filename?: string;
    /** A string containing YAML or JSON content. */
    content: string;
}

/** A resolved dataset that is being compared. */
interface ComparisonDataset {
    kind: 'dataset';
    /** The unique key for the dataset (i.e., output variable or static data). */
    key: DatasetKey;
    /**
     * The resolved output variable from the "left" model that corresponds to this dataset,
     * or undefined if the variable is not defined in the left model.
     */
    outputVarL?: OutputVar;
    /**
     * The resolved output variable from the "right" model that corresponds to this dataset,
     * or undefined if the variable is not defined in the right model.
     */
    outputVarR?: OutputVar;
}
/** A unique key for a `ComparisonScenario`, generated internally for use by the library. */
type ComparisonScenarioKey = string & {
    _brand?: 'ComparisonScenarioKey';
};
interface ComparisonResolverUnknownInputError {
    kind: 'unknown-input';
}
interface ComparisonResolverInvalidValueError {
    kind: 'invalid-value';
}
type ComparisonResolverError = ComparisonResolverUnknownInputError | ComparisonResolverInvalidValueError;
/** Describes the resolution state for a scenario input relative to a specific model. */
interface ComparisonScenarioInputState {
    /** The matched input variable; can be undefined if no input matched. */
    inputVar?: InputVar;
    /** The position of the input, if this is a position scenario. */
    position?: InputPosition;
    /** The value of the input, for the given position or explicit value. */
    value?: number;
    /** The error info if the input could not be resolved. */
    error?: ComparisonResolverError;
}
/** A scenario input that has been checked against both "left" and "right" model. */
interface ComparisonScenarioInput {
    /** The requested name of the input. */
    requestedName: string;
    /** The resolved state of the input for the "left" model. */
    stateL: ComparisonScenarioInputState;
    /** The resolved state of the input for the "right" model. */
    stateR: ComparisonScenarioInputState;
}
/** A configuration that sets model inputs to specific values. */
interface ComparisonScenarioInputSettings {
    kind: 'input-settings';
    /** The resolutions for the specified inputs in the scenario. */
    inputs: ComparisonScenarioInput[];
}
/** A configuration that sets all inputs in the model to a certain position. */
interface ComparisonScenarioAllInputsSettings {
    kind: 'all-inputs-settings';
    /** The input position that will be applied to all available inputs. */
    position: InputPosition;
}
/**
 * The configuration for an input scenario, either a set of individual input settings, or one
 * that sets all inputs in the model to a certain position.
 */
type ComparisonScenarioSettings = ComparisonScenarioInputSettings | ComparisonScenarioAllInputsSettings;
/** A single resolved input scenario. */
interface ComparisonScenario {
    kind: 'scenario';
    /** The unique key for the scenario, generated internally for use by the library. */
    key: ComparisonScenarioKey;
    /** The unique user-defined identifier for the scenario. */
    id?: ComparisonScenarioId;
    /** The scenario title. */
    title: string;
    /** The scenario subtitle. */
    subtitle?: string;
    /** The resolved settings for the model inputs in this scenario. */
    settings: ComparisonScenarioSettings;
    /** The input scenario used to configure the "left" model, or undefined if data not available. */
    specL?: ScenarioSpec;
    /** The input scenario used to configure the "right" model, or undefined if data not available. */
    specR?: ScenarioSpec;
}
/** An unresolved input scenario reference. */
interface ComparisonUnresolvedScenarioRef {
    kind: 'unresolved-scenario-ref';
    /** The ID of the referenced scenario that could not be resolved. */
    scenarioId: ComparisonScenarioId;
}
/** A resolved group of input scenarios. */
interface ComparisonScenarioGroup {
    kind: 'scenario-group';
    /** The unique identifier for the group. */
    id?: ComparisonScenarioGroupId;
    /** The title of the group. */
    title: ComparisonScenarioGroupTitle;
    /**
     * The scenarios that are included in this group.  This includes scenario that were successfully
     * resolved as well as scenario references that could not be resolved.
     */
    scenarios: (ComparisonScenario | ComparisonUnresolvedScenarioRef)[];
}
/** An unresolved scenario group reference. */
interface ComparisonUnresolvedScenarioGroupRef {
    kind: 'unresolved-scenario-group-ref';
    /** The ID of the referenced scenario group that could not be resolved. */
    scenarioGroupId: ComparisonScenarioGroupId;
}
/** A resolved view definition.  A view presents a set of graphs for a single input scenario. */
interface ComparisonView {
    kind: 'view';
    /** The title of the view. */
    title: ComparisonViewTitle;
    /** The subtitle of the view. */
    subtitle?: ComparisonViewSubtitle;
    /** The resolved scenario to be shown in the view. */
    scenario: ComparisonScenario;
    /** The graphs to be shown for each scenario view. */
    graphs: 'all' | ComparisonViewGraphId[];
}
/** An unresolved view. */
interface ComparisonUnresolvedView {
    kind: 'unresolved-view';
    /** The requested title of the view, if provided. */
    title?: ComparisonViewTitle;
    /** The requested subtitle of the view, if provided. */
    subtitle?: ComparisonViewSubtitle;
    /** The ID of the referenced scenario that could not be resolved. */
    scenarioId?: ComparisonScenarioId;
    /** The ID of the referenced scenario group that could not be resolved. */
    scenarioGroupId?: ComparisonScenarioGroupId;
}
/** A resolved group of compared scenario/graph views. */
interface ComparisonViewGroup {
    kind: 'view-group';
    /** The title of the group of views. */
    title: ComparisonViewGroupTitle;
    /** The array of resolved (and unresolved) views that are included in this group. */
    views: (ComparisonView | ComparisonUnresolvedView)[];
}

/**
 * Provides access to the set of dataset definitions (`ComparisonDataset` instances) that are used
 * when comparing the two models.
 */
interface ComparisonDatasets {
    /**
     * Return all `ComparisonDataset` instances that are available for comparisons.
     */
    getAllDatasets(): IterableIterator<ComparisonDataset>;
    /**
     * Return the dataset metadata for the given key.
     *
     * @param datasetKey The key for the dataset.
     */
    getDataset(datasetKey: DatasetKey): ComparisonDataset | undefined;
    /**
     * Return the keys for the datasets that should be compared for the given scenario.
     *
     * @param scenario The scenario definition.
     */
    getDatasetKeysForScenario(scenario: ComparisonScenario): DatasetKey[];
}

interface ComparisonScenarios {
    /**
     * Return all `ComparisonScenario` instances that are available for comparisons.
     */
    getAllScenarios(): IterableIterator<ComparisonScenario>;
    /**
     * Return the scenario definition for the given key.
     *
     * @param key The key for the scenario.
     */
    getScenario(key: ComparisonScenarioKey): ComparisonScenario | undefined;
}

interface ComparisonDatasetOptions {
    /**
     * The mapping of renamed dataset keys (old or "left" name as the map key,
     * new or "right" name as the value).
     */
    renamedDatasetKeys?: Map<DatasetKey, DatasetKey>;
    /**
     * An optional function that allows for limiting the datasets that are compared
     * for a given scenario.  By default, all datasets are compared for a given
     * scenario, but if a custom function is provided, it can return a subset of
     * datasets (for example, to omit datasets that are not relevant).
     */
    datasetKeysForScenario?: (allDatasetKeys: DatasetKey[], scenario: ComparisonScenario) => DatasetKey[];
}
interface ComparisonOptions {
    /** The left-side ("baseline") bundle being compared. */
    baseline: NamedBundle;
    /**
     * The array of thresholds used to color differences, e.g., [1, 5, 10] will use
     * buckets of 0%, 0-1%, 1-5%, 5-10%, and >10%.
     */
    thresholds: number[];
    /**
     * The requested comparison scenario and view specifications.  These can be
     * specified in YAML or JSON files, or using `Spec` objects.
     */
    specs: (ComparisonSpecs | ComparisonSpecsSource)[];
    /** Optional configuration for the datasets that are compared for different scenarios. */
    datasets?: ComparisonDatasetOptions;
}
interface ComparisonConfig {
    /** The loaded left-side ("baseline") bundle being compared. */
    bundleL: LoadedBundle;
    /** The loaded right-side ("current") bundle being compared. */
    bundleR: LoadedBundle;
    /**
     * The array of thresholds used to color differences, e.g., [1, 5, 10] will use
     * buckets of 0%, 0-1%, 1-5%, 5-10%, and >10%.
     */
    thresholds: number[];
    /** The set of resolved scenarios that will be compared. */
    scenarios: ComparisonScenarios;
    /** The set of resolved datasets that will be compared. */
    datasets: ComparisonDatasets;
    /** The set of resolved view groups. */
    viewGroups: ComparisonViewGroup[];
}

type ComparisonDataRequestKey = string;
/**
 * Coordinates loading of data in parallel from two models.
 */
declare class ComparisonDataCoordinator {
    readonly bundleModelL: BundleModel;
    readonly bundleModelR: BundleModel;
    private readonly taskQueue;
    constructor(bundleModelL: BundleModel, bundleModelR: BundleModel);
    private processDatasetRequest;
    private processGraphDataRequest;
    requestDatasetMaps(requestKey: ComparisonDataRequestKey, scenarioSpecL: ScenarioSpec, scenarioSpecR: ScenarioSpec, datasetKeys: DatasetKey[], onResponse: (datasetMapL?: DatasetMap, datasetMapR?: DatasetMap) => void): void;
    requestGraphData(requestKey: ComparisonDataRequestKey, scenarioSpecL: ScenarioSpec, scenarioSpecR: ScenarioSpec, graphId: BundleGraphId, onResponse: (graphDataL?: BundleGraphData, graphDataR?: BundleGraphData) => void): void;
    cancelRequest(key: ComparisonDataRequestKey): void;
}

interface DiffPoint {
    time: number;
    valueL: number;
    valueR: number;
}
type DiffValidity = 'neither' | 'left-only' | 'right-only' | 'both';
interface DiffReport {
    validity: DiffValidity;
    minValue: number;
    maxValue: number;
    avgDiff: number;
    minDiff: number;
    maxDiff: number;
    maxDiffPoint: DiffPoint;
}
declare function diffDatasets(datasetL: Dataset | undefined, datasetR: Dataset | undefined): DiffReport;

interface PerfReport {
    readonly minTime: number;
    readonly maxTime: number;
    readonly avgTime: number;
    readonly allTimes: number[];
}
declare class PerfStats {
    private readonly times;
    addRun(timeInMillis: number): void;
    toReport(): PerfReport;
}

/**
 * The report for a single comparison test (involving a dataset produced under
 * a specific input scenario).  This includes the full `DiffReport`, whereas
 * a `ComparisonTestSummary` only includes the `maxDiff` value.
 */
interface ComparisonTestReport {
    scenarioKey: ComparisonScenarioKey;
    datasetKey: DatasetKey;
    diffReport: DiffReport;
}
/**
 * A simplified/terse version of `ComparisonTestReport` that is used when writing
 * results to a JSON file.  The object keys are terse and it only includes the
 * minimum set of fields (only the `maxDiff` value instead of the full `DiffReport`)
 * to keep the file smaller when there are many reported differences.
 */
interface ComparisonTestSummary {
    /** Short for `scenarioKey`. */
    s: ComparisonScenarioKey;
    /** Short for `datasetKey`. */
    d: DatasetKey;
    /** Short for `maxDiff`. */
    md: number;
}
/**
 * The roll-up report that contains the results of all individual comparison tests.
 */
interface ComparisonReport {
    /** The set of all comparison test reports. */
    testReports: ComparisonTestReport[];
    /** The perf report for the "left" model. */
    perfReportL: PerfReport;
    /** The perf report for the "right" model. */
    perfReportR: PerfReport;
}
/**
 * A simplified/terse version of `ComparisonReport` that only includes the minimum set
 * of fields needed by the reporting app (to keep the file smaller when there are many
 * reported differences).  This only includes comparison results for which there is
 * a non-zero `maxDiff` value.
 */
interface ComparisonSummary {
    /** The simplified set of all terse comparison test summaries. */
    testSummaries: ComparisonTestSummary[];
    /** The perf report for the "left" model. */
    perfReportL: PerfReport;
    /** The perf report for the "right" model. */
    perfReportR: PerfReport;
}

type GraphInclusion = 'neither' | 'left-only' | 'right-only' | 'both';
interface GraphComparisonMetadataReport {
    /** The key for the metadata field. */
    key: string;
    /** The value of the metadata field in the left bundle. */
    valueL?: string;
    /** The value of the metadata field in the right bundle. */
    valueR?: string;
}
interface GraphComparisonDatasetReport {
    /** The dataset key. */
    datasetKey: DatasetKey;
    /** The max diff for this dataset. */
    maxDiff?: number;
}
interface GraphComparisonReport {
    /** Indicates which bundles the graph is defined in. */
    inclusion: GraphInclusion;
    /** The metadata fields with differences. */
    metadataReports: GraphComparisonMetadataReport[];
    /** The datasets with differences. */
    datasetReports: GraphComparisonDatasetReport[];
}
/**
 * Comparison the metadata and datasets for the given graphs.
 *
 * @param graphL The graph defined in the left bundle.
 * @param graphR The graph defined in the right bundle.
 * @param scenarioKey The key of the scenario used for comparing datasets.
 * @param testSummaries The set of test summaries from a previous comparison run.
 */
declare function diffGraphs(graphL: BundleGraphSpec | undefined, graphR: BundleGraphSpec | undefined, scenarioKey: ComparisonScenarioKey, testSummaries: ComparisonTestSummary[]): GraphComparisonReport;

/**
 * Convert a full `ComparisonReport` to a simplified `ComparisonSummary` that includes
 * the minimum set of fields needed to keep the file smaller when there are many
 * reported differences.  This only includes comparison results for which there
 * is a non-zero `maxDiff` value.
 *
 * @param comparisonReport The full comparison report.
 * @return The terse summary.
 */
declare function comparisonSummaryFromReport(comparisonReport: ComparisonReport): ComparisonSummary;

type ComparisonGroupKind = 'by-dataset' | 'by-scenario';
type ComparisonGroupKey = string;
/**
 * A group of comparison test summaries associated with a particular scenario or dataset.
 */
interface ComparisonGroup {
    /** The kind of group, either 'by-dataset' or 'by-scenario'. */
    kind: ComparisonGroupKind;
    /**
     * The unique key for this group (a `DatasetKey` if grouped by dataset, or a
     * `ComparisonScenarioKey` if grouped by scenario).
     */
    key: ComparisonGroupKey;
    /** The comparison test summaries for this group. */
    testSummaries: ComparisonTestSummary[];
}
/** Describes the "root" or primary item for a group of comparisons. */
type ComparisonGroupRoot = ComparisonDataset | ComparisonScenario;
/** A summary of scores for a group of comparisons. */
interface ComparisonGroupScores {
    /** The total number of comparisons (sample size) for this group. */
    totalDiffCount: number;
    /** The sum of the `maxDiff` values for each threshold bucket. */
    totalMaxDiffByBucket: number[];
    /** The number of comparisons that fall into each threshold bucket. */
    diffCountByBucket: number[];
    /** The percentage of comparisons that fall into each threshold bucket. */
    diffPercentByBucket: number[];
}
/**
 * A summary of a group of comparisons that includes the resolved scenario/dataset metadata
 * and score information for the group.
 */
interface ComparisonGroupSummary {
    /** The metadata for the "root" or primary item for this group of comparisons. */
    root: ComparisonGroupRoot;
    /** The group containing the comparison summaries. */
    group: ComparisonGroup;
    /** The scores for this group, or undefined if comparisons were not performed for this group. */
    scores?: ComparisonGroupScores;
}
/**
 * Breaks down a set of by-scenario or by-dataset groupings into distinct categories.
 */
interface ComparisonGroupSummariesByCategory {
    /**
     * All groups in a map, keyed by "group key" (either a dataset key or scenario key).
     */
    allGroupSummaries: Map<ComparisonGroupKey, ComparisonGroupSummary>;
    /**
     * Groups with items that have errors (are not valid) for both "left" and "right" models.
     */
    withErrors: ComparisonGroupSummary[];
    /**
     * Groups with items that are only valid for the "left" model (for example, datasets that
     * were removed and no longer available in the "right" model).
     */
    onlyInLeft: ComparisonGroupSummary[];
    /**
     * Groups with items that are only valid for the "right" model (for example, scenarios
     * for inputs that were added in the "right" model).
     */
    onlyInRight: ComparisonGroupSummary[];
    /**
     * Groups with one or more comparisons that have non-zero `maxDiff` scores; the groups
     * will be sorted by `maxDiff`, with higher scores at the front of the array.
     */
    withDiffs: ComparisonGroupSummary[];
    /**
     * Groups where all comparisons have `maxDiff` scores of zero (no differences between
     * "left" and "right").
     */
    withoutDiffs: ComparisonGroupSummary[];
}
/**
 * Rolls up all by-scenario and by-dataset groupings.
 */
interface ComparisonCategorizedResults {
    /** The full set of by-scenario groupings. */
    byScenario: ComparisonGroupSummariesByCategory;
    /** The full set of by-dataset groupings. */
    byDataset: ComparisonGroupSummariesByCategory;
}

/**
 * Given a set of terse test summaries (which only includes summaries for tests with non-zero `maxDiff`
 * scores), restore the full set of summaries and then categorize them.
 *
 * @param comparisonConfig The comparison configuration.
 * @param terseSummaries The set of terse test summaries.
 */
declare function categorizeComparisonTestSummaries(comparisonConfig: ComparisonConfig, terseSummaries: ComparisonTestSummary[]): ComparisonCategorizedResults;

/**
 * Additional options that are passed to `getConfigOptions`.  These can be used to customize
 * the `ConfigOptions`, for example, if the `simplifyScenarios` flag is true, a reduced set
 * of tests can be provided in the `ConfigOptions` so that the tests run faster in a local
 * development situation.
 */
interface ConfigInitOptions {
    /** If defined, overrides the displayed name of the baseline ("left") bundle. */
    bundleNameL?: string;
    /** If defined, overrides the displayed name of the current ("right") bundle. */
    bundleNameR?: string;
    /**
     * A hint that the user wants tests to run faster.  If true, you can return a
     * configuration that runs a smaller subset of tests than normal.
     */
    simplifyScenarios?: boolean;
}
/**
 * The user-specified options used by the library to resolve and initialize a `Config` instance.
 */
interface ConfigOptions {
    /**
     * The bundle being checked.  This bundle will also be compared against the
     * "baseline" bundle, if `comparison` options are defined.
     */
    current: NamedBundle;
    /**
     * The model check options.
     */
    check: CheckOptions;
    /**
     * The model comparison options.
     */
    comparison?: ComparisonOptions;
}
/**
 * The resolved configuration for check and comparison tests.
 */
interface Config {
    /** The resolved check test configuration. */
    check: CheckConfig;
    /** The resolved comparison test configuration. */
    comparison?: ComparisonConfig;
}

declare function createConfig(options: ConfigOptions): Promise<Config>;

declare class PerfRunner {
    readonly bundleModelL: BundleModel;
    readonly bundleModelR: BundleModel;
    private readonly mode;
    private readonly taskQueue;
    onComplete?: (reportL: PerfReport, reportR: PerfReport) => void;
    onError?: (error: Error) => void;
    constructor(bundleModelL: BundleModel, bundleModelR: BundleModel, mode?: 'serial' | 'parallel');
    start(): void;
}

/**
 * The report for a single run of the full check+comparison test suite.
 */
interface SuiteReport {
    checkReport: CheckReport;
    comparisonReport?: ComparisonReport;
}
/**
 * A simplified/terse version of `SuiteReport` that is used when writing
 * results to a JSON file.  The object keys are terse and it only includes
 * the minimum set of fields (e.g., only the `maxDiff` value instead of the
 * full `DiffReport` for each comparison test) to keep the file smaller
 * when there are many reported differences.
 */
interface SuiteSummary {
    checkSummary: CheckSummary;
    comparisonSummary?: ComparisonSummary;
}

type CancelRunSuite = () => void;
interface RunSuiteCallbacks {
    onProgress?: (pct: number) => void;
    onComplete?: (suiteReport: SuiteReport) => void;
    onError?: (error: Error) => void;
}
interface RunSuiteOptions {
    /** Set to true to reduce the number of scenarios generated for a `matrix`. */
    simplifyScenarios?: boolean;
}
/**
 * Run the full suite of checks and comparisons defined in the given configuration.
 *
 * @param config The test suite configuration.
 * @param callbacks The callbacks that will be notified.
 * @param options Options to control how the tests are run.
 * @return A function that will cancel the process when invoked.
 */
declare function runSuite(config: Config, callbacks: RunSuiteCallbacks, options?: RunSuiteOptions): CancelRunSuite;

/**
 * Convert a full `SuiteReport` to a simplified `SuiteSummary` that only includes
 * failed/errored checks or comparisons with differences.
 *
 * @param suiteReport The full suite report.
 * @return The converted suite summary.
 */
declare function suiteSummaryFromReport(suiteReport: SuiteReport): SuiteSummary;

export { AllInputsSpec, Bundle, BundleGraphData, BundleGraphDatasetSpec, BundleGraphId, BundleGraphSpec, BundleGraphView, BundleModel, CheckDataCoordinator, CheckDataRequestKey, CheckDatasetReport, CheckGroupReport, CheckKey, CheckPredicateOp, CheckPredicateOpConstantRef, CheckPredicateOpDataRef, CheckPredicateOpRef, CheckPredicateReport, CheckPredicateSummary, CheckPredicateTimeOptions, CheckPredicateTimeRange, CheckPredicateTimeSingle, CheckPredicateTimeSpec, CheckReport, CheckResult, CheckResultErrorInfo, CheckScenario, CheckScenarioError, CheckScenarioInputDesc, CheckScenarioReport, CheckStatus, CheckSummary, CheckTestReport, ComparisonCategorizedResults, ComparisonConfig, ComparisonDataCoordinator, ComparisonDataRequestKey, ComparisonDataset, ComparisonDatasetOptions, ComparisonDatasets, ComparisonGroup, ComparisonGroupKey, ComparisonGroupKind, ComparisonGroupRoot, ComparisonGroupScores, ComparisonGroupSummariesByCategory, ComparisonGroupSummary, ComparisonOptions, ComparisonReport, ComparisonResolverError, ComparisonResolverInvalidValueError, ComparisonResolverUnknownInputError, ComparisonScenario, ComparisonScenarioAllInputsSettings, ComparisonScenarioGroup, ComparisonScenarioGroupId, ComparisonScenarioGroupRefSpec, ComparisonScenarioGroupSpec, ComparisonScenarioGroupTitle, ComparisonScenarioId, ComparisonScenarioInput, ComparisonScenarioInputAtPositionSpec, ComparisonScenarioInputAtValueSpec, ComparisonScenarioInputName, ComparisonScenarioInputPosition, ComparisonScenarioInputSettings, ComparisonScenarioInputSpec, ComparisonScenarioInputState, ComparisonScenarioKey, ComparisonScenarioPresetMatrixSpec, ComparisonScenarioRefSpec, ComparisonScenarioSettings, ComparisonScenarioSpec, ComparisonScenarioSubtitle, ComparisonScenarioTitle, ComparisonScenarioWithAllInputsSpec, ComparisonScenarioWithInputsSpec, ComparisonScenarios, ComparisonSpecs, ComparisonSpecsSource, ComparisonSummary, ComparisonTestReport, ComparisonTestSummary, ComparisonUnresolvedScenarioGroupRef, ComparisonUnresolvedScenarioRef, ComparisonUnresolvedView, ComparisonView, ComparisonViewGraphId, ComparisonViewGraphsArraySpec, ComparisonViewGraphsPresetSpec, ComparisonViewGraphsSpec, ComparisonViewGroup, ComparisonViewGroupSpec, ComparisonViewGroupTitle, ComparisonViewGroupWithScenariosSpec, ComparisonViewGroupWithViewsSpec, ComparisonViewSpec, ComparisonViewSubtitle, ComparisonViewTitle, Config, ConfigInitOptions, ConfigOptions, DataSource, Dataset, DatasetKey, DatasetMap, DatasetsResult, DiffPoint, DiffReport, DiffValidity, Dimension, GraphComparisonDatasetReport, GraphComparisonMetadataReport, GraphComparisonReport, GraphInclusion, ImplVar, InputId, InputPosition, InputSetting, InputSettingsSpec, InputVar, LegendItem, LinkItem, LoadedBundle, ModelSpec, NamedBundle, OutputVar, PerfReport, PerfRunner, PerfStats, PositionSetting, RelatedItem, RunSuiteCallbacks, RunSuiteOptions, ScenarioSpec, ScenarioSpecUid, SourceName, Subscript, SuiteReport, SuiteSummary, ValueSetting, VarId, categorizeComparisonTestSummaries, checkReportFromSummary, checkSummaryFromReport, comparisonSummaryFromReport, createConfig, datasetMessage, diffDatasets, diffGraphs, predicateMessage, runSuite, scenarioMessage, suiteSummaryFromReport };
