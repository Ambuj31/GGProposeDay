document.addEventListener("DOMContentLoaded", () => {

  const messagesText = [
    "Your absence is stronger to me than the presence of thousands of other people.",
    "You make me smile so easily. Can you be there, to do it forever?",
    "You have been a source of strength and support for me.",
    "I was alone in life, but when you came, you brought colours.",
    "You make ordinary moments feel special.",
    "You are my calm in chaos.",
    "Life feels kinder with you in it.",
    "I choose you, always.",
    "Every day I love you a little more.",
    "You are my favorite thought.",
    "I'm sure about one thing — I love you ❤️"
  ];

  const images = [];
  for (let i = 1; i <= 11; i++) {
    images.push(`images/${i}.jpg`);
  }

  let index = 0;

  const messagesContainer = document.getElementById("messages");
  const image = document.getElementById("heroImage");

  function showNext() {
    if (index >= messagesText.length) return;

    // Remove red from old message
    const prev = document.querySelector(".message.latest");
    if (prev) prev.classList.remove("latest");

    // Add message
    const msg = document.createElement("div");
    msg.className = "message latest";
    msg.textContent = messagesText[index];
    messagesContainer.appendChild(msg);

    msg.scrollIntoView({ behavior: "smooth" });

    // Change image
    image.style.opacity = 0;
    setTimeout(() => {
      image.src = images[index];
      image.style.opacity = 1;
    }, 500);

    index++;
  }

  // Show first immediately
  showNext();

  // Auto play every 4 seconds
  setInterval(showNext, 4000);
});
