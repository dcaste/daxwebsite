import Head from 'next/head';
import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';
import DaxImage from '../components/daximage/DaxImage';
import Layout, { siteTitle } from '../components/layout/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SplitContent from '../components/splitcontent/SplitContent';
import Spacer from '../components/spacer/Spacer';
import Title from '../components/misc/Title';
import FeatureList from '../components/featurelist/FeatureList';
import BtnGroup from '../components/buttonsComponents/BtnGroup';
import styles from '../components/splitcontent/SplitContent.module.scss';

// Data
const CONTENT = gql`
	{
		page(id: "cG9zdDoy") {
			content(format: RENDERED)
		}
	}
`;

export default function Home() {
	const { loading, error, data } = useQuery(CONTENT);
	let contenido = '';

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :( </p>;
	if (data) {
		contenido = data.page.content;
	}

	return (
		<Layout>
			<Head>
				<title>{siteTitle} - Web Developer</title>
			</Head>
			<div dangerouslySetInnerHTML={{ __html: contenido }}></div>
			<SplitContent tag='section' split='50-50'>
				<div className={styles.picture}>
					<DaxImage
						src_lg='/assets/img/avatar.jpg'
						src='/assets/img/avatar.jpg'
						alt='Dax Castellón'
						isRounded={true}
						className='rounded'
						width={300}
						height={300}
					/>
				</div>
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
				</div>
				<div className={styles.content}>
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
			<Spacer height='double' />
			{/* <FeatureList data={homeFeatures} /> */}
		</Layout>
	);
}
