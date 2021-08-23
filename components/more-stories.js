import PostPreview from '../components/post-preview';
import {motion} from 'framer-motion';

//framer motion variants
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


export default function MoreStories({posts}) {
	return (
		
			<motion.ul
				variants={listVariants}
				initial='initial'
				animate={posts?.length > 0 && 'animate'} //check to see the post length and then animate each individual post
				className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
				{posts.map((post) => (
					<PostPreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage}
						date={post.date}
						slug={post.slug}
					/>
				))}
			</motion.ul>
		
	);
}
