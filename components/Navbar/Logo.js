import LogoImage from '../../public/logo_full.svg';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
const logoVariants = {
	animate: {
		scale: [1, 0.5, 1],
	},
};

const Logo = () => {
	return (
		<div className='flex justify-start w-1/2 '>
			<Link href='/'>
				<a className='flex items-center text-primary-default'>
					<span className='md:hidden'>
						<Image
							className='text-primary-default mt-1'
							alt='Scott Thom Logo'
							src='/hand_logo.svg'
							width={60}
							height={50}
							quality='1'></Image>
					</span>
					<span className='hidden md:block'>
						<motion.svg
							className='max-w-156 min-w-156'
							id='Layer_2'
							data-name='Layer 2'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 184.13 104.78'>
							<motion.use href={`${LogoImage}#barbell_hand`} variants={logoVariants} animate='animate' />
							<motion.use href={`${LogoImage}#personal_trainer`} />
							<motion.use href={`${LogoImage}#Scott_Thom`} />
						</motion.svg>
					</span>
				</a>
			</Link>
		</div>
	);
};

export default Logo;
