import Footer from './footer/footer';
import Navbar from './navbar/navbar';
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
