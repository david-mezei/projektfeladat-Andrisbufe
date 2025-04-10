
const slideIds = ['#slide-1', '#slide-2', '#slide-3'];
let currentIndex = 0;
const intervalTime = 4000; // 4 másodperc

function goToNextSlide() {
  currentIndex = (currentIndex + 1) % slideIds.length;
  window.location.hash = slideIds[currentIndex];
}

setInterval(goToNextSlide, intervalTime);
