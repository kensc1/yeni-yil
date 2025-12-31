const overlay = document.getElementById("snowOverlay");

// SCROLL ile overlayi azalt
window.addEventListener("scroll", () => {
  let maxScroll = document.body.scrollHeight - window.innerHeight;
  let scrollFraction = window.scrollY / maxScroll;
  overlay.style.opacity = Math.max(0, 1 - scrollFraction*1.2);
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
