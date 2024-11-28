const typewriterText = document.getElementById("typewriter-text");
const text = ["a Learner", "a Developer", "Zion"];

// Typewriter text changer animation
let i = 0;
var interval = setInterval(() => {
  typewriterText.textContent = text[i];
  i = (i + 1) % text.length;
}, 3000);

const blobContainer = document.getElementById("blob-background");
const minBlobSize = 10;
const maxBlobSize = 50;
const minBlobBlur = 10;
const maxBlobBlur = 50;

// Blob generator for background
for (let i = 0; i < 10; i++) {
  const blob = document.createElement("div");
  blob.className = "blob";
  const size = minBlobSize + Math.random() * maxBlobSize;
  blob.style.width = `${size}rem`;
  blob.style.height = `${size}rem`;
  blob.style.top = `${Math.random() * 100}%`;
  blob.style.left = `${Math.random() * 100}%`;
  blob.style.background = `linear-gradient(${Math.random() * 100}deg, 
  rgba(3, 33, 62, 1) ${Math.random() * 100}%, 
  rgba(2,48,94,1) ${Math.random() * 100}%
)`;
  blob.style.filter = `blur(${minBlobBlur + Math.random() * maxBlobBlur}px)`;
  blob.style.animationDelay = `${Math.random() * 5}s`;
  blobContainer.appendChild(blob);
}
