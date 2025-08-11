// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("glass");
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  } else {
    navbar.classList.remove("glass");
    navbar.style.backgroundColor = "transparent";
  }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Close mobile menu if open
    mobileMenu.classList.add("hidden");
  });
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Skill bars animation
const skillBarsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll(".skill-bar");
      skillBars.forEach((bar) => {
        setTimeout(() => {
          bar.classList.add("animate");
        }, 300);
      });
    }
  });
}, observerOptions);

document.querySelector("#skills").addEventListener("load", () => {
  skillBarsObserver.observe(document.querySelector("#skills"));
});
skillBarsObserver.observe(document.querySelector("#skills"));

// Typing effect
const typingElement = document.querySelector(".typing");
if (typingElement) {
  const text = typingElement.textContent;
  typingElement.textContent = "";

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };

  setTimeout(typeWriter, 1000);
}

// Particles animation
function createParticles() {
  const particlesContainer = document.querySelector(".particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random size and position
    const size = Math.random() * 4 + 2;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 15 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";

    particlesContainer.appendChild(particle);
  }
}

// Initialize particles
createParticles();

// Active navigation link highlighting
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-indigo-600", "font-semibold");
    link.classList.add("text-gray-700");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.remove("text-gray-700");
      link.classList.add("text-indigo-600", "font-semibold");
    }
  });
}

// Update active nav link on scroll
window.addEventListener("scroll", updateActiveNavLink);

// Form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Show success message (you can replace this with actual form submission)
  const button = this.querySelector('button[type="submit"]');
  const originalText = button.textContent;

  button.textContent = "Mengirim...";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = "Pesan Terkirim!";
    button.classList.remove("bg-white", "text-indigo-600");
    button.classList.add("bg-green-500", "text-white");

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      button.classList.remove("bg-green-500", "text-white");
      button.classList.add("bg-white", "text-indigo-600");
      this.reset();
    }, 2000);
  }, 1500);
});

// Parallax effect for hero section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector("#home");
  const rate = scrolled * -0.5;

  hero.style.transform = `translateY(${rate}px)`;
});

// Add loading animation
window.addEventListener("load", function () {
  document.body.style.overflow = "auto";

  // Trigger initial animations
  setTimeout(() => {
    document.querySelectorAll("#home .fade-in").forEach((el) => {
      el.classList.add("active");
    });
  }, 500);
});
