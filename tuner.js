//Event listener for correct frequency for chords
document.addEventListener('DOMContentLoaded', () => {

//Get Elements and Notes    
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const noteDisplay = document.getElementById('note-display');
    const notes = [
        { note: 'E', frequency: 82.41 },
        { note: 'A', frequency: 110.00 },
        { note: 'D', frequency: 146.83 },
        { note: 'G', frequency: 196.00 },
        { note: 'B', frequency: 246.94 },
        { note: 'E', frequency: 329.63 }
    ];


