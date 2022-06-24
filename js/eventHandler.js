export const eventHandler = () => {
  const hamBtn = document.getElementById("hamBtn");
  const intro = document.getElementById("intro");
  const about = document.getElementById("about");
  const neon = document.getElementById("neon");
  const img = document.getElementById("img");
  const hamTop = document.getElementById("hamTop");
  const hamMid = document.getElementById("hamMid")
  const hamBottom = document.getElementById("hamBottom")
  const fontY = document.getElementById("fontY");
  const fontS = document.getElementById("fontS");




    
hamBtn.addEventListener("click", ()=>{
  hamTop.style.transform = "rotate(-45deg)";
  hamTop.style.marginTop = 24.7+"px";
  hamMid.style.opacity = 0;
  hamBottom.style.transform = "rotate(45deg)";
  hamBottom.style.marginBottom = 25+"px";
  hamBottom.style.transition = "0.6s";
  hamTop.style.transition = "0.6s";
  hamMid.style.transition = "2.2s";
})

setTimeout(function (){
  fontS.style.opacity = 0.8;
  fontS.style.transition = "2s";
},1500);

setTimeout(function (){
  fontY.style.opacity = 0.9;
  fontY.style.transition = "2s";
},2000);










  































}