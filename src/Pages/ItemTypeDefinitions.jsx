import React from 'react';
import { Box, Text, Flex, Input, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, HStack, VStack } from '@chakra-ui/react';
import Icon from '@mdi/react';
import {mdiHelp, mdiCheck, mdiClose } from '@mdi/js';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';
import { faker } from '@faker-js/faker/locale/en';
import { Link } from 'react-router-dom';

export default function ItemTypeDefinitions() {
	const generateRandomData = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push({
				itemtype: `Type ${i}`,
				version: `${i}`,
				numberofprops: `${i}`,
				status: (
					<Flex justifyContent='center'>
						<Icon path={i % 2 ? mdiCheck : mdiClose} size={1} />
					</Flex>
				),
				action: (
					<div className="flex gap-3 justify-center">
						<Link to="" className={i % 5 ? 'bg-gray-500 hover:bg-gray-700 cursor-not-allowed p-2 rounded-lg text-white font-semibold dropshadow-box-25 text-xs' : 'bg-green-500 hover:bg-green-700 p-2 rounded-lg text-white font-semibold dropshadow-box-25 text-xs'}>
							{' '}
							{i % 5 ? 'Old Version' : 'New Version'}
						</Link>
					</div>
				)
			});
		}
		return data;
	};

	const data = React.useMemo(() => generateRandomData(100), []);
	const columns = React.useMemo(
		() => [
			{ Headers: 'Item Type', accessor: 'itemtype', disableSortBy: true },
			{ Headers: 'Version', accessor: 'version' },
			{ Headers: 'Number of Properties', accessor: 'numberofprops' },
			{ Headers: 'Available', accessor: 'status' },
			{ Headers: 'Version', accessor: 'action', disableSortBy: true }
		],
		[]
	);
	const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canPreviousPage, canNextPage, pageOptions, state, setGlobalFilter, prepareRow } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);
	const { pageIndex, globalFilter } = state;

	return (
		<>
			<Box bg="gray.300" className={`rounded-lg flex flex-col gap-4 p-6 me-7 border border-opacity-50 border-slate-400 flex-grow`} width={200}>
				<HStack>
					<Flex className="table-header-color w-full ps-2 items-center rounded-lg dropshadow-box-25">
						<Icon path={mdiHelp} size={1} />
						<Text fontWeight="medium" fontSize="lg" className="p-2 rounded-lg text-gray-600">
							Item Type Definitions
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
