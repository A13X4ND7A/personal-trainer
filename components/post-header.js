
import Date from '../components/date'

import {urlFor} from '../lib/sanity';
import {motion} from 'framer-motion';
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


export default function PostHeader({ title, coverImage, date }) {

  return (
    <>
      <div className='relative'>
									<div className='absolute h-full w-full flex items-center justify-center'>
										<div className='rounded p-12'>
											<motion.h2
												variants={headerVariants}
												initial='initial'
												animate='animate'
												className='text-2xl lg:text-6xl mb-4 font-thin uppercase bg-white bg-opacity-75 px-1 py-1 rounded'>
												{title}
											</motion.h2>
										</div>
									</div>
									<img
										src={urlFor(coverImage).url()}
										alt={title}
										className='w-full object-cover rounded-t'
										style={{height: '400px'}}
									/>
								</div>
                <span className='block uppercase text-sm px-16 lg:px-48 mt-4 font-bold'>
									<Date dateString={date} />
								</span>
                {/*Estimated reading time not working */}
								<span className='block font-thin uppercase text-sm px-16 lg:px-48 mt-1 '>
									{/* {estimatesReadingTime} Min Read */}
								</span>
    </>
  )
}
