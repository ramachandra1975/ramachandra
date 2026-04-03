JavaScript
// Navigation logic to switch between the 10 sections
function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(s => s.classList.remove('active'));
    
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    window.scrollTo(0, 0);
}

// Audio toggle for the Flute/OM resonance
function toggleAudio() {
    const audio = document.getElementById('ambient');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Logic for the "Request Manuscript" button
function requestManuscript(volumeTitle) {
    // 1. Move the user to the Contact section
    showSection('contact');
    
    // 2. Pre-fill the message box so you know which volume they want
    const messageBox = document.querySelector('textarea[name="message"]');
    if (messageBox) {
        messageBox.value = "I am interested in reviewing the full manuscript for: " + volumeTitle + ". \n\nInstitutional Details: ";
        messageBox.focus();
    }
}
