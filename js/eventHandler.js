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

//? about --> introdce영역 자식으로 엮어줌
Array.from(introduce.children).forEach(child => {
  child.addEventListener('mouseover', () => {
    child.style.transform = 'rotateX(180deg)';
    child.style.transition = '1.2s';
  });

  child.addEventListener('mouseout', () => {
    child.style.transform = 'rotateX(0deg)';
  });
});
//? rotatingcircle 회전 애니메이션 구현 영역.
const setRotateAnimation = () => {
  let degree = 0;
  let rotateTimer = setInterval(() => {
    degree++; // ++로 시계방향으로 돌아가게
    if(degree === 360) {
      degree = 0;
    }
    rotatingTrack.style.transform = `rotate(${degree}deg)`;
  }, 45);
  
  //? project 영역 회전하는 circle에 mouseover시 회전 멈춤, out시 다시 회전.
  //? 큰 circle에 작은 circle 자식요소로 심는 동시에 event 발생.
  Array.from(rotatingTrack.children).forEach(child => {
  child.addEventListener("mouseover", () => {
    child.style.width = "200px";
    child.style.height = "200px";
    child.style.transition = "0.8s";
    console.log('in !!!');
    clearInterval(rotateTimer);
    rotateTimer = undefined;
  });

  child.addEventListener("mouseout", () => {
    console.log('out !!!');
    child.style.width = "150px";
    child.style.height = "150px";
    if(!rotateTimer) {
      rotateTimer = setInterval(() => {
        degree++;
        if(degree === 360) {
          degree = 0;
        }
        rotatingTrack.style.transform = `rotate(${degree}deg)`;
      },45);
    }
  });
})
}

setRotateAnimation();

















  































}
