import React from 'react';
import Icon from '@mdi/react';
import { mdiChartSankeyVariant, mdiChevronRight, mdiFilterMenu } from '@mdi/js';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Switch } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { useTable, usePagination, useGlobalFilter, useSortBy, useFilters } from 'react-table';
import { Select } from '@chakra-ui/react';

export default function TemplateVariants() {
	const generateRandomData = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
      const randomNumber = Math.floor(Math.random() * 30) + 1;
			data.push({
				name: `Name ${i}`,
				version: `${randomNumber}`,
				topics: `${randomNumber}`,
				items: `${randomNumber}`,
				protocols: `${randomNumber}`,
				status: 'Active',
				groups: 'Groups'
			});
		}
		return data;
	};

	const data = React.useMemo(() => generateRandomData(100), []); // Call the function to generate random data

	const columns = React.useMemo(
		() => [
			{ Header: 'Name', accessor: 'name', Filter: SelectColumnFilter, filter: 'includes' },
			{ Header: 'Version', accessor: 'version' },
			{ Header: 'Number of Topics', accessor: 'topics' },
			{ Header: 'Number of Items', accessor: 'items' },
			{ Header: 'Number of Protocols', accessor: 'protocols' },
			{ Header: 'Available', accessor: 'status', disableSortBy: true },
			{ Header: 'Groups', accessor: 'groups'}
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

	const [open, setOpen] = React.useState(true);
	function handleFilterShow() {
		setOpen(prevState => !prevState);
	}

	const location = useLocation();
	
	return (
		<>
			<div className="flex-grow bg-gray-300 me-7 rounded-lg border border-slate-400 p-7">
				<div className="w-full mb-4 gap-5">
					<div className="table-header-color p-2 rounded-lg text-gray-600 font-sans text-lg dropshadow-box-25">
						<div className="flex gap-1 items-center">
							<Icon path={mdiChartSankeyVariant} size={1} />
							{location.pathname !== '/templates' && (
								<div className="flex gap-1 items-center ">
									<Breadcrumb separator={<Icon path={mdiChevronRight} size={1} />}>
										<BreadcrumbItem>
											<Link to="/templates" className="hover:underline">
												Templates
											</Link>
										</BreadcrumbItem>
										<BreadcrumbItem>
											<BreadcrumbLink>{location.pathname === '/templates/template-advanced' ? 'Advanced Edit' : 'Variants'}</BreadcrumbLink>
										</BreadcrumbItem>
									</Breadcrumb>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="table-container flex flex-col text-center">
					<div className="relative flex gap-2">
						<div className="input w-full">
							<input
								className={`p-2 ${open ? 'rounded-lg dropshadow-box-25 transition-all duration-300 delay-0 ease-in-out' : 'rounded-tl-lg rounded-tr-lg'} w-full`}
								type="text"
								value={globalFilter || ''}
								onChange={e => setGlobalFilter(e.target.value)}
								placeholder=" Search"
							/>
						</div>
						<div className="dropshadow-box-25 switch flex items-center justify-start gap-2 bg-gray-200 rounded-lg h-10 px-5 w-80">
							<span className="font-semibold opacity-80">Only Available</span>
							<span>|</span>
							<Switch id="group" size="md" />
						</div>
						<button onClick={handleFilterShow} className={`absolute right-0 top-0  translate-2 bg-gray-400 p-2 ${open ? 'rounded-tr-lg rounded-br-lg text-gray-500' : 'rounded-tr-lg'} `}>
							<Icon path={mdiFilterMenu} size={1} />
						</button>
					</div>
					<div className={`${open ? 'opacity-0 sr-only' : 'opacity-100'} bg-gray-400 p-5 rounded-bl-lg rounded-br-lg transition-all duration-1000 ease-in-out dropshadow-box-25`}>
						{headerGroups.map(headerGroup => (
							<div {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map(column => (
									<div key={column.id} className="flex gap-2">
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
					<div className="pagination-container flex gap-10 justify-center bg-gray-400 p-3 rounded-lg dropshadow-box-25">
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
