import Parent from './Components/Parent/Parent';
import RouterLayout from './Components/RouterLayout/RouterLayout';
import ErrorPage from './Components/ErrorPage/ErrorPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Gallary from './Components/Gallary/Gallary';
import Projects from './Components/Projects/Projects';
import { Component } from 'react';


const routers = createBrowserRouter([
	{
		path: '/', element: <RouterLayout />, ErrorElement: <ErrorPage />, children: [
			{ index: true, element: <Home /> },
			{ path: 'gallery', element: <Gallary /> },
			{ index: 'Parent', element: <Parent /> },
			{ index: 'projects', element: <Projects /> },
		]
	}
]);
export default class App extends Component {

	render() {
		return <RouterProvider router={routers}></RouterProvider>;
	}
}
