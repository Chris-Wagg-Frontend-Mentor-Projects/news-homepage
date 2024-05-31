'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function DesktopNav() {
	const [openButton, setOpenButton] = useState()
	const [closeButton, setCloseButton] = useState()

	// TODO: fix the booleans to make sure the navs can be open and closed more than once

	useEffect(() => {
		let openMenuBtn = document.getElementById('openMenuBtn')
		let mobileNav = document.getElementById('mobileNav')
		let closeMenuBtn = document.getElementById('closeMenuBtn')

		function openMobileNav() {
			console.log('open the menu')
			mobileNav.style.display = 'flex'
			openMenuBtn.style.display = 'none'
			closeMenuBtn.style.display = 'flex'
			setOpenButton(false)
		}

		if (openButton === true) {
			openMobileNav()
		}

		function closeMobileNav() {
			console.log('close button pressed')
			mobileNav.style.display = 'none'
			openMenuBtn.style.display = 'block'
			closeMenuBtn.style.display = 'none'
		}

		if (closeButton === true) {
			closeMobileNav()
		}
	}, [openButton, closeButton])
	return (
		<>
			<div>
				<nav className='nav-bar--desktop'>
					<Link href={'/'} className='nav-bar__button--desktop'>
						Home
					</Link>
					<Link href={'/'} className='nav-bar__button--desktop'>
						New
					</Link>
					<Link href={'/'} className='nav-bar__button--desktop'>
						Popular
					</Link>
					<Link href={'/'} className='nav-bar__button--desktop'>
						Trending
					</Link>
					<Link href={'/'} className='nav-bar__button--desktop'>
						Categories
					</Link>
					<button
						className='hamburger-btn'
						id='openMenuBtn'
						onClick={() => setOpenButton(true)}>
						<img src='hamburgerIcon.svg' alt='open menu' />
					</button>
				</nav>
			</div>
			<div>
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
			</div>
		</>
	)
}
