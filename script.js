document.addEventListener("DOMContentLoaded", () => {

  const messages = [
    "Gauri,some days feel heavier just because you’re not around.",
    "Your presence has a way of making everything feel calmer, safer.",
    "I don’t say this often, but you’ve been my strength more times than you know.",
    "From random talks to quiet moments, every memory with you feels special.",
    "Life didn’t change overnight — it changed the moment you became a part of it.",
    "I don’t love you for perfection, I love you for being you.",
    "Even on difficult days, choosing you feels effortless.",
    "I don’t know what the future holds, but I know who I want in it.",
    "I’m not in a hurry — I’m patient, because you’re worth waiting for.",
    "No pressure, no expectations — just honesty, respect, and love.",
    "Gauri… will you let me keep choosing you, today and always? ❤️"
  ];

  let images = [];
for (let i = 1; i <= 11; i++) {
  images.push(`images/${i}.jpg`);
}

// Fisher-Yates Shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(images);


  let index = 0;

  const messagesContainer = document.getElementById("messages");
  const image = document.getElementById("heroImage");

  function showNext() {
    if (index >= messages.length) return;

    // Remove red highlight from previous message
    const prev = document.querySelector(".message.latest");
    if (prev) prev.classList.remove("latest");

    // Create new message
    const msg = document.createElement("div");
    msg.className = "message latest";
    msg.textContent = messages[index];
    messagesContainer.appendChild(msg);

    msg.scrollIntoView({ behavior: "smooth" });

    // Image change (safe index)
    image.style.opacity = 0;
    setTimeout(() => {
      image.src = images[Math.min(index, images.length - 1)];
      image.style.opacity = 1;
    }, 500);

    index++;
  }

  // First message immediately
  showNext();

  // Auto-play every 4 seconds
  const interval = setInterval(() => {
    showNext();
    if (index >= messages.length) clearInterval(interval);
  }, 4000);
});
