import React from 'react';
import { Box, Text, Flex, Grid, Input, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Button, HStack, VStack, Select, Textarea, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Tag } from '@chakra-ui/react';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiAccountPlus, mdiChevronLeft, mdiCloseBox } from '@mdi/js';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import { faker } from '@faker-js/faker/locale/en';

export default function Users({ show, handleHide }) {
	const generateRandomData = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push({
				username: faker.internet.userName(),
				firstname: faker.name.firstName(),
				lastname: faker.name.lastName(),
				primarygroup: faker.company.name(),
				email: faker.internet.email(),
				phone: faker.phone.number('+6391########')
			});
		}
		return data;
	};

	const data = React.useMemo(() => generateRandomData(100), []); // Call the function to generate random data
	const columns = React.useMemo(
		() => [
			{ Headers: 'Username', accessor: 'username' },
			{ Headers: 'First Name', accessor: 'firstname' },
			{ Headers: 'Last Name', accessor: 'lastname' },
			{ Headers: 'Primary Group', accessor: 'primarygroup' },
			{ Headers: 'Email', accessor: 'email' },
			{ Headers: 'Phone', accessor: 'phone' }
		],
		[]
	);
	const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canPreviousPage, canNextPage, pageOptions, state, setGlobalFilter, prepareRow } = useTable(
		{ columns, data },
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
							<Grid templateColumns="repeat(2, 150px)" gap={4} mb={3}>
								<Box>
									<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
										Username
									</Text>
									<Input rounded="md" size="sm" bg="gray.400" border={0} borderRight="2px" borderRightColor="red.500" focusBorderColor="#0288d1" />
								</Box>
								<Box>
									<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
										Password
									</Text>
									<Input rounded="md" size="sm" bg="gray.400" border={0} borderRight="2px" borderRightColor="red.500" focusBorderColor="#0288d1" type="password" />
								</Box>
								<Box>
									<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
										First Name
									</Text>
									<Input rounded="md" size="sm" bg="gray.400" border={0} borderRight="2px" borderRightColor="red.500" focusBorderColor="#0288d1" />
								</Box>
								<Box>
									<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
										Last Name
									</Text>
									<Input rounded="md" size="sm" bg="gray.400" border={0} borderRight="2px" borderRightColor="red.500" focusBorderColor="#0288d1" type="password" />
								</Box>
								<Box>
									<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
										Date of Birth
									</Text>
									<Input rounded="md" size="sm" bg="gray.400" border={0} focusBorderColor="#0288d1" type="date" />
								</Box>
								<Box>
									<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
										Phone
									</Text>
									<Input rounded="md" size="sm" bg="gray.400" border={0} focusBorderColor="#0288d1" type="text" />
								</Box>
							</Grid>
							<Grid gap={4}>
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
										User Configuration Presets
									</Text>
									<Select placeholder="Select option" size="sm" bg="gray.400" rounded="md" border={0} focusBorderColor="#0288d1" type="text">
										<option value="option1">Option 1</option>
										<option value="option2">Option 2</option>
										<option value="option3">Option 3</option>
									</Select>
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
						<Icon path={mdiAccountPlus} size={1} />
						<Text fontWeight="medium" fontSize="lg" className="p-2 rounded-lg text-gray-600">
							User
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
							<Flex gap={2} className="pagination-container flex gap-10 justify-center bg-gray-400 bg-opacity-50 p-3 rounded-bl-md rounded-br-md w-full border-l border-r border-b border-black border-opacity-20">
								<Button size="sm" bg="transparent" onClick={() => previousPage()} disabled={!canPreviousPage}>
									Previous
								</Button>
								<Text className="flex items-center">
									{/* Page{' '} */}
									<strong>
										{pageIndex + 1} of {pageOptions.length}
									</strong>
								</Text>
								<Button size="sm" bg="transparent" onClick={() => nextPage()} disabled={!canNextPage}>
									Next
								</Button>
							</Flex>
						</VStack>
					</Box>
				</Box>
			</Box>
		</>
	);
}
