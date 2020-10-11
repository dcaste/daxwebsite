import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Grid from '../components/grid/Grid';
import Image from '../components/image/Image';
import Form from '../components/form/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import btnStyles from './../components/buttons/Btn.module.scss';

const Contact = () => {
	return (
		<Layout>
			<Head>
				<title>Contact Me - {siteTitle}</title>
			</Head>

			<h1 className='pageTitle'>Contact Me</h1>

			<Form />
		</Layout>
	);
};

export default Contact;
