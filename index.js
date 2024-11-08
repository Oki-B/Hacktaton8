// tampilkan login form and dan sembunyikan registration form
function showLoginForm() {
    document.getElementById('login-box').style.display = 'block';
    document.getElementById('registration-box').style.display = 'none';
}

// tampilkan registration form dan sembunyikan login form
function showRegistrationForm() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('registration-box').style.display = 'block';
}

// Validasi Login
function validated() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Get users data from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the username and password match any stored users
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Save the username to sessionStorage for session persistence
        sessionStorage.setItem("username", username);

        // Redirect to game page
        window.location.href = 'main.html'; 
        return false; // Mencegah pengiriman formulir
    } else {
        alert("Username atau Password salah!");
        return false; //Mencegah pengiriman formulir
    }
}
// Register User
function registerUser() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        alert("Username sudah terdaftar!");
        return false;
    }

    // Add new user to users array
    users.push({ username, password });

    // Save updated users array to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Pendaftaran berhasil! Silakan login.");
    showLoginForm(); // Switch to login form after successful registration
    return false; // Mencegah pengiriman formulir
}



let questionList = [
    "HTML", "CSS", "JavaScript", "element", "attribute", "anchor", "button", "section", "article", "header", "footer", "canvas", "source", "media", "image", "script", "style", "iframe", "audio", "video", "canvas", "progress", "label", "select", "option", "textarea", "form", "input", "action", "method", "target", "value", "submit", "disabled", "readonly", "checked", "required", "placeholder", "autocomplete", "enctype", "formdata", "response", "JSON", "fetch", "promise", "callback", "event", "listener", "timeout", "interval", "prevent", "default", "addEvent", "querySelector", "getElementById", "innerHTML", "textContent", "createElement", "createTextNode", "appendChild", "insertBefore", "replaceChild", "removeChild", "cloneNode", "localStorage", "sessionStorage", "cookie", "parseInt", "parseFloat", "isNaN", "Number", "String", "Boolean", "Object", "Array", "Date", "Math", "RegExp", "JSON.stringify", "JSON.parse", "map", "filter", "reduce", "forEach", "for...in", "for...of", "while", "switch", "default", "else", "else if", "ternary", "try...catch", "finally", "debugger", "undefined", "null", "NaN", "this", "super", "new", "constructor", "prototype", "inheritance", "closure", "hoisting", "scope", "lexical", "block", "let", "const", "function", "arrow function", "callback function", "spread", "rest", "destructuring", "template", "modules", "import", "export", "default", "named", "webpack", "babel", "npm", "node", "express", "react", "angular", "vue", "typescript", "next.js", "gatsby", "bootstrap", "tailwind", "responsive", "media query", "flexbox", "grid", "position", "relative", "absolute", "fixed", "sticky", "float", "clear", "z-index", "display", "visibility", "opacity", "model", "margin", "padding", "border", "width", "height", "max-width", "min-width", "min-height", "max-height", "font-family", "font-size", "font-weight", "font-style", "line-height", "letter-spacing", "align-items", "align-self", "justify-content", "flex-direction", "flex-wrap", "order", "overflow", "calc", "container", "grid-template", "grid-gap", "overflow-x", "overflow-y", "box-sizing", "border-radius", "outline", "cursor", "visibility", "filter", "clip-path", "opacity", "user-select", "white-space", "breakpoint", "container", "keyframes", "animation", "transition", "transform", "easing"
  ];
  

  let i = 0;
  let score = 0;
  let timeLeft = 60;
  let duration;
  
  document.querySelector(`#score-num`).innerText = score;
  document.querySelector(`#time-num`).innerText = timeLeft;
  
  function gameStart() {
    
      document.querySelector(`#question`).innerText = questionList[i];
      i++;
  }
  
  function myFunction(event) {
      let key = event.key;
      let check = document.querySelector(`#question`).innerText;
      let test = document.querySelector(`#user-type`).value;
  
      if (key === "Enter") {
          if (test === check) {
              score += check.length;
              gameStart();
              document.querySelector(`#score-num`).innerText = score;
          } else {
              document.querySelector(`#question`).style.color = "Red";
              setTimeout(() => {
                  document.querySelector(`#question`).style.color = "darkslategray";
              }, 300);
          }
          document.querySelector(`#user-type`).value = "";
      }
  }
  

  let startMusic = document.getElementById("start-music");
  function gameTik() {
    startMusic.play();

      duration = setInterval(function () {
          timeLeft--;
          document.querySelector(`#time-num`).innerText = timeLeft;
          if (timeLeft === 0) {
              clearInterval(duration);

              startMusic.pause();
              startMusic.currentTime = 0; 
              alert("Waktu Habis! Skor Anda: " + score);
          }
      }, 1000);
      gameStart();
  }
function saveScore() {
    let savedScores = JSON.parse(localStorage.getItem("scores")) || [];
    savedScores.push(score);
    localStorage.setItem("scores", JSON.stringify(savedScores));
    alert("Score saved successfully!");
}

// Read (Show Saved Scores)
function showScores() {
    let savedScores = JSON.parse(localStorage.getItem("scores")) || [];
    let scoreListElement = document.getElementById("scores");
    scoreListElement.innerHTML = ""; // Clear current list

    if (savedScores.length === 0) {
        scoreListElement.innerHTML = "<li>No scores saved yet!</li>";
    } else {
        savedScores.forEach((savedScore, index) => {
            let scoreItem = document.createElement("li");
            scoreItem.textContent = `Score ${index + 1}: ${savedScore}`;
            scoreListElement.appendChild(scoreItem);
        });
    }
}

// Delete (Clear All Saved Scores)
function clearScores() {
    localStorage.removeItem("scores");
    showScores(); // Refresh the list to show that it's empty
    alert("All scores have been cleared.");
}

