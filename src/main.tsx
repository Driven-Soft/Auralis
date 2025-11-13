import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Root from "./routes/Root";
import IndexRedirect from "./routes/IndexRedirect";
import Contato from "./routes/Contato";
import "./index.css";
import Faq from "./routes/Faq";
import Integrantes from "./routes/Integrantes";
import Dicas from "./routes/Dicas";
import Sobre from "./routes/Sobre";
import Dashboard from "./routes/Dashboard";
import Cadastro from "./routes/Cadastro";
import { ApiProvider } from "./context/Api/ApiProvider";
import { UserProvider } from "./context/User/UserProvider";
import IntegranteDetalhe from "./routes/IntegranteDetalhe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <IndexRedirect /> },
      { path: "contato", element: <Contato /> },
      { path: "faq", element: <Faq /> },
      { path: "integrantes", element: <Integrantes /> },
      { path: "dicas", element: <Dicas /> },
      { path: "sobre", element: <Sobre /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "cadastro", element: <Cadastro /> },
      { path: "integrantes/:rm", element: <IntegranteDetalhe /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ApiProvider>
  </StrictMode>
);