import React from 'react';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiChevronRight, mdiMenu, mdiPlus, mdiImport, mdiNewBox, mdiFormatSize, mdiCloseThick, mdiCheckBold } from '@mdi/js';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Switch, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Flex, Grid, Input, Text, Button, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, IconButton } from '@chakra-ui/react';

export default function TemplateEditor() {
	const generateRandomData = (count, templateHeader = [], templateName, templateItems, templateProtocols, templateStatusClose, templateStatusOpen, templateGroup) => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push(
				<AccordionItem key={i}>
					<h2>
						<AccordionButton _expanded={{ bg: '#52525b', color: 'white' }}>
							<Box as="span" flex="1" textAlign="left" p={2}>
								{templateHeader[i - 1]}
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel padding={0}>
						<div className="table-container flex flex-col text-center">
							<div className=" bg-gray-400 bg-opacity-40 cursor-pointer hover:bg-gray-500 hover:bg-opacity-30 p-3 grid grid-cols-6 place-items-center text-sm relative">
								<span>{templateName}</span>
								<span>{templateItems}</span>
								<span>{templateProtocols}</span>
								<span>{i % 2 === 0 ? templateStatusClose : templateStatusOpen}</span>
								<span>{templateGroup}</span>
								<button className="bg-green-600 hover:bg-green-700 text-white font-semibold p-2 w-full">New Version</button>
							</div>
						</div>
					</AccordionPanel>
				</AccordionItem>
			);
		}
		return data;
	};

	return (
		<>
			{/* <div className="bg-zinc-600 rounded-tl-xl rounded-bl-xl pt-8">
				<div className="h-16 rounded-tl-xl">
					<div className="input py-5 px-7 flex flex-col gap-6">
						<button className="bg-lime-400 p-5 rounded-md hover:bg-lime-500 shadow-lg font-semibold text-gray-600">Create Protocol Template</button>
						<button className="bg-lime-400 p-5 rounded-md hover:bg-lime-500 shadow-lg font-semibold text-gray-600">Import Protocol Template</button>
						<button className="bg-lime-400 p-5 rounded-md hover:bg-lime-500 shadow-lg font-semibold text-gray-600">Import New Protocol Template</button>
					</div>
				</div>
			</div> */}

			<Box bg="gray.300" className="flex-grow me-7 rounded-md border border-slate-400 border-opacity-50 p-7">
				<Box className="w-full mb-4 gap-5">
					<Flex gap={2} alignItems="center">
						<Box flexGrow={1} className="table-header-color p-2 rounded-lg text-gray-600 font-sans text-lg dropshadow-box-25">
							<Box className="flex gap-1 items-center">
								<Icon path={mdiFormatSize} size={1} />
								{location.pathname !== '/templates' && (
									<Box className="flex gap-1 items-center ">
										<Breadcrumb separator={<Icon path={mdiChevronRight} size={1} />}>
											<BreadcrumbItem>
												<Link to="/templates" className="hover:underline">
													Templates
												</Link>
											</BreadcrumbItem>
											<BreadcrumbItem>
												<BreadcrumbLink>Edit</BreadcrumbLink>
											</BreadcrumbItem>
										</Breadcrumb>
									</Box>
								)}
							</Box>
						</Box>
						<Box className='dropshadow-box-25' rounded='md'> 
							<Menu>
								<MenuButton as={IconButton} icon={<Icon path={mdiMenu} size={1} />} _active={{bg: 'whiteAlpha.600'}} h={43}>
									Actions
								</MenuButton>
								<MenuList>
									<MenuItem _hover={{bg: 'gray.200'}} icon={<Icon path={mdiPlus} size={1} />}>Create Protocol Template</MenuItem>
									<MenuItem _hover={{bg: 'gray.200'}} icon={<Icon path={mdiImport} size={1} />}>Import Protocol Template</MenuItem>
									<MenuItem _hover={{bg: 'gray.200'}} icon={<Icon path={mdiNewBox} size={1} />}>Import New Protocol Template</MenuItem>
								</MenuList>
							</Menu>
						</Box>
					</Flex>
					<Box className="flex items-center mt-4 gap-3" >
						<Flex w="full" direction="row" gap={3}>
							<Box className="input flex-grow">
								<Input w="full" bg="whiteAlpha.600" className="p-2 rounded-lg dropshadow-box-25" type="text" placeholder=" Search by name..." />
							</Box>
							<Box className="switch flex items-center justify-center gap-2 bg-gray-200 rounded-lg h-10 px-5">
								<Text className="font-semibold opacity-80">Only Available</Text>
								<Text>|</Text>
								<Switch id="group" size="md" />
							</Box>
						</Flex>
					</Box>
				</Box>
				<Box className="accordion ">
					<Accordion allowMultiple className="  w-full bg-gray-400 bg-opacity-40">
						{generateRandomData(8, ['Base Job Template', 'Gas', 'Gas und Wasser', 'Netzleitstelle', 'SNH', 'Strom', 'Unassigned', 'Wasser'], 'Template Name', 'Template Items', 'Template Protocols', <Icon path={mdiCheckBold} size={1} className="text-green-600" />, <Icon path={mdiCloseThick} size={1} className="text-red-600" />, 'Template Group')}
					</Accordion>
				</Box>
			</Box>
		</>
	);
}
