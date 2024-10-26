function scrollAppear() {
  var introText = document.querySelector('.side-text');
  var sideImage = document.querySelector('.sideImage');
  var introPosition = introText.getBoundingClientRect().top;
  var imagePosition = sideImage.getBoundingClientRect().top;

  var screenPosition = window.innerHeight / 1.2;

  if (introPosition < screenPosition) {
    introText.classList.add('side-text-appear');
  }
  if (imagePosition < screenPosition) {
    sideImage.classList.add('sideImage-appear');
  }
}

window.addEventListener('scroll', scrollAppear);


  // Scroll Animation for About Section
  function scrollAppear() {
    const introText = document.querySelector('.side-text');
    const sideImage = document.querySelector('.sideImage');

    const introPosition = introText.getBoundingClientRect().top;
    const imagePosition = sideImage.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (introPosition < screenPosition) {
      introText.classList.add('side-text-appear');
    }
    if (imagePosition < screenPosition) {
      sideImage.classList.add('sideImage-appear');
    }
  }

  window.addEventListener('scroll', scrollAppear);

  // RV News Section Button Click
  const readMoreButton = document.querySelector('.btn1');
  readMoreButton.addEventListener('click', function () {
    alert('More news coming soon!');
  });


//numbers
// Function to animate the number increment
function animateCount(element, target) {
  let start = 0;
  let end = parseInt(target);
  let duration = 2000; // Total time for the animation in milliseconds
  let increment = Math.ceil(end / (duration / 60)); // Increment per frame (~60 fps)

  let count = setInterval(() => {
      start += increment;
      if (start >= end) {
          element.innerText = end + '+'; // Show the final value
          clearInterval(count);
      } else {
          element.innerText = start; // Update the number in the DOM
      }
  }, 60); // Run at approximately 60 frames per second
}

// Function to check if the element is in the viewport
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Initialize the animation when the element is in view
document.addEventListener('DOMContentLoaded', function() {
  const statNumber = document.querySelector('.stat-number');
  const targetNumber = statNumber.getAttribute('data-target');

  function checkAndAnimate() {
      if (isElementInView(statNumber)) {
          animateCount(statNumber, targetNumber);
          window.removeEventListener('scroll', checkAndAnimate); // Remove listener after animation
      }
  }

  window.addEventListener('scroll', checkAndAnimate);
});


// Get all stat numbers
const statNumbers = document.querySelectorAll('.stat-number');

// Function to animate counting
function animateCounting(element, targetNumber) {
  let currentNumber = 0;
  const interval = setInterval(() => {
    currentNumber += 20;
    if (currentNumber >= targetNumber) {
      currentNumber = targetNumber;
      clearInterval(interval);
    }
    element.textContent = currentNumber + '+';
  }, 5);
}

// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
statNumbers.forEach((statNumber) => {
  const targetNumber = parseInt(statNumber.textContent.replace('+', ''));
  statNumber.dataset.targetNumber = targetNumber;
});
const statsSection = document.querySelector('.stats');
window.addEventListener('scroll', () => {
  if (isInViewport(statsSection)) {
    statNumbers.forEach((statNumber) => {
      animateCounting(statNumber, parseInt(statNumber.dataset.targetNumber));
    });
    window.removeEventListener('scroll', arguments.callee);
  }
});



//scrolltotop

const scrollButton = document.getElementById('scroll-to-top');
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) { // Adjust this value to change when the button appears
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

// Add event listener to button
scrollButton.addEventListener('click', scrollToTop);

//video
const playButton = document.querySelector('.play-button');
const videoOverlay = document.querySelector('.video-overlay');
const iframe = document.querySelector('.sideImage');

playButton.addEventListener('click', () => {
  videoOverlay.style.display = 'none';
  iframe.src += '&autoplay=1';
});