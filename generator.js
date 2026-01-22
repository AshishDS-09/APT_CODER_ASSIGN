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

// decision label
Blockly.JavaScript.forBlock['decision_label'] = function (block) {
  const label = block.getFieldValue('LABEL');
  return `output("Decision: ${label}");\n`;
};

// user score
Blockly.JavaScript.forBlock['user_score'] = function (block) {
  const score = block.getFieldValue('SCORE');
  return [score, Blockly.JavaScript.ORDER_ATOMIC];
};

// result message
Blockly.JavaScript.forBlock['result_message'] = function (block) {
  const msg = block.getFieldValue('MSG');
  return `output("${msg}");\n`;
};
// grade block
Blockly.JavaScript.forBlock['grade_block'] = function (block) {
  const score =
    Blockly.JavaScript.valueToCode(block, 'SCORE', Blockly.JavaScript.ORDER_NONE) || 0;

  const code = `
(${score} >= 75 ? "Grade A" :
 ${score} >= 60 ? "Grade B" :
 ${score} >= 40 ? "Grade C" :
 "Fail")
`;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.forBlock['attendance_status'] = function (block) {
  const status = block.getFieldValue('STATUS');
  return [status === "good", Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript.forBlock['eligibility_check'] = function (block) {
  const scoreOk =
    Blockly.JavaScript.valueToCode(block, 'SCORE_OK', Blockly.JavaScript.ORDER_ATOMIC) || false;
  const attOk =
    Blockly.JavaScript.valueToCode(block, 'ATT_OK', Blockly.JavaScript.ORDER_ATOMIC) || false;

  return [`(${scoreOk} && ${attOk})`, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript.forBlock['teacher_remark'] = function (block) {
  const remark = block.getFieldValue('REMARK');
  return `output("Teacher Remark: ${remark}");\n`;
};

