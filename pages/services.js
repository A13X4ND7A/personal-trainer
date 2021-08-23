import Image from 'next/image';
import {getServices} from '../lib/api';
import {urlFor} from '../lib/sanity';
import PostBody from '../components/post-body'
import {motion} from 'framer-motion';




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

export default function Services({services}) {
	return (
		<>
			<section className='bg-testBg bg-cover bg-center mb-8'>
				<div className='max-w-6xl flex content-center pt-20 pb-14 md:pt-36 md:pb-32 px-4 md:px-20 lg:px-32'>
					<motion.h1
						variants={headerVariants}
						initial='initial'
						animate='animate'
						className='uppercase text-primary-default leading-5 md:text-4xl lg:text-6xl md:tracking-widest font-thin pt-8'>
						Services
					</motion.h1>
				</div>
			</section>
			<ul className=''>
				<motion.h2
					variants={headerVariants}
					initial='initial'
					animate='animate'
					className='text-2xl lg:text-4xl mb-2 uppercase ml-4 lg:ml-32 font-tradeCondensed'>
					What I offer...
				</motion.h2>
				{services.map((service) => (
						
							<li key={service._id}>
								<div className='container mx-auto'>
									<div className='relative'>
										<div className='absolute h-full w-full flex items-center justify-center'>
											<div className='rounded p-12'>
												<motion.h2
													variants={headerVariants}
													initial='initial'
													animate='animate'
													className='text-2xl lg:text-6xl mb-4 font-thin uppercase bg-white bg-opacity-75 px-1 py-1 rounded'>
													{service.title}
												</motion.h2>
											</div>
										</div>
										<img
											src={urlFor(service.mainImage).url()}
											alt={service.title}
											className='w-full object-cover rounded-t'
											style={{height: '400px'}}
										/>
									</div>

									<motion.div
										className='px-4 pb-12 pt-2 font-trade prose lg:prose-xl'
										variants={mainVariants}
										initial='initial'
										animate='animate'>
										<PostBody className='text-darkCol-default prose lg:prose-xl' content={service.servicesText} />
									</motion.div>
								</div>
							</li>
				))}
			</ul>
		</>
	);
}

export async function getStaticProps() {
	const services = await getServices();
	return {
		props: {services},
		revalidate: 1,
	};
	console.log(services)
	
	
}