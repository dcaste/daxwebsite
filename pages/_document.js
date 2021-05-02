import Document, { Html, Head, Main, NextScript } from 'next/document';
import HeadSEO from '@/comp/seo/HeadSEO';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head />
				<HeadSEO />
				<body className='website'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
