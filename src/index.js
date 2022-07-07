import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { words } from "./assets/data";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const WordsContext = React.createContext([]);

root.render(
  <React.StrictMode>
    <WordsContext.Provider value={words}>
      <App />
    </WordsContext.Provider>
  </React.StrictMode>
);
