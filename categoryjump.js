document.addEventListener('DOMContentLoaded', function () {
    // Get all category buttons
    var categoryButtons = document.querySelectorAll('.categ-btn');

    // Add click event listener to each button
    categoryButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the target HTML file from the data-target attribute
            var targetFile = button.getAttribute('data-target');

            // Redirect to the target HTML file
            window.location.href = targetFile;
        });
    });
});