let clientX = -100
let clientY = -100
const innerCursor = document.querySelector('.cursor--small')

const initCursor = () => {
	document.addEventListener('mousemove', e => {
		clientX = e.clientX
		clientY = e.clientY
	})

	const render = () => {
		innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`

		requestAnimationFrame(render)
	}
	requestAnimationFrame(render)
}

initCursor()