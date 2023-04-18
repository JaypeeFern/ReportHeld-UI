import React from 'react';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiSquareEditOutline, mdiChevronRight, mdiMagnify } from '@mdi/js';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, Switch, Divider } from '@chakra-ui/react';

export default function SitesEditGroup() {
	const generateRandomData = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push(
				<div key={i} className="flex items-center p-2 gap-2 border rounded-md border-gray-400">
					<Switch id="group" size="md" isChecked={i % 3 === 0 ? true : false} />
					<Divider orientation="vertical" h="50px" />
					<label className="text-sm text-center">Just alexander.knauer@stadtwerke-bayreuth.de (PUf6huwM)</label>
				</div>
			);
		}
		return data;
	};

	return (
		<div className="flex-grow bg-gray-300 me-7 rounded-xl rounded-br-xl border border-slate-400 p-7">
			<div className="w-full flex mb-4 gap-5">
				<div className="flex-grow table-header-color p-2 rounded-lg text-gray-600 font-sans text-lg dropshadow-box-25">
					<div className="flex gap-1 items-center">
						<Icon path={mdiSquareEditOutline} size={1} />
						<Breadcrumb separator={<Icon path={mdiChevronRight} size={1} />}>
							<BreadcrumbItem>
								<Link to="/sites" className="hover:underline">
									Sites
								</Link>
							</BreadcrumbItem>
							<BreadcrumbItem>
								<BreadcrumbLink>Edit Group</BreadcrumbLink>
							</BreadcrumbItem>
							{/* <BreadcrumbItem>
								<p>Powerplant 1</p>
							</BreadcrumbItem> */}
						</Breadcrumb>
					</div>
				</div>
				<div className="bg-gray-600 flex items-center px-16 rounded-lg dropshadow-box-25">
					<button className="font-bold text-white ">Powerplant 1</button>
				</div>
			</div>
			<div className="w-full">
				<input className="mb-4 p-2 rounded-lg dropshadow-box-25 w-full" type="text" placeholder={`Search by name...`} />
				<h1 className="bg-gray-400 p-4 text-center text-2xl font-bold drop-shadow rounded-tl-lg rounded-tr-lg text-white dropshadow-box-25">Groups</h1>
				<div className="grid grid-cols-2 gap-3 p-7 bg-slate-200 items-center rounded-bl-lg rounded-br-lg">
					{generateRandomData(12)}
				</div>
				<div className="pagination-container flex gap-10 justify-center mt-3 bg-gray-400 p-3 rounded-lg">
						<button>
							Previous
						</button>
						<span>
							{/* Page{' '} */}
							<strong>
								1 of 10
							</strong>
						</span>
						<button>
							Next
						</button>
					</div>
			</div>
		</div>
	);
}
