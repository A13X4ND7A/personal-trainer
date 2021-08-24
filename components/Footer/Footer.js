import SocialMedia from './SocialMedia';
import Copyright from './Copyright';

const Footer = () => {
	return (
		<footer className='px-12 py-8 font-trade flex flex-row items-center justify-between text-primary-default'>
			<Copyright />
			<SocialMedia />
		</footer>
	);
};

export default Footer;
