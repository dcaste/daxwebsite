// Next and NPM Modules
import Head from 'next/head';
import { useState } from 'react';
import { Breakpoint, BreakpointProvider } from 'react-socks';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

// Components
import NavMenu from '../navmenu/NavMenu';
import NavMobile from '../navmobile/NavMobile';
import BtnNav from '../buttonsComponents/BtnNav';
import GoToTop from '../buttonsComponents/GoToTop';
import Spacer from '../spacer/Spacer';
import CopyRight from '../copyright/CopyRight';

//Styles
import styles from './layout.module.scss';

// FontAwesome custom Library
import '../../libs/fontawesome';

// Constant website SEO
const name = 'Dax';
export const siteTitle = 'Dax Castellón';

export default function Layout({ children, home }) {
	// State to show or hide the Go To Top button
	const [showButton, setShowButton] = useState(false);

	// State to show or hide the Mobile Navigation Menu
	const [showNavMobile, setShowNavMobile] = useState(false);

	// Shows Go to Top button if current Y position is greater than 0
	useScrollPosition(
		({ currPos }) => {
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

			<BreakpointProvider>
				<div id='mainWrapper' className={styles.mainWrapper}>
					<div className={styles.navHeader}>
						<Breakpoint small down>
							<BtnNav show={() => setShowNavMobile(true)} />
							<NavMobile
								show={showNavMobile}
								hide={() => setShowNavMobile(false)}
							/>
						</Breakpoint>
						<Breakpoint medium up>
							<NavMenu />
						</Breakpoint>
					</div>

					<main role='main' className={styles.mainContent}>
						<article className={styles.mainArticle}>
							<Spacer />
							{children}
							<Spacer />
						</article>
					</main>

					<footer className={styles.navFooter}>
						<Breakpoint medium up>
							<NavMenu />
						</Breakpoint>
						<CopyRight />
					</footer>

					{showButton && <GoToTop />}
				</div>
			</BreakpointProvider>
		</>
	);
}
