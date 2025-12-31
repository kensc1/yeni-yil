const button = document.getElementById("snowButton");

button.addEventListener("click", () => {
  for(let i=0;i<10;i++){
    const snow = document.createElement("div");
    snow.className = "snowball";

    // Rastgele başlangıç pozisyonu buton etrafında
    snow.style.left = (button.offsetLeft + button.offsetWidth/2 + Math.random()*60-30) + "px";
    snow.style.top = (button.offsetTop + button.offsetHeight/2 + Math.random()*20-10) + "px";

    // Rastgele yön
    const x = (Math.random()*100 -50) + "px";
    const y = (Math.random()*-150) + "px";
    snow.style.setProperty("--x", x);
    snow.style.setProperty("--y", y);

    document.body.appendChild(snow);
    setTimeout(()=> snow.remove(), 1200);
  }
});
