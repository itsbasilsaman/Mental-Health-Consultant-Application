let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x')
  navlist.classList.toggle('open')
}

const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset: true
});

sr.reveal('.icons',{delay:190 , origin:'bottom'});
sr.reveal('.hero-text',{delay:200 , origin:'top'});
sr.reveal('.scroll-down',{delay:190 , origin:'bottom'});
sr.reveal('.offer',{delay:190 , origin:'left'});
sr.reveal('#detail-section',{delay:190 , origin:'bottom'});
sr.reveal('.box-1',{delay:190 , origin:'bottom'});
sr.reveal('.start-button',{delay:190 , origin:'bottom'});
sr.reveal('.box',{delay:190 , origin:'bottom'});
sr.reveal('#section-four',{delay:190 , origin:'bottom'});
sr.reveal('#main-left-section',{delay:190 , origin:'bottom'});
sr.reveal('.card-1',{delay:190 , origin:'left'});
sr.reveal('.card-2',{delay:190 , origin:'top'});
sr.reveal('.card-3',{delay:190 , origin:'bottom'});
sr.reveal('.card-4',{delay:190 , origin:'right'});
sr.reveal('.result',{delay:190 , origin:'bottom'});
sr.reveal('.photo-one',{delay:190 , origin:'left'});
sr.reveal('.photo-two',{delay:190 , origin:'bottom'});
sr.reveal('.photo-three',{delay:190 , origin:'top'});
sr.reveal('.photo-four',{delay:190 , origin:'right'});
sr.reveal('.appointment-button',{delay:190 , origin:'bottom'});
sr.reveal('.article-text',{delay:190 , origin:'bottom'});



// counter
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const duration = 2000; // Duration of the animation in milliseconds

  const startCounting = (counterElement) => {
      if (counterElement.classList.contains('counted')) return; // Prevent reanimation
      counterElement.classList.add('counted');

      const endNumber = parseInt(counterElement.getAttribute('data-end-number'), 10);
      let startTime = null;

      function animateCounter(currentTime) {
          if (startTime === null) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const count = Math.floor(progress * endNumber);

          counterElement.textContent = count;

          if (progress < 1) {
              requestAnimationFrame(animateCounter);
          }
      }

      requestAnimationFrame(animateCounter);
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              startCounting(entry.target);
              // Once the element has been counted, stop observing
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.5 // Adjust the threshold to determine when the counter should appear
  });

  counters.forEach(counter => {
      observer.observe(counter);
  });
});
