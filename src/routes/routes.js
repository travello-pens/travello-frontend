import { lazy } from "react";
import Checkout from "../pages/Checkout/Checkout";

const LandingPage = lazy(() => import("../pages/LandingPage/LandingPage"));
const LandingDestination = lazy(() => import("../pages/LandingDestination/LandingDestination"));
const LandingTravelAgent = lazy(() => import("../pages/LandingTravelAgent/LandingTravelAgent"));
const DetailProduct = lazy(() => import("../pages/DetailProduct/DetailProduct"));

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
  {
    name: "DetailProduct",
    path: "/detail-product/1",
    exact: false,
    component: DetailProduct,
    restricted: true,
  },
  {
    name: "Checkout",
    path: "/Checkout/1",
    exact: false,
    component: Checkout,
    restricted: true,
  },
];
