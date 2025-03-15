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
        button.addEventListener("click", () => {
            let shareOptions = button.nextElementSibling;
            shareOptions.style.display = shareOptions.style.display === "flex" ? "none" : "flex";
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
