const body = document.querySelector('body');
const page = document.querySelector('.page');
const burgerBtn = document.querySelector('.site-header__burger-btn');
const menu = document.querySelector('.site-header__nav');

burgerBtn && burgerBtn.addEventListener('click', () => {
	body.classList.toggle('no-scroll');
	page.classList.toggle('active');
	menu.classList.toggle('active');

	const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
	burgerBtn.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
});


const menuItemsWithChildren = document.querySelectorAll('.site-header__nav-item--has-children');

menuItemsWithChildren.forEach(item => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		e.stopPropagation();

		item.classList.toggle('active');

		const list = item.querySelector('ul');
		list.classList.toggle('active');
	});
});