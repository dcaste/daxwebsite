import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout, { siteTitle } from '../components/layout/layout';
import SplitContent from '../components/splitcontent/SplitContent';
import styles from '../components/splitcontent/SplitContent.module.scss';
import Spacer from '../components/spacer/Spacer';

const CampbellsKitchen = () => {
	return (
		<Layout>
			<Head>
				<title>Campbell's Kitchen.Explanation - {siteTitle}</title>
				<meta
					name='description'
					content='Explanation of my job as web developer in Campbells Kitchen website'
				/>
			</Head>

			<h1 className='pageTitle'>Campbell's Kitchen</h1>

			<Image
				src='/assets/img/campbells-kitchen.jpg'
				alt="Kampbell's Kitchen Website"
				width={1400}
				height={875}
				className='bordered'
			/>
			<Spacer />
			<p className='textCentered'>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://www.campbells.com/kitchen/'
				>
					Visit the website{' '}
					<FontAwesomeIcon icon={'external-link-alt'} className='marginLeft' />
				</a>
			</p>

			<Spacer height='double' />

			<SplitContent split='60-40'>
				<div className={styles.content}>
					<h2 className='lead'>
						<FontAwesomeIcon icon={'briefcase'} className='marginRight' />
						As a member of{' '}
						<a
							href='https://rain.agency/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Rain Agency
						</a>{' '}
						WordPress Team.
					</h2>
					<hr />
					<p>
						Campbell's Kitchen is the biggest Campbell's website containing
						thousands of recipes with detailed information including products
						used and where to find them near the user.
					</p>
					<p>
						The main goal was to redesign the old website and incorporate new
						technologies so the Campbell's team should be able to update the
						information with the minimun IT knowledge.
					</p>
				</div>
				<div className={styles.content}>
					<p>
						<strong>
							<FontAwesomeIcon icon={'laptop-code'} className='marginRight' />{' '}
							Technologies
						</strong>
					</p>
					<ul className={styles.list}>
						<li>WordPress as CMS</li>
						<li>HTML5, LESS, CSS3, PHP</li>
						<li>JQuery, AJAX</li>
						<li>
							* because of the disclosure clauses I cannot provide the exact
							methods and tools used to build the website
						</li>
					</ul>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<h2 className='textCentered'>My Role in this project</h2>

			<Spacer />

			<SplitContent split='60-40'>
				<div className={styles.content}>
					<h3>Build Blocks of Content</h3>
					<p>
						I was part of the WordPress team in charge of develop the backend
						for the website. This website was built before the Gutenberg editor
						was introduced so we used custom fields to build blocks of content
						so the administrators could fill them with the proper information.
					</p>
					<p>
						One of my assignments was to build several custom blocks of content
						like the one you can see in this example. These blocks of content
						were later used in other Campbell's websites.
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/campbells-kitchen-block.jpg'
						alt="Kampbell's Kitchen block of content"
						width={1439}
						height={513}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<SplitContent split='60-40' direction='rl'>
				<div className={styles.content}>
					<h3>API Integration</h3>
					<p>
						Another assignment was to integrate the Reviews coming from an
						external API and add functionalities like sorting and adding new
						reviews by using AJAX. Yup, there was not such a thing as REACT back
						in the day 😅
					</p>

					<h3>SEO Structured Data</h3>
					<p>
						I was in charge of integrating the{' '}
						<a
							href='https://schema.org/'
							target='_blank'
							rel='noopener noreferrer'
						>
							https://schema.org/
						</a>{' '}
						structured data in the whole theme, especially in recipes, although
						it seems it is not used anymore.
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/campbells-kitchen-reviews.jpg'
						alt="Kampbell's Kitchen Reviews feature"
						width={640}
						height={640}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<Image
				src='/assets/img/campbells-kitchen-2.jpg'
				alt="Kampbell's Kitchen Website"
				width={1400}
				height={875}
				className='bordered'
			/>

			<Spacer height='double' />

			<div className='width70'>
				<h2>Lessons Learned</h2>
				<p>
					This was my first time working with a big team with Agile method and
					remote colleagues. I learned a lot of coordinating efforts and to
					distribute tasks.
				</p>
				<p>
					This was also my first time working in a massive WordPress website and
					migrating and incredible amount of data. Granted, I was not in charge
					of migrating databases but I was part of the team building the backend
					for the new data.
				</p>
				<p>
					I was using Git environment in small personal projects but this was my
					first time to actually use it in a big project with several
					colleagues.
				</p>
				<h3>A problem solved</h3>
				<p>
					I would like to mention that I gave a valuable idea and solved a
					problem: we needed to show only the new versions of the recipes to the
					visitors but in case of not existing a new version we should present
					the old one.
				</p>
				<p>
					There were thousands of recipes and the Campbell's team was updating
					them one by one but we needed to show information, we could not wait
					for the whole update. So my idea was, instead of having a unique set
					of fields for the recipe data, we should have two set of fields: the
					old version fields and the new version fields. If the new version
					fields were empty, it means the recipe has been not updated yet so the
					website should use the old fields from the database, otherwise use the
					new fields.
				</p>
				<p>
					We tried my idea, we made a lot of tests and then it was approved to
					go live. That way the website showed thousands of recipes and then the
					Campbell's team was able to update the information at its own pace.
				</p>
			</div>

			<Spacer height='double' />

			<p className='width70'>
				<Link href='/portfolio'>
					<a>
						View a list of other selected projects in my Portfolio
						<FontAwesomeIcon icon={'angle-right'} className='marginLeft' />
					</a>
				</Link>
			</p>
		</Layout>
	);
};

export default CampbellsKitchen;
