import React ,{useEffect}from 'react'
import { Badge, Button, Card, Col, Dropdown, Form, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { imagesData } from "../../../common/commomimages/imagedata"
import { Country, Recent, Timeline } from './salesdata/chartsdata'
import { AreaChart, DonutChart, GradientBarChart, GradientBarChart2, HorizontalBarChart1, HorizontalStackedBarChart, LineChart, PieChart, StackedBarChart, StackedBarChart1, VerticalStackedBarChart } from './salesdata/barcharts'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Pageheader from '../../../layouts/pageheader/pageheader'
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import AOS CSS

export default function Sales() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once or every time you scroll
    });
  }, []);

  const breadcrumbs = ["Home", "Dashboard01"];
  return (
    <div>
      <Pageheader items={breadcrumbs} />
      <Row className=" row-cards">
        <Col xl={3} lg={6} md={6} sm={6} data-aos="fade-up">
          <Card className=" card-counter bg-gradient-purple">
            <Card.Body>
              <Row>
                <div className="col-8">
                  <div className="mt-4 mb-0 text-white">
                    <h3 className="mb-0">20.88 %</h3>
                    <p className="text-white mt-1">Dispatch Plan Accuracy </p>
                  </div>
                </div>
                <div className="col-4 my-auto">
                  <i className="fa fa-line-chart fs-1 me-1 float-end text-white-transparent"></i>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} lg={6} md={6} sm={6} data-aos="fade-up">
          <Card className="card-counter bg-gradient-secondary">
            <Card.Body>
              <Row>
                <div className="col-8">
                  <div className="mt-4 mb-0 text-white">
                    <h3 className="mb-0">1,99,011</h3>
                    <p className="text-white mt-1">RM & WIP Avail. To Produce</p>
                  </div>
                </div>
                <div className="col-4 my-auto">
                  <i className="fa fa-cart-arrow-down float-end fs-1 me-1 text-white-transparent"></i>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* 
        <Col xl={3} lg={6} md={6} sm={6}>
          <Card className=" card-counter bg-gradient-warning">
            <Card.Body>
              <Row>
                <div className="col-8">
                  <div className="mt-4 mb-0 text-white">
                    <h3 className="mb-0">25,789</h3>
                    <p className="text-white mt-1 ">Requests Receiving</p>
                  </div>
                </div>
                <div className="col-4 my-auto">
                  <i className="fa fa-reply-all float-end fs-1 me-1 text-white-transparent"></i>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3} lg={6} md={6} sm={6}>
          <Card className=" card-counter bg-gradient-success">
            <Card.Body>
              <Row>
                <div className="col-8">
                  <div className="mt-4 mb-0 text-white">
                    <h3 className="mb-0">34,762</h3>
                    <p className="text-white mt-1">Supported projects </p>
                  </div>
                </div>
                <div className="col-4 my-auto">
                  <i className="fa fa-suitcase float-end fs-1 me-1 text-white-transparent"></i>
                </div>
              </Row>
            </Card.Body>
          </Card>
        </Col> */}

      </Row>

      <Row className="row">
        <Col xxl={7} lg={12} md={12} className="col-xxl-7 col-lg-12 col-md-12">
          <Card className="card overflow-hidden">
            <div className='mt-0'>
              <Card.Header className=" border-bottom d-block d-sm-flex">
                <Card.Title className="card-title mb-3 mb-sm-0">Plans By Months</Card.Title>
              </Card.Header>
              <Card.Body className="card-body pb-0">
                <LineChart />
              </Card.Body>
            </div>
          </Card>
        </Col>
        <Col xxl={5} lg={12} col={12}>
          <Card className=" overflow-hidden">
            <Card.Header className="border-bottom">
              <Card.Title className=" mb-0">Top Products</Card.Title>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive">
                <table className="table border-0 mb-0 text-nowrap">
                  <thead>
                    <tr>
                      <th className="border-top-0 text-dark fw-semibold ps-5 fs-13">Product</th>
                      <th className="border-top-0 text-dark fw-semibold fs-13">Category</th>
                      <th className="border-top-0 text-dark fw-semibold pe-5 text-end fs-13">Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-dark">
                    <tr className="border-bottom">
                      <td className="ps-5 d-flex border-bottom-0 overflow-hidden">
                        <img alt="product-image" className="avatar avatar-md cover-image br-7 me-3" src={imagesData('product6')} />
                        <div>
                          <h6 className="mb-1 mt-1 fw-semibold">Red Printed Bag</h6>
                          <p className="mb-0 text-muted fs-12">Men, Backpack</p>
                        </div>
                      </td>
                      <td>
                        <h6 className="mb-0 fw-semibold text-primary">Bags</h6>
                      </td>
                      <td className="text-end pe-5">
                        <span className="text-dark fw-semibold">$124</span>
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="ps-5 d-flex border-bottom-0 overflow-hidden">
                        <img alt="product-image" className="avatar avatar-md cover-image br-7 bg-light me-3" src={imagesData('product5')} />
                        <div>
                          <h6 className="mb-1 mt-1 fw-semibold">Black Headphones</h6>
                          <p className="mb-0 text-muted fs-12">Men, Bluetooth</p>
                        </div>
                      </td>
                      <td>
                        <h6 className="mb-0 fw-semibold text-secondary">Electronic</h6>
                      </td>
                      <td className="text-end pe-5">
                        <span className="text-dark fw-semibold">$56</span>
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="ps-5 d-flex border-bottom-0 overflow-hidden">
                        <img alt="product-image" className="avatar avatar-md cover-image br-7 me-3" src={imagesData('product2')} />
                        <div>
                          <h6 className="mb-1 mt-1 fw-semibold">Blue Printed T-shirt</h6>
                          <p className="mb-0 text-muted fs-12">Men, T-shirt</p>
                        </div>
                      </td>
                      <td>
                        <h6 className="mb-0 fw-semibold text-info">Clothes</h6>
                      </td>
                      <td className="text-end pe-5">
                        <span className="text-dark fw-semibold">$240</span>
                      </td>
                    </tr>
                    <tr className="border-bottom">
                      <td className="ps-5">
                        <div className="d-flex">
                          <span className="avatar avatar-md me-3"><img alt="product-image" className=" cover-image br-7" src={imagesData('product4')} /></span>
                          <div className="flex-1">
                            <h6 className="mb-1 mt-1 fw-semibold">Black Smart Watch</h6>
                            <p className="mb-0 text-muted fs-12">Men, Handwatch</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h6 className="mb-0 fw-semibold text-danger">Electronic</h6>
                      </td>
                      <td className="text-end pe-5">
                        <span className="text-dark fw-semibold">$86</span>
                      </td>
                    </tr>
                    <tr className="border-bottom-0">
                      <td className="ps-5 d-flex border-bottom-0 overflow-hidden">
                        <img alt="product-image" className="avatar avatar-md cover-image br-7 me-3" src={imagesData('product3')} />
                        <div>
                          <h6 className="mb-1 mt-1 fw-semibold">Watch</h6>
                          <p className="mb-0 text-muted fs-12">Men, Casual watch</p>
                        </div>
                      </td>
                      <td>
                        <h6 className="mb-0 fw-semibold text-warning">Electronic</h6>
                      </td>
                      <td className="text-end pe-5">
                        <span className="text-dark fw-semibold">$124</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row">
        <Col xxl={6} lg={12} md={12} className="col-xxl-6 col-lg-12 col-md-12" data-aos="fade-up">
          <Card className="card overflow-hidden">
            <div className='mt-0'>
              <Card.Header className=" border-bottom d-block d-sm-flex">
                <Card.Title className="card-title mb-3 mb-sm-0">% Demand changes as per customer name</Card.Title>
              </Card.Header>
              <Card.Body className="card-body pb-0">
                <GradientBarChart />
              </Card.Body>
            </div>
          </Card>
        </Col>
        <Col xxl={6} lg={12} md={12} className="col-xxl-6 col-lg-12 col-md-12" data-aos="fade-up">
          <Card className="card overflow-hidden">
            <div className='mt-0'>
              <Card.Header className=" border-bottom d-block d-sm-flex">
                <Card.Title className="card-title mb-3 mb-sm-0">% Demand changes as per FG Code</Card.Title>
              </Card.Header>
              <Card.Body className="card-body pb-0">
                <GradientBarChart2 />
              </Card.Body>
            </div>
          </Card>
        </Col>
      </Row>

    </div>
  )
}
