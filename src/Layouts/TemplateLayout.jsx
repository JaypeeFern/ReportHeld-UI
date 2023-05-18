import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiFormatSize, mdiBookEdit, mdiRoadVariant } from '@mdi/js';
import { Box, Text, Flex, Tooltip, Button, Grid, HStack, VStack, Center, Wrap, WrapItem, SimpleGrid } from '@chakra-ui/react';

export default function IndexLayout() {
	const location = useLocation();

	return (
		<>
			{location.pathname !== '/templates/template-editor' && location.pathname !== '/templates/template-variants' && location.pathname !== '/templates/template-advanced' && (
				<Box bg="gray.300" className={`rounded-lg flex flex-col gap-4 p-6 me-7 border border-opacity-50 border-slate-400 flex-grow`} width={200}>
					<HStack>
						<Flex className="table-header-color w-full ps-2 items-center rounded-lg dropshadow-box-25">
							<Icon path={mdiFormatSize} size={1} />
							{location.pathname === '/templates' && (
								<Text fontWeight="medium" fontSize="lg" className="p-2 rounded-lg text-gray-600">
									Templates
								</Text>
							)}
						</Flex>
					</HStack>
					{location.pathname !== '/templates/template-editor' && location.pathname !== '/templates/template-variants' && location.pathname !== '/templates/template-advanced' && (
						<Flex direction={'column'} h={'full'}>
							<SimpleGrid minChildWidth="400px" spacing={2} h={'full'} p={5}>
								<NavLink to="template-editor" className={'h-full'}>
									<Flex h={'full'} color={'white'} justify={'center'} alignItems={'center'} direction={'column'} bg="gray.400" _hover={{ bg: '#b7ee5b', color: '#374151' }} p={38} rounded={'md'} cursor={'pointer'} className="transition-all duration-300 ease-in-out">
										<Box mb={3} bg={'blackAlpha.500'} rounded={'full'} p={5}>
											<Box>
												<Icon path={mdiBookEdit} size={2.5} className="text-white text-opacity-90" />
											</Box>
										</Box>
										<Text fontSize={40} fontWeight={700}>
											Edit
										</Text>
										<Text fontSize={14} fontWeight={300} textAlign={'center'}>
											Editing templates involves modifying or improving the existing content of a pre-designed document, such as text, images, or formatting, to meet specific needs or preferences.
										</Text>
									</Flex>
								</NavLink>
								<NavLink to="template-variants" className={'h-full'}>
									<Flex h={'full'} color={'white'} justify={'center'} alignItems={'center'} direction={'column'} bg="gray.400" _hover={{ bg: '#b7ee5b', color: '#374151' }} p={38} rounded={'md'} cursor={'pointer'} className="transition-all duration-300 ease-in-out">
										<Box mb={3} bg={'blackAlpha.500'} rounded={'full'} p={5}>
											<Box>
												<Icon path={mdiRoadVariant} size={2.5} className="text-white text-opacity-90" />
											</Box>
										</Box>
										<Text fontSize={40} fontWeight={700}>
											Variants
										</Text>
										<Text fontSize={14} fontWeight={300} textAlign={'center'}>
											Variants of templates refer to different versions or variations of the same document, customized to cater to different users, purposes, or styles.
										</Text>
									</Flex>
								</NavLink>
								<NavLink to="template-advanced" className={'h-full'}>
									<Flex h={'full'} color={'white'} justify={'center'} alignItems={'center'} direction={'column'} bg="gray.400" _hover={{ bg: '#b7ee5b', color: '#374151' }} p={38} rounded={'md'} cursor={'pointer'} className="transition-all duration-300 ease-in-out">
										<Box mb={3} bg={'blackAlpha.500'} rounded={'full'} p={5}>
											<Box>
												<Icon path={mdiBookEdit} size={2.5} className="text-white text-opacity-90" />
											</Box>
										</Box>
										<Text fontSize={40} fontWeight={700}>
											Advanced Edit
										</Text>
										<Text fontSize={14} fontWeight={300} textAlign={'center'}>
											Advanced template editing involves extensive modifications to enhance the content and structure of pre-designed documents.
										</Text>
									</Flex>
								</NavLink>
							</SimpleGrid>
						</Flex>
					)}
					<Outlet />
				</Box>
			)}
			<Outlet />
		</>
	);
}

// {location.pathname !== '/templates/template-editor' && location.pathname !== '/templates/template-variants' && location.pathname !== '/templates/template-advanced' && (
// 	<Flex gap={5} flexDirection="column" bg="gray.300" className="w-full me-7 rounded-lg border border-opacity-50 border-slate-400 p-3">
// 		<Box>
// 			<Flex gap={2} p={2} rounded="md" className="table-header-color dropshadow-box-25">
// 				<Icon path={mdiFormatSize} size={1} />
// 				{location.pathname === '/templates' && (
// 					<Text fontWeight="medium" className="rounded-lg text-gray-600">
// 						Templates
// 					</Text>
// 				)}
// 			</Flex>
// 		</Box>
// 		{location.pathname !== '/templates/template-editor' && location.pathname !== '/templates/template-variants' && location.pathname !== '/templates/template-advanced' && (
// 			<Box className="flex-grow items-center" h="full">
// 				<Box gap={6} className="w-full h-full place-items-center grid xs:grid-cols-auto xl:grid-cols-2 2xl:grid-cols-3">
// 					<NavLink to="template-editor" className="w-full">
// 						<Button bg={'gray.400'} color={'white'} _hover={{ bg: '#b7ee5b', color: '#374151' }} w={'full'} p={40} className="dropshadow-box-25">
// 							<Flex direction={'column'} gap={2}>
// 								<Text fontSize={30}>Edit</Text>
// 								<Text fontSize={14} fontWeight={300}>
// 									Editing templates involves modifying or improving the existing content of a <br /> pre-designed document, such as text, images, or formatting, <br /> to meet specific needs or preferences.
// 								</Text>
// 							</Flex>
// 						</Button>
// 					</NavLink>
// 					<NavLink to="template-variants" className="w-full">
// 						<Button bg={'gray.400'} color={'white'} _hover={{ bg: '#b7ee5b', color: '#374151' }} w={'full'} p={40} className="dropshadow-box-25">
// 							<Flex direction={'column'} gap={2}>
// 								<Text fontSize={30}>Variants</Text>
// 								<Text fontSize={14} fontWeight={300}>
// 									Editing templates involves modifying or improving the existing content of a <br /> pre-designed document, such as text, images, or formatting, <br /> to meet specific needs or preferences.
// 								</Text>
// 							</Flex>
// 						</Button>
// 					</NavLink>
// 					<NavLink to="template-advanced" className="w-full">
// 						<Button bg={'gray.400'} color={'white'} _hover={{ bg: '#b7ee5b', color: '#374151' }} w={'full'} p={40} className="dropshadow-box-25">
// 							<Flex direction={'column'} gap={2}>
// 								<Text fontSize={30}>Advanced Edit</Text>
// 								<Text fontSize={14} fontWeight={300}>
// 									Editing templates involves modifying or improving the existing content of a <br /> pre-designed document, such as text, images, or formatting, <br /> to meet specific needs or preferences.
// 								</Text>
// 							</Flex>
// 						</Button>
// 					</NavLink>
// 				</Box>
// 			</Box>
// 		)}
// 	</Flex>
// )}
// <Outlet />
