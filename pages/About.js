import Head from 'next/head';
import Layout from '../components/layout';

const About = () => {
	return (
		<Layout>
			<Head>
				<title>About Me</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<h1>About Me</h1>
		</Layout>
	);
};

export default About;
