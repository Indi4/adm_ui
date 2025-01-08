import React, { Fragment, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./layouts/App";
import "./index.scss";
import { Routingdata } from "./routes/routingdata";
import { Provider } from "react-redux";
import store from "./store/index";

// const App = lazy(() => import('./layouts/App'));
const Loaderimage = lazy(() => import("./layouts/loader/loader"));

const Authlogin = lazy(() =>
  import("./Modules/Login/authlogin")
);
const ScrollToTop = lazy(() => import("./layouts/scrollTop/scrollTop"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<Loaderimage />}>
        <Provider store={store}>
          <ScrollToTop />
          <Routes>
            <Route path="/">
              <Route path="" element={<Authlogin />} />
            </Route>

            {Routingdata.map((route) => (
              <Route path="/" element={<App />} key={route.path}>
                <Route path={route.path} element={route.element} />
              </Route>
            ))}
          </Routes>
        </Provider>
      </Suspense>
    </BrowserRouter>
  </Fragment>
);
