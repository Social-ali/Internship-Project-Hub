const dynamicText = document.querySelector("h1 span");
const words = [
  { text: "Love", emoji: "❤️" },
  { text: "like Art", emoji: "🎨" },
  { text: "the Future", emoji: "🚀" },
  { text: "Everything", emoji: "🌍" }
];

// Variables to track the position and deletion status of the word
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex].text;
  const currentEmoji = words[wordIndex].emoji;
  const currentChar = currentWord.substring(0, charIndex);

  // Update text content to include the emoji
  dynamicText.textContent = currentChar + (isDeleting ? "" : currentEmoji);
  dynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
    // Typing effect
    charIndex++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIndex > 0) {
    // Deleting effect
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    // If word is deleted, move to the next word
    isDeleting = !isDeleting;
    dynamicText.classList.remove("stop-blinking");
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
};

typeEffect();
