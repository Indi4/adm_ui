import React, { useState, Fragment, useEffect } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/brand/Kizuna.svg";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import { login } from "../../store/authentication/authSlice";
import Login_bg from "../../common/commomimages/login_bg.jpg";
import ADM_logo from '../../assets/images/ADM/ADM_logo.png'
import { Token } from "@mui/icons-material";

function Authlogin({ setIsAuthenticate }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken, loading, error } = useSelector((state) => state.auth); // Include error from state
  const currentUser = localStorage.getItem("token");

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    dispatch(
      login({
        email: formData.email,
        password: formData.password,
      })
    );
  };

  useEffect(() => {
    if (currentUser) {
      toast.success("Login successful! Redirecting...", { autoClose: 2000 });
      setTimeout(() => navigate("/safety"), 2000);
      // navigate('/dashboard')
    }

    if (error) {
      toast.error(error, { autoClose: 3000 });
    }
  }, [accessToken, error]);

  return (
    <Fragment>
      <ToastContainer />
      <div
        className="page_content"
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ddfcff",
          overflow: "hidden",
        }}
      >
        <div
          className="login-bg"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: "1",
            overflow: "hidden",
          }}
        >
          <img
            src={Login_bg}
            alt="Kizuna"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: "0.8",
              filter: "blur(2px)",
            }}
          />
        </div>
        <div className="login-container container text-center text-dark">
          <Row>
            <Col lg={6} className="mx-auto">
              <div
                className="login-content"
                style={{
                  position: "relative",
                  zIndex: "2",
                  maxWidth: "1000px",
                  width: "90%",
                  padding: "2rem",
                  backgroundColor: "rgb(255 255 255 / 96%)",
                  borderRadius: "25px",
                  boxShadow: "8px 11px 17px rgb(0 147 208)",
                  display:"flex",
                  flexDirection:"column",
                }}
              >
                <Col xl={12} md={12} className="col-md-12">
                  <div>
                    <div className="text-center">
                      <center
                        style={{
                          fontSize: "40px",
                          fontWeight: "bolder",
                          color: "red",
                        }}
                      >
                        <img
                                  src={ADM_logo}
                                  className="header-brand-img main-logo"
                                  alt="Sparic logo"
                                  style={{ display: "flex" }}
                                /> 
                        {/* <h2 style={{display:"flex"}}>Andon</h2>
                        {/* Andon */}
                      </center>
                    </div>
                    <h3 style={{ color: "black", fontWeight: "bolder", marginTop:"10px" }}>
                      Login
                    </h3>
                    <p className="text-muted">Sign In to your account</p>

                    <InputGroup className="input-group mb-3">
                      <span className="input-group-addon bg-white">
                        <i className="fa fa-user text-dark"></i>
                      </span>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                      />
                    </InputGroup>

                    <InputGroup className="input-group mb-4">
                      <span className="input-group-addon bg-white">
                        <i className="fa fa-unlock-alt text-dark"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        id="password"
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={changeHandler}
                        required
                      />
                    </InputGroup>
                    <Row>
                      <div>
                        <Button
                          type="submit"
                          variant="primary"
                          className="btn btn-block"
                          onClick={handleSubmit}
                          disabled={loading}
                        >
                          {loading ? "Signing In..." : "Login"}
                        </Button>
                      </div>
                      <div className="col-12" >
                        <Link
                          to={`${
                            import.meta.env.BASE_URL
                          }signup`}
                          className="btn btn-link box-shadow-0 px-0"
                        >
                          New to ADM?
                        </Link>
                        <span className="btn btn-link box-shadow-0">|</span>
                        <Link
                          to={`${
                            import.meta.env.BASE_URL
                          }forgotpassword`}
                          className="btn btn-link box-shadow-0 px-0"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      {/* <div className="col-12">
                      <Link
                          to={`${
                            import.meta.env.BASE_URL
                          }signup`}
                          className="btn btn-link box-shadow-0 px-0"
                        >
                          New To Andon?
                        </Link>
                      </div> */}
                    </Row>
                  </div>
                </Col>
                    {/* <Link
                       to="/landingpage"
                      className="btn btn-link box-shadow-0 px-0"
                      style={{fontSize:"12px",position:"relative", top:"20px", textDecoration:"none"}}
                    >
                      Want To Know More...
                    </Link> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
}

export default Authlogin;
