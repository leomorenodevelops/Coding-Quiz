var questionContainerEl = document.getElementById("question-container");
var startContainerEl = document.getElementById("start-container");
var endContainerEl = document.getElementById("end-container");
var scoreEl = document.getElementById("score");
var initialsFormEl = document.getElementById("initials-form");
var highscoreContainerEl = document.getElementById("high-score-container");
var viewHighscoreEl = document.getElementById("view-high-score");
var highscoreListEl = document.getElementById("high-score-list");
var correctEl = document.getElementById("correct");
var wrongEl = document.getElementById("wrong");
// button elements
var startGameEl = document.getElementById("start-game");
var goBackEl = document.getElementById("go-back");
var clearHighscoreEl = document.getElementById("clear-high-score");
var chooseAnswerEl = document.getElementById("choose-answer");
var questionEl = document.getElementById("question");
// timer elements
var timerEl = document.getElementById("timer");
var score = 0;
var timeLeft;
var gameOver;
timerEl.innerText = 0;

// high score array
var highScores [];

// assign array shuffled questions
var shuffledQuestions;
var questionIndex = 0;

// the array of questions for coding quiz challenge
var questions = [
    { Q: 'Commonly used data types DO Not Include:',
    choices: [{choice: '1. strings'}, {choice: '2. booleans'}, {choice: '3. alerts'}, {choice: '4.'}],
      A: '3. alerts'
    },
    { Q: 'The condition in an if / else statement is enclosed with __________.',
    choices: [{choice: '1. quotes'}, {choice: '2. curly brackets'}, {choice: '3. parenthesis'}, {choice: '4. square brackets'}],
      A: '3. parenthesis'
    },
    { Q: 'Arrays in JavaScript can be used to store__________.',
    choices: [{choice: '1. numbers and strings'}, {choice: '2. other arrays'}, {choice: '3. booleans'}, {choice: '4. all of the above'}],
      A: '4. all of the above'
    },
    { Q: 'String values must be enclosed within __________ when being assigned to variables.',
    choices: [{choice: '1. commas'}, {choice: '2. curly brackets'}, {choice: '3. quotes'}, {choice: '4. parenthesis'}],
      A: '3. quotes'
    },
    { Q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: [{choice: '1. JavaScript'}, {choice: '2. terminal/bash'}, {choice: '3. for loops'}, {choice: '4. console.log'}],
      A: '4. console.log'
    },
];

// when go back button is clicked on high score page it goes back to start quiz page
var renderStartPage = function () {
    highscoreContainerEl.classList.add("hide");
    highscoreContainerEl.classList.remove("show");
    startContainerEl.classList.remove("hide");
    startContainerEl.classList.add("show");
    scoreEl.removeChild(scoreEl.lastChild);
    questionIndex = 0;
    gameOver = "";
    timerEl.textContent = 0;
    score = 0;

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide");
    }
    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }
}