import Layout from '../components/layout';
import Head from 'next/head';
import { siteTitle } from '../components/layout';

const ThankYou = () => {
	return (
		<Layout>
			<Head>
				<title>Message received - {siteTitle}</title>
			</Head>

			<h1 className='pageTitle'>Message received!</h1>
		</Layout>
	);
};

export default ThankYou;
