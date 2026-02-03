const herName = "Arike";
document.getElementById("name").innerText = herName;

const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");

let yesSize = 1;
let keepMoving = true;

function yesClicked() {
  keepMoving = false; // Stop the maybe button from moving
  document.getElementById("response").innerText =
    "You just made my heart smile 💖 I can't wait ❤️";
  
  // Add celebration effect
  yesBtn.style.animation = "pulse 0.5s ease";
  
  // Reset maybe button position
  maybeBtn.style.transform = "translate(0, 0)";
  
  // Redirect to WhatsApp after a brief delay so they can see the message
  setTimeout(() => {
    window.location.href = "https://wa.me/2348108594792";
  }, 1500);
}

// Make "Maybe" button run away on hover
maybeBtn.addEventListener("mouseover", () => {
  if (!keepMoving) return;
  
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;

  maybeBtn.style.transform = `translate(${x}px, ${y}px)`;
  
  // Make "Yes" button grow 100% bigger (reaches scale of 2)
  if (yesSize < 2) {
    yesSize += 0.2;
    if (yesSize > 2) yesSize = 2; // Cap at 100% bigger
    yesBtn.style.transform = `scale(${yesSize})`;
  }
});

// Keep moving the "Maybe" button randomly every 2 seconds
setInterval(() => {
  if (!keepMoving) return;
  
  const x = Math.random() * 250 - 125;
  const y = Math.random() * 250 - 125;
  
  maybeBtn.style.transform = `translate(${x}px, ${y}px)`;
}, 2000);
