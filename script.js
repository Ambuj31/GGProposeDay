const messages = [
  "Your absence is stronger to me than the presence of thousands of other people.",
  "You make me smile so easily. Can you be there, to do it forever?",
  "You have been a source of strength and support for me.",
  "You make ordinary moments feel special.",
  "I feel safe when I think of you.",
  "You turned my silence into laughter.",
  "Life feels kinder with you in it.",
  "You are my calm in chaos.",
  "I choose you, always.",
  "Every day I love you a little more.",
  "I'm sure of one thing — I love you ❤️"
];

const images = Array.from({ length: 11 }, (_, i) => `images/${i + 1}.jpg`);

let index = 0;

const messageBox = document.getElementById("messageBox");
const image = document.getElementById("heroImage");

function showSlide() {
  // Fade out
  image.style.opacity = 0;
  messageBox.style.opacity = 0;

  setTimeout(() => {
    image.src = images[index];
    messageBox.innerText = messages[index];

    image.style.opacity = 1;
    messageBox.style.opacity = 1;
  }, 600);
}

// Initial load
showSlide();

// Auto play every 4 seconds
setInterval(() => {
  index++;
  if (index >= images.length) {
    index = images.length - 1; // stop at last slide
    return;
  }
  showSlide();
}, 4000);
