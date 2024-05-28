//Function to Play sound
function playSound(soundFile) {
    const audio = new Audio (soundFile);
    audio.play();
}

//Event Listener For C Button
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

//Event Listener for A Button
document.getElementById('string6').addEventListener('click', () => {
    playSound('sounds/A.mp3'); 
});

//Event Listener for B Button
document.getElementById('string7').addEventListener('click', () => {
    playSound('sounds/B.mp3'); 
});

//Event Listener for Cm Button
document.getElementById('string8').addEventListener('click', () => {
    playSound('sounds/Cm.mp3'); 
});

//Event Listener for Dm Button
document.getElementById('string9').addEventListener('click', () => {
    playSound('sounds/Dm.mp3'); 
});

//Event Listener for Em Button
document.getElementById('string10').addEventListener('click', () => {
    playSound('sounds/Em.mp3'); 
});

//Event Listener for Fm Button
document.getElementById('string11').addEventListener('click', () => {
    playSound('sounds/Fm.mp3'); 
});

//Event Listener for Gm Button
document.getElementById('string12').addEventListener('click', () => {
    playSound('sounds/Gm.mp3'); 
});

//Event Listener for Am Button
document.getElementById('string13').addEventListener('click', () => {
    playSound('sounds/Am.mp3'); 
});

//Event Listener for Bm Button
document.getElementById('string14').addEventListener('click', () => {
    playSound('sounds/Bm.mp3'); 
});