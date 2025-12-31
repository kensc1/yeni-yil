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
const overlay = document.getElementById("snowOverlay");

// 200 kar tanesi
for(let i=0;i<200;i++){
  const snow = document.createElement("div");
  snow.className = "snowflake";
  snow.style.left = Math.random()*window.innerWidth + "px";
  snow.style.animationDuration = 5 + Math.random()*5 + "s";
  snow.style.opacity = 0.3 + Math.random()*0.7;
  overlay.appendChild(snow);
}

// Tıklayınca veya scroll yaptıkça kar azalır
function reduceSnow() {
  overlay.style.opacity = parseFloat(overlay.style.opacity || 1) - 0.1;
  if(parseFloat(overlay.style.opacity)<=0){
    overlay.style.display = "none";
    window.removeEventListener("scroll", reduceSnow);
  }
}

overlay.addEventListener("click", reduceSnow);
window.addEventListener("scroll", reduceSnow);
