import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiFormatSize } from '@mdi/js';
import { Box, Text, Flex, Tooltip, Button, Grid } from '@chakra-ui/react';

export default function IndexLayout() {
	const location = useLocation();

	return (
		<>
			{location.pathname !== '/templates/template-editor' && location.pathname !== '/templates/template-variants' && location.pathname !== '/templates/template-advanced' && (
				<Flex gap={5} flexDirection="column" bg="gray.300" className="w-full me-7 rounded-lg border border-opacity-50 border-slate-400 p-7">
					<Box>
						<Flex gap={2} p={2} rounded="md" className="table-header-color dropshadow-box-25">
							<Icon path={mdiFormatSize} size={1} />
							{location.pathname === '/templates' && (
								<Text fontWeight="medium" className="rounded-lg text-gray-600">
									Templates
								</Text>
							)}
						</Flex>
					</Box>
					{location.pathname !== '/templates/template-editor' && location.pathname !== '/templates/template-variants' && location.pathname !== '/templates/template-advanced' && (
						<Box className="flex-grow items-center" h="full">
							<Box gap={6} className="w-full h-full place-items-center grid xs:grid-cols-auto xl:grid-cols-2 2xl:grid-cols-3">
								<NavLink to="template-editor" className="w-full">
									<button className="bg-gray-400 hover:bg-lime-300 w-full hover:text-gray-700  transition-all duration-300 bg-opacity-70 dropshadow-box-25 rounded-lg text-3xl p-36 text-white font-bold">Edit</button>
								</NavLink>
								<NavLink to="template-variants" className="w-full">
									<button className="bg-gray-400 hover:bg-lime-300 w-full hover:text-gray-700  transition-all duration-300 bg-opacity-70 dropshadow-box-25 rounded-lg text-3xl p-36 text-white font-bold">Variants</button>
								</NavLink>
								<NavLink to="template-advanced" className="w-full">
									<button className="bg-gray-400 hover:bg-lime-300 w-full hover:text-gray-700  transition-all duration-300 bg-opacity-70 dropshadow-box-25 rounded-lg text-3xl p-36 text-white font-bold">Advance Edit</button>
								</NavLink>
							</Box>
						</Box>
					)}
				</Flex>
			)}
			<Outlet />
		</>
	);
}
