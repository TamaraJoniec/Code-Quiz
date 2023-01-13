
 // WHEN I click the start button THEN a timer starts 

let startButton = document.querySelector("#start_button");
let finish = document.querySelector("#finish");
let timeRemaining = document.getElementById("timer");
let seconds = 60;
let question = 0;
let Score = 0;
let questCount = 1;

function countdown() {       
    let timerInterval = setInterval(function () {
      seconds --;
      timeRemaining.textContent = "Time left: " + seconds + " s";
    
    
    
    }