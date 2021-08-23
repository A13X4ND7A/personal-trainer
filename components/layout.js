import Footer from '../components/Footer/Footer';
import Navbar from './Navbar/Navbar';
import Meta from '../components/meta'

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
