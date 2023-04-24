import React from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiFormatSize, mdiChevronRight } from '@mdi/js';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export default function IndexLayout() {
	const location = useLocation();

	return (
		<>
			{location.pathname !== '/templates/template-editor' && location.pathname !== '/templates/template-variants' && location.pathname !== '/templates/template-advanced' && (
				<div className="flex w-full flex-col bg-gray-300 me-7 rounded-xl border border-slate-400 p-7">
					<div className="mb-4 gap-5">
						<div className="flex-grow table-header-color p-2 rounded-lg text-gray-600 font-sans dropshadow-box-25">
							<div className="flex gap-2 items-center p-5 justify-start">
								<Icon path={mdiFormatSize} size={1.5} />
								{location.pathname === '/templates' && <h1 className="text-2xl font-bold">Templates</h1>}
								{/* {location.pathname !== '/templates' && (
									<div className="flex gap-1 items-center text-2xl">
										<Breadcrumb separator={<Icon path={mdiChevronRight} size={1} />}>
											<BreadcrumbItem>
												<Link to="/templates" className="hover:underline">
													Templates
												</Link>
											</BreadcrumbItem>
											{location.pathname === '/templates/template-editor' && (
												<BreadcrumbItem>
													<BreadcrumbLink>Edit</BreadcrumbLink>
												</BreadcrumbItem>
											)}
											{location.pathname === '/templates/template-variants' && (
												<BreadcrumbItem>
													<BreadcrumbLink>Variants</BreadcrumbLink>
												</BreadcrumbItem>
											)}
											{location.pathname === '/templates/template-advanced' && (
												<BreadcrumbItem>
													<BreadcrumbLink>Advaned Edit</BreadcrumbLink>
												</BreadcrumbItem>
											)}
										</Breadcrumb>
									</div>
								)} */}
							</div>
						</div>
					</div>
					{location.pathname !== '/templates/template-editor' && location.pathname !== '/templates/template-variants' && location.pathname !== '/templates/template-advanced' && (
						<div className="flex-grow items-center">
							<nav className="grid xs:grid-cols-auto xl:grid-cols-3 mx gap-10 p-16 place-items-center w-full h-full">
								<NavLink to="template-editor" className="w-full">
									<button className="bg-gray-400 hover:bg-lime-300 w-full hover:text-gray-700  transition-all duration-300 bg-opacity-70 dropshadow-box-25 rounded-lg text-3xl p-36 text-white font-bold">
										Edit
									</button>
								</NavLink>
								<NavLink to="template-variants" className="w-full">
									<button className="bg-gray-400 hover:bg-lime-300 w-full hover:text-gray-700  transition-all duration-300 bg-opacity-70 dropshadow-box-25 rounded-lg text-3xl p-36 text-white font-bold">
										Variants
									</button>
								</NavLink>
								<NavLink to="template-advanced" className="w-full">
									<button className="bg-gray-400 hover:bg-lime-300 w-full hover:text-gray-700  transition-all duration-300 bg-opacity-70 dropshadow-box-25 rounded-lg text-3xl p-36 text-white font-bold">
										Advance Edit
									</button>
								</NavLink>
							</nav>
						</div>
					)}
				</div>
			)}
			<Outlet />
		</>
	);
}
