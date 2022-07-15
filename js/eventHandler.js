export const eventHandler = () => {
  const intro = document.getElementById("intro");
  const about = document.getElementById("about");
  const neon = document.getElementById("neon");
  const img = document.getElementById("img");
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
      
      //? about --> introduce영역 자식으로 엮어줌
      Array.from(introduce.children).forEach(child => {
        child.addEventListener("mouseover", () => {
          child.style.transform = "rotateY(180deg)";
          child.style.transition = "1.2s";
  });
  
  child.addEventListener("mouseout", () => {
    child.style.transform = "rotateX(0deg)";
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

// !               videoPlayer 영역 

const table = document.getElementById("table");
const resetBtn = document.getElementById("reset");
const tape1 = document.getElementById("tapeBox1_frame_0");
// 전역 변수, 반드시 함수들보다 위에 있어야함
let target = null;
const insertTape = document.getElementById("insert");
let insertTapeRect = insertTape.getBoundingClientRect();

const tapeImageMap = {
  "tapeBox1": [
    '../css/asset/tape1.png',
    '../css/asset/tape2.png',
    '../css/asset/tape3.png',
  ],

  'tapeBox2': [
    '../css/asset/tape4.png',
    '../css/asset/tape5.png',
    '../css/asset/tape6.png',
  ],

  'tapeBox3': [
    '../css/asset/tape7.png',
    '../css/asset/tape8.png',
    '../css/asset/tape9.png',
  ],
};

// tape들이 담길 box와 tape의 껍데기, 실제로 이동할 tape 생성
const createTapeBox = (parent, boxName, tapeWidth, tapeHeight) => {
  const tapeBox = document.createElement("div");
  tapeBox.id = boxName;
  tapeBox.style.width = "30%";
  tapeBox.style.height = "80%";
  // tapeBox.style.backgroundColor = "pink";
  tapeBox.style.display = "flex";
  tapeBox.style.flexDirection = "column";
  tapeBox.style.justifyContent = "flex-end";
  tapeBox.style.alignItems = "flex-start";
  tapeBox.style.paddingLeft = "20px";
  tapeBox.style.paddingBottom = "6px";
  
  const imageUrlList = tapeImageMap[boxName];
  console.log('############ ', imageUrlList);

  // tape가 이동 한 후 돌아올 frame 생성.
  for (let i = 0; i < 3; i++) {
    const frame = document.createElement('div');
    frame.id = boxName + '_frame_' + i.toString();
    // frame.style.width = `${tapeWidth}px`;
    frame.style.width = "270px";
    frame.style.height = "30px";
    // frame.style.border = "1px solid black"; // remove later
    frame.style.transformStyle = 'preserve-3d'; // 3d값 그대로 전달
    frame.style.perspective = '11px';
    // frame.style.marginTop = "1px";

    console.log(frame.id);
    
    // 실제로 이동하는 애니메이션을 구현 할 tape 생성, frame이라는 위치에서 이동함.
    // const frameSize = frame.getBoundingClientRect();
    const realTape = document.createElement('div');
    realTape.id = 'realTape_' + i.toString();
    // realTape.style.width = `${tapeWidth}px`;
    realTape.style.width = "100%";
    realTape.style.height = `${tapeHeight}px`;
    // realTape.style.backgroundColor = 'cyan';
    realTape.style.transition = '0.6s';
    realTape.style.position = 'absolute';
    realTape.style.cursor = "pointer";
    realTape.style.backgroundPosition = "center";
    realTape.style.backgroundSize = "cover";
    realTape.style.backgroundImage = `url(${imageUrlList[i]})`;
    
    frame.appendChild(realTape);
    tapeBox.appendChild(frame);
  }
  
  parent.appendChild(tapeBox);
}
// tape들이 이동하는 애니메이션 구현
const setAnimatedBox = (elementId) => {
  const box = document.getElementById(elementId);
  if (!box) {
    console.log('박스가 없다...');
    return;
  }
  Array.from(box.children).forEach(tb => {
    const real = tb.firstChild;
    real.addEventListener("click", () => {
      if (target !== null) {
        target.style.transform = "translate(0,0)";
        console.log(tb);
      }
      target = real;
      const selfRect = real.getBoundingClientRect();
      const xDiff = insertTapeRect.left - selfRect.left;
      const yDiff = insertTapeRect.top - selfRect.top;
      setTimeout(() => {
      real.style.transform = `translate3d(${xDiff}px, ${yDiff}px, 0px)`;
      }, 750);
      real.style.transform = `translate3d(${xDiff}px, ${yDiff}px, 3px)`;
      real.style.opacity = 0.5;
    });
  });
}  

createTapeBox(table, "tapeBox1", 100, 38);
setAnimatedBox("tapeBox1");

createTapeBox(table, "tapeBox2", 100, 38);
setAnimatedBox("tapeBox2");

createTapeBox(table, "tapeBox3", 100, 38);
setAnimatedBox("tapeBox3");


// 창 크기 변경시켰을 때 호출됨 (드래그 중에 아주 빠르게)
// window.addEventListener("resize", () => {
//   insertTapeRect = insertTape.getBoundingClientRect();
//   console.log(insertTapeRect);
// });  

// 리셋 버튼 처리
resetBtn.addEventListener("click", () => {
  target.style.transform = "translateZ(6px)"; // z축 잠깐 띄움
  target.style.opacity = 1;// 1초 뒤 원래대로 돌려놓음
  setTimeout(() => {
    target.style.transform = "translate3d(0,0,0)"; 
    target = null;
  }, 650);
});

const refreshResetButtonRect = () => {
  insertTapeRect = insertTape.getBoundingClientRect();
  console.log(insertTapeRect);
}

// 창 크기 변경시켰을 때 호출됨 (드래그 중에 아주 빠르게)
window.addEventListener("resize", () => {
  console.log('창 크기 변경해서 리셋버튼 위치가 바뀌었다. 리셋버튼 위치 갱신!!');
  refreshResetButtonRect();
});

window.addEventListener('scroll', () => {
  console.log('스크롤해서 리셋버튼 위치가 바뀌었다. 리셋버튼 위치 갱신!!!');
  refreshResetButtonRect();
});

};
