import App from 'pages/Default';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const About = lazy(() => import('pages/About'));
const Dish = lazy(() => import('pages/Dish'));
const Home = lazy(() => import('pages/Home'));
const Menu = lazy(() => import('pages/Menu'));
const NotFound = lazy(() => import('pages/NotFound'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/sobre',
        element: <About />,
      },
      {
        path: '/prato/:id',
        element: <Dish />,
      },
      {
        path: '/prato/:id',
        element: <Dish />,
      },
    ],
  },
]);
