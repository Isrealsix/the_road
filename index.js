const cardButtons = document.querySelectorAll('.card__button');

// adding a click eventListener to all the buttons
// such that the change class is toggled
cardButtons.forEach(button => {
	button.onclick = ev =>
		ev.target.parentElement.parentElement.classList.toggle('change');
});
