import { gsap } from 'gsap'
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"

import './Cursor.js'
import './Canvas.js'

Splitting()

// all nav links [3]
const links = document.querySelectorAll('.nav__link')
// all building content [3]
const sections = document.querySelectorAll('.grid__content')
// 'BUILDINGS' on landing page
const intro = document.querySelector('h1 > span')


const swapContent = index => {
	gsap.timeline({})
		.addLabel('start')
		.to(intro, {
			opacity: 0,
			display: 'none',
			duration: 0.5,
			ease: 'Power2.Out'
		})
		.to(sections[index], {
			display: 'grid',
			ease: 'Power2.Out',
			duration: 0.5
		})
}

const initialContent = index => {
	gsap.timeline({})
		.addLabel('start')
		.to(sections[index], {
			display: 'none',
			ease: 'Power2.Out',
			duration: 0.5
		})
		.to(intro, {
			opacity: 1,
			display: 'block',
			duration: 0.5,
			ease: 'Power2.Out'
		})
}

links.forEach( (link, index) => {
	link.addEventListener('mouseenter', () => {
		swapContent(index)
	})
	link.addEventListener('mouseleave', () => {
		initialContent(index)
	})
})







