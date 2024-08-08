'use strict';
//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Variables
let currentScore = 0;
let currentPlayer = 0;
let scores = [0, 0];
let playing = true;
const changingPlayers = function () {
  //Reseting the current score
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  // Changing players
  currentPlayer = currentPlayer <= 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rollig proces
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Create random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);

    //Display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //Check for dice = 1
    if (dice !== 1) {
      //Add dice to score
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
      //current0El.textContent = currentScore;
    } else {
      changingPlayers();
    }
  }
});

// Hold btn
btnHold.addEventListener('click', function () {
  if (playing) {
    // Ading the current score to the total score
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    if (scores[currentPlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else {
      changingPlayers();
    }
  }
});

// Reseting the game
btnNew.addEventListener('click', function () {
  // Reseting the clases
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  diceEl.classList.add('hidden');
  // Reseting the score
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  scores = [0, 0];
  console.log(scores);
  // Reseting the player
  playing = true;
  currentPlayer = 0;

  //   location.reload();
});
