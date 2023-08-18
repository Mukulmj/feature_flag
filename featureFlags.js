// Function to load the appropriate page based on the feature flag
function loadPage() {
    const featureToggle = document.getElementById('featureToggle');
    if (featureToggle.checked) {
        window.location.href = 'pageA.html';
    } else {
        window.location.href = 'pageB.html';
    }
}

// Load the appropriate page when the script is executed
loadPage();
