import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./routs/App.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Items from "./components/Items.jsx";
import Cart1 from "./components/Carts/Carts-1.jsx";
import VedaData from "./components/aboutDhrma/VedaData.jsx";

const router = createHashRouter(
  [
  { path: "/Aacharya", element: <App />, children:[
    {index: true, element: < Items/>},
    {path:"Hawan", element:<Cart1/>},
    {path: "ved", element:<VedaData/>}
  ] },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
