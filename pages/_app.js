import { AnimatePresence } from 'framer-motion';
import '../styles/index.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps, router }) {
	return (
		<ApolloProvider client={client}>
			<AnimatePresence exitBeforeEnter initial={false}>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</ApolloProvider>
	);
}

export default MyApp;
