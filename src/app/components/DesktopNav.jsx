import Link from 'next/link'

export default function DesktopNav() {
	return (
		<nav className='nav-bar--desktop'>
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
