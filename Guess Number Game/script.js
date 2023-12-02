'use strict';
console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'Congratulations';
console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no number
  if (!guess) {
    //document.querySelector('.message').textContent = 'Not a number';
    displayMessage('Not a number');
  }
  // Where the number is corect
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Congratulations';
    displayMessage('Congratulations');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When the number is too low
  else if (guess !== secretNumber) {
    if (score < 1) {
      //document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
    } else {
      //   document.querySelector('.message').textContent =
      //     guess < secretNumber ? 'Too low' : 'Too high';
      displayMessage(guess < secretNumber ? 'Too low' : 'Too high');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  // When the number is too high
  //   else if (guess > secretNumber) {
  //     if (score < 1) {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //     } else {
  //       document.querySelector('.message').textContent = 'Too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     }
  //   }
});

//Resetng the game
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
