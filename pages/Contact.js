import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Form from '../components/form/Form';

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
