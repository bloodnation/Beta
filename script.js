document.addEventListener("DOMContentLoaded", function () {
  const joinButton = document.querySelector(".submit-button");
  const form = document.querySelector("form");

  // Form Validation
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const skills = document.getElementById("skills").value.trim();

    if (!name || !email || !skills) {
      alert("Please fill in all fields to join Hydra.");
    } else {
      alert(`Thank you, ${name}, for joining Hydra!`);
      form.reset(); // Clear form fields
    }
  });

  // Button Hover Effect
  if (joinButton) {
    joinButton.addEventListener("mouseover", function () {
      joinButton.style.backgroundColor = "#800000"; // Darker red on hover
    });

    joinButton.addEventListener("mouseout", function () {
      joinButton.style.backgroundColor = "#A00000"; // Original color on mouse out
    });

    // Button Click Animation
    joinButton.addEventListener("click", function () {
      joinButton.style.transform = "scale(0.95)";
      setTimeout(() => {
        joinButton.style.transform = "scale(1)";
      }, 150);
    });
  }
});