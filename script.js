const container = document.getElementById("snowContainer");

// KAR TANECIKLERI OLUŞTUR
const flakes = [];
for(let i=0;i<200;i++){
  const flake = document.createElement("div");
  flake.className="snowflake";
  flake.style.left = Math.random()*window.innerWidth + "px";
  flake.style.top = Math.random()*window.innerHeight + "px";
  flake.speed = 0.5 + Math.random();
  container.appendChild(flake);
  flakes.push(flake);
}

// KAR TANECIKLERINI ANIMASYONLA YUKARI ASAGI HAREKET ETTIR
function animate(){
  flakes.forEach(f=>{
    let top = parseFloat(f.style.top);
    top += f.speed;
    if(top > window.innerHeight) top = -10;
    f.style.top = top + "px";
  });
  requestAnimationFrame(animate);
}
animate();

// SCROLL ile karların erimesi (opacity azalır)
window.addEventListener("scroll", ()=>{
  let maxScroll = document.body.scrollHeight - window.innerHeight;
  let scrollFraction = window.scrollY / maxScroll;
  flakes.forEach(f=> f.style.opacity = Math.max(0, 0.8 - scrollFraction));
});

// KAR TOPU BUTONU
const button = document.getElementById("snowButton");
button.addEventListener("click", ()=>{
  for(let i=0;i<10;i++){
    const snowball = document.createElement("div");
    snowball.className="snowball";
    snowball.style.left=(button.offsetLeft+button.offsetWidth/2+Math.random()*60-30)+"px";
    snowball.style.top=(button.offsetTop+button.offsetHeight/2+Math.random()*20-10)+"px";
    const x=(Math.random()*100-50)+"px";
    const y=(Math.random()*-150)+"px";
    snowball.style.setProperty("--x",x);
    snowball.style.setProperty("--y",y);
    document.body.appendChild(snowball);
    setTimeout(()=>snowball.remove(),1200);
  }
});
