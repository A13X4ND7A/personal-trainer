import Footer from './footer/footer';
import Navbar from './Navbar/Navbar';
import Meta from './meta'

export default function Layout({children}) {
	return (
	<>
    <Meta />
			<Navbar />
			{children}
			<Footer />
	</>
		
	);
}
