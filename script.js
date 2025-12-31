// Her .content bölümünün üstüne kar ekle
document.querySelectorAll('.content').forEach(section => {
  const flakes = [];
  for(let i=0;i<50;i++){
    const flake = document.createElement('div');
    flake.className='snowflake';
    flake.style.left = Math.random() * section.offsetWidth + 'px';
    flake.style.top = Math.random() * section.offsetHeight + 'px';
    flake.speed = 0.3 + Math.random()*0.7;
    section.appendChild(flake);
    flakes.push(flake);
  }

  // Kar animasyonu
  function animate(){
    flakes.forEach(f=>{
      let top = parseFloat(f.style.top);
      top += f.speed;
      if(top > section.offsetHeight) top = -10;
      f.style.top = top + 'px';
    });
    requestAnimationFrame(animate);
  }
  animate();
});

// Kar topu butonu
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
