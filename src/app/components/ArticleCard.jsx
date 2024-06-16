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
				<h2 className='article-card__number'>{articleNumber}</h2>
				<h3 className='article-card__title'>{title}</h3>
				<p className='article-card__text'>{text}</p>
			</div>
		</article>
	)
}
