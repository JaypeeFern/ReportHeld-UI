import React from 'react';
import { Box, Text, Flex, Input, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Button, HStack, VStack, Select, Textarea, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Tag } from '@chakra-ui/react';
import Icon from '@mdi/react';
import { mdiAccountMultiple, mdiSquareEditOutline, mdiChevronLeft, mdiCloseBox } from '@mdi/js';
import { Link } from 'react-router-dom';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';

export default function Groups({ show, handleHide }) {
	const generateRandomData = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push({
				groupname: `${i}@stadtwerke-bayreuth.de`,
				groupname_user: 'Admin GroupXS',
				firstname: `Admin ${i}`,
				lastname: 'GroupXS',
				primarygroup: 'Stadtwerke Bayreuth Administration',
				email: '',
				action: (
					<div className="flex gap-3 justify-center">
						<Link to="/edit-groups" className="bg-green-500 hover:bg-green-700 p-2 rounded-lg text-white font-semibold dropshadow-box-25 text-xs">
							{' '}
							<Icon path={mdiSquareEditOutline} size={1} />{' '}
						</Link>
					</div>
				)
			});
		}
		return data;
	};

	const data = React.useMemo(() => generateRandomData(100), []); // Call the function to generate random data
	const columns = React.useMemo(() => [{ Headers: 'Group', accessor: 'groupname' }], []);
	const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canPreviousPage, canNextPage, pageOptions, state, setGlobalFilter, prepareRow } = useTable(
		{ columns, data },
		useGlobalFilter, // Use global filter hook
		useSortBy, // Use sort by hook
		usePagination // Use pagination hook
	);
	const { pageIndex, globalFilter } = state; // Get current state values

	const { isOpen, onOpen, onClose } = useDisclosure();

	const drawerData = (drawerHeader = [], drawerCells = []) => {
		const data = (
			<Table variant="simple">
				{drawerHeader.length > 0 && (
					<Thead>
						<Tr>
							{drawerHeader.map((headerText, index) => (
								<Th key={index}>{headerText}</Th>
							))}
						</Tr>
					</Thead>
				)}
				<Tbody>
					{drawerCells.map((row, rowIndex) => (
						<Tr key={rowIndex}>
							{row.map((cell, cellIndex) => (
								<Td key={cellIndex}>{cell}</Td>
							))}
						</Tr>
					))}
				</Tbody>
				{drawerHeader.length > 0 && (
					<Tfoot>
						<Tr>
							{drawerHeader.map((headerText, index) => (
								<Th key={index}>{headerText}</Th>
							))}
						</Tr>
					</Tfoot>
				)}
			</Table>
		);
		return data;
	};

	const headerData = ['Username', 'First Name', 'Last Name', 'Primary Group', 'Email'];
	const cellData = [
		['swbt-admin', 'Admin', 'GroupXS', 'Stadtwerke Bayreuth Administration', ''],
		["jdoe", "John", "Doe", "Admins", "jdoe@example.com"],
		["msmith", "Mary", "Smith", "Users", "msmith@example.com"],
		["rjohnson", "Robert", "Johnson", "Users", null],
		["tlee", "Tina", "Lee", "Managers", "tlee@example.com"],
		["jwang", "Jennifer", "Wang", "Managers", "jwang@example.com"],
		["bchen", "Brian", "Chen", "Users", "bchen@example.com"],
		["cwilliams", "Charles", "Williams", "Admins", "cwilliams@example.com"],
		["ksmith", "Kevin", "Smith", "Users", null],
		["jchen", "Jessica", "Chen", "Managers", "jchen@example.com"],
		["msmith", "Michael", "Smith", "Admins", "msmith@example.com"],,
	];

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
								<Icon path={mdiCloseBox} size={1.8} className="text-red-500 hover:text-red-600 transition-all duration-150 ease-in-out" />
							</Box>
						</HStack>
						<Flex direction="column" p={7} gap={2}>
							<Box mb={3}>
								<Text textAlign="left" fontWeight="semibold" opacity={0.8} mb={1.5} className="text-white ">
									Name
								</Text>
								<Input bg="gray.400" border={0} focusBorderColor="#0288d1" />
							</Box>
							<Box mb={3}>
								<Text textAlign="left" fontWeight="semibold" opacity={0.8} mb={1.5} className="text-white ">
									Type
								</Text>
								<Select placeholder="Select option" bg="gray.400" border={0} focusBorderColor="#0288d1">
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</Select>
							</Box>
							<Box mb={3}>
								<Text textAlign="left" fontWeight="semibold" opacity={0.8} mb={1.5} className="text-white ">
									Description
								</Text>
								<Textarea placeholder="Enter Description" _placeholder={{ opacity: 0.5, color: 'black' }} bg="gray.400" border={0} focusBorderColor="#0288d1" />
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
						<Icon path={mdiAccountMultiple} size={1} />
						<Text fontWeight="medium" fontSize="lg" className="p-2 rounded-lg text-gray-600">
							Groups
						</Text>
					</Flex>
					<Flex>
						<Input variant="filled" placeholder="Search" borderRadius="lg" value={globalFilter || ''} onChange={e => setGlobalFilter(e.target.value)} className="dropshadow-box-25" />
					</Flex>
				</HStack>
				<Box className="flex flex-col h-full">
					<Flex justify="left" className="h-full">
						<VStack spacing={0} flex={1}>
							<TableContainer backgroundColor="gray.200" className={`flex-grow border rounded-tl-lg rounded-tr-lg border-black border-opacity-30 h-full w-full`}>
								<Table {...getTableProps()} variant="unstyled" size="lg" className="h-full">
									<Thead className="table-header-color border-b border-black border-opacity-50">
										{headerGroups.map(headerGroup => (
											<Tr {...headerGroup.getHeaderGroupProps()} className="table-row">
												{headerGroup.headers.map(column => (
													<Th fontSize={18} textAlign="center" {...column.getHeaderProps(column.getSortByToggleProps())} className="p-3">
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
														<Td p={2} textAlign="center" tabIndex={0} {...cell.getCellProps()} onClick={onOpen} className="focus:bg-gray-600 focus:bg-opacity-30 border-b border-slate-700 border-opacity-50">
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

						<Drawer placement="top" onClose={onClose} isOpen={isOpen}>
							<DrawerOverlay />
							<DrawerContent height='500px'>
								<DrawerHeader borderBottomWidth="1px">
									<Flex gap={3}>
										<Text fontWeight="light">Selected Group:</Text>
										<Text flex={1}>1@stadtwerke-bayreuth.de</Text>
										<Tag className="flex gap-2">
											<Text>Users:</Text>
											<Text fontWeight="bold">99</Text>
										</Tag>
										<Input size='sm' w={200} borderColor='blackAlpha.400' borderRadius={7} placeholder='Search'></Input>
									</Flex>
								</DrawerHeader>
								<DrawerBody>
									<TableContainer>{drawerData(headerData, cellData)}</TableContainer>
								</DrawerBody>
							</DrawerContent>
						</Drawer>

						{/* <Box flex={1} className=" bg-white border-t border-b border-r border-opacity-50 border-black" overflow="clip">
							<TableContainer>
								<Table className="table-header-color" size="lg" variant="simple">
									<Thead>
										<Tr>
											<Th>User Name</Th>
											<Th>First Name</Th>
											<Th>Last Name</Th>
											<Th>Primary Group</Th>
											<Th>Email</Th>
										</Tr>
									</Thead>
									<Tbody>
										<Tr></Tr>
									</Tbody>
								</Table>
							</TableContainer>
						</Box> */}
					</Flex>
				</Box>
			</Box>
		</>
	);
}
