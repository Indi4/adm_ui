import React, { Fragment, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./layouts/App";
import "./index.scss";
import { Routingdata } from "./routes/routingdata";
import { Provider } from "react-redux";
import store from "./store/index";
import PrivateRoute from "./routes/PrivateRoute";
import Signup from "./Modules/Login/Signup"
import ForgotPassword from "./components/authentication/forgotpassword/forgotpassword";

// const App = lazy(() => import('./layouts/App'));
const Loaderimage = lazy(() => import("./layouts/loader/loader"));

const Authlogin = lazy(() => import("./Modules/Login/authlogin"));
const ScrollToTop = lazy(() => import("./layouts/scrollTop/scrollTop"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<Loaderimage />}>
        <Provider store={store}>
          <ScrollToTop />
          <Routes>
            {/* <Route path="/"> */}
            <Route
              path="/"
              element={
                <PrivateRoute isPublic>
                  <Authlogin />
                </PrivateRoute>
              }
            />
            {/* </Route> */}
            <Route
              path="/signup"
              element={
                <PrivateRoute isPublic>
                  {/* <AuthLogin /> */}
                  <Signup />
                </PrivateRoute>
              }
            />
            <Route
              path="/forgotpassword"
              element={
                  <ForgotPassword />
                // </PrivateRoute>
              }
            />

            <Route path="/" element={
              <PrivateRoute>
                <App />
              </PrivateRoute>
              } 
              >
              {Routingdata.map((route) => (
                <Route path={route.path} element={route.element} key={route.path} />
              ))}
            </Route>
          </Routes>
        </Provider>
      </Suspense>
    </BrowserRouter>
  </Fragment>
);
