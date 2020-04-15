const header__navbar = document.querySelector('.header__navbar')
const burger_menu = document.querySelector('#burger-menu')
const portfolio__link = document.querySelector('.portfolio__link')
const events__link = document.querySelector('.events__link')
const contact__link = document.querySelector('.contact__link')
const smartphone = window.matchMedia('screen and (max-width: 479px)')

smartphone.addListener(validation)



function validation(event){
	if(event.matches){
		console.log("todo bien bro")
		burger_menu.addEventListener('click', showHide)
		portfolio__link.addEventListener('click', showHide)
		events__link.addEventListener('click', showHide)
		contact__link.addEventListener('click', showHide)
	}
	else{
		burger_menu.removeEventListener('click', showHide)
		portfolio__link.removeEventListener('click', showHide)
		events__link.removeEventListener('click', showHide)
		contact__link.removeEventListener('click', showHide)
	}
}

function showHide () {

	if (header__navbar.classList.contains('is-active')) {
		header__navbar.classList.remove('is-active')
	}
	else
	{
		header__navbar.classList.add('is-active')
	}
}
