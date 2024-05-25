export default function AsideCard(props) {
	const { title, text } = props
	return (
		<article className='aside-card'>
			<h3 className='aside-card__title'>{title}</h3>
			<p className='aside-card__text'>{text}</p>
		</article>
	)
}
