export const eventHandler = () => {
  const intro = document.getElementById("intro");
  const about = document.getElementById("about");
  const neon = document.getElementById("neon");
  const img = document.getElementById("img");
  const fontY = document.getElementById("fontY");
  const fontS = document.getElementById("fontS");
  const introduce = document.getElementById("introduce");
  const aboutBox1 = document.getElementById("aboutBox1");
  const aboutBox2 = document.getElementById("aboutBox2");
  const aboutBox3 = document.getElementById("aboutBox3");
  const aboutBox4 = document.getElementById("aboutBox4");
  const rotatingTrack = document.getElementById("rotatingTrack");
  const rotatingTrack_circle1 = document.getElementById("rotatingTrack_circle1")
  const rotatingTrack_circle2 = document.getElementById("rotatingTrack_circle2")
  const rotatingTrack_circle3 = document.getElementById("rotatingTrack_circle3")
  const rotatingTrack_circle4 = document.getElementById("rotatingTrack_circle4")

// const allBox = document.getElementById("introduce");
// boxArray.forEach(box => {
//   allBox.appendChild(box);
// });

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


// 
// const commonMouseOverHandler = (element) => {
//   console.log(element);
//   if(!element) {
//     console.log('[MOUSEOVER] exception occured, ignore event handler...');
//     return;
//   }
//   element.style.transform = 'rotateX(180deg)';
//   element.style.transition = '1.2s';
// }

// const commonMouseOutHandler = (element) => {
//   if(!element) {
//     console.log('[MOUSEOUT] exception occured, ignore event handler...');
//     return;
//   }
//   element.style.transform = 'rotateX(0deg)';
// }

// Array.from(introduce.children).forEach(child => {
//   child.addEventListener('mouseover', () => commonMouseOverHandler(child));
//   child.addEventListener('mouseout', () => commonMouseOutHandler(child));
// });

Array.from(introduce.children).forEach(child => {
  child.addEventListener('mouseover', () => {
    child.style.transform = 'rotateX(180deg)';
    child.style.transition = '1.2s';
  });

  child.addEventListener('mouseout', () => {
    child.style.transform = 'rotateX(0deg)';
  });
});

Array.from(rotatingTrack.children).forEach(child => {
  child.addEventListener("mouseover", ()=>{
    
  })
})

const setRotateAnimation = () => {
  let degree = 0;
  let rotateTimer = setInterval(() => {
    degree++; // ++로 시계방향으로 돌아가게
    if(degree === 360) {
      degree = 0;
    }
    rotatingTrack.style.transform = `rotate(${degree}deg)`;
  }, 35);
  
  
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
  rotatingTrack_circle1.style.width = "150px";
  rotatingTrack_circle1.style.height = "150px";
  rotatingTrack_circle1.style.transition = "0.8s";
})

rotatingTrack_circle2.addEventListener("mouseover", () =>{
  rotatingTrack_circle2.style.width = "200px";
  rotatingTrack_circle2.style.height = "200px";
  rotatingTrack_circle2.style.transition = "0.8s";
})
rotatingTrack_circle2.addEventListener("mouseout", () =>{
  rotatingTrack_circle2.style.width = "150px";
  rotatingTrack_circle2.style.height = "150px";
  rotatingTrack_circle2.style.transition = "0.8s";
})

rotatingTrack_circle3.addEventListener("mouseover", () =>{
  rotatingTrack_circle3.style.width = "200px";
  rotatingTrack_circle3.style.height = "200px";
  rotatingTrack_circle3.style.transition = "0.8s";
})
rotatingTrack_circle3.addEventListener("mouseout", () =>{
  rotatingTrack_circle3.style.width = "150px";
  rotatingTrack_circle3.style.height = "150px";
  rotatingTrack_circle3.style.transition = "0.8s";
})

rotatingTrack_circle4.addEventListener("mouseover", () =>{
  rotatingTrack_circle4.style.width = "200px";
  rotatingTrack_circle4.style.height = "200px";
  rotatingTrack_circle4.style.transition = "0.8s";
})
rotatingTrack_circle4.addEventListener("mouseout", () =>{
  rotatingTrack_circle4.style.width = "150px";
  rotatingTrack_circle4.style.height = "150px";
  rotatingTrack_circle4.style.transition = "0.8s";
})















  































}
