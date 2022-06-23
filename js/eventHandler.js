export const eventHandler = () => {
  const hamBtn = document.getElementById("hamBtn");
  const intro = document.getElementById("intro");
  const about = document.getElementById("about");
  const neon = document.getElementById("neon");
  const img = document.getElementById("img");
  const hamTop = document.getElementById("hamTop");
  const hamMid = document.getElementById("hamMid")
  const hamBottom = document.getElementById("hamBottom")




    
hamBtn.addEventListener("click", ()=>{
  hamTop.style.transform = "rotate(-45deg)";
  hamTop.style.marginTop = 24.5+"px";
  hamMid.style.opacity = 0;
  hamBottom.style.transform = "rotate(45deg)";
  hamBottom.style.marginBottom = 25+"px";
  hamBottom.style.transition = "0.4s";
  hamTop.style.transition = "0.4s";
  hamMid.style.transition = "2s";
  
})







  































}