const button = document.getElementById("snowButton");

function createSnowballs(clientX, clientY) {
  for (let i = 0; i < 10; i++) {
    const snow = document.createElement("div");
    snow.className = "snowball";

    // Kar topunu sayfa koordinatına yerleştir
    const rect = document.body.getBoundingClientRect();
    snow.style.left = (clientX - rect.left) + "px";
    snow.style.top = (clientY - rect.top) + "px";

    // Rastgele yön ve mesafe
    const x = (Math.random() * 200 - 100) + "px";
    const y = (Math.random() * -200) + "px";
    snow.style.setProperty("--x", x);
    snow.style.setProperty("--y", y);

    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), 1000);
  }
}

// Hem click hem touch için
button.addEventListener("click", (e) => {
  createSnowballs(e.clientX, e.clientY);
});

button.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  createSnowballs(touch.clientX, touch.clientY);
});
