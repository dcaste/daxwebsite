import Head from 'next/head';
import Image from 'next/image';
import LinkInternal from '../components/linkinternal/LinkInternal';
import VisitWebsite from '../components/visitwebsite/VisitWebsite';
import Layout, { siteTitle } from '../components/layout/layout';
import SplitContent from '../components/splitcontent/SplitContent';
import styles from '../components/splitcontent/SplitContent.module.scss';
import Spacer from '../components/spacer/Spacer';
import Card from '../components/card/Card';

const CruzLorena = () => {
	return (
		<Layout>
			<Head>
				<title>My Roles as a web developer in Cruz Lorena - {siteTitle}</title>
				<meta
					name='description'
					content='My roles as web developer in Cruz Lorena website'
				/>
			</Head>

			<h1 className='pageTitle'>Cruz Lorena</h1>

			<Image
				src='/assets/img/cruz-lorena-home.jpg'
				alt='Cruz Lorena Website'
				width={1400}
				height={744}
				className='bordered'
			/>

			<VisitWebsite
				URL='https://cruzlorena.com.ni'
				Tag='p'
				className='imageDesc'
			/>

			<Spacer height='double' />

			<Card>
				<SplitContent split='60-40'>
					<div className={styles.content}>
						<p className='lead'>
							Cruz Lorena is one of the biggest Department Stores in Nicaragua
							with a wide variety of consumer goods shipped all over the
							country.
						</p>
						<p className='lead'>
							The client wanted to redesign its website with a clean look,
							integrate an E-Commerce solution and a CRM system.
						</p>
					</div>
					<div className={styles.content}>
						<p>
							<strong>Position:</strong> Lead Web Developer in{' '}
							<a
								href='https://tactic-center.com/'
								target='_blank'
								rel='external'
							>
								Tactic Center
							</a>
						</p>
						<p>
							<strong>Technologies:</strong>
						</p>
						<ul className={styles.list}>
							<li>WordPress as CMS</li>
							<li>WooCommerce as E-Commerce</li>
							<li>HTML5, SASS, CSS3, PHP, API, JQuery</li>
						</ul>
						<small>
							* because of the disclosure clauses I cannot provide the exact
							methods and tools used to build this website
						</small>
					</div>
				</SplitContent>
			</Card>

			<Spacer height='double' />

			<h2 className='textCentered'>My roles in this project</h2>
			<Spacer />

			<SplitContent split='50-50' direction='rl'>
				<div className={styles.content}>
					<h3>
						Developing a custom theme for WordPress, both Frontend and Backend
					</h3>
					<p>
						There was a need to develop a custom theme because the style for
						this website is very minimalistic and there were specific design
						elements we could not find in another theme.
					</p>
					<p>
						Also we could not rely in third party themes because the client was
						constantly asking for changes and we needed the flexibility to
						modifiy the design as we pleased.
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/cruz-lorena-area1.jpg'
						alt='Cruz Lorena custom theme'
						width={1440}
						height={1320}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer />

			<SplitContent split='50-50' direction='rl'>
				<div className={styles.content}>
					<Image
						src='/assets/img/cruz-lorena-sidebar.jpg'
						alt='Cruz Lorena Sidebar'
						width={487}
						height={852}
						className='bordered'
					/>
				</div>
				<div className={styles.content}>
					<h4>Custom Sidebar Navigation Widget</h4>
					<p>
						One of the areas I had to built from scratch is the Sidebar
						navigation. I did not used the standard navigation widget because I
						needed to show only the WooCommerce product categories with the
						ability to display subcategories using an accordion element and
						showing the user the current category by displaying a red dot.
					</p>
					<h4>Custom Promotions Widget</h4>
					<p>
						The Promotions widget is a caroussel that shows products and takes
						the user to that specific product page. This same widget is also
						used in the main navigation menu at the top of the website.
					</p>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<SplitContent split='50-50' direction='rl'>
				<div className={styles.content}>
					<h3>Customizing the WooCommerce design</h3>
					<p>
						I changed the WooCommerce design and relocated some elements in
						areas that don't appear by default. I acomplished this by using
						WooCommerce hooks instead of hard coding elements in the WooCommerce
						template. The reason for this is because everytime WooCommerce is
						updated the templates are rewritten.
					</p>
					<p>
						In this example, there is an extra button that leads to a form page.
						This button does not exists in a WooCommerce template.
					</p>
					<p>
						The Reviews and Product Tab section is now under the Product Summary
						section. By default those sections appear under the product image.
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/cruz-lorena-woocommerce.jpg'
						alt='Cruz Lorena WooCommerce design'
						width={1400}
						height={1010}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<h3 className='width70 textCentered'>Design everything Responsive</h3>

			<Spacer />

			<Image
				src='/assets/img/cruz-lorena-responsive.png'
				alt='Cruz Lorena Responsive design'
				width={1400}
				height={701}
			/>

			<Spacer height='double' />

			<SplitContent split='50-50' direction='rl'>
				<div className={styles.content}>
					<h3>Integration of the Payment Gateway</h3>
					<p>
						Granted, the Payment Gateway integration is provided by the bank
						with a plugin. My work consisted in integrating their code in the
						theme and realize several shopping tests and verify the shopping
						process before launch the website into production.
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/cruz-lorena-gateway.jpg'
						alt='Cruz Lorena Payment Gateway Integration'
						width={1280}
						height={912}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<SplitContent split='50-50' direction='lr'>
				<div className={styles.content}>
					<h3>Several Backend and Frontend duties</h3>
					<p>
						This was a very active client and since WooCommerce is also going
						through several updates I was in charge among other duties:
					</p>
					<ul>
						<li>Bulk updating of product prices and photos</li>
						<li>Creating and updating discount coupons</li>
						<li>
							Testing the new WooCommerce template changes in a staging
							environment to later update them live
						</li>
						<li>
							Configuration of CPanel, the weekly backups and the SSL
							Certificate
						</li>
						<li>Regular testings of the Checkout process</li>
						<li>Updating the Payment Gateway and plugins</li>
					</ul>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/cruz-lorena-duties.jpg'
						alt='Several Backend and Frontend duties'
						width={847}
						height={901}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer />

			<LinkInternal
				Tag='p'
				Copy='View a list of other selected projects in my Portfolio'
				Path='/portfolio'
			/>
		</Layout>
	);
};

export default CruzLorena;
