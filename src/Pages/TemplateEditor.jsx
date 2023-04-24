import React from 'react';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiChevronRight, mdiFormatSize, mdiCloseThick, mdiCheckBold } from '@mdi/js';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Switch, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';

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
							<div className=" bg-gray-400 bg-opacity-40 cursor-pointer hover:bg-gray-500 hover:bg-opacity-30 p-3 grid grid-cols-6 place-items-center text-xs relative">
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
			<div className="bg-zinc-600 rounded-tl-xl rounded-bl-xl pt-8">
				<div className="h-16 rounded-tl-xl">
					<div className="input py-5 px-7 flex flex-col gap-6">
						<button className="bg-lime-400 p-5 rounded-md hover:bg-lime-500 shadow-lg font-semibold text-gray-600">Create Protocol Template</button>
						<button className="bg-lime-400 p-5 rounded-md hover:bg-lime-500 shadow-lg font-semibold text-gray-600">Import Protocol Template</button>
						<button className="bg-lime-400 p-5 rounded-md hover:bg-lime-500 shadow-lg font-semibold text-gray-600">Import New Protocol Template</button>
					</div>
				</div>
			</div>

			<div className="flex-grow bg-gray-300 me-7 rounded-tr-xl rounded-br-xl border border-slate-400 p-7">
				<div className="w-full mb-4 gap-5">
					<div className="table-header-color p-2 rounded-lg text-gray-600 font-sans text-lg dropshadow-box-25">
						<div className="flex gap-1 items-center">
							<Icon path={mdiFormatSize} size={1} />
							{location.pathname !== '/templates' && (
								<div className="flex gap-1 items-center ">
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
								</div>
							)}
						</div>
					</div>
					<div className="flex items-center mt-4 gap-3">
						<div className="input flex-grow">
							<input className="p-2 rounded-lg dropshadow-box-25 w-full" type="text" placeholder=" Search by name..." />
						</div>
						<div className="switch flex items-center justify-center gap-2 bg-gray-200 rounded-lg h-10 px-5">
							<label className="font-semibold opacity-80">Only Available</label>
							<span>|</span>
							<Switch id="group" size="md" />
						</div>
					</div>
				</div>
				<div className="accordion relative">
					<Accordion allowToggle allowMultiple className="absolute  w-full bg-gray-400 bg-opacity-40">
						{generateRandomData(
							8,
							['Base Job Template', 'Gas', 'Gas und Wasser', 'Netzleitstelle', 'SNH', 'Strom', 'Unassigned', 'Wasser'],
							'Template Name',
							'Template Items',
							'Template Protocols',
							<Icon path={mdiCheckBold} size={1} className='text-green-600'/>,
							<Icon path={mdiCloseThick} size={1} className='text-red-600'/>,
							'Template Group'
						)}
					</Accordion>
				</div>
			</div>
		</>
	);
}
