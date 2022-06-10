import { lazy } from "react";

const LandingPage = lazy(() => import("../pages/LandingPage/LandingPage"));
const LandingDestination = lazy(() => import("../pages/LandingDestination/LandingDestination"));
const LandingTravelAgent = lazy(() => import("../pages/LandingTravelAgent/LandingTravelAgent"));

export const APP_ROUTE = [
  {
    name: "LandingPage",
    path: "/",
    exact: true,
    component: LandingPage,
    restricted: true,
  },
  {
    name: "Landing Page Destination",
    path: "/tujuan/:destination",
    exact: false,
    component: LandingDestination,
    restricted: true,
  },
  {
    name: "Landing Page Travel Agent",
    path: "/travel-agent/:travelAgent",
    exact: false,
    component: LandingTravelAgent,
    restricted: true,
  },
];
