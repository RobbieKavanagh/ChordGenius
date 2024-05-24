//Function to Play sound
function playSound(soundFile) {
    const audio = new Audio (soundFile);
    audio.play();
}

//Event listener For C Button
document.getElementById('sound1').addEventListener('click', () => {
    playSound('sounds/C.mp3'); 
});