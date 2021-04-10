// Next and NPM Modules
import Head from 'next/head';
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { motion } from 'framer-motion';
import { Breakpoint, BreakpointProvider } from 'react-socks';

// Components
import NavMenu from '../navmenu/NavMenu';
import NavMobile from '../navmobile/NavMobile';
import BtnNav from '@/btnnav/BtnNav';
import GoToTop from '@/gototop/GoToTop';
import Spacer from '../spacer/Spacer';
import CopyRight from '../copyright/CopyRight';

// Styles
import styles from './layout.module.scss';

// FontAwesome custom Library.
import '../../libs/fontawesome';

// Constant website SEO data
export const siteTitle = 'Dax Castellón';

export default function Layout({ children }) {
	// Global States
	const [showButton, setShowButton] = useState(false); // To show or hide the Go To Top button.
	const [openNavMobile, setOpenNavMobile] = useState(false); // To show or hide the Mobile Navigation Menu.

	// Shows Go to Top button if current Y position is greater than 0.
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
				<meta
					name='description'
					content='Web Developer living in Switzerland specialized in creating custom websites and with SEO best practices, security standards and optimized for fast loading times'
				/>
			</Head>

			<BreakpointProvider>
				<div id='mainWrapper' className={styles.mainWrapper}>
					<div className={styles.navHeader}>
						<Breakpoint medium down>
							<BtnNav
								open={openNavMobile}
								toggle={() => {
									setOpenNavMobile(!openNavMobile);
								}}
							/>
						</Breakpoint>

						<NavMobile open={openNavMobile} />

						<Breakpoint large up>
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
							{children}
						</motion.article>
					</main>

					<footer className={styles.navFooter}>
						<Breakpoint large up>
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
