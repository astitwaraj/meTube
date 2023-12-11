import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./App";
import Body from "./Components/Body";
import WatchPage from "./Components/WatchPage";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const approute = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approute} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
