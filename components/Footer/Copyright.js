import Logo from '../navbar/Logo';

const Copyright = () => {
	const getFullYear = new Date().getFullYear();

	return (
		<div className='flex items-center'>
			<span className='block'>&copy; {getFullYear} </span>
			<span className='md:hidden block px-2'>Scott Thom</span>
			<span className='hidden md:block px-2 -mt-6'>
				<Logo />
			</span>
		</div>
	);
};

export default Copyright;
