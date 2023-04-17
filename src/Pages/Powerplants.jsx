import React from 'react';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiCloseBox, mdiSquareEditOutline, mdiTrashCan, mdiOpenInNew, mdiLightningBolt, mdiFilterMenu } from '@mdi/js';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Select } from '@chakra-ui/react';
import { useTable, usePagination, useGlobalFilter, useSortBy, useFilters } from 'react-table';

export default function Powerplants() {
	const generateRandomData = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push({
				name: `Powerplant ${i}`,
				code: `PP${i}`,
				address: 'Freistaat Bayern',
				action: (
					<div className="flex gap-3 justify-center">
						<Link to="/powerplants" className="bg-blue-500 hover:bg-blue-700 p-2 rounded-lg text-white font-semibold flex gap-1 items-center dropshadow-box-25 text-xs">
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
			{ Header: '', accessor: 'img', disableSortBy: true },
			{ Header: 'Name', accessor: 'name', Filter: SelectColumnFilter, filter: 'includes' },
			{ Header: 'Code', accessor: 'code' },
			{ Header: 'Site', accessor: 'site' },
			{ Header: 'Address', accessor: 'address' },
			{ Header: '', accessor: 'action', disableSortBy: true }
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canPreviousPage, canNextPage, pageOptions, state, setGlobalFilter, prepareRow } = useTable(
		{ columns, data },
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
					Filter by <span className='capitalize font-bold'>{id}</span>
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
			<div className="bg-zinc-600 rounded-tl-xl rounded-bl-xl">
				<div className="bg-black bg-opacity-30 h-16 rounded-tl-xl">
					<div className="flex justify-between items-center h-16 mx-3">
						<div className="left flex gap-2 ms-4">
							<button className="bg-green-500 hover:bg-green-700 rounded-lg font-semibold text-white p-2 text-sm w-20  dropshadow-box-25">Add</button>
							<button className="bg-red-500 hover:bg-red-700 rounded-lg font-semibold text-white p-2 text-sm w-20 dropshadow-box-25">Cancel</button>
						</div>
						<div className="right flex gap-2 items-center">
							<button>
								<Icon path={mdiCloseBox} size={1.5} color="#E86B6B" />
							</button>
						</div>
					</div>
					<div className="input py-5 px-7 ">
						<Tabs variant="unstyled" isFitted>
							<TabList className="bg-slate-400 p-1 rounded-lg bg-opacity-30 text-white">
								<Tab fontSize="20-px" className="rounded-lg" _selected={{ color: 'white', bg: '#01ABE9' }}>
									1
								</Tab>
								<Tab className="rounded-lg" _selected={{ color: 'white', bg: '#01ABE9' }}>
									2
								</Tab>
								<Tab className="rounded-lg" _selected={{ color: 'white', bg: '#01ABE9' }}>
									3
								</Tab>
								<Tab className="rounded-lg" _selected={{ color: 'white', bg: '#01ABE9' }}>
									4
								</Tab>
							</TabList>
							<TabPanels className="mt-5">
								<TabPanel>
									<div className="flex flex-col gap-3">
										<div className="flex flex-col gap-1 mb-3">
											<label className="text-white text-sm font-bold">Site Name</label>
											<input className="dropshadow-box-25 border border-slate-400 bg-gray-400 rounded-md p-2" type="text" />
										</div>
									</div>
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
					</div>
				</div>
			</div>

			<div className="flex-grow bg-gray-300 me-7 rounded-tr-xl rounded-br-xl border border-slate-400 p-7">
				<div className="w-full flex mb-4 gap-5">
					<div className="flex-grow table-header-color p-2 rounded-lg text-gray-600 font-sans text-lg dropshadow-box-25">
						<div className="flex gap-1 items-center">
							<Icon path={mdiLightningBolt} size={1} />
							<h1>Powerplants</h1>
						</div>
					</div>
					{/* <div className="flex items-center px-16 rounded-lg dropshadow-box-25"></div> */}
				</div>

				<div className="table-container flex flex-col text-center">
					<div className="relative">
						<input
							className={`p-2 ${open ? 'rounded-lg dropshadow-box-25 transition-all duration-300 delay-0 ease-in-out' : 'rounded-tl-lg rounded-tr-lg'} w-full`}
							type="text"
							value={globalFilter || ''}
							onChange={e => setGlobalFilter(e.target.value)}
							placeholder=" Search by name..."
						/>
						<button onClick={handleFilterShow} className={`absolute right-0 top-0 bg-gray-400 p-2 ${open ? 'rounded-tr-lg rounded-br-lg text-gray-500' : 'rounded-tr-lg'} `}>
							<Icon path={mdiFilterMenu} size={1} />
						</button>
					</div>
					<div className={`${open ? 'opacity-0 sr-only' : 'opacity-100'} bg-gray-400 p-5 rounded-bl-lg rounded-br-lg transition-all duration-1000 ease-in-out dropshadow-box-25`}>
						{headerGroups.map(headerGroup => (
							<div {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column => (
									<div className="flex gap-2">
										<div className="">{column.id === 'name' ? <SelectColumnFilter column={column} setFilter={column.setFilter} /> : null}</div>
									</div>
								))}
							</div>
						))}
					</div>
					{page.length === 0 ? (
						<div className="no-data-message my-16">No data available</div>
					) : (
						<div className="overflow-hidden rounded-xl bg-gray-300 mb-4 mt-4 dropshadow-box-25">
							<table {...getTableProps()} className="border-collapse w-full">
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
