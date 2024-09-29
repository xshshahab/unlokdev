import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero/Hero.tsx";
import Docs from "./components/Pages/Docs/Docs.tsx";
import Product from "./components/Pages/Product/Product.tsx";
import Playground from "./components/Pages/Playground/Playground.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "/docs",
        element: <Docs />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/playground",
        element: <Playground />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
