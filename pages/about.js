import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout/layout';
import SplitContent from '../components/splitcontent/SplitContent';
import FeatureList from '../components/featurelist/FeatureList';
import Grid from '../components/grid/Grid';
import Spacer from '../components/spacer/Spacer';
import Card from '../components/card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Data
import aboutFeatures from '../data/aboutFeatures.json';

const About = () => {
	return (
		<Layout>
			<Head>
				<title>About Me - {siteTitle}</title>
				<meta
					name='description'
					content='Work experience as a member of Web Developer teams and as freelancer'
				/>
			</Head>

			<h1 className='pageTitle'>About Me</h1>

			<SplitContent split='50-50' direction='lr'>
				<Image
					src='/assets/img/dax_about.jpg'
					alt='Dax Castellón, web developer living in Switzerland'
					width={480}
					height={600}
					className='roundCorners'
				/>
				<div className='mobileCentered'>
					<p>
						I have 15 years of experience working in web development. I love to
						create clean, elegant, fast loading and easy to use websites. I
						believe that a friendly interface is better than fancy animations.
					</p>
					<p>
						I'm also interested in everything related to SEO, analytics and
						website performance, that is why I learn new ways to impove
						rankings. I'm not an expert, but I know one thing or two.
					</p>
					<p>
						I am also fascinated with psychology. I constantly read books about
						marketing and strategies about web engagement.
					</p>
					<p>
						<small>
							* When I say "read books" I mean "watch YouTube videos".
						</small>
					</p>
					<p className='textBig'>
						<a
							href='https://www.linkedin.com/in/daxcastellonmeyrat/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon icon={['fab', 'linkedin']} />
						</a>
						<a
							href='https://github.com/dcaste/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								icon={['fab', 'github']}
								className='marginLeft'
							/>
						</a>
					</p>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<Card className='contentSpacing'>
				<Grid columns={2}>
					<h2 className=' entireColumn textCentered'>
						<span className='textRed marginRight'>
							<FontAwesomeIcon icon='briefcase' />
						</span>{' '}
						Work Experience
					</h2>
					<div>
						<h3>
							As a member of{' '}
							<a
								href='https://rain.agency/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Rain Agency
							</a>{' '}
							WordPress Team
						</h3>
						<ul>
							<li>
								Developing of custom plugins and the main theme backend for{' '}
								<a
									href='https://www.campbells.com/kitchen/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Campbell's Kitchen
								</a>
								, the biggest Campbell's website. Those plugins and main theme
								were later implemented in other Campbell's ministes such as{' '}
								<a
									href='https://www.campbells.com/swanson/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Swanson
								</a>
								,{' '}
								<a
									href='https://www.campbells.com/v8/'
									target='_blank'
									rel='noopener noreferrer'
								>
									V8
								</a>{' '}
								and{' '}
								<a
									href='https://www.campbells.com/well-yes/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Well Yes!
								</a>
							</li>
							<li>
								Integration of the external API Recipe Reviews in the theme with
								AJAX and PHP.
							</li>
							<li>
								Integration of{' '}
								<a
									href='https://schema.org/'
									target='_blank'
									rel='noopener noreferrer'
								>
									Schema.org
								</a>{' '}
								structured data in the main theme, especially in recipes.
							</li>
						</ul>
					</div>
					<div>
						<h3>
							As Web Developer Team Leader in{' '}
							<a
								href='https://tactic-center.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Tactic Center
							</a>
						</h3>
						<ul className='splitContent__list'>
							<li>
								Supervising and assisting two junior developers as Web
								Development Team Leader.
							</li>
							<li>
								Development of custom Wordpress themes and plugins using SEO
								best practices, PHPCS security standards and optimized under
								GTMetrix and Google PageSpeed performance requirements.
							</li>
							<li>
								Planning the development processes of the company's main
								websites.
							</li>
							<li>
								Established the company development security standards, Git
								workflow and assisted in moving existing websites to a new
								hosting provider.
							</li>
							<li>
								WooCommerce integration for E-commerce websites and Active
								Campaign software as CRM.
							</li>
						</ul>
					</div>
					<div className='entireColumn width70'>
						<h3>As Freelance WordPress Developer</h3>
						<p>
							As freelance developer I have worked in small teams and by myself
							in a variety of projects, both in frontend and backend.
						</p>
						<p>
							With my own clients I have been in charge of the whole process of
							conceptualization, designing the UI, coding and deployment of
							websites. In some cases I still provide services of Webmastering
							and Hosting.
						</p>
						<p>
							<Link href='/portfolio'>
								<a>
									List of selected projects in my Portfolio
									<FontAwesomeIcon
										icon={'angle-right'}
										className='marginLeft'
									/>
								</a>
							</Link>
						</p>
					</div>
				</Grid>
			</Card>
			<Spacer />
			<FeatureList data={aboutFeatures} />

			<Spacer height='double' />

			<h2 className='textCentered'>I'm cool in other areas as well</h2>

			<Spacer />

			<SplitContent split='50-50' direction='lr'>
				<Image
					src='/assets/img/dax_hiking.jpg'
					alt='Dax Castellón'
					width={480}
					height={600}
					className='roundCorners'
				/>
				<div className='mobileCentered'>
					<p>
						On my free time I like to skateboard, it is something I have been
						doing since I was a teen. They say once you start skating you never
						quit. I'm not good though.
					</p>
					<p>
						Also I looove hiking although I do it the way down. I am not that
						Swiss yet to hike uphill.
					</p>
					<p>
						When I want to chill at the computer I play some World of Warcraft,
						Call of Duty or just paint listening to Tool or Wu Tang Clan.
					</p>
					<p>
						Lately I have been very interested in photography and video editing.
						Since a couple of years I have been taking a lot of photos
						everywhere I go. You can check me in Instagram and YouTube.
					</p>
					<p className='textBig'>
						<a
							href='https://www.instagram.com/daxvader/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon icon={['fab', 'instagram-square']} />
						</a>
						<a
							href='https://www.youtube.com/channel/UCbDGwt8CKStIgE1NGqLfdBg'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon
								icon={['fab', 'youtube']}
								className='marginLeft'
							/>
						</a>
					</p>
				</div>
			</SplitContent>
		</Layout>
	);
};

export default About;
