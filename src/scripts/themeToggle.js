// src/js/themeToggle.js

const lightIcon = `
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-brightness-down"
    ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
        d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path
        d="M12 5l0 .01"></path><path d="M17 7l0 .01"></path><path
        d="M19 12l0 .01"></path><path d="M17 17l0 .01"></path><path
        d="M12 19l0 .01"></path><path d="M7 17l0 .01"></path><path
        d="M5 12l0 .01"></path><path d="M7 7l0 .01"></path></svg>`;

const darkIcon = `
<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-moon"
    ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
        d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
    ></path></svg>`;

if (typeof window !== 'undefined') {
    window.toggleTheme = function toggleTheme() {
        const storedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        let theme = storedTheme || (systemPrefersDark ? 'dark' : 'light');

        theme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
        document.getElementById('theme-icon').innerHTML = theme === 'dark' ? lightIcon : darkIcon;
    };

    // Establece el tema al cargar la página
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.getElementById('theme-icon').innerHTML = theme === 'dark' ? lightIcon : darkIcon;
}
