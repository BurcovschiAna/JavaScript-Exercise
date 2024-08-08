// Declaring all variables
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const message = document.getElementById("message");
// Generating random numbers for players
let randomNumber1 = Math.trunc(Math.random() * 6 + 1);
let randomNumber2 = Math.trunc(Math.random() * 6 + 1);

// Keeping images in an array
const images = [];
for(let i = 1; i <= 6; i++){
    images.push(`./img/dice${i}.png`);
}
// Displaying the images according to the random number
function pickADice(dice, randomNumber){
    switch(randomNumber){
        case 1:
            dice.src = images[0];
            break;
        case 2:
            dice.src = images[1];
            break;
        case 3:
            dice.src = images[2];
            break
        case 4:
            dice.src = images[3];
            break;
        case 5:
            dice.src = images[4];
            break;
        case 6:
            dice.src = images[5];
            break;
    }
}
// Displaying the message with who won
if(randomNumber1 > randomNumber2){
    message.innerHTML = `Player 1 won`;
} else if (randomNumber2 > randomNumber1){
    message.innerHTML = `Player 2 won`;
} else if (randomNumber1 == randomNumber2) {
    message.innerHTML = `It's a tie`;
}
// Calling the function on page load
window.addEventListener("load", pickADice(dice1, randomNumber1));
window.addEventListener("load", pickADice(dice2, randomNumber2));