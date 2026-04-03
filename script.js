JavaScript
function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
}

function toggleAudio() {
    const audio = document.getElementById('ambient');
    if (audio.paused) { audio.play(); } else { audio.pause(); }
}

function requestManuscript(title) {
    showSection('contact');
    const msg = document.querySelector('textarea[name="message"]');
    if (msg) {
        msg.value = "I am interested in requesting the full manuscript for: " + title + "\n\nMy institutional details: ";
        msg.focus();
    }
}
