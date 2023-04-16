import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import IndexLayout from './Layouts/IndexLayout';
import Login from './Pages/Login';
import Sites from './Pages/Sites';
import SitesEditGroup from './Pages/SitesEditGroup';
import Powerplants from './Pages/Powerplants';

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/">
				<Route index element={<Login />} />
				<Route element={<IndexLayout />}>
					<Route path="sites" element={<Sites />} />
					<Route path="edit-groups" element={<SitesEditGroup />} />
					<Route path="powerplants" element={<Powerplants />} />
				</Route>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
