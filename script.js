document.getElementById('theme-switch').addEventListener('change', function() {
    const themeLink = document.getElementById('theme-link');
    if (this.checked) {
        themeLink.href = 'light.css';
    } else {
        themeLink.href = 'dark.css';
    }
});

document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const query = this.value;
        const url = `https://yandex.ru/search/?text=${encodeURIComponent(query)}`;
        window.location.href = url;
    }
});