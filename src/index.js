import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PageOne from "./componenets/PageOne";
import PageTwo from "./componenets/Page2/PageTwo";
import PageThree from "./componenets/Page3/PageThree";
import PageFour from "./componenets/Page4/PageFour";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <PageOne />
    {/* <PageTwo /> */}
    {/* <PageThree /> */}
    {/* <PageFour /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
