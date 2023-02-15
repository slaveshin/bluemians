import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";

import Routes from "./Routes";

const rootNode = document.getElementById("root");

ReactDOM.createRoot(rootNode).render(
  <>
    <GlobalStyle />
    <Routes />
  </>
);
