import { gsap } from 'gsap'
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"

Splitting()


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
			isVisible: true
		},
		duplex: {
			section: document.querySelector('.duplex'),
			get chars(){
				return this.section.querySelectorAll('.grid__paragraph .word > .char, .whitespace')
			},
			get picture(){
				return this.section.querySelector('.content__photo--c1-r1')
			},
			isVisible: false
		},
		orange: {
			section: document.querySelector('.orange'),
			get chars(){
				return this.section.querySelectorAll('.grid__paragraph .word > .char, .whitespace')
			},
			get picture(){
				return this.section.querySelector('.content__photo--c1-r1')
			},
			isVisible: false
		}
	},
	links: {
		nav: {
			anchors: document.querySelectorAll('.nav__link'),
			get stateElement() {
				return this.anchor.children;
			}
		}
	}
}


// const timelineSettings = {
// 	staggerValue: 0.014,
// 	charsDuration: 0.5
// }


// const timeline = gsap.timeline({paused: true})
// 	.addLabel('start')
// 	.staggerTo( DOM.content[].chars, timelineSettings.charsDuration, {
// 		ease: 'Power3.easeIn',
// 		y: '-100%',
// 		opacity: 0
	// }, timelineSettings.staggerValue, 'start') 
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

const links = DOM.links.nav.anchors

const switchContent = (index) => {
	// console.log(Object.keys(DOM.content)[index])
	const selected = Object.keys(DOM.content)[index]
	links[index].classList[DOM.content[selected].isVisible ? 'remove' : 'add']('nav__link--current')
	DOM.content[selected].isVisible = !DOM.content[selected].isVisible
}

// console.log(DOM.links.nav.anchor)
links.forEach( link => {
	link.addEventListener("click", () => {
		let index = Array.from(links).indexOf(link)
		switchContent(index)
	})
})







