window.onload = function() {
    // Show the pop-up when the page loads
    document.getElementById("popup").style.display = "flex";

    // Button click event to go to next page
    document.getElementById("nextPageBtn").onclick = function() {
        window.location.href = "second.html"; // Link to the second page
    };
};

