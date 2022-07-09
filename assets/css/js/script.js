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