import React from 'react';
import Icon from '@mdi/react';
import { mdiCloseBox, mdiAccountPlus, mdiChevronLeft } from '@mdi/js';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';

export default function User({ show, handleHide }) {
	const generateRandomData = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push({
				username: `User_${i}`,
				firstname: 'Test',
				lastname: 'User',
				primarygroup: 'SWBT',
				email: 'test@test.com',
				phone: '0000000000'
			});
		}
		return data;
	};

	const data = React.useMemo(() => generateRandomData(100), []); // Call the function to generate random data

	const columns = React.useMemo(
		() => [
			{ Header: 'Username', accessor: 'username' },
			{ Header: 'First Name', accessor: 'firstname' },
			{ Header: 'Last Name', accessor: 'lastname' },
			{ Header: 'Primary Group', accessor: 'primarygroup' },
			{ Header: 'Email', accessor: 'email' },
			{ Header: 'Phone', accessor: 'phone', disableSortBy: true }
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
				<div className="bg-zinc-600 rounded-tl-xl rounded-bl-xl">
					<div className="bg-black bg-opacity-30 h-16 rounded-tl-xl">
						<div className="flex justify-between items-center h-16 mx-3">
							<div className="left flex gap-2 ms-4">
								<button className="bg-green-500 hover:bg-green-700 rounded-lg font-semibold text-white p-2 text-sm w-20  dropshadow-box-25">Add User</button>
								<button className="bg-red-500 hover:bg-red-700 rounded-lg font-semibold text-white p-2 text-sm w-20 dropshadow-box-25">Cancel</button>
							</div>
							<div className="right flex gap-2 items-center">
								<button onClick={handleHide}>
									<Icon path={mdiCloseBox} size={1.5} color="#E86B6B" />
								</button>
							</div>
						</div>
						<div className="input py-5 px-12 flex flex-col gap-2">
							<div className="grid grid-cols-2 gap-2 w-80">
								<div className="flex flex-col gap-1 mb-3">
									<label className="text-white text-sm font-bold">Username</label>
									<input className="dropshadow-box-25 border border-slate-400 bg-gray-400 rounded-md p-2" type="text" />
								</div>
								<div className="flex flex-col gap-1 mb-3">
									<label className="text-white text-sm font-bold">Password</label>
									<input className="dropshadow-box-25 border border-slate-400 bg-gray-400 rounded-md p-2" type="password" />
								</div>
							</div>
							<div className="grid grid-cols-2 gap-2 w-80">
								<div className="flex flex-col gap-1 mb-3">
									<label className="text-white text-sm font-bold">First Name</label>
									<input className="dropshadow-box-25 border border-slate-400 bg-gray-400 rounded-md p-2" type="text" />
								</div>
								<div className="flex flex-col gap-1 mb-3">
									<label className="text-white text-sm font-bold">Last Name</label>
									<input className="dropshadow-box-25 border border-slate-400 bg-gray-400 rounded-md p-2" type="text" />
								</div>
							</div>
							<div className="flex flex-col gap-1 mb-3 w-full">
								<label className="text-white text-sm font-bold">Date of Birth</label>
								<input className="dropshadow-box-25 border border-slate-400 bg-gray-400 rounded-md p-2" type="date" />
							</div>
							<div className="grid grid-cols-2 gap-2 w-80">
								<div className="flex flex-col gap-1 mb-3">
									<label className="text-white text-sm font-bold">Email</label>
									<input className="dropshadow-box-25 border border-slate-400 bg-gray-400 rounded-md p-2" type="text" />
								</div>
								<div className="flex flex-col gap-1 mb-3">
									<label className="text-white text-sm font-bold">Phone</label>
									<input className="dropshadow-box-25 border border-slate-400 bg-gray-400 rounded-md p-2" type="text" />
								</div>
							</div>
							<div className="flex flex-col gap-1 mb-3">
								<label className="text-white text-sm font-bold">Primary Group</label>
								<select className="dropshadow-box-25 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
									<option value="option1">---</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</select>
							</div>
							<div className="flex flex-col gap-1 mb-3">
								<label className="text-white text-sm font-bold">User Configuration Presets</label>
								<select className="dropshadow-box-25 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
									<option value="option1">General User</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</select>
							</div>
							<div className="flex flex-col gap-1 mb-3">
								<label className="text-white text-sm font-bold">Groups</label>
								<select className="dropshadow-box-25 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
									<option value="option1">Just Alexander</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</select>
							</div>
							<div className="flex flex-col gap-1 mb-3">
								<button className="bg-lime-400 p-3 flex justify-center items-center rounded-lg text-gray-600 mt-3">Disable User</button>
							</div>
						</div>
					</div>
				</div>
			)}

			<div className={`flex-grow flex flex-col bg-gray-300 me-7 ${show ? 'rounded-tr-xl rounded-br-xl' : 'rounded-xl'} border border-slate-400 p-7`}>
				<div className="w-full flex mb-4 gap-5">
					{!show && (
						<div className="table-header-color flex items-center px-4 rounded-lg hover:bg-lime-400 hover:bg-opacity-80 dropshadow-box-25">
							<button onClick={handleHide}>
								<Icon path={mdiChevronLeft} size={1} />
							</button>
						</div>
					)}
					<div className="flex-grow table-header-color p-2 rounded-lg text-gray-600 font-sans text-lg dropshadow-box-25">
						<div className="flex gap-1 items-center">
							<Icon path={mdiAccountPlus} size={1} />
							<h1>Users</h1>
						</div>
					</div>
				</div>
				<div className="table-container h-full flex flex-col text-center">
					<input className="mb-4 p-2 rounded-lg dropshadow-box-25" type="text" value={globalFilter || ''} onChange={e => setGlobalFilter(e.target.value)} placeholder=" Search by name..." />
					{page.length === 0 ? (
						<div className="no-data-message my-16">No data available</div>
					) : (
						<div className="overflow-hidden rounded-xl bg-gray-300 mb-4 dropshadow-box-25 h-full">
							<table {...getTableProps()} className="border-collapse w-full h-full">
								<thead>
									{headerGroups.map(headerGroup => (
										<tr {...headerGroup.getHeaderGroupProps()} className="table-row">
											{headerGroup.headers.map(column => (
												<th {...column.getHeaderProps(column.getSortByToggleProps())} className="p-3 border border-black border-opacity-20 table-header-color text-md">
													{column.render('Header')}
													<span>
														{column.isSorted ? ( // Add conditional check for showing sort direction
															column.isSortedDesc ? (
																<span className="sort-icon ms-1 text-blue-500">&#x25BC;</span> // Downward arrow for descending sort
															) : (
																<span className="sort-icon ms-1 text-blue-500">&#x25B2;</span> // Upward arrow for ascending sort
															)
														) : (
															''
														)}
													</span>
												</th>
											))}
										</tr>
									))}
								</thead>
								<tbody {...getTableBodyProps()} className="">
									{page.map(row => {
										prepareRow(row);
										return (
											<tr
												{...row.getRowProps()}
												className="border"
												style={{
													backgroundColor: row.index % 2 === 0 ? '#ECEBEA' : '#FEFDFD' // Set alternating background colors for rows
												}}
											>
												{row.cells.map(cell => (
													<td className="py-2 border border-black border-opacity-20 text-sm" {...cell.getCellProps()}>
														{cell.render('Cell')}
													</td>
												))}
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					)}
					<div className="pagination-container flex gap-10 justify-center bg-gray-400 p-3 rounded-lg">
						<button onClick={() => previousPage()} disabled={!canPreviousPage}>
							Previous
						</button>
						<span>
							{/* Page{' '} */}
							<strong>
								{pageIndex + 1} of {pageOptions.length}
							</strong>
						</span>
						<button onClick={() => nextPage()} disabled={!canNextPage}>
							Next
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
