import { AnimatePresence } from 'framer-motion';
import '../styles/index.scss';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://daxwebsite.local/graphql',
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
