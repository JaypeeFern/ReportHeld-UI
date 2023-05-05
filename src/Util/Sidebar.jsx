import React from 'react';
import { NavLink } from 'react-router-dom';
import { views } from '../views';
import { Tooltip } from '@chakra-ui/react';

function isActive({ isActive }) {
	return isActive ? 'active' : null;
}

function SidebarButton({ name, icon, link, borderBottom, radiusTr, radiusBr }) {
	return (
		<Tooltip label={name} hasArrow placement="right" rounded="5px" bg="#0284c7" w="125px" className="flex items-center justify-center text-center">
			<NavLink to={link} className={`flex justify-center items-center text-white hover:bg-sky-700 h-16 xl:h-20 ${borderBottom} ${radiusTr} ${radiusBr} border-slate-700 border-opacity-40`}>
				{icon}
			</NavLink>
		</Tooltip>
	);
}

export default function Sidebar() {
	const viewsArray = Object.entries(views);
	const renderViews = viewsArray.map(([key, value]) => (
		<SidebarButton
			key={key}
			name={value.name}
			icon={value.icon}
			link={value.path == '' ? '?' : value.path}
			borderBottom={value.borderBottom ? 'border-b-2' : ''}
			radiusTr={value.radiusTr ? 'rounded-tr-xl' : ''}
			radiusBr={value.radiusBr ? 'rounded-br-xl ' : ''}
		/>
	));

	return <div className="flex flex-col w-20 rounded-tr-xl rounded-br-xl bg-sky-600 me-7">{renderViews}</div>;
}
