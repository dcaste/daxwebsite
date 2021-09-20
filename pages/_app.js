import App from 'next/app';
import ErrorPage from 'next/error';
import { getStrapiURL, fetchAPI } from '@/utils/api';
import { AnimatePresence } from 'framer-motion';
import '../styles/index.scss';

function MyApp({ Component, pageProps, router }) {
	const { globalData } = pageProps;

	if (globalData == null) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<Component {...pageProps} key={router.route} />
		</AnimatePresence>
	);
}

MyApp.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext);
	// const response = await fetch(getStrapiURL('/global'));
	// const globalData = await response.json();^
	const globalData = await fetchAPI('/global');

	return {
		...appProps,
		pageProps: {
			globalData: globalData,
		},
	};
};

export default MyApp;
