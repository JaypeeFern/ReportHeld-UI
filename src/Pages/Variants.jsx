import React from 'react';
import { Box, Divider, Text, Flex, Grid, Input, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Button, HStack, VStack, Select, Textarea, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Tag } from '@chakra-ui/react';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronLeft, mdiChartSankeyVariant, mdiCheck, mdiClose, mdiAlert } from '@mdi/js';
import { useTable, usePagination, useGlobalFilter, useSortBy, useFilters } from 'react-table';
import { faker } from '@faker-js/faker/locale/en';

export default function Variants({ show, handleHide }) {
	const generateRandomData = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push({
				defaultname: faker.company.name(),
				enname: faker.name.firstName(),
				dename: faker.name.lastName(),
				inuse: (
					<Flex justify="center">
						<Icon path={i % 2 ? mdiCheck : mdiClose} size={1} />
					</Flex>
				)
			});
		}
		return data;
	};

	const data = React.useMemo(() => generateRandomData(100), []); // Call the function to generate random data
	const columns = React.useMemo(
		() => [
			{ Headers: 'Default Name', accessor: 'defaultname' },
			{ Headers: 'EN Name', accessor: 'enname' },
			{ Headers: 'DE Name', accessor: 'dename' },
			{ Headers: 'In Use', accessor: 'inuse' }
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
	const { pageIndex, globalFilter } = state;

	return (
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
						<Flex direction="column" px={7} py={5}>
							<Flex gap={2} direction="column" alignItems="center" w={200} mb={4}>
								<Icon path={mdiAlert} size={2.5} color="#E86B6B" />
								<Text color="whiteAlpha.700" fontSize="sm" className="text-justify">
									The template name <mark className="text-red-300 bg-transparent">will be replaced by the name of the protocol variant,</mark> so please make sure to select a template-specific name.
								</Text>
								<Divider mt={2} p={0} />
							</Flex>
							<Grid templateColumns="repeat(1, 200px)" gap={4} mb={3}>
								<Box>
									<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
										Name Default
									</Text>
									<Input rounded="md" size="sm" bg="gray.400" border={0} focusBorderColor="#0288d1" />
								</Box>
								<Box>
									<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
										Name English
									</Text>
									<Input rounded="md" size="sm" bg="gray.400" border={0} focusBorderColor="#0288d1" type="password" />
								</Box>
								<Box>
									<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
										Name German
									</Text>
									<Input rounded="md" size="sm" bg="gray.400" border={0} focusBorderColor="#0288d1" />
								</Box>
							</Grid>
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
						<Icon path={mdiChartSankeyVariant} size={1} />
						<Text fontWeight="medium" fontSize="lg" className="p-2 rounded-lg text-gray-600">
							Variants
						</Text>
					</Flex>
					<Flex>
						<Input variant="filled" placeholder="Search" borderRadius="lg" value={globalFilter || ''} onChange={e => setGlobalFilter(e.target.value)} className="dropshadow-box-25" />
					</Flex>
				</HStack>
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
														<Td p={2} textAlign="center" tabIndex={0} {...cell.getCellProps()} className={`border-b border-slate-700 border-opacity-50 ${row.index % 2 ? 'opacity-40' : ''}`}>
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
