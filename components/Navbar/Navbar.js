import {useState} from 'react';
import NavbarLinks from './navbarlinks';
import {IconContext} from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import Logo from './logo';

const Navbar = () => {
	//state for the hamburger menu
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			{/* Hamburger menu icon */}
			<IconContext.Provider value={'#acb7c1'}>
				<div className='flex fixed items-center justify-between h-16 top-0 px-4 mx-auto text-primary-default z-10 w-screen py-2 md:h-24 2xl:px-72 mb-16 bg-darkCol-default md:bg-transparent shadow-2xl md:shadow-none'>
					<Logo />
					{/* button for the sidebar. On click opens the sidebar ul */}
					<button className='flex items-end text-2xl px-12' onClick={showSidebar}>
						<svg
							className='text-primary-lightest stroke-current'
							role='presentation'
							width='32'
							height='32'
							viewBox='0 0 32 32'
							title='Menu Icon'>
							<g strokeLinecap='round' strokeWidth='2'>
								<path
									d='M9 9.5h17M0 .5L26 .5M9 18.5L26 18.5'
									transform='translate(-325 -537) translate(325 537) translate(4 7)'></path>
							</g>
						</svg>
					</button>
				</div>

				{/* when Icon is clicked add the class nav-menu-active else just nav menu. If clicked, show the menu with a close icon at the top */}
				<div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
					<ul className='w-full flex flex-col px-8 md:px-12' onClick={showSidebar}>
						<button className='px-8 mt-7 text-2xl ml-auto text-primary-default flex items-end 2xl:px-72 lg:mb-8'>
							<AiIcons.AiOutlineClose />
						</button>

						{/* Navbar links imporrted from file */}
						<NavbarLinks />
					</ul>
				</div>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
