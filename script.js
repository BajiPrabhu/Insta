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
document.addEventListener("DOMContentLoaded", () => {
    // Like Button
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", () => {
            if (!button.classList.contains("liked")) {
                button.classList.add("liked");
                button.innerHTML = "❤️ Liked";
            } else {
                button.classList.remove("liked");
                button.innerHTML = "❤️ Like";
            }
        });
    });

    // Edit Profile Button Click
    document.querySelector(".edit-profile-btn").addEventListener("click", () => {
        alert("Profile editing is under development! 🚀");
    });

    // Set post count dynamically
    document.getElementById("post-count").innerText = document.querySelectorAll(".post-cover").length;
});
document.addEventListener("DOMContentLoaded", () => {
    // Like Button Functionality
    document.querySelector(".like-btn").addEventListener("click", function() {
        if (!this.classList.contains("liked")) {
            this.classList.add("liked");
            this.innerHTML = "❤️ Liked";
        } else {
            this.classList.remove("liked");
            this.innerHTML = "❤️ Like";
        }
    });

    // Comment Posting
    document.querySelector(".comment-btn").addEventListener("click", function() {
        let commentInput = document.getElementById("commentInput");
        let commentText = commentInput.value.trim();

        if (commentText !== "") {
            let newComment = document.createElement("p");
            newComment.innerHTML = `<strong>@You:</strong> ${commentText}`;
            document.querySelector(".comments-list").appendChild(newComment);
            commentInput.value = "";
        }
    });

    // Share Button Toggle
    let shareBtn = document.querySelector(".share-btn");
    let shareOptions = document.querySelector(".share-options");

    shareBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        shareOptions.classList.toggle("hidden");
    });

    // Close Share Options When Clicking Outside
    document.addEventListener("click", function(event) {
        if (!shareBtn.contains(event.target) && !shareOptions.contains(event.target)) {
            shareOptions.classList.add("hidden");
        }
    });

    // Sharing Functions
    window.shareTo = function(platform) {
        let postURL = window.location.href;
        if (platform === "whatsapp") {
            window.open(`https://wa.me/?text=${encodeURIComponent(postURL)}`, "_blank");
        }
    };

    window.copyLink = function() {
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert("Link copied to clipboard!");
        });
    };

    window.shareToDM = function() {
        alert("Feature coming soon! 🚀");
    };
});
