import React, { Fragment, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './layouts/App';
import './index.scss';
import { Routingdata } from './common/routingdata';
import { Provider } from 'react-redux';
import store from './store/index';
import PrivateRoute from './commonComponent/PrivateRoute';


// const App = lazy(() => import('./layouts/App'));
const Authenticationlayout = lazy(() => import('./layouts/Authenticationlayout'));
const Loaderimage = lazy(() => import('./layouts/loader/loader'));
const Main = lazy(() => import('./layouts/mainLayout/main'));

const Underconstruction = lazy(() => import('./components/Pages/Extension/UnderConstruction/Underconstruction'));
const Auth = lazy(() => import('./layouts/firebase/firebaseauth/auth'));
const Authlogin = lazy(() => import('./layouts/firebase/firebaseauth/authlogin'));
const Signup = lazy(() => import('./layouts/firebase/firebaseauth/signup'));
const Switcherpage = lazy(() => import('./layouts/Switcherpage'));
const Customswitcher = lazy(() => import('./components/pages/switcherpage/switcherpage'));
const ScrollToTop = lazy(() => import('./layouts/scrollTop/scrollTop'));
const CustomerDetails = lazy(() => import('./Modules/MDM/components/allMaster/customers/customerDetails'));
const BOMDetails = lazy(() => import('./Modules/MDM/components/allMaster/BOMMaster/bomDetails'));

// Authentication 
const Login = lazy(() => import('./components/authentication/login/login'));
const Register = lazy(() => import('./components/Authentication/Register/Register'));
const ForgotPassword = lazy(() => import('./components/Authentication/ForgotPassword/ForgotPassword'));
const ResetPassword = lazy(() => import('./components/authentication/forgotpassword/resetpassword'));
const Lockscreen = lazy(() => import('./components/Authentication/Lockscreen/Lockscreen'));
const Error400 = lazy(() => import('./components/Authentication/ErrorPages/Error400/Error400'));
const Error401 = lazy(() => import('./components/authentication/errorpages/error401/error401'));
const Error403 = lazy(() => import('./components/authentication/errorpages/error403/error403'));
const Error404 = lazy(() => import('./components/authentication/errorpages/error404/error404'));
const Error500 = lazy(() => import('./components/authentication/errorpages/error500/Error500'));
const Error503 = lazy(() => import('./components/authentication/errorpages/error503/Error503'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <Fragment>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<Loaderimage />}>
        <Provider store={store}>
          {/* <App/> */}
          <ScrollToTop />
          {/* <PrivateRoute> */}
          <Routes>
            {/* Auth Layout */}
            <Route path="/">
              {/* <Route index element={<Authlogin />} /> */}
              <Route path="" element={<Navigate to='/main' />} />
              <Route path="signup" element={<Signup />} />
              <Route path="main" element={<Main />} />

            </Route>

            {/* Main App Layout */}
            {Routingdata.map((route) => (
              <Route path="/" element={<App />} key={route.path}>
                <Route path={route.path} element={route.element} />
              </Route>
            ))}

            {/* Switcher Page */}
            <Route path="/" element={<Switcherpage />}>
              <Route path="pages/switcherpage" element={<Customswitcher />} />
            </Route>

            {/* Authentication Layout */}
            <Route path="/" element={<Authenticationlayout />}>
              <Route path="authentication/login" element={<Login />} />
              <Route path="authentication/register" element={<Register />} />
              <Route path="authentication/forgotpassword" element={<ForgotPassword />} />
              <Route path="authentication/forgotpassword" element={<ForgotPassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />

              <Route path="authentication/lockscreen" element={<Lockscreen />} />
              <Route path="authentication/errorpages/error400" element={<Error400 />} />
              <Route path="authentication/errorpages/error401" element={<Error401 />} />
              <Route path="authentication/errorpages/error403" element={<Error403 />} />
              <Route path="authentication/errorpages/error404" element={<Error404 />} />
              <Route path="authentication/errorpages/error500" element={<Error500 />} />
              <Route path="authentication/errorpages/error503" element={<Error503 />} />
              <Route path="pages/extension/underconstruction" element={<Underconstruction />} />
              <Route path="*" element={<Error400 />} />
            </Route>
          </Routes>
          {/* </PrivateRoute> */}
        </Provider>
      </Suspense>
    </BrowserRouter>
  </Fragment>
);
