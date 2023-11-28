import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Dashboard />} />
      </Route>
    )
  );