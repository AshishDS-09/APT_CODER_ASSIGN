Blockly.defineBlocksWithJsonArray([

  {
    type: "number_input",
    message0: "number %1",
    args0: [{ type: "field_number", name: "NUM", value: 0 }],
    output: "Number",
    colour: 210,
    tooltip: "Enter a numeric value",
  },

  {
    type: "text_input",
    message0: "text %1",
    args0: [{ type: "field_input", name: "TEXT", text: "hello" }],
    output: "String",
    colour: 290,
    tooltip: "Enter a text value",
  },


  {
    type: "math_operation",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Number" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["+", "+"],
          ["-", "-"],
          ["×", "*"],
          ["÷", "/"],
        ],
      },
      { type: "input_value", name: "B", check: "Number" },
    ],
    output: "Number",
    colour: 230,
    tooltip: "Perform a mathematical operation",
  },

  {
    type: "compare",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Number" },
      {
        type: "field_dropdown",
        name: "CMP",
        options: [
          [">", ">"],
          ["<", "<"],
          ["=", "=="],
        ],
      },
      { type: "input_value", name: "B", check: "Number" },
    ],
    output: "Boolean",
    colour: 20,
    tooltip: "Compare two values",
  },
  {
    type: "if_else",
    message0: "if %1 then %2 else %3",
    args0: [
      { type: "input_value", name: "COND", check: "Boolean" },
      { type: "input_statement", name: "IF" },
      { type: "input_statement", name: "ELSE" },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 120,
    tooltip: "Run blocks based on a condition",
  },

  {
    type: "print",
    message0: "print %1",
    args0: [{ type: "input_value", name: "TEXT" }],
    previousStatement: null,
    nextStatement: null,
    colour: 160,
    tooltip: "Display output",
  },

  {
    type: "decision_label",
    message0: "decision note %1",
    args0: [
      {
        type: "field_input",
        name: "LABEL",
        text: "Condition matched",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 45,
    tooltip: "Describe why this decision occurred",
  },
  {
    type: "attendance_status",
    message0: "attendance is %1",
    args0: [
      {
        type: "field_dropdown",
        name: "STATUS",
        options: [
          ["Good (≥75%)", "good"],
          ["Poor (<75%)", "poor"]
        ]
      }
    ],
    output: "Boolean",
    colour: 180,
    tooltip: "Check if attendance criteria is met"
  }
  ,
  {
    type: "eligibility_check",
    message0: "student is eligible if score %1 and attendance %2",
    args0: [
      { type: "input_value", name: "SCORE_OK", check: "Boolean" },
      { type: "input_value", name: "ATT_OK", check: "Boolean" }
    ],
    output: "Boolean",
    colour: 95,
    tooltip: "Final eligibility decision"
  }
  ,
  {
    type: "teacher_remark",
    message0: "teacher remark %1",
    args0: [
      {
        type: "field_input",
        name: "REMARK",
        text: "Needs improvement"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 25,
    tooltip: "Teacher feedback for student"
  }
  ,

  {
    type: "user_score",
    message0: "student score %1",
    args0: [
      {
        type: "field_number",
        name: "SCORE",
        value: 75,
        min: 0,
        max: 100,
      },
    ],
    output: "Number",
    colour: 200,
    tooltip: "Student exam score",
  },
  {
    type: "result_message",
    message0: "show result message %1",
    args0: [
      {
        type: "field_dropdown",
        name: "MSG",
        options: [
          ["Passed the exam 🎉", "Passed the exam 🎉"],
          ["Failed, try again ❌", "Failed, try again ❌"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 160,
    tooltip: "Final student result",
  },
  {
    "type": "grade_block",
    "message0": "assign grade for score %1",
    "args0": [
      { "type": "input_value", "name": "SCORE", "check": "Number" }
    ],
    "output": "String",
    "colour": 260,
    "tooltip": "Generate grade based on marks"
  }


]);
