JavaScript
function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function toggleAudio() {
    const audio = document.getElementById('ambient');
    if (audio.paused) {
        audio.play();
        alert("Audio Resonance Started");
    } else {
        audio.pause();
    }
}
