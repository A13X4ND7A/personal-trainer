import {getTestimonials} from '../../lib/api';
import PostBody from '../../components/post-body'
import * as FaIcons from 'react-icons/fa';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import {Carousel} from 'react-responsive-carousel';

export default function Testimonial({allPosts}) {
	console.log('the posts are' + allPosts);
	
	return (
		<>
			<section className='flex flex-col bg-testimonial-image bg-cover bg-no-repeat bg-right-top h-testimonial'>
				<div className='h-full w-full bg-black bg-opacity-50 bg-cover'>
					<h4 className='flex justify-center text-primary-default mt-28 -ml-6 md:text-lg lg:text-2xl font-tradeCondensed tracking-widest'>
						What My Clients Say
					</h4>
					<h2 className='text-gray-300 uppercase text-2xl flex justify-center -ml-6 md:text-4xl lg:text-6xl font-thin'>
						Testimonials
					</h2>
					{/*Carousel options to get it to automatically move on the page*/}
					<Carousel
					showArrows={false}
						infiniteLoop={true}
						showThumbs={false}
						showStatus={false}
						autoPlay={true}
						showIndicators={false}
						interval={7000}>
						
		
					</Carousel>
				</div>
			</section>
		</>
	);
}
export async function getStaticProps() {
	const allPosts = await getTestimonials();
	console.log('hello world');
	return {
		props: {allPosts},
		revalidate: 1,
		
	};
	
	
}
