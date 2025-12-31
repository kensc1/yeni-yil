// Canvas karları
const canvas = document.getElementById("background-snow");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];
for(let i=0;i<200;i++){
  snowflakes.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*3+1,
    d: Math.random()*1+0.5
  });
}

function drawSnow(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="white";
  ctx.beginPath();
  for(let f of snowflakes){
    ctx.moveTo(f.x,f.y);
    ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
  }
  ctx.fill();
  updateSnow();
}

let angle=0;
function updateSnow(){
  angle += 0.01;
  for(let f of snowflakes){
    f.y += f.d;
    f.x += Math.sin(angle)*0.5;
    if(f.y>canvas.height) f.y=0;
    if(f.x>canvas.width) f.x=0;
    if(f.x<0) f.x=canvas.width;
  }
  requestAnimationFrame(drawSnow);
}

drawSnow();

// Element hover kar düşmesi
const elements = document.querySelectorAll('.letter, p, h1');
elements.forEach(el=>{
  el.addEventListener('mouseenter',()=>{
    const rect = el.getBoundingClientRect();
    for(let i=0;i<5;i++){
      const snow = document.createElement('div');
      snow.style.position='absolute';
      snow.style.width='5px';
      snow.style.height='5px';
      snow.style.background='white';
      snow.style.borderRadius='50%';
      snow.style.left = rect.left + Math.random()*rect.width + 'px';
      snow.style.top = rect.top + window.scrollY + 'px';
      snow.style.zIndex='10';
      document.body.appendChild(snow);

      let y=parseFloat(snow.style.top);
      const fall=setInterval(()=>{
        y+=2+Math.random()*2;
        snow.style.top=y+'px';
        if(y>window.innerHeight){
          snow.remove();
          clearInterval(fall);
        }
      },10);
    }
  });
});
