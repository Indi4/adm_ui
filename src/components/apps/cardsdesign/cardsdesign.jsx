/* eslint-disable no-tabs */
import React, { Fragment, useState } from 'react'
import { Alert, Button, Card, Col, Collapse, Form, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { DefaultCard } from './data/Data'


export default function Cardsdesign () {
  const breadcrumbs = ["Apps", "Card Designs"];
  // collapse functionallity

  // Basic
  const [BasicExpanded, setBasicExpanded] = useState(true)

  const BasicHandleExpandClick = () => {
    setBasicExpanded(!BasicExpanded)
  }
  const [Basicshow, setBasicshow] = useState(true)

  // Basic color card-header

  const [ColorExpanded, setColorExpanded] = useState(true)

  const ColorHandleExpandClick = () => {
    setColorExpanded(!ColorExpanded)
  }
  const [Colorshow, setColorshow] = useState(true)
  // Basic color card-footer

  const [FooterExpanded, setFooterExpanded] = useState(true)

  const FooterHandleExpandClick = () => {
    setFooterExpanded(!FooterExpanded)
  }
  const [Footershow, setFootershow] = useState(true)

  //
  const [primaryExpanded, setprimaryExpanded] = useState(true)

  const primaryHandleExpandClick = () => {
    setprimaryExpanded(!primaryExpanded)
  }
  const [primarycardShow, setprimaryShow] = useState(true)

  // secondarycard
  const [secondaryExpanded, setsecondaryExpanded] = useState(true)
  const secondaryHandleExpandClick = () => {
    setsecondaryExpanded(!secondaryExpanded)
  }
  const [secondarycardShow, setsecondaryShow] = useState(true)

  // successcard
  const [successExpanded, setsuccessExpanded] = useState(true)
  const successHandleExpandClick = () => {
    setsuccessExpanded(!successExpanded)
  }
  const [successcardShow, setsuccessShow] = useState(true)

  //  Alertcardshow1

  const [alertcardExpanded1, setalertcardExpanded1] = useState(true)
  const alertcardHandleExpandClick1 = () => {
    setalertcardExpanded1(!alertcardExpanded1)
  }
  const [alertcardShow1, setalertcardShow1] = useState(true)

  //  Alertcardshow2

  const [alertcardExpanded2, setalertcardExpanded2] = useState(true)
  const alertcardHandleExpandClick2 = () => {
    setalertcardExpanded2(!alertcardExpanded2)
  }
  const [alertcardShow2, setalertcardShow2] = useState(true)

  //  Loaders
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

  // Fullscreen

  const [screenExpanded, setscreenExpanded] = useState(true)
  const [fullScreen, setFullscreen] = useState('true')
  const [fullscreenshow, setfullscreenShow] = useState(false)

  const fullscreenmodalClose = () => setfullscreenShow(false)

  function handleShow (breakpoint) {
    setFullscreen(breakpoint)
    setfullscreenShow(true)
  }

  const FullscreenhandleExpandClick = () => {
    setscreenExpanded(!screenExpanded)
  }
  const [shows, setShows] = useState(true)

  // Card with switcher

  const [modaltoggle, setmodaltoggle] = useState(true)

  // Initial collapsed card

  const [InitialExpanded, setInitialExpanded] = useState(false)

  const InitialHandleExpandClick = () => {
    setInitialExpanded(!InitialExpanded)
  }
  const [Initialshow, setInitialShow] = useState(true)

  // Basiccard

  const [BasiccardExpanded, setBasiccardExpanded] = useState(true)

  const BasiccardHandleExpandClick = () => {
    setBasiccardExpanded(!BasiccardExpanded)
  }
  const [BasiccardShow, setBasiccardShow] = useState(true)

  // card

  const [cardExpanded1, setcardExpanded1] = useState(true)

  const cardHandleExpandClick1 = () => {
    setcardExpanded1(!cardExpanded1)
  }
  const [cardShow1, setcardShow1] = useState(true)

  // Card blue

  const [cardExpanded, setcardExpanded] = useState(true)

  const cardHandleExpandClick = () => {
    setcardExpanded(!cardExpanded)
  }
  const [cardShow, setcardShow] = useState(true)

  return (
    <Fragment>


            <Pageheader items={breadcrumbs} />

          
            <Row>
              {DefaultCard.map((idx, spk) => (
                <Col md={6} lg={4} key={spk}>
                  <Card className={idx.class}>
                    <Card.Body className={idx.class1}>
                      <Card.Title>{idx.title}</Card.Title>
                      <Card.Text>{idx.content}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}

            </Row>
          

            
            <Row>

              <Col md={12} xl={4} >
                {Basicshow
                  ? <Card className="card">
                    <Card.Header className="card-header d-flex justify-content-between align-items-center border-bottom-0">
                      <Card.Title>Basic card</Card.Title>
                      <div className="card-options">
                        <Link href="#" onClick={BasicHandleExpandClick}><i className={`fe ${BasicExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link href="#" onClick={() => setBasicshow(false)} ><i className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={BasicExpanded} timeout={3000}>
                      <div>
                        <Card.Body>
                          The most well-known dummy text is the 'Lorem Ipsum', which is said to have
                          originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin
                          language
                          which more or less corresponds to 'proper' Latin.
                        </Card.Body>
                        <Card.Footer>
                          This is Basic card footer
                        </Card.Footer>
                      </div>
                    </Collapse>
                  </Card>
                  : null}
              </Col>

              <Col md={12} xl={4}>
                {Colorshow
                  ? <Card>
                    <Card.Header className=" bg-primary d-flex justify-content-between align-items-center">
                      <Card.Title className="text-white">Basic color card-header</Card.Title>
                      <div className="card-options ">
                        <Link to="#" onClick={ColorHandleExpandClick}> <i className={`fe ${ColorExpanded ? 'fe-chevron-up text-white' : 'fe-chevron-down text-white'}`}></i></Link>
                        <Link to="#" onClick={() => setColorshow(false)}><i className="fe fe-x text-white"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={ColorExpanded} timeout={3000}>
                      <div>
                        <Card.Body>
                          The most well-known dummy text is the 'Lorem Ipsum', which is said to have
                          originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin
                          language
                          which more or less corresponds to 'proper' Latin.</Card.Body>
                        <Card.Footer>
                          This is Basic card footer
                        </Card.Footer>
                      </div>
                    </Collapse>
                  </Card>
                  : null}
              </Col>
              <Col md={12} xl={4}>
                {Footershow
                  ? <Card>
                    <Card.Header className="border-bottom-0">
                      <Card.Title className=" mb-0">Basic color card-footer</Card.Title>
                      <div className="card-options">
                        <Link to="#" onClick={FooterHandleExpandClick}><i className={`fe ${FooterExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" onClick={() => setFootershow(false)} ><i className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={FooterExpanded} timeout={3000}>
                      <div>
                        <Card.Body>
                          The most well-known dummy text is the 'Lorem Ipsum', which is said to have
                          originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin
                          language
                          which more or less corresponds to 'proper' Latin</Card.Body>
                        <Card.Footer className=" bg-info br-br-7 br-bl-7">
                          <div className="text-white">Basic card footer</div>
                        </Card.Footer>
                      </div>
                    </Collapse>
                  </Card>
                  : null}
              </Col>
            </Row>
            

           
            <Row>
              <Col md={12} xl={4}>
                {primarycardShow
                  ? <Card className=" text-white bg-primary">
                    <Card.Header className=" d-flex justify-content-between align-items-center border-bottom-0">
                      <Card.Title>primary card title</Card.Title>
                      <div>
                        <Link to="#" onClick={primaryHandleExpandClick} className="card-options-collapse me-2"><i className={`fe ${primaryExpanded ? 'fe-chevron-up text-white' : 'fe-chevron-down text-white'}`}></i></Link>
                        <Link to="#" onClick={() => setprimaryShow(false)}><i className="fe fe-x text-white "></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={primaryExpanded} timeout={3000}>
                      <div>
                        <Card.Body>
                          <Card.Text> It's a convenient tool for mock-ups. It helps to outline
                            the
                            visual elements of a document or presentation, eg typography, font, or
                            layout. .
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </Collapse>
                  </Card>
                  : null}
              </Col>
              <Col md={12} xl={4}>
                {secondarycardShow
                  ? <Card className=" text-white bg-secondary">
                    <Card.Header className=" d-flex justify-content-between align-items-center border-bottom-0">
                      <Card.Title>Secondary card title</Card.Title>
                      <div>
                        <Link to="#" className="card-options-collapse me-2" onClick={secondaryHandleExpandClick}>
                          <i className={`fe ${secondaryExpanded ? 'fe-chevron-up text-white' : 'fe-chevron-down text-white'}`}></i></Link>
                        <Link to="#" ><i className="fe fe-x text-white " onClick={() => setsecondaryShow(false)}></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={secondaryExpanded} timeout={3000}>
                      <div>
                        <Card.Body>
                          <Card.Text> It's a convenient tool for mock-ups. It helps to outline
                            the
                            visual elements of a document or presentation, eg typography, font, or
                            layout. .
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </Collapse>
                  </Card>
                  : null}
              </Col>
              <Col md={12} xl={4}>
                {successcardShow
                  ? <Card className=" text-white bg-success">
                    <Card.Header className=" d-flex justify-content-between align-items-center border-bottom-0">
                      <Card.Title>Success card title</Card.Title>
                      <div>
                        <Link to="#" className="card-options-collapse me-2" onClick={successHandleExpandClick}>
                          <i className={`fe ${successExpanded ? 'fe-chevron-up text-white' : 'fe-chevron-down text-white'}`}></i></Link>
                        <Link to="#" className="card-options-remove" onClick={() => setsuccessShow(false)}><i className="fe fe-x text-white "></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={successExpanded} timeout={3000}>
                      <div>
                        <Card.Body>
                          <Card.Text>
                            Some quick example text to build on the card title and make up
                            the bulk of the card's content.
                          </Card.Text>
                        </Card.Body>
                      </div></Collapse>
                  </Card>
                  : null}
              </Col>
              <Col md={6} xl={6}>
                <Card>
                  <Card.Header className=" d-flex justify-content-between align-items-center">
                    <Card.Title>Panel with custom buttons</Card.Title>
                    <div className="d-none d-sm-block btn-list">
                      <button type="button" className="btn btn-primary btn-sm">Action 1</button>
                      <button type="button" className="btn btn-secondary btn-sm">Action 2</button>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <p className="mb-0">
                      In a professional context it often happens that private or corporate clients corder
                      a publication to be made and presented with the actual content still not being
                      ready. Think of a news blog that's filled with content hourly on the day of
                      going
                      live.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} xl={6}>
                <Card>
                  <Card.Header className=" d-flex justify-content-between align-items-center">
                    <Card.Title>Card with search form</Card.Title>
                    <div>
                      <form>
                        <div className="input-group">
                          <input type="text" className="form-control form-control-sm"
                            placeholder="Search something..." name="s" />
                          <span className="input-group-btn">
                            <button className="btn btn-sm btn-primary br-tl-0 br-bl-0">
                              <span className="fe fe-search"></span>
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <p className="mb-0">
                      In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} xl={6}>
                {alertcardShow1
                  ? <Card className=" overflow-hidden">
                    <Card.Header className=" d-flex justify-content-between align-items-center border-bottom-0">
                      <Card.Title>Card with alert</Card.Title>
                      <div>
                        <Link to="#" className="card-options-collapse me-2" onClick={alertcardHandleExpandClick1}
                          data-bs-toggle="card-collapse"><i className={`fe ${alertcardExpanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" className="card-options-remove" onClick={() => setalertcardShow1(false)} data-bs-toggle="card-remove"><i
                          className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={alertcardExpanded1} timeout={3000}>
                      <div>
                        <Alert variant="success" className=" border-0 mb-0">
                          Adding action was successful
                        </Alert>
                        <Card.Body>
                          <p className="mb-0">
                            Cicero famously orated against his political opponent Lucius Sergius Catilina.
                            Occasionally the first Oration against Catiline is taken for type specimens.
                          </p>
                        </Card.Body>
                      </div></Collapse>
                  </Card>
                  : null}
              </Col>
             
              <Col md={6} xl={6}>
                {alertcardShow2
                  ? <Card className=" overflow-hidden">
                    <Card.Header className=" d-flex justify-content-between align-items-center border-bottom-0">
                      <Card.Title>Card with alert</Card.Title>
                      <div>
                        <Link to="#" className="card-options-collapse me-2" onClick={alertcardHandleExpandClick2}
                          data-bs-toggle="card-collapse"><i className={`fe ${alertcardExpanded2 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" className="card-options-remove" onClick={() => setalertcardShow2(false)} data-bs-toggle="card-remove"><i
                          className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={alertcardExpanded2} timeout={3000}>
                      <div>
                        <Alert variant="danger" className=" border-0 mb-0">
                          Adding action was successful
                        </Alert>
                        <Card.Body>
                          <p className="mb-0">
                            Cicero famously orated against his political opponent Lucius Sergius Catilina.
                            Occasionally the first Oration against Catiline is taken for type specimens.
                          </p>
                        </Card.Body>
                      </div></Collapse>
                  </Card>
                  : null}
              </Col>
              <Col md={12} xl={4}>
                {loaderShow1
                  ? <Card>
                    <Card.Header className=" d-flex justify-content-between align-items-center border-bottom-0">
                      <Card.Title>Card with loader</Card.Title>
                      <div>
                        <Link to="#" className="card-options-collapse me-2" onClick={loaderHandleExpandClick1}
                          data-bs-toggle="card-collapse"><i className={`fe ${loaderExpanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" className="card-options-remove" onClick={() => setloaderShow1(false)}><i
                          className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={loaderExpanded1} timeout={3000}>
                      <div>
                        <Card.Body>
                          <div className="dimmer active">
                            <div className="spinner"></div>
                          </div>
                        </Card.Body>
                      </div></Collapse>
                  </Card>
                  : null}
              </Col>
              <Col md={12} xl={4}>
                {loaderShow2
                  ? <Card>
                    <Card.Header className=" d-flex justify-content-between align-items-center border-bottom-0">
                      <Card.Title>Card with loader</Card.Title>
                      <div>
                        <Link to="#" className="card-options-collapse me-2" onClick={loaderHandleExpandClick2}
                          data-bs-toggle="card-collapse"><i className={`fe ${loaderExpanded2 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" className="card-options-remove" onClick={() => setloaderShow2(false)}><i
                          className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={loaderExpanded2} timeout={3000}>
                      <div>
                        <Card.Body>
                          <div className="dimmer active">
                            <div className="spinner1">
                              <div className="double-bounce1"></div>
                              <div className="double-bounce2"></div>
                            </div>
                          </div>
                        </Card.Body>
                      </div></Collapse>
                  </Card>
                  : null}
              </Col>
              <Col md={12} xl={4}>
                {loaderShow3
                  ? <Card>
                    <Card.Header className=" d-flex justify-content-between align-items-center border-bottom-0">
                      <Card.Title>Card with loader</Card.Title>
                      <div>
                        <Link to="#" className="card-options-collapse me-2" onClick={loaderHandleExpandClick3}
                          data-bs-toggle="card-collapse"><i className={`fe ${loaderExpanded3 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" className="card-options-remove" onClick={() => setloaderShow3(false)}><i
                          className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={loaderExpanded3} timeout={3000}>
                      <div>
                        <Card.Body>
                          <div className="dimmer active">
                            <div className="spinner2">
                              <div className="cube1"></div>
                              <div className="cube2"></div>
                            </div>
                          </div>
                        </Card.Body>
                      </div></Collapse>
                  </Card>
                  : null}
              </Col>
            </Row>
         

          
            <Row>
              <Col md={12} xl={4} >
                {shows
                  ? <Card>
                    <Card.Header className="d-flex justify-content-between align-items-center border-bottom-0">
                      <Card.Title>fullscreen button</Card.Title>
                      <div className="card-options">

                        <Link to="#" onClick={FullscreenhandleExpandClick}> <i className={`fe ${screenExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" onClick={() => handleShow(true)}><i className="fe fe-maximize"></i></Link>

                        <Link to="#" onClick={() => setShows(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                        <Modal show={fullscreenshow} fullscreen={fullScreen} onHide={() => setfullscreenShow(false)}>
                          <Modal.Header>
                            <Modal.Title>Fullscreen Button</Modal.Title>
                            <span className="d-flex ms-auto" onClick={fullscreenmodalClose}><i className='fe fe-x ms-auto' ></i></span>
                          </Modal.Header>
                          <Modal.Body>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={fullscreenmodalClose}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={fullscreenmodalClose}>
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>

                      </div>
                    </Card.Header>
                    <Collapse in={screenExpanded} timeout={3000}>
                      <div>
                        <Card.Body>
                          <p className="mb-0">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa
                            qui officia deserunt mollit anim id est laborum
                          </p>
                        </Card.Body>
                      </div>
                    </Collapse>
                  </Card>
                  : null}
              </Col>
              <Col md={12} xl={4}>
                <Card>
                  <Card.Header className=" d-flex justify-content-between align-items-center">
                    <Card.Title>Card with switch</Card.Title>
                    <div className="card-options">
                      <Form.Check className='mb-2 mt-0' type="switch" id="custom-switch" defaultChecked 
                     
                       />
                    </div>
                  </Card.Header>
                 
                    <Card.Body>
                      <p className="mb-0">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                      </p>
                    </Card.Body>
                 
                </Card>
              </Col>
              <Col md={12} xl={4}>
                {Initialshow
                  ? <Card>
                    <Card.Header className="border-bottom-0">
                      <Card.Title>Initial collapsed card</Card.Title>
                      <div className="card-options">
                        <Link to="#" onClick={InitialHandleExpandClick} className="card-options-collapse me-2"> <i className={`fe ${InitialExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" onClick={() => setInitialShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={InitialExpanded} timeout={3000}>
                      <div>
                        <Card.Body>
                          <p className="mb-0">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                          </p>
                        </Card.Body>
                      </div>
                    </Collapse>
                  </Card>
                  : null}
              </Col>
              <Col md={12} xl={4}>
                {BasiccardShow
                  ? <Card>
                    <Card.Header className=" d-flex justify-content-between align-items-center border-bottom-0">
                      <Card.Title>Card</Card.Title>
                      <div className="card-options">
                        <Link to="#" onClick={BasiccardHandleExpandClick} className="card-options-collapse me-2"> <i className={`fe ${BasiccardExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" onClick={() => setBasiccardShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={BasiccardExpanded} timeout={3000}>
                      <div>
                        <Card.Body>
                          <p className="mb-0">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                          </p>
                        </Card.Body>
                      </div>

                    </Collapse>
                  </Card>
                  : null}
              </Col>
              <Col md={12} xl={4}>
                {cardShow1
                  ? <Card>
                    <Card.Header className=" d-flex justify-content-between align-items-center border-bottom-0">
                      <Card.Title>Card</Card.Title>
                      <div className="card-options">
                        <Link to="#" onClick={cardHandleExpandClick1} className="card-options-collapse me-2"> <i className={`fe ${cardExpanded1 ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        <Link to="#" onClick={() => setcardShow1(false)} aria-label="close"><i className="fe fe-x"></i></Link>
                      </div>
                    </Card.Header>
                    <Collapse in={cardExpanded1} timeout={3000}>
                      <div>
                        <Card.Body>
                          <p className="mb-0">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                          </p>
                        </Card.Body>
                      </div>

                    </Collapse>
                  </Card>
                  : null}
              </Col>

              <Col md={12} xl={4}>

              
                  {cardShow
                  ?
                  <Card>
                    <div className='card-status card-status-left bg-primary br-bl-7 br-tl-7'></div>
                    <Card.Header className="d-flex justify-content-between align-items-center border-bottom-0">
                      <Card.Title>Card status on left side</Card.Title>
                      <div className="card-options">

                        <Link to="#" onClick={cardHandleExpandClick}> <i className={`fe ${screenExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>

                        <Link to="#" onClick={() => setcardShow(false)} aria-label="close"><i className="fe fe-x"></i></Link>

                      </div>
                    </Card.Header>
                    <Collapse in={cardExpanded} timeout={3000}>
                      <div>
                        <Card.Body>
                          <p className="mb-0">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa
                            qui officia deserunt mollit anim id est laborum
                          </p>
                        </Card.Body>
                      </div>
                    </Collapse>
                  </Card>
                  : null}
              </Col>
            </Row>
        
          

    </Fragment>
  )
}
