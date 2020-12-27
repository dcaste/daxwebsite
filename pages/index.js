import Head from 'next/head';
import Link from 'next/link';
import DaxImage from '../components/daximage/DaxImage';
import Layout, { siteTitle } from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SplitContent from '../components/splitcontent/SplitContent';
import Title from '../components/Title';
import FeatureList from '../components/featurelist/FeatureList';
import BtnGroup from '../components/buttonsComponents/BtnGroup';

// Data
import homeFeatures from '../data/homeFeatures.json';

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle} - WordPress Developer</title>
			</Head>

			<SplitContent tag='section' split='50-50' direction='lr'>
				<DaxImage
					src_lg='/assets/img/avatar.jpg'
					src='/assets/img/avatar.jpg'
					alt='Dax Castellón'
					className='splitContent__img'
					isRounded={true}
					width={300}
					height={299}
					className='rounded'
				/>
				<div className='mobileCentered'>
					<Title Tag='h1' titleBlack="Hi, I'm" titleRed='Dax' />
					<p className='lead'>
						a WordPress Developer living in Switzerland specialized in creating
						custom themes and plugins with SEO best practices, security
						standards and optimized for fast loading times.
					</p>
					<BtnGroup
						btnMainCopy='Contact Me'
						btnMainLink='/contact/'
						btnSecCopy='About Me'
						btnSecLink='/about/'
					/>
				</div>
			</SplitContent>

			<SplitContent tag='section' split='40-60' direction='rl'>
				<DaxImage
					src_lg='/assets/img/projects-home.png'
					src_md='/assets/img/projects-home-480.png'
					src_sm='/assets/img/projects-home-300.png'
					align='center'
					src='/assets/img/projects-home.png'
					alt='Dax Castellón Work examples.'
					width={640}
					height={320}
				/>
				<div>
					<Title Tag='h2' titleBlack='Work' titleRed='Experience' />
					<p className='Lead'>
						I have worked both in Front-end and Back-end, in small and large
						projects. I have been involved in the conception till the developing
						and optimization stages of websites.
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

			<FeatureList data={homeFeatures} />
		</Layout>
	);
}
