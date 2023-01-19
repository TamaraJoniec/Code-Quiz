
// WHEN I click the start button THEN a timer starts 

let seconds = 60;
let questionNmb = 0;
let result = 0;
let questCount = 1;

// Click the button to start

function startTheQuiz() {
    startScreen.style.display = "none";
    questionDisplay.style.display = "block";
    //
    questionNmb = 0
    timer();
    displayQuestion(questionNmb);
}

function timer() {
    let timerInterval = setInterval(function () {
        seconds--;
        console.log(seconds)
        timeRemaining.textContent = "Time left: " + seconds + " s";

        //created an if statement, if time has ran out, to tell the user
        if (seconds <= 0) {
            clearInterval(timerInterval);
            timeRemaining.textContent = "Your time has ran out";
            finish.textContent = "Your time has ran out";
            finishedQuiz();
            //adding an else if statement if the user finishes in time
        } else if (questCount >= questionLists.length + 1) {
            clearInterval(timerInterval);
            finishedQuiz();
        }
    }, 1000);

}
// WHEN a timer starts and I am presented with a question
// Created variables for option buttons, linked back to html file.

// Display Q&A
let optionButtons = document.querySelector(".choices");
let optionButton1 = document.getElementById("option_button1");
let optionButton2 = document.getElementById("option_button2");
let optionButton3 = document.getElementById("option_button3");
let optionButton4 = document.getElementById("option_button4");

function displayQuestion(n) {
    document.getElementById("question-title").textContent = questionLists[n].question;
    optionButton1.textContent = questionLists[n].choices[0];
    optionButton2.textContent = questionLists[n].choices[1];
    optionButton3.textContent = questionLists[n].choices[2];
    optionButton4.textContent = questionLists[n].choices[3];
    questionNmb = n;
}
// function checkAnswer(userSelected) {
//     // compare what user selected with correct ans
//     // 1. what user selected

//     // 2. correct answer
//     var correctAns = questionLists[questionNmb].answer
//     // 3. if condition
//     if (correctAns == userSelected) {
//         // its correct
//     }
//     else {
//         // its incorrect
//     }
// }
function pickA() { checkResponse('a'); }

function pickB() { checkResponse('b'); }

function pickC() { checkResponse('c'); }

function pickD() { checkResponse('d'); }

const questionLists = [
    {
        question: "Q1 : What's the capital city of Indonesia?",
        choices: ["a. Bali", "b. Nusa Penida", "c. Jakarta", "d. Java"],
        answer: "c"
    },
    {
        question: "Q2 : What's the capital city of Brazil",
        choices: ["a. Brazilia", "b. Rio de Janeiro", "c. Lisbon", "d. Cancun"],
        answer: "b"
    },
    {
        question: "Q2 : What's the capital city of Switzerland",
        choices: ["a. Geneva", "b. Zurich", "c. Munich ", "d. Bern"],
        answer: "d"
    },
    {
        question: "Q2 : What's the capital city of Australia",
        choices: ["a. Canberra", "b. Sidney", "c. Melbourne", "d. Brisbane"],
        answer: "a"
    },
]
// WHEN I answer a question, identify right from wrong answers

let check = document.querySelector("#check")
function checkResponse(value) {
    // event.preventDefault();
    //display result
    check.style.display = "block";
    setTimeout(function () {
        check.style.display = 'none';
    }, 1000);
    // check 
    if (questionLists[questionNmb].answer == value) {
        check.textContent = "Correct!";
        result = result + 1;
    } else {
        seconds = seconds - 10;
        check.textContent = "Nope! The answer is:  " + questionLists[questionNmb].answer + " .";
    }   //THEN I am presented with another question
    if (questionNmb < questionLists.length - 1) {
        displayQuestion(questionNmb + 1);
    } else {
        finishedQuiz();
    }
}

// finished Quiz function

function finishedQuiz() {
    questionDisplay.style.display = "none";
    submitPage.style.display = "block";
    console.log(submitPage);
    // final score
    finalScore.textContent = "You got :" + result;
    timeRemaining.style.display = "none";
}

// creating a function to display scores and initals
function whatsMyScore() {
    let presentList = localStorage.getItem("ScoreList");
    if (presentList !== null) {
        newList = JSON.parse(presentList);
        return newList;
    } else {
        newList = [];
    }
    return newList;
};

// Add scores to leader board
function addScores() {
    scoreHistory.innerHTML = "";
    scoreHistory.style.display = "block";
    let highScores = order();
    // Show the top three high scores. 
    let topThree = highScores.slice(0, 3);
    for (let i = 0; i < topThree.length; i++) {
        let item = topThree[i];
        // Display the final scores on scores history
        let ol = document.createElement("ol");
        ol.textContent = item.player + " - " + item.score;
        ol.setAttribute("data-index", i);
        scoreHistory.appendChild(ol);
    }
};

// Leader-board scores list in order
function order() {
    let unordered = whatsMyScore();
    if (unordered == null) {
        return;
    } else {
        unordered.sort(function (a, b) {
            return b.score - a.score;
        })
        return unordered;
    }
};
function register () {
    let details ={
        player: playerInitial.value,
        score: result
    }
    addInfo(details);
    addScores();
}
// Adding scores and initials function to the local storage
function addInfo(n) {
    let newList = whatsMyScore();
    newList.push(n);
    localStorage.setItem("ScoreList", JSON.stringify(newList));
};
let startButton = document.querySelector("#start");
let backButton = document.querySelector("#back_button");
let finish = document.querySelector("#finish");
let submitButton =document.querySelector("#submit");
let clearButton=document.querySelector("#clear_button");
let timeRemaining = document.getElementById("timer");
let startScreen = document.querySelector("#start-screen");;
let questionDisplay = document.querySelector("#questions")
let submitPage = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final_score");
let highScores = document.querySelector("#highscores");
let scoreHistory = document.querySelector("#score_history");
let verifyScore = document.querySelector("#score_check");
let playerInitial =document.querySelector("#initials");


// Event listeners
// startButton to start the quiz
startButton.addEventListener("click", startTheQuiz);

//options buttons, next question button

optionButton1.addEventListener("click", pickA);
optionButton2.addEventListener("click", pickB);
optionButton3.addEventListener("click", pickC);
optionButton4.addEventListener("click", pickD);

backButton.addEventListener("click", function (event) {
    event.preventDefault();
    finalScore.style.display = "none";
    startScreen.style.display = "block";
    highScores.style.display = "none";
    questionDisplay.style.display = "none";
    location.reload();
});
verifyScore.addEventListener("click", function(event) {
    event.preventDefault();
    // scoreHistory.style.display = "none";
    startScreen.style.display = "none";
    highScores.style.display = "block";
    questionDisplay.style.display ="none";
    addScores();
});

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    // scoreHistory.style.display = "none";
    startScreen.style.display = "none";
    highScores.style.display = "block";
    questionDisplay.style.display ="none";
    register();
});
clearButton.addEventListener("click",function(event) {
    event.preventDefault();
    localStorage.clear();
    addScores();
});
