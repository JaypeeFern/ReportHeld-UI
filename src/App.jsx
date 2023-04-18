import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import IndexLayout from './Layouts/IndexLayout';
import Login from './Pages/Login';
import Sites from './Pages/Sites';
import SitesEditGroup from './Pages/SitesEditGroup';
import Powerplants from './Pages/Powerplants';
import PowerPlantFeatures from './Pages/PowerPlantFeatures'
import Protocols from './Pages/Protocols'

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/">
				<Route index element={<Login />} />
				<Route element={<IndexLayout />}>
					<Route path="sites" element={<Sites />} />
					<Route path="edit-groups" element={<SitesEditGroup />} />
					<Route path="powerplants" element={<Powerplants />} />
					<Route path="features" element={<PowerPlantFeatures />} />
					<Route path="protocols" element={<Protocols />} />
				</Route>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
