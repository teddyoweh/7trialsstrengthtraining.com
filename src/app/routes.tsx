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
 

export default function AppRoutes(){
    return <LandingRoute/>

}
