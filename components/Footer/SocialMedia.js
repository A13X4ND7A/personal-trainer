import * as FaIcons from 'react-icons/fa';

const SocialMedia = () => {
	return (
		<div className='items-center flex text-primary-default text-4xl cursor-pointer '>
			<FaIcons.FaFacebookF />
			<FaIcons.FaTwitter className='mx-2' />
			<FaIcons.FaInstagram />
		</div>
	);
};

export default SocialMedia;
