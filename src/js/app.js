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
		evolution: {
			section :document.querySelector('.evolution'),
			get picture(){
				return this.section.querySelector('.content__photo--c1-r1')
			},
			get charsParagraph(){
				return this.section.querySelectorAll('.grid__paragraph .word > .char, .whitespace')
			},
			get charsIndex(){
				return this.section.querySelectorAll('.grid__index .word > .char, .whitespace')
			}
		},
		duplex: {
			section: document.querySelector('.duplex'),
			get picture(){
				return this.section.querySelector('.content__photo--c1-r1')
			},
			get charsParagraph(){
				return this.section.querySelectorAll('.grid__paragraph .word > .char, .whitespace')
			},
			get charsIndex(){
				return this.section.querySelectorAll('.grid__index .word > .char, .whitespace')
			}
		},
		orange: {
			section: document.querySelector('.orange'),
			get picture(){
				return this.section.querySelector('.content__photo--c1-r1')
			},
			get charsParagraph(){
				return this.section.querySelectorAll('.grid__paragraph .word > .char, .whitespace')
			},
			get charsIndex(){
				return this.section.querySelectorAll('.grid__index .word > .char, .whitespace')
			}
		}
	}
}


gsap.set(DOM.contents.evolution.picture, {
	x: '-100%',
	opacity: 0
})
gsap.set(DOM.contents.evolution.charsParagraph, {
	y: '-100%',
	opacity: 0
})
gsap.set(DOM.contents.evolution.charsIndex, {
	y: '-100%',
	opacity: 0
})
gsap.set(DOM.contents.duplex.picture, {
	x: '-100%',
	opacity: 0
})
gsap.set(DOM.contents.duplex.charsParagraph, {
	y: '-100%',
	opacity: 0
})
gsap.set(DOM.contents.duplex.charsIndex, {
	y: '-100%',
	opacity: 0
})
gsap.set(DOM.contents.orange.picture, {
	x: '-100%',
	opacity: 0
})
gsap.set(DOM.contents.orange.charsParagraph, {
	y: '-100%',
	opacity: 0
})
gsap.set(DOM.contents.orange.charsIndex, {
	y: '-100%',
	opacity: 0
})

const swapContent = (index) => {

	let tl = gsap.timeline({paused: true, reversed: true})
				.addLabel('start')
				.staggerTo(DOM.intro.chars, 0.5, {
					y: '100%',
					opacity: 0,
					ease: 'Power2.Out'
				}, 0.014, 'start')
				.to(DOM.contents[Object.keys(DOM.contents)[index]].picture, 0.5, {
					x: '0',
					opacity: 1,
					ease: 'Power2.Out'
				})
				.staggerTo(DOM.contents[Object.keys(DOM.contents)[index]].charsParagraph, 0.5, {
					y: '0',
					opacity: 1,
					ease: 'Power2.Out'
				}, 0.014)
				.staggerTo(DOM.contents[Object.keys(DOM.contents)[index]].charsIndex, 0.5, {
					y: '0',
					opacity: 1,
					ease: 'Power2.Out'
				}, 0.014)
				.reversed(false)

	tl.reversed() ? tl.play() : tl.reverse()			
}


DOM.frame.links.forEach( (link, index) => {
	link.addEventListener('mouseenter', () => {
		swapContent(index)
	})
	link.addEventListener('mouseleave', () => {
		swapContent(index)
	})
})







