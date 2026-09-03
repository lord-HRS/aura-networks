document.addEventListener('DOMContentLoaded', () => {
  // Parallax Scroll Effect for Floating Elements
  const floatingElems = document.querySelectorAll('.floating-scroll-elem');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    floatingElems.forEach(elem => {
      const speed = parseFloat(elem.dataset.speed) || 0.1;
      elem.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });

  // Video Trailer Play Overlay Handler
  const videoPlayOverlay = document.getElementById('videoPlayOverlay');
  const allianceTrailer = document.getElementById('allianceTrailer');

    if (videoPlayOverlay && allianceTrailer) {
    videoPlayOverlay.addEventListener('click', () => {
      videoPlayOverlay.style.display = 'none';
      allianceTrailer.play();
    });
  }

  // Spec Dashboard Tab Switcher
    const specTabs = document.querySelectorAll('.spec-tab');
  const specContents = document.querySelectorAll('.spec-content');

