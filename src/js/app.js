const links = document.querySelectorAll('.nav__link')

const evolution = document.querySelector('.evolution')
const duplex = document.querySelector('.duplex')
const orange = document.querySelector('.orange')

links.forEach( link => {
	link.addEventListener('click', event => {
		// console.log(link.textContent)
		if (link.textContent == 'Evolution'){
			duplex.classList.remove('grid__content--current')
			orange.classList.remove('grid__content--current')
			evolution.classList.add('grid__content--current')
		} else if (link.textContent == 'Duplex'){
			evolution.classList.remove('grid__content--current')
			orange.classList.remove('grid__content--current')
			duplex.classList.add('grid__content--current')
		} else {
			evolution.classList.remove('grid__content--current')
			duplex.classList.remove('grid__content--current')
			orange.classList.add('grid__content--current')
		}
	})
})