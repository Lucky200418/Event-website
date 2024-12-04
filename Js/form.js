const scriptURL =
  "https://script.google.com/macros/s/AKfycbzngSGpqqg5oo9YMNXaGIXsPh6OsmUu98C4YqCAL__JZ_N6SH_sHzZojDKS4sfbYR9zeQ/exec";

const emailAPIURL = "https://event-website-yfki.onrender.com/send-email";

const form = document.forms["contact-form"];

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const loaderOverlay = document.querySelector(".loader-overlay");
  loaderOverlay.classList.remove("hidden");

  try {
    const formData = new FormData(form);

    // Prepare email payload
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");

    if (!isValidEmail(email)) {
      throw new Error("Invalid Email");
    }

    // Send data to Google Sheets
    const sheetResponse = await fetch(scriptURL, {
      method: "POST",
      body: formData,
    });

    if (!sheetResponse.ok) {
      throw new Error("Failed to save to Google Sheets");
    }

    // Send email
    const emailResponse = await fetch(emailAPIURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, firstname, lastname }),
    });

    if (!emailResponse.ok) {
      throw new Error("Failed to send email");
    }

    loaderOverlay.classList.add("hidden");
    showPopup("success", "Registration successful! Check your email.");
    form.reset();
  } catch (error) {
    loaderOverlay.classList.add("hidden");
    console.error("Error!", error.message);
    showPopup("error", error.message || "Submission failed. Please try again.");
  }
});

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Popup display function
function showPopup(type, msg = "") {
  const popup = document.getElementById(`${type}-popup`);
  popup.classList.add("show");

  if (msg) {
    popup.textContent = msg;
  }

  setTimeout(() => {
    popup.classList.remove("show");
  }, 5000);
}
