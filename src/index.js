import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./redux/favoriteJobs";
import appliedReducer from "./redux/appliedJobs";
import { AuthProvider } from "./context/AuthProvider";

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    applied: appliedReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
