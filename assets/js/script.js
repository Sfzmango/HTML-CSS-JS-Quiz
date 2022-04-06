var timeEl = document.querySelector(".time");
var finalTimeEl = document.querySelector(".finalTime");
var finalScoreEl = document.querySelector(".finalScore");
var scoreEl = document.querySelector(".score");
var questEl = document.querySelector(".quest");
var option1EL = document.getElementById("option1");
var option2EL = document.getElementById("option2");
var option3EL = document.getElementById("option3");
var option4EL = document.getElementById("option4");
var selectedAns = document.getElementsByClassName("qChoices");
var correctAns = "";


var stopTimer = false;

var promptNum = 2;
var secondsRemaining = 5;
var score = 0;
var finalScore = 0;
var finalTime = 0;

var q1 = ["What does HTML do?", "Provide a basic structure for a page", "Provides the visual design of styles", "Provides additional features using scripts", "None of the above"]
var q2 = ["What does CSS do?", "Provide a basic structure for a page", "Provides the visual design of styles", "Provides additional features using scripts", "None of the above"]
var q3 = ["What does Javascript do?", "Provide a basic structure for a page", "Provides the visual design of styles", "Provides additional features using scripts", "None of the above"]
var q4 = ["", "", "", "", ""]
var q5 = ["", "", "", "", ""]

// changes current box to the next box down the sibling list
function nextPrompt() {
    var currentBox = document.body.children[promptNum];
    currentBox.style.display = "none";
    var nextBox = currentBox.nextElementSibling;
    nextBox.style.display = "block";
    promptNum++;
    return promptNum;
};

function checker() {

}

function question1() {
    questEl.textContent = q1[0];
    option1EL.setAttribute("value", q1[1]);
    option2EL.setAttribute("value", q1[2]);
    option3EL.setAttribute("value", q1[3]);
    option4EL.setAttribute("value", q1[4]);

    correctAns = q1[1];

    selectedAns.addEventListener("click", function () {
        if (selectedAns == q1[1]) {
            score += 10;
            question2();
        }
        if (selectedAns != q1[1]) {
            score -= 10;
            secondsRemaining -= 5;
            question2();
        }
    });
    console.log(score);
}

function question2() {
    questEl.textContent = q2[0];
    option1EL.setAttribute("value", q2[1]);
    option2EL.setAttribute("value", q2[2]);
    option3EL.setAttribute("value", q2[3]);
    option4EL.setAttribute("value", q2[4]);

    correctAns = q2[2];

    selectedAns.addEventListener("click", function () {
        if (selectedAns == correctAns) {
            score += 10;
            question2();
        }
        if (selectedAns != correctAns) {
            score -= 10;
            secondsRemaining -= 5;
            question2();
        }
    });

    console.log(score);
}

function question3() {
    questEl.textContent = q3[0];
    option1EL.setAttribute("value", q3[1]);
    option2EL.setAttribute("value", q3[2]);
    option3EL.setAttribute("value", q3[3]);
    option4EL.setAttribute("value", q3[4]);

    correctAns = q3[3];

    if (selectedAns == correctAns) {
        score += 10;
        nextPrompt();
    }
    if (selectedAns != correctAns) {
        score -= 10;
        secondsRemaining -= 5;
        nextPrompt();
    }

    // function checker() {
    //     if (selectedAns.value === q3[3]) {
    //         score = + 10;
    //         question4();
    //         return;
    //     }
    //     if (selectedAns.value !== q3[3]) {
    //         score -= 10;
    //         secondsRemaining -= 5;
    //         question4();
    //         return;
    //     }
    // }
    // selectedAns.addEventListener("click", checker);
    console.log(score);
}

// sets a timer function upon confirming starting the quiz
function startQuiz() {
    nextPrompt();
    question1();
    // var timer = setInterval(function () {
    //     if (!stopTimer) {
    //         secondsRemaining--;
    //         timeEl.textContent = secondsRemaining;
    //         if (secondsRemaining === 0) {
    //             clearInterval(timer);
    //             endQuiz();
    //             score = 0;
    //         }
    //     }
    // }, 1000);
}

function endQuiz() {
    stopTimer = true;
    finalTime = secondsRemaining;
    finalScore = score + finalTime;
    nextPrompt();
    finalTimeEl.textContent = finalTime;
    finalScoreEl.textContent = finalScore;
}