const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {
  alert("OMG YOU SAID YES 💖");
});

function createHeart() {
  const heart = document.createElement("img");
  heart.src = "heart.png";
  heart.className = "heart";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  heart.style.width = (20 + Math.random() * 20) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 400);
