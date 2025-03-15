document.addEventListener("DOMContentLoaded", () => {

    // Like Button Toggle
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("liked");
            button.innerHTML = button.classList.contains("liked") ? "❤️ Liked" : "❤️ Like";
        });
    });

    // Follow Button Toggle
    document.querySelectorAll(".follow-btn").forEach(button => {
        button.addEventListener("click", () => {
            button.innerHTML = button.innerHTML === "Follow" ? "Following ✅" : "Follow";
            button.style.background = button.innerHTML === "Following ✅" ? "#0077b6" : "#48cae4";
        });
    });

    // Comment Button Toggle
    document.querySelectorAll(".comment-btn").forEach((button, index) => {
        button.addEventListener("click", () => {
            const commentBox = document.querySelectorAll(".comment-box")[index];
            commentBox.style.display = (commentBox.style.display === "flex") ? "none" : "flex";
        });
    });

    // Share Button Toggle
    document.querySelectorAll(".share-btn").forEach((button, index) => {
        button.addEventListener("click", () => {
            const shareOptions = document.querySelectorAll(".share-options")[index];
            shareOptions.style.display = (shareOptions.style.display === "flex") ? "none" : "flex";
        });
    });

    // Copy Link Function
    document.querySelectorAll(".copy-link").forEach(button => {
        button.addEventListener("click", () => {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied to clipboard! 📋");
        });
    });

    // Direct Message (DM) Feature
    document.querySelectorAll(".dm-share").forEach(button => {
        button.addEventListener("click", () => {
            alert("Feature coming soon! 🚀");
        });
    });
});
