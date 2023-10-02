'use strict';

const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let number = randomNumber();
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;

  if (!guess) {
    displayMessage('❌ No number!');
  } else if (guess === number) {
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(
        guess > number ? 'Number is too high!' : 'Number is too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!😈');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  number = randomNumber();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
