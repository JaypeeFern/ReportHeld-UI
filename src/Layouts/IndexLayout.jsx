import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Util/Navbar';
import Sidebar from '../Util/Sidebar';

export default function IndexLayout() {
	return (
		<>
			<Navbar />
			<div className="flex my-7">
				<Sidebar />
				<Outlet />
			</div>
		</>
	);
}
