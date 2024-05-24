//Function to Play sound
function playSound(soundFile) {
    const audio = new Audio (soundFile);
    audio.play();
}

//Event Listener For C Button
document.getElementById('sound1').addEventListener('click', () => {
    playSound('sounds/C.mp3'); 
});

//Event Listener for D Button
document.getElementById('sound2').addEventListener('click', () => {
    playSound('sounds/D.mp3'); 
});
