const drums = [];
for(let i = 1; i <= 6; i++){
    drums.push(document.getElementById(`drum-${i}`));
}
for(let i = 0; i < drums.length; i++){
    drums[i].addEventListener("click", makeASound);
}
const sounds = [
    "./sounds/crash.mp3",
    "./sounds/snare.mp3",
    "./sounds/kick-bass.mp3",
    "./sounds/medium tom.mp3",
    "./sounds/hi tom.mp3",
    "./sounds/Floor tom.mp3"
];

function makeASound() {
    const index = drums.indexOf(this);  
    if (index !== -1) {  
        const sound = new Audio(sounds[index]);  
        sound.play();
    }
}
document.addEventListener("keypress", function(event){
    key(event.key)
})
function key(key){
    switch (key) {
        case "a":
            const sound = new Audio(sounds[0]); 
            sound.play();
            break;
    
        case "s":
            var tom3 = new Audio(sounds[1]);
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio(sounds[2]);
            tom4.play();
            break;

        case "j":
            var snare = new Audio(sounds[3]);
            snare.play();
            break;

        case "k":
            var crash = new Audio(sounds[4]);
            crash.play();
            break;

        case "l":
            var kick = new Audio(sounds[5]);
            kick.play();
            break;
    default: console.log(key);
    }
}
const keyToSoundIndex = {
    "a": 0,
    "s": 1,
    "d": 2,
    "j": 3,
    "k": 4,
    "l": 5
};
document.addEventListener("keypress", function(event) {
    playSound(event.key);
});


function playSound(key) {
    const soundIndex = keyToSoundIndex[key]; 

    if (soundIndex !== undefined) {  
        const sound = new Audio(sounds[soundIndex]);  
        sound.play(); 

    } else {
        console.log(`No sound mapped for key: ${key}`); 
    }
}
