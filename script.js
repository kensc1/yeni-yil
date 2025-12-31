const button = document.getElementById("snowButton");

button.addEventListener("click", (e) => {
  for(let i=0; i<10; i++){ // 10 kar topu
    const snow = document.createElement("div");
    snow.className = "snowball";
    snow.style.left = e.clientX + "px";
    snow.style.top = e.clientY + "px";

    // Rastgele yön ve mesafe
    const x = (Math.random()*200 - 100) + "px"; // -100px ile +100px arasında
    const y = (Math.random()*-200) + "px"; // yukarı doğru
    snow.style.setProperty("--x", x);
    snow.style.setProperty("--y", y);

    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), 1000);
  }
});
