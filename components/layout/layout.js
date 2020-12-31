import Head from 'next/head';
import NavMenu from '../navmenu/NavMenu';
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import GoToTop from '../buttonsComponents/GoToTop';
import Spacer from '../spacer/Spacer';
import CopyRight from '../copyright/CopyRight';
import styles from './layout.module.scss';

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
					content='Web Developer living in Switzerland specialized in creating custom websites and with SEO best practices, security standards and optimized for fast loading times'
				/>
			</Head>
			<div id='mainWrapper' className={styles.mainWrapper}>
				<header className={styles.navHeader}>
					<NavMenu />
				</header>
				<main role='main' className={styles.mainContent}>
					<article className={styles.mainArticle}>
						<Spacer />
						{children}
						<Spacer />
					</article>
				</main>
				<footer className={styles.navFooter}>
					<NavMenu />
					<CopyRight />
				</footer>
				{showButton && <GoToTop />}
			</div>
		</>
	);
}
