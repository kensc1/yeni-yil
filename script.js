// Spotify buton uyarısı
function playSpotify() {
  alert("Spotify'da şarkıyı oynatmak için iframe içindeki 'Play' butonuna basmalısın.");
}

// Arkaplan karları
const canvas = document.getElementById("background-snow");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

for(let i=0; i<200; i++){
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 3 + 1,
    speed: Math.random() * 1 + 0.5,
    angle: Math.random() * Math.PI * 2
  });
}

function drawSnow() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for(let flake of snowflakes){
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI*2);
  }
  ctx.fill();
  updateSnow();
}

function updateSnow() {
  for(let flake of snowflakes){
    flake.y += flake.speed;
    flake.x += Math.sin(flake.angle)*0.5;
    flake.angle += 0.01;
    if(flake.y > canvas.height) flake.y = 0;
    if(flake.x > canvas.width) flake.x = 0;
    if(flake.x < 0) flake.x = canvas.width;
  }
  requestAnimationFrame(drawSnow);
}

drawSnow();

// Metin ve elementler üstüne kar taneleri (basit efekt)
const letters = document.querySelectorAll('.letter, p, h1');

letters.forEach(el=>{
  el.addEventListener('mouseenter', ()=>{
    // rastgele kar düşürme animasyonu
    const snow = document.createElement('div');
    snow.style.position='absolute';
    snow.style.width='6px';
    snow.style.height='6px';
    snow.style.background='white';
    snow.style.borderRadius='50%';
    snow.style.top = (el.getBoundingClientRect().top + window.scrollY) + 'px';
    snow.style.left = (el.getBoundingClientRect().left + Math.random()*el.offsetWidth) + 'px';
    snow.style.zIndex='10';
    document.body.appendChild(snow);

    let y = parseFloat(snow.style.top);
    const fall = setInterval(()=>{
      y+=2;
      snow.style.top = y+'px';
      if(y>window.innerHeight){
        snow.remove();
        clearInterval(fall);
      }
    }, 10);
  });
});
