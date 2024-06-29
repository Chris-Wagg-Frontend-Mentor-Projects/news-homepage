'use client'

import Link from 'next/link'
import { React, useState, useEffect } from 'react'

export default function DesktopNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		const mobileMenu = document.querySelector('dialog')
		const openBtn = document.getElementById('open-menu-btn')
		const closeBtn = document.getElementById('close-menu-btn')

		openBtn.addEventListener('click', () => {
			mobileMenu.showModal()
		})
		closeBtn.addEventListener('click', () => {
			mobileMenu.close()
		})

		if (isMenuOpen === true) {
			document.body.style.overflow = 'hidden'
		} else if (isMenuOpen === false) {
			document.body.style.overflow = 'scroll'
		}
	}, [isMenuOpen])

	function checkMenuOpen() {
		setIsMenuOpen(true)
	}
	function checkMenuClosed() {
		setIsMenuOpen(false)
	}

	return (
		<>
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
					id='open-menu-btn'
					onClick={checkMenuOpen}></button>
			</nav>

			<dialog className='nav-bar--mobile'>
				<button
					id='close-menu-btn'
					className='close-button'
					onClick={checkMenuClosed}></button>

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
			</dialog>
		</>
	)
}
