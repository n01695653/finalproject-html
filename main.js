// Smooth scrolling effect for all anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Add hover effect to boxes
const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = "transform 0.3s";
    });
    box.addEventListener("mouseout", () => {
        box.style.transform = "scale(1)";
    });
});





// Fade-in effect for boxes on scroll
const fadeInOnScroll = () => {
    const elements = document.querySelectorAll(".box");
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.style.opacity = 1;
            element.style.transform = "translateY(0)";
            element.style.transition = "opacity 0.6s, transform 0.6s";
        }
    });
};

// Set initial opacity and transform for fade-in effect
document.querySelectorAll(".box").forEach(box => {
    box.style.opacity = 0;
    box.style.transform = "translateY(20px)";
});

// Trigger fade-in effect on scroll
window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();  // Initial call in case elements are in view on load

document.addEventListener("DOMContentLoaded", () => {
    // Select all project containers
    document.querySelectorAll(".PROJECTS").forEach((container, index) => {
        // Find the project description element within the container
        const projectDescription = container.querySelector(".project-dis");

        // Create a button for toggling the description
        const toggleButton = document.createElement("button");
        toggleButton.textContent = `click here for Details of  Project ${index + 1}`;
        toggleButton.style.display = "block";
        toggleButton.style.marginTop = "10px";
        toggleButton.style.backgroundColor = "#007BFF";
        toggleButton.style.color = "#FFF";
        toggleButton.style.padding = "5px 10px";
        toggleButton.style.border = "none";
        toggleButton.style.borderRadius = "4px";
        toggleButton.style.cursor = "pointer";

        // Append the button to the container
        container.appendChild(toggleButton);

        // Initially hide the project description
        if (projectDescription) {
            projectDescription.style.display = "none";
        }

        // Add click event listener to the button
        toggleButton.addEventListener("click", () => {
            if (projectDescription.style.display === "none" || projectDescription.style.display === "") {
                projectDescription.style.display = "block";
            } else {
                projectDescription.style.display = "none";
            }
        });
    });
});
// JavaScript for form validation and submission

document.querySelector('.contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page by default

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation checks
    if (!name) {
        alert('Please enter your name.');
        return;
    }

    if (!email || !isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!message) {
        alert('Please enter your message.');
        return;
    }

    // If all validations pass
    alert('Thank you for your message, ' + name + '! We will get back to you soon.');

    // Clear the form after successful submission
    document.querySelector('.contact-form').reset();
});

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    return emailPattern.test(email);
}

