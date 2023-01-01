import React from "react";
import { DEFAULT_PATH, ERROR_PATH } from "./constants/urls";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";

// eslint-disable-next-line import/prefer-default-export
export const PUBLIC_ROUTES = [
  {
    path: `${DEFAULT_PATH}`,
    element: <HomePage />,
  },
  {
    path: `${ERROR_PATH}/:status`,
    element: <ErrorPage />,
  },
];
