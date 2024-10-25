
import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/brand/Kizuna.svg'
import logolight from '../../assets/images/brand/KizunaWhiteLogo.svg'
import { Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Form, FormControl, InputGroup, ListGroup, Nav, Navbar } from 'react-bootstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { imagesData } from "../../common/commomimages/imagedata"
import MenuItems from '../sidebar/sidebardata'
import { Typography, CircularProgress, Card, Box, DialogActions, TextField, DialogTitle, Dialog, DialogContent, Button, IconButton, InputAdornment, Divider, Avatar, Grid } from "@mui/material";
import { getMyAccount, PostChangePassword } from '../../store/authentication/authSlice'
import { jwtDecode } from "jwt-decode";



function Header() {

    //Search functionality
    const { role, accountDetails, ResetPassword, loading, error } = useSelector((state) => state.auth);
    const token = localStorage.getItem("accessToken");
    const decoded = jwtDecode(token)
    const user_id = decoded?.user_id
    const [show1, setShow1] = useState(false);
    const [InputValue, setInputValue] = useState("");
    const [show2, setShow2] = useState(false);
    const [searchcolor, setsearchcolor] = useState("text-dark");
    const [searchval, setsearchval] = useState("Type something");
    const [NavData, setNavData] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);
    const [isAccountOpen, setIsAccountOpen] = useState(false);

    const handleToggleShowOldPassword = () => setShowOldPassword(!showOldPassword);
    const handleToggleShowNewPassword = () => setShowNewPassword(!showNewPassword);
    const handleToggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prevState => !prevState);

    useEffect(() => {
        if (user_id) {
            dispatch(getMyAccount(user_id));
        }
    }, [dispatch, user_id]);

    const handleChangePasswordClick = () => {
        setOldPassword("")
        setIsChangingPassword(true);
    };
    const handleAccount = () => {
        setIsAccountOpen(true);
    };
    const handleCloseAccountDialog = () => {
        setIsChangingPassword(false);
        setIsAccountOpen(false)
    };

    const handleSavePassword = async () => {
        if (newPassword !== confirmPassword) {
            alert("New password and confirm password do not match!");
            return;
        }

        const data = {
            id: user_id,
            old_password: oldPassword,
            new_password: newPassword,
            confirm_password: confirmPassword,
        };

        try {
            await dispatch(PostChangePassword(data)).unwrap();
            toast("Password changed successfully!");
            handleCloseAccountDialog();
        } catch (err) {
            toast("Incorrect old password provided");
        }
    };

    const isPasswordStrong = (password) => {
        const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;
        return strongPasswordRegex.test(password);
    };
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        // dispatch(removeRole());
        navigate("/main")
    };

    document.addEventListener("click", function () {
        document.querySelector(".search-result")?.classList.add("d-none")
    });
    let myfunction = (inputvalue) => {

        document.querySelector(".search-result")?.classList.remove("d-none")

        let i = []
        let allElement2 = [];

        MenuItems.map(mainlevel => {
            if (mainlevel.Items) {
                setShow1(true)
                mainlevel.Items.map(sublevel => {

                    if (sublevel.children) {
                        sublevel.children.map(sublevel1 => {

                            i.push(sublevel1)
                            if (sublevel1.children) {
                                sublevel1.children.map(sublevel2 => {

                                    i.push(sublevel2)
                                    return sublevel2;
                                })
                            }
                            return sublevel1;
                        })
                    }
                    return sublevel;
                })
            }
            return mainlevel;
        }
        )
        for (let allElement of i) {
            if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
                if (allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
                    setShow2(true)
                    allElement2.push(allElement)
                }
            }
        }
        if (!allElement2.length || inputvalue === "") {
            if (inputvalue === "") {
                setShow2(false);
                setsearchval("Type something")
                setsearchcolor('text-dark')
            }
            if (!allElement2.length) {
                setShow2(false);
                setsearchcolor('text-danger')
                setsearchval("There is no component with this name")
            }
        }
        setNavData(allElement2)

    }

    const Darkmode = () => {

        if (document.querySelector(".app").classList.contains('dark-mode')) {

            sessionStorage.setItem("darkMode", false)
            // sessionStorage.removeItem("darkMode")
            document.querySelector(".app").classList.remove('dark-mode');
            let DarkMenu1 = document.querySelector("#myonoffswitch1") //light theme
            DarkMenu1.checked = true;
            let DarkMenu2 = document.querySelector("#myonoffswitch6")  // light header
            DarkMenu2.checked = true;
            let DarkMenu3 = document.querySelector("#myonoffswitch3")  //light menu
            DarkMenu3.checked = true;
        }
        else {
            sessionStorage.setItem("darkMode", true)
            // sessionStorage.remove("lightMode")
            document.querySelector(".app").classList.add('dark-mode');
            let DarkMenu1 = document.querySelector("#myonoffswitch2") //dark theme
            DarkMenu1.checked = true;
            let DarkMenu2 = document.querySelector("#myonoffswitch8") //dark header
            DarkMenu2.checked = true;
            let DarkMenu3 = document.querySelector("#myonoffswitch5") //dark menu
            DarkMenu3.checked = true;
        }
    }

    // FuScreen-start
    function Fullscreen() {
        if (
            (document.fullScreenElement && document.fullScreenElement === null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)
        ) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen()
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen()
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(
                    Element.ALLOW_KEYBOARD_INPUT
                )
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
            }
        }
    }
    // FullScreen-end

    // rightsiderbar
    const OPenfunction = () => {
        // document.querySelector('.sidebar-right').classList.toggle('sidebar-open');
    }
    //
    // SwitcherMenu	
    const SwitcherIcon = () => {
        document.querySelector(".demo_changer").classList.toggle("active");
        document.querySelector(".demo_changer").style.right = "0px";

    }

    //
    const SideMenuIcon = () => {
        //leftsidemenu
        document.querySelector(".app").classList.toggle("sidenav-toggled");
    }



    return (
        <Fragment>


            <div className="app-header header sticky" style={{ marginBottom: '-70.7812px' }}>
                <Container fluid className=" main-container">
                    <div className="d-flex">
                        <Link aria-label="Hide Sidebar" className="app-sidebar__toggle" data-bs-toggle="sidebar"

                            onClick={() => SideMenuIcon()}

                            to="#"></Link>

                        <Link className="logo-horizontal" to={`${import.meta.env.BASE_URL}dashboard`}>
                            <img src={logo} className="header-brand-img main-logo"
                                alt="Sparic logo" />
                            <img src={logolight} className="header-brand-img darklogo"
                                alt="Sparic logo" />
                        </Link>
                       
                        {/* <div className="main-header-center ms-3 d-none d-lg-block">
                            <Form.Control type="text" defaultValue ={InputValue} id="typehead" placeholder="Search for results..." 
                                autoComplete="off" onChange={(ele => { myfunction(ele.target.value); setInputValue(ele.target.value) })} />
                            <Button variant='' className="btn px-2 "><i className="fe fe-search" aria-hidden="true"></i></Button>
                            {show1 ?
							<div className="card search-result position-absolute z-index-9 search-fix  border mt-1">
								<div className="card-header">
									<h4 className="card-title me-2 text-break">Search result of {InputValue}</h4>
								</div>
								<ListGroup className='mt-2'>
									{show2 ?
										NavData.map((e) =>
											<ListGroup.Item key={Math.random()} className="">
												<Link to={`${e.path}/`} className='search-result-item' onClick={() => { setShow1(false), setInputValue("") }}>{e.title}</Link>
											</ListGroup.Item>
										)
										: <b className={`${searchcolor} `}>{searchval}</b>}
								</ListGroup>

							</div>
							: ""}
                        </div> */}
                        <Navbar className="d-flex order-lg-2 ms-auto header-right-icons px-0" expand="lg">
                            <Dropdown className="d-none">
                                <Dropdown.Toggle as="a" href="#" variant='light' className="no-caret nav-link icon " >
                                    <i className="fe fe-search"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className=" header-search dropdown-menu-start">
                                    <InputGroup className=" w-100 p-2">
                                        <Form.Control type="text" placeholder="Search...." />
                                        <InputGroup.Text variant='primary' className=" btn btn-primary me-2">
                                            <i className="fe fe-search" aria-hidden="true"></i>
                                        </InputGroup.Text>
                                    </InputGroup>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Navbar.Toggle className="navbar-toggler navresponsive-toggler d-lg-none ms-auto" type="button"
                                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4"
                                aria-controls="navbarSupportedContent-4" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon fe fe-more-vertical"></span>
                            </Navbar.Toggle>
                            <div className="responsive-navbar p-0">
                                <Navbar.Collapse className="" id="navbarSupportedContent-4">
                                    <div className="d-flex order-lg-2">
                                        <Dropdown className=" d-lg-none d-flex">
                                            <Dropdown.Toggle as='a' to="#" className=" no-caret nav-link icon"
                                                data-bs-toggle="dropdown">
                                                <i className="fe fe-search"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className=" header-search dropdown-menu-start">
                                                <InputGroup className="w-100 p-2">
                                                    <Form.Control type="text" placeholder="Search...." />
                                                    <InputGroup.Text className="input-group-text btn btn-primary">
                                                        <i className="fa fa-search" aria-hidden="true"></i>
                                                    </InputGroup.Text>
                                                </InputGroup>
                                            </Dropdown.Menu>
                                        </Dropdown>


                                        <div className="d-flex country" onClick={() => Darkmode()}>
                                            
                                            <Link to='#' className="nav-link icon theme-layout nav-link-bg layout-setting">
                                                <span className="dark-layout mt-1"><i className="ri-moon-clear-line"></i></span>
                                                <span className="light-layout mt-1"><i className="ri-sun-line"></i></span>
                                            </Link>
                                        </div>

                                        <div className="dropdown d-flex">
                                            <Link className="nav-link icon full-screen-link" id="fullscreen-button" onClick={Fullscreen}>
                                                <i className="ri-fullscreen-exit-line fullscreen-button"></i>
                                            </Link>
                                        </div>

                                        {/* <div className="dropdown d-flex header-settings" onClick={() => OPenfunction()}>
                                            <Link className=" nav-link icon siderbar-link">
                                                <i className="ri-menu-fold-fill"></i>
                                            </Link>
                                        </div> */}
                                        <div className="dropdown d-flex header-settings">
                                            <Link
                                                className="nav-link icon siderbar-link"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleMenu(); // Call the toggleMenu function to control the dropdown state
                                                }}
                                                data-bs-toggle="dropdown" // Bootstrap attribute to toggle the dropdown
                                                aria-expanded={menuOpen} // Reflects whether the menu is open or closed
                                            >
                                                {/* Icon remains the same as the original one */}
                                                <i className="ri-menu-fold-fill" style={{ color: "inherit" }}></i>
                                            </Link>

                                            {/* Bootstrap dropdown menu */}
                                            <ul className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        onClick={() => {
                                                            navigate("/cdn/dashboard", { state: { layout: "CDC_Tool" } });
                                                            sessionStorage.setItem("layout", "CDC_Tool");
                                                        }}
                                                    >
                                                        Delivery Management
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        onClick={() => {
                                                            navigate("/mdm/customer-details", { state: { layout: "MDM" } });
                                                            sessionStorage.setItem("layout", "MDM");
                                                        }}
                                                    >
                                                        Master Data Management
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>





                                        <Dropdown className="dropdown d-flex profile-1">
                                            <Dropdown.Toggle as='a' variant='' className="no-caret nav-link leading-none d-flex">
                                                <img src={imagesData('maxionLogo')} alt="profile-user"
                                                    className="avatar  profile-user  cover-image" style={{ width: '4rem' }} />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                                                data-bs-popper="none">
                                                <div className="drop-heading">
                                                    <div className="text-center">
                                                        <h5 className="text-dark mb-0 fw-semibold">Alison</h5>
                                                        <span className="text-muted fs-12">Administrator</span>
                                                    </div>
                                                </div>
                                                <Dropdown.Item className="text-dark fw-semibold border-top" onClick={handleAccount}>
                                                    <i className="dropdown-icon fe fe-user"></i> My Account
                                                </Dropdown.Item>
                                                <Dialog
                                                    open={isAccountOpen}
                                                    onClose={handleCloseAccountDialog}
                                                    maxWidth="sm"
                                                    fullWidth
                                                    PaperProps={{
                                                        style: { borderRadius: "12px", padding: "24px", minHeight: "450px" },
                                                    }}
                                                >
                                                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" width="100%">
                                                        {accountDetails?.data?.[0] && (
                                                            <Avatar
                                                                sx={{
                                                                    bgcolor: accountDetails.data[0].role === "Admin" ? "blue" : "green",
                                                                    width: 80,
                                                                    height: 80,
                                                                    fontSize: 40,
                                                                    marginBottom: 2,
                                                                }}
                                                            >
                                                                {accountDetails.data[0]?.role?.[0]?.toUpperCase() ?? "?"}
                                                            </Avatar>
                                                        )}

                                                        {accountDetails?.data?.[0] ? (
                                                            <DialogContent dividers style={{ paddingBottom: "20px" }}>
                                                                <Box mb={2} width="80%" mt={4}>
                                                                    <Grid container spacing={2} justifyContent="center" width="80%">
                                                                        {/* Role Section */}
                                                                        <Grid item xs={4}>
                                                                            <Typography variant="body1"><strong>Role:</strong></Typography>
                                                                        </Grid>
                                                                        <Grid item xs={8}>
                                                                            <Typography variant="body1" sx={{ marginLeft: "100px" }}>
                                                                                {accountDetails.data[0].role ? accountDetails.data[0].role.charAt(0).toUpperCase() + accountDetails.data[0].role.slice(1).toLowerCase() : ""}
                                                                            </Typography>
                                                                        </Grid>

                                                                        {/* Email Section */}
                                                                        <Grid item xs={4}>
                                                                            <Typography variant="body1"><strong>Email:</strong></Typography>
                                                                        </Grid>
                                                                        <Grid item xs={8}>
                                                                            <Typography variant="body1" sx={{ marginLeft: "100px" }}>
                                                                                {accountDetails.data[0].email ? accountDetails.data[0].email : "--"}
                                                                            </Typography>
                                                                        </Grid>

                                                                        {/* Mobile Section */}
                                                                        <Grid item xs={4}>
                                                                            <Typography variant="body1"><strong>Mobile:</strong></Typography>
                                                                        </Grid>
                                                                        <Grid item xs={8}>
                                                                            <Typography variant="body1" sx={{ marginLeft: "100px" }}>
                                                                                {accountDetails.data[0].mobile_no ? accountDetails.data[0].mobile_no : "--"}
                                                                            </Typography>
                                                                        </Grid>

                                                                        <Grid item xs={4}>
                                                                            <Typography variant="body1"><strong>Department:</strong></Typography>
                                                                        </Grid>
                                                                        <Grid item xs={8}>
                                                                            <Typography variant="body1" sx={{ marginLeft: "100px" }}>
                                                                                {accountDetails.data[0].department_name ? accountDetails.data[0].department_name : "--"}
                                                                            </Typography>
                                                                        </Grid>
                                                                    </Grid>
                                                                </Box>
                                                            </DialogContent>
                                                        ) : (
                                                            <Typography>No account details available.</Typography>
                                                        )}

                                                        {isChangingPassword ? (
                                                            <Box width="100%">
                                                                {/* Old Password Field */}
                                                                {/* <TextField
                                                                    label="Old Password"
                                                                    type={showOldPassword ? "text" : "password"}
                                                                    fullWidth
                                                                    margin="normal"
                                                                    value={oldPassword}
                                                                    onChange={(e) => setOldPassword(e.target.value)}
                                                                    InputProps={{
                                                                        endAdornment: (
                                                                            <InputAdornment position="end">
                                                                                <IconButton onClick={handleToggleShowOldPassword}>
                                                                                    {showOldPassword ? <VisibilityOff /> : <Visibility />}
                                                                                </IconButton>
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                /> */}
                                                                <div className="input-group mb-4">
                                                                    <span className="input-group-addon bg-white">
                                                                        <i className="fa fa-lock text-dark"></i>
                                                                    </span>
                                                                    <input
                                                                        type={showOldPassword ? "text" : "password"}  // Toggling between text and password
                                                                        className="form-control"
                                                                        placeholder="Old Password"
                                                                        name="oldPassword"
                                                                        id="oldPassword"
                                                                        value={oldPassword}
                                                                        onChange={(e) => {

                                                                            setOldPassword(e.target.value)
                                                                        }

                                                                        } // Set old password on change

                                                                        required
                                                                    />
                                                                    <div className="input-group-append">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-outline-secondary"
                                                                            onClick={handleToggleShowOldPassword}  // Toggle visibility
                                                                        >
                                                                            {showOldPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                {/* <TextField
                                                                    label="New Password"
                                                                    type={showNewPassword ? "text" : "password"}
                                                                    fullWidth
                                                                    margin="normal"
                                                                    value={newPassword}
                                                                    onChange={(e) => {
                                                                        const password = e.target.value;
                                                                        setNewPassword(password);
                                                                        // Password validation
                                                                        if (password.length < 8) {
                                                                            setPasswordError("Password must be at least 8 characters long.");
                                                                        } else {
                                                                            setPasswordError(null);
                                                                        }
                                                                        if (confirmPassword && password !== confirmPassword) {
                                                                            setConfirmPasswordError("Passwords do not match.");
                                                                        } else {
                                                                            setConfirmPasswordError(null);
                                                                        }
                                                                    }}
                                                                    error={!!passwordError}
                                                                    helperText={passwordError}
                                                                    InputProps={{
                                                                        endAdornment: (
                                                                            <InputAdornment position="end">
                                                                                <IconButton onClick={handleToggleShowNewPassword}>
                                                                                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                                                                </IconButton>
                                                                            </InputAdornment>
                                                                        ),
                                                                    }}
                                                                /> */}
                                                                <div className="input-group mb-4">
                                                                    <span className="input-group-addon bg-white">
                                                                        <i className="fa fa-unlock-alt text-dark"></i>
                                                                    </span>
                                                                    <input
                                                                        type={showNewPassword ? "text" : "password"}  // Toggling between text and password
                                                                        className="form-control"
                                                                        placeholder="New Password"
                                                                        name="password"
                                                                        id="password"
                                                                        // autoComplete="current-password"
                                                                        value={newPassword}
                                                                        onChange={(e) => {
                                                                            const password = e.target.value;
                                                                            setNewPassword(password);

                                                                            // Password validation
                                                                            if (password.length < 8) {
                                                                                setPasswordError("Password must be at least 8 characters long.");
                                                                            } else {
                                                                                setPasswordError(null);
                                                                            }

                                                                            if (confirmPassword && password !== confirmPassword) {
                                                                                setConfirmPasswordError("Passwords do not match.");
                                                                            } else {
                                                                                setConfirmPasswordError(null);
                                                                            }
                                                                        }}
                                                                        required
                                                                    />
                                                                    <div className="input-group-append">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-outline-secondary"
                                                                            onClick={handleToggleShowNewPassword}
                                                                        >
                                                                            {showNewPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                {passwordError && <div className="text-danger">{passwordError}</div>}

                                                                <div className="input-group mb-4">
                                                                    <span className="input-group-addon bg-white">
                                                                        <i className="fa fa-lock text-dark"></i>
                                                                    </span>
                                                                    <input
                                                                        type={showConfirmPassword ? "text" : "password"}  // Toggling between text and password
                                                                        className="form-control"
                                                                        placeholder="Confirm Password"
                                                                        name="confirmPassword"
                                                                        id="confirmPassword"
                                                                        value={confirmPassword}
                                                                        onChange={(e) => {
                                                                            const confirmPwd = e.target.value;
                                                                            setConfirmPassword(confirmPwd);

                                                                            // Password match validation
                                                                            if (newPassword && confirmPwd !== newPassword) {
                                                                                setConfirmPasswordError("Passwords do not match.");
                                                                            } else {
                                                                                setConfirmPasswordError(null);
                                                                            }
                                                                        }}
                                                                        required
                                                                    />
                                                                    <div className="input-group-append">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-outline-secondary"
                                                                            onClick={handleToggleShowConfirmPassword}
                                                                        >
                                                                            {showConfirmPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                {confirmPasswordError && <div className="text-danger">{confirmPasswordError}</div>}

                                                            </Box>
                                                        ) : (
                                                            <Box display="flex" justifyContent="center" mt={2}>
                                                                <Typography
                                                                    variant="body2"
                                                                    color="primary"
                                                                    style={{ cursor: "pointer", textDecoration: "underline" }}
                                                                    onClick={handleChangePasswordClick}
                                                                >
                                                                    Change Password
                                                                </Typography>
                                                            </Box>
                                                        )}
                                                    </Box>

                                                    <DialogActions>
                                                        {!isChangingPassword ? (
                                                            <Button onClick={handleCloseAccountDialog} variant="outlined" sx={{ borderRadius: "7px", width: "150px" }}>
                                                                Close
                                                            </Button>
                                                        ) : (
                                                            <>
                                                                <Button onClick={handleCloseAccountDialog} variant="outlined"
                                                                    color="error" sx={{ borderRadius: "7px", width: "150px" }}>
                                                                    Cancel
                                                                </Button>
                                                                <Button onClick={handleSavePassword} variant="contained" sx={{ borderRadius: "7px", width: "150px" }}>
                                                                    Save
                                                                </Button>
                                                            </>
                                                        )}
                                                    </DialogActions>
                                                </Dialog>


                                                <Dropdown.Item className="text-dark fw-semibold" href={`${import.meta.env.BASE_URL}pages/mailinbox`}>
                                                    <i className="dropdown-icon fe fe-mail"></i> Inbox
                                                    <span className="badge bg-success float-end">3</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item className="text-dark fw-semibold" href={`${import.meta.env.BASE_URL}pages/extension/settings`}>
                                                    <i className="dropdown-icon fe fe-settings"></i> Settings
                                                </Dropdown.Item>
                                                <Dropdown.Item className="text-dark fw-semibold" href={`${import.meta.env.BASE_URL}pages/extension/faqs`} >
                                                    <i className="dropdown-icon fe fe-alert-triangle"></i>
                                                    Support ?
                                                </Dropdown.Item>
                                                <Dropdown.Item className="text-dark fw-semibold" onClick={handleLogout}>
                                                    <i className="dropdown-icon fe fe-log-out"></i> Sign
                                                    out
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </Navbar.Collapse>
                            </div>
                            <div className="demo-icon nav-link icon" onClick={() => SwitcherIcon()}>
                                <i className="fe fe-settings fa-spin text_primary"></i>
                            </div>
                        </Navbar>
                    </div>
                </Container>
            </div>
            <div className="jumps-prevent" style={{ paddingTop: '70.7812px' }}></div>

        </Fragment>)
}
export default Header
