import Canvas from './Canvas.js'
import { gsap } from 'gsap'
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"

Splitting()
new Canvas()

let DOM = {
	frame: {
		// all nav links [3]
		links: document.querySelectorAll('.nav__link')
	},
	intro: {
		// title 'BUILDINGS' on landing page
		title: document.querySelector('h1'),
		get chars(){
			return this.title.querySelectorAll('span .word > .char, .whitespace')
		}
	},
	contents: {
		// all building content [3]
		sections: document.querySelectorAll('.grid__content')
	}
}



const swapContent = index => {
	gsap.timeline({})
		.addLabel('start')
		.staggerTo(DOM.intro.chars, 0.5, {
			y: '100%',
			opacity: 0,
			ease: 'Power2.Out'
		}, 0.014, 'start')
		.to(DOM.contents.sections[index], {
			y: '0',
			opacity: 1,
			display: 'grid',
			ease: 'Power2.Out',
			duration: 0.5
		})
}

const initialContent = index => {
	gsap.timeline({})
		.addLabel('start')
		.to(DOM.contents.sections[index], {
			y: '-100%',
			opacity: 0,
			display: 'none',
			ease: 'Power2.Out',
			duration: 0.5
		})
		.staggerTo(DOM.intro.chars, 0.5, {
			y: '0',
			opacity: 1,
			ease: 'Power2.Out'
		}, 0.014)
}

DOM.frame.links.forEach( (link, index) => {
	link.addEventListener('mouseenter', () => {
		swapContent(index)
	})
	link.addEventListener('mouseleave', () => {
		initialContent(index)
	})
})







