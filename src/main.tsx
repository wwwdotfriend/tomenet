// imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "rpg-awesome/css/rpg-awesome.min.css";
import StoreProvider from "../redux/StoreProvider"

// pages
import Home from "./pages/HomePage.tsx";
import AshTag from "./pages/AshTag.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <NotFoundPage />,
  },
  {
    path: "/ashtag",
    element: <AshTag />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </StoreProvider>,
);
