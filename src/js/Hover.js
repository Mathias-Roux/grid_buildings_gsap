const initHovers = () => {
	const handleMouseEnter = e => {
		const navItem = e.currentTarget
		const navItemBox = navItem.getBoundingClientRect()
		stuckX = Math.round(navItemBox.left + navItemBox.width / 2)
		stuckY = Math.round(navItemBox.top + navItemBox.height / 2)
		isStuck = true
	}

	const handleMouseLeave = () => {
		isStuck = false
	}

	const linkItems = document.querySelectorAll('.nav__link')
	linkItems.forEach(item => {
		item.addEventListener('mouseenter', handleMouseEnter)
		item.addEventListener('mouseleave', handleMouseLeave)
	})
}

initHovers()