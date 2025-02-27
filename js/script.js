document.addEventListener("DOMContentLoaded", function () {

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

//copyright
function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("copyrightYear").textContent = currentYear;
}

updateCopyrightYear(); // Call the function to update the year
