import React from 'react';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiCloseBox, mdiMapMarker, mdiChevronLeft, mdiHelp } from '@mdi/js';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';

export default function ItemTypeDefinitions({show, handleHide}) {
	const generateRandomData = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push({
				itemtype: `Type ${i}`,
				version: `${i}`,
				numberofprops: `${i}`,
				status: `Yes `,
				action: (
					<div className="flex gap-3 justify-center">
						<Link to="" className={(i % 5 ? 'bg-gray-500 hover:bg-gray-700 cursor-not-allowed p-2 rounded-lg text-white font-semibold dropshadow-box-25 text-xs' : 'bg-green-500 hover:bg-green-700 p-2 rounded-lg text-white font-semibold dropshadow-box-25 text-xs')}>
							{' '}
							{i % 5 ? 'Old Version' : 'New Version'}
						</Link>
					</div>
				)
			});
		}
		return data;
	};

	const data = React.useMemo(() => generateRandomData(100), []); // Call the function to generate random data

	const columns = React.useMemo(
		() => [
			{ Header: 'Item Type', accessor: 'itemtype', disableSortBy: true },
			{ Header: 'Version', accessor: 'version' },
			{ Header: 'Number of Properties', accessor: 'numberofprops' },
			{ Header: 'Available', accessor: 'status' },
			{ Header: 'Version', accessor: 'action', disableSortBy: true }
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
						<div className="flex justify-end items-center h-16 mx-3">
							<div className="right flex gap-2 items-center">
								<button onClick={handleHide}>
									<Icon path={mdiCloseBox} size={1.5} color="#E86B6B" />
								</button>
							</div>
						</div>
						<div className="input py-5 px-7 ">
							<div className="input flex flex-col gap-6">
								<button className="bg-lime-400 p-4 rounded-md hover:bg-lime-500 shadow-lg font-semibold text-gray-600">Create Item Type Definition</button>
								<button className="bg-lime-400 p-4 rounded-md hover:bg-lime-500 shadow-lg font-semibold text-gray-600">Import Item Type Definition</button>
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
							<Icon path={mdiHelp} size={1} />
							<h1>Item Type Definitions</h1>
						</div>
					</div>
				</div>
				<div className="table-container flex flex-col text-center h-full">
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
