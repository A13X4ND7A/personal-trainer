import Footer from '../components/Footer/Footer';
import Navbar from './Navbar/Navbar';

export default function Layout({preview, children}) {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}

