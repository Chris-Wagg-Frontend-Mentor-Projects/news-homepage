import Link from 'next/link'

export default function ArticleCard(props) {
	const { articleImage, articleAlt, articleNumber, title, text } = props
	return (
		<article className='article-card'>
			<img
				src={`./${articleImage}.jpg`}
				alt={articleAlt}
				className='article-card__image'
			/>
			<div className='article-card__text-container'>
				<span className='article-card__number'>{articleNumber}</span>
				<h3>
					<Link href='/' className='article-card__title'>
						{title}
					</Link>
				</h3>
				<p className='article-card__text'>{text}</p>
			</div>
		</article>
	)
}
