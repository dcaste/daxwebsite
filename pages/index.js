import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SplitContent from '../components/splitcontent/SplitContent';
import Spacer from '../components/spacer/Spacer';
import Title from '../components/misc/Title';
import Grid from '../components/grid/Grid';
import Card from '../components/card/Card';
import BtnGroup from '../components/buttonsComponents/BtnGroup';
import styles from '../components/splitcontent/SplitContent.module.scss';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle} - Web Developer</title>
			</Head>
			<SplitContent tag='section' split='50-50'>
				<Image
					src='/assets/img/avatar.jpg'
					alt='Dax Castellón'
					className='rounded'
					width={300}
					height={300}
				/>
				<div className={styles.content}>
					<Title
						Tag='h1'
						titleBlack="Hi, I'm"
						titleRed='Dax'
						className='mobileCentered'
					/>
					<p className='lead mobileCentered'>
						a Web Developer living in Switzerland specialized in creating custom
						websites with SEO best practices, security standards and optimized
						for fast loading times.
					</p>
					<p className='lead mobileCentered'>
						I use WordPress as my main CMS and have experience both in Back-end
						and Front-end developing custom themes.
					</p>
					<BtnGroup
						btnMainCopy='Contact Me'
						btnMainLink='/contact/'
						btnSecCopy='About Me'
						btnSecLink='/about/'
						className='mobileCentered'
					/>
				</div>
			</SplitContent>
			<Spacer height='double' />
			<SplitContent tag='section' split='40-60' direction='rl'>
				<div className={styles.picture}>
					<Image
						src='/assets/img/projects-home.png'
						alt='Dax Castellón Work examples.'
						width={640}
						height={320}
					/>
				</div>
				<div className={styles.content}>
					<Title Tag='h2' titleBlack='Work' titleRed='Experience' />

					<p className='Lead'>
						I have worked for several years in small and large projects. I have
						been involved from the conception till the developing and
						optimization stages of websites.
					</p>

					<p>
						<Link href='/portfolio'>
							<a>
								List of selected projects in my Portfolio
								<FontAwesomeIcon icon={'angle-right'} className='marginLeft' />
							</a>
						</Link>
					</p>
				</div>
			</SplitContent>

			<Spacer height='double' />

			<h2 className='textCentered'>
				<span className='textRed marginRight'>
					<FontAwesomeIcon icon='check' />
				</span>
				My Skills
			</h2>
			<p className='lead textCentered width70'>
				I have learned by myself several technologies and applied them in real
				world scenarios. Who says an old dog cannot learn new tricks? 💪
			</p>

			<Spacer />

			<Card className='contentSpacing'>
				<Grid columns={2}>
					<h3 className='entireColumn'>Tools and Technologies</h3>
					<ul>
						<li>
							<strong>Languages:</strong> HTML5, JQuery, CSS3, SASS, LESS,
							Javascript ES6, PHP
						</li>
						<li>
							<strong>Frameworks/Libraries:</strong> Bootstrap, Foundation,
							ReactJS, NextJS, JQuery
						</li>
						<li>
							<strong>Databases:</strong> MySQL, MariaDB
						</li>
					</ul>
					<ul>
						<li>
							<strong>WordPress CMS:</strong> Custom WP Themes coding,
							WooCommerce, Advanced Custom Fields and most known plugins
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
					<p className='entireColumn textCentered'>
						<Link href='/about/'>
							<a>
								Get to know more about my experience and skills
								<FontAwesomeIcon icon='angle-right' className='marginLeft' />
							</a>
						</Link>
					</p>
				</Grid>
			</Card>

			<Spacer />

			<h2 className='textCentered'>
				<span className='textRed marginRight'>
					<FontAwesomeIcon icon='laptop-code' />
				</span>
				What I am working on
			</h2>
			<p className='textCentered width70'>
				Currently I am learning more about{' '}
				<a href='https://reactjs.org/' target='_blank'>
					ReactJS
				</a>{' '}
				and its frameworks like{' '}
				<a href='https://nextjs.org/' target='_blank'>
					NextJS
				</a>{' '}
				or{' '}
				<a href='https://www.gatsbyjs.com/' target='_blank'>
					GatsbyJS
				</a>{' '}
				to reduce loading times in websites and improve its rankings. This
				website is built with NextJS not only because it is fast but because
				prerenders the basic HTML for web crawlers, which it is better for SEO.
			</p>
			<p className='textCentered width70'>
				As a personal project I am starting to connect this technologies with{' '}
				<a href='https://wordpress.org/' target='_blank'>
					WordPress
				</a>{' '}
				but I am also interested in{' '}
				<a href='https://strapi.io/' target='_blank'>
					Strapi
				</a>
				, which is a full NodeJS and API CMS.
			</p>
		</Layout>
	);
}
