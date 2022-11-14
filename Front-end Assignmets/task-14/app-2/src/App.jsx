
import RouterLayout from './Components/RouterLayout/RouterLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';


const routers = createBrowserRouter([
  {
    path: '/', element: <RouterLayout />, children: [
      { index: 'home', element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <ErrorPage /> },
    ]
  }
]);

function App() {
  return (<>
    <RouterProvider router={routers} />
  </>);
}

export default App;
