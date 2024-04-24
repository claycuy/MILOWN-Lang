document.addEventListener("DOMContentLoaded", function() {
  const milownTags = document.querySelectorAll("milown-code");
  milownTags.forEach(tag => {
    let code = '';
    if (tag.hasAttribute('src')) {
      const src = tag.getAttribute('src');
      fetch(src)
        .then(response => response.text())
        .then(srcCode => {
          code = srcCode;
          executeMilownCode(code);
          tag.remove(); // Menghapus tag kustom setelah kode dipindahkan
        })
        .catch(error => console.error('Error fetching MILOWN code:', error));
    } else {
      code = tag.textContent;
      executeMilownCode(code);
      tag.remove(); // Menghapus tag kustom setelah kode dipindahkan
    }
  });
});

function executeMilownCode(code) {
  if (code.includes('alert(') || code.includes('prompt(') || code.includes('console.log(')) {
    console.group('%cMILOWN-Lang - VERSION 0.1 BETA1', 'color: #fff; background-color: #555; border-radius: 2px; font-size: 15px; text-align: center; padding-left: 5px; padding-right: 5px;');
    console.error("Sorry, there was a syntax error in MILOWN-Lang that you wrote");
  } else {
    console.group('%cMILOWN-Lang - VERSION 0.1 BETA1', 'color: #fff; background-color: #555; border-radius: 2px; font-size: 15px; text-align: center;');
    console.log('%cMILOWN-Lang successfully running.', 'color: green;');
    
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
    
    const script = document.createElement("script");
    script.textContent = code;
    document.body.appendChild(script);
  }
}

// Definisi fungsi-fungsi MILOWN-Lang lainnya...

let run = {};
let create = {};
let edit = {};
let take = {};
let php = {};
let stepResult = "true";
let nextstepResult = "true";

// Definisi fungsi kustom
function toast(message) {
  alert(message);
}

toast.input = function inputToast(promptMessage) {
  return prompt(promptMessage);
}

toast.log = function logToast(message) {
  console.log('%c' + message, 'color: green;');
}

toast.warning = function warningToast(message) {
  console.warn(message);
}

toast.info = function infoToast(message) {
  console.info(message);
}

actionn = function action(actionName, action) {
  return function actionName(action) {
    
  }
}

document.select = function documentSelect(select) {
  return document.querySelector(select);
}

run.loop = function runLoop(time, loop, action) {
  for (let i = 0; i < loop; i++) { // Perbaiki loop
    setTimeout(function() {
      action();
    }, i * time);
  }
}

run.key = function runKey(key, callback) {
  document.addEventListener('keydown',function(event) {
    if (event.key === key) {
      callback();
    }
  });
}

run.mouse = function runMouse(button, callback) {
  document.addEventListener('mousedown',function (event) {
    if (event.button === button) {
      callback();
    }
  });
}

create.localData = function setLocalData(key, value) {
  localStorage.setItem(key, value);
}

create.sessionData = function setSessionData(key, value) {
  sessionStorage.setItem(key, value);
}

create.cookieData = function setCookieData(key, value) {
  document.cookie = key + '=' + value; // Ganti cara membuat cookie
}

create.element = function createElement(variableNameVar = "defaultName", type) {
  window[variableNameVar] = document.createElement(type);
}

let randomNum;
create.randomNum = function createRandomNum(count1, count2) {
  randomNum = Math.floor(Math.random() * count1) * count2;
}

edit.text = function setText(data, text) {
  return document.querySelector(data).textContent = text;
}

let localData

take.localData = function getLocalData(key) {
  localData = localStorage.getItem(key);
}

let sessionData
take.sessionData = function getSessionData(key) {
  sessionData = sessionStorage.getItem(key);
}

php.execution = function executionPhp(fileName) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", fileName, true);
    xhr.onreadystatechange =function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          backToast(fileName + " success reading"); // Perbaiki pesan sukses
        } else {
          backToast("Cannot read file with name " + fileName); // Perbaiki pesan error
        }
    };
    xhr.send();
}

php.database = function setDatabaseData(hostname, username, password, database) {
    var xhr = new XMLHttpRequest();
    var url = "lib/php/database.php"; // Perbaiki URL
    xhr.open("POST", url, true); // Gunakan metode POST
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange =function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            backToast("Successfully connected to the database"); // Perbaiki pesan sukses
        } else {
          backToast("Failed to connect to the database"); // Perbaiki pesan error
        }
    };
    var params = "hostname=" + encodeURIComponent(hostname) + "&username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&database=" + encodeURIComponent(database);
    xhr.send(params);
}

search = function search(web, userSearch) {
  let searchURL = web + "/search?q=" + userSearch;
  window.location.href = searchURL;
}

goPage = function goPage(page) {
  window.location.href = (page);
}
