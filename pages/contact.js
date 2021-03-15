import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout/layout';
import ContactForm from '../components/contactform/ContactForm';
import SplitContent from '../components/splitcontent/SplitContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
	return (
		<Layout>
			<Head>
				<title>Contact Me - {siteTitle}</title>
				<meta
					name='description'
					content='Contact information to reach Web developer, Dax Castellón'
				/>
			</Head>

			<h1 className='pageTitle'>Contact Me</h1>

			<SplitContent split='50-50'>
				<div>
					<div>
						<Image
							src='/assets/img/avatar.jpg'
							alt='Dax Castellón'
							className='rounded'
							width={300}
							height={300}
						/>
					</div>
					<p className='textCentered'>
						<strong className='lead'>Dax Castellón Meyrat</strong>
						<br />
						Web Developer
						<br />
					</p>
					<p className='textCentered'>dax@daxcastellon.dev</p>
					<p className='textCentered textBig'>
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

				<ContactForm />
			</SplitContent>
		</Layout>
	);
};

export default Contact;
