// Next and NPM Modules
import Head from 'next/head';
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { motion } from 'framer-motion';
import { Breakpoint, BreakpointProvider } from 'react-socks';

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
	const [openNavMobile, setOpenNavMobile] = useState(false);

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
				<link
					rel='icon'
					type='image/vnd.microsoft.icon'
					href='/assets/img/favicon.ico'
					sizes='16x16'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/assets/img/favicon-16x16.png'
					sizes='16x16'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/assets/img/favicon-32x32.png'
					sizes='32x32'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/assets/img/android-chrome-192x192.png'
					sizes='192x192'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/assets/img/android-chrome-512x512.png'
					sizes='512x512'
				/>
				<link rel='apple-touch-icon' href='/assets/img/apple-touch-icon.png' />
				<meta
					name='description'
					content='Web Developer living in Switzerland specialized in creating custom websites and with SEO best practices, security standards and optimized for fast loading times'
				/>
			</Head>

			<BreakpointProvider>
				<div id='mainWrapper' className={styles.mainWrapper}>
					<div className={styles.navHeader}>
						<Breakpoint small down>
							<BtnNav
								open={openNavMobile}
								toggle={() => {
									setOpenNavMobile(!openNavMobile);
								}}
							/>
						</Breakpoint>

						<NavMobile open={openNavMobile} />

						<Breakpoint medium up>
							<NavMenu />
						</Breakpoint>
					</div>

					<main role='main' className={styles.mainContent}>
						<motion.article
							className={styles.mainArticle}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.25 }}
							exit={{ opacity: 0 }}
						>
							<Spacer />
							{children}
							<Spacer />
						</motion.article>
					</main>

					<footer className={styles.navFooter}>
						<Breakpoint medium up>
							<NavMenu />
						</Breakpoint>
						<CopyRight />
					</footer>

					<GoToTop show={showButton} />
				</div>
			</BreakpointProvider>
		</>
	);
}
