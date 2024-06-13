import Link from 'next/link'

export default function AsideCard(props) {
	const { title, text } = props
	return (
		<article className='aside-card'>
			<Link href='/' className='aside-card__title'>
				{title}
			</Link>
			<p className='aside-card__text'>{text}</p>
		</article>
	)
}
