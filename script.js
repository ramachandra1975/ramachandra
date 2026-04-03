JavaScript
function enterSite() {
    // Play Music
    const music = document.getElementById('bgMusic');
    music.play();
    
    // Hide Overlay
    document.getElementById('overlay').style.display = 'none';
}

function showPage(pageId) {
    // Hide all sections
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.style.display = 'none');
    
    // Show the selected one
    document.getElementById(pageId).style.display = 'block';
