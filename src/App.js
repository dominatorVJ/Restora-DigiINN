import React from "react";
import ReactDOM from "react-dom/client";
import Header from "/src/components/Header/Header.js";
import Body from "/src/components/Body/Body.js";
import About from "/src/components/Body/About/About.js"
import Contact from "/src/components/Body/Contact/Contact.js"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

/**
 * Wireframe/Design Mock:
 * -Header
 *   -Logo
 *   -Nav Items
 * -Body
 *   -Search input
 *   -Restaurant Container
 *     -Restaurant Card
 *      -Restaurant Name
 *      -Category
 *      -Rating
 * -Footer
 *   -Copyright
 *   -Social Links
 *   -Address
 *   -Contacts
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    }
  ]
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
