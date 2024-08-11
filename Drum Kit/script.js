// array to hold the drums elements
const drums = [];
for(let i = 1; i <= 6; i++){
    drums.push(document.getElementById(`drum-${i}`));
}
// Adding events to all the drums
for(let i = 0; i < drums.length; i++){
    drums[i].addEventListener("click", plySoundDiv);
}
// Adding events to the keys "a, s, d, j, k, l"
document.addEventListener("keypress", function(event) {
    playSoundKey(event.key);
});
// Array to hold the sounds
const sounds = [
    "./sounds/crash.mp3",
    "./sounds/snare.mp3",
    "./sounds/kick-bass.mp3",
    "./sounds/medium tom.mp3",
    "./sounds/hi tom.mp3",
    "./sounds/Floor tom.mp3"
];
// Function to play a sound for pressing any drums
function plySoundDiv() {
    const index = drums.indexOf(this);  
    if (index !== -1) {  
        const sound = new Audio(sounds[index]);  
        sound.play();
    }
    animation(drums[index]);
}
// Object to hold the corresponding keys and sounds
const keyToSoundIndex = {
    "a": 0,
    "s": 1,
    "d": 2,
    "j": 3,
    "k": 4,
    "l": 5
};
// Function to play a sound for pressing a, s, d, j, k, l keys
function playSoundKey(key) {
    const soundIndex = keyToSoundIndex[key]; 
    if (soundIndex !== undefined) {  
        const sound = new Audio(sounds[soundIndex]);  
        sound.play(); 
        animation(drums[keyToSoundIndex[key]])

    } else {
        console.log(`No sound mapped for key: ${key}`); 
    }
}
// Adding an animations to the drums 
function animation(current){
    current.classList.add("active");
    setTimeout( timeOut =>  {
        current.classList.remove("active");
    }, 200)
}