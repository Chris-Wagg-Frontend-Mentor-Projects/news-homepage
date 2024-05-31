'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function MobileNav() {
	const [closeButton, setCloseButton] = useState(false)

	useEffect(() => {
		let openMenuBtn = document.getElementById('openMenuBtn')
		let mobileNav = document.getElementById('mobileNav')
		let closeMenuBtn = document.getElementById('closeMenuBtn')

		function closeMobileNav() {
			console.log('close button pressed')
			mobileNav.style.display = 'none'
			openMenuBtn.style.display = 'block'
			closeMenuBtn.style.display = 'none'
		}

		if (closeButton === true) {
			closeMobileNav()
		}
	}, [closeButton])

	return (
		<nav className='nav-bar--mobile' id='mobileNav'>
			<button
				className='close-button'
				id='closeMenuBtn'
				onClick={() => setCloseButton(true)}>
				<img src='closeIcon.svg' alt='close menu' />
			</button>

			<Link href={'/'} className='nav-bar__button--mobile'>
				Home
			</Link>
			<Link href={'/'} className='nav-bar__button--mobile'>
				New
			</Link>
			<Link href={'/'} className='nav-bar__button--mobile'>
				Popular
			</Link>
			<Link href={'/'} className='nav-bar__button--mobile'>
				Trending
			</Link>
			<Link href={'/'} className='nav-bar__button--mobile'>
				Categories
			</Link>
		</nav>
	)
}
