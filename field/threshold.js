const threshold = document.getElementById("threshold");

let pulse = 0;

function idleRhythm() {
  pulse += 0.01;
  threshold.style.opacity = 0.2 + Math.sin(pulse) * 0.05;
  requestAnimationFrame(idleRhythm);
}

idleRhythm();
