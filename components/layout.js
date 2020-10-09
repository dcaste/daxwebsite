import Head from 'next/head';
import Link from 'next/link';
import NavMenu from './NavMenu';

// FontAwesome custom Library
import './../libs/fontawesome';

const name = 'Dax';
export const siteTitle = 'Dax Castellón';

export default function Layout({ children, home }) {
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn how to build a personal website using Next.js'
				/>
			</Head>
			<main id='mainWrapper'>
				<NavMenu element='header' />
				<section id='mainContent'>{children}</section>
				<NavMenu element='footer' />
			</main>
		</>
	);
}
