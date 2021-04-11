import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '@/layout/layout';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

const Post = ({ post }) => {
	return (
		<Layout>
			{/* <div>
				{router.isFallback ? (
					<h1>Loading…</h1>
				) : (
					<article>
						<h1>{post.title}</h1>
						<p></p>
						<div dangerouslySetInnerHTML={{ __html: post.content }} />
					</article>
				)}
			</div> */}
		</Layout>
	);
};

export async function getStaticProps(params) {
	console.error(params);
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts/${params.params.slug}`
	);
	const post = await res.json();

	return {
		props: {
			post,
		},
	};
}

export async function getStaticPaths() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/posts/`);
	const posts = await res.json();

	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}));

	return {
		paths,
		fallback: false,
	};
}

export default Post;
