import React, { Fragment, useState } from 'react'
import { Card, Col, Collapse, Form, Nav, Row, Tab } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'


export default function Tabses() {
  const breadcrumbs = ["Bootstrap", "Tabs"];

  //
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        <div className="col-12">
          <Card>
            <Card.Header>
              <Card.Title>Default Tabs</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow1(!show1) }} />
            </Card.Header>
            <Card.Body className="card-body myTab">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Nav className="nav nav-tabs" id="myTab" role="tablist" defaultActiveKey="first">
                  <Nav.Item>
                    <Nav.Link className="nav-link" id="home-tab" data-bs-toggle="tab" href="#home" eventKey="first"
                      role="tab" aria-controls="home" aria-selected="false">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-link" id="profile-tab" data-bs-toggle="tab" eventKey="second"
                      href="#profile" role="tab" aria-controls="profile"
                      aria-selected="false">Profile</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="nav-link show" id="contact-tab" data-bs-toggle="tab" eventKey="third"
                      href="#contact" role="tab" aria-controls="contact"
                      aria-selected="true">Contact</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="border p-3" id="myTabContent">
                  <Tab.Pane role="tabpanel"
                    eventKey="first">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet,
                    consectetur, adipisci velit, sed quia non numquam eius modi tempora
                    incidunt
                    ut labore et dolore magnam aliquam quaerat voluptatem.
                  </Tab.Pane>
                  <Tab.Pane role="tabpanel"
                    eventKey="second">
                    No one rejects, dislikes, or avoids pleasure itself, because it is
                    pleasure,
                    but because those who do not know how to pursue pleasure rationally
                    encounter consequences that are extremely painful. Nor again is there
                    anyone
                    who loves or pursues or desires to obtain pain of itself, because it is
                    pain, but because occasionally circumstances occur in which toil and
                    pain
                    can procure him some great pleasure.
                  </Tab.Pane>
                  <Tab.Pane role="tabpanel"
                    eventKey="third">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident, similique
                    sunt
                    in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                    fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
                    libero
                    tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                    minus
                    id quod maxime placeat facere possimus, omnis voluptas assumenda est,
                    omnis
                    dolor repellendus.
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
            <Collapse in={show1}>
              <pre>
                <code>

                  {`             <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                      <Nav className="nav nav-tabs" id="myTab" role="tablist" defaultActiveKey="first">
                        <Nav.Item>
                          <Nav.Link className="nav-link" id="home-tab" data-bs-toggle="tab" href="#home" eventKey="first"
                            role="tab" aria-controls="home" aria-selected="false">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="nav-link" id="profile-tab" data-bs-toggle="tab" eventKey="second"
                            href="#profile" role="tab" aria-controls="profile"
                            aria-selected="false">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="nav-link show" id="contact-tab" data-bs-toggle="tab" eventKey="third"
                            href="#contact" role="tab" aria-controls="contact"
                            aria-selected="true">Contact</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content className="border p-3" id="myTabContent">
                        <Tab.Pane role="tabpanel"
                          eventKey="first">
                          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                          fugit,</Tab.Pane>
                        <Tab.Pane role="tabpanel"
                          eventKey="second">
                          No one rejects, dislikes, or avoids pleasure itself, because it is
                          pleasure,</Tab.Pane>
                        <Tab.Pane role="tabpanel"
                          eventKey="third">
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui
                          blanditiis</Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </div>
      </Row>

      <Row>
        <div className="col-12">
          <Card>
            <Card.Header>
              <Card.Title>Tabs with Vertical nav-pills</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow2(!show2) }} />
            </Card.Header>
            <Card.Body>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col lg={2} sm={12} md={2} xl={1}>
                    <Nav variant='pills' className="flex-column" id="myTab4" role="tablist" defaultActiveKey="first">
                      <Nav.Item>
                        <Nav.Link id="home-tab4" data-bs-toggle="tab"
                          href="#home4" role="tab" aria-controls="home" eventKey="first"
                          aria-selected="true">Home</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="nav-link" id="profile-tab4" data-bs-toggle="tab" eventKey="second"
                          href="#profile4" role="tab" aria-controls="profile"
                          aria-selected="false">Profile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className="nav-link" id="contact-tab4" data-bs-toggle="tab" eventKey="three"
                          href="#contact4" role="tab" aria-controls="contact"
                          aria-selected="false">Contact</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col lg={10} sm={12} md={10} xl={11}>
                    <Tab.Content className="tab-content border p-3" id="myTab3Content">
                      <Tab.Pane className="tab-pane fade  p-0" id="home4" eventKey="first"
                        role="tabpanel" aria-labelledby="home-tab4">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                        aut
                        fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                        ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                        non
                        numquam eius modi tempora incidunt ut labore et dolore magnam
                        aliquam quaerat voluptatem.

                      </Tab.Pane>
                      <Tab.Pane className="tab-pane fade p-0" id="profile4" role="tabpanel"
                        aria-labelledby="profile-tab4" eventKey="second">
                        No one rejects, dislikes, or avoids pleasure itself, because it
                        is
                        pleasure, but because those who do not know how to pursue
                        pleasure
                        rationally encounter consequences that are extremely painful.
                        Nor
                        again is there anyone who loves or pursues or desires to obtain
                        pain
                        of itself, because it is pain, but because occasionally
                        circumstances occur in which toil and pain can procure him some
                        great pleasure.
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane fade p-0" id="contact4" role="tabpanel"
                        aria-labelledby="contact-tab4" eventKey="three">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                        dolores et quas molestias excepturi sint occaecati cupiditate
                        non
                        provident, similique sunt in culpa qui officia deserunt mollitia
                        animi, id est laborum et dolorum fuga. Et harum quidem rerum
                        facilis
                        est et expedita distinctio. Nam libero tempore, cum soluta nobis
                        est
                        eligendi optio cumque nihil impedit quo minus id quod maxime
                        placeat
                        facere possimus, omnis voluptas assumenda est, omnis dolor
                        repellendus.
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
            <Collapse in={show2}>
              <pre>
                <code>

                  {`              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                      <Row>
                        <Col lg={2} sm={12} md={2} xl={1}>
                          <Nav variant='pills' className="flex-column" id="myTab4" role="tablist" defaultActiveKey="first">
                            <Nav.Item>
                              <Nav.Link id="home-tab4" data-bs-toggle="tab"
                                href="#home4" role="tab" aria-controls="home" eventKey="first"
                                aria-selected="true">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link className="nav-link" id="profile-tab4" data-bs-toggle="tab" eventKey="second"
                                href="#profile4" role="tab" aria-controls="profile"
                                aria-selected="false">Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link className="nav-link" id="contact-tab4" data-bs-toggle="tab" eventKey="three"
                                href="#contact4" role="tab" aria-controls="contact"
                                aria-selected="false">Contact</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col lg={10} sm={12} md={10} xl={11}>
                          <Tab.Content className="tab-content border p-3" id="myTab3Content">
                            <Tab.Pane className="tab-pane fade  p-0" id="home4" eventKey="first"
                              role="tabpanel" aria-labelledby="home-tab4">
                              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                              </Tab.Pane>
                            <Tab.Pane className="tab-pane fade p-0" id="profile4" role="tabpanel"
                              aria-labelledby="profile-tab4" eventKey="second">
                              No one rejects, dislikes, or avoids pleasure itself, because it 
                               </Tab.Pane>
                            <Tab.Pane className="tab-pane fade p-0" id="contact4" role="tabpanel"
                              aria-labelledby="contact-tab4" eventKey="three">
                              At vero eos et accusamus et iusto odio dignissimos ducimus qui
                              blanditiis praesentium voluptatum deleniti atque corrupti quos
                               </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </div>
      </Row>


      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Tabs style1</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow3(!show3) }} />
            </Card.Header>
            <Card.Body>
              <div className="panel panel-primary">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div className="tab-menu-heading">
                    <div className="tabs-menu ">
                      <Nav variant='pills' as="ul" className="nav panel-tabs">
                       
                        <Nav.Item as="li" className='me-2'>
                          <Nav.Link eventKey="first"> Tab 1</Nav.Link>
                        </Nav.Item >
                    
                        <Nav.Item as="li" className='me-2'>
                          <Nav.Link eventKey="second"> Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='me-2'>
                          <Nav.Link eventKey="third"> Tab 3</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='me-2'>
                          <Nav.Link eventKey="fourth"> Tab 4</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                  <div className="panel-body tabs-menu-body">
                    <Tab.Content>
                      <Tab.Pane className="tab-pane" eventKey="first">
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                          qui
                          blanditiis praesentium voluptatum deleniti atque corrupti
                          quos
                          dolores et quas molestias excepturi sint occaecati
                          cupiditate
                          non provident, similique sunt in culpa qui officia deserunt
                          mollitia animi, id est laborum et dolorum fuga.</p>
                        <p> Et harum quidem rerum facilis est et expedita distinctio.
                          Nam
                          libero tempore, cum soluta nobis est eligendi optio cumque
                          nihil
                          impedit quo minus id quod maxime placeat facere possimus,
                          omnis
                          voluptas assumenda est, omnis dolor repellendus. </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p> Et harum quidem rerum facilis est et expedita distinctio.
                          Nam
                          libero tempore, cum soluta nobis est eligendi optio cumque
                          nihil
                          impedit quo minus id quod maxime placeat facere possimus,
                          omnis
                          voluptas assumenda est, omnis dolor repellendus. </p>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                          qui
                          blanditiis praesentium voluptatum deleniti atque corrupti
                          quos
                          dolores et quas molestias excepturi sint occaecati
                          cupiditate
                          non provident, similique sunt in culpa qui officia deserunt
                          mollitia animi, id est laborum et dolorum fuga.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum
                          necessitatibus saepe eveniet ut et voluptates repudiandae
                          sint
                          et molestiae non recusandae</p>
                        <p> Et harum quidem rerum facilis est et expedita distinctio.
                          Nam
                          libero tempore, cum soluta nobis est eligendi optio cumque
                          nihil
                          impedit quo minus id quod maxime placeat facere possimus,
                          omnis
                          voluptas assumenda est, omnis dolor repellendus. </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <p>On the other hand, we denounce with righteous indignation and
                          dislike men who are so beguiled and demoralized by the
                          charms of
                          pleasure of the moment, so blinded by desire</p>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio
                          cumque
                          nihil impedit quo minus id quod maxime placeat facere
                          possimus,
                          omnis voluptas assumenda est, omnis dolor repellendus.
                          Temporibus autem quibusdam et aut officiis debitis aut rerum
                          necessitatibus </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </Card.Body>
            <Collapse in={show3}>
              <pre>
                <code>

                  {`                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <div className="tab-menu-heading">
                          <div className="tabs-menu ">
                           <Nav variant='pills' className="nav panel-tabs">
                              <Nav.Item className='me-2'>
                                 <Nav.Item className='me-2'>
                                  <Nav.Link eventKey="first"> Tab 1</Nav.Link>
                                </Nav.Item >
                              </Nav.Item>
                              <Nav.Item className='me-2'>
                                <Nav.Link eventKey="second"> Tab 2</Nav.Link>
                              </Nav.Item>
                              <Nav.Item className='me-2'>
                                <Nav.Link eventKey="third"> Tab 3</Nav.Link>
                              </Nav.Item>
                              <Nav.Item className='me-2'>
                                <Nav.Link eventKey="fourth"> Tab 4</Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </div>
                        </div>
                        <div className="panel-body tabs-menu-body">
                          <Tab.Content>
                            <Tab.Pane className="tab-pane" eventKey="first">
                              <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                                qui </p>
                              <p> Et harum quidem rerum facilis est et expedita distinctio.
                                Nam </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <p> Et harum quidem rerum facilis est et expedita distinctio.
                               </p>
                              <p>At vero eos et accusamus et iusto odio dignissimos ducimus
                               </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                              <p>Temporibus autem quibusdam et aut officiis debitis aut rerum
                                </p>
                              <p> Et harum quidem rerum facilis est et expedita distinctio.
                                Nam
                               </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                              <p>On the other hand, we denounce with righteous indignation and
                               </p>
                              <p>Nam libero tempore, cum soluta nobis est eligendi optio
                                cumque </p>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </Tab.Container>`}
                </code>
              </pre>
            </Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>Tabs Style2</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow4(!show4) }} />
            </Card.Header>
            <Card.Body>
              <div className="panel panel-primary">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div className=" tab-menu-heading">
                    <div className='tabs-menu1'>
                      <Nav as="ul" className="nav panel-tabs">
                        <Nav.Item as="li"><Nav.Link eventKey="first" href="#" >Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li"><Nav.Link eventKey="second">Tab 2</Nav.Link></Nav.Item>
                        <Nav.Item as="li"><Nav.Link eventKey="third">Tab 3</Nav.Link></Nav.Item>
                        <Nav.Item as="li"><Nav.Link eventKey="fourth">Tab 4</Nav.Link></Nav.Item>
                      </Nav>
                    </div>
                  </div>
                  <Tab.Content className="panel-body tabs-menu-body">
                    <Tab.Pane eventKey="first">
                      <p>Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque
                        nihil impedit quo minus id quod maxime placeat facere
                        possimus,
                        omnis voluptas assumenda est, omnis dolor repellendus.
                        Temporibus autem quibusdam et aut officiis debitis aut rerum
                        necessitatibus </p>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam
                        erat, sed diam voluptua. At vero eos et</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p> default model text, and a search for 'lorem ipsum' will
                        uncover
                        many web sites still in their infancy. Various versions have
                        evolved over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like</p>
                      <p>Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque
                        nihil impedit quo minus id quod maxime placeat facere
                        possimus,
                        omnis voluptas assumenda est, omnis dolor repellendus.
                        Temporibus autem quibusdam et aut officiis debitis aut rerum
                        necessitatibus </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque
                        nihil impedit quo minus id quod maxime placeat facere
                        possimus,
                        omnis voluptas assumenda est, omnis dolor repellendus.
                        Temporibus autem quibusdam et aut officiis debitis aut rerum
                        necessitatibus </p>
                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna
                        aliquyam
                        erat, sed diam voluptua. At vero eos et</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <p>Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque
                        nihil impedit quo minus id quod maxime placeat facere
                        possimus,
                        omnis voluptas assumenda est, omnis dolor repellendus.
                        Temporibus autem quibusdam et aut officiis debitis aut rerum
                        necessitatibus </p>
                      <p>default model text, and a search for 'lorem ipsum' will
                        uncover
                        many web sites still in their infancy. Various versions have
                        evolved over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Card.Body>
            <Collapse in={show4}>
              <pre>
                <code>

                  {`                   <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <div className=" tab-menu-heading">
                           <Nav className="nav panel-tabs main-nav-line">
                            <Nav.Item><Nav.Link eventKey="first" href="#" >Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item><Nav.Link active eventKey="second">Tab 2</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link active eventKey="third">Tab 3</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link active eventKey="fourth">Tab 4</Nav.Link></Nav.Item>
                          </Nav>
                        </div>
                        <Tab.Content className="panel-body tabs-menu-body">
                          <Tab.Pane eventKey="first">
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio
                              </p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                             </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            <p> default model text, and a search for 'lorem ipsum' will
                              </p>
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio
                              cumque</p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third">
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio
                              cumque </p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                              diam </p>
                          </Tab.Pane>
                          <Tab.Pane eventKey="fourth">
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio
                              cumque </p>
                            <p>default model text, and a search for 'lorem ipsum' will
                              uncover</p>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>`}
                </code>
              </pre>
            </Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>Tabs Style3</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow5(!show5) }} />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="panel tabs-style6">
                  <Tab.Container defaultActiveKey="first">
                    <div className="panel-head">
                      <Nav as="ul" className="nav nav-tabs flex-rows" >
                        <Nav.Item as="li" ><Nav.Link eventKey="first" >Home</Nav.Link></Nav.Item>
                        <Nav.Item as="li" ><Nav.Link eventKey="second" >About</Nav.Link></Nav.Item>
                        <Nav.Item as="li" ><Nav.Link eventKey="third" >Contact</Nav.Link></Nav.Item>
                      </Nav>
                    </div>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </Card.Body>
            <Collapse in={show5}>
              <pre>
                <code>

                  {`                    <Tab.Container defaultActiveKey="first">
                          <div className="panel-head">
                            <Nav as="ul" className="nav nav-tabs flex-rows" >
                              <Nav.Item as="li" ><Nav.Link eventKey="first" >Home</Nav.Link></Nav.Item>
                              <Nav.Item as="li" ><Nav.Link eventKey="second" >About</Nav.Link></Nav.Item>
                              <Nav.Item as="li" ><Nav.Link eventKey="third" >Contact</Nav.Link></Nav.Item>
                            </Nav>
                          </div>
                           <Tab.Content>
                            <Tab.Pane eventKey="first">
                              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et 
                              quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                              Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                            </Tab.Pane>
                          </Tab.Content>
                          </Tab.Container>`}
                </code>
              </pre>
            </Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Card.Title>Tabs width icon</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow6(!show6) }} />
            </Card.Header>
            <Card.Body>
              <div className="panel panel-primary">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div className="tab-menu-heading">
                    <div className="tabs-menu">

                      <Nav as="ul" variant='pills' className="nav panel-tabs panel-secondary">

                        <Nav.Item as="li" className='me-2'>
                          <Nav.Link eventKey="first"><span><i className="fe fe-user me-1"></i></span>Tab 1</Nav.Link>

                        </Nav.Item>
                        <Nav.Item as="li" className='me-2'>
                          <Nav.Link eventKey="second" ><span><i className="fe fe-calendar me-1"></i></span>Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='me-2'>
                          <Nav.Link eventKey="third" ><span><i className="fe fe-settings me-1"></i></span>Tab 3</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" className='me-2'>
                          <Nav.Link eventKey="fourth" ><span><i className="fe fe-bell me-1"></i></span>Tab 4</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                  <div className="panel-body tabs-menu-body">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                          by accident, sometimes on purpose (injected humour and the like</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
                          humour and the like</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
                          by accident, sometimes on purpose (injected humour and the like</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </Card.Body>
            <Collapse in={show6}>
              <pre>
                <code>

                  {`                     <Tab.Container id="left-tabs-example" defaultActiveKey="first">
       <div className="tab-menu-heading">
         <div className="tabs-menu">
    <Nav variant='pills' className="nav panel-tabs panel-secondary">
             <Nav.Item className='me-2'>
               <Nav.Item className='me-2'>
<Nav.Link eventKey="first"><span><i className="fe fe-user me-1"></i></span>Tab 1</Nav.Link>
               </Nav.Item>
             </Nav.Item>
             <Nav.Item className='me-2'>
               <Nav.Link eventKey="second" ><span><i className="fe fe-calendar me-1"></i></span>Tab 2</Nav.Link>
             </Nav.Item>
             <Nav.Item className='me-2'>
               <Nav.Link eventKey="third" ><span><i className="fe fe-settings me-1"></i></span>Tab 3</Nav.Link>
             </Nav.Item>
             <Nav.Item className='me-2'>
               <Nav.Link eventKey="fourth" ><span><i className="fe fe-bell me-1"></i></span>Tab 4</Nav.Link>
             </Nav.Item>
           </Nav>
         </div>
       </div>
       <div className="panel-body tabs-menu-body">
         <Tab.Content>
           <Tab.Pane eventKey="first">
             <p>page editors now use Lorem Ipsum as their default model text, and a 
              by accident, sometimes on purpose (injected humour and the like</p>
             <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
           </Tab.Pane>
           <Tab.Pane eventKey="second">
             <p> default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
               humour and the like</p>
             <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
             ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
           </Tab.Pane>
           <Tab.Pane eventKey="third">
             <p>over the years, sometimes by accident, sometimes on purpose (injected humour and the like</p>
             <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
             ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
           </Tab.Pane>
           <Tab.Pane eventKey="fourth">
             <p>page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
               by accident, sometimes on purpose (injected humour and the like</p>
             <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
             invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et</p>
           </Tab.Pane>
         </Tab.Content>
       </div>
     </Tab.Container>`}
                </code>
              </pre>
            </Collapse>
          </Card>

          <Card>
            <Card.Header  className='flex-wrap gap-2'>
              <Card.Title>Tabs on right side</Card.Title>
              <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setShow7(!show7) }} />
            </Card.Header>
            <Card.Body>

              <Tab.Container id="right-tabs-example" defaultActiveKey="first" >
                <Row className='g-0'>

                  <Col md={9} className='px-0'>
                    <Tab.Content className="content_wrapper border">
                      <Tab.Pane className="tab_content " eventKey="first">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                          of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                          and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                          of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                          and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                      </Tab.Pane>
                      <Tab.Pane className="tab_content" eventKey="second">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                          the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                          theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
                          simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                          up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
                          from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                          Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                      </Tab.Pane>
                      <Tab.Pane className="tab_content" eventKey="third">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                          of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                          and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                          of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                          and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                      </Tab.Pane>
                      <Tab.Pane className="tab_content" eventKey="fourth">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                          the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                          theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
                          simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                          up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
                          from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                          Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                      </Tab.Pane>
                      <Tab.Pane className="tab_content" eventKey="fifth">
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                          If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                          chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                          which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available,
                          but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                          be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
                          on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                          always free from repetition, injected humour, or non-characteristic words etc.</p>
                      </Tab.Pane>
                      <Tab.Pane className="tab_content" eventKey="sixth">
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
                          the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
                          theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
                          simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
                          up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
                          from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                          Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                  <Col md={3} className='px-0'>
                    <div className='tab_wrapper second_tab right_side'>
                    <Nav variant="pills" as="ul" className="tab_list" defaultActiveKey="first">
                    
                        <Nav.Link as="li" eventKey="first" >Tab 1</Nav.Link>
                  
                    
                        <Nav.Link as="li" eventKey="second">Tab 2</Nav.Link>
                  
                    
                        <Nav.Link as="li" eventKey="third">Tab 3</Nav.Link>
                  
                    
                        <Nav.Link as="li" eventKey="fourth">Tab 4</Nav.Link>
                  
                    
                        <Nav.Link as="li" eventKey="fifth">Tab 5</Nav.Link>
                  
                    
                        <Nav.Link as="li" eventKey="sixth">Tab 6</Nav.Link>
                  
                    </Nav>
                    </div>
                  </Col>
                </Row>
              </Tab.Container>

            </Card.Body>
            <Collapse in={show7} className="mt-2">
              <pre>
                <code>
                  {`
   <Tab.Container id="right-tabs-example" defaultActiveKey="first" >
   <Row>

     <Col md={10}>
       <Tab.Content className="content_wrapper border">
         <Tab.Pane className="tab_content " eventKey="first">
           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
             of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
             and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
             of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
             and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
         </Tab.Pane>
         <Tab.Pane className="tab_content" eventKey="second">
           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
             Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
             the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
             theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
             simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
             up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
             from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
             Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
         </Tab.Pane>
         <Tab.Pane className="tab_content" eventKey="third">
           <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
             of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
             and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
             of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
             and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
         </Tab.Pane>
         <Tab.Pane className="tab_content" eventKey="fourth">
           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
             Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
             the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
             theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
             simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
             up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
             from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
             Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
         </Tab.Pane>
         <Tab.Pane className="tab_content" eventKey="fifth">
           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
             If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
             chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
             which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available,
             but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
             be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
             on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
             always free from repetition, injected humour, or non-characteristic words etc.</p>
         </Tab.Pane>
         <Tab.Pane className="tab_content" eventKey="sixth">
           <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
             Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered
             the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
             theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is not
             simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
             up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes
             from sections 1.10.32 and 1.10.33 of"de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
             Renaissance. The first line of Lorem Ipsum,"Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
         </Tab.Pane>
       </Tab.Content>
     </Col>
     <Col md={2} >
       <Nav variant="pills" className="flex-column tab_wrapper second_tab right_side" defaultActiveKey="first">
         <Nav.Item>
           <Nav.Link eventKey="first" >Tab 1</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="second">Tab 2</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="third">Tab 3</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link eventKey="sixth">Tab 6</Nav.Link>
         </Nav.Item>
       </Nav>
     </Col>
   </Row>
 </Tab.Container>

`}
                </code>
              </pre>
            </Collapse>
          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}
