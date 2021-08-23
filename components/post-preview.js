import Date from '../components/date';
import Link from 'next/link';
import {urlFor} from '../lib/sanity';
import {motion} from 'framer-motion';

const actionVariants = {
	hover: {
		scale: [1, 0.9, 1],
	},

	tap: {
		scale: 0.9,
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

export default function PostPreview({title, coverImage, date, slug}) {
	return (
		<>
			

			<Link as={`/posts/${slug}`} href='/posts/[slug]'>
				<motion.a variants={actionVariants} whileTap='tap' className='block'>
					<div className='relative p-2 shadow-lg rounded-lg bg-darkCol-default m-4'>
						<div className='absolute h-full w-full flex items-center justify-center'>
							<div className='rounded p-8'>
								<h1 className='lg:text-2xl mb-4 font-thin uppercase bg-white bg-opacity-75 px-1 py-1 rounded flex flex-col'>
									{title}
									<span className='text-xs flex justify-end'>
										<Date dateString={date} />
									</span>
								</h1>
								<motion.button
									variants={buttonVariants}
									whileHover='hover'
									whileTap='tap'
									className='flex mx-auto bg-darkCol-default text-primary-default uppercase border-2 border-primary-default py-2 px-4 text-xs mt-4 rounded-sm items-center justify-center absolute bottom-7 right-12'>
									Read Article
								</motion.button>
							</div>
						</div>
						<img
							src={urlFor(coverImage).url()}
							alt={title}
							className='w-full object-cover rounded-t'
							style={{height: '250px'}}
						/>
					</div>
				</motion.a>
			</Link>
		</>
	);
}
