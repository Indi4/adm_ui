import React, { Fragment, useState } from 'react'
import logo from '../../../assets/images/brand/Kizuna.svg'
import logolight from '../../../assets/images/brand/KizunaWhiteLogo.svg'
import { Link, useSearchParams } from 'react-router-dom'
import { Button, Card, Col, InputGroup, Row } from 'react-bootstrap'
import { postForgotPassword } from '../../../store/authentication/forgotpasswordSlice'
import { useDispatch, useSelector } from 'react-redux'
import { PostNewForgotPassword } from '../../../store/authentication/authSlice'

export default function ResetPassword() {
    const dispatch = useDispatch();

    const { loading, error, success, NewPassword } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        password: "",
        confirm_password: "",
    });
    const [searchParams] = useSearchParams();
    const uexpt = searchParams.get('uexpt');

    React.useEffect(() => {
        if (success) {
            alert(success)
            dispatch(clearMessage());
            navigate('/login');
        }
    }, [success])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const { password, confirm_password } = formData;
    //     if (password === confirm_password) {
    //         const payload = {
    //             uexpt,
    //             password,
    //             confirm_password,
    //         };
    //         dispatch(PostNewForgotPassword(payload))

    //     } else {
    //         alert('Passwords do not match');
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { password, confirm_password } = formData;

        // Check if passwords match
        if (password === confirm_password) {
            const payload = {
                uexpt,
                password,
                confirm_password,
            };

            dispatch(PostNewForgotPassword(payload))
                .then((response) => {
                    navigate(`${import.meta.env.BASE_URL}`);
                })
                .catch((error) => {
                    console.log("Error during submission:", error);
                });
        } else {
            alert('Passwords do not match');
        }
    };




    return (
        <Fragment>
            <div className="page-content" >
                <div className="container text-center text-dark" >
                    <Row>
                        <Col lg={4} className="d-block mx-auto" >
                            <Row>
                                <Col xl={12} md={12} className="col-md-12">
                                    <Card  style={{ width: '700px', right:"190px" }} >
                                        <Card.Body  style={{ width: '700px' }} >
                                            <div className="text-center mb-6">
                                                <Link className="header-brand1" to={`${import.meta.env.BASE_URL}`}>
                                                    <img src={logo}
                                                        className="header-brand-img main-logo" alt="Sparic logo" />
                                                    <img src={logolight}
                                                        className="header-brand-img darklogo" alt="Sparic logo" />
                                                </Link>
                                            </div>
                                            <h4 className="fw-semiboild">Forgot password</h4>
                                            <form onSubmit={handleSubmit} >
                                                <InputGroup className="input-group  me-auto ms-auto mb-4">
                                                    <span className="input-group-addon bg-white">
                                                        <i className="fa fa-key text-muted-dark"></i>
                                                    </span>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        id="password"
                                                        autoComplete="new-password"
                                                        placeholder="New Password"
                                                        value={formData.password}
                                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                        required
                                                    />
                                                </InputGroup>

                                                <InputGroup className="input-group  me-auto ms-auto mb-4">
                                                    <span className="input-group-addon bg-white">
                                                        <i className="fa fa-key text-muted-dark"></i>
                                                    </span>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="confirm_password"
                                                        id="confirm_password"
                                                        placeholder="Confirm Password"
                                                        autoComplete="new-password"
                                                        value={formData.confirm_password}
                                                        onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
                                                        required
                                                    />
                                                </InputGroup>
                                                <div className="text-center">
                                                    <Button variant='primary' type="submit" className="btn btn-block">Send</Button>
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
