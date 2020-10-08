import Head from 'next/head';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../components/Image';
import SplitContent from '../components/SplitContent';
import Title from '../components/Title';
import FeatureList from '../components/FeatureList';
import BtnGroup from '../components/BtnGroup';

// Data
import homeFeatures from '../data/homeFeatures.json';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<article>
				<SplitContent tag='section' split='50-50' direction='lr'>
					<Image
						src_lg='/assets/img/avatar.jpg'
						alt='Dax Castellón'
						imgClass='rounded'
					/>
					<div className='mobileCentered'>
						<Title Tag='h1' titleBlack="Hi, I'm" titleRed='Dax' />
						<p className='lead'>
							a WordPress Developer living in Switzerland specialized in
							creating custom themes and plugins with SEO best practices,
							security standards and optimized for fast loading times.
						</p>
						<BtnGroup
							btnMainCopy='Contact Me'
							btnMainLink='/contact/'
							btnSecCopy='About Me'
							btnSecLink='/about/'
						/>
					</div>
				</SplitContent>

				{/* <SplitContent tag='section' split='40-60' direction='rl'>
					<Image
						src_lg='/assets/img/projects-home.png'
						src_md='/assets/img/projects-home-480.png'
						src_sm='/assets/img/projects-home-300.png'
						align='center'
						alt='Dax Castellón Work examples.'
					/>
					<div>
						<Title Tag='h2' titleBlack='Work' titleRed='Experience' />
						<p className='Lead'>
							I have worked both in Front-end and Back-end, in small and large
							projects. I have been involved in the conception till the
							developing and optimization stages of websites.
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
				</SplitContent> */}

				{/* <FeatureList data={homeFeatures} /> */}
			</article>
		</div>
	);
}
