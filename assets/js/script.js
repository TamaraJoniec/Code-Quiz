
 // WHEN I click the start button THEN a timer starts 

let startButton = document.querySelector("#start_button");
let finish = document.querySelector("#finish");
let timeRemaining = document.getElementById("timer");
let seconds = 60;
let question = 0;
let score = 0;
let questCount = 1;

function timer() {       
    let timerInterval = setInterval(function () {
      seconds --;
      timeRemaining.textContent = "Time left: " + seconds + " s";

    //created an if statement, if time has ran out, to tell the user
      if (seconds <= 0){
        clearInterval(timerInterval);
        timeRemaining.textContent = "Your time has ran out"; 
        finish.textContent = "Your time has ran out";
        finishedQuiz();
    //adding an else if statement if the user finishes in time
    } else  if(questCount >= questionLists.length +1) {
        clearInterval(timerInterval);
        finishedQuiz();
        } 
}, 1000);
    
    }
  //  WHEN a timer starts and I am presented with a question
  let choices;
  let answer;

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
  // finished Quiz function
function finishedQuiz() {

}
