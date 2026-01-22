Blockly.defineBlocksWithJsonArray([

  /* ---------- Number ---------- */
  {
    "type": "number_input",
    "message0": "number %1",
    "args0": [
      { "type": "field_number", "name": "NUM", "value": 0 }
    ],
    "output": "Number",
    "colour": 210,
    "tooltip": "Enter a numeric value"
  },

  /* ---------- Text ---------- */
  {
    "type": "text_input",
    "message0": "text %1",
    "args0": [
      { "type": "field_input", "name": "TEXT", "text": "hello" }
    ],
    "output": "String",
    "colour": 290,
    "tooltip": "Enter a text value"
  },

  /* ---------- Math Operation ---------- */
  {
    "type": "math_operation",
    "message0": "%1 %2 %3",
    "args0": [
      { "type": "input_value", "name": "A", "check": "Number" },
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          ["+", "+"],
          ["-", "-"],
          ["×", "*"],
          ["÷", "/"]
        ]
      },
      { "type": "input_value", "name": "B", "check": "Number" }
    ],
    "output": "Number",
    "colour": 230,
    "tooltip": "Perform a mathematical operation"
  },

  /* ---------- Comparison ---------- */
  {
    "type": "compare",
    "message0": "%1 %2 %3",
    "args0": [
      { "type": "input_value", "name": "A", "check": "Number" },
      {
        "type": "field_dropdown",
        "name": "CMP",
        "options": [
          [">", ">"],
          ["<", "<"],
          ["=", "=="]
        ]
      },
      { "type": "input_value", "name": "B", "check": "Number" }
    ],
    "output": "Boolean",
    "colour": 20,
    "tooltip": "Compare two values"
  },

  /* ---------- If Else ---------- */
  {
    "type": "if_else",
    "message0": "if %1 then %2 else %3",
    "args0": [
      { "type": "input_value", "name": "COND", "check": "Boolean" },
      { "type": "input_statement", "name": "IF" },
      { "type": "input_statement", "name": "ELSE" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "Run blocks based on a condition"
  },

  /* ---------- Print ---------- */
  {
    "type": "print",
    "message0": "print %1",
    "args0": [
      { "type": "input_value", "name": "TEXT" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 160,
    "tooltip": "Display output"
  }

]);

