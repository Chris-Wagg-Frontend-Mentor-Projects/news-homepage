import AsideCard from './components/AsideCard'
import ArticleCard from './components/ArticleCard'
import DesktopNav from './components/DesktopNav'

export default function Home() {
	return (
		<>
			<body>
				<header className='header'>
					<img src='./logo.svg' alt='' />
					<DesktopNav />
				</header>
				<section className='body-container' id='body-container'>
					<main className='main-article'>
						<img
							src='./image-web-3-desktop.jpg'
							alt=''
							className='main-article__image'
						/>
						<div className='main-article-wrapper'>
							<h1 className='main-article__headline'>
								The Bright Future of Web 3.0?
							</h1>
							<div className='main-article__descrpition'>
								<p>
									We dive into the next evolution of the web
									that claims to put the power of the
									platforms back into the hands of the people.
									But is it really fulfilling its promise?
								</p>
								<button className='read-more-button'>
									READ MORE
								</button>
							</div>
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
				</section>
			</body>
		</>
	)
}
