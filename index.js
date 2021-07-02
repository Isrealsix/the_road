const cardButtons = document.querySelectorAll('.card__button');
const container = document.querySelector('.container');

// adding a click eventListener to all the buttons
// such that the change class is toggled
cardButtons.forEach(button => {
	button.onclick = ev =>
		ev.target.parentElement.parentElement.classList.toggle('change');
});

// Colors
const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];
const navbarLink = document.querySelectorAll('.navbar__link');
// loop over the navbar link and add background color dynamically
navbarLink.forEach((link, idx) => (link.style.backgroundColor = colors[idx]));

const [open, close] = ['.navbar-icon--open', '.navbar-icon--close'];

const [openIcon, closeIcon] = document.querySelectorAll(
	'.navbar-icon--open, .navbar-icon--close'
);

const bringNavbar = icon => {
	container.addEventListener('click', function (ev) {
		const targetIcon = ev.target.closest(icon);
		const notAvailable = ![openIcon, closeIcon].includes(targetIcon);
		if (notAvailable) return;

		if (targetIcon === openIcon) container.classList.add('change');

		if (targetIcon === closeIcon) container.classList.remove('change');
		// if (target === close) console.log('close');
	});
};

bringNavbar(open);
bringNavbar(close);
