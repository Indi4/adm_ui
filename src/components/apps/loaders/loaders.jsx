import React, { Fragment, useState } from 'react'
import { Card, Col, Collapse, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'

export default function Loaders () {
  const breadcrumbs = ["Apps", "Loaders"];
  // loader1
  const [loaderExpanded1, setloaderExpanded1] = useState(true)
  const loaderHandleExpandClick1 = () => {
    setloaderExpanded1(!loaderExpanded1)
  }
  const [loaderShow1, setloaderShow1] = useState(true)

  // loader2
  const [loaderExpanded2, setloaderExpanded2] = useState(true)
  const loaderHandleExpandClick2 = () => {
    setloaderExpanded2(!loaderExpanded2)
  }
  const [loaderShow2, setloaderShow2] = useState(true)

  // loader3
  const [loaderExpanded3, setloaderExpanded3] = useState(true)
  const loaderHandleExpandClick3 = () => {
    setloaderExpanded3(!loaderExpanded3)
  }
  const [loaderShow3, setloaderShow3] = useState(true)

  // loader4
  const [loaderExpanded4, setloaderExpanded4] = useState(true)
  const loaderHandleExpandClick4 = () => {
    setloaderExpanded4(!loaderExpanded4)
  }
  const [loaderShow4, setloaderShow4] = useState(true)

  // loader5
  const [loaderExpanded5, setloaderExpanded5] = useState(true)
  const loaderHandleExpandClick5 = () => {
    setloaderExpanded5(!loaderExpanded5)
  }
  const [loaderShow5, setloaderShow5] = useState(true)

  // loader6
  const [loaderExpanded6, setloaderExpanded6] = useState(true)
  const loaderHandleExpandClick6 = () => {
    setloaderExpanded6(!loaderExpanded6)
  }
  const [loaderShow6, setloaderShow6] = useState(true)

  return (
    <Fragment>


            <Pageheader items={breadcrumbs} />
        
            <Row>
              <Col md={6} lg={6} xl={4}>
                {loaderShow1
                  ? <Card>
                    <Card.Header className=" d-flex justify-content-between align-items-center">
                      <Card.Title>Dimmer Loader</Card.Title>
                      <div>
                        <Link to="#" className="card-options-collapse me-2" onClick={loaderHandleExpandClick1}
                          data-bs-toggle="card-collapse"><i className={`fe ${loaderExpanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" className="card-options-remove" onClick={() => setloaderShow1(false)}><i
                          className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={loaderExpanded1}>
                      <div>
                        <Card.Body className=" pt-0">
                          <div className="dimmer active">
                            <div className="spinner3">
                              <div className="dot1"></div>
                              <div className="dot2"></div>
                            </div>
                          </div>
                        </Card.Body>
                      </div></Collapse>
                  </Card>
                  : null}
              </Col>
           
              
              <Col md={6} lg={6} xl={4}>
                {loaderShow2
                  ? <Card>
                    <Card.Header className=" d-flex justify-content-between align-items-center">
                      <Card.Title>Bounce Loader</Card.Title>
                      <div>
                        <Link to="#" className="card-options-collapse me-2" onClick={loaderHandleExpandClick2}
                          data-bs-toggle="card-collapse"><i className={`fe ${loaderExpanded2 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" className="card-options-remove" onClick={() => setloaderShow2(false)}><i
                          className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={loaderExpanded2}>
                      <div>
                      <Card.Body>
                        <div className="spinner4">
                          <div className="bounce1"></div>
                          <div className="bounce2"></div>
                          <div className="bounce3"></div>
                        </div>
                      </Card.Body>
                      </div></Collapse>
                  </Card>
                  : null}
              </Col>
           
            
              <Col md={6} lg={6} xl={4}>
                {loaderShow3
                  ? <Card>
                    <Card.Header className=" d-flex justify-content-between align-items-center">
                      <Card.Title>Circle Loader</Card.Title>
                      <div>
                        <Link to="#" className="card-options-collapse me-2" onClick={loaderHandleExpandClick3}
                          data-bs-toggle="card-collapse"><i className={`fe ${loaderExpanded3 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" className="card-options-remove" onClick={() => setloaderShow3(false)}><i
                          className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={loaderExpanded3}>
                      <div>
                      <Card.Body className=" pt-0">
                        <div>
                          <div className="sk-circle">
                            <div className="sk-circle1 sk-child"></div>
                            <div className="sk-circle2 sk-child"></div>
                            <div className="sk-circle3 sk-child"></div>
                            <div className="sk-circle4 sk-child"></div>
                            <div className="sk-circle5 sk-child"></div>
                            <div className="sk-circle6 sk-child"></div>
                            <div className="sk-circle7 sk-child"></div>
                            <div className="sk-circle8 sk-child"></div>
                            <div className="sk-circle9 sk-child"></div>
                            <div className="sk-circle10 sk-child"></div>
                            <div className="sk-circle11 sk-child"></div>
                            <div className="sk-circle12 sk-child"></div>
                          </div>
                        </div>
                      </Card.Body>
                      </div></Collapse>
                  </Card>
                  : null}
              </Col>
          
              <Col md={6} lg={6} xl={4}>
                {loaderShow4
                  ? <Card>
                    <Card.Header className=" d-flex justify-content-between align-items-center">
                      <Card.Title>Cube Loader</Card.Title>
                      <div>
                        <Link to="#" className="card-options-collapse me-2" onClick={loaderHandleExpandClick4}
                          data-bs-toggle="card-collapse"><i className={`fe ${loaderExpanded4 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" className="card-options-remove" onClick={() => setloaderShow4(false)}><i
                          className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={loaderExpanded4} timeout={3000}>

                      <Card.Body className=" pt-0">
                        <div>
                          <div className="sk-cube-grid">
                            <div className="sk-cube sk-cube1"></div>
                            <div className="sk-cube sk-cube2"></div>
                            <div className="sk-cube sk-cube3"></div>
                            <div className="sk-cube sk-cube4"></div>
                            <div className="sk-cube sk-cube5"></div>
                            <div className="sk-cube sk-cube6"></div>
                            <div className="sk-cube sk-cube7"></div>
                            <div className="sk-cube sk-cube8"></div>
                            <div className="sk-cube sk-cube9"></div>
                          </div>
                        </div>
                      </Card.Body>
                    </Collapse>
                  </Card>
                  : null}
              </Col>
        
              <Col md={6} lg={6} xl={4}>

                {loaderShow5
                  ? <Card>
                    <Card.Header className=" d-flex justify-content-between align-items-center">
                      <Card.Title>Folding-cube Loader</Card.Title>
                      <div>
                        <Link to="#" className="card-options-collapse me-2" onClick={loaderHandleExpandClick5}
                          data-bs-toggle="card-collapse"><i className={`fe ${loaderExpanded5 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" className="card-options-remove" onClick={() => setloaderShow5(false)}><i
                          className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={loaderExpanded5} timeout={3000}>
                      <Card.Body className=" pt-0">
                        <div>
                          <div className="sk-folding-cube">
                            <div className="sk-cube1 sk-cube"></div>
                            <div className="sk-cube2 sk-cube"></div>
                            <div className="sk-cube4 sk-cube"></div>
                            <div className="sk-cube3 sk-cube"></div>
                          </div>
                        </div>
                      </Card.Body>
                    </Collapse>
                  </Card>
                  : null}
              </Col>
             
              <Col md={6} lg={6} xl={4}>
                {loaderShow6
                  ? <Card>
                    <Card.Header className=" d-flex justify-content-between align-items-center">
                      <Card.Title>Hourglass Loader</Card.Title>
                      <div>
                        <Link to="#" className="card-options-collapse me-2" onClick={loaderHandleExpandClick6}
                          data-bs-toggle="card-collapse"><i className={`fe ${loaderExpanded6 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" className="card-options-remove" onClick={() => setloaderShow6(false)}><i
                          className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={loaderExpanded6} timeout={3000}>

                      <Card.Body className=" p-0">
                        <div>
                          <div className="dimmer active">
                            <div className="lds-hourglass"></div>
                          </div>
                        </div>
                      </Card.Body>
                    </Collapse>
                  </Card>
                  : null}
              </Col>
             
            </Row>
          

            
            <Row>
              <Col md={6} lg={6} xl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>Spinner Loader</Card.Title>
                  </Card.Header>
                  <Card.Body className=" pt-0">
                    <div className="dimmer active">
                      <div className="spinner">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
      
              <Col md={6} lg={6} xl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>Double-bounce Loaders</Card.Title>
                  </Card.Header>
                  <Card.Body className=" pt-0">

                    <div className="dimmer active">
                      <div className="spinner1">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={6} lg={6} xl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>Facebook Loaders</Card.Title>
                  </Card.Header>
                  <Card.Body className=" pb-0">
                    <div className="dimmer active">
                      <div className="spinner5">
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
     


    </Fragment>
  )
}
