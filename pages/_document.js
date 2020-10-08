import Document, { Html, Head, Main, NextScript } from 'next/document';
import NavMenu from './../components/NavMenu';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head />
				<body id='mainWrapper'>
					<NavMenu id='header' element='header' />
					<Main />
					<NextScript />
					<NavMenu id='footer' element='footer' />
				</body>
			</Html>
		);
	}
}
