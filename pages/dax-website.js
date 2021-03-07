import Head from 'next/head';
import Image from 'next/image';
import LinkInternal from '../components/linkinternal/LinkInternal';
import VisitWebsite from '../components/visitwebsite/VisitWebsite';
import Layout, { siteTitle } from '../components/layout/layout';
import SplitContent from '../components/splitcontent/SplitContent';
import styles from '../components/splitcontent/SplitContent.module.scss';
import Spacer from '../components/spacer/Spacer';
import Card from '../components/card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CampbellsKitchen = () => {
	return (
		<Layout>
			<Head>
				<title>Developing concepts and process of Dax Castellón Website</title>
				<meta
					name='description'
					content='Developing concepts and process of Dax Castellón Website'
				/>
			</Head>

			<h1 className='pageTitle'>Dax Castellón Website</h1>

			<Image
				src='/assets/img/campbells-kitchen.jpg'
				alt='Dax Castellón Website'
				width={1400}
				height={875}
				className='bordered'
			/>
			<VisitWebsite
				URL='https://campbells.com/kitchen/'
				Tag='p'
				className='imageDesc'
			/>
			<p className='imageDesc'>
				<a target='_blank' rel='external' href='https://github.com/dcaste/'>
					Visit the code repository <FontAwesomeIcon icon={['fab', 'github']} />
				</a>
			</p>

			<Spacer height='double' />

			<Card>
				<SplitContent split='60-40'>
					<div className={styles.content}>
						<p className='lead'>
							This purpose of this website is to serve as a Portfolio and to
							prove recruiters that I would be a valuable team member in their
							company by showing my skills as web developer.
						</p>
						<p className='lead'>
							This website is built with a clean design to ease finding
							information and loads extremely fast by using new Web
							technologies.
						</p>
					</div>
					<div className={styles.content}>
						<p>
							<strong>Position:</strong> Freelance web developer
						</p>
						<p>
							<strong>Technologies:</strong>
						</p>
						<ul>
							<li>NextJS framework</li>
							<li>HTML5, SASS, CSS3, Javascript ES6</li>
							<li>Cloud hosting</li>
							<li>EmailJS as email service</li>
						</ul>
					</div>
				</SplitContent>
			</Card>

			<Spacer height='double' />

			<div className='width70'>
				<h2 className='textCentered'>The Concept</h2>
				<p>
					I believe that every project should start by defining its purpose, who
					we are and to whom we are speaking to. This will guide every decision
					to be made, from the language to be used, the look and feel and even
					the technologies. If these definitions are not made, the project will
					not a have a clear goal and indentity.
				</p>
			</div>

			<Spacer />

			<SplitContent split='50-50'>
				<div className={styles.content}>
					<h4>💼 So...Who am I?</h4>
					<p>
						If you don't define who you are, then you don't know what are your
						offerings and needs.
					</p>
					<ul>
						<li>
							I am Web Developer living in Switzerland looking for a position in
							a company
						</li>
						<li>
							I have years of experience working in small and large projects
						</li>
						<li>
							My main expertise is Frontend development with many technologies,
							and one of the tools in which I have expertise is WordPress
						</li>
					</ul>
				</div>
				<div className={styles.content}>
					<h4>👂 My Audience</h4>
					<p>
						There is no such thing as "My Audience is everyone", especially in
						Internet. You must focus your efforts to get the attention of the
						people you think will match your offerings, and the more specific,
						the better.
					</p>
					<ul>
						<li>
							My Audience are Recruiters, HR staff or developers in charge of
							recruiting new members for her or his team
						</li>
					</ul>
					<p>
						Since I am not interested in work as freelancer, my Audience is not
						companies or individuals looking to hire a developer for one
						project.
					</p>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<SplitContent split='50-50'>
				<div className={styles.content}>
					<h3>The Look and Feel</h3>
					<p>
						My decision was to present a clean, concise and pleasent look,
						without distractions since the person who I am talking to has little
						time and probably is checking several other peoples Resumes.
					</p>
					<p>
						I think the look should be a little casual because I want people to
						feel that they are meeting a real person, a future team member who
						they can relate and not another boring candidate. Hence the use of
						emoticons and casual photos of me.
					</p>
					<p>
						Also the color choices are not random. I chose red because evokes
						passion and energy. Cool points if you guess which red I chose 🇨🇭
					</p>
					<p>
						Finally I used subtle animations but just to indicate changes of
						state in elements, like in buttons or in transitions between pages.
						The idea is to not distract the user.
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/campbells-kitchen-block.jpg'
						alt='Dax Castellón block of content'
						width={1439}
						height={513}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<SplitContent split='50-50' direction='rl'>
				<div className={styles.content}>
					<h3>The Language</h3>
					<p>
						My language is casual, the same I would use in a work environment. I
						want to be understood quick and I would like people to relate. I use
						some technical jargon but only when is needed.
					</p>
					<p>
						Also I speak in first person because I am presenting my story, my
						experiences and points of view. At the end this is friendly
						conversation between colleagues.
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/campbells-kitchen-reviews.jpg'
						alt='Dax Castellón Reviews feature'
						width={640}
						height={640}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<div className='width70'>
				<h2 className='textCentered'>The Technologies</h2>
				<p>
					I wanted to show my skills in new technologies but also wanted to have
					ease on maintenance and to have good performance. My decision was to
					go{' '}
					<a href='https://jamstack.org/' target='_blank' rel='external'>
						JAMSTACK
					</a>
					, so that way I could have a decoupled Backend from Frontend. The
					other reason for this is great performance and low costs.
				</p>
			</div>

			<Spacer height='double' />

			<SplitContent split='50-50'>
				<div className={styles.content}>
					<h3>NextJs</h3>
					<p>
						I love to work with{' '}
						<a href='https://reactjs.org/' target='_blank' rel='external'>
							ReactJs
						</a>{' '}
						since the development process is very enjoyable, the code is easy to
						maintain and there are a large amount of libraries that I could use.
						The downside is that a React app is not readable by web crawlers
						since the HTML is not rendered until Javascript is executed, that is
						the reason I chose NextJS.
					</p>
					<h4>SEO</h4>
					<p>
						<a href='https://nextjs.org/' target='_blank' rel='external'>
							NextJs
						</a>{' '}
						is a React framework that prerenders the HTML so web crawlers can
						read what the webpage is about and that is needed for Search Engine
						Optimization.
					</p>
					<h4>Speed</h4>
					<p>
						Another consideration was that NextJs can export the final result in
						static HTML files and the final product renders super fast. Also,
						these small static files can be uploaded to static cloud hostings
						for blazing performance.
					</p>
					<h4>Better developer experience</h4>
					<p>
						Next also gives among other advantages: image optmization,
						incremental static generation, an easy file system rounting, code
						splitting and bundling, built in CSS support and all of this with
						almost zero configuration.
					</p>
					<p>
						I tried GatsbyJs as well, but it was slow and it gave me a lot
						compatibility issues between node modules.{' '}
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/campbells-kitchen-block.jpg'
						alt='Dax Castellón block of content'
						width={1439}
						height={513}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<SplitContent split='50-50' direction='rl'>
				<div className={styles.content}>
					<h3>EmailJS</h3>
					<p>
						I searched for a fast and easy solution to send mails from the
						website and{' '}
						<a href='https://www.emailjs.com/' target='_blank' rel='external'>
							EmailJS
						</a>{' '}
						seemed like the best option since I don't need to send a large
						amount of messages per day.
					</p>
					<p>
						I considered the idea of maybe use{' '}
						<a
							href='https://nodemailer.com/about/'
							target='_blank'
							rel='external'
						>
							Nodemailer
						</a>{' '}
						but because of the small needs for this project, EmailJS is the
						fastest and easiest option in my opinion.
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/campbells-kitchen-reviews.jpg'
						alt='Dax Castellón Reviews feature'
						width={640}
						height={640}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<SplitContent split='50-50'>
				<div className={styles.content}>
					<h2>Performance</h2>
					<p>
						I really enjoy the performance results. Granted, it is a static HTML
						website but if you don't know what you are doing you can end up with
						a very slow website even a static one. Some of the best performance
						statistics about this website:
					</p>
					<ul>
						<li>The Homepage fully loads in 1 second</li>
						<li>
							The first Contentful Paint is 420ms and the time to be Interactive
							is 421ms
						</li>
						<li>
							Google gives the website a performance ranking of 93 in mobile and
							100 in desktop
						</li>
						<li>The images are loaded only when needed</li>
					</ul>
					<p>
						You can check an entire performance report in{' '}
						<a
							href='https://developers.google.com/speed/pagespeed/insights/?url=daxcastellon.dev'
							target='_blank'
							rel='external'
						>
							Google Page Speed Insights
						</a>{' '}
						and{' '}
						<a
							href='https://gtmetrix.com/reports/daxcastellon.dev/8GIKB5om/'
							target='_blank'
							rel='external'
						>
							GTMetrix
						</a>
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/campbells-kitchen-block.jpg'
						alt='Dax Castellón block of content'
						width={1439}
						height={513}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<div className='width70'>
				<h2 className='textCentered'>Of course, everything Responsive</h2>
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
				<h2>Further Development</h2>
				<p>
					I am very pleased with the results but I am planning a couple of
					improvements:
				</p>
				<ul>
					<li>
						Cleaning of the code by refactoring or adding more resusable
						components
					</li>
					<li>Optimizing more the code for search engines</li>
					<li>
						Integration of a CMS like WordPress to get more experience, althouth
						STRAPI seems like a nice alternative
					</li>
				</ul>
			</div>

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
