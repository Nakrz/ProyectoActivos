const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('ocultar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});