var titleScreen = document.querySelector("#title-screen");
var startButton = document.querySelector("#start-button");
var question1 = document.querySelector("#question-1");
var question2 = document.querySelector("#question-2");
var question3 = document.querySelector("#question-3");
var endScreen = document.querySelector("#end-screen")
var answerOptions = document.querySelectorAll(".button");
var timer = document.querySelector("#timer")
var secondsLeft = 3;
var currentScore = 0;

function setTimer(){
var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Timer: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      timer.textContent = "Times up!";
      titleScreen.setAttribute("class", "d-none");
      question1.setAttribute("class", "d-none");
      question2.setAttribute("class", "d-none");
      question3.setAttribute("class", "d-none");
      endScreen.setAttribute("class", "d-block");
      document.getElementById("score-label").textContent("Your final score is: " + currentScore);
    }

  }, 1000);
}
startButton.addEventListener("click", function(){
    secondsLeft = 10;
    setTimer();
    titleScreen.setAttribute("class", "d-none");
    question1.setAttribute("class", "d-block");
});

document.body.children[2].children[1].addEventListener("click", function(event){

 if (classList.contains("answer-correct")){
     currentScore++;
     question1.setAttribute("class", "d-none");
     question2.setAttribute("class", " ");
 }
 else {
    currentScore--;
    question1.setAttribute("class", "d-none");
    question2.setAttribute("class", " ");
  }
  console.log(currentScore);
});

document.body.children[3].children[1].addEventListener("click", function(event){

  if (event.class === "answer-correct"){
      currentScore++;
      question2.setAttribute("class", "d-none");
      question3.setAttribute("class", " ");
  }
  else {
     currentScore--;
     question2.setAttribute("class", "d-none");
     question3.setAttribute("class", " ");
   }
   console.log(currentScore);
 });

document.body.children[4].children[1].addEventListener("click", function(event){

  if (event.class === "answer-correct"){
      currentScore++;
      question3.setAttribute("class", "d-none");
      secondsLeft = 1;
  }
  else {
     currentScore--;
     question3.setAttribute("class", "d-none");
     secondsLeft = 1;
   }
   console.log(currentScore);
 });