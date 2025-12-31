// ARKA PLAN KAR
const background = document.getElementById('backgroundSnow');
const bgFlakes = [];
for(let i=0;i<150;i++){
  const flake = document.createElement('div');
  flake.className='snowflake';
  flake.style.left=Math.random()*window.innerWidth+'px';
  flake.style.top=Math.random()*window.innerHeight+'px';
  flake.speed=0.5 + Math.random();
  background.appendChild(flake);
  bgFlakes.push(flake);
}

function animateBackground() {
  bgFlakes.forEach(f=>{
    let top = parseFloat(f.style.top);
    top += f.speed;
    if(top > window.innerHeight) top = -10;
    f.style.top = top + 'px';
  });
  requestAnimationFrame(animateBackground);
}
animateBackground();

// İÇERİK ÜSTÜ KAR
document.querySelectorAll('.content, .letter, button').forEach(el=>{
  const flakes=[];
  for(let i=0;i<30;i++){
    const f = document.createElement('div');
    f.className='snowflake';
    f.style.left=Math.random()*el.offsetWidth+'px';
    f.style.top=Math.random()*el.offsetHeight+'px';
    f.speed=0.3+Math.random()*0.5;
    el.appendChild(f);
    flakes.push(f);
  }
  function animate(){
    flakes.forEach(f=>{
      let top = parseFloat(f.style.top);
      top += f.speed;
      if(top > el.offsetHeight) top = -10;
      f.style.top=top+'px';
    });
    requestAnimationFrame(animate);
  }
  animate();
});

// KAR TOPU BUTONU
const button = document.getElementById("snowButton");
button.addEventListener("click", ()=>{
  for(let i=0;i<10;i++){
    const snowball = document.createElement("div");
    snowball.className="snowball";
    snowball.style.left=(button.offsetLeft + button.offsetWidth/2 + Math.random()*60 - 30)+"px";
    snowball.style.top=(button.offsetTop + button.offsetHeight/2 + Math.random()*20 - 10)+"px";
    const x=(Math.random()*100-50)+"px";
    const y=(Math.random()*-150)+"px";
    snowball.style.setProperty("--x",x);
    snowball.style.setProperty("--y",y);
    document.body.appendChild(snowball);
    setTimeout(()=>snowball.remove(),1200);
  }
});
