import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Item from "./components/Item";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import AppStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import { NotificationProvider } from "./utils/useNotification";

const App = () => {
  return (
    <NotificationProvider>
      <Provider store={AppStore}>
        <div className="font-poppins">
          <Header />
          <Outlet />
        </div>
      </Provider>
    </NotificationProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/item/:itemId",
        element: <Item />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
