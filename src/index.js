import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Posts from './components/Posts/Posts';
import NotFound from './components/NotFound/NotFound';
import Post from './components/Post/Post';
import Calc from './components/Calc/Calc';
import { Provider } from 'react-redux';
import { store } from './share/store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/posts/:id",
    element: <Post />,
  },
  {
    path: "/calc",
    element: <Calc />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><RouterProvider router={router} /></Provider>);
