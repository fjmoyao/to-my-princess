// Select the envelope and audio elements
const envelope = document.getElementById("envelope");
const audio = document.getElementById("loveSong");

// Add a click event listener to the envelope
envelope.addEventListener("click", () => {
    // Play the audio
    audio.play();
});
