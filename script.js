
const typingText = document.querySelector(".typing-text");
const text = ["PROGRAMMER", "UI/UX Designer", "Tech Explorer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (index >= text.length) index = 0;
  currentText = text[index];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++;
    }
  } else {
    typingText.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
    }
  }

  setTimeout(type, isDeleting ? 100 : 150);
}
type();
// Theme Toggle
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
});

// Skill Bar Fill Animation and Circle Fill
function animateSkills() {
  const skillSection = document.getElementById('skills');
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const circles = document.querySelectorAll('.circle');

  if (isInViewport(skillSection)) {
    // Animate skill bars
    skillBars.forEach(bar => {
      const width = bar.style.getPropertyValue('--width');
      bar.style.width = width;
    });

    // Animate circle progress
    circles.forEach(circle => {
      const value = circle.style.getPropertyValue('--value');
      circle.style.background = `conic-gradient(var(--main-color) ${value}%, #222 ${value}%)`;
    });

    // Remove scroll listener after first animation
    window.removeEventListener('scroll', animateSkills);
  }
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight - 100; // Adjust threshold if needed
}

window.addEventListener('scroll', animateSkills);

//projects
// Open Modal with project details
function openModal(imageSrc, title, description) {
  const modal = document.getElementById("projectModal");
  document.getElementById("modal-img").src = imageSrc;
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-desc").textContent = description;
  modal.style.display = "flex";
}

// Close modal
function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Close modal when clicking outside of modal content
window.addEventListener("click", function (event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Initialize AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    once: true
  });
});
//contact form
function submitForm(event) {
  event.preventDefault();
  alert("Thank you for your message!");
  document.querySelector(".contact-form").reset();
}

