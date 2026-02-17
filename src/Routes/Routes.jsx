import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "product",
        loader: () => fetch("/data.json"),
        Component: Product
      }

    ]
  },
]);