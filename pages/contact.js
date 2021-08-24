import {motion} from 'framer-motion';
import Maps from '../components/Maps/Maps';
import SocialMedia from '../components/Footer/SocialMedia';

const buttonVariants = {
	hover: {
		scale: 1.1,

		boxShadow: '0px 0px 8px rgb(0,0,0)',
		transition: {
			yoyo: 5,
		},
	},

	tap: {
		scale: 0.9,
		backgroundColor: '#d00c2a',
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


const contact = () => {
	return (
		<>
			<section className='bg-contact-bg bg-cover bg-center mb-8'>
				<div className='max-w-6xl flex content-center pt-20 pb-14 md:pt-36 md:pb-32 px-4'>
					<motion.h1
						variants={headerVariants}
						initial='initial'
						animate='animate'
						className='uppercase text-primary-default leading-5 md:text-4xl lg:text-6xl md:tracking-widest font-thin pt-8 md:ml-14 lg:ml-32 font-trade'>
						Get in touch!
					</motion.h1>
				</div>
			</section>
			<motion.h2
				variants={headerVariants}
				initial='initial'
				animate='animate'
				className='text-2xl lg:text-4xl mb-2 uppercase ml-4 lg:ml-32 font-tradeCondensed'>
				Contact Me...
			</motion.h2>
			<div className='grid grid-cols-1 md:grid-cols-2 container mx-auto px-2 md:px-0'>
				<section id='form'>
					{/* <h3 className='font-tradeCondensed text-lg tracking-wide pb-2'>Drop me a message:</h3> */}
					<div className=' flex bg-gray-bg1'>
						<div className='w-full bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16 mx-12 mb-4 md:mb-0'>
							<form className='font-trade'>
								<div>
									<label htmlFor='name'>Name</label>
									<input
										type='name'
										className='w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
										id='name'
										placeholder='Your Name'
									/>
								</div>
								<div>
									<label htmlFor='email'>Email</label>
									<input
										type='email'
										className='w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
										id='email'
										placeholder='Your Email'
									/>
								</div>
								<div>
									<label htmlFor='message'>Your Message</label>
									<textarea
										rows='5'
										cols='33'
										className='w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4'
										id='message'
										placeholder='Your Message'
									/>
								</div>

								<div className='mt-2'>
									<motion.button
										variants={buttonVariants}
										whileHover='hover'
										whileTap='tap'
										className='mx-auto bg-darkCol-default text-primary-default uppercase border-2 border-primary-default py-2 px-4 text-sm rounded-sm max-h-12 '>
										Get in Touch
									</motion.button>
								</div>
							</form>
						</div>
					</div>
				</section>
				<section>
					{/* <h3 className='font-tradeCondensed text-lg tracking-wide pb-2'>Or get in touch here:</h3> */}
					<SocialMedia />
					<div className='mt-4'>
						<Maps />
					</div>
				</section>
			</div>
		</>
	);
};

export default contact;
