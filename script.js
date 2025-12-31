// KAR TANECİKLERİ
for(let i=0;i<200;i++){
  const snow = document.createElement("div");
  snow.className = "snowflake";
  snow.style.left = Math.random()*window.innerWidth + "px";
  snow.style.top = Math.random()*window.innerHeight + "px";
  snow.style.animationDuration = (5+Math.random()*5)+"s";
  snow.style.opacity = 0.3+Math.random()*0.7;
  document.body.appendChild(snow);
}

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
