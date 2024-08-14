document.addEventListener("DOMContentLoaded", function() {
    const languageSelect = document.getElementById('language-select');

    languageSelect.addEventListener('change', function() {
        window.location.href = this.value;
    });

    // Set the default selected value based on the current URL
    if (window.location.pathname.startsWith('/sv/')) {
        languageSelect.value = '/sv/';
    } else {
        languageSelect.value = '/en/';
    }
});
