import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./routs/App.jsx";
import Contect from "./components/Contectform/Contect.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Items from "./components/Items.jsx";
import Cart1 from "./components/Carts/Carts-1.jsx";

const router = createBrowserRouter(
  [
  { path: "/Aacharya", element: <App />, children:[
    {index: true, element: < Items/>},
    { path: "form-bar", element: <Contect /> },
    {path:"/Aacharya/Hawan/", element:<Cart1/>}
  ] },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
