import React, { Fragment } from 'react'
import { imagesData } from '../../../../common/commomimages/imagedata'
import { Accordion, Button, Card, Col, Form, Row } from 'react-bootstrap'
import Pageheader from '../../../../layouts/pageheader/pageheader'


export default function Faqs() {
  const breadcrumbs = ["Pages", "Extension", "Faqs"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />


      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>FAQS</Card.Title>
            </Card.Header>
            <Card.Body>
              <Accordion variant="primary" defaultActiveKey="0">
                <Accordion.Item eventKey='0' className="mb-2">
                  <Accordion.Header className="accordion-header js-accordion-header">1.How To Insert All
                    The
                    Plugins?</Accordion.Header>
                  <Accordion.Body className="accordion-body js-accordion-body">
                    <Accordion.Body className="accordion-body__contents d-flex">
                      <span className="mx-1 text-muted-dark">
                        <i className="fa fa-angle-double-right"></i>
                      </span>
                      <p className="mb-0">
                        But I must explain to you how all this mistaken idea of
                        denouncing
                        pleasure and praising pain was born and I will give you a
                        complete
                        account of the system, and expound the actual teachings of the
                        great
                        explorer of the truth, the master-builder of human happiness. No
                        one
                        rejects, dislikes, or avoids pleasure itself, because it is
                        pleasure, but because those who do not know how to pursue
                        pleasure
                        rationally encounter consequences that are extremely painful.
                        Nor
                        again is there anyone who loves or pursues or desires to obtain
                        pain
                        of itself, because it is pain, but because occasionally
                        circumstances occur in which toil and pain can procure him some
                        great pleasure.
                      </p>
                    </Accordion.Body>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="accordion__item js-accordion-item mb-2" eventKey='1'>
                  <Accordion.Header className="accordion-header js-accordion-header">2. Can I use this
                    Plugins
                    in Another Template?</Accordion.Header>
                  <Accordion.Body className="accordion-body js-accordion-body">
                    <Accordion.Body className="accordion-body__contents d-flex">
                      <span className="mx-1 text-muted-dark">
                        <i className="fa fa-angle-double-right"></i>
                      </span>
                      <p className="mb-0">
                        These cases are perfectly simple and easy to distinguish. In a
                        free
                        hour, when our power of choice is untrammelled and when nothing
                        prevents our being able to do what we like best, every pleasure
                        is
                        to be welcomed and every pain avoided. But in certain
                        circumstances
                        and owing to the claims of duty or the obligations of business
                        it
                        will frequently occur that pleasures have to be repudiated and
                        annoyances accepted. The wise man therefore always holds in
                        these
                        matters to this principle of selection: he rejects pleasures to
                        secure other greater pleasures, or else he endures pains to
                        avoid
                        worse pains.
                      </p>
                    </Accordion.Body>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2' className="accordion__item js-accordion-item mb-2">
                  <Accordion.Header className="accordion-header js-accordion-header">3. It is Easy to
                    Customizable?</Accordion.Header>
                  <Accordion.Body className="accordion-body js-accordion-body">
                    <Accordion.Body className="accordion-body__contents d-flex">
                      <span className="mx-1 text-muted-dark">
                        <i className="fa fa-angle-double-right"></i>
                      </span>
                      <p className="mb-0">
                        But I must explain to you how all this mistaken idea of
                        denouncing
                        pleasure and praising pain was born and I will give you a
                        complete
                        account of the system, and expound the actual teachings of the
                        great
                        explorer of the truth, the master-builder of human happiness. No
                        one
                        rejects, dislikes, or avoids pleasure itself, because it is
                        pleasure, but because those who do not know how to pursue
                        pleasure
                        rationally encounter consequences that are extremely painful.
                        Nor
                        again is there anyone who loves or pursues or desires to obtain
                        pain
                        of itself, because it is pain, but because occasionally
                        circumstances occur in which toil and pain can procure him some
                        great pleasure.
                      </p>
                    </Accordion.Body>
                    <Accordion defaultActiveKey="0" flush>
                      <Accordion.Item eventKey='0' className="accordion__item js-accordion-item">
                        <Accordion.Header className="accordion-header js-accordion-header">At vero
                          eos et
                          accusamus et iusto odio dignissimos?</Accordion.Header>
                        <Accordion.Body className="accordion-body js-accordion-body">
                          <Accordion.Body className="accordion-body__contents d-flex">
                            <span className="mx-1 text-muted-dark">
                              <i className="fa fa-angle-double-right"></i>
                            </span>
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore
                              eu
                              fugiat nulla pariatur. Excepteur sint occaecat
                              cupidatat
                              non proident, sunt in culpa qui officia deserunt
                              mollit
                              anim id est laborum.
                            </p>
                          </Accordion.Body>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey='1' className="accordion__item js-accordion-item mt-2">
                        <Accordion.Header className="accordion-header js-accordion-header">Nam libero
                          tempore, cum soluta nobis est eligendi?</Accordion.Header>
                        <Accordion.Body className="accordion-body js-accordion-body">
                          <Accordion.Body className="accordion-body__contents d-flex">
                            <span className="mx-1 text-muted-dark">
                              <i className="fa fa-angle-double-right"></i>
                            </span>
                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit,
                              sed do eiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam, quis nostrud
                              exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore
                              eu
                              fugiat nulla pariatur. Excepteur sint occaecat
                              cupidatat
                              non proident, sunt in culpa qui officia deserunt
                              mollit
                              anim id est laborum.
                            </p>
                          </Accordion.Body>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3' className="accordion__item js-accordion-item mb-2">
                  <Accordion.Header className="accordion-header js-accordion-header">4. How Can I contact?
                  </Accordion.Header>
                  <Accordion.Body className="accordion-body js-accordion-body">
                    <Accordion.Body className="accordion-body__contents d-flex">
                      <span className="mx-1 text-muted-dark">
                        <i className="fa fa-angle-double-right"></i>
                      </span>
                      <p className="mb-0">
                        On the other hand, we denounce with righteous indignation and
                        dislike men who are so beguiled and demoralized by the charms of
                        pleasure of the moment, so blinded by desire, that they cannot
                        foresee the pain and trouble that are bound to ensue; and equal
                        blame belongs to those who fail in their duty through weakness
                        of
                        will, which is the same as saying through shrinking from toil
                        and
                        pain.
                      </p>
                    </Accordion.Body>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='4' className="accordion__item js-accordion-item mb-2">
                  <Accordion.Header className="accordion-header js-accordion-header">5. How Can I Add
                    another
                    page in Template?</Accordion.Header>
                  <Accordion.Body className="accordion-body js-accordion-body">
                    <Accordion.Body className="accordion-body__contents d-flex">
                      <span className="mx-1 text-muted-dark">
                        <i className="fa fa-angle-double-right"></i>
                      </span>
                      <p className="mb-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto beatae
                        vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit
                        aspernatur aut odit aut fugit, sed quia consequuntur magni
                        dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                        est,
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                        velit,
                        sed quia non numquam eius modi tempora incidunt ut labore et
                        dolore
                        magnam aliquam quaerat voluptatem.
                      </p>
                    </Accordion.Body>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='5' className="accordion__item js-accordion-item mb-2">
                  <Accordion.Header className="accordion-header js-accordion-header">6. How can I download
                    This
                    template?</Accordion.Header>
                  <Accordion.Body className="accordion-body js-accordion-body">
                    <Accordion.Body className="accordion-body__contents d-flex">
                      <span className="mx-1 text-muted-dark">
                        <i className="fa fa-angle-double-right"></i>
                      </span>
                      <p className="mb-0">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque
                        nihil
                        impedit quo minus id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est, omnis dolor repellendus. Temporibus
                        autem
                        quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                        eveniet ut et voluptates repudiandae sint et molestiae non
                        recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                        ut
                        aut reiciendis voluptatibus maiores alias consequatur aut
                        perferendis doloribus asperiores repellat.
                      </p>
                    </Accordion.Body>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='6' className="accordion__item js-accordion-item mb-2">
                  <Accordion.Header className="accordion-header js-accordion-header">7. Who Can Use the Web
                    Protal?</Accordion.Header>
                  <Accordion.Body className="accordion-body js-accordion-body">
                    <Accordion.Body className="accordion-body__contents d-flex">
                      <span className="mx-1 text-muted-dark">
                        <i className="fa fa-angle-double-right"></i>
                      </span>
                      <p className="mb-0">
                        There are many variations of passages of Lorem Ipsum available,
                        but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly
                        believable. If you are going to use a passage of Lorem Ipsum,
                        you
                        need to be sure there isn't anything embarrassing hidden in the
                        middle of text. All the Lorem Ipsum generators on the Internet
                        tend
                        to repeat predefined chunks as necessary, making this the first
                        true
                        generator on the Internet.
                      </p>
                    </Accordion.Body>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='7' className="accordion__item js-accordion-item mb-2">
                  <Accordion.Header className="accordion-header js-accordion-header">8. How to Login?</Accordion.Header>
                  <Accordion.Body className="accordion-body js-accordion-body">
                    <Accordion.Body className="accordion-body__contents d-flex">
                      <span className="mx-1 text-muted-dark">
                        <i className="fa fa-angle-double-right"></i>
                      </span>
                      <p className="mb-0">
                        It is a long established fact that a reader will be distracted
                        by
                        the readable content of a page when looking at its layout. The
                        point
                        of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here,
                        content
                        here', making it look like readable English. Many desktop
                        publishing
                        packages and web page editors now use Lorem Ipsum as their
                        default
                        model text, and a search for 'lorem ipsum' will uncover many web
                        sites still in their infancy. Various versions have evolved over
                        the
                        years, sometimes by accident, sometimes on purpose (injected
                        humour
                        and the like).
                      </p>
                    </Accordion.Body>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header className=" border-bottom">
              <Card.Title>Ask Question</Card.Title>
            </Card.Header>
            <Card.Body>
              <p className="fw-semibold mb-0 text-muted-dark">If Your Query Not Clarifified Post Your Question, My Customer Support will help You</p>
              <div className="pt-4">
                <Form.Group>
                  <Form.Control type="text" className='mb-2' id="name1" placeholder="Your Name" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="email" className='mb-2' id="email" placeholder="Email Address" />
                </Form.Group>
                <Form.Group>
                  <Form.Control as='textarea' className='mb-2' rows={6} placeholder="Post Your Quesry"></Form.Control>
                </Form.Group>
              </div>
              <div className="btn-list">
                <Button className="btn btn-primary my-3" href="#">Send Questions?</Button>
                <Button className="btn btn-info my-3" href="#">view More</Button>
              </div>
              <div className="text-center mt-6 p-2 bg-light br-7">
                <div className="avatar-list avatar-list-stacked">
                  <span
                  >
                    <img className="avatar avatar-md brround cover-image" src={imagesData('male11')} />
                  </span>
                  <span
                  >
                    <img className="avatar avatar-md brround cover-image faq-avatar" src={imagesData('male1')} />
                  </span>
                  <span
                  >
                    <img className="avatar avatar-md brround cover-image" src={imagesData('female16')} />
                  </span>
                </div>
                <h2 className="fw-semibold text-dark">Still have any questions?</h2>
                <p className="fw-semibold mb-0 text-muted">If you can't find answer to your questions In your FAQ, you can always contact us.</p>
                <p className="fw-semibold mb-0 text-muted">We will answer to you shortly!</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Fragment>
  )
}
