import React from 'react';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiCloseBox, mdiChevronRight, mdiMapMarker, mdiSquareEditOutline, mdiTrashCan, mdiOpenInNew, mdiChevronLeft } from '@mdi/js';
import { Image, Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text, Flex, Grid, Input, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Button, HStack, VStack, Select } from '@chakra-ui/react';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import { toast } from 'react-toastify';
import { faker } from '@faker-js/faker/locale/en';

export default function Sites({ show, handleHide }) {
	const add = () =>
		toast.success('Succesfully added', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored'
		});
	const del = () =>
		toast.error('Sucessfully deleted', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored'
		});

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
				address: 'Freistaat Bayern',
				action: (
					<Box className="flex gap-3 justify-center">
						<Link to="/powerplants" className="bg-blue-500 hover:bg-blue-700 p-2 rounded-lg text-white font-semibold flex gap-1 items-center dropshadow-box-25 text-xs">
							Powerplants <Icon path={mdiOpenInNew} size={1} />{' '}
						</Link>
						<Link to="/edit-groups" className="bg-green-500 hover:bg-green-700 p-2 rounded-lg text-white font-semibold dropshadow-box-25 text-xs">
							{' '}
							<Icon path={mdiSquareEditOutline} size={1} />{' '}
						</Link>
						<Link onClick={del} className="bg-red-500 hover:bg-red-700 p-2 rounded-lg text-white font-semibold dropshadow-box-25 text-xs">
							{' '}
							<Icon path={mdiTrashCan} size={1} />{' '}
						</Link>
					</Box>
				)
			});
		}
		return data;
	};

	const data = React.useMemo(() => generateRandomData(100), []); // Call the function to generate random data

	const columns = React.useMemo(
		() => [
			{ Headers: '', accessor: 'image', disableSortBy: true },
			{ Headers: 'Name', accessor: 'name' },
			{ Headers: 'Address', accessor: 'address' },
			{ Headers: 'Action', accessor: 'action', disableSortBy: true }
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, gotoPage, canPreviousPage, canNextPage, pageOptions, state, setGlobalFilter, prepareRow } = useTable(
		{ columns, data, initialState: { pageIndex: 0 } },
		useGlobalFilter, // Use global filter hook
		useSortBy, // Use sort by hook
		usePagination // Use pagination hook
	);

	const { pageIndex, globalFilter } = state; // Get current state values

	return (
		<>
			{show && (
				<Box>
					<Flex gap={0} className="rounded-tl-lg rounded-bl-lg h-full w-full flex-col bg-zinc-600">
						<HStack py={1.5} px={4} className="justify-between rounded-tl-lg bg-black bg-opacity-30 h-16">
							<Flex gap={2}>
								<Button onClick={add} size="sm" colorScheme="green">
									Add Site
								</Button>
								<Button size="sm" colorScheme="red">
									Cancel
								</Button>
							</Flex>
							<Box onClick={handleHide} cursor="pointer">
								<Icon path={mdiChevronRight} size={1.5} className="text-red-400 hover:text-red-500 transition-all duration-150 ease-in-out" />
							</Box>
						</HStack>
						<Flex direction="column" px={7} py={5}>
							<Tabs size="sm" variant="unstyled">
								<TabList className="bg-slate-400 p-1 rounded-lg bg-opacity-30 text-white">
									<Tab className="rounded-lg" _selected={{ color: 'white', bg: '#01ABE9' }}>
										Site
									</Tab>
									<Tab className="rounded-lg" _selected={{ color: 'white', bg: '#01ABE9' }}>
										Address
									</Tab>
									<Tab className="rounded-lg" _selected={{ color: 'white', bg: '#01ABE9' }}>
										Responsibilities
									</Tab>
									<Tab className="rounded-lg" _selected={{ color: 'white', bg: '#01ABE9' }}>
										Image
									</Tab>
								</TabList>
								<TabPanels className="mt-5">
									<TabPanel>
										<Grid templateColumns="repeat(1)" gap={4}>
											<Box>
												<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
													Site Name
												</Text>
												<Input rounded="md" size="sm" bg="gray.400" border={0} focusBorderColor="#0288d1" />
											</Box>
											<Box>
												<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
													Abbreviation Name
												</Text>
												<Input rounded="md" size="sm" bg="gray.400" border={0} focusBorderColor="#0288d1" />
											</Box>
											<Box>
												<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
													Primary Group
												</Text>
												<Select placeholder="Select option" size="sm" bg="gray.400" rounded="md" border={0} focusBorderColor="#0288d1" type="text">
													<option value="option1">Option 1</option>
													<option value="option2">Option 2</option>
													<option value="option3">Option 3</option>
												</Select>
											</Box>
											<Box>
												<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
													Primary Language
												</Text>
												<Select placeholder="Select option" size="sm" bg="gray.400" rounded="md" border={0} focusBorderColor="#0288d1" type="text">
													<option value="option1">Option 1</option>
													<option value="option2">Option 2</option>
													<option value="option3">Option 3</option>
												</Select>
											</Box>
										</Grid>
									</TabPanel>
									<TabPanel>
										<p>two!</p>
									</TabPanel>
									<TabPanel>
										<p>three!</p>
									</TabPanel>
									<TabPanel>
										<p>four!</p>
									</TabPanel>
								</TabPanels>
							</Tabs>
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
						<Icon path={mdiMapMarker} size={1} />
						<Text fontWeight="medium" fontSize="lg" className="p-2 rounded-lg text-gray-600">
							Sites
						</Text>
					</Flex>
					<Flex>
						<Button colorScheme="red" bg="red.400">
							Fix Permission
						</Button>
					</Flex>
				</HStack>
				<Flex>
					<Input variant="filled" placeholder="Search" borderRadius="lg" value={globalFilter || ''} onChange={e => setGlobalFilter(e.target.value)} className="dropshadow-box-25" />
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
									<Flex alignItems='center' gap={2}>
										<Text fontSize={14} w={135}>Go to page: </Text>
										<Select
											value={pageIndex + 1}
											onChange={e => {
												const page = e.target.value ? Number(e.target.value) - 1 : 0;
												gotoPage(page);
											}}
											variant='solid'
											size='md'
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
	);
}
