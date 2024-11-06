let questionList = [
`function`,
`object`,
`list`,
`looping`,
`grouping`,
`sorting`,
`assign`,
`parameter`
]

let i = 0;
function gameStart () {

    document.querySelector(`#question`).innerText = questionList[i];
    i++;
}

function wrongAnswer() {
    document.querySelector(`#question`).style.color = "darkslategray";
}

gameStart();

function myFunction(event) {
    let key = event.key;
    let check = document.querySelector(`#question`).innerText;
    let test = document.querySelector(`#user-type`).value;
    // document.querySelector(`#question`).innerText = key;
    if (key === "Enter") {
        if (test === check) { // kalau benar
            gameStart();
        } else { // kalau salah
            document.querySelector(`#question`).style.color = "Red";
            setTimeout(wrongAnswer, 300);
        }
        document.querySelector(`#user-type`).value = "";
    }
}

