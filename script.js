function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

function toggleMenu() {
  document.querySelector('.hamburger').classList.toggle('active');
  document.querySelector('nav ul').classList.toggle('active');
}

/* // Scroll-based reveal animations */
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight * 0.85) {
      section.classList.add('show');
    }
  });
});
/* Toggle between light and dark themes */
function toggleTheme() {
document.body.classList.toggle('dark');
const elements = document.querySelectorAll('nav, header, button');
elements.forEach(el => el.classList.toggle('dark'));

const toggleButton = document.querySelector('.theme-toggle');
if (document.body.classList.contains('dark')) {
toggleButton.innerHTML = "🌞"; 
} else {
toggleButton.innerHTML = "🌙"; 
}
}
