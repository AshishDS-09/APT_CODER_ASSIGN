// number block
Blockly.JavaScript.forBlock['number_input'] = function (block) {
  const num = block.getFieldValue('NUM');
  return [num, Blockly.JavaScript.ORDER_ATOMIC];
};

// text block
Blockly.JavaScript.forBlock['text_input'] = function (block) {
  const text = block.getFieldValue('TEXT');
  return [`"${text}"`, Blockly.JavaScript.ORDER_ATOMIC];
};

// math operation
Blockly.JavaScript.forBlock['math_operation'] = function (block) {
  const a =
    Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const b =
    Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const op = block.getFieldValue('OP');

  return [`(${a} ${op} ${b})`, Blockly.JavaScript.ORDER_ATOMIC];
};

// comparison
Blockly.JavaScript.forBlock['compare'] = function (block) {
  const a =
    Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const b =
    Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  const cmp = block.getFieldValue('CMP');

  return [`(${a} ${cmp} ${b})`, Blockly.JavaScript.ORDER_ATOMIC];
};

// if-else
Blockly.JavaScript.forBlock['if_else'] = function (block) {
  const cond =
    Blockly.JavaScript.valueToCode(block, 'COND', Blockly.JavaScript.ORDER_NONE) || false;
  const ifCode = Blockly.JavaScript.statementToCode(block, 'IF');
  const elseCode = Blockly.JavaScript.statementToCode(block, 'ELSE');

  return `if ${cond} {\n${ifCode}} else {\n${elseCode}}\n`;
};

// print
Blockly.JavaScript.forBlock['print'] = function (block) {
  const text =
    Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || '""';

  return `output(${text});\n`;
};
