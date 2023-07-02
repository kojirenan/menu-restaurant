import About from 'pages/About';
import App from 'pages/Default';
import Dish from 'pages/Dish';
import Home from 'pages/Home';
import Menu from 'pages/Menu';
import NotFound from 'pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

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
    ],
  },
]);
