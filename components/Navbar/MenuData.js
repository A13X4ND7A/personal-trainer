import react from 'react';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';

{
	/* Data for the main menu bar */
}
export const MenuData = [
	// {
	// 	title: 'home',
	// 	path: '/',
	// 	icon: <BiIcons.BiHome />,
	// 	cName: 'navText',
	// },
	{
		title: 'about',
		path: '/about',
		icon: <BsIcons.BsFillPersonLinesFill />,
		cName: 'navText',
	},
	{
		title: 'testimonials',
		path: '/testimonials',
		icon: <BsIcons.BsChatSquareQuote />,
		cName: 'navText',
	},
	{
		title: 'services',
		path: '/services',
		icon: <BiIcons.BiDumbbell />,
		cName: 'navText',
	},
	{
		title: 'blog',
		path: '/blog',
		icon: <BiIcons.BiNews />,
		cName: 'navText',
	},
	{
		title: 'contact',
		path: '/contact',
		icon: <BiIcons.BiConversation />,
		cName: 'navText',
	},
];
