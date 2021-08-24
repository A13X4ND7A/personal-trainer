import Link from 'next/link';
import {MenuData} from './menudata';

const NavbarLinks = () => {
	return (
		<>
			<ul className='flex flex-col md:items-end 2xl:px-72'>
				{/* Maps through the data file and outputs the menu based upon the data in the file. */}
				{MenuData.map((item, index) => {
					return (
						<li key={index} className={item.cName}>
							<Link href={item.path}>
								<a className='text-lg w-11/12 h-full flex items-center py-4 lg:text-6xl mb-4 font-thin uppercase '>
									<span className='block text-primary-default mr-2 lg:text-4xl lg:mr-6'>{item.icon}</span>
									{item.title}
								</a>
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default NavbarLinks;
