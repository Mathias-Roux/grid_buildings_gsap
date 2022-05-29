import './Hover.js'
import './Utils.js'

let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
	const canvas = document.querySelector('.cursor--canvas')
	const shapeBounds = {
		width: 75,
		height: 75
	}
	paper.setup(canvas)
	const strokeColor = 'rgba(255, 0, 0, 0.5)'
	const strokeWidth = 1
	const segments = 8
	const radius = 15

	const noiseScale = 150
	const noiseRange = 4
	let isNoisy = false

	const polygon = new paper.Path.RegularPolygon(
		new paper.Point(0, 0),
		segments,
		radius
	)
	polygon.strokeColor = strokeColor
	polygon.strokeWidth = strokeWidth
	polygon.smooth()
	group = new paper.Group([polygon])
	group.applyMatrix = false

	const noiseObjects = polygon.segments.map(() => new SimplexNoise())
	let bigCoordinates = []

	paper.view.onFrame = event => {
		lastX = lerp(lastX, clientX, 0.2)
		lastY = lerp(lastY, clientY, 0.2)
		group.position = new paper.Point(lastX, lastY)
	}
}

initCanvas()


paper.view.onFrame = event => {
	if (!isStuck) {
		lastX = lerp(lastX, clientX, 0.2)
		lastY = lerp(lastY, clientY, 0.2)
		group.position = new paper.Point(lastX, lastY)
	} else if (isStuck) {
		lastX = lerp(lastX, stuckX, 0.2)
		lastY = lerp(lastY, stuckY, 0.2)
		group.position = new paper.Point(lastX, lastY)
	}

	if (isStuck && polygon.bounds.width < shapeBounds.width) {
		polygon.scale(100)
	} else if (!isStuck && polygon.bounds.width > 30) {
		if (isNoisy) {
			polygon.segments.forEach((segment, i) => {
				segment.point.set(bigCoordinates[i][0], bigCoordinates[i][1])
			})
			isNoisy = false
			bigCoordinates = []
		}

		const scaleDown = 0.92
		polygon.scale(scaleDown)
	}

	if (isStuck && polygon.bounds.width >= shapeBounds.width) {
		isNoisy = true
		if (bigCoordinates.length === 0) {
			polygon.segments.forEach((segment, i) => {
				bigCoordinates[i] = [segment.point.x, segment.point.y]
			})
		}

		polygon.segments.forEach((segment, i) => {
			const noiseX = noiseObjects[i].noise2D(event.count / noiseScale, 0)
			const noiseY = noiseObjects[i].noise2D(event.count / noiseScale, 1)

			const distortionX = map(noiseX, -1, 1, -noiseRange, noiseRange)
			const distortionY = map(noiseY, -1, 1, -noiseRange, noiseRange)

			const newX = bigCoordinates[i][0] + distortionX
			const newY = bigCoordinates[i][1] + distortionY

			segment.point.set(newX, newY)
		})
	}

	polygon.smooth()
}










