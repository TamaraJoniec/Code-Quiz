
// WHEN I click the start button THEN a timer starts 

let startButton = document.querySelector("#start_button");
let finish = document.querySelector("#finish");
let timeRemaining = document.getElementById("timer");
let questionTitlePage = document.querySelector("#question_title");
let startScreen = document.querySelector("#start_screen")

let seconds = 60;
let questionNmb = 0;
let score = 0;
let questCount = 1;


// Click the button to start

function startTheQuiz() {
    startScreen.style.display = "none";
    questionTitle.style.display = "block";
    questionNmb = 0
    countdown();
    displayQuestion(questionNmb);
}


function timer() {
    let timerInterval = setInterval(function () {
        seconds--;
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
let optionButton1 = document.querySelector("#optionButton1");
let optionButton2 = document.querySelector("#optionButton2");
let optionButton3 = document.querySelector("#optionButton3");
let optionButton4 = document.querySelector("#optionButton4");

function displayQuestion(n) {
    optionButtons.textContent = questionLists[n].question;
    optionButton1.textContent = questionLists[n].choices[0];
    optionButton2.textContent = questionLists[n].choices[1];
    optionButton3.textContent = questionLists[n].choices[2];
    optionButton4.textContent = questionLists[n].choices[3];
    questionNmb = n;
}

let questionLists = [
    {
        question: "Q1 : What's the capital city of Indonesia",
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
function checkResponse (event) {
    event.preventDefault();
    //display result
    check.style.display = "block";
    setTimeout(function () {
        check.style.display = 'none';
    }, 1000);
     // check 
     if (questionLists[questionNmb].answer == event.target.value) {
        check.textContent = "Correct!"; 
        score = score + 1;
    } else {
        seconds = seconds - 10;
        check.textContent = "Nope! The answer is:  " + questionLists[questionNmb].answer + " .";
    }   //THEN I am presented with another question
    if (questionNmb < questionLists.length -1 ) {
        displayQuestion(questionNmb +1);
    } else {
        finishedQuiz();
}
}

// finished Quiz function
let submitPage = document.querySelector("#submit_page");
let finalScore = document.querySelector("#final_score");
let highScores =document.querySelector("#highscores");
let scoreHistory =document.querySelector("#score_history");
let scoreCheck =document.querySelector("#score_check");

function finishedQuiz() {
    questionTitlePage.style.display = "none";
    submitPage.style.display = "block";
    console.log(submitPage);
    // final score
    finalScore.textContent = "You got :" + score ;
    timeRemaining.style.display = "none"; 
}

    // creating a function to display scores and initals
    function whatsMyScore () {
        let presentList =localStorage.getItem("ScoreList");
        if (presentList !== null ){
            newList = JSON.parse(presentList);
            return newList;
        } else {
            newList = [];
        }
        return newList;
    };

 // Event listeners
 // startButton to start the quiz
 startButton.addEventListener("click", startTheQuiz);
    
  //options buttons, next question button
  optionButtons.forEach(function(click){
    
    click.addEventListener("click", check);
});