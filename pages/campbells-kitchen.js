import Head from 'next/head';
import Image from 'next/image';
import NextLink from '../components/nextlink/NextLink';
import VisitWebsite from '../components/visitwebsite/VisitWebsite';
import Layout, { siteTitle } from '../components/layout/layout';
import SplitContent from '../components/splitcontent/SplitContent';
import styles from '../components/splitcontent/SplitContent.module.scss';
import Spacer from '../components/spacer/Spacer';

const CampbellsKitchen = () => {
	return (
		<Layout>
			<Head>
				<title>
					My Roles as a web developer in Campbell's Kitchen - {siteTitle}
				</title>
				<meta
					name='description'
					content='Explanation of my job as web developer in Campbells Kitchen website'
				/>
			</Head>

			<h1 className='pageTitle'>Campbell's Kitchen</h1>

			<Image
				src='/assets/img/campbells-kitchen.jpg'
				alt="Campbell's Kitchen Website"
				width={1400}
				height={875}
				className='bordered'
			/>
			<VisitWebsite
				URL='https://campbells.com/kitchen/'
				Tag='p'
				className='imageDesc'
			/>

			<Spacer height='double' />

			<SplitContent split='60-40'>
				<div className={styles.content}>
					<h2 className='lead'>
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
						<strong>Technologies</strong>
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

			<h2 className='textCentered'>My Roles in this project</h2>

			<Spacer />

			<SplitContent split='50-50'>
				<div className={styles.content}>
					<h3>Building Blocks of Content</h3>
					<p>
						I was part of the WordPress team in charge of developing the
						backend. This website was built before the WordPress Gutenberg
						editor was introduced so we used custom fields to build blocks of
						content so the administrators could easily fill them.
					</p>
					<p>
						The idea was to give administrators an user friendly way to update
						the information and to be scalable.
					</p>
				</div>
				<div className={styles.content}>
					<p>
						Because of the scalability the themes and plugins were built from
						scratch, that way other developers can modify them for future needs.
					</p>
					<p>
						The other consideration for this was security. The more secure
						system is the one nobody knows how it is built. We minimized the
						risks by avoiding third party plugins and by using strict PHP and
						WordPress security standards.
					</p>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<SplitContent split='60-40'>
				<div className={styles.content}>
					<h3>Example of a Block of Content</h3>
					<p>
						One of my assignments was to build several custom blocks of content
						like the one you can see in this example. You could think of them as
						a component in React.
					</p>
					<p>
						This block of content is a caroussel with a collection of recipes.
						The administrator can add a maximum of 12 collections and each
						collection has its own name, description, a main image and two extra
						images. Once the user clicks on the collection she or he is taken to
						a list of recipes that belong to this collection, for example
						"Recipes Using Tomato Soup".
					</p>
				</div>
				<div className={styles.picture}>
					<Image
						src='/assets/img/campbells-kitchen-block.jpg'
						alt="Campbell's Kitchen block of content"
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
						reviews by using AJAX. Yup, there was not such a thing as React back
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
						alt="Campbell's Kitchen Reviews feature"
						width={640}
						height={640}
						className='bordered'
					/>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<Image
				src='/assets/img/campbells-kitchen-2.jpg'
				alt="Campbell's Kitchen Website"
				width={1400}
				height={900}
				className='bordered'
			/>
			<p className='imageDesc'>
				One of the biggest block of content of this website with twelve recipes
				and two articles.
			</p>

			<Spacer height='double' />

			<div className='width70'>
				<h2>Lessons Learned</h2>
				<p>
					This was my first time working with a big team with Agile method and
					remote colleagues. I learned a lot about coordinating efforts and
					distributing tasks.
				</p>
				<p>
					This was also my first time working in a massive WordPress website
					with an incredible amount of data. Granted, I was not in charge of
					migrating databases but I was part of the team building the backend
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

			<div className='width70'>
				<h2>Further Development</h2>
				<p>
					The custom theme and blocks of content were so useful that the client
					asked to develop other websites with the same approach, so we used the
					custom theme as a parent theme and the code from the blocks of content
					in the following Campbell's websites.
				</p>
			</div>

			<Spacer />

			<Image
				src='/assets/img/campbells-swanson.jpg'
				alt="Campbell's Swanson"
				width={1400}
				height={900}
				className='bordered'
			/>

			<VisitWebsite
				URL='https://www.campbells.com/swanson/'
				Tag='p'
				className='imageDesc'
			/>

			<Spacer />

			<Image
				src='/assets/img/campbells-v8.jpg'
				alt="Campbell's V8"
				width={1400}
				height={900}
				className='bordered'
			/>

			<VisitWebsite
				URL='https://www.campbells.com/v8/'
				Tag='p'
				className='imageDesc'
			/>

			<Spacer />

			<Image
				src='/assets/img/campbells-well-yes.jpg'
				alt="Campbell's Well Yes"
				width={1400}
				height={900}
				className='bordered'
			/>
			<VisitWebsite
				URL='https://www.campbells.com/well-yes/'
				Tag='p'
				className='imageDesc'
			/>

			<Spacer height='double' />

			<NextLink
				Tag='p'
				Copy='View a list of other selected projects in my Portfolio'
				Path='/portfolio'
			/>
		</Layout>
	);
};

export default CampbellsKitchen;
