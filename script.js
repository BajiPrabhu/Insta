document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript Loaded Successfully!");

    // ---------------- LIKE BUTTON ---------------- //
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

    // ---------------- FOLLOW BUTTON ---------------- //
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

    // ---------------- COMMENT SECTION TOGGLE ---------------- //
    document.querySelectorAll(".comment-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            let post = e.target.closest(".post");
            let commentSection = post.querySelector(".comment-section");
            commentSection.style.display = commentSection.style.display === "block" ? "none" : "block";
        });
    });

    // ---------------- FIXED SHARE BUTTON ---------------- //
    document.addEventListener("click", (event) => {
        const clickedElement = event.target;

        if (clickedElement.classList.contains("share-btn")) {
            let post = clickedElement.closest(".post");
            let shareOptions = post.querySelector(".share-options");

            // Hide all other share menus
            document.querySelectorAll(".share-options").forEach(menu => {
                if (menu !== shareOptions) {
                    menu.style.display = "none";
                }
            });

            // Toggle Share Menu
            shareOptions.style.display = (shareOptions.style.display === "flex") ? "none" : "flex";
            event.stopPropagation();
        } else if (!clickedElement.closest(".share-options")) {
            document.querySelectorAll(".share-options").forEach(menu => menu.style.display = "none");
        }
    });

    // Close Share Menu after clicking a share option
    document.querySelectorAll(".share-options button").forEach(option => {
        option.addEventListener("click", (e) => {
            let post = e.target.closest(".post");
            let shareOptions = post.querySelector(".share-options");
            shareOptions.style.display = "none";
        });
    });

    // ---------------- LOGIN FORM HANDLING ---------------- //
    document.getElementById("login-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Logged in successfully!");
        window.location.href = "index.html";
    });

    // ---------------- SIGNUP FORM HANDLING ---------------- //
    document.getElementById("signup-form")?.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Account created! Redirecting to login...");
        window.location.href = "login.html";
    });

    // ---------------- EDIT PROFILE BUTTON ---------------- //
    let editProfileBtn = document.querySelector(".edit-profile-btn");
    if (editProfileBtn) {
        editProfileBtn.addEventListener("click", () => {
            alert("Profile editing is under development! 🚀");
        });
    }

    // ---------------- DYNAMIC POST COUNT ---------------- //
    let postCount = document.getElementById("post-count");
    if (postCount) {
        postCount.innerText = document.querySelectorAll(".post-cover").length;
    }

    // ---------------- CREATE POST PAGE - IMAGE PREVIEW ---------------- //
    let imageUpload = document.getElementById("imageUpload");
    let previewImage = document.getElementById("previewImage");
    let imagePreviewContainer = document.querySelector(".image-preview");

    if (imageUpload) {
        imageUpload.addEventListener("change", function(event) {
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
    }

    // ---------------- CREATE POST PAGE - POST FUNCTION ---------------- //
    let postBtn = document.getElementById("post-btn");
    if (postBtn) {
        postBtn.addEventListener("click", () => {
            let caption = document.getElementById("caption").value.trim();
            let image = document.getElementById("post-image").files[0];

            if (!image) {
                alert("Please upload an image to post.");
                return;
            }

            alert("Post created successfully!");
        });
    }

    // ---------------- MUSIC SEARCH FUNCTION ---------------- //
    let musicInput = document.getElementById("music-search");
    let musicResults = document.getElementById("music-results");

    if (musicInput) {
        musicInput.addEventListener("input", () => {
            let query = musicInput.value.trim();
            if (query.length > 2) {
                musicResults.innerHTML = `<p>🎵 ${query} - Sample Artist</p>`;
                musicResults.style.display = "block";
            } else {
                musicResults.style.display = "none";
            }
        });
    }
});
