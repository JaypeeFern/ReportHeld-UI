import React from 'react';
import { NavLink } from 'react-router-dom';
import { views } from '../views';
import { Tooltip, Box, Button, Flex } from '@chakra-ui/react';

function isActive({ isActive }) {
	return isActive ? 'active' : null;
}

function CollapsedSidebarButton({ name, icon, link, borderBottom, radiusTr, radiusBr, hidden }) {
	return (
		<Tooltip label={name} hasArrow placement="right" rounded="5px" bg="#0284c7" w="125px" className="flex items-center justify-center text-center">
			<NavLink to={link} className={`${hidden} flex justify-center items-center text-white hover:bg-sky-700 h-16 xl:h-20 ${borderBottom} ${radiusTr} ${radiusBr} border-slate-700 border-opacity-40`}>
				{icon}
			</NavLink>
		</Tooltip>
	);
}

function ExpandedSidebarButton({ name, icon, link, borderBottom, radiusTr, radiusBr, display }) {
	return (
		<Button display={display} w={'full'} fontSize={10} as={NavLink} to={link} bg={'#0284c7'} color={'white'} _hover={{ bg: '#016ca6' }} rounded={'none'} roundedTopRight={radiusTr} roundedBottomRight={radiusBr} borderBottom={borderBottom} borderColor={'blackAlpha.400'} h={16}>
			<Flex w={'full'} h={'full'} justify={'start'} alignItems={'center'} gap={2}>
				<Box>{icon}</Box>
				<Box>{name}</Box>
			</Flex>
		</Button>
	);
}

export default function Sidebar({ menuState, handleMenuState }) {
	const viewsArray = Object.entries(views);
	const renderCollapsedViews = viewsArray.map(([key, value]) => <CollapsedSidebarButton key={key} name={value.name} icon={value.icon} link={value.path == '' ? '?' : value.path} borderBottom={value.borderBottom ? 'border-b-2' : ''} radiusTr={value.radiusTr ? 'rounded-tr-xl' : ''} radiusBr={value.radiusBr ? 'rounded-br-xl ' : ''} hidden={value.hidden ? 'hidden' : ''} />);
	const renderExpandedViews = viewsArray.map(([key, value]) => <ExpandedSidebarButton key={key} name={value.name} icon={value.icon} link={value.path == '' ? '?' : value.path} borderBottom={value.borderBottom ? '1px' : ''} radiusTr={value.radiusTr ? 'lg' : ''} radiusBr={value.radiusBr ? 'lg' : ''} display={value.hidden ? 'none' : ''} />);

	return (
		<>
			{!menuState && <Box className="flex flex-col w-20 rounded-tr-xl rounded-br-xl bg-sky-600 me-5">{renderCollapsedViews}</Box>}
			{menuState && <Box className="flex flex-col w-44 rounded-tr-xl rounded-br-xl bg-sky-600 me-5">{renderExpandedViews}</Box>}
		</>
	);
}
