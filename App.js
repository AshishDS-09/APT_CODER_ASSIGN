const workspace = Blockly.inject("blocklyDiv", {
  toolbox: `
<xml xmlns="https://developers.google.com/blockly/xml">

  <category name="Values" colour="210">
    <block type="number_input"></block>
    <block type="text_input"></block>
  </category>

  <category name="Math" colour="230">
    <block type="math_operation"></block>
  </category>

  <category name="Logic" colour="20">
    <block type="compare"></block>
    <block type="if_else"></block>
  </category>

  <category name="Output" colour="160">
    <block type="print"></block>
  </category>

</xml>
`,
});

function generateCode() {
  const code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById("code").textContent = code;
}

function runCode() {
  document.getElementById("output").innerHTML = "";
  try {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    eval(code);
  } catch (e) {
    document.getElementById("output").innerText = "Error: " + e.message;
  }
}

function output(value) {
  document.getElementById("output").innerHTML += value + "<br>";
}

function clearAll() {
  workspace.clear();
  document.getElementById("code").textContent = "";
  document.getElementById("output").innerHTML = "";
}
