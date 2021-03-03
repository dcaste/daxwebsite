import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import VisitWebsite from '../components/visitwebsite/VisitWebsite';
import LinkInternal from '../components/linkinternal/LinkInternal';
import Layout, { siteTitle } from '../components/layout/layout';
import SplitContent from '../components/splitcontent/SplitContent';
import Grid from '../components/grid/Grid';
import Spacer from '../components/spacer/Spacer';
import Title from '../components/misc/Title';
import styles from '../components/splitcontent/SplitContent.module.scss';

const Portfolio = () => {
	return (
		<Layout>
			<Head>
				<title>Portfolio - {siteTitle}</title>
				<meta
					name='description'
					content='Web portfolio with selected projects, mostly build with WordPress CMS'
				/>
			</Head>
			<h1 className='pageTitle'>Portfolio</h1>

			<SplitContent split='60-40'>
				<div className={styles.content}>
					<Title Tag='h3' titleBlack='Campbell’s Kitchen' />
					<p>
						Campbell's Kitchen is the biggest Campbell's website containing
						thousands of detailed recipes. As a member of{' '}
						<a
							href='https://rain.agency/'
							target='_blank'
							rel='external noopener noreferrer'
						>
							Rain Agency
						</a>{' '}
						WordPress Team I was in charge of backend development of plugins and
						themes.
					</p>
					<LinkInternal
						Tag='p'
						Copy='Know more about my roles in this project'
						Path='/campbells-kitchen'
					/>
					<VisitWebsite URL='https://www.campbells.com/kitchen/' Tag='p' />
				</div>

				<div className={styles.picture}>
					<Link href='/campbells-kitchen'>
						<a>
							<Image
								src='/assets/img/project-ck.png'
								alt="Kampbell's Kitchen Website"
								width={640}
								height={320}
							/>
						</a>
					</Link>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<SplitContent split='40-60' direction='rl'>
				<div className={styles.content}>
					<Title Tag='h3' titleBlack='Kindhumans' />
					<p>
						Kindhumans is an e-commerce project based in California aimed to
						raise funds for helping social and enviromental causes worldwide.
					</p>

					<ul className={styles.list}>
						<li>Worked as freelance developer</li>
						<li>Developed the Blogs section with AJAX filter</li>
						<li>
							Developed the basic theme for the WooCommerce products and cart
							sections
						</li>
						<li>Technologies used: HTML5, SASS, CSS3, jQuery, PHP</li>
					</ul>
					<VisitWebsite URL='https://kindhumans.com/' Tag='p' />
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/project-kh.png'
						alt='Kindhumans website'
						width={640}
						height={320}
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<SplitContent split='60-40'>
				<div className={styles.content}>
					<Title Tag='h3' titleBlack='Best Western Las Mercedes' />
					<p>
						Las Mercedes is part of the Best Western hotel chain and one of the
						main hotels in Nicaragua.
					</p>
					<p>
						As Lead Web Developer in{' '}
						<a
							href='https://tactic-center.com/'
							target='_blank'
							rel='external noopener noreferrer'
						>
							Tactic Center
						</a>{' '}
						I was in charge in designing the UI, photo retouching and coding
						both the frontend and backend for WordPress.
					</p>
					<LinkInternal
						Tag='p'
						Copy='Know more about my roles in this project'
						Path='/best-western'
					/>
					<VisitWebsite URL='https://lasmercedes.com.ni/' Tag='p' />
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/project-bwl.png'
						alt='Hotel Best Western Las Mercedes website'
						width={640}
						height={320}
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<SplitContent split='40-60' direction='rl'>
				<div className={styles.content}>
					<Title Tag='h3' titleBlack='CashPak Nicaragua' />
					<p>
						<strong>
							CashPak is a Nicaraguan nationwide WesternUnion subsidiary.
						</strong>
					</p>
					<ul className={styles.list}>
						<li>
							As Web Developer Team Leader in{' '}
							<a
								href='https://tactic-center.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Tactic Center
							</a>
						</li>
						<li>
							Front-end and Back-end development of custom theme and plugins
						</li>
						<li>UI design and photo retouching</li>
						<li className={styles.technologies}>
							Technologies: AJAX, HTML5, SASS, CSS3, jQuery, PHP
						</li>
					</ul>
					<VisitWebsite URL='https://cashpak.com.ni/' Tag='p' />
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/project-cashpak.png'
						alt='CashPak Nicaragua website'
						width={640}
						height={320}
					/>
				</div>
			</SplitContent>
			<Spacer height='double' />
			<SplitContent split='60-40'>
				<div className={styles.content}>
					<Title Tag='h3' titleBlack='Cocina Dña Haydeé' />
					<p>
						<strong>
							Cocina Dña Haydeé is the most recognized restaurant of local
							cuisine in Nicaragua and appears in the first search results
							positions for Nicaraguan cuisine restaurants.
						</strong>
					</p>
					<ul className={styles.list}>
						<li>Front-end and Back-end custom WordPress theme and plugins</li>
						<li>
							The WP theme allows the managers to change prices and dishes. The
							theme detects the day and reorder the dishes accordingly in the
							homepage
						</li>
						<li>In site SEO</li>
						<li>UI design and photo retouching</li>
						<li className={styles.technologies}>
							Technologies: HTML5, SASS, CSS3, jQuery, PHP
						</li>
					</ul>
					<VisitWebsite URL='https://lacocina.com.ni/' Tag='p' />
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/project-haydee.png'
						alt='Restaurante Cocina Doña Haydeé website'
						width={640}
						height={320}
					/>
				</div>
			</SplitContent>
			<Spacer height='double' />
			<SplitContent split='40-60' direction='rl'>
				<div className={styles.content}>
					<Title Tag='h3' titleBlack='Restaurante Don Candido' />
					<p>
						<strong>
							Don Cándido is one of the most exclusive restaurants in Nicaragua
							and one of the top three in the ranking of Managua restaurants in
							Google.
						</strong>
					</p>
					<ul className={styles.list}>
						<li>Custom WordPress theme, plugins and hosting services</li>
						<li>UI design and photo retouching</li>
						<li>In site SEO</li>
						<li className={styles.technologies}>
							Technologies: HTML5, SASS, CSS3, jQuery, PHP
						</li>
					</ul>
					<VisitWebsite URL='https://restaurantedoncandido.com/' Tag='p' />
				</div>

				<div className={styles.picture}>
					<Image
						src='/assets/img/project-candido.png'
						alt='Restaurante Don Candido website'
						width={640}
						height={320}
					/>
				</div>
			</SplitContent>
			<Spacer />
		</Layout>
	);
};

export default Portfolio;
