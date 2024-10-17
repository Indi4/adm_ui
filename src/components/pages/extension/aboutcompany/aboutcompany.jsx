import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../../common/commomimages/imagedata'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { Carddata, Columndata } from './data/companydata'

export default function Aboutcompany() {
  const breadcrumbs = ["Pages", "Extension", "About"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <div className="container">

        <Row className="mb-5">
          <Col lg={6} md={6} sm={12}>
            <p className="fw-semibold text-primary">About us</p>
            <h1 className="mb-3 fw-semibold">Hello! This is <span className="text-primary">Sparic.</span></h1>
          </Col>
          <Col lg={6} md={6} sm={12} className="text-end my-auto">
            <h5 className="fw-semibold mb-0">Learn more about the company, the team behind it, and how we think. <i className="bi bi-arrow-down"></i></h5>
          </Col>
        </Row>

        <Row className=" mx-0">
          <div className="text-center my-5">
            <h2 className="fw-semibold mb-2">We're looking for talented people</h2>
            <p className="fw-semibold mb-1">We're a 100% remote team spread all across the world. Join us!</p>
          </div>
          <Card className="card overflow-hidden px-0">
            <img src={imagesData('photo36')} alt="image" />
          </Card>
        </Row>



        <Row>
          <Col lg={12}>
            <Card className=" mt-5">
              <Card.Body>
                <div className="statistics-info p-4">
                  <Row>
                    <Col xl={6}>
                      <div className="">
                        <h2 className="fw-bold mb-4 text-dark">We Help to <span className="text-primary">Build</span> Your Dream Project.</h2>
                        <h5 className="leading-normal fw-normal mb-4 text-dark">majority have suffered alteration in some form, by injected humour</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <p> If you are going to use a passage of Lorem Ipsum, you need to as necessary All the Lorem Ipsum generators on the Internet tend to repeat Various versions have evolved over the years, sometimes by
                          accident, sometimes on purpose (injected humour and the like).</p>
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div className="text-center">
                        <img src={imagesData('png4')} alt="" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <div className="text-center my-5">
            <h2 className="fw-semibold mb-0">Our Services and Achievements</h2>
          </div>
          {Columndata.map((idx, c1) => (
            <Col sm={12} md={12} lg={6} xl={3} key={c1} >
              <Card>
                <Card.Body>
                  <div className="mb-3">
                    <i className={`fa fa-${idx.icon} text-success p-2 border border-success br-7`}></i>
                  </div>
                  <h5 className="mb-1 fw-semibold">{idx.title}</h5>
                  <p className="text-muted mb-0">{idx.text}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}

        </Row>
     
       
        <Row>
          <Col xl={3} lg={6} md={6}>
            <Card className=" bg-primary-transparent">
              <Card.Body>
                <div className="counter-status md-mb-0">
                  <div className="mb-2">
                    <svg className="about-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#4454c3" d="M10.3125,16.09375a.99676.99676,0,0,1-.707-.293L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328l-6.1875,6.1875A.99676.99676,0,0,1,10.3125,16.09375Z" opacity=".99" /><path fill="#8e98db" d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm5.207,7.61328-6.1875,6.1875a.99963.99963,0,0,1-1.41406,0L6.793,12.98828A.99989.99989,0,0,1,8.207,11.57422l2.10547,2.10547L15.793,8.19922A.99989.99989,0,0,1,17.207,9.61328Z" /></svg>
                  </div>
                  <div className="mb-1">
                    <h2 className="mb-2">256+</h2>
                    <h6 className="mb-0 fw-semibold">Projects Completed</h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} lg={6} md={6}>
            <Card className=" bg-danger-transparent">
              <Card.Body>
                <div className="counter-status md-mb-0">
                  <div className="mb-2">
                    <svg className="about-icons" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><circle cx="10" cy="8.5" r="5" fill="#fbb8c7" /><path fill="#fa95ac" d="M13.30884,12.22253C12.42566,13.00806,11.27496,13.5,10,13.5s-2.42566-0.49194-3.30884-1.27747C3.92603,13.48206,2,16.26324,2,19.5c0,0.00018,0,0.00037,0,0.00055C2.00012,20.05267,2.44788,20.50012,3,20.5h14c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1C18,16.26324,16.07397,13.48206,13.30884,12.22253z" /><path fill="#f74f75" d="M18.3335,13.5c-0.26526,0.0003-0.51971-0.10515-0.707-0.293l-1.3335-1.333c-0.38694-0.39399-0.38123-1.02706,0.01275-1.414c0.38897-0.38202,1.01228-0.38202,1.40125,0l0.62647,0.626l1.95953-1.96c0.39399-0.38694,1.02706-0.38123,1.414,0.01275c0.38202,0.38897,0.38202,1.01227,0,1.40125l-2.6665,2.667C18.85321,13.39485,18.59877,13.5003,18.3335,13.5z" /></svg>
                  </div>
                  <div className="mb-1">
                    <h2 className="mb-2">7,234</h2>
                    <h6 className="mb-0 fw-semibold">Total Customers</h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} lg={6} md={6}>
            <Card className=" bg-warning-transparent">
              <Card.Body>
                <div className="counter-status md-mb-0">
                  <div className="mb-2">
                    <svg className="about-icons" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#f3d267" d="M19,6H5C3.34315,6,2,7.34315,2,9v2.72087L8.8374,14h6.3252L22,11.72087V9C22,7.34315,20.65685,6,19,6z" /><path fill="#ecb403" d="M10,6V5h4v1h2V5c-0.00126-1.10405-0.89595-1.99874-2-2h-4C8.89595,3.00126,8.00126,3.89595,8,5v1H10z M8.8374,14L2,11.72083V18c0.00181,1.65611,1.34389,2.99819,3,3h14c1.65611-0.00181,2.99819-1.34389,3-3v-6.27917L15.1626,14H8.8374z" /></svg>
                  </div>
                  <div className="mb-1">
                    <h2 className="mb-2">846</h2>
                    <h6 className="mb-0 fw-semibold">Available Employeed</h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={3} lg={6} md={6}>
            <Card className="bg-info-transparent">
              <Card.Body>
                <div className="counter-status md-mb-0">
                  <div className="mb-2">
                    <svg className="about-icons" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><circle cx="12" cy="9.25" r="6" fill="#b4ddf9" /><path fill="#8fccf7" d="M19.57391,17.01288L17.00854,12.56l-0.00873,0.00433C15.92511,14.18231,14.08795,15.25,12,15.25c-0.1286,0-0.25439-0.01123-0.38098-0.01923l0.38953,0.66925l2.37408,4.11218c0.13806,0.23914,0.44385,0.32111,0.68304,0.18304c0.07391-0.04266,0.13562-0.10358,0.17938-0.17682l1.32349-2.21844l2.57941-0.0376c0.27612-0.00397,0.4967-0.23108,0.49268-0.5072C19.6394,17.17004,19.61646,17.08667,19.57391,17.01288z" /><path fill="#45aaf2" d="M11.61896,15.23071c-1.92963-0.12152-3.61176-1.14911-4.62012-2.66864l-2.56421,4.45081c-0.04248,0.07379-0.06549,0.15717-0.06671,0.24231c-0.00397,0.27612,0.21661,0.50323,0.49274,0.5072L7.44,17.79999l1.32355,2.21844c0.0437,0.07324,0.10547,0.13416,0.17938,0.17682c0.23914,0.13806,0.54492,0.05609,0.68298-0.18304L12,15.90002l0.00427-0.00732l-0.38525-0.66193L11.61896,15.23071z" /></svg>
                  </div>
                  <div className="mb-1">
                    <h2 className="mb-2">153</h2>
                    <h6 className="mb-0 fw-semibold">Awards won</h6>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      

      
        <Row>
          <div className="text-center my-5">
            <h2 className="fw-semibold">Meet Our Team</h2>
            <h5 className="mb-2">Our Philosophy is simple - hire a team of diverse, passionate people and faster a culture that empowers you to do you best work.</h5>
            <h5 className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, incidunt!</h5>
          </div>
          {Carddata.map((idx, cd1) => (
            <Col xl={3} md={6} lg={6} sm={12} key={cd1}>
              <Card className="card p-3">
                <Card.Body>
                  <div className="mb-3 text-center about-team">
                    <img className="rounded-circle" src={idx.src} alt="image" />
                  </div>
                  <div className="fs-16 text-center fw-semibold">
                    {idx.title}
                  </div>
                  <div className="fs-13 fw-semibold text-center text-primary mb-3">
                    {idx.role}
                  </div>
                  <div className="text-center fs-14 mb-3">{idx.text}</div>
                  <div className="btn-list text-center">
                    <Button variant='primary' size="sm" type="button"><i className="fa fa-facebook"></i></Button>
                    <Button variant='info' size="sm" type="button" ><i className="fa fa-twitter"></i></Button>
                    <Button variant='danger' size="sm" type="button" className="btn btn-sm btn-danger"><i className="fa fa-google"></i></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}

        </Row>
        
      </div>
  


    </Fragment>
  )
}
