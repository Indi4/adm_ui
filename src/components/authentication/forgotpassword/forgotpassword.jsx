import React, { Fragment, useState } from 'react'
import logo from '../../../assets/images/brand/Kizuna.svg'
import logolight from '../../../assets/images/brand/KizunaWhiteLogo.svg'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button, Card, Col, InputGroup, Row } from 'react-bootstrap'
import { postForgotPassword ,clearSuccessMessage} from '../../../store/authentication/forgotpasswordSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const { success, error, forgotPasswordfunc, loading } = useSelector(
    (state) => state.forgotpassword
  );

  const [formData, setFormData] = useState({
    email: "",
  });

  const navigate= useNavigate()

  React.useEffect(() => {
    if (success) {
      toast.success(success);
      setTimeout(() => {
        // navigate(`${import.meta.env.BASE_URL}resetpassword`);
      }, 1750);
    }
  }, [success]);

  React.useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email: formData.email };
    dispatch(postForgotPassword(data));
  };



  return (
    <Fragment>
      <div className="page-content">
        <div className="container text-center text-dark">
          <Row>
            <Col lg={4} className="d-block mx-auto">
              <Row>
                <Col xl={12} md={12} className="col-md-12">
                  <Card>
                    <Card.Body>
                      <div className="text-center mb-6">
                        <Link className="header-brand1" to={`${import.meta.env.BASE_URL}`}>
                          <img src={logo}
                            className="header-brand-img main-logo" alt="Sparic logo" />
                          <img src={logolight}
                            className="header-brand-img darklogo" alt="Sparic logo" />
                        </Link>
                      </div>
                      <h4 className="fw-semiboild">Forgot password</h4>
                      <form onSubmit={handleSubmit}>
                        <InputGroup className="input-group  me-auto ms-auto mb-4">
                          <span className="input-group-addon bg-white">
                            <i className="fa fa-envelope text-muted-dark"></i>
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            autoFocus
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Email address"
                            required
                          />
                        </InputGroup>
                        <div className="text-center">
                          <Button
                            variant="primary"
                            type="submit"
                            className="btn btn-block"
                            disabled={loading} // Disable button while loading
                          >
                            {loading ? 'Sending...' : 'Send'}
                          </Button>
                        </div>
                      </form>
                      <div className="mt-6 btn-list">
                        <Button variant="facebook" type="button" className="btn btn-icon btn-facebook"><i
                          className="fa fa-facebook"></i></Button>
                        <Button variant="google" type="button" className="btn btn-ico"><i
                          className="fa fa-google"></i></Button>
                        <Button variant="twitter" type="button" className="btn btn-icon"><i
                          className="fa fa-twitter"></i></Button>
                        <Button variant="dribbble" type="button" className="btn btn-icon "><i
                          className="fa fa-dribbble"></i></Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>


    </Fragment>
  )
}
