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
			document.body.style.overflow = 'hidden'
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
				<button
					aria-label='open menu'
					// aria-haspopup='dialog'
					className='hamburger-btn'
					onClick={checkMenuOpen}></button>
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
			</nav>

			<dialog className='nav-bar--mobile'>
				<button
					// aria-label='close menu'
					className='close-button'
					onClick={checkMenuClosed}>
					Close menu
				</button>
				<ul>
					<li>
						<Link href={'/'} className='nav-bar__mobile-button'>
							Home
						</Link>
					</li>
					<li>
						<Link href={'/'} className='nav-bar__mobile-button'>
							New
						</Link>
					</li>
					<li>
						<Link href={'/'} className='nav-bar__mobile-button'>
							Popular
						</Link>
					</li>
					<li>
						<Link href={'/'} className='nav-bar__mobile-button'>
							Trending
						</Link>
					</li>
					<li>
						<Link href={'/'} className='nav-bar__mobile-button'>
							Categories
						</Link>
					</li>
				</ul>
			</dialog>
		</>
	)
}
