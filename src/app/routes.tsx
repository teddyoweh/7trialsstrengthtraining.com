"use client"
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import LandingRoute from "./views/Landing";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LandingRoute/>
    ),
  },
  
]);

export default function AppRoutes(){
    return<RouterProvider router={router} />

}
