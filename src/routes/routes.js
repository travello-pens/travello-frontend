import { lazy } from "react";

const LandingPage = lazy(() => import("../pages/LandingPage/LandingPage"));
const LandingDestination = lazy(() => import("../pages/LandingDestination/LandingDestination"));

export const APP_ROUTE = [
  {
    name: "LandingPage",
    path: "/",
    exact: true,
    component: LandingPage,
    restricted: true,
  },
  {
    name: "LandingPage",
    path: "/tujuan/:destination",
    exact: false,
    component: LandingDestination,
    restricted: true,
  },
];
