import Head from 'next/head';
import DaxImage from '../components/daximage/DaxImage';
import Layout, { siteTitle } from '../components/misc/layout';
import SplitContent from '../components/splitcontent/SplitContent';
import Grid from '../components/grid/Grid';
import Card from '../components/card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
				<DaxImage
					src_lg='/assets/img/avatar.jpg'
					src='/assets/img/avatar.jpg'
					alt='Dax Castellón'
					isRounded={true}
					className='rounded'
					width={300}
					height={300}
				/>
				<div className='mobileCentered'>
					<h2>
						<span className='textRed'>Dax</span> Castellón
					</h2>
					<p className='lead'>
						I'm a Web Developer living in Switzerland with 15 years of
						experience. I love to create elegant, fast loading and easy to use
						websites. I've got plenty of experience building customized websites
						with Wordpress as CMS and using SEO best practices.
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
									Well Zes!
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
					</div>
				</Grid>
			</Card>

			<SplitContent>
				<h2>
					<span className='textRed marginRight'>
						<FontAwesomeIcon icon='check' />
					</span>
					Tools and Technoligies
				</h2>
				<ul>
					<li>
						<strong>Languages/Frameworks:</strong> HTML5, JQuery, CSS3, SASS,
						LESS, Bootstrap, Foundation, Javascript ES6, ReactJS, NextJS, PHP
					</li>
					<li>
						<strong>Databases:</strong> MySQL, MariaDB
					</li>
					<li>
						<strong>WordPress CMS:</strong> Custom WP Themes and Plugins,
						WooCommerce, Advanced Custom Fields
					</li>
					<li>
						<strong>Design/Video:</strong> Adobe Photoshop, Adobe Premiere,
						Adobe LightRoom, Luminar
					</li>
					<li>
						<strong>SEO:</strong> Insite optimization, Google Analytics,
						Schema.org structured data
					</li>
				</ul>
			</SplitContent>
		</Layout>
	);
};

export default About;
