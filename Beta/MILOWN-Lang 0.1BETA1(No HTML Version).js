const fs = require('fs');
const vm = require('vm');

const locate = 'script.milown';
const end = locate.substring(locate.lastIndexOf('.') + 1);
if (locate.endsWith('.milown') || locate.endsWith('.milown-lang')) {
  let code = '';
const command = fs.readFileSync(locate, 'utf-8');
code = command;

let toast = {};
code = code.replace(/\*\*/g, '//');
code = code.replace(/\#\*/g, '/*');
code = code.replace(/\*\#/g, '*/');
code = code.replace(/#([a-zA-Z0-9]+)/g, (match, p1) => `/*${p1}*/`);
code = code.replace(/@:([a-zA-Z]+)/g, (match, p1) => '${' + `${p1}` + '}');
code = code.replace(/@{([a-zA-Z0-9]+)}/g, (match, p1) => '{' + `${p1}` + '}');
code = code.replace(/ @\+ /g, ' + ');
code = code.replace(/==\:/g, '==');
code = code.replace(/===\:/g, '===');
code = code.replace(/!=\:/g, '!=');
code = code.replace(/!==\:/g, '!==');
code = code.replace(/step\(/g, 'if(');
code = code.replace(/step \(/g, 'if (');
code = code.replace(/\}next\(/g, '}else if(');
code = code.replace(/\} next \(/g, '} else if (');
code = code.replace(/\}stepout\{/g, '}else{');
code = code.replace(/\} stepout \{/g, '} else {');
code = code.replace(/toast\(/g, 'alert(');
code = code.replace(/toast.input\(/g, 'prompt(');
code = code.replace(/toast.comfirm\(/g, 'confirm(');
code = code.replace(/toast.log\(/g, 'console.log(');
code = code.replace(/toast.info\(/g, 'console.info(');
code = code.replace(/toast.error\(/g, 'console.error(');
code = code.replace(/toast.warning\(/g, 'toast.warn(');
code = code.replace(/mutable ([a-zA-Z]+)/g, (match, p1) => `let ${p1}`);
code = code.replace(/variable ([a-zA-Z]+)/g, (match, p1) => `var ${p1}`);
code = code.replace(/constant ([a-zA-Z]+)/g, (match, p1) => `const ${p1}`);
code = code.replace(/action = ([a-zA-Z]+)\(/g, (match, p1) => `function ${p1}(`);
code = code.replace(/toast.confirm/g, 'confirm');
code = code.replace(/math\.plus\((\d+) \+ (\d+)\)/g, (match, p1, p2) => `${p1}` + ' + ' + `${p2}`);
code = code.replace(/math\.minus\((\d+) \- (\d+)\)/g, (match, p1, p2) => `${p1}` + ' - ' + `${p2}`);
code = code.replace(/math\.multiply\((\d+) \* (\d+)\)/g, (match, p1, p2) => `${p1}` + ' * ' + `${p2}`);
code = code.replace(/math\.devide\((\d+) \/ (\d+)\)/g, (match, p1, p2) => `${p1}` + ' / ' + `${p2}`);
    code = code.replace(/newDate\(\)/g, 'new Date()');
code = code.replace(/get\.date\(([a-zA-Z]+): date \+ month \+ year\)/g, (match, p1) => `${p1}` + ".getDate() + '/' + (" + `${p1}` + ".getMonth() + 1) + '/' +" + `${p1}` + ".getFullYear()");
code = code.replace(/get\.clock\(([a-zA-Z]+): hour \+ minute \+ second\)/g, (match, p1) => `${p1}` + ".getHours() + ':' + " + `${p1}` + ".getMinutes() + ':' + " + `${p1}` + ".getSeconds()");

let run = {};
run.loop = function runLoop(time, loop, action) {
  for (let i = 0; i < loop; i++) { // Perbaiki loop
    setTimeout(function() {
      action();
    }, i * time);
  }
}

vm.runInThisContext(code);
} else {
  console.error("Invalid ekstension '." + end + "'");
}
