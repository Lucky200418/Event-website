// form functionality
const handleSubmit = function (e) {
  e.preventDefault();

  // Get form values
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;

  // Error message and success handling
  if (!firstname || !lastname || !phone || !address || !city) {
    alert("Error: All fields are required!");
  } else {
    // Show loader
    document.querySelector(".loader-overlay").classList.remove("hidden");

    // Simulate a delay of 5 seconds
    setTimeout(() => {
      // Hide loader
      document.querySelector(".loader-overlay").classList.add("hidden");

      // Display success message
      alert("Your info has been saved successfully!");

      // Clear form fields
      document.getElementById("firstname").value = "";
      document.getElementById("lastname").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("address").value = "";
      document.getElementById("city").value = "";
    }, 5000);
  }
};

// Attach event listener
document
  .querySelector(".next-btn")
  .addEventListener("click", handleSubmit.bind(this));
