import React from "react";
import "../styles/Main.css";
import "../styles/styles.css";
import logo from "../../assets/images/bg/logo.svg";
import homeImage from "../../assets/images/bg/home-image.png";
import { Button, Link, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import Authlogin from "../firebase/firebaseauth/authlogin";

function main() {

  const navigate = useNavigate();

	const accessToken = localStorage.getItem("accessToken");
console.log(accessToken,"accessToken");

	


  const handleCDCTooledirection = () => {
    // alert("HEEEEEEEEEEELOOOOOOOOOo")

  navigate("/cdn/dashboard");

  };

  const handleMDMRedirection = () => {
	// alert("HEEEEEEEEEEELOOOOOOOOOo")
  navigate("/mdm/customer-details");


  };

  const handleLogout = () => {
    // localStorage.removeItem("accessToken");
    // localStorage.removeItem("refreshToken");
    // dispatch(removeRole());
    // setIsAuthenticate(false);
	alert("Access token")
  };

  return (
	<>
      {/* {!isAuthenticate && <Authlogin setIsAuthenticate={setIsAuthenticate} />} */}

      {/* {isAuthenticate && ( */}
    {/* <> */}
      <div className="page-home">
        <div className="logo">
          <img src={logo} className="logo-img" alt="Kizuna" />
        </div>

        <div className="items-tips">
          <div className="item-image">
            <img src={homeImage} alt="Kizuna" />
          </div>
          <div className="item-tip tip-1" onClick={handleMDMRedirection}>
            <Link elevation={0} className="tip">
              <Typography
                className="typography"
                fontWeight="bold"
                color="black"
                variant="h5"
              >
                Master Data Management
              </Typography>
              <ArrowRightAltIcon
                style={{ color: "black", width: "100%", height: "60%" }}
              />
            </Link>
          </div>

          <div className="item-tip tip-3" onClick={handleCDCTooledirection}>
            <Link elevation={0} className="tip">
              <Typography
                className="typography"
                fontWeight="bold"
                color="black"
                variant="h5"
              >
                Demand Management
              </Typography>
              <ArrowRightAltIcon
                fontSize="inherit"
                style={{ color: "black", width: "100%", height: "60%" }}
              />
            </Link>
          </div>
        </div>
		<div className="logout-button">
              <Button
                onClick={handleLogout}
                variant="contained"
                color="secondary"
              >
                Logout
              </Button>
            </div>
      </div>
    {/* </>
	)} */}
    </>
  );
}

export default main;
