import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { FavoriteContextProvider } from "./store/favorites-context";

ReactDOM.render(
  <FavoriteContextProvider>
    <App />
  </FavoriteContextProvider>,
  document.getElementById("root")
);
