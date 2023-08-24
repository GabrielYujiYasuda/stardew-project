import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";

//Creating the router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/News";
import About from "./pages/About";
import Error from "./pages/Error";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import path from "path";

//Here is where we configure our routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/news", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
