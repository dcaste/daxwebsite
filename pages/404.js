import Layout from '../components/layout';

import Head from 'next/head';
import siteTitle from '../components/layout';

export default function Custom404() {
	return (
		<Layout>
			<Head>
				<title>Page not Found</title>
			</Head>

			<h1 className='pageTitle'>404 - Page Not Found</h1>
		</Layout>
	);
}
