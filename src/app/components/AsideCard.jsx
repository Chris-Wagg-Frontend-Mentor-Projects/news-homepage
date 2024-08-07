import Link from 'next/link'

export default function AsideCard(props) {
	const { title, text } = props
	return (
		<article className='aside-card'>
			<h3>
				<Link href='/' className='aside-card__title'>
					{title}
				</Link>
			</h3>
			<p className='aside-card__text'>{text}</p>
		</article>
	)
}
