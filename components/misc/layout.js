import Head from 'next/head';
import NavMenu from './NavMenu';
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import GoToTop from '../buttonsComponents/GoToTop';
import CopyRight from '../copyright/CopyRight';

// FontAwesome custom Library
import '../../libs/fontawesome';

// Constant website SEO
const name = 'Dax';
export const siteTitle = 'Dax Castellón';

export default function Layout({ children, home }) {
	// State to show or hide the Go To Top button
	const [showButton, setShowButton] = useState(false);

	useScrollPosition(
		({ prevPos, currPos }) => {
			const isShow = currPos.y < 0;
			if (isShow !== showButton) setShowButton(isShow);
		},
		[showButton]
	);
	return (
		<>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='WordPress Developer living in Switzerland specialized in creating custom themes and plugins with SEO best practices, security standards and optimized for fast loading times'
				/>
			</Head>
			<div id='mainWrapper'>
				<NavMenu element='header' />
				<main id='mainContent' role='main'>
					<article id='mainArticle'>{children}</article>
				</main>
				<NavMenu element='footer' />
				<CopyRight />
				{showButton && <GoToTop />}
			</div>
		</>
	);
}
