import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider} from "./context";

import "./styles/globals.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThirdwebProvider desiredChainId={ChainId.BinanceSmartChainTestnet}>
      <Router>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
);
