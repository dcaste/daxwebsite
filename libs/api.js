import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

async function fetchURLs() {
	try {
		const res = await axios.get(`${baseURL}/posts/`);
		const data = res.data;
		return { data };
	} catch (error) {
		console.error(error);
	}
}
export { fetchURLs };

async function fetchQuery(path, params = null) {
	let url;

	if (params !== null) {
		url = `${baseURL}/${path}/${params}`;
	} else {
		url = `${baseURL}/${path}`;
	}
	const response = await fetch(`${url}`);
	const data = await response.json();
	return data;
}
export { baseURL, fetchQuery };

async function fetchAPI(query, { variables } = {}) {
	const res = await fetch(`${baseURL}/graphql`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	const json = await res.json();
	if (json.errors) {
		console.error(json.errors);
		throw new Error('Failed to fetch API');
	}

	return json.data;
}

export async function getPreviewPostBySlug(slug) {
	const data = await fetchAPI(
		`
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `,
		{
			variables: {
				where: {
					slug,
				},
			},
		}
	);
	return data?.posts[0];
}

export async function getAllPostsWithSlug() {
	const data = fetchAPI(`
    {
      posts {
        slug
      }
    }
  `);
	return data?.allPosts;
}

export async function getPostId(slug) {
	const data = await fetchAPI(
		`
  query PostById() {
    posts(id:"1") {
			id
    }
  }
  `
	);
	return data?.posts[0];
}

export async function getAllPostsForHome(preview) {
	const data = await fetchAPI(
		`
    query Posts($where: JSON){
      posts(sort: "date:desc", limit: 10, where: $where) {
        title
        slug
        excerpt
        date
        coverImage {
          url
        }
        author {
          name
          picture {
            url
          }
        }
      }
    }
  `,
		{
			variables: {
				where: {
					...(preview ? {} : { status: 'published' }),
				},
			},
		}
	);
	return data?.posts;
}

export async function getPostAndMorePosts(slug, preview) {
	const data = await fetchAPI(
		`
  query PostBySlug($where: JSON, $where_ne: JSON) {
    posts(where: $where) {
      title
      slug
      content
      coverImage{
        width
        height
        url
      }
			dynamic_content{
				__typename
			}
    
    }

    morePosts: posts(sort: "date:desc", limit: 2, where: $where_ne) {
      title
      slug
      excerpt
    }
  }
  `,
		{
			preview,
			variables: {
				where: {
					slug,
					...(preview ? {} : { status: 'published' }),
				},
				where_ne: {
					...(preview ? {} : { status: 'published' }),
					slug_ne: slug,
				},
			},
		}
	);
	return data;
}

export async function getPostData(slug, preview) {
	const data = await fetchAPI(`$(slug)`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	return data;
}
