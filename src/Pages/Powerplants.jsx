import React from 'react';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiChevronRight, mdiCloseBox, mdiSquareEditOutline, mdiTrashCan, mdiOpenInNew, mdiLightningBolt, mdiChevronLeft, mdiPlus } from '@mdi/js';
import { Image, Box, Divider, Img, Text, Flex, Grid, Input, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Button, HStack, VStack, Select, Textarea, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Tag, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { useTable, usePagination, useGlobalFilter, useSortBy, useFilters } from 'react-table';
import { faker } from '@faker-js/faker/locale/en';

export default function Powerplants({ show, handleHide }) {
	const generateRandomData = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push({
				image: (
					<Flex justify="center">
						<Image src={faker.image.business(100, 100, true)} rounded="md" />
					</Flex>
				),
				name: `Powerplant ${i}`,
				code: `PP${i}`,
				site: `PP${i}`,
				address: 'Freistaat Bayern',
				action: (
					<div className="flex gap-3 justify-center">
						<Link to="/protocols" className="bg-blue-500 hover:bg-blue-700 p-2 rounded-lg text-white font-semibold flex gap-1 items-center dropshadow-box-25 text-xs">
							Protocols <Icon path={mdiOpenInNew} size={1} />{' '}
						</Link>
						<Link to="/edit-groups" className="bg-green-500 hover:bg-green-700 p-2 rounded-lg text-white font-semibold dropshadow-box-25 text-xs">
							{' '}
							<Icon path={mdiSquareEditOutline} size={1} />{' '}
						</Link>
						<button className="bg-red-500 hover:bg-red-700 p-2 rounded-lg text-white font-semibold dropshadow-box-25 text-xs">
							{' '}
							<Icon path={mdiTrashCan} size={1} />{' '}
						</button>
					</div>
				)
			});
		}
		return data;
	};

	const data = React.useMemo(() => generateRandomData(100), []); // Call the function to generate random data

	const columns = React.useMemo(
		() => [
			{ Headers: '', accessor: 'image', disableSortBy: true },
			{ Headers: 'Name', accessor: 'name', Filter: SelectColumnFilter, filter: 'includes' },
			{ Headers: 'Code', accessor: 'code' },
			{ Headers: 'Site', accessor: 'site' },
			{ Headers: 'Address', accessor: 'address' },
			{ Headers: 'Action', accessor: 'action', disableSortBy: true }
		],
		[]
	);
	
	const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, gotoPage, canPreviousPage, canNextPage, pageOptions, state, setGlobalFilter, prepareRow } = useTable(
		{ columns, data, initialState: { pageIndex: 0 } },
		useGlobalFilter, // Use global filter hook
		useFilters, // Use filters hook
		useSortBy, // Use sort by hook
		usePagination // Use pagination hook
	);

	const { pageIndex, globalFilter } = state; // Get current state values

	function SelectColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
		const options = React.useMemo(() => {
			const options = new Set();
			preFilteredRows.forEach(row => {
				options.add(row.values[id]);
			});
			return [...options.values()];
		}, [id, preFilteredRows]);

		return (
			<div>
				{/* <label htmlFor={`filter-${id}`} className="block mb-2 text-gray-700">
					Filter by <span className="capitalize font-bold">{id}</span>
				</label> */}
				<Select
					id={`filter-${id}`}
					value={filterValue}
					onChange={e => {
						setFilter(e.target.value || undefined);
					}}
				>
					<option value="">All</option>
					{options.map((option, i) => (
						<option key={i} value={option}>
							{option}
						</option>
					))}
				</Select>
			</div>
		);
	}

	const [open, setOpen] = React.useState(true);
	function handleFilterShow() {
		setOpen(prevState => !prevState);
	}

	const [selectedFile, setSelectedFile] = React.useState(null);
	const [previewImageUrl, setPreviewImageUrl] = React.useState(null);

	const handleFileInputChange = event => {
		const file = event.target.files[0];
		setSelectedFile(file);
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewImageUrl(reader.result);
			};
			reader.readAsDataURL(file);
		} else {
			setPreviewImageUrl(null);
		}
	};

	const { isOpen, onOpen, onClose } = useDisclosure();
	const inputGenerator = (count, inputTitles, inputType) => {
		const inputElements = [];
		for (let i = 1; i <= count; i++) {
			const inputTitle = inputTitles[i - 1];
			inputElements.push(
				<Box key={i} className="flex flex-col gap-1 mb-3">
					<Text className="text-gray-700 text-xs font-bold">{inputTitle}</Text>
					<Input variant="flushed" borderBottom="1px" borderColor="blackAlpha.400" type={inputType} />
				</Box>
			);
		}
		return inputElements;
	};

	return (
		<>
			<>
				{show && (
					<Box>
						<Flex gap={0} className="rounded-tl-lg rounded-bl-lg h-full w-full flex-col bg-zinc-600">
							<HStack py={1.5} px={4} className="justify-between rounded-tl-lg bg-black bg-opacity-30 h-16">
								<Flex gap={2}>
									<Button size="sm" colorScheme="green">
										Save
									</Button>
									<Button size="sm" colorScheme="red">
										Cancel
									</Button>
								</Flex>
								<Box onClick={handleHide} cursor="pointer">
									<Icon path={mdiChevronRight} size={1.5} className="text-red-400 hover:text-red-500 transition-all duration-150 ease-in-out" />
								</Box>
							</HStack>
							<Flex direction="column" p={7}>
								<Grid templateColumns="repeat(2, 150px)" gap={4}>
									<Box>
										<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
											Name
										</Text>
										<Input rounded="md" size="sm" bg="gray.400" border={0} borderRight="2px" borderRightColor="red.500" focusBorderColor="#0288d1" />
									</Box>
									<Box>
										<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
											Code
										</Text>
										<Input rounded="md" size="sm" bg="gray.400" border={0} borderRight="2px" borderRightColor="red.500" focusBorderColor="#0288d1" />
									</Box>
								</Grid>
								<Divider mt={4} mb={3} />
								<Box>
									<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
										Site
									</Text>
									<Select placeholder="Select option" size="sm" bg="gray.400" rounded="md" border={0} focusBorderColor="#0288d1" type="text">
										<option value="option1">Option 1</option>
										<option value="option2">Option 2</option>
										<option value="option3">Option 3</option>
									</Select>
								</Box>
								<Divider mt={4} mb={3} />
								<Box mb={3}>
									<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
										Coordinates
									</Text>
									<Button bg="gray.400" w="full" fontSize="sm" color="blackAlpha.700" _hover={{ bg: '#c0f661', color: 'blackAlpha.800', transition: 'all 0.2s ease-in-out' }} _active={{ transform: 'scale(0.95)' }}>
										Set Coordinates
									</Button>
								</Box>
								{!previewImageUrl && (
									<Box position="relative" overflow="hidden">
										<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
											Image
										</Text>
										<Input type="file" onChange={handleFileInputChange} accept="image/*" position="absolute" top={35} left={0} opacity={0} cursor="pointer" />
										<Box bg="gray.400" p={2.5} rounded="md" textAlign="center" color="blackAlpha.700" fontWeight="semibold" fontSize="sm">
											Add
										</Box>
									</Box>
								)}
								{previewImageUrl && (
									<Box position="relative" w={315}>
										<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
											Image
										</Text>
										<Img src={previewImageUrl} w="full" rounded="md" />
										<Button p={70} opacity={80} bg="blackAlpha.300" size="md" _hover={{ bg: 'blackAlpha.600', opacity: 100 }} top="56%" left="50%" transform="translate(-50%, -50%)" position="absolute" onClick={() => setPreviewImageUrl(null)}>
											<Icon path={mdiTrashCan} size={4} className="text-white text-opacity-30 transition-opacity duration-300 ease-in-out" />
										</Button>
									</Box>
								)}
								<Box mt={3}>
									<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
										Responsibilities
									</Text>
									<Button onClick={onOpen} bg="gray.400" w="full" fontSize="sm" color="blackAlpha.700" _hover={{ bg: '#c0f661', color: 'blackAlpha.800', transition: 'all 0.2s ease-in-out' }} _active={{ transform: 'scale(0.95)' }}>
										Set Responsibilities
									</Button>
									<Modal isOpen={isOpen} onClose={onClose} size="6xl">
										<ModalOverlay bg="none" backdropFilter="auto" backdropBlur="4px" />
										<ModalContent className="m-3">
											<ModalHeader className="blue-swbt text-white font-bold rounded-tl-md rounded-tr-md">Responsibilities</ModalHeader>
											<ModalCloseButton className="text-white" />
											<ModalBody p="0" m="0" className="bg-slate-200 bg-opacity-60">
												<Box className="flex">
													<Box className="p-6 dropshadow-box-25 w-full">
														<Text className="font-semibold text-gray-700 text-center mb-6 text-lg">Responsibility</Text>
														<Box className="input-container gap-3 grid md:grid-cols-2 lg:grid-cols-2">{inputGenerator(11, ['Code', 'Name Default', 'English', 'German', 'Company', 'Last Name', 'First Name', 'Telephone', 'Cellular', 'Email', 'Link'], 'text')}</Box>
													</Box>
													<Box className="p-6 dropshadow-box-25 w-full">
														<Text className="font-semibold text-gray-700 text-center mb-6 text-lg">Address</Text>
														<Box className="input-container gap-3 grid">{inputGenerator(4, ['Street and No', 'Zip', 'City', 'Country'], 'text')}</Box>
													</Box>
													<Box className="p-6 dropshadow-box-25 w-full">
														<Text className="font-semibold text-gray-700 text-center mb-6 text-lg">Coordinates</Text>
														<Box className="input-container gap-3 grid">{inputGenerator(3, ['Latitude', 'Longitude', 'Other'], 'text')}</Box>
													</Box>
												</Box>
											</ModalBody>
										</ModalContent>
									</Modal>
								</Box>
							</Flex>
						</Flex>
					</Box>
				)}
				<Box bg="gray.300" className={`${show ? 'rounded-tr-lg rounded-br-lg' : 'rounded-lg'} flex flex-col gap-4 p-6 me-7 border border-opacity-50 border-slate-400 flex-grow`} width={200}>
					<HStack>
						{!show && (
							<Button bg="#b7ee5b" _hover={{ backgroundColor: '#99c74b' }} onClick={handleHide} className="dropshadow-box-25">
								<Icon path={mdiChevronLeft} size={1} />
							</Button>
						)}
						<Flex className="table-header-color w-full ps-2 items-center rounded-lg dropshadow-box-25">
							<Icon path={mdiLightningBolt} size={1} />
							<Text fontWeight="medium" fontSize="lg" className="p-2 rounded-lg text-gray-600">
								Powerplants
							</Text>
						</Flex>
					</HStack>
					<Flex gap={3}>
						<Flex flexGrow={1}>
							<Input variant="filled" placeholder="Search" borderRadius="lg" value={globalFilter || ''} onChange={e => setGlobalFilter(e.target.value)} className="dropshadow-box-25" />
						</Flex>
						{headerGroups.map(headerGroup => (
							<Box bg="whiteAlpha.700" rounded="md" {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column => (
									<Box key={column.id} className="flex gap-2">
										<Box className="">{column.id === 'name' ? <SelectColumnFilter column={column} setFilter={column.setFilter} /> : null}</Box>
									</Box>
								))}
							</Box>
						))}
					</Flex>
					<Box className="flex flex-col h-full">
						<Box className="h-full">
							<VStack className="h-full" spacing={0} flex={1}>
								<TableContainer backgroundColor="gray.200" className={`flex-grow border rounded-tl-lg rounded-tr-lg border-black border-opacity-30 h-full w-full`}>
									<Table {...getTableProps()} variant="unstyled" size="lg" className="h-full">
										<Thead className="table-header-color border-b border-black border-opacity-50">
											{headerGroups.map(headerGroup => (
												<Tr {...headerGroup.getHeaderGroupProps()} className="table-row">
													{headerGroup.headers.map(column => (
														<Th fontSize={14} textAlign="center" {...column.getHeaderProps(column.getSortByToggleProps())}>
															<Flex justifyContent="center" gap={2}>
																{column.render('Headers')}
																{column.isSorted ? ( // Add conditional check for showing sort direction
																	column.isSortedDesc ? (
																		<Text className="sort-icon ms">&#x25BC;</Text> // Downward arrow for descending sort
																	) : (
																		<Text className="sort-icon ms">&#x25B2;</Text> // Upward arrow for ascending sort
																	)
																) : (
																	''
																)}
															</Flex>
														</Th>
													))}
												</Tr>
											))}
										</Thead>
										<Tbody {...getTableBodyProps()}>
											{page.map(row => {
												prepareRow(row);
												return (
													<Tr {...row.getRowProps()} backgroundColor={row.index % 2 === 0 ? '#ECEBEA' : '#FEFDFD'} className="hover:bg-slate-300 cursor-pointer transition-all duration-150 ease-in-out">
														{row.cells.map(cell => (
															<Td p={2} textAlign="center" tabIndex={0} {...cell.getCellProps()} className="border-b border-slate-700 border-opacity-50">
																{cell.render('Cell')}
															</Td>
														))}
													</Tr>
												);
											})}
										</Tbody>
									</Table>
								</TableContainer>
								<Flex position="relative" gap={2} className="pagination-container flex gap-10 justify-center bg-gray-400 bg-opacity-50 p-3 rounded-bl-md rounded-br-md w-full border-l border-r border-b border-black border-opacity-20">
									<Button size="sm" bg="transparent" onClick={() => previousPage()} disabled={!canPreviousPage}>
										Previous
									</Button>
									<Text className="flex items-center">
										<strong>
											{pageIndex + 1} of {pageOptions.length}
										</strong>
									</Text>
									<Button size="sm" bg="transparent" onClick={() => nextPage()} disabled={!canNextPage}>
										Next
									</Button>
									<Flex alignItems="center" position="absolute" right={4} top={2} gap={2}>
										{/* <Text>Enter page: </Text>
									<Input
										type="number"
										defaultValue={pageIndex + 1}
										onChange={e => {
											const page = e.target.value ? Number(e.target.value) - 1 : 0;
											gotoPage(page);
										}}
										style={{ width: '50px' }}
									/> */}
										<Flex alignItems="center" gap={2}>
											<Text fontSize={14} w={135}>
												Go to page:{' '}
											</Text>
											<Select
												value={pageIndex + 1}
												onChange={e => {
													const page = e.target.value ? Number(e.target.value) - 1 : 0;
													gotoPage(page);
												}}
												variant="solid"
												size="md"
											>
												{pageOptions.map((page, i) => (
													<option key={i} value={i + 1}>
														{i + 1}
													</option>
												))}
											</Select>
										</Flex>
									</Flex>
								</Flex>
							</VStack>
						</Box>
					</Box>
				</Box>
			</>
		</>
	);
}
