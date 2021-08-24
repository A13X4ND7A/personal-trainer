import Maps from '../components/Maps/Maps'
import Testimonial from '../components/Testimonials/Testimonial'
import Head from 'next/head';
import {getAllPostsForHome, getTestimonials} from '../lib/api';
import MoreStories from '../components/more-stories';
import Hero from '../components/Hero';
import Programs from '../components/Programs';

export default function Index({allPosts, testimonialPosts}) {
	const morePosts = allPosts.slice(3);
	
	return (
		<>
		
				<Head>
					<title>Personal Trainer Blog Example</title>
				</Head>
				{/*--Hero section--*/}
				<Hero />


				{/*--Testimonial section--*/}
				<Testimonial testimonials={testimonialPosts}/> 
	
				{/*--programs section--*/}
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
	const testimonialPosts = await getTestimonials();	
	const allPosts = await getAllPostsForHome(preview);
	return {
		props: {allPosts, preview, testimonialPosts},
		revalidate: 1,
	};
}

