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

    // Follow Button
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
});
