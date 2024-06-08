'use client'

import Link from 'next/link'
import React from 'react'

export default function DesktopNav() {
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
					popovertarget='popoverMobileNav'>
					<img src='icon-menu.svg' alt='open menu' />
				</button>
			</nav>

			<nav
				className='nav-bar--mobile'
				popover='auto'
				id='popoverMobileNav'>
				<button
					className='close-button'
					popovertarget='popoverMobileNav'>
					<img src='icon-menu-close.svg' alt='close menu' />
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
		</>
	)
}
