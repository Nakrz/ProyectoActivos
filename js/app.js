const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('ocultar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});


const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})