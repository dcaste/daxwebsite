import Head from 'next/head';
import Image from 'next/image';
import LinkInternal from '../components/linkinternal/LinkInternal';
import VisitWebsite from '../components/visitwebsite/VisitWebsite';
import Layout, { siteTitle } from '../components/layout/layout';
import SplitContent from '../components/splitcontent/SplitContent';
import styles from '../components/splitcontent/SplitContent.module.scss';
import Spacer from '../components/spacer/Spacer';
import Card from '../components/card/Card';

const CampbellsKitchen = () => {
	return (
		<Layout>
			<Head>
				<title>
					My Roles as a web developer in Best Western Las Mercedes - {siteTitle}
				</title>
				<meta
					name='description'
					content='My roles as web developer in Best Western Las Mercedes website'
				/>
			</Head>

			<h1 className='pageTitle'>Best Western Las Mercedes</h1>

			<Image
				src='/assets/img/best-western.jpg'
				alt='Best Western Las Mercedes Website'
				width={1400}
				height={875}
				className='bordered'
			/>

			<VisitWebsite
				URL='https://lasmercedes.com.ni'
				Tag='p'
				className='imageDesc'
			/>

			<Spacer height='double' />

			<Card>
				<SplitContent split='60-40'>
					<div className={styles.content}>
						<p className='lead'>
							Best Western Las Mercedes is one of the biggest and exclusive
							hotels in Nicaragua.
						</p>
						<p className='lead'>
							The client wanted to redesign its website with a modern and clean
							look, to be responsive and easy to navigate. There was also the
							need to integrate a CRM and a already built reservations system.
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
							<li>HTML5, SASS, CSS3, PHP</li>
							<li>JQuery</li>
						</ul>
						<small>
							* because of the disclosure clauses I cannot provide the exact
							methods and tools used to build the website
						</small>
					</div>
				</SplitContent>
			</Card>

			<Spacer height='double' />

			<h2 className='textCentered'>My roles in this project</h2>
			<Spacer />

			<SplitContent split='50-50' direction='rl'>
				<div className={styles.content}>
					<h3>Designing the User Interface</h3>
					<p>
						I was in charge of designing the User Interface for the website. The
						hotel management wanted a modern and clean look so we proposed a
						clean design, with basic blocks of content, with as little
						distractions as possible.
					</p>
					<p>
						I proposed to use only three corporate colors with no gradients or
						shadows so the interface looks as clean as possible. I also proposed
						that the photos should be the main focus and should have more
						relevance than other items on the website.
					</p>
					<p>
						Another proposal was to make the Reservation button unique and easy
						to find, that is why the only yellow button in the whole website is
						the Reservation button.
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/bwlm-elements.jpg'
						alt='Best Western UI design'
						width={1440}
						height={1840}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<Image
				src='/assets/img/bwlm-home-1.jpg'
				alt='Best Western Bedroom block of content'
				width={1400}
				height={900}
				className='bordered'
			/>

			<Spacer height='double' />

			<SplitContent split='50-50' direction='rl'>
				<div className={styles.content}>
					<h3>
						Developing a custom theme for WordPress, both Frontend and Backend
					</h3>
					<p>
						In Tactic Center we only used custom themes so we can have more
						control of the design and this was not an exception. For example, in
						this block of content we wanted to have a small grid of photos, a
						main photo and copy around them. Only a custom block could give us
						this freedom.
					</p>
					<p>
						Since we needed a fast way to develop the Frontend and since other
						developers would be in charge of making changes, we used{' '}
						<a href='https://get.foundation/' rel='external'>
							Foundation Framework
						</a>
						which is a framework similar to{' '}
						<a href='https://getbootstrap.com/' rel='external'>
							Bootstrap
						</a>{' '}
						but with less bloated code.
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/bwlm-block-content.jpg'
						alt="Campbell's Kitchen Reviews feature"
						width={1440}
						height={774}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<div className='width70'>
				<h3>Design everything Responsive</h3>
				<p>
					I think being responsive is a standard now and every website should be
					responsive, especially since most of the visitors now come from a
					mobile source.
				</p>
				<p>
					Foundation Framework made the responsive design a little bit easier.
				</p>
			</div>

			<Spacer />

			<Image
				src='/assets/img/bwlm-responsive.png'
				alt='Responsive design'
				width={1400}
				height={701}
			/>

			<Spacer height='double' />

			<div className='width70'>
				<h3>My Favorite section: the Restaurant page</h3>
				<p>
					The restaurant offers a weekly menu and I built the Backend with
					custom fields so the administrators could change it every week. The
					reason this is my favorite page is because of this block of content: a
					caroussel thats shows everyday's menu and the dish of the day. This is
					not a third party plugin, it is a custom built caroussel with the
					custom fields from the menu.
				</p>
				<p>
					This dish is also shown in the Homepage and changes it depending on
					the day.
				</p>
			</div>

			<Spacer height='double' />

			<Image
				src='/assets/img/bwlm-restaurant.jpg'
				alt='La Pérgola Restaurant'
				width={1400}
				height={895}
				className='bordered'
			/>

			<Spacer height='double' />

			<LinkInternal
				Tag='p'
				Copy='View a list of other selected projects in my Portfolio'
				Path='/portfolio'
			/>
		</Layout>
	);
};

export default CampbellsKitchen;
