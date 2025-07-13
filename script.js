// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fake form submission (demo purpose)
document.getElementById('contact-form').addEventListener('submit', function() {
  alert('Thank you for reaching out! (Form submission is disabled in demo.)');
});


const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Optional: close menu when link clicked (on mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});


const roles = [
  "Software Engineer",
  "Backend Developer",
  "Laravel & Python Enthusiast",
  "API & Database Specialist"
];
let i = 0, j = 0, typing, isDeleting = false;

function typeLoop() {
  const text = roles[i];
  let display = text.substring(0, j);
  document.getElementById("typed-text").textContent = display;

  if (!isDeleting && j < text.length) {
    j++;
    typing = setTimeout(typeLoop, 80);
  } else if (isDeleting && j > 0) {
    j--;
    typing = setTimeout(typeLoop, 36);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      typing = setTimeout(typeLoop, 900);
    } else {
      isDeleting = false;
      i = (i + 1) % roles.length;
      typing = setTimeout(typeLoop, 350);
    }
  }
}
typeLoop();


// Animate skill bars when section is in view
function animateSkillBars() {
  document.querySelectorAll('.skill-bar .bar').forEach(bar => {
    const width = bar.getAttribute('style').match(/width: (\d+)%/)[1];
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = width + '%';
    }, 400);
  });
}

let skillsSection = document.getElementById('skills');
let skillsAnimated = false;

window.addEventListener('scroll', () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;
  if (sectionPos < screenPos && !skillsAnimated) {
    animateSkillBars();
    skillsAnimated = true;
  }
});
