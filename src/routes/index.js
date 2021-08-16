import { useRoutes } from "react-router-dom";
import CreateReport from "../pages/CreateReport";
import Home from "../pages/Home";
import ViewReport from "../pages/ViewReport";

export function Routes() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/report/:id", element: <ViewReport /> },
    { path: "/createReport", element: <CreateReport /> },
    { path: "*", element: <Home /> },
  ]);
  return routes;
}
