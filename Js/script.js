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
  onScroll(); // Run once in case elements are already in view
});

// Function to calculate the time left until the target date
function calculateTimeLeft(targetDate) {
  const now = new Date().getTime(); // Get the current time in milliseconds
  const timeDifference = targetDate - now; // Calculate the difference between now and the target date

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds }; // Return the time components as an object
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
  const targetDate = new Date().getTime() + daysFromNow * 24 * 60 * 60 * 1000; // Calculate the target date from now

  const countdownInterval = setInterval(function () {
    const timeLeft = calculateTimeLeft(targetDate); // Get the remaining time
    updateCountdownDisplay(timeLeft); // Update the DOM with the remaining time

    // If the countdown is complete, stop the interval and display "EXPIRED"
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
  }, 1000); // Update the countdown every second (1000ms)
}

// Start the countdown for 100 days
startCountdown(100);

// Function to animate the counting of numbers
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");

  // Iterate over each stat number and apply the counting effect
  statNumbers.forEach((stat) => {
    const targetNumber = parseInt(stat.textContent, 10); // Get the final number for each stat
    let currentNumber = 0; // Start from 0
    const increment = Math.ceil(targetNumber / 100); // Speed of the count up

    // Use setInterval to count up to the target number
    const counter = setInterval(() => {
      currentNumber += increment; // Increase the current number by the increment

      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber; // Ensure the number stops at the target
        clearInterval(counter); // Stop the counter
      }

      stat.textContent = currentNumber; // Update the text in the stat-number span
    }, 200); // The speed of the animation in milliseconds
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
        setTimeout(() => card.classList.add("show"), index * 100); // Staggered delay
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); // Run once in case elements are already in view
});

// footer bouncing
document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".social-icons .icon");
  const footer = document.querySelector(".follow-section");

  const onScroll = () => {
    const footerTop = footer.getBoundingClientRect().top;
    if (footerTop < window.innerHeight - 50) {
      icons.forEach((icon, index) => {
        setTimeout(() => icon.classList.add("animate"), index * 200); // Staggered delay
      });
      window.removeEventListener("scroll", onScroll); // Trigger animation only once
    }
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); // Run once in case footer is already in view
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
