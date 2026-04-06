/* ── AUDIO ── */
const audio = document.getElementById("vedic-audio");
let started = false;
function fadeInAudio() {
  if (!audio.src && !audio.querySelector('source')) return;
  audio.volume = 0;
  audio.play().then(() => {
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 0.2) { vol += 0.01; audio.volume = Math.min(vol, 0.2); }
      else clearInterval(fade);
    }, 200);
  }).catch(() => { /* file missing or browser blocked — silently skip */ });
}
document.addEventListener("click", function() {
  if (!started) { fadeInAudio(); started = true; }
}, { once: true });
