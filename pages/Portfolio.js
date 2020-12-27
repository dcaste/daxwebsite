import Head from 'next/head';
import DaxImage from '../components/daximage/DaxImage';
import Layout, { siteTitle } from '../components/layout';
import SplitContent from '../components/splitcontent/SplitContent';
import Grid from '../components/grid/Grid';
import Title from '../components/Title';
import styles from '../components/splitcontent/SplitContent.module.scss';

const Portfolio = () => {
	return (
		<Layout>
			<Head>
				<title>Portfolio - {siteTitle}</title>
			</Head>
			<h1 className='pageTitle'>Portfolio</h1>

			<SplitContent split='60-40'>
				<div className={styles.content}>
					<Title Tag='h3' titleBlack='Campbell’s Kitchen' />
					<p>
						<strong>
							Campbell's Kitchen is the biggest Campbell's website containing
							thousands of detailed recipes.
						</strong>
					</p>
					<p>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://www.campbells.com/kitchen/'
						>
							https://www.campbells.com/kitchen/
						</a>
					</p>
					<ul className={styles.list}>
						<li>
							As a member of{' '}
							<a
								href='https://rain.agency/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Rain Agency
							</a>{' '}
							WordPress Team.
						</li>
						<li>
							WordPress back-end development of plugins and parent theme to be
							used in other Campbell’s minisites.
						</li>
						<li>
							Integration of the API Recipe Reviews in the theme with AJAX.
						</li>
						<li>
							Integration of{' '}
							<a
								href='https://schema.org/'
								target='_blank'
								rel='noopener noreferrer'
							>
								https://schema.org/
							</a>{' '}
							structured data in the theme, especially in recipes.
						</li>
						<li>
							This website was built before the Gutenberg editor was introduced
							and the plugins gave blocks of content to the administrators by
							using custom fields.
						</li>
						<li className={styles.technologies}>
							Technologies: HTML5, LESS, CSS3, jQuery, PHP, AJAX.
						</li>
					</ul>
				</div>
				<div className={styles.picture}>
					<DaxImage
						src_lg='/assets/img/project-ck.png'
						src_md='/assets/img/project-ck-480.png'
						src_sm='/assets/img/project-ck.png-300'
						src='/assets/img/project-ck.png'
						alt="Kampbell's Kitchen Website"
						width={640}
						height={320}
					/>
				</div>
			</SplitContent>

			<SplitContent split='40-60' direction='rl'>
				<div className={styles.content}>
					<Title Tag='h3' titleBlack='Swanson' />
					<p>
						<strong>
							Swanson is the Campbell’s brand specialized in broths and stocks.
							The website contains hundreds of recipes filtered from the main
							Campbell's Kitchen database.
						</strong>
					</p>
					<p>
						<a
							href='https://www.campbells.com/swanson/ '
							target='_blank'
							rel='noopener noreferrer'
						>
							https://www.campbells.com/swanson/
						</a>
					</p>
					<ul className={styles.list}>
						<li>
							As a member of{' '}
							<a
								href='https://rain.agency/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Rain Agency
							</a>{' '}
							WordPress Team.
						</li>
						<li>
							Frontend and Backend development of plugins used as blocks of
							content and adjustments to the child custom theme based on the
							main Campbell’s Kitchen theme.
						</li>
						<li className={styles.technologies}>
							Technologies:HTML5, LESS, CSS3, jQuery, PHP, AJAX.
						</li>
					</ul>
				</div>
				<div className={styles.picture}>
					<DaxImage
						src_lg='/assets/img/project-swanson.png'
						src_md='/assets/img/project-swanson-480.png'
						src_sm='/assets/img/project-swanson-300.png'
						alt='Swanson website'
					/>
				</div>
			</SplitContent>

			<SplitContent split='60-40'>
				<div className={styles.content}>
					<Title Tag='h3' titleBlack='Kindhumans' />
					<p>
						<strong>
							Kindhumans is an e-commerce project based in California aimed to
							raise funds for helping social and enviromental causes worldwide.
						</strong>
					</p>
					<p>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://kindhumans.com/'
						>
							https://kindhumans.com/{' '}
						</a>
					</p>
					<ul className={styles.list}>
						<li>As freelance developer</li>
						<li>Developed the Blogs section with AJAX filter</li>
						<li>
							Developed the basic theme for the WooCommerce products and cart
							sections
						</li>
						<li className={styles.technologies}>
							Technologies: HTML5, SASS, CSS3, jQuery, PHP
						</li>
					</ul>
				</div>
				<div className={styles.picture}>
					<DaxImage
						src_lg='/assets/img/project-kh.png'
						src_md='/assets/img/project-kh-480.png'
						src_sm='/assets/img/project-kh-300.png'
						src='/assets/img/project-kh.png'
						alt='Kindhumans website'
						width={640}
						height={320}
					/>
				</div>
			</SplitContent>

			<SplitContent split='40-60' direction='rl'>
				<div className={styles.content}>
					<Title Tag='h3' titleBlack='Best Western Las Mercedes' />
					<p>
						<strong>
							Las Mercedes is part of the Best Western hotel chain and one of
							the main hotels in Nicaragua.
						</strong>
					</p>
					<p>
						<a
							href='https://lasmercedes.com.ni/'
							target='_blank'
							rel='noopener noreferrer'
						>
							https://lasmercedes.com.ni/
						</a>
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
							Technologies: HTML5, SASS, CSS3, jQuery, PHP
						</li>
					</ul>
				</div>
				<div className={styles.picture}>
					<DaxImage
						src_lg='/assets/img/project-bwl.png'
						src_md='/assets/img/project-bwl-480.png'
						src_sm='/assets/img/project-bwl-300.png'
						src='/assets/img/project-bwl.png'
						alt='Hotel Best Western Las Mercedes website'
						width={640}
						height={320}
					/>
				</div>
			</SplitContent>

			<SplitContent split='60-40'>
				<div className={styles.content}>
					<Title Tag='h3' titleBlack='Delisoy' />
					<p>
						<strong>Delisoy is the lead brand of soy milk in Nicaragua.</strong>
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
						<li>WooCommerce integration as a catalog of products</li>
						<li>UI design and photo retouching</li>
						<li className={styles.technologies}>
							Technologies: AJAX, HTML5, SASS, CSS3, jQuery, PHP
						</li>
					</ul>
					<p>
						<a
							href='https://soydelisoy.com/'
							target='_blank'
							rel='noopener noreferrer'
						>
							https://soydelisoy.com/
						</a>
					</p>
				</div>
				<div className={styles.picture}>
					<DaxImage
						src_lg='/assets/img/project-delisoy.png'
						src_md='/assets/img/project-delisoy-480.png'
						src_sm='/assets/img/project-delisoy-300.png'
						src='/assets/img/project-delisoy.png'
						alt='Delisoy website'
						width={640}
						height={320}
					/>
				</div>
			</SplitContent>

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
					<p>
						<a
							href='https://cashpak.com.ni/'
							target='_blank'
							rel='noopener noreferrer'
						>
							https://cashpak.com.ni/
						</a>
					</p>
				</div>
				<div className={styles.picture}>
					<DaxImage
						src_lg='/assets/img/project-cashpak.png'
						src_md='/assets/img/project-cashpak-480.png'
						src_sm='/assets/img/project-cashpak-300.png'
						src='/assets/img/project-cashpak.png'
						alt='CashPak Nicaragua website'
						width={640}
						height={320}
					/>
				</div>
			</SplitContent>

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
					<p>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='http://lacocina.com.ni/'
						>
							http://lacocina.com.ni/
						</a>
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
				</div>
				<div className={styles.picture}>
					<DaxImage
						src_lg='/assets/img/project-haydee.png'
						src_md='/assets/img/project-haydee-480.png'
						src_sm='/assets/img/project-haydee-300.png'
						src='/assets/img/project-haydee.png'
						alt='Restaurante Cocina Doña Haydeé website'
						width={640}
						height={320}
					/>
				</div>
			</SplitContent>

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
					<p>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='http://restaurantedoncandido.com/'
						>
							http://restaurantedoncandido.com/
						</a>
					</p>
					<ul className={styles.list}>
						<li>Custom WordPress theme, plugins and hosting services</li>
						<li>UI design and photo retouching</li>
						<li>In site SEO</li>
						<li className={styles.technologies}>
							Technologies: HTML5, SASS, CSS3, jQuery, PHP
						</li>
					</ul>
				</div>
				<div className={styles.picture}>
					<DaxImage
						src_lg='/assets/img/project-candido.png'
						src_md='/assets/img/project-candido-480.png'
						src_sm='/assets/img/project-candido-300.png'
						src='/assets/img/project-candido.png'
						alt='Restaurante Don Candido website'
						width={640}
						height={320}
					/>
				</div>
			</SplitContent>

			<Grid columns={3}>
				<h4 className='entireColumn textCentered'>
					Other websites in which I have contributed with similar tasks:
				</h4>
				<div>
					<h5>As a member of Rain Agency WordPress team</h5>
					<ul className={styles.list}>
						<li>
							<a
								href='https://www.campbells.com/v8/ '
								target='_blank'
								rel='noopener noreferrer'
							>
								https://www.campbells.com/v8/
							</a>
						</li>
						<li>
							<a
								href='https://www.campbells.com/well-yes/ '
								target='_blank'
								rel='noopener noreferrer'
							>
								https://www.campbells.com/well-yes/
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h5>As WordPress team leader in Tactic Center</h5>
					<ul className={styles.list}>
						<li>
							<a
								href='https://cruzlorena.com.ni/
						'
								target='_blank'
								rel='noopener noreferrer'
							>
								https://cruzlorena.com.ni/
							</a>
						</li>
						<li>
							<a
								href='https://sinsa.com.ni/
						'
								target='_blank'
								rel='noopener noreferrer'
							>
								https://sinsa.com.ni/
							</a>
						</li>
						<li>
							<a
								href='https://medco.com.ni/
						'
								target='_blank'
								rel='noopener noreferrer'
							>
								https://medco.com.ni/
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h5>As freelancer</h5>
					<ul className={styles.list}>
						<li>
							<a
								href='http://caminoreal.com.ni/'
								target='_blank'
								rel='noopener noreferrer'
							>
								http://caminoreal.com.ni/
							</a>
						</li>
						<li>
							<a
								href='https://tallerbonilla.com/
						'
								target='_blank'
								rel='noopener noreferrer'
							>
								https://tallerbonilla.com/
							</a>
						</li>
						<li>
							<a
								href='https://nicabus.com.ni/
						'
								target='_blank'
								rel='noopener noreferrer'
							>
								https://nicabus.com.ni/
							</a>
						</li>
						<li>
							<a
								href='http://hotelvalerieni.com/
						'
								target='_blank'
								rel='noopener noreferrer'
							>
								http://hotelvalerieni.com/
							</a>
						</li>
					</ul>
				</div>
			</Grid>
		</Layout>
	);
};

export default Portfolio;
