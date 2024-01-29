document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn');
    const landingPage = document.querySelector('.landing-page');
    const startSection = document.querySelector('.start-section');

    startBtn.addEventListener('click', function () {
        landingPage.style.display = 'none';
        startSection.style.display = 'block';
    });
});
