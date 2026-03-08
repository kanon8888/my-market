import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';
import Coverage from '../pages/Coverage/Coverage';
import About from '../pages/About/About';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';


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
        path: "about",
        Component: About
      },
      {
        path: "product",
        loader: () => fetch("/data.json"),
        Component: Product
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch('/warehouses.json').then(res => res.json())

      }

    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      }
    ]
  }
]);