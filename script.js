"use strict";

//document.querySelector(".message").innerHTML = "Correct numb!";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const check = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const again = document.querySelector(".again");
const number = document.querySelector(".number");
const body = document.querySelector("body");
const highscore = document.querySelector(".highscore");
let scoreCount = 20;
let highscoreCount = 0;

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.innerHTML = "No number!";
  } else if (guess === secretNumber) {
    message.innerHTML = "Correct Number";
    number.innerHTML = secretNumber;

    body.style.backgroundColor = "#60b347";
    number.style.width = "30rem";
    if (scoreCount > highscoreCount) {
      highscoreCount = scoreCount;
      highscore.innerHTML = highscoreCount;
    }
  } else if (guess !== secretNumber) {
    if (scoreCount > 1) {
      message.innerHTML = guess > secretNumber ? "Too high!" : "Too low!";
      scoreCount--;
      score.innerHTML = scoreCount;
    } else {
      message.innerHTML = "You lost a game";
    }
  }

  again.addEventListener("click", function () {
    message.innerHTML = "Start guessing....";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    scoreCount = 20;
    score.innerHTML = scoreCount;
    document.querySelector(".guess").value = "";
    body.style.backgroundColor = "#222";
    number.style.width = "15rem";
    number.innerHTML = "?";
  });
});
