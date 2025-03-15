document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (this.textContent.includes("❤️")) {
                this.textContent = "🤍 Like";
            } else {
                this.textContent = "❤️ Like";
            }
        });
    });
});
