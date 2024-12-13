import React from "react";
import PublicLayout from "../features/public/components/PublicLayout";
import HomePage from "../features/public/pages/HomePage";
import ShopPage from "../features/public/pages/ShopPage";
import ContactusPage from "../features/public/pages/ContactusPage";
import AboutusPage from "../features/public/pages/AboutusPage";
import CartPage from "../features/public/pages/CartPage";
import ProductDetailPage from "../features/public/pages/ProductDetailPage";

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
        children: [
          {
            index: true,
            element: <ShopPage />,
          },
          {
            path: ":id",
            element: <ProductDetailPage />,
          }
        ],
      },
      {
        path: "cart",
        element: <CartPage />,
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
