const messages = [
  "You're amazing, Angel! ✨",
  "You're the sparkle in everyone's day 💖",
  "Did it just get brighter? Oh wait, it's you! 🌟",
  "You're sweeter than cupcakes 🧁",
  "Your smile can fix any bad day 😄",
  "You're a real-life Angel 👼"
];

function showMessage() {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('message').innerText = randomMessage;
  launchConfetti();
}

// Confetti effect
function launchConfetti() {
  const duration = 1 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 }
    }));
  }, 250);
}

// Load confetti library
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
document.body.appendChild(script);