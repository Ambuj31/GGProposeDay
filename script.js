const messages = [
  "From the moment you entered my life, everything felt warmer.",
  "Every smile of yours feels like home to me.",
  "With you, even silence feels comforting.",
  "I don’t need perfect days, just days with you.",
  "Gauri… you are my today and every tomorrow.",
  "Will you be mine, forever? ❤️"
];

let messageIndex = 0;
const messagesContainer = document.querySelector(".messages");

function addMessage(text, isLast = false) {
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

  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      element.classList.remove("typewriter");
    }
  }, 60);
}

function startHearts(parent) {
  const heartInterval = setInterval(() => {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 90 + "%";

    parent.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 350);

  // Stop hearts after some time (keeps it classy)
  setTimeout(() => clearInterval(heartInterval), 6000);
}

function showMessages() {
  if (messageIndex < messages.length) {
    const isLast = messageIndex === messages.length - 1;
    addMessage(messages[messageIndex], isLast);
    messageIndex++;
  }
}

setInterval(showMessages, 4000);
