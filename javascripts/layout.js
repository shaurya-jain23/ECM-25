fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header').innerHTML = data;
    runLayoutScripts()
});

// // Load footer
fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
});

function runLayoutScripts() {
const menuBtn = document.querySelector('.menu-icon');
const menuPanel = document.querySelector('.mobile-nav-menu');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', function(){
menuPanel.classList.toggle('show-menu');
overlay.classList.toggle('show');
})
document.querySelectorAll('.nav-pages li').forEach(tab=>{
tab.addEventListener('mouseenter', function(){
  overlay.classList.add('show');
})
tab.addEventListener('mouseleave', function(){
  overlay.classList.remove('show');
})
})
}



window.addEventListener("scroll", function(){
let stickNav = document.querySelector('.sticky-nav');
stickNav.classList.toggle('sticky-appear', window.scrollY > 0);
})



document.querySelectorAll('.nav-pages li').forEach(tab=>{
  tab.addEventListener('mouseenter', function(){
    overlay.classList.add('show');
  })
  tab.addEventListener('mouseleave', function(){
    overlay.classList.remove('show');
  })
})

// Add event listeners to all dropdowns in both navbars
document.querySelectorAll('.drop-down').forEach(dropdown => {
  const dropContainer = dropdown.querySelector('.drop-container');
  
  // Show the dropdown menu on mouseover
  dropdown.addEventListener('mouseover', function() {
    dropContainer.classList.add('show-drop-menu');
  });

  // Hide the dropdown menu on mouseout
  dropdown.addEventListener('mouseout', function() {
    dropContainer.classList.remove('show-drop-menu');
  });
});



document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
anchor.addEventListener("click", function (e) {
e.preventDefault();
const targetElement = document.querySelector(this.getAttribute("href"));

const startPosition = window.pageYOffset;
const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
const distance = targetPosition - startPosition;

const duration = 2000; // Duration of the scroll in milliseconds
let startTime = null;

function smoothScroll(currentTime) {
if (startTime === null) startTime = currentTime;

const timeElapsed = currentTime - startTime;
const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);

window.scrollTo(0, run);

if (timeElapsed < duration) {
  requestAnimationFrame(smoothScroll);
} else {
  // Ensuring the target is exactly reached when the animation finishes
  window.scrollTo(0, targetPosition);
}
}

// Ease-in-out function for a smoother scroll effect
function easeInOutQuad(t, b, c, d) {
t /= d / 2;
if (t < 1) return c / 2 * t * t + b;
t--;
return -c / 2 * (t * (t - 2) - 1) + b;
}

requestAnimationFrame(smoothScroll);
});
});
