import React, { Fragment, useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { connect } from 'react-redux'
import { GET_CARDS_DATA } from "../../../Modules/endPointConfig"
import { callCommonGetAPI } from '../../../store/action/action'
import PlanByMonthComponent from './planByMonthComponent'
import ChangesMadeBycustomer from './changesMadeBycustomer'
import ChangeMadeByProductCode from './changeMadeByProductCode'
import RmRequirements from './rmRequirements'
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS CSS

function HomeComponent(props) {
    const [data, setData] = useState({})

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Whether animation should happen only once or every time you scroll
        });
    }, []);

    useEffect(() => {
        props.getCards(GET_CARDS_DATA)
        return () => { reset() }
    }, [])

    useEffect(() => {
        if (props.cardsData && Object.keys(props.cardsData).length > 0) {
            setData(props.cardsData.data)
        }
    }, [props.cardsData])

    const reset = () => {
        setData({})
    }

    const breadcrumbs = ["Home", "Dashboard"];
    return (
        <Fragment>
            <Pageheader items={breadcrumbs} />
            <Row className="row-sm">
                <Col sm={12} md={12} lg={12} xl={6} xxl={6} data-aos="fade-up">
                    <Row>
                        <Col lg={6} md={6} sm={6} xl={6} data-aos="fade-up">
                        <Card className=" overflow-hidden">
                                <Card.Body className="p-15">
                                    <div className="d-flex">
                                        <div>
                                            <p className="mb-0 text-dark fw-semibold">Dispatch Plan Accuracy</p>
                                            <h3 className="mt-1 mb-1 text-dark fw-semibold">{!!data && Object.keys(data).length > 0 && data.rolling_plan_accuracy + ' %'}</h3>
                                            {/* <div className="text-muted fs-12 mt-2"><i className="fa fa-signal text-success me-1"></i>
                                <span className="fw-bold fs-12 text-body">6.05%</span> (30 days)
                              </div> */}
                                        </div>
                                        <span className="ms-auto my-auto circle-icon bg-success text-center"><i className="bi bi-graph-up fs-20"></i></span>
                                    </div>
                                </Card.Body>
                            </Card> 
                        </Col>
                        <Col lg={6} md={6} sm={6} xl={6} data-aos="fade-up">
                            <Card className=" overflow-hidden">
                                <Card.Body className="p-15">
                                    <div className="d-flex">
                                        <div>
                                            <p className="mb-0 text-dark fw-semibold">RM & WIP Avail. To Produce</p>
                                            <h3 className="mt-1 mb-1 text-dark fw-semibold">{!!data && Object.keys(data).length > 0 && new Intl.NumberFormat('en-IN').format(data.rm_and_wip_available_to_produce)}</h3>
                                        </div>
                                        <span className="ms-auto my-auto circle-icon bg-info text-center"><i className="bi bi-cart-plus fs-20"></i></span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={12} md={12} sm={12} xl={12} data-aos="fade-up">
                            <Card className=" overflow-hidden">
                                <Card.Header className="border-bottom">
                                    <Card.Title className=" mb-0">Plans By Months</Card.Title>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <PlanByMonthComponent />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={12} lg={12} xl={6} xxl={6} data-aos="fade-up">
                    <Card className=" overflow-hidden">
                        <Card.Header className="border-bottom">
                            <Card.Title className=" mb-0">Raw Material Requirements - Tons(Kg)</Card.Title>
                        </Card.Header>
                        <Card.Body className="p-3">
                            <RmRequirements />
                        </Card.Body>
                    </Card>
                    {/* <Card className=" overflow-hidden">
              <Card.Header className=" d-flex justify-content-between allign-items-center">
                <Card.Title className=" mb-0">Revenue Statistics</Card.Title>
  
                <Dropdown className=" ms-auto">
                  <Dropdown.Toggle as="a" variant='outline-light' className="btn btn-outline-default btn-sm fw-bold text-primary fs-12 d-flex align-items-center dropdown-toggle "
                    type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="bi bi-box-arrow-up-right fw-semibold me-2"></i> Monthly
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                    <Dropdown.Item href="#">Weekly</Dropdown.Item>
                    <Dropdown.Item href="#">Yearly</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Card.Header>
              <Card.Body className=" py-0">
  
                <Statistics />
              </Card.Body>
            </Card> */}
                </Col>
            </Row>
            <Row className="row">
                <Col xxl={6} sm={12} lg={12} md={12} className="col-xxl-6 col-lg-12 col-md-12" data-aos="fade-up">
                    <Card className="card overflow-hidden">
                        <div className='mt-0'>
                            <Card.Header className=" border-bottom d-block d-sm-flex">
                                <Card.Title className="card-title mb-3 mb-sm-0">% Demand changes as per customer name</Card.Title>
                            </Card.Header>
                            <Card.Body className="card-body pb-0">
                                <ChangesMadeBycustomer />
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col xxl={6} sm={12} lg={12} md={12} className="col-xxl-6 col-lg-12 col-md-12" data-aos="fade-up">
                    <Card className="card overflow-hidden">
                        <div className='mt-0'>
                            <Card.Header className=" border-bottom d-block d-sm-flex">
                                <Card.Title className="card-title mb-3 mb-sm-0">% Demand changes as per FG Code</Card.Title>
                            </Card.Header>
                            <Card.Body className="card-body pb-0">
                                <ChangeMadeByProductCode />
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
} const mapStatetoprops = (state) => {
    return {
        cardsData: state.commonReducer.cardsData,
    }
}

const mapDispatchtoprops = (dispatch) => {
    return {
        getCards: (endPoint) => dispatch(callCommonGetAPI(endPoint, 'cards'))
    }
}

export default connect(mapStatetoprops, mapDispatchtoprops)(HomeComponent)
