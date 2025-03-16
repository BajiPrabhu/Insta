document.addEventListener("DOMContentLoaded", () => {
    // Like Button Functionality
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("liked");
            button.innerHTML = button.classList.contains("liked") ? "❤️ Liked" : "❤️ Like";
        });
    });

    // Comment Button Functionality
    document.querySelectorAll(".comment-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            let post = e.target.closest(".post");
            let commentSection = post.querySelector(".comment-section");
            commentSection.style.display = commentSection.style.display === "block" ? "none" : "block";
        });
    });

    // Follow Button Functionality
    document.querySelectorAll(".follow-btn").forEach(button => {
        button.addEventListener("click", () => {
            if (button.innerHTML === "Follow") {
                button.innerHTML = "Following ✅";
                button.style.background = "#0077b6";
            } else {
                button.innerHTML = "Follow";
                button.style.background = "#48cae4";
            }
        });
    });

    // Share Button (Popup)
    document.querySelectorAll(".share-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert("Share options coming soon!");
        });
    });

    // Login Form Handling
    document.getElementById("login-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Logged in successfully!");
        window.location.href = "index.html";
    });

    // Signup Form Handling
    document.getElementById("signup-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Account created! Redirecting to login...");
        window.location.href = "login.html";
    });

    // Edit Profile Button
    document.querySelector(".edit-profile-btn")?.addEventListener("click", () => {
        alert("Profile editing is under development! 🚀");
    });

    // Set Post Count Dynamically
    document.getElementById("post-count")?.innerText = document.querySelectorAll(".post-cover").length;

    // Image Preview for Creating a Post
    let imageUpload = document.getElementById("imageUpload");
    let previewImage = document.getElementById("previewImage");
    let imagePreviewContainer = document.querySelector(".image-preview");

    imageUpload?.addEventListener("change", function(event) {
        let file = event.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                imagePreviewContainer.classList.remove("hidden");
            };
            reader.readAsDataURL(file);
        }
    });

    // Post Submission Handling
    const postBtn = document.getElementById("post-btn");
    postBtn?.addEventListener("click", () => {
        const caption = document.getElementById("caption").value.trim();
        const image = document.getElementById("post-image").files[0];

        if (!image) {
            alert("Please upload an image to post.");
            return;
        }

        alert("Post created successfully!");
    });

    // Music Search Functionality
    const musicInput = document.getElementById("music-search");
    const musicResults = document.getElementById("music-results");

    musicInput?.addEventListener("input", () => {
        const query = musicInput.value.trim();
        if (query.length > 2) {
            // Simulate search results
            musicResults.innerHTML = `<p>🎵 ${query} - Sample Artist</p>`;
            musicResults.style.display = "block";
        } else {
            musicResults.style.display = "none";
        }
    });

    // Profile Page Tabs (Posts, Tagged, Saved)
    document.querySelectorAll(".profile-tab").forEach(tab => {
        tab.addEventListener("click", function() {
            document.querySelectorAll(".profile-tab").forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            let tabContent = this.getAttribute("data-tab");
            document.querySelectorAll(".profile-content").forEach(content => {
                content.style.display = content.getAttribute("id") === tabContent ? "block" : "none";
            });
        });
    });

    // Notification Dropdown
    document.getElementById("notification-icon")?.addEventListener("click", () => {
        let dropdown = document.getElementById("notification-dropdown");
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    // Settings Toggle in Profile
    document.getElementById("settings-btn")?.addEventListener("click", () => {
        let settingsPanel = document.getElementById("settings-panel");
        settingsPanel.style.display = settingsPanel.style.display === "block" ? "none" : "block";
    });

    // Collapsible Sidebar for Small Screens
    document.getElementById("menu-toggle")?.addEventListener("click", () => {
        let sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("collapsed");
    });

    // Save Post Functionality
    document.querySelectorAll(".save-post-btn").forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("saved");
            button.innerHTML = button.classList.contains("saved") ? "💾 Saved" : "💾 Save";
        });
    });

    // Dark Mode Toggle
    document.getElementById("dark-mode-toggle")?.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
