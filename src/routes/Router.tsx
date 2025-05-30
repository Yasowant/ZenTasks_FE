import { RouteObject, useRoutes } from "react-router-dom";

interface RouterFle {
  allRoutes: RouteObject[];
}

const RoutesFiles: React.FC<RouterFle> = ({ allRoutes }) => {
  const routes = useRoutes(allRoutes);
  return routes;
};

export default RoutesFiles;
