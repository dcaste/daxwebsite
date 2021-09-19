import App from 'next/app';
import { fetchAPI } from '@/utils/api';
import { AnimatePresence } from 'framer-motion';
import '../styles/index.scss';

function MyApp({ Component, pageProps, router }) {
	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<Component {...pageProps} key={router.route} />
		</AnimatePresence>
	);
}

MyApp.getInitialProps = async (ctx) => {
	const appProps = await App.getInitialProps(ctx);
	const global = await fetchAPI(`/global`);

	return { ...appProps, pageProps: { global, path: ctx.pathname } };
};

export default MyApp;
