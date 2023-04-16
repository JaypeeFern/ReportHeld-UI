import React from 'react';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiSquareEditOutline, mdiChevronRight } from '@mdi/js';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react';

export default function SitesEditGroup() {
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
							<BreadcrumbItem></BreadcrumbItem>
						</Breadcrumb>
					</div>
				</div>
				<div className="bg-gray-600 flex items-center px-16 rounded-lg dropshadow-box-25">
					<button className="font-bold text-white ">Powerplant 1</button>
				</div>
			</div>
			<div className="w-full">
				<h1 className="bg-gray-400 p-4 text-center text-2xl font-bold drop-shadow rounded-lg text-white dropshadow-box-25">Groups</h1>
			</div>
		</div>
	);
}
