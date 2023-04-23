import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import IndexLayout from './Layouts/IndexLayout';
import Login from './Pages/Login';
import Sites from './Pages/Sites';
import SitesEditGroup from './Pages/SitesEditGroup';
import Powerplants from './Pages/Powerplants';
import PowerPlantFeatures from './Pages/PowerPlantFeatures'
import Protocols from './Pages/Protocols'
import TemplateLayout from './Layouts/TemplateLayout';
import TemplateEditor from './Pages/TemplateEditor';
import TemplateVariants from './Pages/TemplateVariants';
import TemplateAdvanceEdit from './Pages/TemplateAdvanceEdit';

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
					<Route path="templates" element={<TemplateLayout />}>
						<Route path='template-editor' element={<TemplateEditor />} />
						<Route path='template-variants' element={<TemplateVariants />} />
						<Route path='template-advanced' element={<TemplateAdvanceEdit />} />
					</Route>
				</Route>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
