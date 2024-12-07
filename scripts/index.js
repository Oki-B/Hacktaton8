const questionList = [
    "HTML", "CSS", "JavaScript", "element", "attribute", "anchor", "button", "section", "article", "header", "footer", "canvas", "source", "media", "image", "script", "style", "iframe", "audio", "video", "canvas", "progress", "label", "select", "option", "textarea", "form", "input", "action", "method", "target", "value", "submit", "disabled", "readonly", "checked", "required", "placeholder", "autocomplete", "enctype", "formdata", "response", "JSON", "fetch", "promise", "callback", "event", "listener", "timeout", "interval", "prevent", "default", "addEvent", "querySelector", "getElementById", "innerHTML", "textContent", "createElement", "createTextNode", "appendChild", "insertBefore", "replaceChild", "removeChild", "cloneNode", "localStorage", "sessionStorage", "cookie", "parseInt", "parseFloat", "isNaN", "Number", "String", "Boolean", "Object", "Array", "Date", "Math", "RegExp", "JSON.stringify", "JSON.parse", "map", "filter", "reduce", "forEach", "for...in", "for...of", "while", "switch", "default", "else", "else if", "ternary", "try...catch", "finally", "debugger", "undefined", "null", "NaN", "this", "super", "new", "constructor", "prototype", "inheritance", "closure", "hoisting", "scope", "lexical", "block", "let", "const", "function", "arrow function", "callback function", "spread", "rest", "destructuring", "template", "modules", "import", "export", "default", "named", "webpack", "babel", "npm", "node", "express", "react", "angular", "vue", "typescript", "next.js", "gatsby", "bootstrap", "tailwind", "responsive", "media query", "flexbox", "grid", "position", "relative", "absolute", "fixed", "sticky", "float", "clear", "z-index", "display", "visibility", "opacity", "model", "margin", "padding", "border", "width", "height", "max-width", "min-width", "min-height", "max-height", "font-family", "font-size", "font-weight", "font-style", "line-height", "letter-spacing", "align-items", "align-self", "justify-content", "flex-direction", "flex-wrap", "order", "overflow", "calc", "container", "grid-template", "grid-gap", "overflow-x", "overflow-y", "box-sizing", "border-radius", "outline", "cursor", "visibility", "filter", "clip-path", "opacity", "user-select", "white-space", "breakpoint", "container", "keyframes", "animation", "transition", "transform", "easing"
  ];


// Create Random no repeat list array for question list
let questions = [];
for (let question of questionList) {
    questions.push(question);
}

function randomQuestion () {
    let x = Math.floor((Math.random() * questions.length));
    console.log(x);
    document.querySelector("#question").innerText = questions[x];
    questions.splice(x, 1);
}



// Set-Up Game Duration

let j = 60;
let duration;
function timedown() {
  j--;
  document.querySelector("#time").innerText = j;
   
    if(j === 0) { 
        document.getElementById("time").innerHTML ="0"
        clearInterval(duration);
        alert("Game Over!");
    }
}

let startMusic = document.getElementById("start-music");
function gameTik(){     
startMusic.play();

    if ( j > 0) {
       duration = setInterval(`timedown()`, 1000);
    }
}


// let i = 0;
// function gameStart () {
    //     document.querySelector(`#question`).innerText = questionList[i];
    //     i++;
    // }
// gameStart();
    
document.querySelector(`#score-num`).innerText = 0;
randomQuestion();

function wrongAnswer() {
    document.querySelector(`#question`).style.color = "White";
}

function myFunction(event) {
    let key = event.key;
    let check = document.querySelector(`#question`).innerText;
    let test = document.querySelector(`#user-type`).value;
    // document.querySelector(`#question`).innerText = key;
    if (key === "Enter") {
        if (test === check) { // kalau benar
            randomQuestion();
            document.querySelector(`#score-num`).innerText = Number(document.querySelector(`#score-num`).innerText) + check.length;
        } else { // kalau salah
            document.querySelector(`#question`).style.color = "Red";
            setTimeout(wrongAnswer, 300);
        }
        document.querySelector(`#user-type`).value = "";
    }
}
