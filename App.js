const workspace = Blockly.inject("blocklyDiv", {
  toolbox: `
<xml xmlns="https://developers.google.com/blockly/xml">


  
  <category name="Student Data" colour="200">
  <block type="user_score"></block>
  <block type="text_input"></block>
  <block type="attendance_status"></block>
  </category>


  <category name="Math" colour="230">
    <block type="math_operation"></block>
  </category>
  <category name="Grades" colour="260">
  <block type="grade_block"></block>
  </category>


  <category name="Decision Logic" colour="120">
  <block type="compare"></block>
  <block type="eligibility_check"></block>
  <block type="if_else"></block>
  </category>

  <category name="Result Output" colour="160">
  <block type="result_message"></block>
  <block type="teacher_remark"></block>
  <block type="print"></block>
  </category>



</xml>
`,
});
let executionSteps = [];

function generateCode() {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById("code").textContent = code;
}

function runCode() {
  document.getElementById("output").innerHTML = "";
  executionSteps = [];

  try {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    eval(code);

    if (executionSteps.length === 0) {
      output("No output generated. Check your logic blocks.");
    }
  } catch (e) {
    document.getElementById("output").innerText = "Logic Error: " + e.message;
  }
}

function output(value) {
  executionSteps.push(value);
  document.getElementById("output").innerHTML += "➜ " + value + "<br>";
}

function clearAll() {
  workspace.clear();
  document.getElementById("code").textContent = "";
  document.getElementById("output").innerHTML = "";
}
