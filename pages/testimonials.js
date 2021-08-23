import {getTestimonials} from '../lib/api';

import PostBody from '../components/post-body'
import {motion} from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

//for the list UL
const listVariants = {
	initial: {
		opacity: 1,
	},
	animate: {
		transition: {
			staggerChildren: 0.4,
		},
	},
};

//for the list items
const listItemVariants = {
	initial: {
		opacity: 0,
		y: '100vh',
	},
	animate: {
		opacity: 1,
		y: 0,
		delay: 0.5,
	},
};
const headerVariants = {
	initial: {
		y: '-100vh',
		opacity: 0,
	},
	animate: {
		opacity: 1,
		y: -10,
		transition: {
			type: 'spring',
			damping: 10,
			mass: 0.75,
			stiffness: 100,
			delay: 0.5,
		},
	},
};

const mainVariants = {
	initial: {
		x: '100vw',
		opacity: 0,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			damping: 10,
			mass: 0.75,
			stiffness: 100,
			delay: 0.5,
		},
	},
};

export default function Testimonials({allPosts}) {
return (
		<>
			 <section className='bg-testBg bg-cover bg-center mb-8'>
				<div className='max-w-6xl flex content-center pt-20 pb-14 md:pt-36 md:pb-32 px-4 md:px-20 lg:px-32'>
					<motion.h1
						variants={headerVariants}
						initial='initial'
						animate='animate'
						className='uppercase text-primary-default leading-5 md:text-4xl lg:text-6xl md:tracking-widest font-thin pt-8'>
						Testimonials
					</motion.h1>
				</div>
			</section>
			<ul className='font-trade'>
				<motion.h2
					variants={headerVariants}
					initial='initial'
					animate='animate'
					className='text-2xl lg:text-4xl mb-2 uppercase ml-4 lg:ml-32 font-tradeCondensed'>
					Read what others have to say...
				</motion.h2>
				{allPosts.map((testimonial) => (
						
							<li key={testimonial._id}>
								<div className='flex flex-row p-12 text-darkCol-default lg:max-w-2xl items-center mx-auto font-trade'>
									<span className='text-2xl text-darkCol-default block pr-4'>
										<FaIcons.FaQuoteLeft />
									</span>
									
									<div className='flex flex-col'>
										
										<PostBody className='text-darkCol-default prose lg:prose-xl' content={testimonial.testimonialText} />
										
										<span className='flex font-xs font-bold text-darkCol-default justify-end font-tradeCondensed tracking-wide'>
											{testimonial.clientName}
										</span>
									</div>
									<span className='text-2xl text-darkCol-default block pl-4'>
										<FaIcons.FaQuoteRight />
									</span>
								</div>
							</li> 
					
				))}
			</ul>
		</>
	);
}
export async function getStaticProps() {
	const allPosts = await getTestimonials();
	return {
		props: {allPosts},
		revalidate: 1,
	};
	
	
}
