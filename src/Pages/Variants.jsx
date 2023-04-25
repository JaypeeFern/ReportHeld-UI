import React from 'react';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiCloseBox, mdiTrashCan, mdiChevronLeft, mdiChartSankeyVariant, mdiAlert } from '@mdi/js';
import { useTable, usePagination, useGlobalFilter, useSortBy } from 'react-table';

export default function Variants() {
	const generateRandomData = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push({
				defaultname: `Default ${i}`,
				enname: 'English Name',
				dename: 'German Name',
				inuse: 'Yes',
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
			{ Header: 'Default Name', accessor: 'defaultname' },
			{ Header: 'EN Name', accessor: 'enname' },
			{ Header: 'DE Name', accessor: 'dename' },
			{ Header: 'Inuse', accessor: 'inuse' },
			{ Header: '', accessor: 'action', disableSortBy: true }
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

	const [show, setShow] = React.useState(true);
	function handleHide() {
		setShow(prevState => !prevState);
	}

	return (
		<>
			{show && (
				<div className="bg-zinc-600 rounded-tl-xl rounded-bl-xl">
					<div className="bg-black bg-opacity-30 h-16 rounded-tl-xl">
						<div className="flex justify-between items-center h-16 mx-3">
							<div className="left flex gap-2 ms-4">
								<button className="bg-green-500 hover:bg-green-700 rounded-lg font-semibold text-white p-2 text-sm w-20  dropshadow-box-25">Add</button>
								<button className="bg-red-500 hover:bg-red-700 rounded-lg font-semibold text-white p-2 text-sm w-20 dropshadow-box-25">Cancel</button>
							</div>
							<div className="right flex gap-2 items-center">
								<button onClick={handleHide}>
									<Icon path={mdiCloseBox} size={1.5} color="#E86B6B" />
								</button>
							</div>
						</div>
						<div className="input py-5 px-10 flex flex-col gap-4">
							<div className="flex relative gap-6 items-center py-6 px-4 rounded-md bg-gray-300 mb-6 box-dropshadow-box-25">
								<div className="flex justify-center items-center flex-col bg-gray-100 bg-opacity-70ww rounded-tl-lg rounded-bl-lg absolute h-full p-2 left-0">
									<Icon path={mdiAlert} size={2.5} color="#E86B6B" />
									<span className='font-bold text-red-400'>Warning</span>
								</div>
								<span className="w-64 text-justify font-semibold ms-20 text-sm">
									The template name will be replaced by the name of the protocol variant, so please make sure to select a template-specific name.
								</span>
							</div>
							<div className="flex flex-col gap-1 mb-3">
								<label className="text-white text-sm font-bold">Name Default</label>
								<input className="dropshadow-box-25 border border-slate-400 bg-gray-400 rounded-md p-2" type="text" />
							</div>
							<div className="flex flex-col gap-1 mb-3">
								<label className="text-white text-sm font-bold">Name English</label>
								<input className="dropshadow-box-25 border border-slate-400 bg-gray-400 rounded-md p-2" type="text" />
							</div>
							<div className="flex flex-col gap-1 mb-3">
								<label className="text-white text-sm font-bold">Name German</label>
								<input className="dropshadow-box-25 border border-slate-400 bg-gray-400 rounded-md p-2" type="text" />
							</div>
						</div>
					</div>
				</div>
			)}

			<div className="flex-grow bg-gray-300 me-7 rounded-tr-xl rounded-br-xl border border-slate-400 p-7">
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
							<Icon path={mdiChartSankeyVariant} size={1} />
							<h1>Variants</h1>
						</div>
					</div>
				</div>
				<div className="table-container flex flex-col text-center">
					<input className="mb-4 p-2 rounded-lg dropshadow-box-25" type="text" value={globalFilter || ''} onChange={e => setGlobalFilter(e.target.value)} placeholder=" Search by name..." />
					{page.length === 0 ? (
						<div className="no-data-message my-16">No data available</div>
					) : (
						<div className="overflow-hidden rounded-xl bg-gray-300 mb-4 dropshadow-box-25">
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
