function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');

    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('bxs-moon');
        icon.classList.add('bxs-sun');
    } else {
        icon.classList.remove('bxs-sun');
        icon.classList.add('bxs-moon');
    }
}

