import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Util/Navbar';
import Sidebar from '../Util/Sidebar';
import Feedback from '../Pages/Feedback';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function IndexLayout() {
	return (
		<>
			<Navbar />
			<div className="flex my-7 relative">
				<Sidebar />
				<Outlet />
				<Feedback/>
				<ToastContainer />
			</div>
		</>
	);
}
