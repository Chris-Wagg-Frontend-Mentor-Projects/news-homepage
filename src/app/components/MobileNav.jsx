import Link from 'next/link'

export default function MobileNav() {
	return (
		<nav className='nav-bar--mobile'>
			<button className='menu-button' id='openMenuBtn'>
				<img src='hamburgerIcon.svg' alt='open menu' />
			</button>
			<Link href={'/'} className='nav-bar__button'>
				Home
			</Link>
			<Link href={'/'} className='nav-bar__button'>
				New
			</Link>
			<Link href={'/'} className='nav-bar__button'>
				Popular
			</Link>
			<Link href={'/'} className='nav-bar__button'>
				Trending
			</Link>
			<Link href={'/'} className='nav-bar__button'>
				Categories
			</Link>
		</nav>
	)
}
