import Hero from '../components/hero';
import Programs from '../components/programs';

import Maps from '../components/maps/maps';
import Head from 'next/head';
import {getAllPostsForHome} from '../lib/api';
import MoreStories from '../components/more-stories';

export default function Index({allPosts}) {
	const morePosts = allPosts.slice(3);
	
	return (
		<>
		
				<Head>
					<title>Personal Trainer Blog Example</title>
				</Head>
				{/*--Hero section--*/}
				<Hero />
				{/*--Testimonial section--*/}
				{/* <Testimonial /> */}

				{/*--section for the programs--*/}
				<Programs />

				{/*--section for the blog--*/}
				<section>
			<h4 className='flex justify-center text-primary-dark md:text-lg lg:text-2xl font-tradeCondensed tracking-widest'>
				From My Blog
			</h4>
			<h2 className='text-darkCol uppercase text-2xl flex justify-center md:text-4xl lg:text-6xl font-thin'>
				Latest Articles
			</h2>
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}

			</section>

				{/*--section for the Maps--*/}
				<Maps />
		
		</>
	);
}

export async function getStaticProps({preview = false}) {
	const allPosts = await getAllPostsForHome(preview);
	return {
		props: {allPosts, preview},
		revalidate: 1,
	};
}
