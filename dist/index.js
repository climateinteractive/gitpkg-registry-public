// src/_shared/task-queue.ts
var TaskQueue = class {
  constructor(processor) {
    this.processor = processor;
    this.taskKeyQueue = [];
    this.taskMap = /* @__PURE__ */ new Map();
    this.processing = false;
    this.stopped = false;
  }
  addTask(key, input, onComplete) {
    if (this.stopped) {
      return;
    }
    if (this.taskMap.has(key)) {
      throw new Error(`Task already added for key ${key}`);
    }
    this.taskKeyQueue.push(key);
    this.taskMap.set(key, {
      input,
      onComplete
    });
    this.processTasksIfNeeded();
  }
  cancelTask(taskKey) {
    const index = this.taskKeyQueue.indexOf(taskKey);
    if (index >= 0) {
      this.taskKeyQueue.splice(index, 1);
    }
    this.taskMap.delete(taskKey);
  }
  shutdown() {
    this.stopped = true;
    this.processing = false;
    this.taskKeyQueue.length = 0;
    this.taskMap.clear();
  }
  processTasksIfNeeded() {
    if (!this.stopped && !this.processing) {
      this.processing = true;
      setTimeout(() => {
        this.processNextTask();
      });
    }
  }
  async processNextTask() {
    var _a, _b;
    const taskKey = this.taskKeyQueue.shift();
    if (!taskKey) {
      return;
    }
    const task = this.taskMap.get(taskKey);
    if (task) {
      this.taskMap.delete(taskKey);
    } else {
      return;
    }
    let output;
    try {
      output = await this.processor.process(task.input);
    } catch (e) {
      if (!this.stopped) {
        this.shutdown();
        (_a = this.onIdle) == null ? void 0 : _a.call(this, e);
      }
      return;
    }
    task.onComplete(output);
    if (this.taskKeyQueue.length > 0) {
      setTimeout(() => {
        this.processNextTask();
      });
    } else {
      this.processing = false;
      if (!this.stopped) {
        (_b = this.onIdle) == null ? void 0 : _b.call(this);
      }
    }
  }
};

// src/check/check-data-coordinator.ts
var CheckDataCoordinator = class {
  constructor(bundleModel) {
    this.bundleModel = bundleModel;
    this.taskQueue = new TaskQueue({
      process: async (request) => {
        const result = await this.bundleModel.getDatasetsForScenario(request.scenarioSpec, [request.datasetKey]);
        const dataset = result.datasetMap.get(request.datasetKey);
        return {
          dataset
        };
      }
    });
  }
  requestDataset(requestKey, scenarioSpec, datasetKey, onResponse) {
    const request = {
      scenarioSpec,
      datasetKey
    };
    this.taskQueue.addTask(requestKey, request, (response) => {
      onResponse(response.dataset);
    });
  }
  cancelRequest(key) {
    this.taskQueue.cancelTask(key);
  }
};

// src/check/check-report.ts
import assertNever2 from "assert-never";

// src/check/check-predicate.ts
import assertNever from "assert-never";
function symbolForPredicateOp(op) {
  switch (op) {
    case "gt":
      return ">";
    case "gte":
      return ">=";
    case "lt":
      return "<";
    case "lte":
      return "<=";
    case "eq":
      return "==";
    case "approx":
      return "\u2248";
    default:
      assertNever(op);
  }
}

// src/check/check-report.ts
function buildCheckReport(checkPlan, checkResults) {
  const groupReports = [];
  for (const groupPlan of checkPlan.groups) {
    const testReports = [];
    for (const testPlan of groupPlan.tests) {
      let testStatus = "passed";
      const scenarioReports = [];
      for (const scenarioPlan of testPlan.scenarios) {
        let scenarioStatus = "passed";
        if (scenarioPlan.checkScenario.spec === void 0) {
          testStatus = "error";
          scenarioStatus = "error";
        }
        const datasetReports = [];
        for (const datasetPlan of scenarioPlan.datasets) {
          let datasetStatus = "passed";
          if (datasetPlan.checkDataset.datasetKey === void 0) {
            testStatus = "error";
            scenarioStatus = "error";
            datasetStatus = "error";
          }
          const predicateReports = [];
          for (const predicatePlan of datasetPlan.predicates) {
            const checkKey = predicatePlan.checkKey;
            const checkResult = checkResults.get(checkKey);
            if (checkResult) {
              if (checkResult.status !== "passed") {
                if (checkResult.status === "error") {
                  testStatus = "error";
                  scenarioStatus = "error";
                  datasetStatus = "error";
                } else if (checkResult.status === "failed" && testStatus !== "error") {
                  testStatus = "failed";
                  scenarioStatus = "failed";
                  datasetStatus = "failed";
                }
              }
              predicateReports.push(predicateReport(predicatePlan, checkKey, checkResult));
            } else {
              predicateReports.push(predicateReport(predicatePlan, checkKey, { status: "passed" }));
            }
          }
          datasetReports.push({
            checkDataset: datasetPlan.checkDataset,
            status: datasetStatus,
            predicates: predicateReports
          });
        }
        scenarioReports.push({
          checkScenario: scenarioPlan.checkScenario,
          status: scenarioStatus,
          datasets: datasetReports
        });
      }
      testReports.push({
        name: testPlan.name,
        status: testStatus,
        scenarios: scenarioReports
      });
    }
    groupReports.push({
      name: groupPlan.name,
      tests: testReports
    });
  }
  return {
    groups: groupReports
  };
}
function predicateReport(predicatePlan, checkKey, result) {
  if (result.status === "error") {
    return {
      checkKey,
      result,
      opRefs: /* @__PURE__ */ new Map(),
      opValues: []
    };
  }
  const predicateSpec = predicatePlan.action.predicateSpec;
  const opRefs = /* @__PURE__ */ new Map();
  const opValues = [];
  function addOp(op) {
    var _a, _b;
    const sym = symbolForPredicateOp(op);
    const predOp = predicateSpec[op];
    if (predOp !== void 0) {
      let opRef;
      let opValue;
      if (typeof predOp === "number") {
        const opConstantRef = {
          kind: "constant",
          value: predOp
        };
        opRef = opConstantRef;
        opValue = `${sym} ${predOp}`;
      } else {
        const dataRef = (_a = predicatePlan.dataRefs) == null ? void 0 : _a.get(op);
        if (!dataRef) {
          return;
        }
        const opDataRef = {
          kind: "data",
          dataRef
        };
        opRef = opDataRef;
        opValue = `${sym} '${dataRef.dataset.name}'`;
        const refScenarioSpec = (_b = dataRef.scenario) == null ? void 0 : _b.spec;
        if (!refScenarioSpec) {
          return;
        }
        if (predOp.scenario === "inherit") {
          opValue += ` (w/ same scenario)`;
        } else {
          if (refScenarioSpec.kind === "all-inputs" && refScenarioSpec.position === "at-default") {
            opValue += ` (w/ default scenario)`;
          } else {
            opValue += ` (w/ configured scenario)`;
          }
        }
      }
      if (op === "approx") {
        const tolerance = predicateSpec.tolerance || 0.1;
        opValue += ` \xB1${tolerance}`;
      }
      opRefs.set(op, opRef);
      opValues.push(opValue);
    }
  }
  addOp("gt");
  addOp("gte");
  addOp("lt");
  addOp("lte");
  addOp("eq");
  addOp("approx");
  if (opValues.length === 0) {
    opValues.push("INVALID PREDICATE");
  }
  return {
    checkKey,
    result,
    opRefs,
    opValues,
    time: predicateSpec.time,
    tolerance: predicateSpec.tolerance
  };
}
function scenarioMessage(scenario, bold) {
  const checkScenario = scenario.checkScenario;
  if (checkScenario.spec === void 0) {
    if (checkScenario.error) {
      switch (checkScenario.error.kind) {
        case "unknown-input-group":
          return `error: input group ${bold(checkScenario.error.name)} is unknown`;
        case "empty-input-group":
          return `error: input group ${bold(checkScenario.error.name)} is empty`;
        default:
          assertNever2(checkScenario.error.kind);
      }
    } else {
      const badInputNames = checkScenario.inputDescs.filter((d) => d.inputVar === void 0).map((d) => bold(d.name));
      const label = badInputNames.length === 1 ? "input" : "inputs";
      return `error: unknown ${label} ${badInputNames.join(", ")}`;
    }
  }
  function positionName(position) {
    switch (position) {
      case "at-default":
        return "default";
      case "at-minimum":
        return "minimum";
      case "at-maximum":
        return "maximum";
      default:
        assertNever2(position);
    }
  }
  function inputMessage(inputDesc) {
    let msg = bold(inputDesc.name);
    if (inputDesc.position) {
      msg += ` is at ${bold(positionName(inputDesc.position))}`;
      if (inputDesc.value !== void 0) {
        msg += ` (${inputDesc.value})`;
      }
    } else if (inputDesc.value !== void 0) {
      msg += ` is ${bold(inputDesc.value.toString())}`;
    }
    return msg;
  }
  if (checkScenario.spec.kind === "all-inputs") {
    const position = checkScenario.spec.position;
    return `when ${bold("all inputs")} are at ${bold(positionName(position))}...`;
  } else if (checkScenario.inputGroupName) {
    let position = "at-default";
    if (checkScenario.spec.settings[0].kind === "position") {
      position = checkScenario.spec.settings[0].position;
    }
    const groupName = checkScenario.inputGroupName;
    return `when all inputs in ${bold(groupName)} are at ${bold(positionName(position))}...`;
  } else {
    const inputMessages = checkScenario.inputDescs.map(inputMessage).join(" and ");
    return `when ${inputMessages}...`;
  }
}
function datasetMessage(dataset, bold) {
  const checkDataset = dataset.checkDataset;
  if (checkDataset.datasetKey === void 0) {
    return `error: ${bold(checkDataset.name)} did not match any datasets`;
  } else {
    return `then ${bold(checkDataset.name)}...`;
  }
}
function predicateMessage(predicate, bold) {
  const result = predicate.result;
  if (result.status === "error") {
    if (result.message) {
      return `error: ${predicate.result.message}`;
    } else if (result.errorInfo) {
      switch (result.errorInfo.kind) {
        case "unknown-dataset":
          return `error: referenced dataset ${bold(result.errorInfo.name)} is unknown`;
        case "unknown-input":
          return `error: referenced input ${bold(result.errorInfo.name)} is unknown`;
        case "unknown-input-group":
          return `error: referenced input group ${bold(result.errorInfo.name)} is unknown`;
        case "empty-input-group":
          return `error: referenced input group ${bold(result.errorInfo.name)} is empty`;
        default:
          assertNever2(result.errorInfo.kind);
      }
    } else {
      return `unknown error`;
    }
  }
  const predicateParts = predicate.opValues.map(bold).join(" and ");
  let msg = `should be ${predicateParts}`;
  if (predicate.time !== void 0) {
    if (typeof predicate.time === "number") {
      msg += ` in ${bold(predicate.time.toString())}`;
    } else {
      let minTime;
      let maxTime;
      let minIncl;
      let maxIncl;
      if (Array.isArray(predicate.time)) {
        const timeSpec = predicate.time;
        minTime = timeSpec[0];
        maxTime = timeSpec[1];
        minIncl = true;
        maxIncl = true;
      } else {
        const timeSpec = predicate.time;
        if (timeSpec.after_excl !== void 0) {
          minTime = timeSpec.after_excl;
          minIncl = false;
        } else if (timeSpec.after_incl !== void 0) {
          minTime = timeSpec.after_incl;
          minIncl = true;
        }
        if (timeSpec.before_excl !== void 0) {
          maxTime = timeSpec.before_excl;
          maxIncl = false;
        } else if (timeSpec.before_incl !== void 0) {
          maxTime = timeSpec.before_incl;
          maxIncl = true;
        }
      }
      if (minTime !== void 0 && maxTime !== void 0) {
        const prefix = minIncl ? "[" : "(";
        const suffix = maxIncl ? "]" : ")";
        const range = `${prefix}${minTime}, ${maxTime}${suffix}`;
        msg += ` in ${bold(range)}`;
      } else if (minTime !== void 0) {
        const prefix = minIncl ? "in/after" : "after";
        msg += ` ${prefix} ${bold(minTime.toString())}`;
      } else if (maxTime !== void 0) {
        const prefix = maxIncl ? "in/before" : "before";
        msg += ` ${prefix} ${bold(maxTime.toString())}`;
      }
    }
  }
  if (predicate.result.status === "failed") {
    if (predicate.result.failValue !== void 0) {
      msg += ` but got ${bold(predicate.result.failValue.toString())}`;
      if (predicate.result.failRefValue !== void 0) {
        const failSym = symbolForPredicateOp(predicate.result.failOp);
        const refValue = `${failSym} ${predicate.result.failRefValue.toString()}`;
        msg += ` (expected ${bold(refValue)})`;
      }
    } else if (predicate.result.message) {
      msg += ` but got ${bold(predicate.result.message)}`;
    }
    if (predicate.result.failTime !== void 0) {
      msg += ` in ${bold(predicate.result.failTime.toString())}`;
    }
  } else if (predicate.result.status === "error" && predicate.result.message) {
    msg += ` but got error: ${bold(predicate.result.message)}`;
  }
  return msg;
}

// src/check/check-summary.ts
import { assertNever as assertNever6 } from "assert-never";

// src/check/check-parser.ts
import Ajv from "ajv";
import { err, ok } from "neverthrow";
import yaml from "yaml";

// src/check/check.schema.js
var check_schema_default = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "Model Check Test",
  type: "array",
  description: "A group of tests.",
  items: {
    $ref: "#/$defs/group"
  },
  $defs: {
    group: {
      type: "object",
      additionalProperties: false,
      properties: {
        describe: {
          type: "string"
        },
        tests: {
          type: "array",
          items: {
            $ref: "#/$defs/test"
          }
        }
      },
      required: ["describe", "tests"]
    },
    test: {
      type: "object",
      additionalProperties: false,
      properties: {
        it: {
          type: "string"
        },
        scenarios: {
          type: "array",
          items: {
            $ref: "#/$defs/scenario"
          },
          minItems: 1
        },
        datasets: {
          type: "array",
          items: {
            $ref: "#/$defs/dataset"
          },
          minItems: 1
        },
        predicates: {
          type: "array",
          items: {
            $ref: "#/$defs/predicate"
          },
          minItems: 1
        }
      },
      required: ["it", "datasets", "predicates"]
    },
    scenario: {
      oneOf: [
        { $ref: "#/$defs/scenario_with_input_at_position" },
        { $ref: "#/$defs/scenario_with_input_at_value" },
        { $ref: "#/$defs/scenario_with_multiple_input_settings" },
        { $ref: "#/$defs/scenario_with_inputs_in_preset_at_position" },
        { $ref: "#/$defs/scenario_with_inputs_in_group_at_position" },
        { $ref: "#/$defs/scenario_preset" },
        { $ref: "#/$defs/scenario_expand_for_each_input_in_group" }
      ]
    },
    scenario_position: {
      type: "string",
      enum: ["min", "max", "default"]
    },
    scenario_with_input_at_position: {
      type: "object",
      additionalProperties: false,
      properties: {
        with: {
          type: "string"
        },
        at: {
          $ref: "#/$defs/scenario_position"
        }
      },
      required: ["with", "at"]
    },
    scenario_with_input_at_value: {
      type: "object",
      additionalProperties: false,
      properties: {
        with: {
          type: "string"
        },
        at: {
          type: "number"
        }
      },
      required: ["with", "at"]
    },
    scenario_input_at_position: {
      type: "object",
      additionalProperties: false,
      properties: {
        input: {
          type: "string"
        },
        at: {
          $ref: "#/$defs/scenario_position"
        }
      },
      required: ["input", "at"]
    },
    scenario_input_at_value: {
      type: "object",
      additionalProperties: false,
      properties: {
        input: {
          type: "string"
        },
        at: {
          type: "number"
        }
      },
      required: ["input", "at"]
    },
    scenario_input_setting: {
      oneOf: [{ $ref: "#/$defs/scenario_input_at_position" }, { $ref: "#/$defs/scenario_input_at_value" }]
    },
    scenario_input_setting_array: {
      type: "array",
      items: {
        $ref: "#/$defs/scenario_input_setting"
      },
      minItems: 1
    },
    scenario_with_multiple_input_settings: {
      type: "object",
      additionalProperties: false,
      properties: {
        with: {
          $ref: "#/$defs/scenario_input_setting_array"
        }
      },
      required: ["with"]
    },
    scenario_with_inputs_in_preset_at_position: {
      type: "object",
      additionalProperties: false,
      properties: {
        with_inputs: {
          type: "string",
          enum: ["all"]
        },
        at: {
          $ref: "#/$defs/scenario_position"
        }
      },
      required: ["with_inputs", "at"]
    },
    scenario_with_inputs_in_group_at_position: {
      type: "object",
      additionalProperties: false,
      properties: {
        with_inputs_in: {
          type: "string"
        },
        at: {
          $ref: "#/$defs/scenario_position"
        }
      },
      required: ["with_inputs_in", "at"]
    },
    scenario_preset: {
      type: "object",
      additionalProperties: false,
      properties: {
        preset: {
          type: "string",
          enum: ["matrix"]
        }
      },
      required: ["preset"]
    },
    scenario_expand_for_each_input_in_group: {
      type: "object",
      additionalProperties: false,
      properties: {
        scenarios_for_each_input_in: {
          type: "string"
        },
        at: {
          $ref: "#/$defs/scenario_position"
        }
      },
      required: ["scenarios_for_each_input_in", "at"]
    },
    dataset: {
      oneOf: [{ $ref: "#/$defs/dataset_name" }, { $ref: "#/$defs/dataset_group" }, { $ref: "#/$defs/dataset_matching" }]
    },
    dataset_name: {
      type: "object",
      additionalProperties: false,
      properties: {
        name: {
          type: "string"
        },
        source: {
          type: "string"
        }
      },
      required: ["name"]
    },
    dataset_group: {
      type: "object",
      additionalProperties: false,
      properties: {
        group: {
          type: "string"
        }
      },
      required: ["group"]
    },
    dataset_matching: {
      type: "object",
      additionalProperties: false,
      properties: {
        matching: {
          type: "object",
          additionalProperties: false,
          properties: {
            type: {
              type: "string"
            }
          },
          required: ["type"]
        }
      },
      required: ["matching"]
    },
    predicate: {
      type: "object",
      oneOf: [
        { $ref: "#/$defs/predicate_gt" },
        { $ref: "#/$defs/predicate_gte" },
        { $ref: "#/$defs/predicate_lt" },
        { $ref: "#/$defs/predicate_lte" },
        { $ref: "#/$defs/predicate_gt_lt" },
        { $ref: "#/$defs/predicate_gt_lte" },
        { $ref: "#/$defs/predicate_gte_lt" },
        { $ref: "#/$defs/predicate_gte_lte" },
        { $ref: "#/$defs/predicate_eq" },
        { $ref: "#/$defs/predicate_approx" }
      ]
    },
    predicate_gt: {
      type: "object",
      additionalProperties: false,
      properties: {
        gt: { $ref: "#/$defs/predicate_ref" },
        time: { $ref: "#/$defs/predicate_time" }
      },
      required: ["gt"]
    },
    predicate_gte: {
      type: "object",
      additionalProperties: false,
      properties: {
        gte: { $ref: "#/$defs/predicate_ref" },
        time: { $ref: "#/$defs/predicate_time" }
      },
      required: ["gte"]
    },
    predicate_lt: {
      type: "object",
      additionalProperties: false,
      properties: {
        lt: { $ref: "#/$defs/predicate_ref" },
        time: { $ref: "#/$defs/predicate_time" }
      },
      required: ["lt"]
    },
    predicate_lte: {
      type: "object",
      additionalProperties: false,
      properties: {
        lte: { $ref: "#/$defs/predicate_ref" },
        time: { $ref: "#/$defs/predicate_time" }
      },
      required: ["lte"]
    },
    predicate_gt_lt: {
      type: "object",
      additionalProperties: false,
      properties: {
        gt: { $ref: "#/$defs/predicate_ref" },
        lt: { $ref: "#/$defs/predicate_ref" },
        time: { $ref: "#/$defs/predicate_time" }
      },
      required: ["gt", "lt"]
    },
    predicate_gt_lte: {
      type: "object",
      additionalProperties: false,
      properties: {
        gt: { $ref: "#/$defs/predicate_ref" },
        lte: { $ref: "#/$defs/predicate_ref" },
        time: { $ref: "#/$defs/predicate_time" }
      },
      required: ["gt", "lte"]
    },
    predicate_gte_lt: {
      type: "object",
      additionalProperties: false,
      properties: {
        gte: { $ref: "#/$defs/predicate_ref" },
        lt: { $ref: "#/$defs/predicate_ref" },
        time: { $ref: "#/$defs/predicate_time" }
      },
      required: ["gte", "lt"]
    },
    predicate_gte_lte: {
      type: "object",
      additionalProperties: false,
      properties: {
        gte: { $ref: "#/$defs/predicate_ref" },
        lte: { $ref: "#/$defs/predicate_ref" },
        time: { $ref: "#/$defs/predicate_time" }
      },
      required: ["gte", "lte"]
    },
    predicate_eq: {
      type: "object",
      additionalProperties: false,
      properties: {
        eq: { $ref: "#/$defs/predicate_ref" },
        time: { $ref: "#/$defs/predicate_time" }
      },
      required: ["eq"]
    },
    predicate_approx: {
      type: "object",
      additionalProperties: false,
      properties: {
        approx: { $ref: "#/$defs/predicate_ref" },
        tolerance: { type: "number" },
        time: { $ref: "#/$defs/predicate_time" }
      },
      required: ["approx"]
    },
    predicate_ref: {
      oneOf: [{ $ref: "#/$defs/predicate_ref_constant" }, { $ref: "#/$defs/predicate_ref_data" }]
    },
    predicate_ref_constant: {
      type: "number"
    },
    predicate_ref_data: {
      type: "object",
      additionalProperties: false,
      properties: {
        dataset: { $ref: "#/$defs/predicate_ref_data_dataset" },
        scenario: { $ref: "#/$defs/predicate_ref_data_scenario" }
      },
      required: ["dataset"]
    },
    predicate_ref_data_dataset: {
      oneOf: [{ $ref: "#/$defs/dataset_name" }, { $ref: "#/$defs/predicate_ref_data_dataset_special" }]
    },
    predicate_ref_data_dataset_special: {
      type: "string",
      enum: ["inherit"]
    },
    predicate_ref_data_scenario: {
      oneOf: [
        { $ref: "#/$defs/scenario_with_input_at_position" },
        { $ref: "#/$defs/scenario_with_input_at_value" },
        { $ref: "#/$defs/scenario_with_multiple_input_settings" },
        { $ref: "#/$defs/scenario_with_inputs_in_preset_at_position" },
        { $ref: "#/$defs/scenario_with_inputs_in_group_at_position" },
        { $ref: "#/$defs/predicate_ref_data_scenario_special" }
      ]
    },
    predicate_ref_data_scenario_special: {
      type: "string",
      enum: ["inherit"]
    },
    predicate_time: {
      oneOf: [
        { $ref: "#/$defs/predicate_time_single" },
        { $ref: "#/$defs/predicate_time_pair" },
        { $ref: "#/$defs/predicate_time_gt" },
        { $ref: "#/$defs/predicate_time_gte" },
        { $ref: "#/$defs/predicate_time_lt" },
        { $ref: "#/$defs/predicate_time_lte" },
        { $ref: "#/$defs/predicate_time_gt_lt" },
        { $ref: "#/$defs/predicate_time_gt_lte" },
        { $ref: "#/$defs/predicate_time_gte_lt" },
        { $ref: "#/$defs/predicate_time_gte_lte" }
      ]
    },
    predicate_time_single: {
      type: "number"
    },
    predicate_time_pair: {
      type: "array",
      items: [{ type: "number" }, { type: "number" }],
      minItems: 2,
      maxItems: 2
    },
    predicate_time_gt: {
      type: "object",
      additionalProperties: false,
      properties: {
        after_excl: { type: "number" }
      },
      required: ["after_excl"]
    },
    predicate_time_gte: {
      type: "object",
      additionalProperties: false,
      properties: {
        after_incl: { type: "number" }
      },
      required: ["after_incl"]
    },
    predicate_time_lt: {
      type: "object",
      additionalProperties: false,
      properties: {
        before_excl: { type: "number" }
      },
      required: ["before_excl"]
    },
    predicate_time_lte: {
      type: "object",
      additionalProperties: false,
      properties: {
        before_incl: { type: "number" }
      },
      required: ["before_incl"]
    },
    predicate_time_gt_lt: {
      type: "object",
      additionalProperties: false,
      properties: {
        after_excl: { type: "number" },
        before_excl: { type: "number" }
      },
      required: ["after_excl", "before_excl"]
    },
    predicate_time_gt_lte: {
      type: "object",
      additionalProperties: false,
      properties: {
        after_excl: { type: "number" },
        before_incl: { type: "number" }
      },
      required: ["after_excl", "before_incl"]
    },
    predicate_time_gte_lt: {
      type: "object",
      additionalProperties: false,
      properties: {
        after_incl: { type: "number" },
        before_excl: { type: "number" }
      },
      required: ["after_incl", "before_excl"]
    },
    predicate_time_gte_lte: {
      type: "object",
      additionalProperties: false,
      properties: {
        after_incl: { type: "number" },
        before_incl: { type: "number" }
      },
      required: ["after_incl", "before_incl"]
    }
  }
};

// src/check/check-parser.ts
function parseTestYaml(yamlStrings) {
  const groups = [];
  const ajv = new Ajv();
  const validate = ajv.compile(check_schema_default);
  for (const yamlString of yamlStrings) {
    const parsed = yaml.parse(yamlString);
    if (validate(parsed)) {
      for (const group of parsed) {
        groups.push(group);
      }
    } else {
      let msg = "Failed to parse YAML check definitions";
      for (const error of validate.errors || []) {
        if (error.message) {
          msg += `
${error.message}`;
        }
      }
      return err(new Error(msg));
    }
  }
  const checkSpec = {
    groups
  };
  return ok(checkSpec);
}

// src/check/check-planner.ts
import assertNever5 from "assert-never";

// src/check/check-func.ts
var passed = {
  status: "passed"
};
var gt = (a, b) => a > b;
var gte = (a, b) => a >= b;
var lt = (a, b) => a < b;
var lte = (a, b) => a <= b;
var eq = (a, b) => a === b;
var approx = (tolerance) => {
  const f = (a, b) => {
    return a >= b - tolerance && a <= b + tolerance;
  };
  return f;
};
function checkFunc(spec) {
  function addCheckValueFunc(op, compareFunc) {
    const refSpec = spec[op];
    if (refSpec === void 0) {
      return;
    }
    if (typeof refSpec === "number") {
      checkValueFuncs.push((value, time) => {
        if (compareFunc(value, refSpec)) {
          return passed;
        } else {
          return {
            status: "failed",
            failValue: value,
            failTime: time
          };
        }
      });
    } else {
      checkValueFuncs.push((value, time, refDatasets) => {
        const refDataset = refDatasets == null ? void 0 : refDatasets.get(op);
        if (refDataset === void 0) {
          return {
            status: "error",
            message: "unhandled data reference"
          };
        }
        const refValue = refDataset.get(time);
        if (refValue !== void 0) {
          if (compareFunc(value, refValue)) {
            return passed;
          } else {
            return {
              status: "failed",
              failValue: value,
              failOp: op,
              failRefValue: refValue,
              failTime: time
            };
          }
        } else {
          return {
            status: "failed",
            message: "no reference value",
            failTime: time
          };
        }
      });
    }
  }
  const checkValueFuncs = [];
  addCheckValueFunc("gt", gt);
  addCheckValueFunc("gte", gte);
  addCheckValueFunc("lt", lt);
  addCheckValueFunc("lte", lte);
  addCheckValueFunc("eq", eq);
  if (spec.approx !== void 0) {
    const tolerance = spec.tolerance || 0.1;
    addCheckValueFunc("approx", approx(tolerance));
  }
  const checkValue = (value, time, refDatasets) => {
    for (const f of checkValueFuncs) {
      const result = f(value, time, refDatasets);
      if (result.status !== "passed") {
        return result;
      }
    }
    return passed;
  };
  if (spec.time !== void 0 && typeof spec.time === "number") {
    const time = spec.time;
    return (dataset, refDatasets) => {
      const value = dataset.get(time);
      if (value !== void 0) {
        return checkValue(value, time, refDatasets);
      } else {
        return {
          status: "failed",
          message: "no value",
          failTime: time
        };
      }
    };
  } else {
    let checkTime;
    if (spec.time !== void 0) {
      if (Array.isArray(spec.time)) {
        const timeSpec = spec.time;
        checkTime = (time) => time >= timeSpec[0] && time <= timeSpec[1];
      } else {
        const checkTimeFuncs = [];
        const timeSpec = spec.time;
        if (timeSpec.after_excl !== void 0) {
          checkTimeFuncs.push((time) => time > timeSpec.after_excl);
        }
        if (timeSpec.after_incl !== void 0) {
          checkTimeFuncs.push((time) => time >= timeSpec.after_incl);
        }
        if (timeSpec.before_excl !== void 0) {
          checkTimeFuncs.push((time) => time < timeSpec.before_excl);
        }
        if (timeSpec.before_incl !== void 0) {
          checkTimeFuncs.push((time) => time <= timeSpec.before_incl);
        }
        checkTime = (time) => {
          for (const f of checkTimeFuncs) {
            if (!f(time)) {
              return false;
            }
          }
          return true;
        };
      }
    } else {
      checkTime = () => true;
    }
    return (dataset, refDatasets) => {
      for (const [time, value] of dataset) {
        if (checkTime(time)) {
          const result = checkValue(value, time, refDatasets);
          if (result.status !== "passed") {
            return result;
          }
        }
      }
      return passed;
    };
  }
}

// src/check/check-action.ts
function actionForPredicate(predicateSpec) {
  return {
    predicateSpec,
    run: checkFunc(predicateSpec)
  };
}

// src/_shared/combo.ts
function cartesianProductOf(arr) {
  return arr.reduce(
    (a, b) => {
      return a.map((x) => b.map((y) => x.concat([y]))).reduce((v, w) => v.concat(w), []);
    },
    [[]]
  );
}

// src/check/check-dataset.ts
function expandDatasets(modelSpec, datasetSpec) {
  var _a;
  let result;
  if (datasetSpec.name) {
    result = matchByName(modelSpec, datasetSpec.name, datasetSpec.source);
  } else if (datasetSpec.group) {
    result = matchByGroup(modelSpec, datasetSpec.group);
  } else if ((_a = datasetSpec.matching) == null ? void 0 : _a.type) {
    result = matchByType(modelSpec, datasetSpec.matching.type);
  }
  if (result.error) {
    return [
      {
        name: result.error.name,
        error: result.error.kind
      }
    ];
  }
  const matches = result.matches;
  const checkDatasets = [];
  for (const match of matches) {
    if (match.outputVar) {
      checkDatasets.push({
        datasetKey: match.datasetKey,
        name: match.outputVar.varName
      });
    } else if (match.implVar) {
      const implVar = match.implVar;
      if (implVar.dimensions.length > 0) {
        const baseDatasetKey = match.datasetKey;
        const subscripts = [...implVar.dimensions.map((dim) => dim.subscripts)];
        const subscriptCombos = cartesianProductOf(subscripts);
        for (const subscriptCombo of subscriptCombos) {
          const subIdParts = subscriptCombo.map((sub) => `[${sub.id}]`).join("");
          const subNameParts = subscriptCombo.map((sub) => sub.name).join(",");
          checkDatasets.push({
            datasetKey: `${baseDatasetKey}${subIdParts}`,
            name: `${implVar.varName}[${subNameParts}]`
          });
        }
      } else {
        checkDatasets.push({
          datasetKey: match.datasetKey,
          name: implVar.varName
        });
      }
    }
  }
  return checkDatasets;
}
function matchByName(modelSpec, datasetName, datasetSource) {
  var _a;
  const varNameToMatch = datasetName.toLowerCase();
  const sourceToMatch = datasetSource == null ? void 0 : datasetSource.toLowerCase();
  for (const [datasetKey, outputVar] of modelSpec.outputVars) {
    if (((_a = outputVar.sourceName) == null ? void 0 : _a.toLowerCase()) === sourceToMatch && outputVar.varName.toLowerCase() === varNameToMatch) {
      return {
        matches: [
          {
            datasetKey,
            outputVar
          }
        ]
      };
    }
  }
  for (const [datasetKey, implVar] of modelSpec.implVars) {
    if (implVar.varName.toLowerCase() === varNameToMatch) {
      return {
        matches: [
          {
            datasetKey,
            implVar
          }
        ]
      };
    }
  }
  return {
    matches: [],
    error: {
      kind: "no-matches-for-dataset",
      name: datasetName
    }
  };
}
function matchByGroup(modelSpec, groupName) {
  let matchedGroupName;
  let matchedGroupDatasetKeys;
  if (modelSpec.datasetGroups) {
    const groupToMatch = groupName.toLowerCase();
    for (const [group, datasetKeys] of modelSpec.datasetGroups) {
      if (group.toLowerCase() === groupToMatch) {
        matchedGroupName = group;
        matchedGroupDatasetKeys = datasetKeys;
        break;
      }
    }
  }
  if (matchedGroupName === void 0) {
    return {
      matches: [],
      error: {
        kind: "no-matches-for-group",
        name: groupName
      }
    };
  }
  const matches = [];
  for (const datasetKey of matchedGroupDatasetKeys) {
    const outputVar = modelSpec.outputVars.get(datasetKey);
    if (outputVar) {
      matches.push({
        datasetKey,
        outputVar
      });
      continue;
    }
    const implVar = modelSpec.implVars.get(datasetKey);
    if (implVar) {
      matches.push({
        datasetKey,
        implVar
      });
      continue;
    }
    return {
      matches: [],
      error: {
        kind: "no-matches-for-dataset",
        name: datasetKey
      }
    };
  }
  if (matches.length === 0) {
    return {
      matches: [],
      error: {
        kind: "no-matches-for-group",
        name: matchedGroupName
      }
    };
  }
  return {
    matches
  };
}
function matchByType(modelSpec, varTypeToMatch) {
  const matches = [];
  for (const [datasetKey, implVar] of modelSpec.implVars) {
    if (implVar.varType === varTypeToMatch) {
      matches.push({
        datasetKey,
        implVar
      });
    }
  }
  if (matches.length === 0) {
    return {
      matches: [],
      error: {
        kind: "no-matches-for-type",
        name: varTypeToMatch
      }
    };
  }
  return {
    matches
  };
}

// src/check/check-scenario.ts
import assertNever4 from "assert-never";

// src/_shared/scenario-specs.ts
import { assertNever as assertNever3 } from "assert-never";
function positionSetting(inputVarId, position) {
  return {
    kind: "position",
    inputVarId,
    position
  };
}
function valueSetting(inputVarId, value) {
  return {
    kind: "value",
    inputVarId,
    value
  };
}
function inputSettingsSpec(settings) {
  const uidParts = settings.map((setting) => {
    switch (setting.kind) {
      case "position":
        return `${setting.inputVarId}_at_${keyForInputPosition(setting.position)}`;
      case "value":
        return `${setting.inputVarId}_at_${setting.value}`;
      default:
        assertNever3(setting);
    }
  });
  const uid = `inputs_${uidParts.sort().join("_")}`;
  return {
    kind: "input-settings",
    uid,
    settings
  };
}
function inputAtPositionSpec(inputVarId, position) {
  return inputSettingsSpec([positionSetting(inputVarId, position)]);
}
function allInputsAtPositionSpec(position) {
  return {
    kind: "all-inputs",
    uid: `all_inputs_at_${keyForInputPosition(position)}`,
    position
  };
}
function keyForInputPosition(position) {
  switch (position) {
    case "at-default":
      return "default";
    case "at-minimum":
      return "min";
    case "at-maximum":
      return "max";
    default:
      assertNever3(position);
  }
}

// src/check/check-scenario.ts
function expandScenarios(modelSpec, scenarioSpecs, simplify) {
  if (scenarioSpecs.length === 0) {
    const scenarioSpec = {
      with_inputs: "all",
      at: "default"
    };
    return checkScenariosFromSpec(modelSpec, scenarioSpec, simplify);
  }
  const checkScenarios = [];
  for (const scenarioSpec of scenarioSpecs) {
    checkScenarios.push(...checkScenariosFromSpec(modelSpec, scenarioSpec, simplify));
  }
  return checkScenarios;
}
function inputPosition(position) {
  switch (position) {
    case "default":
      return "at-default";
    case "min":
      return "at-minimum";
    case "max":
      return "at-maximum";
    default:
      return void 0;
  }
}
function inputValueAtPosition(inputVar, position) {
  switch (position) {
    case "at-default":
      return inputVar.defaultValue;
    case "at-minimum":
      return inputVar.minValue;
    case "at-maximum":
      return inputVar.maxValue;
    default:
      assertNever4(position);
  }
}
function inputDescAtPosition(inputVar, position) {
  return {
    name: inputVar.varName,
    inputVar,
    position,
    value: inputValueAtPosition(inputVar, position)
  };
}
function inputDescAtValue(inputVar, value) {
  return {
    name: inputVar.varName,
    inputVar,
    value
  };
}
function inputDescForVar(inputVar, at) {
  if (typeof at === "number") {
    const value = at;
    return inputDescAtValue(inputVar, value);
  } else {
    const position = inputPosition(at);
    return inputDescAtPosition(inputVar, position);
  }
}
function inputDescForName(modelSpec, inputName, at) {
  const inputNameToMatch = inputName.toLowerCase();
  const inputVar = [...modelSpec.inputVars.values()].find((inputVar2) => {
    return inputVar2.varName.toLowerCase() === inputNameToMatch;
  });
  if (inputVar) {
    return inputDescForVar(inputVar, at);
  } else {
    return {
      name: inputName
    };
  }
}
function groupForName(modelSpec, groupName) {
  if (modelSpec.inputGroups) {
    const groupToMatch = groupName.toLowerCase();
    for (const [group, inputVars] of modelSpec.inputGroups) {
      if (group.toLowerCase() === groupToMatch) {
        return [group, inputVars];
      }
    }
  }
  return void 0;
}
function errorScenarioForInputGroup(kind, groupName) {
  return {
    inputDescs: [],
    error: {
      kind,
      name: groupName
    }
  };
}
function checkScenarioWithAllInputsAtPosition(position) {
  return {
    spec: allInputsAtPositionSpec(position),
    inputDescs: []
  };
}
function checkScenarioWithInputAtPosition(inputVar, position) {
  const varId = inputVar.varId;
  return {
    spec: inputAtPositionSpec(varId, position),
    inputDescs: [inputDescAtPosition(inputVar, position)]
  };
}
function checkScenarioForInputDescs(groupName, inputDescs) {
  let spec;
  if (inputDescs.every((desc) => desc.inputVar !== void 0)) {
    const settings = inputDescs.map((inputDesc) => {
      const varId = inputDesc.inputVar.varId;
      if (inputDesc.position) {
        return positionSetting(varId, inputDesc.position);
      } else {
        return valueSetting(varId, inputDesc.value);
      }
    });
    spec = inputSettingsSpec(settings);
  } else {
    spec = void 0;
  }
  return {
    spec,
    inputGroupName: groupName,
    inputDescs
  };
}
function checkScenarioForInputSpecs(modelSpec, inputSpecs) {
  const inputDescs = inputSpecs.map((inputSpec) => {
    return inputDescForName(modelSpec, inputSpec.input, inputSpec.at);
  });
  return checkScenarioForInputDescs(void 0, inputDescs);
}
function checkScenarioMatrix(modelSpec, simplify) {
  const checkScenarios = [];
  checkScenarios.push(checkScenarioWithAllInputsAtPosition("at-default"));
  if (!simplify) {
    checkScenarios.push(checkScenarioWithAllInputsAtPosition("at-minimum"));
    checkScenarios.push(checkScenarioWithAllInputsAtPosition("at-maximum"));
    for (const inputVar of modelSpec.inputVars.values()) {
      checkScenarios.push(checkScenarioWithInputAtPosition(inputVar, "at-minimum"));
      checkScenarios.push(checkScenarioWithInputAtPosition(inputVar, "at-maximum"));
    }
  }
  return checkScenarios;
}
function checkScenarioWithAllInputsInGroupAtPosition(modelSpec, groupName, position) {
  const result = groupForName(modelSpec, groupName);
  if (result === void 0) {
    return errorScenarioForInputGroup("unknown-input-group", groupName);
  }
  const [matchedGroupName, inputVars] = result;
  if (inputVars.length === 0) {
    return errorScenarioForInputGroup("empty-input-group", matchedGroupName);
  }
  const inputDescs = [];
  for (const inputVar of inputVars) {
    inputDescs.push(inputDescForVar(inputVar, position));
  }
  return checkScenarioForInputDescs(matchedGroupName, inputDescs);
}
function checkScenariosForEachInputInGroup(modelSpec, groupName, position) {
  const result = groupForName(modelSpec, groupName);
  if (result === void 0) {
    return [errorScenarioForInputGroup("unknown-input-group", groupName)];
  }
  const [matchedGroupName, inputVars] = result;
  if (inputVars.length === 0) {
    return [errorScenarioForInputGroup("empty-input-group", matchedGroupName)];
  }
  const checkScenarios = [];
  for (const inputVar of inputVars) {
    const inputDesc = inputDescForVar(inputVar, position);
    checkScenarios.push(checkScenarioForInputDescs(void 0, [inputDesc]));
  }
  return checkScenarios;
}
function checkScenariosFromSpec(modelSpec, scenarioSpec, simplify) {
  if (scenarioSpec.preset === "matrix") {
    return checkScenarioMatrix(modelSpec, simplify);
  }
  if (scenarioSpec.scenarios_for_each_input_in !== void 0) {
    const groupName = scenarioSpec.scenarios_for_each_input_in;
    const position = scenarioSpec.at;
    return checkScenariosForEachInputInGroup(modelSpec, groupName, position);
  }
  if (scenarioSpec.with !== void 0) {
    if (Array.isArray(scenarioSpec.with)) {
      const inputSpecs = scenarioSpec.with;
      return [checkScenarioForInputSpecs(modelSpec, inputSpecs)];
    } else {
      const inputSpec = {
        input: scenarioSpec.with,
        at: scenarioSpec.at
      };
      return [checkScenarioForInputSpecs(modelSpec, [inputSpec])];
    }
  }
  if (scenarioSpec.with_inputs === "all") {
    const position = inputPosition(scenarioSpec.at);
    return [checkScenarioWithAllInputsAtPosition(position)];
  }
  if (scenarioSpec.with_inputs_in !== void 0) {
    const groupName = scenarioSpec.with_inputs_in;
    const position = scenarioSpec.at;
    return [checkScenarioWithAllInputsInGroupAtPosition(modelSpec, groupName, position)];
  }
  throw new Error(`Unhandled scenario spec: ${JSON.stringify(scenarioSpec)}`);
}

// src/check/check-planner.ts
var CheckPlanner = class {
  constructor(modelSpec) {
    this.modelSpec = modelSpec;
    this.groups = [];
    this.tasks = /* @__PURE__ */ new Map();
    this.dataRefs = /* @__PURE__ */ new Map();
    this.checkKey = 1;
  }
  addAllChecks(checkSpec, simplifyScenarios) {
    for (const groupSpec of checkSpec.groups) {
      const groupName = groupSpec.describe;
      const planTests = [];
      for (const testSpec of groupSpec.tests) {
        const testName = testSpec.it;
        const checkScenarios = expandScenarios(this.modelSpec, testSpec.scenarios || [], simplifyScenarios);
        const checkDatasets = [];
        for (const datasetSpec of testSpec.datasets) {
          checkDatasets.push(...expandDatasets(this.modelSpec, datasetSpec));
        }
        const checkActions = [];
        for (const predicateSpec of testSpec.predicates) {
          checkActions.push(actionForPredicate(predicateSpec));
        }
        const planScenarios = [];
        for (const checkScenario of checkScenarios) {
          if (checkScenario.spec === void 0) {
            planScenarios.push({
              checkScenario,
              datasets: []
            });
            continue;
          }
          const planDatasets = [];
          for (const checkDataset of checkDatasets) {
            if (checkDataset.datasetKey === void 0) {
              planDatasets.push({
                checkDataset,
                predicates: []
              });
              continue;
            }
            const planPredicates = [];
            for (const checkAction of checkActions) {
              const dataRefs = this.addDataRefs(checkAction.predicateSpec, checkScenario, checkDataset);
              const key = this.checkKey++;
              planPredicates.push({
                checkKey: key,
                action: checkAction,
                dataRefs
              });
              this.tasks.set(key, {
                scenario: checkScenario,
                dataset: checkDataset,
                action: checkAction,
                dataRefs
              });
            }
            planDatasets.push({
              checkDataset,
              predicates: planPredicates
            });
          }
          planScenarios.push({
            checkScenario,
            datasets: planDatasets
          });
        }
        planTests.push({
          name: testName,
          scenarios: planScenarios
        });
      }
      this.groups.push({
        name: groupName,
        tests: planTests
      });
    }
  }
  buildPlan() {
    return {
      groups: this.groups,
      tasks: this.tasks,
      dataRefs: this.dataRefs
    };
  }
  addDataRefs(predicateSpec, checkScenario, checkDataset) {
    let dataRefs;
    const addDataRef = (op) => {
      const predOp = predicateSpec[op];
      if (predOp === void 0 || typeof predOp === "number") {
        return;
      }
      let refDataset;
      if (typeof predOp.dataset === "string") {
        switch (predOp.dataset) {
          case "inherit":
            refDataset = checkDataset;
            break;
          default:
            assertNever5(predOp.dataset);
        }
      } else {
        const refDatasetSpec = { name: predOp.dataset.name };
        const matchedRefDatasets = expandDatasets(this.modelSpec, refDatasetSpec);
        if (matchedRefDatasets.length === 1) {
          refDataset = matchedRefDatasets[0];
        } else {
          refDataset = {
            name: predOp.dataset.name
          };
        }
      }
      let refScenario;
      if (typeof predOp.scenario === "string") {
        switch (predOp.scenario) {
          case "inherit":
            refScenario = checkScenario;
            break;
          default:
            assertNever5(predOp.scenario);
        }
      } else {
        const refScenarioSpecs = predOp.scenario ? [predOp.scenario] : [];
        const matchedRefScenarios = expandScenarios(this.modelSpec, refScenarioSpecs, true);
        if (matchedRefScenarios.length === 1) {
          refScenario = matchedRefScenarios[0];
        }
        if (refScenario === void 0) {
          refScenario = {
            inputDescs: []
          };
        }
      }
      let dataRefKey;
      if (refScenario.spec && refDataset.datasetKey) {
        dataRefKey = `${refScenario.spec.uid}::${refDataset.datasetKey}`;
      }
      const dataRef = {
        key: dataRefKey,
        dataset: refDataset,
        scenario: refScenario
      };
      if (dataRefKey) {
        this.dataRefs.set(dataRefKey, dataRef);
      }
      if (dataRefs === void 0) {
        dataRefs = /* @__PURE__ */ new Map();
      }
      dataRefs.set(op, dataRef);
    };
    addDataRef("gt");
    addDataRef("gte");
    addDataRef("lt");
    addDataRef("lte");
    addDataRef("eq");
    addDataRef("approx");
    return dataRefs;
  }
};

// src/check/check-summary.ts
function checkSummaryFromReport(checkReport) {
  const predicateSummaries = [];
  for (const group of checkReport.groups) {
    for (const test of group.tests) {
      for (const scenario of test.scenarios) {
        for (const dataset of scenario.datasets) {
          for (const predicate of dataset.predicates) {
            switch (predicate.result.status) {
              case "passed":
                break;
              case "failed":
              case "error":
                predicateSummaries.push({
                  checkKey: predicate.checkKey,
                  result: predicate.result
                });
                break;
              default:
                assertNever6(predicate.result.status);
            }
          }
        }
      }
    }
  }
  return {
    predicateSummaries
  };
}
function checkReportFromSummary(checkConfig, checkSummary) {
  const checkSpecResult = parseTestYaml(checkConfig.tests);
  if (checkSpecResult.isErr()) {
    return void 0;
  }
  const checkSpec = checkSpecResult.value;
  const checkPlanner = new CheckPlanner(checkConfig.bundle.model.modelSpec);
  checkPlanner.addAllChecks(checkSpec, false);
  const checkPlan = checkPlanner.buildPlan();
  const checkResults = /* @__PURE__ */ new Map();
  for (const predicateSummary of checkSummary.predicateSummaries) {
    checkResults.set(predicateSummary.checkKey, predicateSummary.result);
  }
  return buildCheckReport(checkPlan, checkResults);
}

// src/comparison/run/comparison-data-coordinator.ts
import { assertNever as assertNever7 } from "assert-never";
var ComparisonDataCoordinator = class {
  constructor(bundleModelL, bundleModelR) {
    this.bundleModelL = bundleModelL;
    this.bundleModelR = bundleModelR;
    this.taskQueue = new TaskQueue({
      process: async (request) => {
        switch (request.kind) {
          case "dataset":
            return this.processDatasetRequest(request);
          case "graph-data":
            return this.processGraphDataRequest(request);
          default:
            assertNever7(request);
        }
      }
    });
  }
  async processDatasetRequest(request) {
    async function fetchDatasets(bundleModel, scenarioSpec) {
      if (scenarioSpec) {
        return bundleModel.getDatasetsForScenario(scenarioSpec, request.datasetKeys);
      } else {
        return void 0;
      }
    }
    const [resultL, resultR] = await Promise.all([
      fetchDatasets(this.bundleModelL, request.scenarioSpecL),
      fetchDatasets(this.bundleModelR, request.scenarioSpecR)
    ]);
    return {
      kind: "dataset",
      datasetMapL: resultL == null ? void 0 : resultL.datasetMap,
      datasetMapR: resultR == null ? void 0 : resultR.datasetMap
    };
  }
  async processGraphDataRequest(request) {
    async function fetchGraphData(bundleModel, scenarioSpec) {
      if (scenarioSpec) {
        return bundleModel.getGraphDataForScenario(scenarioSpec, request.graphId);
      } else {
        return void 0;
      }
    }
    const [graphDataL, graphDataR] = await Promise.all([
      fetchGraphData(this.bundleModelL, request.scenarioSpecL),
      fetchGraphData(this.bundleModelR, request.scenarioSpecR)
    ]);
    return {
      kind: "graph-data",
      graphDataL,
      graphDataR
    };
  }
  requestDatasetMaps(requestKey, scenarioSpecL, scenarioSpecR, datasetKeys, onResponse) {
    const request = {
      kind: "dataset",
      scenarioSpecL,
      scenarioSpecR,
      datasetKeys
    };
    this.taskQueue.addTask(requestKey, request, (response) => {
      if (response.kind === "dataset") {
        onResponse(response.datasetMapL, response.datasetMapR);
      }
    });
  }
  requestGraphData(requestKey, scenarioSpecL, scenarioSpecR, graphId, onResponse) {
    const request = {
      kind: "graph-data",
      scenarioSpecL,
      scenarioSpecR,
      graphId
    };
    this.taskQueue.addTask(requestKey, request, (response) => {
      if (response.kind === "graph-data") {
        onResponse(response.graphDataL, response.graphDataR);
      }
    });
  }
  cancelRequest(key) {
    this.taskQueue.cancelTask(key);
  }
};

// src/comparison/diff-datasets/diff-datasets.ts
function diffDatasets(datasetL, datasetR) {
  let minValueL = Number.MAX_VALUE;
  let maxValueL = Number.MIN_VALUE;
  let minValueR = Number.MAX_VALUE;
  let maxValueR = Number.MIN_VALUE;
  let minValue = Number.MAX_VALUE;
  let maxValue = Number.MIN_VALUE;
  let minRawDiff = Number.MAX_VALUE;
  let maxRawDiff = -1;
  let maxDiffPoint;
  let diffCount = 0;
  let totalRawDiff = 0;
  if (datasetL && datasetR) {
    const times = /* @__PURE__ */ new Set([...datasetL.keys(), ...datasetR.keys()]);
    for (const t of times) {
      const valueL = datasetL.get(t);
      if (valueL !== void 0) {
        if (valueL < minValueL)
          minValueL = valueL;
        if (valueL > maxValueL)
          maxValueL = valueL;
        if (valueL < minValue)
          minValue = valueL;
        if (valueL > maxValue)
          maxValue = valueL;
      }
      const valueR = datasetR.get(t);
      if (valueR !== void 0) {
        if (valueR < minValueR)
          minValueR = valueR;
        if (valueR > maxValueR)
          maxValueR = valueR;
        if (valueR < minValue)
          minValue = valueR;
        if (valueR > maxValue)
          maxValue = valueR;
      }
      if (valueL === void 0 || valueR === void 0) {
        continue;
      }
      const rawDiff = Math.abs(valueR - valueL);
      if (rawDiff < minRawDiff) {
        minRawDiff = rawDiff;
      }
      if (rawDiff > maxRawDiff) {
        maxRawDiff = rawDiff;
        maxDiffPoint = {
          time: t,
          valueL,
          valueR
        };
      }
      diffCount++;
      totalRawDiff += rawDiff;
    }
  }
  function pct(x) {
    return x * 100;
  }
  let minDiff;
  let maxDiff;
  let avgDiff;
  if (minValueL === maxValueL && minValueR === maxValueR) {
    const diff = pct(maxValueL !== 0 ? Math.abs((maxValueR - maxValueL) / maxValueL) : 1);
    minDiff = diff;
    maxDiff = diff;
    avgDiff = diff;
  } else {
    const spread = maxValue - minValue;
    minDiff = pct(spread > 0 ? minRawDiff / spread : 0);
    maxDiff = pct(spread > 0 ? maxRawDiff / spread : 0);
    const avgRawDiff = totalRawDiff / diffCount;
    avgDiff = pct(spread > 0 ? avgRawDiff / spread : 0);
  }
  let validity;
  if (datasetL && datasetR) {
    validity = "both";
  } else if (datasetL) {
    validity = "left-only";
  } else if (datasetR) {
    validity = "right-only";
  } else {
    validity = "neither";
  }
  return {
    validity,
    minValue,
    maxValue,
    avgDiff,
    minDiff,
    maxDiff,
    maxDiffPoint
  };
}

// src/comparison/diff-graphs/diff-graphs.ts
function diffGraphs(graphL, graphR, scenarioKey, testSummaries) {
  let inclusion;
  if (graphL && graphR) {
    inclusion = "both";
  } else if (graphL) {
    inclusion = "left-only";
  } else if (graphR) {
    inclusion = "right-only";
  } else {
    inclusion = "neither";
  }
  const metadataReports = [];
  if ((graphL == null ? void 0 : graphL.metadata) && (graphR == null ? void 0 : graphR.metadata)) {
    const metaKeys = /* @__PURE__ */ new Set();
    for (const key of graphL.metadata.keys()) {
      metaKeys.add(key);
    }
    for (const key of graphR.metadata.keys()) {
      metaKeys.add(key);
    }
    for (const key of metaKeys) {
      const valueL = graphL.metadata.get(key);
      const valueR = graphR.metadata.get(key);
      if (valueL !== valueR) {
        metadataReports.push({
          key,
          valueL,
          valueR
        });
      }
    }
  }
  const datasetReports = [];
  if (graphL && graphR) {
    const datasetKeys = /* @__PURE__ */ new Set();
    for (const dataset of graphL.datasets) {
      datasetKeys.add(dataset.datasetKey);
    }
    for (const dataset of graphR.datasets) {
      datasetKeys.add(dataset.datasetKey);
    }
    for (const datasetKey of datasetKeys) {
      const testSummary = testSummaries.find((summary) => summary.d === datasetKey && summary.s === scenarioKey);
      const maxDiff = testSummary == null ? void 0 : testSummary.md;
      datasetReports.push({
        datasetKey,
        maxDiff
      });
    }
  }
  return {
    inclusion,
    metadataReports,
    datasetReports
  };
}

// src/comparison/report/comparison-reporting.ts
function comparisonSummaryFromReport(comparisonReport) {
  const terseSummaries = [];
  for (const r of comparisonReport.testReports) {
    if (r.diffReport.validity === "both" && r.diffReport.maxDiff > 0) {
      terseSummaries.push({
        s: r.scenarioKey,
        d: r.datasetKey,
        md: r.diffReport.maxDiff
      });
    }
  }
  return {
    testSummaries: terseSummaries,
    perfReportL: comparisonReport.perfReportL,
    perfReportR: comparisonReport.perfReportR
  };
}
function restoreFromTerseSummaries(comparisonConfig, terseSummaries) {
  const existingSummaries = /* @__PURE__ */ new Map();
  for (const summary of terseSummaries) {
    const key = `${summary.s}::${summary.d}`;
    existingSummaries.set(key, summary);
  }
  const allTestSummaries = [];
  for (const scenario of comparisonConfig.scenarios.getAllScenarios()) {
    const datasetKeys = comparisonConfig.datasets.getDatasetKeysForScenario(scenario);
    for (const datasetKey of datasetKeys) {
      const key = `${scenario.key}::${datasetKey}`;
      const existingSummary = existingSummaries.get(key);
      const maxDiff = (existingSummary == null ? void 0 : existingSummary.md) || 0;
      allTestSummaries.push({
        s: scenario.key,
        d: datasetKey,
        md: maxDiff
      });
    }
  }
  return allTestSummaries;
}

// src/comparison/report/comparison-grouping.ts
import { assertNever as assertNever8 } from "assert-never";

// src/comparison/report/buckets.ts
function getBucketIndex(diffPct, thresholds) {
  if (diffPct === 0) {
    return 0;
  }
  for (let i = 0; i < thresholds.length; i++) {
    if (diffPct < thresholds[i]) {
      return i + 1;
    }
  }
  return thresholds.length + 1;
}

// src/comparison/report/comparison-grouping.ts
function categorizeComparisonTestSummaries(comparisonConfig, terseSummaries) {
  const allTestSummaries = restoreFromTerseSummaries(comparisonConfig, terseSummaries);
  const groupsByScenario = groupComparisonTestSummaries(allTestSummaries, "by-scenario");
  const byScenario = categorizeComparisonGroups(comparisonConfig, [...groupsByScenario.values()]);
  const groupsByDataset = groupComparisonTestSummaries(allTestSummaries, "by-dataset");
  const byDataset = categorizeComparisonGroups(comparisonConfig, [...groupsByDataset.values()]);
  return {
    byScenario,
    byDataset
  };
}
function groupComparisonTestSummaries(testSummaries, groupKind) {
  const groups = /* @__PURE__ */ new Map();
  for (const testSummary of testSummaries) {
    let groupKey;
    switch (groupKind) {
      case "by-dataset":
        groupKey = testSummary.d;
        break;
      case "by-scenario":
        groupKey = testSummary.s;
        break;
      default:
        assertNever8(groupKind);
    }
    const group = groups.get(groupKey);
    if (group) {
      group.testSummaries.push(testSummary);
    } else {
      groups.set(groupKey, {
        kind: groupKind,
        key: groupKey,
        testSummaries: [testSummary]
      });
    }
  }
  return groups;
}
function categorizeComparisonGroups(comparisonConfig, allGroups) {
  const allGroupSummaries = /* @__PURE__ */ new Map();
  const withErrors = [];
  const onlyInLeft = [];
  const onlyInRight = [];
  let withDiffs = [];
  const withoutDiffs = [];
  function addSummaryForGroup(group, root, validInL, validInR) {
    let scores;
    if (validInL && validInR) {
      scores = getScoresForGroup(group, comparisonConfig.thresholds);
    }
    const groupSummary = {
      root,
      group,
      scores
    };
    allGroupSummaries.set(group.key, groupSummary);
    if (validInL && validInR) {
      if (scores.totalDiffCount !== scores.diffCountByBucket[0]) {
        withDiffs.push(groupSummary);
      } else {
        withoutDiffs.push(groupSummary);
      }
    } else if (validInL) {
      onlyInLeft.push(groupSummary);
    } else if (validInR) {
      onlyInRight.push(groupSummary);
    } else {
      withErrors.push(groupSummary);
    }
  }
  for (const group of allGroups.values()) {
    switch (group.kind) {
      case "by-dataset": {
        const dataset = comparisonConfig.datasets.getDataset(group.key);
        const validInL = (dataset == null ? void 0 : dataset.outputVarL) !== void 0;
        const validInR = (dataset == null ? void 0 : dataset.outputVarR) !== void 0;
        addSummaryForGroup(group, dataset, validInL, validInR);
        break;
      }
      case "by-scenario": {
        const scenario = comparisonConfig.scenarios.getScenario(group.key);
        const validInL = (scenario == null ? void 0 : scenario.specL) !== void 0;
        const validInR = (scenario == null ? void 0 : scenario.specR) !== void 0;
        addSummaryForGroup(group, scenario, validInL, validInR);
        break;
      }
      default:
        assertNever8(group.kind);
    }
  }
  if (withDiffs.length > 1) {
    if (withDiffs[0].group.kind === "by-dataset") {
      withDiffs = sortDatasetGroupSummaries(withDiffs);
    } else if (withDiffs[0].group.kind === "by-scenario") {
      withDiffs = sortScenarioGroupSummaries(withDiffs);
    }
  }
  return {
    allGroupSummaries,
    withErrors,
    onlyInLeft,
    onlyInRight,
    withDiffs,
    withoutDiffs
  };
}
function getScoresForGroup(group, thresholds) {
  const diffCountByBucket = Array(thresholds.length + 2).fill(0);
  const totalMaxDiffByBucket = Array(thresholds.length + 2).fill(0);
  let totalDiffCount = 0;
  for (const testSummary of group.testSummaries) {
    const bucketIndex = getBucketIndex(testSummary.md, thresholds);
    diffCountByBucket[bucketIndex]++;
    totalMaxDiffByBucket[bucketIndex] += testSummary.md;
    totalDiffCount++;
  }
  let diffPercentByBucket;
  if (totalDiffCount > 0) {
    diffPercentByBucket = diffCountByBucket.map((count) => count / totalDiffCount * 100);
  } else {
    diffPercentByBucket = [];
  }
  return {
    totalDiffCount,
    totalMaxDiffByBucket,
    diffCountByBucket,
    diffPercentByBucket
  };
}
function sortDatasetGroupSummaries(summaries) {
  return summaries.sort((a, b) => {
    var _a, _b;
    const scoreResult = compareScores(a.scores, b.scores);
    if (scoreResult !== 0) {
      return -scoreResult;
    } else {
      const aVar = a.root.outputVarL;
      const bVar = b.root.outputVarR;
      const aSource = ((_a = aVar.sourceName) == null ? void 0 : _a.toLowerCase()) || "";
      const bSource = ((_b = bVar.sourceName) == null ? void 0 : _b.toLowerCase()) || "";
      if (aSource !== bSource) {
        return aSource.localeCompare(bSource);
      } else {
        const aName = aVar.varName.toLowerCase();
        const bName = bVar.varName.toLowerCase();
        return aName.localeCompare(bName);
      }
    }
  });
}
function sortScenarioGroupSummaries(summaries) {
  return summaries.sort((a, b) => {
    var _a, _b;
    const scoreResult = compareScores(a.scores, b.scores);
    if (scoreResult !== 0) {
      return -scoreResult;
    } else {
      const aScenario = a.root;
      const bScenario = b.root;
      const aTitle = aScenario.title.toLowerCase();
      const bTitle = bScenario.title.toLowerCase();
      if (aTitle !== bTitle) {
        return aTitle.localeCompare(bTitle);
      } else {
        const aSubtitle = ((_a = aScenario.subtitle) == null ? void 0 : _a.toLowerCase()) || "";
        const bSubtitle = ((_b = bScenario.subtitle) == null ? void 0 : _b.toLowerCase()) || "";
        return aSubtitle.localeCompare(bSubtitle);
      }
    }
  });
}
function compareScores(a, b) {
  if (a.totalMaxDiffByBucket.length !== b.totalMaxDiffByBucket.length) {
    return 0;
  }
  const len = a.totalMaxDiffByBucket.length;
  for (let i = len - 1; i >= 0; i--) {
    const aTotal = a.totalMaxDiffByBucket[i];
    const bTotal = b.totalMaxDiffByBucket[i];
    if (aTotal > bTotal) {
      return 1;
    } else if (aTotal < bTotal) {
      return -1;
    }
  }
  return 0;
}

// src/bundle/model-inputs.ts
var ModelInputs = class {
  constructor(modelSpec) {
    this.inputsByLookupName = /* @__PURE__ */ new Map();
    this.inputIdAliases = /* @__PURE__ */ new Set();
    for (const inputVar of modelSpec.inputVars.values()) {
      const varNameKey = inputVar.varName.toLowerCase();
      this.inputsByLookupName.set(varNameKey, inputVar);
      if (inputVar.inputId) {
        const idAlias = `id ${inputVar.inputId}`;
        this.inputIdAliases.add(idAlias);
        const idKey = idAlias.toLowerCase();
        this.inputsByLookupName.set(idKey, inputVar);
      }
    }
    if (modelSpec.inputAliases) {
      for (const [alias, varId] of modelSpec.inputAliases.entries()) {
        const aliasKey = alias.toLowerCase();
        if (this.inputsByLookupName.has(aliasKey)) {
          console.warn(
            `WARNING: Input variable already defined with a name that collides with alias '${alias}', skipping`
          );
          continue;
        }
        const inputVar = modelSpec.inputVars.get(varId);
        if (inputVar === void 0) {
          console.warn(`WARNING: No input variable found for '${varId}' associated with alias '${alias}', skipping`);
          continue;
        }
        this.inputsByLookupName.set(aliasKey, inputVar);
      }
    }
  }
  getAllInputIdAliases() {
    return [...this.inputIdAliases];
  }
  getInputVarForName(name) {
    return this.inputsByLookupName.get(name.toLowerCase());
  }
};

// src/comparison/config/parse/comparison-parser.ts
import Ajv2 from "ajv";
import assertNever9 from "assert-never";
import { err as err2, ok as ok2 } from "neverthrow";
import yaml2 from "yaml";

// src/comparison/config/parse/comparison.schema.js
var comparison_schema_default = {
  $schema: "http://json-schema.org/draft-07/schema#",
  title: "Model Comparison Test",
  type: "array",
  description: "A group of model comparison scenarios and views.",
  items: {
    $ref: "#/$defs/top_level_array_item"
  },
  $defs: {
    top_level_array_item: {
      oneOf: [
        { $ref: "#/$defs/scenario_array_item" },
        { $ref: "#/$defs/scenario_group_array_item" },
        { $ref: "#/$defs/view_group_array_item" }
      ]
    },
    scenario_array_item: {
      type: "object",
      additionalProperties: false,
      properties: {
        scenario: {
          $ref: "#/$defs/scenario"
        }
      },
      required: ["scenario"]
    },
    scenario: {
      oneOf: [
        { $ref: "#/$defs/scenario_with_input_at_position" },
        { $ref: "#/$defs/scenario_with_input_at_value" },
        { $ref: "#/$defs/scenario_with_multiple_input_settings" },
        { $ref: "#/$defs/scenario_with_inputs_in_preset_at_position" },
        { $ref: "#/$defs/scenario_preset" }
      ]
    },
    scenario_position: {
      type: "string",
      enum: ["min", "max", "default"]
    },
    scenario_with_input_at_position: {
      type: "object",
      additionalProperties: false,
      properties: {
        id: {
          type: "string"
        },
        title: {
          type: "string"
        },
        subtitle: {
          type: "string"
        },
        with: {
          type: "string"
        },
        at: {
          $ref: "#/$defs/scenario_position"
        }
      },
      required: ["with", "at"]
    },
    scenario_with_input_at_value: {
      type: "object",
      additionalProperties: false,
      properties: {
        id: {
          type: "string"
        },
        title: {
          type: "string"
        },
        subtitle: {
          type: "string"
        },
        with: {
          type: "string"
        },
        at: {
          type: "number"
        }
      },
      required: ["with", "at"]
    },
    scenario_input_at_position: {
      type: "object",
      additionalProperties: false,
      properties: {
        input: {
          type: "string"
        },
        at: {
          $ref: "#/$defs/scenario_position"
        }
      },
      required: ["input", "at"]
    },
    scenario_input_at_value: {
      type: "object",
      additionalProperties: false,
      properties: {
        input: {
          type: "string"
        },
        at: {
          type: "number"
        }
      },
      required: ["input", "at"]
    },
    scenario_input_setting: {
      oneOf: [{ $ref: "#/$defs/scenario_input_at_position" }, { $ref: "#/$defs/scenario_input_at_value" }]
    },
    scenario_input_setting_array: {
      type: "array",
      items: {
        $ref: "#/$defs/scenario_input_setting"
      },
      minItems: 1
    },
    scenario_with_multiple_input_settings: {
      type: "object",
      additionalProperties: false,
      properties: {
        id: {
          type: "string"
        },
        title: {
          type: "string"
        },
        subtitle: {
          type: "string"
        },
        with: {
          $ref: "#/$defs/scenario_input_setting_array"
        }
      },
      required: ["with"]
    },
    scenario_with_inputs_in_preset_at_position: {
      type: "object",
      additionalProperties: false,
      properties: {
        id: {
          type: "string"
        },
        title: {
          type: "string"
        },
        subtitle: {
          type: "string"
        },
        with_inputs: {
          type: "string",
          enum: ["all"]
        },
        at: {
          $ref: "#/$defs/scenario_position"
        }
      },
      required: ["with_inputs", "at"]
    },
    scenario_preset: {
      type: "object",
      additionalProperties: false,
      properties: {
        preset: {
          type: "string",
          enum: ["matrix"]
        }
      },
      required: ["preset"]
    },
    scenario_group_array_item: {
      type: "object",
      additionalProperties: false,
      properties: {
        scenario_group: {
          $ref: "#/$defs/scenario_group"
        }
      },
      required: ["scenario_group"]
    },
    scenario_group: {
      type: "object",
      additionalProperties: false,
      properties: {
        id: {
          type: "string"
        },
        title: {
          type: "string"
        },
        scenarios: {
          type: "array",
          items: {
            $ref: "#/$defs/scenario_group_scenarios_array_item"
          },
          minItems: 1
        }
      },
      required: ["title", "scenarios"]
    },
    scenario_group_scenarios_array_item: {
      oneOf: [{ $ref: "#/$defs/scenario_array_item" }, { $ref: "#/$defs/scenario_ref_array_item" }]
    },
    scenario_ref_id: {
      type: "string"
    },
    scenario_ref_object: {
      type: "object",
      additionalProperties: false,
      properties: {
        id: {
          type: "string"
        },
        title: {
          type: "string"
        },
        subtitle: {
          type: "string"
        }
      },
      required: ["id"]
    },
    scenario_ref: {
      oneOf: [{ $ref: "#/$defs/scenario_ref_id" }, { $ref: "#/$defs/scenario_ref_object" }]
    },
    scenario_ref_array_item: {
      type: "object",
      additionalProperties: false,
      properties: {
        scenario_ref: {
          $ref: "#/$defs/scenario_ref"
        }
      },
      required: ["scenario_ref"]
    },
    scenario_group_ref: {
      type: "object",
      additionalProperties: false,
      properties: {
        scenario_group_ref: {
          type: "string"
        }
      },
      required: ["scenario_group_ref"]
    },
    view: {
      type: "object",
      additionalProperties: false,
      properties: {
        title: {
          type: "string"
        },
        subtitle: {
          type: "string"
        },
        scenario_ref: {
          type: "string"
        },
        graphs: {
          $ref: "#/$defs/view_graphs"
        }
      },
      required: ["scenario_ref", "graphs"]
    },
    view_graphs: {
      oneOf: [{ $ref: "#/$defs/view_graphs_preset" }, { $ref: "#/$defs/view_graphs_array" }]
    },
    view_graphs_preset: {
      type: "string",
      enum: ["all"]
    },
    view_graphs_array: {
      type: "array",
      items: {
        type: "string"
      },
      minItems: 1
    },
    view_group_array_item: {
      type: "object",
      additionalProperties: false,
      properties: {
        view_group: {
          $ref: "#/$defs/view_group"
        }
      },
      required: ["view_group"]
    },
    view_group: {
      oneOf: [
        { $ref: "#/$defs/view_group_with_views_array" },
        { $ref: "#/$defs/view_group_shorthand_with_scenarios_array" }
      ]
    },
    view_group_with_views_array: {
      type: "object",
      additionalProperties: false,
      properties: {
        title: {
          type: "string"
        },
        views: {
          type: "array",
          items: {
            $ref: "#/$defs/view_group_views_array_item"
          },
          minItems: 1
        }
      },
      required: ["title", "views"]
    },
    view_group_views_array_item: {
      type: "object",
      additionalProperties: false,
      properties: {
        view: {
          $ref: "#/$defs/view"
        }
      }
    },
    view_group_shorthand_with_scenarios_array: {
      type: "object",
      additionalProperties: false,
      properties: {
        title: {
          type: "string"
        },
        scenarios: {
          type: "array",
          items: {
            $ref: "#/$defs/view_group_scenarios_array_item"
          },
          minItems: 1
        },
        graphs: {
          $ref: "#/$defs/view_graphs"
        }
      },
      required: ["title", "scenarios", "graphs"]
    },
    view_group_scenarios_array_item: {
      oneOf: [{ $ref: "#/$defs/scenario_ref_array_item" }, { $ref: "#/$defs/scenario_group_ref" }]
    }
  }
};

// src/comparison/config/parse/comparison-parser.ts
function parseComparisonSpecs(specSource) {
  const scenarios = [];
  const scenarioGroups = [];
  const viewGroups = [];
  const ajv = new Ajv2();
  const validate = ajv.compile(comparison_schema_default);
  let parsed;
  switch (specSource.kind) {
    case "json":
      parsed = JSON.parse(specSource.content);
      break;
    case "yaml":
      parsed = yaml2.parse(specSource.content);
      break;
    default:
      assertNever9(specSource.kind);
  }
  if (validate(parsed)) {
    for (const specItem of parsed) {
      if ("scenario" in specItem) {
        scenarios.push(scenarioSpecFromParsed(specItem.scenario));
      } else if ("scenario_group" in specItem) {
        scenarioGroups.push(scenarioGroupSpecFromParsed(specItem.scenario_group));
      } else if ("view_group" in specItem) {
        viewGroups.push(viewGroupSpecFromParsed(specItem.view_group));
      }
    }
  } else {
    let msg = "Failed to parse YAML comparison definitions";
    for (const error of validate.errors || []) {
      if (error.message) {
        msg += `
${error.message}`;
      }
    }
    return err2(new Error(msg));
  }
  return ok2({
    scenarios,
    scenarioGroups,
    viewGroups
  });
}
function scenarioSpecFromParsed(parsedScenario) {
  if (parsedScenario.preset === "matrix") {
    return {
      kind: "scenario-matrix"
    };
  }
  if (parsedScenario.with !== void 0) {
    let inputSpecs;
    if (Array.isArray(parsedScenario.with)) {
      const parsedInputs = parsedScenario.with;
      inputSpecs = parsedInputs.map(inputSpecFromParsed);
    } else {
      inputSpecs = [
        inputSpecFromParsed({
          input: parsedScenario.with,
          at: parsedScenario.at
        })
      ];
    }
    return {
      kind: "scenario-with-inputs",
      id: parsedScenario.id,
      title: parsedScenario.title,
      subtitle: parsedScenario.subtitle,
      inputs: inputSpecs
    };
  }
  if (parsedScenario.with_inputs === "all") {
    return {
      kind: "scenario-with-all-inputs",
      id: parsedScenario.id,
      title: parsedScenario.title,
      subtitle: parsedScenario.subtitle,
      position: parsedScenario.at
    };
  }
  throw new Error(`Unable to convert parsed scenario: ${JSON.stringify(parsedScenario)}`);
}
function inputSpecFromParsed(parsedInput) {
  if (typeof parsedInput.at === "number") {
    const value = parsedInput.at;
    return {
      kind: "input-at-value",
      inputName: parsedInput.input,
      value
    };
  } else {
    return {
      kind: "input-at-position",
      inputName: parsedInput.input,
      position: parsedInput.at
    };
  }
}
function scenarioGroupSpecFromParsed(parsedScenarioGroup) {
  const scenarioSpecs = parsedScenarioGroup.scenarios.map(
    (parsedScenarioOrRef) => {
      if ("scenario_ref" in parsedScenarioOrRef) {
        return scenarioRefSpecFromParsed(parsedScenarioOrRef);
      } else {
        return scenarioSpecFromParsed(parsedScenarioOrRef.scenario);
      }
    }
  );
  return {
    kind: "scenario-group",
    id: parsedScenarioGroup.id,
    title: parsedScenarioGroup.title,
    scenarios: scenarioSpecs
  };
}
function scenarioRefSpecFromParsed(parsedScenarioRef) {
  if (typeof parsedScenarioRef.scenario_ref === "string") {
    return {
      kind: "scenario-ref",
      scenarioId: parsedScenarioRef.scenario_ref
    };
  } else {
    return {
      kind: "scenario-ref",
      scenarioId: parsedScenarioRef.scenario_ref.id,
      title: parsedScenarioRef.scenario_ref.title,
      subtitle: parsedScenarioRef.scenario_ref.subtitle
    };
  }
}
function scenarioGroupRefSpecFromParsed(parsedGroupRef) {
  return {
    kind: "scenario-group-ref",
    groupId: parsedGroupRef.scenario_group_ref
  };
}
function viewSpecFromParsed(parsedView) {
  return {
    kind: "view",
    title: parsedView.title,
    subtitle: parsedView.subtitle,
    scenarioId: parsedView.scenario_ref,
    graphs: viewGraphsSpecFromParsed(parsedView.graphs)
  };
}
function viewGraphsSpecFromParsed(parsedGraphs) {
  if (parsedGraphs === "all") {
    return {
      kind: "graphs-preset",
      preset: "all"
    };
  } else {
    return {
      kind: "graphs-array",
      graphIds: parsedGraphs
    };
  }
}
function viewGroupSpecFromParsed(parsedViewGroup) {
  if (parsedViewGroup.views !== void 0) {
    return {
      kind: "view-group-with-views",
      title: parsedViewGroup.title,
      views: parsedViewGroup.views.map((item) => viewSpecFromParsed(item.view))
    };
  } else if (parsedViewGroup.scenarios !== void 0) {
    const scenarios = parsedViewGroup.scenarios.map(
      (parsedScenarioOrGroupRef) => {
        if ("scenario_ref" in parsedScenarioOrGroupRef) {
          return scenarioRefSpecFromParsed(parsedScenarioOrGroupRef);
        } else if ("scenario_group_ref" in parsedScenarioOrGroupRef) {
          return scenarioGroupRefSpecFromParsed(parsedScenarioOrGroupRef);
        } else {
          throw new Error("Invalid view group");
        }
      }
    );
    return {
      kind: "view-group-with-scenarios",
      title: parsedViewGroup.title,
      scenarios,
      graphs: viewGraphsSpecFromParsed(parsedViewGroup.graphs)
    };
  } else {
    throw new Error("Invalid view group");
  }
}

// src/comparison/config/resolve/comparison-resolver.ts
import { assertNever as assertNever11 } from "assert-never";

// src/comparison/config/resolve/comparison-scenario-specs.ts
import { assertNever as assertNever10 } from "assert-never";
function scenarioSpecsFromSettings(settings) {
  switch (settings.kind) {
    case "all-inputs-settings": {
      const scenario = allInputsAtPositionSpec(settings.position);
      return [scenario, scenario];
    }
    case "input-settings": {
      const specL = scenarioSpecFromInputs(settings.inputs, "left");
      const specR = scenarioSpecFromInputs(settings.inputs, "right");
      return [specL, specR];
    }
    default:
      assertNever10(settings);
  }
}
function scenarioSpecFromInputs(inputs, side) {
  const settings = [];
  for (const input of inputs) {
    const state = side === "left" ? input.stateL : input.stateR;
    if (state.inputVar === void 0) {
      return void 0;
    }
    const varId = state.inputVar.varId;
    if (state.position) {
      settings.push(positionSetting(varId, state.position));
    } else {
      settings.push(valueSetting(varId, state.value));
    }
  }
  return inputSettingsSpec(settings);
}

// src/comparison/config/resolve/comparison-resolver.ts
function resolveComparisonSpecs(modelInputsL, modelInputsR, specs) {
  let key = 1;
  const genKey = () => {
    return `${key++}`;
  };
  const resolvedScenarios = new ResolvedScenarios();
  for (const scenarioSpec of specs.scenarios) {
    resolvedScenarios.add(resolveScenariosFromSpec(modelInputsL, modelInputsR, scenarioSpec, genKey));
  }
  const partiallyResolvedScenarioGroups = [];
  for (const scenarioGroupSpec of specs.scenarioGroups) {
    const scenariosForGroup = [];
    for (const scenarioItem of scenarioGroupSpec.scenarios) {
      if (scenarioItem.kind === "scenario-ref") {
        scenariosForGroup.push(scenarioItem);
      } else {
        const scenarios = resolveScenariosFromSpec(modelInputsL, modelInputsR, scenarioItem, genKey);
        resolvedScenarios.add(scenarios);
        scenariosForGroup.push(...scenarios);
      }
    }
    partiallyResolvedScenarioGroups.push({
      spec: scenarioGroupSpec,
      scenarios: scenariosForGroup
    });
  }
  const resolvedScenarioGroups = new ResolvedScenarioGroups();
  for (const partiallyResolvedGroup of partiallyResolvedScenarioGroups) {
    const scenariosForGroup = [];
    for (const scenarioItem of partiallyResolvedGroup.scenarios) {
      if (scenarioItem.kind === "scenario-ref") {
        const referencedScenario = resolvedScenarios.getScenarioForId(scenarioItem.scenarioId);
        if (referencedScenario) {
          const resolvedScenario = { ...referencedScenario };
          if (scenarioItem.title) {
            resolvedScenario.title = scenarioItem.title;
          }
          if (scenarioItem.subtitle) {
            resolvedScenario.subtitle = scenarioItem.subtitle;
          }
          scenariosForGroup.push(resolvedScenario);
        } else {
          scenariosForGroup.push({
            kind: "unresolved-scenario-ref",
            scenarioId: scenarioItem.scenarioId
          });
        }
      } else {
        scenariosForGroup.push(scenarioItem);
      }
    }
    resolvedScenarioGroups.add({
      kind: "scenario-group",
      id: partiallyResolvedGroup.spec.id,
      title: partiallyResolvedGroup.spec.title,
      scenarios: scenariosForGroup
    });
  }
  const resolvedViewGroups = [];
  for (const viewGroupSpec of specs.viewGroups) {
    const resolvedViewGroup = resolveViewGroupFromSpec(resolvedScenarios, resolvedScenarioGroups, viewGroupSpec);
    resolvedViewGroups.push(resolvedViewGroup);
  }
  return {
    scenarios: resolvedScenarios.getAll(),
    scenarioGroups: resolvedScenarioGroups.getAll(),
    viewGroups: resolvedViewGroups
  };
}
var ResolvedScenarios = class {
  constructor() {
    this.resolvedScenarios = [];
    this.resolvedScenariosById = /* @__PURE__ */ new Map();
  }
  add(scenarios) {
    for (const resolvedScenario of scenarios) {
      this.resolvedScenarios.push(resolvedScenario);
      if (resolvedScenario.id !== void 0) {
        if (this.resolvedScenariosById.has(resolvedScenario.id)) {
          throw new Error(`Multiple scenarios defined with the same id (${resolvedScenario.id})`);
        }
        this.resolvedScenariosById.set(resolvedScenario.id, resolvedScenario);
      }
    }
  }
  getAll() {
    return this.resolvedScenarios;
  }
  getScenarioForId(id) {
    return this.resolvedScenariosById.get(id);
  }
};
function resolveScenariosFromSpec(modelInputsL, modelInputsR, scenarioSpec, genKey) {
  switch (scenarioSpec.kind) {
    case "scenario-matrix":
      return resolveScenarioMatrix(modelInputsL, modelInputsR, genKey);
    case "scenario-with-all-inputs": {
      const position = inputPosition2(scenarioSpec.position);
      return [
        resolveScenarioWithAllInputsAtPosition(
          genKey(),
          scenarioSpec.id,
          scenarioSpec.title,
          scenarioSpec.subtitle,
          position
        )
      ];
    }
    case "scenario-with-inputs": {
      return [
        resolveScenarioForInputSpecs(
          modelInputsL,
          modelInputsR,
          genKey(),
          scenarioSpec.id,
          scenarioSpec.title,
          scenarioSpec.subtitle,
          scenarioSpec.inputs
        )
      ];
    }
    default:
      assertNever11(scenarioSpec);
  }
}
function resolveScenarioMatrix(modelInputsL, modelInputsR, genKey) {
  const resolvedScenarios = [];
  resolvedScenarios.push(
    resolveScenarioWithAllInputsAtPosition(genKey(), void 0, void 0, void 0, "at-default")
  );
  const inputIdAliases = /* @__PURE__ */ new Set();
  modelInputsL.getAllInputIdAliases().forEach((alias) => inputIdAliases.add(alias));
  modelInputsR.getAllInputIdAliases().forEach((alias) => inputIdAliases.add(alias));
  for (const inputIdAlias of inputIdAliases) {
    const inputAtMin = {
      kind: "input-at-position",
      inputName: inputIdAlias,
      position: "min"
    };
    const inputAtMax = {
      kind: "input-at-position",
      inputName: inputIdAlias,
      position: "max"
    };
    resolvedScenarios.push(
      resolveScenarioForInputSpecs(modelInputsL, modelInputsR, genKey(), void 0, void 0, void 0, [inputAtMin])
    );
    resolvedScenarios.push(
      resolveScenarioForInputSpecs(modelInputsL, modelInputsR, genKey(), void 0, void 0, void 0, [inputAtMax])
    );
  }
  return resolvedScenarios;
}
function resolveScenarioWithAllInputsAtPosition(key, id, title, subtitle, position) {
  const settings = {
    kind: "all-inputs-settings",
    position
  };
  const [specL, specR] = scenarioSpecsFromSettings(settings);
  return {
    kind: "scenario",
    key,
    id,
    title,
    subtitle,
    settings,
    specL,
    specR
  };
}
function resolveScenarioForInputSpecs(modelInputsL, modelInputsR, key, id, title, subtitle, inputSpecs) {
  const resolvedInputs = inputSpecs.map((inputSpec) => {
    switch (inputSpec.kind) {
      case "input-at-position":
        return resolveInputForName(modelInputsL, modelInputsR, inputSpec.inputName, inputSpec.position);
      case "input-at-value":
        return resolveInputForName(modelInputsL, modelInputsR, inputSpec.inputName, inputSpec.value);
      default:
        assertNever11(inputSpec);
    }
  });
  const settings = {
    kind: "input-settings",
    inputs: resolvedInputs
  };
  const [specL, specR] = scenarioSpecsFromSettings(settings);
  return {
    kind: "scenario",
    key,
    id,
    title,
    subtitle,
    settings,
    specL,
    specR
  };
}
function resolveInputForName(modelInputsL, modelInputsR, inputName, at) {
  return {
    requestedName: inputName,
    stateL: resolveInputForNameInModel(modelInputsL, inputName, at),
    stateR: resolveInputForNameInModel(modelInputsR, inputName, at)
  };
}
function resolveInputForNameInModel(modelInputs, inputName, at) {
  const inputVar = modelInputs.getInputVarForName(inputName);
  if (inputVar) {
    return resolveInputVar(inputVar, at);
  } else {
    return {
      error: {
        kind: "unknown-input"
      }
    };
  }
}
function resolveInputVar(inputVar, at) {
  if (typeof at === "number") {
    const value = at;
    return resolveInputVarAtValue(inputVar, value);
  } else {
    const position = inputPosition2(at);
    return resolveInputVarAtPosition(inputVar, position);
  }
}
function resolveInputVarAtPosition(inputVar, position) {
  return {
    inputVar,
    position,
    value: inputValueAtPosition2(inputVar, position)
  };
}
function resolveInputVarAtValue(inputVar, value) {
  if (value >= inputVar.minValue && value <= inputVar.maxValue) {
    return {
      inputVar,
      value
    };
  } else {
    return {
      error: {
        kind: "invalid-value"
      }
    };
  }
}
function inputPosition2(position) {
  switch (position) {
    case "default":
      return "at-default";
    case "min":
      return "at-minimum";
    case "max":
      return "at-maximum";
    default:
      return void 0;
  }
}
function inputValueAtPosition2(inputVar, position) {
  switch (position) {
    case "at-default":
      return inputVar.defaultValue;
    case "at-minimum":
      return inputVar.minValue;
    case "at-maximum":
      return inputVar.maxValue;
    default:
      assertNever11(position);
  }
}
var ResolvedScenarioGroups = class {
  constructor() {
    this.resolvedGroups = [];
    this.resolvedGroupsById = /* @__PURE__ */ new Map();
  }
  add(group) {
    this.resolvedGroups.push(group);
    if (group.id !== void 0) {
      if (this.resolvedGroupsById.has(group.id)) {
        throw new Error(`Multiple scenario groups defined with the same id (${group.id})`);
      }
      this.resolvedGroupsById.set(group.id, group);
    }
  }
  getAll() {
    return this.resolvedGroups;
  }
  getGroupForId(id) {
    return this.resolvedGroupsById.get(id);
  }
};
function resolveGraphsFromSpec(graphsSpec) {
  switch (graphsSpec.kind) {
    case "graphs-preset":
      return "all";
    case "graphs-array":
      return graphsSpec.graphIds;
    default:
      assertNever11(graphsSpec);
  }
}
function resolveViewForScenarioId(resolvedScenarios, viewTitle, viewSubtitle, scenarioId, graphs) {
  const resolvedScenario = resolvedScenarios.getScenarioForId(scenarioId);
  if (resolvedScenario) {
    return resolveViewForScenario(viewTitle, viewSubtitle, resolvedScenario, graphs);
  } else {
    return unresolvedViewForScenarioId(viewTitle, viewSubtitle, scenarioId);
  }
}
function resolveViewForScenarioRefSpec(resolvedScenarios, refSpec, graphs) {
  const resolvedScenario = resolvedScenarios.getScenarioForId(refSpec.scenarioId);
  if (resolvedScenario) {
    return resolveViewForScenario(refSpec.title, refSpec.subtitle, resolvedScenario, graphs);
  } else {
    return unresolvedViewForScenarioId(void 0, void 0, refSpec.scenarioId);
  }
}
function resolveViewForScenario(viewTitle, viewSubtitle, resolvedScenario, graphs) {
  if (viewTitle === void 0) {
    viewTitle = resolvedScenario.title;
    if (viewTitle === void 0) {
      viewTitle = "Untitled view";
    }
    if (viewSubtitle === void 0) {
      viewSubtitle = resolvedScenario.subtitle;
    }
  }
  return {
    kind: "view",
    title: viewTitle,
    subtitle: viewSubtitle,
    scenario: resolvedScenario,
    graphs
  };
}
function unresolvedViewForScenarioId(viewTitle, viewSubtitle, scenarioId) {
  return {
    kind: "unresolved-view",
    title: viewTitle,
    subtitle: viewSubtitle,
    scenarioId
  };
}
function unresolvedViewForScenarioGroupId(viewTitle, viewSubtitle, scenarioGroupId) {
  return {
    kind: "unresolved-view",
    title: viewTitle,
    subtitle: viewSubtitle,
    scenarioGroupId
  };
}
function resolveViewGroupFromSpec(resolvedScenarios, resolvedScenarioGroups, viewGroupSpec) {
  let views;
  switch (viewGroupSpec.kind) {
    case "view-group-with-views": {
      views = viewGroupSpec.views.map((viewSpec) => {
        const graphs = resolveGraphsFromSpec(viewSpec.graphs);
        return resolveViewForScenarioId(
          resolvedScenarios,
          viewSpec.title,
          viewSpec.subtitle,
          viewSpec.scenarioId,
          graphs
        );
      });
      break;
    }
    case "view-group-with-scenarios": {
      const graphs = resolveGraphsFromSpec(viewGroupSpec.graphs);
      views = [];
      for (const refSpec of viewGroupSpec.scenarios) {
        switch (refSpec.kind) {
          case "scenario-ref":
            views.push(resolveViewForScenarioRefSpec(resolvedScenarios, refSpec, graphs));
            break;
          case "scenario-group-ref": {
            const resolvedGroup = resolvedScenarioGroups.getGroupForId(refSpec.groupId);
            if (resolvedGroup) {
              for (const scenario of resolvedGroup.scenarios) {
                switch (scenario.kind) {
                  case "unresolved-scenario-ref":
                    views.push(unresolvedViewForScenarioId(void 0, void 0, scenario.scenarioId));
                    break;
                  case "scenario":
                    views.push(resolveViewForScenario(void 0, void 0, scenario, graphs));
                    break;
                  default:
                    assertNever11(scenario);
                }
              }
            } else {
              views.push(unresolvedViewForScenarioGroupId(void 0, void 0, refSpec.groupId));
            }
            break;
          }
          default:
            assertNever11(refSpec);
        }
      }
      break;
    }
    default:
      assertNever11(viewGroupSpec);
  }
  return {
    kind: "view-group",
    title: viewGroupSpec.title,
    views
  };
}

// src/comparison/config/comparison-config.ts
function resolveComparisonSpecsFromSources(modelInputsL, modelInputsR, specSources) {
  const combinedSpecs = {
    scenarios: [],
    scenarioGroups: [],
    viewGroups: []
  };
  for (const specSource of specSources) {
    let specs;
    if ("kind" in specSource) {
      const parseResult = parseComparisonSpecs(specSource);
      if (parseResult.isOk()) {
        specs = parseResult.value;
      } else {
        const filenamePart = specSource.filename ? ` in ${specSource.filename}` : "";
        console.error(`ERROR: Failed to parse comparison spec${filenamePart}, skipping`);
        continue;
      }
    } else {
      specs = specSource;
    }
    combinedSpecs.scenarios.push(...specs.scenarios);
    combinedSpecs.scenarioGroups.push(...specs.scenarioGroups);
    combinedSpecs.viewGroups.push(...specs.viewGroups);
  }
  return resolveComparisonSpecs(modelInputsL, modelInputsR, combinedSpecs);
}

// src/comparison/config/comparison-datasets.ts
function getComparisonDatasets(modelSpecL, modelSpecR, renamedDatasetKeys) {
  return new ComparisonDatasetsImpl(modelSpecL, modelSpecR, renamedDatasetKeys);
}
var ComparisonDatasetsImpl = class {
  constructor(modelSpecL, modelSpecR, renamedDatasetKeys) {
    const invertedRenamedKeys = /* @__PURE__ */ new Map();
    renamedDatasetKeys == null ? void 0 : renamedDatasetKeys.forEach((newKey, oldKey) => {
      invertedRenamedKeys.set(newKey, oldKey);
    });
    function leftKeyForRightKey(rightKey) {
      return invertedRenamedKeys.get(rightKey) || rightKey;
    }
    const allOutputVarKeysSet = /* @__PURE__ */ new Set();
    const modelOutputVarKeysSet = /* @__PURE__ */ new Set();
    function addOutputVars(outputVars, handleRenames) {
      outputVars.forEach((outputVar, key) => {
        const remappedKey = handleRenames ? leftKeyForRightKey(key) : key;
        allOutputVarKeysSet.add(remappedKey);
        if (outputVar.sourceName === void 0) {
          modelOutputVarKeysSet.add(remappedKey);
        }
      });
    }
    addOutputVars(modelSpecL.outputVars, false);
    addOutputVars(modelSpecR.outputVars, true);
    this.allOutputVarKeys = Array.from(allOutputVarKeysSet);
    this.modelOutputVarKeys = Array.from(modelOutputVarKeysSet);
    this.allDatasets = /* @__PURE__ */ new Map();
    for (const datasetKeyL of this.allOutputVarKeys) {
      const datasetKeyR = (renamedDatasetKeys == null ? void 0 : renamedDatasetKeys.get(datasetKeyL)) || datasetKeyL;
      const outputVarL = modelSpecL.outputVars.get(datasetKeyL);
      const outputVarR = modelSpecR.outputVars.get(datasetKeyR);
      this.allDatasets.set(datasetKeyL, {
        kind: "dataset",
        key: datasetKeyL,
        outputVarL,
        outputVarR
      });
    }
  }
  getAllDatasets() {
    return this.allDatasets.values();
  }
  getDataset(datasetKey) {
    return this.allDatasets.get(datasetKey);
  }
  getDatasetKeysForScenario(scenario) {
    if (scenario.settings.kind === "all-inputs-settings" && scenario.settings.position === "at-default") {
      return this.allOutputVarKeys;
    } else {
      return this.modelOutputVarKeys;
    }
  }
};

// src/comparison/config/comparison-scenarios.ts
function getComparisonScenarios(scenarios) {
  return new ComparisonScenariosImpl(scenarios);
}
var ComparisonScenariosImpl = class {
  constructor(scenarios) {
    this.scenarioDefs = /* @__PURE__ */ new Map();
    for (const scenario of scenarios) {
      this.scenarioDefs.set(scenario.key, scenario);
    }
  }
  getAllScenarios() {
    return this.scenarioDefs.values();
  }
  getScenario(key) {
    return this.scenarioDefs.get(key);
  }
};

// src/config/synchronized-model.ts
function synchronizedBundleModel(sourceModel) {
  const promiseQueue = new PromiseQueue();
  return {
    modelSpec: sourceModel.modelSpec,
    getDatasetsForScenario: (scenarioSpec, datasetKeys) => {
      return promiseQueue.add(() => sourceModel.getDatasetsForScenario(scenarioSpec, datasetKeys));
    },
    getGraphDataForScenario: (scenarioSpec, graphId) => {
      return promiseQueue.add(() => sourceModel.getGraphDataForScenario(scenarioSpec, graphId));
    },
    getGraphLinksForScenario: sourceModel.getGraphLinksForScenario.bind(sourceModel)
  };
}
var PromiseQueue = class {
  constructor() {
    this.tasks = [];
    this.runningCount = 0;
  }
  add(f) {
    return new Promise((resolve, reject) => {
      const run = async () => {
        this.runningCount++;
        const promise = f();
        try {
          const result = await promise;
          resolve(result);
        } catch (e) {
          reject(e);
        } finally {
          this.runningCount--;
          this.runNext();
        }
      };
      if (this.runningCount < 1) {
        run();
      } else {
        this.tasks.push(run);
      }
    });
  }
  runNext() {
    if (this.tasks.length > 0) {
      const task = this.tasks.shift();
      if (task) {
        task();
      }
    }
  }
};

// src/config/config.ts
async function createConfig(options) {
  const origCurrentBundle = await loadSynchronized(options.current);
  let currentBundle;
  let comparisonConfig;
  if (options.comparison === void 0) {
    currentBundle = origCurrentBundle;
  } else {
    const baselineBundle = await loadSynchronized(options.comparison.baseline);
    const renamedDatasetKeys = options.comparison.renamedDatasetKeys;
    const invertedRenamedKeys = /* @__PURE__ */ new Map();
    renamedDatasetKeys == null ? void 0 : renamedDatasetKeys.forEach((newKey, oldKey) => {
      invertedRenamedKeys.set(newKey, oldKey);
    });
    const rightKeyForLeftKey = (leftKey) => {
      return (renamedDatasetKeys == null ? void 0 : renamedDatasetKeys.get(leftKey)) || leftKey;
    };
    const leftKeyForRightKey = (rightKey) => {
      return invertedRenamedKeys.get(rightKey) || rightKey;
    };
    const origBundleModelR = origCurrentBundle.model;
    const adjBundleModelR = {
      modelSpec: origBundleModelR.modelSpec,
      getDatasetsForScenario: async (scenarioSpec, datasetKeys) => {
        const rightKeys = datasetKeys.map(rightKeyForLeftKey);
        const result = await origBundleModelR.getDatasetsForScenario(scenarioSpec, rightKeys);
        const mapWithRightKeys = result.datasetMap;
        const mapWithLeftKeys = /* @__PURE__ */ new Map();
        for (const [rightKey, dataset] of mapWithRightKeys.entries()) {
          const leftKey = leftKeyForRightKey(rightKey);
          mapWithLeftKeys.set(leftKey, dataset);
        }
        return {
          datasetMap: mapWithLeftKeys,
          modelRunTime: result.modelRunTime
        };
      },
      getGraphDataForScenario: origBundleModelR.getGraphDataForScenario.bind(origBundleModelR),
      getGraphLinksForScenario: origBundleModelR.getGraphLinksForScenario.bind(origBundleModelR)
    };
    currentBundle = {
      ...origCurrentBundle,
      model: adjBundleModelR
    };
    const modelSpecL = baselineBundle.model.modelSpec;
    const modelSpecR = currentBundle.model.modelSpec;
    const modelInputsL = new ModelInputs(modelSpecL);
    const modelInputsR = new ModelInputs(modelSpecR);
    const comparisonDefs = resolveComparisonSpecsFromSources(modelInputsL, modelInputsR, options.comparison.specs);
    comparisonConfig = {
      bundleL: baselineBundle,
      bundleR: currentBundle,
      thresholds: options.comparison.thresholds,
      scenarios: getComparisonScenarios(comparisonDefs.scenarios),
      datasets: getComparisonDatasets(modelSpecL, modelSpecR, options.comparison.renamedDatasetKeys),
      viewGroups: comparisonDefs.viewGroups
    };
  }
  const checkConfig = {
    bundle: currentBundle,
    tests: options.check.tests
  };
  return {
    check: checkConfig,
    comparison: comparisonConfig
  };
}
async function loadSynchronized(sourceBundle) {
  const sourceModel = await sourceBundle.bundle.initModel();
  const synchronizedModel = synchronizedBundleModel(sourceModel);
  return {
    name: sourceBundle.name,
    version: sourceBundle.bundle.version,
    model: synchronizedModel
  };
}

// src/perf/perf-runner.ts
import { assertNever as assertNever12 } from "assert-never";

// src/perf/perf-stats.ts
var PerfStats = class {
  constructor() {
    this.times = [];
  }
  addRun(timeInMillis) {
    this.times.push(timeInMillis);
  }
  toReport() {
    if (this.times.length === 0) {
      return {
        minTime: 0,
        maxTime: 0,
        avgTime: 0,
        allTimes: []
      };
    }
    const minTime = Math.min(...this.times);
    const maxTime = Math.max(...this.times);
    const sortedTimes = this.times.sort();
    const minIndex = Math.floor(sortedTimes.length / 4);
    const maxIndex = minIndex + Math.ceil(sortedTimes.length / 2);
    const middleTimes = sortedTimes.slice(minIndex, maxIndex);
    const totalTime = middleTimes.reduce((a, b) => a + b, 0);
    const avgTime = totalTime / middleTimes.length;
    return {
      minTime,
      maxTime,
      avgTime,
      allTimes: sortedTimes
    };
  }
};

// src/perf/perf-runner.ts
var warmupCount = 5;
var runCount = 100;
var PerfRunner = class {
  constructor(bundleModelL, bundleModelR, mode = "serial") {
    this.bundleModelL = bundleModelL;
    this.bundleModelR = bundleModelR;
    this.mode = mode;
    const scenarioSpec = allInputsAtPositionSpec("at-default");
    this.taskQueue = new TaskQueue({
      process: async (request) => {
        switch (request.kind) {
          case "left": {
            const result = await bundleModelL.getDatasetsForScenario(scenarioSpec, []);
            return {
              runTimeL: result.modelRunTime
            };
          }
          case "right": {
            const result = await bundleModelR.getDatasetsForScenario(scenarioSpec, []);
            return {
              runTimeR: result.modelRunTime
            };
          }
          case "both": {
            const [resultL, resultR] = await Promise.all([
              bundleModelL.getDatasetsForScenario(scenarioSpec, []),
              bundleModelR.getDatasetsForScenario(scenarioSpec, [])
            ]);
            return {
              runTimeL: resultL.modelRunTime,
              runTimeR: resultR.modelRunTime
            };
          }
          default:
            assertNever12(request.kind);
        }
      }
    });
  }
  start() {
    const statsL = new PerfStats();
    const statsR = new PerfStats();
    this.taskQueue.onIdle = (error) => {
      var _a;
      if (error) {
        this.onError(error);
      } else {
        (_a = this.onComplete) == null ? void 0 : _a.call(this, statsL.toReport(), statsR.toReport());
      }
    };
    const taskQueue = this.taskQueue;
    function addTask(index, warmup, kind) {
      const key = `${warmup ? "warmup-" : ""}${kind}-${index}`;
      const request = {
        kind
      };
      taskQueue.addTask(key, request, (response) => {
        if (!warmup && response.runTimeL !== void 0) {
          statsL.addRun(response.runTimeL);
        }
        if (!warmup && response.runTimeR !== void 0) {
          statsR.addRun(response.runTimeR);
        }
      });
    }
    function addTasks(kind) {
      for (let i = 0; i < warmupCount; i++) {
        addTask(i, true, kind);
      }
      for (let i = 0; i < runCount; i++) {
        addTask(i, false, kind);
      }
    }
    if (this.mode === "parallel") {
      addTasks("both");
    } else {
      addTasks("left");
      addTasks("right");
    }
  }
};

// src/data/data-planner.ts
var DataPlanner = class {
  constructor(batchSize) {
    this.batchSize = batchSize;
    this.taskSetsLR = /* @__PURE__ */ new Map();
    this.taskSetsL = /* @__PURE__ */ new Map();
    this.taskSetsR = /* @__PURE__ */ new Map();
    this.complete = false;
  }
  addRequest(scenarioSpecL, scenarioSpecR, datasetKey, dataAction) {
    if (scenarioSpecL === void 0 && scenarioSpecR === void 0) {
      console.warn("WARNING: Both scenario specs are undefined for DataPlanner request, skipping");
      return;
    }
    let taskSetsMap;
    let uid;
    if (scenarioSpecL && scenarioSpecR) {
      taskSetsMap = this.taskSetsLR;
      uid = scenarioPairUid(scenarioSpecL, scenarioSpecR);
    } else if (scenarioSpecR) {
      taskSetsMap = this.taskSetsR;
      uid = scenarioSpecR.uid;
    } else {
      taskSetsMap = this.taskSetsL;
      uid = scenarioSpecL.uid;
    }
    let taskSet = taskSetsMap.get(uid);
    if (!taskSet) {
      taskSet = new DataTaskSet(scenarioSpecL, scenarioSpecR);
      taskSetsMap.set(uid, taskSet);
    }
    taskSet.addTask({
      datasetKey,
      dataAction
    });
  }
  buildPlan() {
    if (this.complete) {
      throw new Error("DataPlanner.buildPlan() can only be called once");
    }
    this.complete = true;
    const lKeyMappings = /* @__PURE__ */ new Map();
    const rKeyMappings = /* @__PURE__ */ new Map();
    for (const lrUid of this.taskSetsLR.keys()) {
      const [lUid, rUid] = lrUid.split("::");
      if (!lKeyMappings.has(lUid)) {
        lKeyMappings.set(lUid, lrUid);
      }
      if (!rKeyMappings.has(rUid)) {
        rKeyMappings.set(rUid, lrUid);
      }
    }
    function merge(taskSetsLR, taskSetsForSide, keyMappingsForSide) {
      for (const [keyForSide, taskSetForSide] of taskSetsForSide.entries()) {
        const lrKey = keyMappingsForSide.get(keyForSide);
        if (lrKey) {
          const taskSetLR = taskSetsLR.get(lrKey);
          taskSetLR.merge(taskSetForSide);
          taskSetsForSide.delete(keyForSide);
        }
      }
    }
    merge(this.taskSetsLR, this.taskSetsL, lKeyMappings);
    merge(this.taskSetsLR, this.taskSetsR, rKeyMappings);
    const requests = [];
    const batchSize = this.batchSize;
    function addRequests(taskSets) {
      for (const taskSet of taskSets) {
        requests.push(...taskSet.buildRequests(batchSize));
      }
    }
    addRequests(this.taskSetsLR.values());
    addRequests(this.taskSetsL.values());
    addRequests(this.taskSetsR.values());
    return {
      requests
    };
  }
};
var DataTaskSet = class {
  constructor(scenarioSpecL, scenarioSpecR) {
    this.scenarioSpecL = scenarioSpecL;
    this.scenarioSpecR = scenarioSpecR;
    this.modelTasks = /* @__PURE__ */ new Map();
    this.modelImplTasks = /* @__PURE__ */ new Map();
  }
  addTask(dataTask) {
    let taskMap;
    if (dataTask.datasetKey.startsWith("ModelImpl")) {
      taskMap = this.modelImplTasks;
    } else {
      taskMap = this.modelTasks;
    }
    let tasks = taskMap.get(dataTask.datasetKey);
    if (!tasks) {
      tasks = [];
      taskMap.set(dataTask.datasetKey, tasks);
    }
    tasks.push(dataTask);
  }
  merge(otherTaskSet) {
    for (const tasks of otherTaskSet.modelTasks.values()) {
      for (const task of tasks) {
        this.addTask(task);
      }
    }
    for (const tasks of otherTaskSet.modelImplTasks.values()) {
      for (const task of tasks) {
        this.addTask(task);
      }
    }
  }
  buildRequests(batchSize) {
    const dataRequests = [];
    if (this.modelTasks.size > 0) {
      const dataTasks = [];
      this.modelTasks.forEach((tasks) => dataTasks.push(...tasks));
      dataRequests.push({
        scenarioSpecL: this.scenarioSpecL,
        scenarioSpecR: this.scenarioSpecR,
        dataTasks
      });
    }
    if (this.modelImplTasks.size > 0) {
      const allKeys = [...this.modelImplTasks.keys()];
      for (let i = 0; i < allKeys.length; i += batchSize) {
        const batchKeys = allKeys.slice(i, i + batchSize);
        const dataTasks = [];
        for (const datasetKey of batchKeys) {
          dataTasks.push(...this.modelImplTasks.get(datasetKey));
        }
        dataRequests.push({
          scenarioSpecL: this.scenarioSpecL,
          scenarioSpecR: this.scenarioSpecR,
          dataTasks
        });
      }
    }
    return dataRequests;
  }
};
function scenarioPairUid(scenarioSpecL, scenarioSpecR) {
  const uidL = (scenarioSpecL == null ? void 0 : scenarioSpecL.uid) || "";
  const uidR = (scenarioSpecR == null ? void 0 : scenarioSpecR.uid) || "";
  return `${uidL}::${uidR}`;
}

// src/check/check-runner.ts
function runChecks(checkConfig, checkSpec, dataPlanner, refDataPlanner, simplifyScenarios) {
  const modelSpec = checkConfig.bundle.model.modelSpec;
  const checkPlanner = new CheckPlanner(modelSpec);
  checkPlanner.addAllChecks(checkSpec, simplifyScenarios);
  const checkPlan = checkPlanner.buildPlan();
  const refDatasets = /* @__PURE__ */ new Map();
  for (const [dataRefKey, dataRef] of checkPlan.dataRefs.entries()) {
    refDataPlanner.addRequest(void 0, dataRef.scenario.spec, dataRef.dataset.datasetKey, (datasets) => {
      const dataset = datasets.datasetR;
      if (dataset) {
        refDatasets.set(dataRefKey, dataset);
      }
    });
  }
  const checkResults = /* @__PURE__ */ new Map();
  for (const [checkKey, checkTask] of checkPlan.tasks.entries()) {
    dataPlanner.addRequest(void 0, checkTask.scenario.spec, checkTask.dataset.datasetKey, (datasets) => {
      const dataset = datasets.datasetR;
      const checkResult = runCheck(checkTask, dataset, refDatasets);
      checkResults.set(checkKey, checkResult);
    });
  }
  return () => {
    return buildCheckReport(checkPlan, checkResults);
  };
}
function runCheck(checkTask, dataset, refDatasets) {
  if (dataset === void 0) {
    return {
      status: "error",
      message: "no data available"
    };
  }
  let opRefDatasets;
  if (checkTask.dataRefs) {
    opRefDatasets = /* @__PURE__ */ new Map();
    for (const [op, dataRef] of checkTask.dataRefs.entries()) {
      const refDataset = refDatasets == null ? void 0 : refDatasets.get(dataRef.key);
      if (refDataset === void 0) {
        if (dataRef.dataset.datasetKey === void 0) {
          return {
            status: "error",
            errorInfo: {
              kind: "unknown-dataset",
              name: dataRef.dataset.name
            }
          };
        } else if (dataRef.scenario.spec === void 0) {
          if (dataRef.scenario.error) {
            return {
              status: "error",
              errorInfo: {
                kind: dataRef.scenario.error.kind,
                name: dataRef.scenario.error.name
              }
            };
          } else {
            let inputName;
            if (dataRef.scenario.inputDescs.length > 0) {
              inputName = dataRef.scenario.inputDescs[0].name;
            } else {
              inputName = "unknown";
            }
            return {
              status: "error",
              errorInfo: {
                kind: "unknown-input",
                name: inputName
              }
            };
          }
        } else {
          return {
            status: "error",
            message: "unresolved data reference"
          };
        }
      }
      opRefDatasets.set(op, refDataset);
    }
  }
  return checkTask.action.run(dataset, opRefDatasets);
}

// src/comparison/run/comparison-runner.ts
function runComparisons(comparisonConfig, dataPlanner) {
  const testReports = [];
  for (const scenario of comparisonConfig.scenarios.getAllScenarios()) {
    const datasetKeys = comparisonConfig.datasets.getDatasetKeysForScenario(scenario);
    for (const datasetKey of datasetKeys) {
      dataPlanner.addRequest(scenario.specL, scenario.specR, datasetKey, (datasets) => {
        const diffReport = diffDatasets(datasets.datasetL, datasets.datasetR);
        testReports.push({
          scenarioKey: scenario.key,
          datasetKey,
          diffReport
        });
      });
    }
  }
  return () => {
    return testReports;
  };
}

// src/suite/suite-runner.ts
var SuiteRunner = class {
  constructor(config, callbacks) {
    this.config = config;
    this.callbacks = callbacks;
    this.perfStatsL = new PerfStats();
    this.perfStatsR = new PerfStats();
    this.stopped = false;
    this.taskQueue = new TaskQueue({
      process: (request) => {
        return this.processRequest(request);
      }
    });
  }
  cancel() {
    if (!this.stopped) {
      this.stopped = true;
      this.taskQueue.shutdown();
    }
  }
  start(options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    (_b = (_a = this.callbacks).onProgress) == null ? void 0 : _b.call(_a, 0);
    const modelSpec = this.config.check.bundle.model.modelSpec;
    const dataPlanner = new DataPlanner(modelSpec.outputVars.size);
    const refDataPlanner = new DataPlanner(modelSpec.outputVars.size);
    const checkSpecResult = parseTestYaml(this.config.check.tests);
    if (checkSpecResult.isErr()) {
      (_d = (_c = this.callbacks).onError) == null ? void 0 : _d.call(_c, checkSpecResult.error);
      return;
    }
    const checkSpec = checkSpecResult.value;
    const simplifyScenarios = (options == null ? void 0 : options.simplifyScenarios) === true;
    const buildCheckReport2 = runChecks(this.config.check, checkSpec, dataPlanner, refDataPlanner, simplifyScenarios);
    let buildComparisonTestReports;
    if (this.config.comparison) {
      buildComparisonTestReports = runComparisons(this.config.comparison, dataPlanner);
    }
    this.taskQueue.onIdle = (error) => {
      var _a2, _b2, _c2, _d2;
      if (this.stopped) {
        return;
      }
      if (error) {
        (_b2 = (_a2 = this.callbacks).onError) == null ? void 0 : _b2.call(_a2, error);
      } else {
        const checkReport = buildCheckReport2();
        let comparisonReport;
        if (this.config.comparison) {
          comparisonReport = {
            testReports: buildComparisonTestReports(),
            perfReportL: this.perfStatsL.toReport(),
            perfReportR: this.perfStatsR.toReport()
          };
        }
        (_d2 = (_c2 = this.callbacks).onComplete) == null ? void 0 : _d2.call(_c2, {
          checkReport,
          comparisonReport
        });
      }
    };
    const refDataPlan = refDataPlanner.buildPlan();
    const dataPlan = dataPlanner.buildPlan();
    const dataRequests = [...refDataPlan.requests, ...dataPlan.requests];
    const taskCount = dataRequests.length;
    if (taskCount === 0) {
      let comparisonReport;
      if (this.config.comparison) {
        comparisonReport = {
          testReports: [],
          perfReportL: this.perfStatsL.toReport(),
          perfReportR: this.perfStatsR.toReport()
        };
      }
      this.cancel();
      (_f = (_e = this.callbacks).onProgress) == null ? void 0 : _f.call(_e, 1);
      (_h = (_g = this.callbacks).onComplete) == null ? void 0 : _h.call(_g, {
        checkReport: {
          groups: []
        },
        comparisonReport
      });
      return;
    }
    let tasksCompleted = 0;
    let dataTaskId = 1;
    for (const dataRequest of dataRequests) {
      this.taskQueue.addTask(`data${dataTaskId++}`, dataRequest, () => {
        var _a2, _b2;
        tasksCompleted++;
        (_b2 = (_a2 = this.callbacks).onProgress) == null ? void 0 : _b2.call(_a2, tasksCompleted / taskCount);
      });
    }
  }
  async processRequest(request) {
    var _a, _b;
    const datasetKeySet = /* @__PURE__ */ new Set();
    for (const dataTask of request.dataTasks) {
      datasetKeySet.add(dataTask.datasetKey);
    }
    const datasetKeys = [...datasetKeySet];
    async function getDatasets(bundleModel, scenarioSpec) {
      if (bundleModel && scenarioSpec) {
        return bundleModel.getDatasetsForScenario(scenarioSpec, datasetKeys);
      } else {
        return void 0;
      }
    }
    const bundleModelL = (_a = this.config.comparison) == null ? void 0 : _a.bundleL.model;
    const bundleModelR = ((_b = this.config.comparison) == null ? void 0 : _b.bundleR.model) || this.config.check.bundle.model;
    const [datasetsResultL, datasetsResultR] = await Promise.all([
      getDatasets(bundleModelL, request.scenarioSpecL),
      getDatasets(bundleModelR, request.scenarioSpecR)
    ]);
    if (datasetsResultL == null ? void 0 : datasetsResultL.modelRunTime) {
      this.perfStatsL.addRun(datasetsResultL == null ? void 0 : datasetsResultL.modelRunTime);
    }
    if (datasetsResultR == null ? void 0 : datasetsResultR.modelRunTime) {
      this.perfStatsR.addRun(datasetsResultR == null ? void 0 : datasetsResultR.modelRunTime);
    }
    const datasetMapL = datasetsResultL == null ? void 0 : datasetsResultL.datasetMap;
    const datasetMapR = datasetsResultR == null ? void 0 : datasetsResultR.datasetMap;
    for (const dataTask of request.dataTasks) {
      const datasetL = datasetMapL == null ? void 0 : datasetMapL.get(dataTask.datasetKey);
      const datasetR = datasetMapR == null ? void 0 : datasetMapR.get(dataTask.datasetKey);
      dataTask.dataAction({
        datasetL,
        datasetR
      });
    }
  }
};
function runSuite(config, callbacks, options) {
  const suiteRunner = new SuiteRunner(config, callbacks);
  suiteRunner.start(options);
  return () => {
    suiteRunner.cancel();
  };
}

// src/suite/suite-reporting.ts
function suiteSummaryFromReport(suiteReport) {
  const checkSummary = checkSummaryFromReport(suiteReport.checkReport);
  let comparisonSummary;
  if (suiteReport.comparisonReport) {
    comparisonSummary = comparisonSummaryFromReport(suiteReport.comparisonReport);
  }
  return {
    checkSummary,
    comparisonSummary
  };
}
export {
  CheckDataCoordinator,
  ComparisonDataCoordinator,
  PerfRunner,
  PerfStats,
  categorizeComparisonTestSummaries,
  checkReportFromSummary,
  checkSummaryFromReport,
  comparisonSummaryFromReport,
  createConfig,
  datasetMessage,
  diffDatasets,
  diffGraphs,
  predicateMessage,
  runSuite,
  scenarioMessage,
  suiteSummaryFromReport
};
//# sourceMappingURL=index.js.map