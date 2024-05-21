//Function to Play sound
function playSound(soundFile) {
    const audio = new Audio (soundFile);
    audio.play();
}

//Event listener For C Button
document.getElementById('string1').addEventListener('click', () => {
    playSound('sounds/C.mp3'); 
});

//Event Listener for D Button
document.getElementById('string2').addEventListener('click', () => {
    playSound('sounds/D.mp3'); 
});

//Event Listener for E Button
document.getElementById('string3').addEventListener('click', () => {
    playSound('sounds/E.mp3'); 
});

//Event Listener for F Button
document.getElementById('string4').addEventListener('click', () => {
    playSound('sounds/F.mp3'); 
});

//Event Listener for G Button
document.getElementById('string5').addEventListener('click', () => {
    playSound('sounds/G.mp3'); 
});