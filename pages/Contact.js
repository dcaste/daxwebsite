import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Grid from '../components/grid/Grid';
import Image from '../components/image/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import btnStyles from './../components/buttons/Btn.module.scss';

const Contact = () => {
	return (
		<Layout>
			<Head>
				<title>Contact Me - {siteTitle}</title>
			</Head>

			<h1 className='pageTitle'>Contact Me</h1>

			<Grid className='widthHalf'>
				<Image
					src_lg='/assets/img/avatar.jpg'
					alt='Dax Castellón'
					imgClass='rounded'
				/>
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
						<FontAwesomeIcon icon={['fab', 'github']} className='marginLeft' />
					</a>
				</p>
				<div className='mobileCentered'>
					<form>
						<p>
							<label>Title</label>
							<br />
							<label>
								<input type='radio' name='title' value='mr' />
								Mr
							</label>
							<label>
								<input type='radio' name='title' value='mrs' />
								Mrs
							</label>
							<label>
								<input type='radio' name='title' value='miss' />
								Miss
							</label>
						</p>
						<p>
							<label htmlFor=''>Name</label>
							<input type='text' name='' id='' />
						</p>
						<p>
							<label htmlFor=''>Message</label>
							<br />
							<textarea></textarea>
						</p>
						<p>
							<button type='submit' className={btnStyles.btn}>
								Send message
							</button>
						</p>
					</form>
				</div>
			</Grid>
		</Layout>
	);
};

export default Contact;
