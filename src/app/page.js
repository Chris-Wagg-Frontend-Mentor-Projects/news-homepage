import Link from 'next/link'
import AsideCard from './components/AsideCard'
import ArticleCard from './components/ArticleCard'

export default function Home() {
	return (
		<>
			<header className='header'>
				<div>
					<img src='./logo.svg' alt='world news' />
				</div>
				<nav className='nav-bar'>
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
			</header>
			<section className='body-container'>
				<main className='main-article'>
					<img
						src='./image-web-3-desktop.jpg'
						alt='article image'
						className='main-article__image'
					/>
					<h1 className='main-article__headline'>
						The Bright Future of Web 3.0?
					</h1>
					<div className='main-article__descrpition'>
						<p>
							We dive into the next evolution of the web that
							claims to put the power of the platforms back into
							the hands of the people. But is it really fulfilling
							its promise?
						</p>
						<button className='read-more-button'>READ MORE</button>
					</div>
				</main>
				<aside className='aside-container'>
					<h2 className='aside__title'>New</h2>
					<AsideCard
						title={`Hydrogen VS Electric Cars`}
						text={`'Will hydrogen-fueled cars ever catch up to EVs?'`}
					/>
					<AsideCard
						title={`The Downsides of AI Artistry`}
						text={`What are the possible adverse effects of on-demand AI image generation?`}
					/>
					<AsideCard
						title={` Is VC Funding Drying Up?`}
						text={`Private funding by VC firms is down 50% YOY. We take a look at what that means.`}
					/>
				</aside>
				<section className='articles-container'>
					<ArticleCard
						// TODO: do thhe article alts
						articleImage='image-retro-pcs'
						articleAlt='article image'
						articleNumber='01'
						title='Reviving Retro PCs'
						text='What happens when old PCs are given modern upgrades?'
					/>
					<ArticleCard
						articleImage='image-top-laptops'
						articleAlt='article image'
						articleNumber='02'
						title='Top 10 Laptops of 2022'
						text='Our best picks for various needs and budgets.'
					/>
					<ArticleCard
						articleImage='image-gaming-growth'
						articleAlt='article image'
						articleNumber='03'
						title='The Growth of Gaming'
						text='How the pandemic has sparked fresh opportunities.'
					/>
				</section>
			</section>
		</>
	)
}
