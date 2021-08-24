import SocialMedia from './socialmedia';
import Copyright from './copyright';

const Footer = () => {
	return (
		<footer className='px-12 py-8 font-trade flex flex-row items-center justify-between text-primary-default'>
			<Copyright />
			<SocialMedia />
		</footer>
	);
};

export default Footer;
