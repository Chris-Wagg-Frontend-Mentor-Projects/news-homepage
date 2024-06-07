'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'

export default function DesktopNav() {
	const [isOpen, setIsOpen] = useState()
	const [isClosed, setIsClosed] = useState()

	useEffect(() => {
		let openMenuBtn = document.getElementById('openMenuBtn')
		let mobileNav = document.getElementById('mobileNav')
		let closeMenuBtn = document.getElementById('closeMenuBtn')

		function openMobileNav() {
			console.log('open button pressed')
			mobileNav.style.display = 'flex'
			openMenuBtn.style.display = 'none'
			closeMenuBtn.style.display = 'flex'
			setIsOpen(true)
			setIsClosed(false)
		}

		if (isOpen === true) {
			openMobileNav()
		}
	}, [isOpen])

	useEffect(() => {
		let openMenuBtn = document.getElementById('openMenuBtn')
		let mobileNav = document.getElementById('mobileNav')
		let closeMenuBtn = document.getElementById('closeMenuBtn')

		function closeMobileNav() {
			console.log('close button pressed')
			mobileNav.style.display = 'none'
			closeMenuBtn.style.display = 'none'
			setIsOpen(false)
			setIsClosed(true)
		}

		if (isClosed === true) {
			closeMobileNav()
		}
	}, [isClosed])
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
						onClick={() => setIsOpen(true)}>
						<img src='hamburgerIcon.svg' alt='open menu' />
					</button>
				</nav>
			</div>
			<div>
				<nav className='nav-bar--mobile' id='mobileNav'>
					<button
						className='close-button'
						id='closeMenuBtn'
						onClick={() => setIsClosed(true)}>
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
