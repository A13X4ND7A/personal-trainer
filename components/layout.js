import Footer from '../components/footer/footer';
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
