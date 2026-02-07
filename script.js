const messagesText = [
  "Your absence is stronger to me than the presence of thousands of other people.",
  "You make me smile so easily. Can you be there, to do it forever?",
  "You have been a source of strength and support for me. I'm glad that you're a part of my life.",
  "I was alone in life, but when you came into my life, you brought colours with you.",
  "You make ordinary moments feel special.",
  "You are my calm in chaos.",
  "Life feels kinder with you in it.",
  "I choose you, always.",
  "Every day I love you a little more.",
  "You are my favorite thought.",
  "I'm sure about one thing — I love you ❤️"
];

const images = Array.from({ length: 11 }, (_, i) => `images/${i + 1}.jpg`);

let index = 0;

const messagesContainer = document.getElementById("messages");
const image = document.getElementById("heroImage");

function addMessage() {
  // Remove red from previous message
  const previous = document.querySelector(".message.latest");
  if (previous) previous.classList.remove("latest");

  // Create new message
  const msg = document.createElement("div");
  msg.className = "message latest";
  msg.innerText = messagesText[index];

  messagesContainer.appendChild(msg);

  // Scroll to bottom smoothly
  msg.scrollIntoView({ behavior: "smooth", block: "end" });

  // Change image with fade
  image.style.opacity = 0;
  setTimeout(() => {
    image.src = images[index];
    image.style.opacity = 1;
  }, 500);
}

// First message
addMessage();

// Auto-play every 4 seconds
setInterval(() => {
  index++;
  if (index < messagesText.length) {
    addMessage();
  }
}, 4000);
