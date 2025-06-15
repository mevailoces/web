// Scroll to Top Button
const toTopBtn = document.getElementById('toTopBtn');

window.onscroll = () => {
  toTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};
toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Validation + mailto
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const charCount = document.getElementById('charCount');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      const mailtoLink = `mailto:mevailoces.student@asiancollege.edu.ph?subject=Portfolio Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}`;
      window.location.href = mailtoLink;
    });

    // Character Counter
    if (charCount) {
      messageInput.addEventListener('input', () => {
        charCount.textContent = `${messageInput.value.length}/500 characters`;
      });
    }
  }
});

// Dark Mode Toggle
const toggle = document.getElementById('darkModeToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  });

  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
}

// Typing Effect for Hero Text
const typedElement = document.getElementById("typed-text");
if (typedElement) {
  const text = "Information Technology Student";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typedElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }

  window.addEventListener('load', typeEffect);
}

// Scroll-triggered fade-in
const fadeElements = document.querySelectorAll('.fade-section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
});
fadeElements.forEach(el => observer.observe(el));

// Active Nav Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
