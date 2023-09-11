import "./index.css";
import "@fontsource/open-sans";

import React from "react";
import ReactDOM from "react-dom/client";
import MyAccount from "./components/account/my-account";
import MyOrders from "./components/account/my-orders";
import MyVouchers from "./components/account/my-vouchers";

import App from "./pages/app";
import Home from "./pages/home";
import Admin from "./pages/admin";
import Login from "./pages/login";
import store from "./store";
import Account from "./pages/account";
import Register from "./pages/register";
import ManageBooks from "./pages/manage-books";
import ManageClients from "./pages/manage-clients";
import ManageReviews from "./pages/manage-reviews";
import ManageAuthors from "./pages/manage-authors";
import ForgotPassword from "./pages/forgot-password";
import ContinueRegister from "./pages/continue-register";

import { Provider } from "react-redux";
import { CloudinaryContext } from "cloudinary-react";
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CloudinaryContext cloudName="drpsorexk">
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/home" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/continue-register" element={<ContinueRegister />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/manage-clients" element={<ManageClients />} />
              <Route path="/manage-authors" element={<ManageAuthors />} />
              <Route path="/manage-reviews" element={<ManageReviews />} />
              <Route path="/manage-books" element={<ManageBooks />} />
              <Route path="/account" element={<Account />}>
                <Route path="/account/account" element={<MyAccount />} />
                <Route path="/account/orders" element={<MyOrders />} />
                <Route path="/account/vouchers" element={<MyVouchers />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </CloudinaryContext>
  </Provider>
);
