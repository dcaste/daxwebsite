import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../components/Image';
import SplitContent from '../components/SplitContent';
import Title from '../components/Title';
import FeatureList from '../components/FeatureList';
import BtnGroup from '../components/BtnGroup';

// Images
import img_avt from './../assets/img/avatar.jpg';
import img_pr_sm from './../assets/img/projects-home-300.png';
import img_pr_md from './../assets/img/projects-home-480.png';
import img_pr from './../assets/img/projects-home.png';

// Data
import homeFeatures from '../data/homeFeatures.json';

const Home = () => {
	return (
		<article>
			<SplitContent tag='section' split='50-50' direction='lr'>
				<Image src_lg={img_avt} alt='Dax Castellón' imgClass='rounded' />
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
				<Image
					src_lg={img_pr}
					src_md={img_pr_md}
					src_sm={img_pr_sm}
					align='center'
					alt='Dax Castellón Work examples.'
				/>
				<div>
					<Title Tag='h2' titleBlack='Work' titleRed='Experience' />
					<p className='Lead'>
						I have worked both in Front-end and Back-end, in small and large
						projects. I have been involved in the conception till the developing
						and optimization stages of websites.
					</p>
					<p>
						<Link to='/portfolio/'>
							List of selected projects in my Portfolio{' '}
							<FontAwesomeIcon icon={'angle-right'} className='marginLeft' />
						</Link>
					</p>
				</div>
			</SplitContent>

			<FeatureList data={homeFeatures} />
		</article>
	);
};

export default Home;
