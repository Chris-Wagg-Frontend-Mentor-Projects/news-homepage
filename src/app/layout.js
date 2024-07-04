import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	weight: ['400', '700', '800'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata = {
	title: 'News homepage',
	description:
		'Get the most up to date news. Stories on the latest technology and business developments ',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
