import { lazy } from "react";

const LandingPage = lazy(() => import("../pages/LandingPage/LandingPage"));

export const APP_ROUTE = [
  {
    name: "LandingPage",
    path: "/",
    exact: true,
    component: LandingPage,
    restricted: true,
  },
];
