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

//Variables for Audio
let audioContext, analyser, microphone, javascriptNode;

startButton.addEventListener('click', startTuning);
stopButton.addEventListener('click', stopTuning);

//Function to start the Tuner
function startTuning() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;

    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
        microphone = audioContext.createMediaStreamSource(stream);
        javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);

        javascriptNode.onaudioprocess = function() {
            const array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);

            const maxIndex = array.reduce((maxIndex, value, index, arr) => value > arr[maxIndex] ? index : maxIndex, 0);
            const frequency = maxIndex * audioContext.sampleRate / analyser.fftSize;

            const closestNote = findClosestNote(frequency);
            noteDisplay.textContent = `Note: ${closestNote.note}`;
            };

//Disable start button and and enables stop button            
            startButton.disabled = true;
            stopButton.disabled = false;
        })
        .catch(err => {
            console.error('Error accessing microphone:', err);
        });
}

//Function to stop tuner
function stopTuning() {
    if (microphone && javascriptNode) {
        microphone.disconnect();
        javascriptNode.disconnect();
        audioContext.close();

        noteDisplay.textContent = 'Note: --';

        startButton.disabled = false;
        stopButton.disabled = true;
    }
}

//Function to find closest note to sound    
function findClosestNote(frequency) {
    return notes.reduce((prev, curr) => Math.abs(curr.frequency - frequency) < Math.abs(prev.frequency - frequency) ? curr : prev);
}
});

