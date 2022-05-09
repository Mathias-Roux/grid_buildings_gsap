import { gsap } from 'gsap'
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"

Splitting()

const links = document.querySelectorAll('.nav__link')
const contents = document.querySelectorAll('.grid__content')

console.clear()


let DOM = {
	content: {
		evolution: {
			section: document.querySelector('.evolution'),
			get chars(){
				return this.section.querySelectorAll('.grid__paragraph .word > .char, .whitespace')
			},
			get picture(){
				return this.section.querySelector('.content__photo--c1-r1')
			},
			isVisible:true
		},
		duplex: {
			section: document.querySelector('.duplex'),
			get chars(){
				return this.section.querySelectorAll('.grid__paragraph .word > .char, .whitespace')
			},
			get picture(){
				return this.section.querySelector('.content__photo--c1-r1')
			},
			isVisible:false
		},
		orange: {
			section: document.querySelector('.orange'),
			get chars(){
				return this.section.querySelectorAll('.grid__paragraph .word > .char, .whitespace')
			},
			get picture(){
				return this.section.querySelector('.content__photo--c1-r1')
			},
			isVisible:false
		}
	},
	links: {
		evolution: {
			anchor: document.querySelector('a.evolution__link'),
		},
		duplex: {
			anchor: document.querySelector('a.dulpex__link'),
		},
		orange: {
			anchor: document.querySelector('a.orange__link'),
		}
	}
}


// const timelineSettings = {
// 	staggerValue: 0.014,
// 	charsDuration: 0.5
// }


// const timeline = gsap.timeline({paused: true})
// 	.addLabel('start')
// 	.staggerTo( DOM.content.evolution.chars, timelineSettings.charsDuration, {
// 		ease: 'Power3.easeIn',
// 		y: '-100%',
// 		opacity: 0
// 	}, timelineSettings.staggerValue, 'start') 
// 	.staggerTo( DOM.content.duplex.chars, timelineSettings.charsDuration, {
// 		ease: 'Power3.easeIn',
// 		y: '-100%',
// 		opacity: 0
// 	}, timelineSettings.staggerValue, 'start') 
// 	.staggerTo( DOM.content.orange.chars, timelineSettings.charsDuration, {
// 		ease: 'Power3.easeIn',
// 		y: '-100%',
// 		opacity: 0
// 	}, timelineSettings.staggerValue, 'start')
// 	.addLabel('switchtime')
// 	.add( () => {
// 		DOM.content.evolution.section.classList.toggle('grid__content--current')
// 		DOM.content.evolution.section.classList.toggle('grid__content--current')
// 		DOM.content.evolution.section.classList.toggle('grid__content--current')
// 	})
// 	.set



links.forEach( link => {
	link.addEventListener('click', event => {
		
		//add remove current style
		links.forEach( link => {
			link.classList.remove('nav__link--current')
		})
		link.classList.add('nav__link--current')

		//return index of selected link
		var selected = Array.from(links).indexOf(link)


		gsap.to(contents, 0.5, {
			opacity: 0,
			delay: 0.5
		})
		gsap.to(contents[selected], 0.5, {
			opacity: 1,
			delay: 0.5
		})
		
	})
})