document.addEventListener("DOMContentLoaded", function() {
    const modeSwitcher = document.getElementById('mode-switcher');

    if (modeSwitcher) {
        modeSwitcher.addEventListener('change', function() {
            const selectedMode = modeSwitcher.value;
            localStorage.setItem('selectedMode', selectedMode);
            applyMode(selectedMode);
        });

        // Apply the stored mode on load
        const storedMode = localStorage.getItem('selectedMode') || 'light';
        applyMode(storedMode);
        modeSwitcher.value = storedMode;
    }
});

function applyMode(mode) {
    if (mode === 'dark') {
        document.documentElement.setAttribute('data-md-color-scheme', 'slate');
    } else {
        document.documentElement.setAttribute('data-md-color-scheme', 'default');
    }
}
