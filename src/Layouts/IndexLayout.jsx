import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Util/Navbar';
import Sidebar from '../Util/Sidebar';
import Feedback from '../Pages/Feedback';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function IndexLayout({ menuState, handleMenuState }) {
	return (
		<>
			<Navbar menuState={menuState} handleMenuState={handleMenuState} />
			<div className="flex my-7 relative">
				<Sidebar menuState={menuState} handleMenuState={handleMenuState} />
				<Outlet />
				<Feedback />
				<ToastContainer />
			</div>
		</>
	);
}
