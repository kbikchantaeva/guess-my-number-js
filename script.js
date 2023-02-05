'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const numberValue = function (value) {
  document.querySelector('.number').textContent = value;
};
const scoreValue = function (value) {
  document.querySelector('.score').textContent = value;
};

const bodyStyleBC = function (value) {
  document.querySelector('body').style.backgroundColor = value;
};

const numberStyleWidth = function (value) {
  document.querySelector('.number').style.width = value;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // NO NUMBER
  if (!guess) {
    displayMessage('Enter a number');

    // WIN STATE
  } else if (guess === secretNumber) {
    displayMessage("You're right!");
    bodyStyleBC('#60b347');
    numberStyleWidth('30rem');
    numberValue(secretNumber);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
      score--;
      scoreValue(score);
    } else {
      displayMessage('You loose!');
      scoreValue(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');
  numberValue('?');
  scoreValue(score);
  document.querySelector('.guess').value = '';

  bodyStyleBC('#222');
  numberStyleWidth('15rem');
});
