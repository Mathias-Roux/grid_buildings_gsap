import { gsap } from 'gsap'


const contents = document.querySelectorAll('.grid__content')
const links = document.querySelectorAll('.nav__link')


console.clear()
console.log(contents[1])
console.log(links[1])

const animations = (index) => {
	gsap.to(contents, 0.5, {
		opacity: 0,
		delay: 0.5
	})
	gsap.to(contents[index], 0.5, {
		opacity: 1,
		delay: 0.5
	})
}

const handleClick = (link) => {
	link.addEventListener('click', event => {
		var selected = Array.from(links).indexOf(link)
		// console.log(selected)
		animations(selected)
	})
}

links.forEach( link => handleClick(link))











// import "splitting/dist/splitting.css"
// import "splitting/dist/splitting-cells.css"
// import Splitting from "splitting"

// Splitting()



// let DOM = {
// 	content: {
// 		evolution: {
// 			section: document.querySelector('.evolution'),
// 			get chars(){
// 				return this.section.querySelectorAll('.grid__paragraph .word > .char, .whitespace')
// 			},
// 			get picture(){
// 				return this.section.querySelector('.content__photo--c1-r1')
// 			},
// 			isVisible:true
// 		},
// 		duplex: {
// 			section: document.querySelector('.duplex'),
// 			get chars(){
// 				return this.section.querySelectorAll('.grid__paragraph .word > .char, .whitespace')
// 			},
// 			get picture(){
// 				return this.section.querySelector('.content__photo--c1-r1')
// 			},
// 			isVisible:false
// 		},
// 		orange: {
// 			section: document.querySelector('.orange'),
// 			get chars(){
// 				return this.section.querySelectorAll('.grid__paragraph .word > .char, .whitespace')
// 			},
// 			get picture(){
// 				return this.section.querySelector('.content__photo--c1-r1')
// 			},
// 			isVisible:false
// 		}
// 	},
// 	links: {
// 		evolution: {
// 			anchor: document.querySelector('a.evolution__link'),
// 		},
// 		duplex: {
// 			anchor: document.querySelector('a.dulpex__link'),
// 		},
// 		orange: {
// 			anchor: document.querySelector('a.orange__link'),
// 		}
// 	}
// }


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


// const links = document.querySelectorAll('.nav__link')

// links.forEach( link => {
// 	link.addEventListener('click', event => {
// 		// console.log(link.textContent)
// 		if (link.textContent == 'Evolution'){
// 			duplex.classList.remove('grid__content--current')
// 			orange.classList.remove('grid__content--current')
// 			evolution.classList.add('grid__content--current')
// 		} else if (link.textContent == 'Duplex'){
// 			evolution.classList.remove('grid__content--current')
// 			orange.classList.remove('grid__content--current')
// 			duplex.classList.add('grid__content--current')
// 		} else {
// 			evolution.classList.remove('grid__content--current')
// 			duplex.classList.remove('grid__content--current')
// 			orange.classList.add('grid__content--current')
// 		}
// 	})
// })