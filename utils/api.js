export function getStrapiURL(path) {
	return `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
	}${path}`;
}

// Fetch data from a REST endpoint.
export async function fetchAPI(path) {
	const response = await fetch(getStrapiURL(path));

	if (!response.ok) {
		console.error(response.statusText);
		throw new Error(`An error occured please try again`);
	}

	const data = await response.json();
	return data;
}

// Fetch data from GRAPHQL.
export async function fetchGRAPHQL(query, { variables } = {}) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query,
				variables,
			}),
		}
	);

	const json = await response.json();

	if (json.errors) {
		console.error(json.errors);
		throw new Error('Failed to fetch API');
	}

	return json.data;
}

// Receives an array of posts then returns the posts slugs in an array or a string.
export async function getSlugs(posts, returnArray) {
	const slugs = posts.map((post) => {
		const paths = returnArray === true ? [post.slug] : post.slug;
		return { params: { slug: paths } };
	});

	return slugs;
}
