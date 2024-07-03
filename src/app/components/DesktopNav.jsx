'use client'

import Link from 'next/link'
import { React, useState, useEffect } from 'react'

export default function DesktopNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		const mobileMenu = document.querySelector('dialog')
		const openBtn = document.querySelector('.hamburger-btn')
		const closeBtn = document.querySelector('.close-button')

		openBtn.addEventListener('click', () => {
			mobileMenu.showModal()
		})
		closeBtn.addEventListener('click', () => {
			mobileMenu.close()
		})

		if (isMenuOpen === true) {
			document.body.style.overflow = 'hidden visible'
			// openBtn.focus()
		} else if (isMenuOpen === false) {
			document.body.style.overflow = 'scroll'
			// closeBtn.focus()
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
					onClick={checkMenuOpen}></button>
			</nav>

			<dialog className='nav-bar--mobile'>
				<button
					className='close-button'
					onClick={checkMenuClosed}></button>
				<Link href={'/'} className='nav-bar__mobile-button'>
					Home
				</Link>
				<Link href={'/'} className='nav-bar__mobile-button'>
					New
				</Link>
				<Link href={'/'} className='nav-bar__mobile-button'>
					Popular
				</Link>
				<Link href={'/'} className='nav-bar__mobile-button'>
					Trending
				</Link>
				<Link href={'/'} className='nav-bar__mobile-button'>
					Categories
				</Link>
			</dialog>
		</>
	)
}
