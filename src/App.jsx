import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import PageNotFound from './Util/PageNotFound';
import IndexLayout from './Layouts/IndexLayout';
import Login from './Pages/Login';
import Sites from './Pages/Sites';
import SitesEditGroup from './Pages/SitesEditGroup';
import Powerplants from './Pages/Powerplants';
import PowerPlantFeatures from './Pages/PowerPlantFeatures';
import Protocols from './Pages/Protocols';
import TemplateLayout from './Layouts/TemplateLayout';
import TemplateEditor from './Pages/TemplateEditor';
import TemplateVariants from './Pages/TemplateVariants';
import TemplateAdvanceEdit from './Pages/TemplateAdvanceEdit';
import Variants from './Pages/Variants';
import ItemTypeDefinitions from './Pages/ItemTypeDefinitions';
import Users from './Pages/Users';
import Groups from './Pages/Groups';

function App() {
	// Show/Hide Input
	const [show, setShow] = React.useState(false);
	function handleHide() {
		setShow(prevState => !prevState);
	}

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/">
				<Route index element={<Login />} />
				<Route element={<IndexLayout />}>
					<Route path="sites" element={<Sites show={show} handleHide={handleHide} />} />
					<Route path="edit-groups" element={<SitesEditGroup />} />
					<Route path="powerplants" element={<Powerplants show={show} handleHide={handleHide} />} />
					<Route path="features" element={<PowerPlantFeatures show={show} handleHide={handleHide} />} />
					<Route path="protocols" element={<Protocols />} />
					<Route path="templates" element={<TemplateLayout />}>
						<Route path="template-editor" element={<TemplateEditor show={show} handleHide={handleHide} />} />
						<Route path="template-variants" element={<TemplateVariants />} />
						<Route path="template-advanced" element={<TemplateAdvanceEdit />} />
					</Route>
					<Route path="variants" element={<Variants show={show} handleHide={handleHide} />} />
					<Route path="definitions" element={<ItemTypeDefinitions show={show} handleHide={handleHide} />} />
					<Route path="users" element={<Users show={show} handleHide={handleHide} />} />
					<Route path="groups" element={<Groups show={show} handleHide={handleHide} />} />
					<Route path="*" element={<PageNotFound />} />
				</Route>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
