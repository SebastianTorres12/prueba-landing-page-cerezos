import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { Servicios } from "./pages/Servicios.jsx";
import { SobreNosotros } from "./pages/SobreNosotros.jsx";
import { Terapias } from "./pages/Terapias.jsx";
import { Galeria } from "./pages/Galeria.jsx";
import { Salidas } from "./pages/Salidas.jsx";
import { Contactos } from "./pages/Contactos.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre-nosotros", // Ruta para Sobre Nosotros
        element: <SobreNosotros />,
      },
      {
        path: "/servicios", // Ruta para Servicios
        element: <Servicios />,
      },
      {
        path: "/terapias", // Ruta para Terapias
        element: <Terapias />,
      },
      {
        path: "/galeria", // Ruta para Galería
        element: <Galeria />,
      },
      {
        path: "/salidas", // Ruta para Salidas
        element: <Salidas />,
      },
      {
        path: "/contactos", // Ruta para Contactos
        element: <Contactos />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
