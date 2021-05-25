// Next and NPM Modules
import { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { motion } from 'framer-motion';
import { Breakpoint, BreakpointProvider } from 'react-socks';

// Components
import NavMenu from '@/comp/navmenu/NavMenu';
import NavMobile from '@/comp/navmobile/NavMobile';
import BtnNav from '@/comp/btnnav/BtnNav';
import GoToTop from '@/comp/gototop/GoToTop';
import CopyRight from '@/comp/copyright/CopyRight';

// Styles
import styles from './layout.module.scss';

export default function Layout({ children, navigation, SocialMedia }) {
	// Global States //
	// To show or hide the Go To Top button.
	const [showButton, setShowButton] = useState(false);
	// To show or hide the Mobile Navigation Menu.
	const [openNavMobile, setOpenNavMobile] = useState(false);

	// Shows "Go to Top" button if current Y position is greater than 0.
	useScrollPosition(
		({ currPos }) => {
			const isShow = currPos.y < 0;
			if (isShow !== showButton) setShowButton(isShow);
		},
		[showButton]
	);

	return (
		<>
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

						<NavMobile
							open={openNavMobile}
							navigation={navigation}
							SocialMedia={SocialMedia}
						/>

						<Breakpoint large up>
							<NavMenu navigation={navigation} SocialMedia={SocialMedia} />
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
							<NavMenu navigation={navigation} SocialMedia={SocialMedia} />
						</Breakpoint>
						<CopyRight />
					</footer>

					<GoToTop show={showButton} />
				</div>
			</BreakpointProvider>
		</>
	);
}
