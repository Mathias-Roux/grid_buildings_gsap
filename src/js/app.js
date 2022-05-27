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


const links = document.querySelectorAll("nav__link")

links.forEach( link => {
	link.addEventListener('click', () => {
		links.forEach( x => x.classList.remove('nav__link--current'))
		link.classList.add('nav__link--current')
	})
})







