import React from "react";
import PublicLayout from "../features/public/components/PublicLayout";
import HomePage from "../features/public/pages/HomePage";
import ShopPage from "../features/public/pages/ShopPage";
import ContactusPage from "../features/public/pages/ContactusPage";
import AboutusPage from "../features/public/pages/AboutusPage";

const PublicRoute = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "aboutus",
        element: <AboutusPage />,
      },
      {
        path: "contactus",
        element: <ContactusPage />,
      },
    ],
  },
];

export default PublicRoute;
