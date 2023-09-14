import logo from "./logo.svg";
import * as React from "react";
import "./App.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageOne from "./componenets/PageOne";
import PageTwo from "./componenets/Page2/PageTwo";
import PageThree from "./componenets/Page3/PageThree";
import PageFour from "./componenets/Page4/PageFour";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageOne />,
    },
    {
      path: "/PageTwo",
      element: <PageTwo />,
    },
    {
      path: "/PageThree",
      element: <PageThree />,
    },
    {
      path: "/PageFour",
      element: <PageFour />,
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
