import React, { useState, Fragment } from 'react'
import { Alert, Button, Card, Col, Form, InputGroup, Nav, Row, Tab } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/brand/Kizuna.svg'
import logolight from '../../../assets/images/brand/KizunaWhiteLogo.svg'
import maxion from "../../../assets/images/brand/maxion.png"
import { auth } from '../firebaseapi/firebaseapi'
import { imagesData } from '../../../common/commomimages/imagedata'


function Authlogin() {

  const [err, setError] = useState("");
  const [loading, setLoader] = useState(false);
  const [data, setData] = useState({
    "email": "adminreact@gmail.com",
    "password": "1234567890",
  })
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
  }
  const Login = (e) => {
    setLoader(true)
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      user => { RouteChange(); setLoader(false) }).catch(err => { setError(err.message); setLoader(false) })
  }
  let navigate = useNavigate();
  const RouteChange = () => {
    let path = `${import.meta.env.BASE_URL}dashboard`;
    navigate(path);
  }

  return (
    <Fragment>
      <div className="page_content">
        <div className="container text-center text-dark">
          <Row>
            <Col lg={4} className="d-block mx-auto">
              <Row >
                <div className="d-block">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="react">
                    <Nav  className="justify-content-center authentication-tabs">
                      {/* <Nav.Item>
                        <Nav.Link eventKey="firebase"> <img src={imagesData('firebase')} alt='logo1' /></Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item>
                        <Nav.Link eventKey="react"><img src={maxion} alt='logo2' width="100" height="50" /></Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      {/* <Tab.Pane eventKey="firebase">
                        <Row>
                          <Col xl={12} md={12}>
                            <Card>
                              <Card.Body>
                                <div className="text-center mb-2">
                                  <Link className="header-brand1" to='#'>
                                    <img src={logo}
                                      className="header-brand-img main-logo" alt="Sparic logo" />
                                    <img src={logolight}
                                      className="header-brand-img darklogo" alt="Sparic logo" />
                                  </Link>
                                </div>
                                <h3>Login</h3>
                                <p className="text-muted">Sign In to your account</p>
                                {err && <Alert variant="danger">{err}</Alert>}
                                <InputGroup className="input-group mb-3">
                                  <span className="input-group-addon bg-white"><i className="fa fa-user text-dark"></i></span>
                                  <Form.Control type="text" placeholder="Username" name="email" value={email} onChange={changeHandler} required />
                                </InputGroup>
                                <InputGroup className="input-group mb-4">
                                  <span className="input-group-addon bg-white"><i
                                    className="fa fa-unlock-alt text-dark"></i></span>
                                  <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={changeHandler} required />
                                </InputGroup>
                                <Row>
                                  <div>
                                    <Link to='#' className="btn btn-primary btn-block" onClick={Login}>
                                      Login {loading ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : ""} </Link>
                                  </div>
                                  <div className="text-center pt-3">
                                    <p className="text-dark mb-0">Not a member? <Link to={`${import.meta.env.BASE_URL}firebaseauth/signup`}>
                                      Sign UP
                                    </Link></p>
                                  </div>
                                  <div className="col-12">
                                    <Link to='#'
                                      className="btn btn-link box-shadow-0 px-0">Forgot password?</Link>
                                  </div>
                                </Row>
                                <div className="mt-2 btn-list">
                                  <Button type="button" variant="facebook" className=" btn-icon "><i
                                    className="fa fa-facebook"></i></Button>
                                  <Button type="button" variant='google' className=" btn-icon "><i
                                    className="fa fa-google"></i></Button>
                                  <Button type="button" variant='twitter' className="btn-icon "><i
                                    className="fa fa-twitter"></i></Button>
                                  <Button type="button" variant='dribbble' className=" btn-icon"><i
                                    className="fa fa-dribbble"></i></Button>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Tab.Pane> */}
                      <Tab.Pane eventKey="react">
                        <Row>
                          <Col xl={12} md={12}>
                            <Card>
                              <Card.Body>
                                <div className="text-center mb-2">
                                  <Link className="header-brand1" to={`${import.meta.env.BASE_URL}main`}>
                                    <img src={logo}
                                      className="header-brand-img main-logo" alt="Sparic logo" />
                                    <img src={logolight}
                                      className="header-brand-img darklogo" alt="Sparic logo" />
                                  </Link>
                                </div>
                                <h3>Login</h3>
                                <p className="text-muted">Sign In to your account</p>
                                <InputGroup className="input-group mb-3">
                                  <span className="input-group-addon bg-white"><i className="fa fa-user text-dark"></i></span>
                                  <input type="text" className="form-control" placeholder="Username" />
                                </InputGroup>
                                <InputGroup className="input-group mb-4">
                                  <span className="input-group-addon bg-white"><i
                                    className="fa fa-unlock-alt text-dark"></i></span>
                                  <input type="password" className="form-control" placeholder="Password" />
                                </InputGroup>
                                <Row>
                                  <div>
                                    <Link to={`${import.meta.env.BASE_URL}main`} className="btn btn-primary btn-block">Login</Link>
                                  </div>
                                  <div className="col-12">
                                    <Link to={`${import.meta.env.BASE_URL}authentication/forgotpassword`}
                                      className="btn btn-link box-shadow-0 px-0">Forgot password?</Link>
                                  </div>
                                </Row>
                                <div className="mt-6 btn-list">
                                  <Button type="button" variant="facebook" className=" btn-icon "><i
                                    className="fa fa-facebook"></i></Button>
                                  <Button type="button" variant='google' className=" btn-icon "><i
                                    className="fa fa-google"></i></Button>
                                  <Button type="button" variant='twitter' className="btn-icon "><i
                                    className="fa fa-twitter"></i></Button>
                                </div>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </Row>

            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  )
}

export default Authlogin