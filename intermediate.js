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

//Event Listener for E Button
document.getElementById('sound3').addEventListener('click', () => {
    playSound('sounds/E.mp3'); 
});

//Event Listener for F Button
document.getElementById('sound4').addEventListener('click', () => {
    playSound('sounds/F.mp3'); 
});

//Event Listener for G Button
document.getElementById('sound5').addEventListener('click', () => {
    playSound('sounds/G.mp3'); 
});

//Event Listener for A Button
document.getElementById('sound6').addEventListener('click', () => {
    playSound('sounds/A.mp3'); 
});

//Event Listener for Cm Button
document.getElementById('sound7').addEventListener('click', () => {
    playSound('sounds/Cm.mp3'); 
});

//Event Listener for Dm Button
document.getElementById('sound8').addEventListener('click', () => {
    playSound('sounds/Dm.mp3'); 
});

//Event Listener for Em Button
document.getElementById('sound9').addEventListener('click', () => {
    playSound('sounds/Em.mp3'); 
});

//Event Listener for Fm Button
document.getElementById('sound10').addEventListener('click', () => {
    playSound('sounds/Fm.mp3'); 
});