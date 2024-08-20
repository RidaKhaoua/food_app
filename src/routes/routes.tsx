import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Notfoud from "@pages/NotFound/Notfoud";

const Mainlayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
const HomePage = lazy(() => import("@pages/Home/HomePage"));
const Cart = lazy(() => import("@pages/Cart/Cart"));
const PlaceOrder = lazy(() => import("@pages/PlaceOrder/PlaceOrder"));

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Notfoud/>, 
    element: (
      <Suspense fallback={<div className="d-flex align-items-center justify-content-center h-100">Loading...</div>}>
        <Mainlayout />
      </Suspense>
    ),
    children: [
        {index:true, element: <HomePage/>},
        {
            path:"Cart",
            element: <Suspense>
                <Cart/>
            </Suspense>
        },
        {
            path:"placeOrder",
            element: <Suspense>
                <PlaceOrder/>
            </Suspense>
        }
    ]
  },
]);

const Routes = () => {
    return <RouterProvider router={routes}/>
}

export default Routes;
