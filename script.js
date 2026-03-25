// Wait until page loads
document.addEventListener("DOMContentLoaded", () => {

    // Button 1: Change background color
    const colorBtn = document.getElementById("colorBtn");
    if (colorBtn) {
        colorBtn.addEventListener("click", () => {
            document.body.style.backgroundColor = getRandomColor();
        });
    }

    // Button 2: Show alert
    const alertBtn = document.getElementById("alertBtn");
    if (alertBtn) {
        alertBtn.addEventListener("click", () => {
            alert("Button clicked!");
        });
    }

});

// Helper function
function getRandomColor() {
    const colors = ["#f4f4f4", "#d1e7dd", "#f8d7da", "#cff4fc", "#fff3cd"];
    return colors[Math.floor(Math.random() * colors.length)];
}