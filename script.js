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

specTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      specTabs.forEach(t => t.classList.remove('active'));
      specContents.forEach(c => c.classList.add('hidden'));

   tab.classList.add('active');
      const targetId = `tab-${tab.dataset.tab}`;
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.remove('hidden');
    });
  });   
const chapterSteps = document.querySelectorAll('.chapter-step');
  chapterSteps.forEach(step => {
    step.addEventListener('click', () => {
      chapterSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
