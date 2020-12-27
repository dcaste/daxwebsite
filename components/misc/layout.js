import Head from 'next/head';
import NavMenu from './NavMenu';
import GoToTop from '../buttonsComponents/GoToTop';
import CopyRight from '../copyright/CopyRight';

// FontAwesome custom Library
import '../../libs/fontawesome';

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
			<div id='mainWrapper'>
				<NavMenu element='header' />
				<main id='mainContent' role='main'>
					<article id='mainArticle'>{children}</article>
				</main>
				<NavMenu element='footer' />
				<CopyRight />
				<GoToTop />
			</div>
		</>
	);
}
