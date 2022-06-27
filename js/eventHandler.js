export const eventHandler = () => {
  const intro = document.getElementById("intro");
  const about = document.getElementById("about");
  const neon = document.getElementById("neon");
  const img = document.getElementById("img");
  const fontY = document.getElementById("fontY");
  const fontS = document.getElementById("fontS");
  const aboutBox1 = document.getElementById("aboutBox1");
  const aboutBox2 = document.getElementById("aboutBox2");
  const aboutBox3 = document.getElementById("aboutBox3");
  const aboutBox4 = document.getElementById("aboutBox4");
  const rotatingTrack = document.getElementById("rotatingTrack");
  const rotatingTrack_circle1 = document.getElementById("rotatingTrack_circle1")
  const rotatingTrack_circle2 = document.getElementById("rotatingTrack_circle2")
  const rotatingTrack_circle3 = document.getElementById("rotatingTrack_circle3")
  const rotatingTrack_circle4 = document.getElementById("rotatingTrack_circle4")


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
});
aboutBox1.addEventListener("mouseout", () => {
  aboutBox1.style.transform = "rotateX(0deg)";
});

aboutBox2.addEventListener("mouseover", () => {
  aboutBox2.style.transform = "rotateX(180deg)";
  aboutBox2.style.transition = "1.2s";
});
aboutBox2.addEventListener("mouseout", () => {
  aboutBox2.style.transform = "rotateX(0deg)";
});

aboutBox3.addEventListener("mouseover", () => {
  aboutBox3.style.transform = "rotateX(180deg)";
  aboutBox3.style.transition = "1.2s";
});
aboutBox3.addEventListener("mouseout", () => {
  aboutBox3.style.transform = "rotateX(0deg)";
});

aboutBox4.addEventListener("mouseover", () => {
  aboutBox4.style.transform = "rotateX(180deg)";
  aboutBox4.style.transition = "1.2s";
});
aboutBox4.addEventListener("mouseout", () => {
  aboutBox4.style.transform = "rotateX(0deg)";
});

const setRotateAnimation = () => {
  let degree = 0;

  let rotateTimer = setInterval(() => {
    degree++; // ++로 시계방향으로 돌아가게
    if(degree === 360) {
      degree = 0;
    }
    rotatingTrack.style.transform = `rotate(${degree}deg)`;
  }, 45);

  rotatingTrack.addEventListener("mouseover", () => {
    console.log('in !!!');
    clearInterval(rotateTimer);
    rotateTimer = undefined;
  });

  rotatingTrack.addEventListener("mouseout", () => {
    console.log('out !!!');
    if(!rotateTimer) {
      rotateTimer = setInterval(() => {
        degree++;
        if(degree === 360) {
          degree = 0;
        }
        rotatingTrack.style.transform = `rotate(${degree}deg)`;
      }, 50);
    }
  });
}
setRotateAnimation();

rotatingTrack_circle1.addEventListener("mouseover", () =>{
  rotatingTrack_circle1.style.width = "200px";
  rotatingTrack_circle1.style.height = "200px";
  rotatingTrack_circle1.style.transition = "0.8s";
})
rotatingTrack_circle1.addEventListener("mouseout", () =>{
  rotatingTrack_circle1.style.width = "120px";
  rotatingTrack_circle1.style.height = "120px";
  rotatingTrack_circle1.style.transition = "0.8s";
})

rotatingTrack_circle2.addEventListener("mouseover", () =>{
  rotatingTrack_circle2.style.width = "200px";
  rotatingTrack_circle2.style.height = "200px";
  rotatingTrack_circle2.style.transition = "0.8s";
})
rotatingTrack_circle2.addEventListener("mouseout", () =>{
  rotatingTrack_circle2.style.width = "120px";
  rotatingTrack_circle2.style.height = "120px";
  rotatingTrack_circle2.style.transition = "0.8s";
})

rotatingTrack_circle3.addEventListener("mouseover", () =>{
  rotatingTrack_circle3.style.width = "200px";
  rotatingTrack_circle3.style.height = "200px";
  rotatingTrack_circle3.style.transition = "0.8s";
})
rotatingTrack_circle3.addEventListener("mouseout", () =>{
  rotatingTrack_circle3.style.width = "120px";
  rotatingTrack_circle3.style.height = "120px";
  rotatingTrack_circle3.style.transition = "0.8s";
})

rotatingTrack_circle4.addEventListener("mouseover", () =>{
  rotatingTrack_circle4.style.width = "200px";
  rotatingTrack_circle4.style.height = "200px";
  rotatingTrack_circle4.style.transition = "0.8s";
})
rotatingTrack_circle4.addEventListener("mouseout", () =>{
  rotatingTrack_circle4.style.width = "120px";
  rotatingTrack_circle4.style.height = "120px";
  rotatingTrack_circle4.style.transition = "0.8s";
})

















  































}
