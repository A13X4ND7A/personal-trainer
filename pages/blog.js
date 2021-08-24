import {getAllPostsForHome} from '../lib/api';
import MoreStories from '../components/more-stories';
import {motion} from 'framer-motion';

export default function Blog({allPosts}) {
	const morePosts = allPosts.slice();

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
//for the buttons
	const buttonVariants = {
		hover: {
			scale: 1.1,
			boxShadow: '0px 0px 8px rgb(255,255,255)',
			transition: {
				yoyo: 5,
			},
		},

		tap: {
			scale: 0.9,
			backgroundColor: '#d00c2a',
		},
	};
	
	return (
		<>
			<section className='bg-about-bg bg-cover bg-center md:mb-8'>
				<div className='max-w-6xl flex content-center pt-20 pb-14 md:pt-36 md:pb-32 px-20 md:px-28 lg:px-36 font-trade'>
					<motion.h1
						variants={headerVariants}
						initial='initial'
						animate='animate'
						className='uppercase text-primary-default leading-5 md:text-4xl lg:text-6xl md:tracking-widest font-thin pt-8 lg:ml-32'>
						Blog
					</motion.h1>
				</div>
			</section>
			<section className='container mx-auto'>
				
				
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				
		</section>
     
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
