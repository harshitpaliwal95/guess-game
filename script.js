'use strict';

// console.log(document.querySelector('h1').textContent);

// document.querySelector('h1').textContent = ' Harshit ';
// document.querySelector('.number').textContent = ' 10 ';

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🙉 no number';
  } else if (secretNumber < guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😂 little high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👊🏻 you lost';
    }
  } else if (secretNumber > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😟 little low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👊🏻 you lost';
    }
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = '🥳 Congartulation';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
  }

  if (score === 1) {
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > 20) {
    document.querySelector('.message').textContent = 'not more than 20';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  //   displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
