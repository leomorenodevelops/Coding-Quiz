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
var submitEl = document.getElementById("submit-score");
// timer elements
var questionEl = document.getElementById("question");
var timerEl = document.getElementById("timer");
var score = 0;
var timeLeft;
var gameOver;
timerEl.innerText = 0;

// high score array
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// assign array shuffled questions
var shuffleQuestions;
var questionIndex = 0;

// the array of questions for coding quiz challenge
var questions = [
    { Q: 'Commonly used data types DO Not Include:',
    choices: [{choice: '1. strings'}, {choice: '2. booleans'}, {choice: '3. alerts'}, {choice: '4. numbers'}],
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


// set time to timer and setting the timer start time to 75 seconds
var setTime = function() {
    timeLeft = 75;

    var timerCheck = setInterval(function() {
        timerEl.innerText = timeLeft;
        timeLeft--;

        if (gameOver) {
            clearInterval(timerCheck);
        }

        if (timeLeft < 0) {
            showScore();
            timerEl.innerText = 0;
            clearInterval(timerCheck);
        }

    }, 1000)
}

// start coding quiz challenge and added class to hide start screen and show questions screen.
var startGame = function() {
    startContainerEl.classList.add("hide");
    startContainerEl.classList.remove("show");
    questionContainerEl.classList.remove("hide");
    questionContainerEl.classList.add("show");
    // randomizing order of questions.
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    setTime();
    setQuestion();
}

// sets next quiz question
var setQuestion = function() {
    resetAnswer();
    displayQuestion(shuffleQuestions[questionIndex]);
}

// removes answer buttons
var resetAnswer = function() {
    while (chooseAnswerEl.firstChild) {
        chooseAnswerEl.removeChild(chooseAnswerEl.firstChild);
    }
}

// displays questions including answer buttons
var displayQuestion = function(index) {
    questionEl.innerText = index.Q;

    for (var i = 0; i < index.choices.length; i++) {
        var answerButton = document.createElement('button');
        answerButton.innerText = index.choices[i].choice;
        answerButton.classList.add('answerbtn');
        answerButton.addEventListener("click", answerCheck);
        chooseAnswerEl.appendChild(answerButton)
    }
}

// add banner class to display Correct! when correct answer is chosen.
var answerCorrect = function() {

    if (correctEl.className = "hide") {
        correctEl.classList.remove("hide");
        correctEl.classList.add("banner");
        wrongEl.classList.remove("banner");
        wrongEl.classList.add("hide");
    }
}

// add banner class to display Wrong! when the wrong answer is chosen.
var answerWrong = function() {

    if (wrongEl.className = "hide") {
        wrongEl.classList.remove("hide");
        wrongEl.classList.add("banner");
        correctEl.classList.remove("banner");
        correctEl.classList.add("hide");
    }
}

// verifies right answer was selected if so user scores 10 points, if not user loses 10 seconds and 10 points.
var answerCheck = function(event) {
    var answerSelect = event.target;

    if (shuffleQuestions[questionIndex].A === answerSelect.innerText) {
        answerCorrect();
        score = score + 10;
    }

    else {
        answerWrong();
        score = score - 10;
        timeLeft = timeLeft - 10;
    };

    // goes to next question but if no more questions remain it's game over and then shows score.
    questionIndex++

    if (shuffleQuestions.length > questionIndex) {
        setQuestion();
    }

    else {
        gameOver = "true";
        showScore();
    }
}

// displays total score screen at the end of the coding quiz
var showScore = function() {
    questionContainerEl.classList.add("hide");
    endContainerEl.classList.remove("hide");
    endContainerEl.classList.add("show");

    var scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = ("Your final score is " + score +".");
    scoreEl.appendChild(scoreDisplay);
}

// create high score values
var highscoreVal = function(event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    if (!initials) {
        alert("Enter initials!");
        return;
    }
}
var saveHighscore = function() {
    var highScore = {
        initials: initialsFormEl.value,
        score: score
    }
    highScores.push(highScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    displayHighscores();
}

var loadHighscore = function() {
    
    highScores.sort((a, b) => {return b.score-a.score})

    for (var i = 0; i < highScores.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.className = "high-score";
        highscoreEl.innerText = highScores[i].initials + " - " + highScores[i].score;
        highscoreListEl.appendChild(highscoreEl);
    }
}

var displayHighscores = function() {

    highscoreContainerEl.classList.remove("hide");
    highscoreContainerEl.classList.add("show");
    gameOver = "true";

    if (endContainerEl.className = "show") {
        endContainerEl.classList.remove("show");
        endContainerEl.classList.add("hide");
    }

    if (startContainerEl.className = "show") {
        startContainerEl.classList.remove("show");
        startContainerEl.classList.add("hide");
    }

    if (questionContainerEl.className = "show") {
        questionContainerEl.classList.remove("show");
        questionContainerEl.classList.add("hide");
    }

    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide");
    }

    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }
    loadHighscore();
}

// on start click, start game
startGameEl.addEventListener("click", startGame);

submitEl.addEventListener("click", saveHighscore);

viewHighscoreEl.addEventListener("click", displayHighscores);