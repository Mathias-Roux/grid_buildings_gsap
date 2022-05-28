import { gsap } from 'gsap'
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"

Splitting()

const links = document.querySelectorAll('.nav__link')
const sections = document.querySelectorAll('.grid__content')

const changeContent = index => {
	gsap.timeline({paused: true})
		.addLabel('start')
		.set(sections, {
			opacity: 0,
			ease: 'Power2.Out',
			duration: 0.5
		})
		.to(sections[index], {
			opacity: 1,
			ease: 'Power2.Out',
			duration: 1
		})
}

links.forEach( (link, index) => {
	link.addEventListener('click', () => {
		// remove current class for all nav__link
		links.forEach( x => x.classList.remove('nav__link--current'))
		// add current class for the clicked nav__link
		link.classList.add('nav__link--current')
		changeContent(index)
	})
})







