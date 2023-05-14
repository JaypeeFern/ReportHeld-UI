import React from 'react';
import Icon from '@mdi/react';
import { mdiTrashCan, mdiLockOpenVariant, mdiFilterMenu, mdiFilterMinus, mdiFormatListChecks, mdiLock, mdiLockOpen } from '@mdi/js';
import { Box, Divider, Text, Flex, Grid, Input, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Button, HStack, VStack, Select, Textarea, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Tag } from '@chakra-ui/react';
import { useTable, usePagination, useGlobalFilter, useSortBy, useFilters } from 'react-table';

export default function Protocols() {
	const generateRandomData = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push({
				location: `Location ${i}`,
				name: `Name ${i}`,
				basedOn: `Based on ${i}`,
				date: '00.00.0000',
				owner: 'John Paul',
				status: (
					<Flex justifyContent="center">
						<Icon path={i % 2 ? mdiLockOpen : mdiLockOpenVariant} className={`${i % 2 ? 'opacity-100' : 'opacity-50'}`} size={1} />
					</Flex>
				),
				action: (
					<div className="flex gap-3 justify-center">
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
			{ Headers: 'Location', accessor: 'location' },
			{ Headers: 'Name', accessor: 'name', Filter: SelectColumnFilter, filter: 'includes' },
			{ Headers: 'Based On', accessor: 'basedOn' },
			{ Headers: 'Date', accessor: 'date' },
			{ Headers: 'Owner', accessor: 'owner' },
			{ Headers: 'Status', accessor: 'status' },
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
				<label htmlFor={`filter-${id}`} className="block mb-2 text-gray-700">
					Filter by <span className="capitalize font-bold">{id}</span>
				</label>
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

	const [open, setOpen] = React.useState(false);
	function handleFilterShow() {
		setOpen(prevState => !prevState);
	}

	return (
		<>
			<Box bg="gray.300" className={`rounded-lg flex flex-col gap-4 p-6 me-7 border border-opacity-50 border-slate-400 flex-grow`} width={200}>
				<HStack>
					<Flex className={`table-header-color w-full ps-2 items-center ${open ? 'rounded-tl-md rounded-tr-md' : 'rounded-md dropshadow-box-25'}`}>
						<Icon path={mdiFormatListChecks} size={1} />
						<Text fontWeight="medium" fontSize="lg" className="p-2 rounded-lg text-gray-600">
							Protocols
						</Text>
					</Flex>
					<Flex position="relative">
						<Input _hover={{ opacity: 1 }} _focus={{ bg: 'whiteAlpha.700' }} focusBorderColor="transparent" variant="filled" placeholder="Search" value={globalFilter || ''} onChange={e => setGlobalFilter(e.target.value)} borderRadius={open ? '' : 'md'} borderTopLeftRadius={open ? 'md' : ''} borderTopRightRadius={open ? 'md' : ''} className={`${open ? '' : 'dropshadow-box-25'}`} />
						<Button onClick={handleFilterShow} position="absolute" right={0}>
							<Icon path={open ? mdiFilterMinus : mdiFilterMenu} size={1} className={open ? 'opacity-50' : 'opacity-100'} />
						</Button>
					</Flex>
				</HStack>
				{open && (
					<Flex bg="blackAlpha.200" py={5} px={6} mt={-4} roundedBottomLeft="md" roundedBottomRight="md" className="dropshadow-box-25">
						{headerGroups.map(headerGroup => (
							<Box {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column => (
									<Box key={column.id} className="flex gap-2">
										<Box className="">{column.id === 'name' ? <SelectColumnFilter column={column} setFilter={column.setFilter} /> : null}</Box>
									</Box>
								))}
							</Box>
						))}
					</Flex>
				)}

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
														<Td p={2} textAlign="center" tabIndex={0} {...cell.getCellProps()} className={`${row.index % 2 ? 'opacity-50' : 'opacity-100'} border-b border-slate-700 border-opacity-50`}>
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
	);
}
