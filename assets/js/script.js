var timeEl = document.querySelector(".time");
var finalTimeEl = document.querySelector(".finalTime");
var finalScoreEl = document.querySelector(".finalScore");
var scoreEl = document.querySelector(".score");
var questEl = document.querySelector(".quest");
var option1EL = document.getElementById("option1");
var option2EL = document.getElementById("option2");
var option3EL = document.getElementById("option3");
var option4EL = document.getElementById("option4");
var optionsEl = document.querySelector(".options");
var highScore = document.querySelector(".highScore");
var saveScore = document.querySelector(".saveScore");
var inputName = document.querySelector(".inputName");

var stopTimer = false;

var promptNum = 2;
var secondsRemaining = 60;
var score = 0;
var finalScore = 0;
var finalTime = 0;

// changes current box to the next box down the sibling list
function nextPrompt() {
    var currentBox = document.body.children[promptNum];
    currentBox.style.display = "none";
    var nextBox = currentBox.nextElementSibling;
    nextBox.style.display = "block";
    promptNum++;
    return promptNum;
};

var qNum = 3;

function nextQ() {
    var currentBox = document.body.children[4].children[qNum];
    console.log(currentBox);
    currentBox.style.display = "none";
    var nextBox = currentBox.nextElementSibling;
    nextBox.style.display = "block";
    qNum++;
    return qNum;
}

function correct() {
    alert("Correct!");
    nextQ();
};

function incorrect() {
    alert("Incorrect!")
    secondsRemaining -= 5;
    nextQ();
};

function lqC() {
    alert("Correct!");
    endQuiz();
}

function lqI() {
    alert("Incorrect!")
    secondsRemaining -= 5;
    endQuiz();
}

// sets a timer function upon confirming starting the quiz
function startQuiz() {
    nextPrompt();
    var timer = setInterval(function () {
        if (!stopTimer) {
            secondsRemaining--;
            timeEl.textContent = secondsRemaining;
            if (secondsRemaining === 0) {
                clearInterval(timer);
                endQuiz();
                score = 0;
            }
        }
    }, 1000);
}

function endQuiz() {
    stopTimer = true;
    finalTime = secondsRemaining;
    nextPrompt();
    finalTimeEl.textContent = finalTime;
}

saveScore.addEventListener("click", function () {

    var saveS = {
        initials: inputName.value,
        time: finalTime.value,
    }

    localStorage.setItem("saveSStringify", JSON.stringify(saveS));
    localStorage.setItem("saveS", saveS);
});