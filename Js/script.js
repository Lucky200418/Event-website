window.addEventListener("load", function () {
  document.body.classList.add("loaded");
});

// scrolling Effects
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".grid-2-col");

  const onScroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});

// Function to calculate the time left until the target date
function calculateTimeLeft(targetDate) {
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

// Function to update the countdown display
function updateCountdownDisplay(timeLeft) {
  document.querySelector(
    ".countdown-element:nth-child(1) span"
  ).textContent = `${timeLeft.days}:`;
  document.querySelector(
    ".countdown-element:nth-child(2) span"
  ).textContent = `${timeLeft.hours}:`;
  document.querySelector(
    ".countdown-element:nth-child(3) span"
  ).textContent = `${timeLeft.minutes}:`;
  document.querySelector(".countdown-element:nth-child(4) span").textContent =
    timeLeft.seconds;
}

// Function to start the countdown
function startCountdown(daysFromNow) {
  const targetDate = new Date().getTime() + daysFromNow * 24 * 60 * 60 * 1000;

  const countdownInterval = setInterval(function () {
    const timeLeft = calculateTimeLeft(targetDate);
    updateCountdownDisplay(timeLeft);

    if (
      timeLeft.days <= 0 &&
      timeLeft.hours <= 0 &&
      timeLeft.minutes <= 0 &&
      timeLeft.seconds <= 0
    ) {
      clearInterval(countdownInterval);
      document.querySelector(".countdown-element-container").innerHTML =
        "<p>Countdown Finished!</p>";
    }
  }, 1000);
}

// Start the countdown for 100 days
startCountdown(3);

// Function to animate the counting of numbers
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");

  // Iterate over each stat number and apply the counting effect
  statNumbers.forEach((stat) => {
    const targetNumber = parseInt(stat.textContent, 10);
    let currentNumber = 0;
    const increment = Math.ceil(targetNumber / 100);

    // Use setInterval to count up to the target number
    const counter = setInterval(() => {
      currentNumber += increment;

      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(counter);
      }

      stat.textContent = currentNumber;
    }, 200);
  });
}

// Start the animation when the window loads
window.onload = function () {
  animateStats();
};

document.addEventListener("DOMContentLoaded", () => {
  const speakerCards = document.querySelectorAll(".speaker-card");

  const onScroll = () => {
    speakerCards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight - 100) {
        setTimeout(() => card.classList.add("show"), index * 100);
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});

// footer bouncing
document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".social-icons .icon");
  const footer = document.querySelector(".follow-section");

  const onScroll = () => {
    const footerTop = footer.getBoundingClientRect().top;
    if (footerTop < window.innerHeight - 50) {
      icons.forEach((icon, index) => {
        setTimeout(() => icon.classList.add("animate"), index * 200);
      });
      window.removeEventListener("scroll", onScroll);
    }
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetElement = document.querySelector(targetID);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Navbar Hamburger menu
// Smooth scrolling for internal links
// Get elements
const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerDropdown = document.getElementById("hamburger-dropdown");
const closeBtn = document.getElementById("close-btn");

// Open hamburger menu
hamburgerMenu.addEventListener("click", () => {
  hamburgerDropdown.classList.add("open");
});

// Close hamburger menu
closeBtn.addEventListener("click", () => {
  hamburgerDropdown.classList.remove("open");
});

// Get the hero-title-container element
const stickyNav = document.getElementById("sticky-nav-container");

// Get the offset position of the hero-title-container
const stickyNavOffset = stickyNav.offsetTop;

// Function to add/remove the sticky class when scrolling
function handleStickyNav() {
  if (window.pageYOffset > stickyNavOffset) {
    stickyNav.classList.add("sticky");
  } else {
    stickyNav.classList.remove("sticky");
  }
}

// Call handleStickyNav when the page is scrolled
window.onscroll = function () {
  handleStickyNav();
};

// Also, ensure that sticky navigation is applied on page load if already scrolled
handleStickyNav();
