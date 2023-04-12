import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import IndexLayout from './Layouts/IndexLayout';
import Sites from './Pages/Sites'
import Powerplants from './Pages/Powerplants'

function App() {

	const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<IndexLayout />}>
    <Route index element={<Sites />} />
    <Route path="powerplants" element={<Powerplants />} />
  </Route>));

	return (
    <RouterProvider router={router} />
  )
}

export default App;
