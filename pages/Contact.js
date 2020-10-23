import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ContactForm from '../components/contactform/ContactForm';

const Contact = () => {
	return (
		<Layout>
			<Head>
				<title>Contact Me - {siteTitle}</title>
			</Head>

			<h1 className='pageTitle'>Contact Me</h1>

			<ContactForm />
		</Layout>
	);
};

export default Contact;
