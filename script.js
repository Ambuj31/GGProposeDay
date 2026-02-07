
const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/11.jpg"
];

// Shuffle images every reload
images.sort(() => Math.random() - 0.5);

let imageIndex = 0;
const heroImage = document.getElementById("heroImage");

function changeImage() {
  heroImage.src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;
}

setInterval(changeImage, 4000);

/* =========================
   PROPOSE DAY MESSAGES
   ========================= */

const messages = [
  "From the very first day, you felt different.",
  "Somehow, conversations with you felt effortless.",
  "Your presence made even ordinary moments special.",
  "I found comfort, laughter, and peace in you.",
  "Through everything, you remained my constant.",
  "Gauri… you mean more to me than words can express.",
  "So today, with all my heart…",
  "Will you be mine, forever? ❤️"
];

let messageIndex = 0;
const messagesContainer = document.getElementById("messages");

/* =========================
   MESSAGE HANDLER
   ========================= */

function addMessage(text, isLast) {
  const msg = document.createElement("div");
  msg.classList.add("message");

  if (isLast) {
    msg.classList.add("latest", "typewriter");
    messagesContainer.appendChild(msg);
    typeWriterEffect(msg, text);
    startHearts(msg);
  } else {
    msg.textContent = text;
    messagesContainer.appendChild(msg);
  }

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function typeWriterEffect(element, text) {
  let i = 0;
  element.textContent = "";

  const typing = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(typing);
      element.classList.remove("typewriter");
    }
  }, 60);
}

/* =========================
   FLOATING HEARTS
   ========================= */

function startHearts(parent) {
  const heartInterval = setInterval(() => {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 90 + "%";
    parent.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 350);

  // Stop hearts after 6 seconds (classy, not noisy)
  setTimeout(() => clearInterval(heartInterval), 6000);
}

/* =========================
   AUTO MESSAGE PLAY
   ========================= */

function showNextMessage() {
  if (messageIndex < messages.length) {
    const isLast = messageIndex === messages.length - 1;
    addMessage(messages[messageIndex], isLast);
    messageIndex++;
  }
}

setInterval(showNextMessage, 4000);
