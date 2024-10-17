import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Data1, Data2, Data3, Data4 } from './data/pricingdata'


export default function Pricingtables() {
  const breadcrumbs = ["Pages", "Extension", "Pricing Table"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        {Data1.map((idx, c1) => (
          <Col sm={6} md={6} lg={6} xl={3} key={c1}>
            <Card>
              <Card.Body className=" text-center">
                <div className="card-category br-7">{idx.title}</div>
                <div className="display-5 my-4">{idx.text}</div>
                <ul className="list-unstyled leading-loose">
                  <li><i className="fe fe-award text-info mx-2"></i><strong>{idx.li1}</strong> </li>
                  <li><i className="fe fe-check text-success mx-2"></i> {idx.li2}</li>
                  <li><i className={`fe fe-${idx.icon2} mx-2`}></i> {idx.li3}</li>
                  <li><i className={`fe fe-${idx.icon1} mx-2`}></i>{idx.li4}</li>
                </ul>
                <div className="text-center mt-6">
                  <Button variant={idx.color} href="#" className="btn btn-block">Choose Plan</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}


      </Row>


      <h4 className="mb-5">Pricing cards 4 colums</h4>


      <Row>
        {Data2.map((idx, c2) => (
          <Col sm={6} md={6} lg={6} xl={3} key={c2}>
            <Card className={` card-${idx.class} shadow text-center px-3 `}>
              <span
                className={`h6 w-60 mx-auto px-4 py-3 rounded-bottom bg-${idx.color} text-white `}>{idx.title}</span>
              <div className="bg- border-0">
                <h1 className={`h1 fw-normal text-${idx.color} text-center mb-0`} data-pricing-value="30">
                  $<span className="price">{idx.text1}</span><span className="h6 text-muted ms-2">{idx.text2}
                  </span></h1>
              </div>
              <Card.Body className="card-body pt-0">
                <ul className="list-unstyled mb-4">
                  <li>{idx.li}</li>
                  <li>{idx.li1}</li>
                  <li>{idx.li2}</li>
                  <li>{idx.li3}</li>
                  <li>{idx.li4}</li>
                </ul>
                <Button href="#" variant={idx.color} className="btn mb-3">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </Row>


      <h4 className="mb-5">Pricing cards 4 colums</h4>


      <Row>
        {Data3.map((idx, c3) => (
          <Col sm={6} md={6} lg={6} xl={3} key={c3}>
            <div className="panel price panel-color">
              <div className={`panel-heading bg-${idx.color} p-0 text-center`}>
                <h3 className="text-white">{idx.title}</h3>
              </div>
              <div className="panel-body text-center">
                <p className="lead"><strong className="">${idx.text1}</strong>{idx.text2}</p>
              </div>
              <ul className="list-group text-center">
                <li className="list-group-item"><strong> {idx.li}</strong>  </li>
                <li className="list-group-item"><strong>{idx.li1} </strong> </li>
                <li className="list-group-item"><strong> {idx.li2}</strong> </li>
                <li className="list-group-item"><strong>{idx.li3}</strong></li>
                <li className="list-group-item border-bottom-0"><strong> {idx.li4}</strong> </li>
              </ul>
              <div className="panel-footer text-center">
                <Button variant={idx.color} className="btn btn-primary" href="#">Purchase Now!</Button>
              </div>
            </div>
          </Col>
        ))}

      </Row>


      <h4 className="mb-5">Pricing cards 4 colums</h4>


      <Row className="row">
        {Data4.map((idx, c4) => (
          <Col sm={6} md={6} lg={6} xl={3} key={c4}>
            <Card>
              <Card.Body>
                <h5 className={`mb-1 fw-semibold badge bg-${idx.color}`}>{idx.title}</h5>
                <p className="text-muted fs-13 mb-0">{idx.text1}</p>
                <div className="my-3 text-center">
                  <p className="fw-semibold mb-0 fs-40">${idx.text2}<span className="text-muted fs-13 fw-normal">{idx.text3}</span></p>
                </div>
                <button className={`btn btn-block btn-${idx.color}`} type="button">{idx.btn}</button>
                <div className="fw-semibold fs-14 mb-2 mt-3">Includes :</div>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center border-bottom-0 mb-4">
                    <i className={`fe fe-check-circle fw-bolder text-${idx.color}`}></i>
                    <span className="text-dark fw-semibold fs-13 ms-2">{idx.li1}</span>
                  </li>
                  <li className="d-flex align-items-center border-bottom-0 mb-4">
                    <i className={`fe fe-check-circle fw-bolder text-${idx.color}`}></i>
                    <span className="text-dark fw-semibold fs-13 ms-2">{idx.li2}</span>
                  </li>
                  <li className="d-flex align-items-center border-bottom-0 mb-4">
                    <i className={`fe fe-check-circle fw-bolder text-${idx.color}`}></i>
                    <span className="text-dark fw-semibold fs-13 ms-2">{idx.li3}</span>
                  </li>
                  <li className="d-flex align-items-center border-bottom-0">
                    <i className={`fe fe-check-circle fw-bolder text-${idx.color}`}></i>
                    <span className="text-dark fw-semibold fs-13 ms-2">{idx.li4}</span>
                  </li>
                </ul>
              </Card.Body>
              <Card.Footer className="card-footer text-center">
                <Link to="#" className="mb-0 fw-semibold">See all features</Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}

      </Row>

    </Fragment>
  )
}
