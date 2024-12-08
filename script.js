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

(function () {
    let devtools = false;

    const checkDevTools = function () {
        const threshold = 160;
        const widthDiff = window.outerWidth - window.innerWidth > threshold;
        const heightDiff = window.outerHeight - window.innerHeight > threshold;

        if (widthDiff || heightDiff) {
            devtools = true;
            onDevToolsOpen();
        } else {
            devtools = false;
        }
    };

    const onDevToolsOpen = function () {
        // Action when developer tools are detected
        alert('Developer tools detected! The website will self-destruct.');
        document.body.innerHTML = ""; // Clear content
        // or redirect
        window.location.href = "https://google.com";
    };

    window.addEventListener('resize', checkDevTools);
    checkDevTools();
})();