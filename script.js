// Hediyeyi açma ve ana içeriği gösterme
const giftWrapper = document.getElementById("gift-wrapper");
const giftBox = document.getElementById("gift-box");
const mainContent = document.getElementById("main-content");

giftWrapper.addEventListener("click", ()=>{
  giftBox.classList.add("opened");
  setTimeout(()=>{
    giftWrapper.style.display="none";
    mainContent.style.opacity = 1;
    startSnow(); // kar animasyonu başlat
  },800); // kutu açılma süresi
});

// --- Arka plan kar ---
function startSnow(){
  const canvas=document.getElementById("background-snow");
  const ctx=canvas.getContext("2d");
  function resizeCanvas(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;}
  window.addEventListener("resize",resizeCanvas);
  resizeCanvas();
  const snowflakes=[];
  for(let i=0;i<200;i++){
    snowflakes.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*3+1,d:Math.random()*1+0.5, angle: Math.random()*Math.PI*2});
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
    for(let f of snowflakes){
      f.y+=f.d;
      f.x+=Math.sin(f.angle)*0.5;
      f.angle+=0.01;
      if(f.y>canvas.height) f.y=0;
      if(f.x>canvas.width) f.x=0;
      if(f.x<0) f.x=canvas.width;
    }
    requestAnimationFrame(drawSnow);
  }
  drawSnow();
}

// --- Kardan adam ve sürpriz ---
const snowmanCanvas=document.getElementById("snowman-canvas");
const sctx=snowmanCanvas.getContext("2d");
function resizeSnowman(){snowmanCanvas.width=window.innerWidth;snowmanCanvas.height=window.innerHeight;}
window.addEventListener("resize",resizeSnowman);
resizeSnowman();

const btn=document.getElementById("surprise-btn");
const loveText=document.getElementById("love-text");
let snowmanAnimationId = null;

btn.addEventListener("click",()=>{startSnowmanAnimation();});

function startSnowmanAnimation(){
  if(snowmanAnimationId) cancelAnimationFrame(snowmanAnimationId);
  sctx.clearRect(0,0,snowmanCanvas.width,snowmanCanvas.height);

  let snowman={x:window.innerWidth/2,y:window.innerHeight/2,radius:10,maxRadius:100,growing:true,exploded:false,particles:[]};

  function animateSnowman(){
    sctx.clearRect(0,0,snowmanCanvas.width,snowmanCanvas.height);

    if(snowman.growing){
      snowman.radius += 2;
      if(snowman.radius >= snowman.maxRadius){
        snowman.growing = false;
        snowman.exploded = true;
        createParticles();
        loveText.style.opacity = 1;
        loveText.style.transform = "translate(-50%, -50%) scale(1.2)";
        setTimeout(()=>{loveText.style.transform = "translate(-50%, -50%) scale(1)";},500);
      }
    }

    if(!snowman.exploded){
      sctx.fillStyle="white";
      sctx.beginPath();
      sctx.arc(snowman.x,snowman.y,snowman.radius,0,Math.PI*2);
      sctx.fill();
    }

    if(snowman.exploded){
      for(let p of snowman.particles){
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15;
        sctx.fillStyle="white";
        sctx.beginPath();
        sctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        sctx.fill();
      }
    }

    snowmanAnimationId = requestAnimationFrame(animateSnowman);
  }

  function createParticles(){
    snowman.particles=[];
    for(let i=0;i<80;i++){
      snowman.particles.push({
        x:snowman.x,
        y:snowman.y,
        r: Math.random()*6+2,
        vx: (Math.random()-0.5)*8,
        vy: (Math.random()-1.5)*8
      });
    }
  }

  animateSnowman();
}
