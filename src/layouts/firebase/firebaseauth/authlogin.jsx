import React, { useState, Fragment, useEffect } from 'react'
import { Alert, Button, Card, Col, Form, InputGroup, Nav, Row, Tab } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/brand/Kizuna.svg'
import logolight from '../../../assets/images/brand/KizunaWhiteLogo.svg'
import maxion from "../../../assets/images/brand/maxion.png"
import { auth } from '../firebaseapi/firebaseapi'
import { imagesData } from '../../../common/commomimages/imagedata'
import { login, getUser ,clearMessage} from '../../../store/authentication/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";



function Authlogin({ setIsAuthenticate }) {

  const [err, setError] = useState("");
  const [loading, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, error } = useSelector((state) => state.auth);

  const { email, password } = formData;

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email: formData.email, password: formData.password })); // Dispatch login action
  };

  useEffect(() => {
    if (success) {
      toast.success(success);
      setTimeout(() => {
        dispatch(clearMessage());
        setIsAuthenticate(true);
      }, 1000); 
    }
    if (error) {
      toast.error(error); 
    }
  }, [success, error, dispatch, navigate]);


  return (
    <Fragment>
       <ToastContainer />
      <div className="page_content">
        <div className="container text-center text-dark">
          <Row  style={{marginTop:"100px"}}>
            <Col lg={6} className="d-block mx-auto">
                <div className="d-block" >
                  <Tab.Container id="left-tabs-example" defaultActiveKey="react" >
                    <Nav className="justify-content-center authentication-tabs " >
                      {/* <Nav.Item>
                        <Nav.Link eventKey="firebase"> <img src={imagesData('firebase')} alt='logo1' /></Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item>
                        <Nav.Link eventKey="react"><img src={maxion} alt='logo2' width="100" height="50"  /></Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="react">
                        <Row>
                          <Col xl={12} md={12}>
                            <Card>
                              <Card.Body>
                                <div className="text-center mb-2">
                                  <Link className="header-brand1" to={`${import.meta.env.BASE_URL}`}>
                                    <img src={logo}
                                      className="header-brand-img main-logo" alt="Sparic logo" style={{marginLeft:"125px"}}/>
                                    <img src={logolight}
                                      className="header-brand-img darklogo" alt="Sparic logo" />
                                  </Link>
                                </div>
                                <h3 style={{color:"black",fontWeight:"bolder"}}>Login</h3>
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
                                    value={formData.email} // Bind the value to formData.email
                                    onChange={(e) =>
                                      setFormData({ ...formData, email: e.target.value }) // Update email in state
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
                                    required // Make the input required
                                  />
                                </InputGroup>
                                <Row>
                                  <div>
                                    <Button
                                      type="submit"
                                      variant="primary"
                                      className="btn btn-block"
                                      onClick={handleSubmit} // Call handleSubmit on click
                                      disabled={loading} // Disable the button while loading

                                    >
                                      {loading ? 'Loading...' : 'Login'}
                                    </Button>
                                  </div>
                                  <div className="col-12">
                                    <Link to={`${import.meta.env.BASE_URL}authentication/forgotpassword`}
                                      className="btn btn-link box-shadow-0 px-0">Forgot password?</Link>
                                  </div>
                                </Row>
                                {/* <div className="mt-6 btn-list">
                                  <Button type="button" variant="facebook" className=" btn-icon "><i
                                    className="fa fa-facebook"></i></Button>
                                  <Button type="button" variant='google' className=" btn-icon "><i
                                    className="fa fa-google"></i></Button>
                                  <Button type="button" variant='twitter' className="btn-icon "><i
                                    className="fa fa-twitter"></i></Button>
                                </div> */}
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>

            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  )
}

export default Authlogin