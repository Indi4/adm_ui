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
import { login, signup } from "../../store/authentication/authSlice";
import Login_bg from "../../common/commomimages/login_bg.jpg";
import ADM_logo from '../../assets/images/ADM/ADM_logo.png'

import { Token } from "@mui/icons-material";
import { Autocomplete, TextField } from "@mui/material";
// import { getAllPlantData } from "../../store/masterData/masters/andonPlantDetailsSlice";

function Authlogin({ setIsAuthenticate }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword:""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken, loading, error, success } = useSelector((state) => state.auth); // Include error from state
//    const { data: plantData } = useSelector(
//       (state) => state.andonPlantMasterDetails
//     );
  const [plantName, setPlantName] = useState("");


  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if(formData.password !== formData.confirmPassword){
        toast.error("Password and Confirmed Password is not same")
    }else{
        e.preventDefault(); // Prevent default form submission
        dispatch(
          signup({
            email: formData.email,
            password: formData.password,
          })
        );
    }
  };

//    useEffect(() => {  
//       dispatch(getAllPlantData({ type: "plant" }));
//     }, [dispatch]);


  useEffect(() => {
    if (success) {
      toast.success("Signup successful! Redirecting...", { autoClose: 2000 });
      setTimeout(() => navigate("/"), 2000);
      // navigate('/dashboard')
    }

    if (error) {
      toast.error(error, { autoClose: 3000 });
    }
  }, [error, success]);

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
                        {/* <h2 style={{display:"flex"}}>Andon</h2> */}
                        {/* Andon */}
                      </center>
                    </div>
                    <h3 style={{ color: "black", fontWeight: "bolder", marginTop:"10px" }}>
                      SIGNUP
                    </h3>
                    <p className="text-muted">Create A New Account</p>

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
                    <InputGroup className="input-group mb-4">
                      <span className="input-group-addon bg-white">
                        <i className="fa fa-unlock-alt text-dark"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        id="confirmPassword"
                        autoComplete="current-password"
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        required
                      />
                    </InputGroup>
                    {/* <InputGroup className="mb-4" style={{display:"flex"}}>
                      <span className="input-group-addon bg-white">
                      <i class="fa fa-industry" aria-hidden="true"></i>
                      </span>
                      <Autocomplete
                                      options={plantData || []}
                                      getOptionLabel={(option) => option.plant_name || ""}
                                      value={
                                        plantData.find(
                                          (plant) => plant.plant_name === plantName
                                        ) || null
                                      }
                                      onChange={(event, value, reason) =>
                                        handleInputChange(event, value, reason)
                                      }
                                      renderInput={(params) => (
                                        <TextField {...params} label="Plant Name" />
                                      )}
                                    sx={{
                                        width:"91%"
                                    }}
                                      disableClearable={false}
                                    />
                    </InputGroup> */}
                    <Row>
                      <div>
                        <Button
                          type="submit"
                          variant="primary"
                          className="btn btn-block"
                          onClick={handleSubmit}
                          disabled={loading}
                        >
                          {loading ? "Signing Up..." : "Signup"}
                        </Button>
                      </div>
                    </Row>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
}

export default Authlogin;