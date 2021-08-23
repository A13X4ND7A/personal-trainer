import client, {previewClient} from './sanity';

const getUniquePosts = (posts) => {
	const slugs = new Set();
	return posts.filter((post) => {
		if (slugs.has(post.slug)) {
			return false;
		} else {
			slugs.add(post.slug);
			return true;
		}
	});
};

//to be fixed, cant get this to work unfortunately
const estimatedTimeFields = `
"numberOfCharacters": length(pt::text(body)),
	"estimatedWordCount": round(length(pt::text(body)) / 5),
	"estimatedReadingTime": round(length(pt::text(body) / 5) / 180 ),
  `;

const postFields = `
  _id,
  name,
  title,
  'date': publishedAt,
  excerpt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
  
`;
const testimonialPostFields = `
  _id,
  clientName,
  testimonialExcerpt,
  testimonialText,
`;
const aboutPostFields = `
  _id,
  name,
  bio,
  'authorImage': image.asset->url
`;

const servicesPostFields = `
  _id,
  title,
  servicesText,
  mainImage,
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getTestimonials() {
	const data = await client.fetch(`*[_type == "testimonial"] {
      ${testimonialPostFields}
    }`);
	return data;
}
export async function getAbout() {
	const data = await client.fetch(`*[_type == 'author'][0] {
      ${aboutPostFields}
    }`);
	return data;
}
export async function getServices() {
	const data = await client.fetch(`*[_type == 'services'] {
      ${servicesPostFields}
    }`);
	return data;
}

export async function getPreviewPostBySlug(slug) {
	const data = await getClient(true).fetch(
		`*[_type == "testimonial"]{
      ${postFields}
      body
    }`,
		{slug}
	);
	return data[0];
}

export async function getAllPostsWithSlug() {
	const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
	return data;
}

export async function getAllPostsForHome(preview) {
	const results = await getClient(preview).fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`);
	return getUniquePosts(results);
}

//for the post page showing the blog post and then  an option at bottom to see more posts
export async function getPostAndMorePosts(slug, preview) {
	const curClient = getClient(preview);
	const [post, morePosts] = await Promise.all([
		curClient
			.fetch(
				`*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        

        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
				{slug}
			)
			.then((res) => res?.[0]),
		curClient.fetch(
			`*[_type == "post" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
			{slug}
		),
	]);
	return {post, morePosts: getUniquePosts(morePosts)};
}
