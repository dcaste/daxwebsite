export function getStrapiURL(path = '') {
	return `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
	}${path}`;
}

// Fetch data from a REST endpoint.
export async function fetchAPI(path) {
	const requestUrl = getStrapiURL(path);
	const response = await fetch(requestUrl);

	const json = await response.json();

	if (json.errors) {
		console.error(json.errors);
		throw new Error('Failed to fetch API');
	}

	return json;
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

// Return slug param from an array of slugs.
export function getSlug(item) {
	const slugArray = [item.slug];
	return { params: { slug: slugArray } };
}
