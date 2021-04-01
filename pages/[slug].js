import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SplitContent from '../components/splitcontent/SplitContent';
import Spacer from '../components/spacer/Spacer';
import Title from '../components/title/Title';
import Grid from '../components/grid/Grid';
import Card from '../components/card/Card';
import BtnGroup from '../components/buttonsComponents/BtnGroup';
import styles from '../components/splitcontent/SplitContent.module.scss';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import axios from 'axios';

import {
	getAllPostsWithSlug,
	getPostAndMorePosts,
	getPostData,
	fetchQuery,
	getPostId,
	fetchURLs,
} from '../libs/api';
import markdownToHtml from '../libs/markdownToHtml';

const Post = ({ post }) => {
	console.log(post);
	// const router = useRouter();
	// if (!router.isFallback && !post?.slug) {
	// 	return <ErrorPage statusCode={404} />;
	// }

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
