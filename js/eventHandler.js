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
  const aboutBox1 = document.getElementById("aboutBox1");
  const aboutBox2 = document.getElementById("aboutBox2");
  const aboutBox3 = document.getElementById("aboutBox3");
  const aboutBox4 = document.getElementById("aboutBox4");
  const aboutBox5 = document.getElementById("aboutBox5");




    
// hamBtn.addEventListener("click", ()=>{
//   hamTop.style.transform = "rotate(-45deg)";
//   hamTop.style.marginTop = 24.7+"px";
//   hamMid.style.opacity = 0;
//   hamBottom.style.transform = "rotate(45deg)";
//   hamBottom.style.marginBottom = 25+"px";
//   hamBottom.style.transition = "0.6s";
//   hamTop.style.transition = "0.6s";
//   hamMid.style.transition = "2.2s";
// })
// ? intro 화면에 text 효과 
setTimeout(function (){
  fontS.style.opacity = 0.8;
  fontS.style.transition = "2s";
},1500);

setTimeout(function (){
  fontY.style.opacity = 0.9;
  fontY.style.transition = "2s";
},2000);

// ?  aboutBox 들을 자식새끼로 묶어서 한번에 처리할 수 있게.
// ? 해당 스크롤 스코프로 이동 시 좌/우 Box들이 양 옆에서 미끄러지듯이 배치.
aboutBox1.addEventListener("mouseover", () => {
  aboutBox1.style.transform = "rotateX(180deg)";
  aboutBox1.style.transition = "1.2s";
})
aboutBox1.addEventListener("mouseout", () => {
  aboutBox1.style.transform = "rotateX(0deg)";
})

aboutBox2.addEventListener("mouseover", () => {
  aboutBox2.style.transform = "rotateX(180deg)";
  aboutBox2.style.transition = "1.2s";
})
aboutBox2.addEventListener("mouseout", () => {
  aboutBox2.style.transform = "rotateX(0deg)";
})

aboutBox3.addEventListener("mouseover", () => {
  aboutBox3.style.transform = "rotateX(180deg)";
  aboutBox3.style.transition = "1.2s";
})
aboutBox3.addEventListener("mouseout", () => {
  aboutBox3.style.transform = "rotateX(0deg)";
})

aboutBox4.addEventListener("mouseover", () => {
  aboutBox4.style.transform = "rotateX(180deg)";
  aboutBox4.style.transition = "1.2s";
})
aboutBox4.addEventListener("mouseout", () => {
  aboutBox4.style.transform = "rotateX(0deg)";
})

aboutBox5.addEventListener("mouseover", () => {
  aboutBox5.style.transform = "rotateX(180deg)";
  aboutBox5.style.transition = "1.2s";})
aboutBox5.addEventListener("mouseout", () => {
  aboutBox5.style.transform = "rotateX(0deg)";
})







  































}