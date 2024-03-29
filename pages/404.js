import Layout from '../components/layout/layout';
import Head from 'next/head';
import { siteTitle } from '../components/layout/layout';

export default function Custom404() {
	return (
		<Layout>
			<Head>
				<title>Page not Found - {siteTitle}</title>
			</Head>

			<h1 className='pageTitle'>404 - Page Not Found</h1>
		</Layout>
	);
}
