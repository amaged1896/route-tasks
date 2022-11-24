import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import All from './Components/All/All';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Pc from './Components/Platforms/Pc/Pc';
import Browser from './Components/Platforms/Browser/Browser';
import ReleaseDate from './Components/Sort/ReleaseDate/ReleaseDate';
import Popularity from './Components/Sort/Popularity/Popularity';
import Alphabetical from './Components/Sort/Alphabetical/Alphabetical';
import Relevance from './Components/Sort/Relevance/Relevance';
import Racing from './Components/Categories/Racing/Racing';
import Sports from './Components/Categories/Sports/Sports';
import Social from './Components/Categories/Social/Social';
import Shooter from './Components/Categories/Shooter/Shooter';
import OpenWorld from './Components/Categories/OpenWorld/OpenWorld';
import Zombie from './Components/Categories/Zombie/Zombie';
import Fantasy from './Components/Categories/Fantasy/Fantasy';
import ActionRpg from './Components/Categories/ActionRpg/ActionRpg';
import Action from './Components/Categories/Action/Action';
import Flight from './Components/Categories/Flight/Flight';
import Battle from './Components/Categories/Battle/Battle';
import ErrorPage from './Components/ErrorPage/ErrorPage';


function App() {

  let routers = createBrowserRouter([
    {
      path: '/', element: <Layout />, errorElement: <ErrorPage />, children: [
        { index: true, element: <Home /> },
        { path: 'all', element: <All /> },
        { path: 'platforms/pc', element: <Pc /> },
        { path: 'platforms/browser', element: <Browser /> },
        { path: 'sort-by/release-date', element: <ReleaseDate /> },
        { path: 'sort-by/popularity', element: <Popularity /> },
        { path: 'sort-by/alphabetical', element: <Alphabetical /> },
        { path: 'sort-by/relevance', element: <Relevance /> },
        { path: 'categories/racing', element: <Racing /> },
        { path: 'categories/sports', element: <Sports /> },
        { path: 'categories/social', element: <Social /> },
        { path: 'categories/shooter', element: <Shooter /> },
        { path: 'categories/open-world', element: <OpenWorld /> },
        { path: 'categories/zombie', element: <Zombie /> },
        { path: 'categories/fantasy', element: <Fantasy /> },
        { path: 'categories/action-rpg', element: <ActionRpg /> },
        { path: 'categories/action', element: <Action /> },
        { path: 'categories/flight', element: <Flight /> },
        { path: 'categories/battle-royale', element: <Battle /> },

        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '*', element: <ErrorPage /> }
      ]
    },
  ]);

  return (<>

    <RouterProvider router={routers} />

  </>
  );
}

export default App;


