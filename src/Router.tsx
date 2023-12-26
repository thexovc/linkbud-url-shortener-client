import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Surl from "./page/su/Surl";
import Home from "./page/home/Index";
import NoMatch from "./NoMatch";

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="su/:slug" element={<Surl />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Router;
