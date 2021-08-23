import Footer from '../components/Footer/Footer';
import Navbar from './Navbar/Navbar';

export default function Layout({children}) {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}

