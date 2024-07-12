import AsideCard from './components/AsideCard'
import ArticleCard from './components/ArticleCard'
import DesktopNav from './components/DesktopNav'
import Link from 'next/link'

export default function Home() {
	return (
		<>
			{/* TODO: fix the image alts */}
			<body>
				<header className='header'>
					{/* <div className='skip-link'>
						<Link href='#main-content'>Skip to main content</Link>
					</div> */}

					{/* TODO: fix the styling for the skip link */}
					<img src='./logo.svg' alt='' />
					<DesktopNav />
				</header>
				<main className='main-container'>
					<section id='main-content' className='main-article'>
						<h1 className='hidden-heading'>Welcome to web news!</h1>
						<h2 className='hidden-heading'>Main article</h2>
						<img
							src='./image-web-3-desktop.jpg'
							alt=''
							className='main-article__image'
						/>
						<div className='main-article-wrapper'>
							<h3 className='main-article__headline'>
								The Bright Future of Web 3.0?
							</h3>
							<div className='main-article__descrpition'>
								<p>
									We dive into the next evolution of the web
									that claims to put the power of the
									platforms back into the hands of the people.
									But is it really fulfilling its promise?
								</p>
								<Link href='/' className='read-more-button'>
									READ MORE
								</Link>
							</div>
						</div>
					</section>
					<aside className='aside-container'>
						<h2 className='aside__title' aria-label='New articles'>
							New
						</h2>
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
						<h2 className='hidden-heading'>More articles</h2>
						<ArticleCard
							articleImage='image-retro-pcs'
							articleAlt=''
							articleNumber='01'
							title='Reviving Retro PCs'
							text='What happens when old PCs are given modern upgrades?'
						/>
						<ArticleCard
							articleImage='image-top-laptops'
							articleAlt=''
							articleNumber='02'
							title='Top 10 Laptops of 2022'
							text='Our best picks for various needs and budgets.'
						/>
						<ArticleCard
							articleImage='image-gaming-growth'
							articleAlt=''
							articleNumber='03'
							title='The Growth of Gaming'
							text='How the pandemic has sparked fresh opportunities.'
						/>
					</section>
				</main>
			</body>
		</>
	)
}
