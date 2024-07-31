import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Hero from "./src/components/Hero";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import { element } from "prop-types";


const App =()=>{
    return (
        <div>
            <Header/>
            <Outlet/>
            {/* <Body/> */}
        </div>
    );

};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
              path:"/",
              element:<Hero/>
            },
            {
              path:"/shopnow",
              element:<Body/>
            }
          ],
          errorElement:<Error/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App/>);
root.render(<RouterProvider router={appRouter} />);