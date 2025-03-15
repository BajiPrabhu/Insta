document.addEventListener("DOMContentLoaded", () => {
    // Like Button
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("liked");
            button.innerHTML = button.classList.contains("liked") ? "❤️ Liked" : "❤️ Like";
        });
    });

    // Follow Button
    document.querySelectorAll(".follow-btn").forEach(button => {
        button.addEventListener("click", () => {
            button.innerHTML = button.innerHTML === "Follow" ? "Following ✅" : "Follow";
        });
    });

    // Share Button
    document.querySelectorAll(".share-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            let shareOptions = button.nextElementSibling;

            // Toggle Share Menu
            let isVisible = shareOptions.style.display === "flex";
            document.querySelectorAll(".share-options").forEach(menu => menu.style.display = "none");
            shareOptions.style.display = isVisible ? "none" : "flex";

            // Prevent click event from closing immediately
            event.stopPropagation();
        });
    });

    // Close Share Menu when clicking anywhere outside
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".share-btn") && !event.target.closest(".share-options")) {
            document.querySelectorAll(".share-options").forEach(menu => menu.style.display = "none");
        }
    });

    // Close Share Menu after clicking a share option
    document.querySelectorAll(".share-options button").forEach(option => {
        option.addEventListener("click", () => {
            document.querySelectorAll(".share-options").forEach(menu => menu.style.display = "none");
        });
    });

    // Comment Section
    document.querySelectorAll(".submit-comment").forEach(button => {
        button.addEventListener("click", () => {
            let input = button.previousElementSibling;
            if (input.value.trim()) {
                let commentBox = button.nextElementSibling;
                let newComment = document.createElement("p");
                newComment.textContent = input.value;
                commentBox.appendChild(newComment);
                input.value = "";
            }
        });
    });
});
// Existing JavaScript remains here...

document.addEventListener("DOMContentLoaded", () => {
    // Handle Login Form Submission
    document.getElementById("login-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Logged in successfully!");
        window.location.href = "index.html"; // Redirect to home after login
    });

    // Handle Signup Form Submission
    document.getElementById("signup-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Account created! Redirecting to login...");
        window.location.href = "login.html"; // Redirect to login after signup
    });
});
