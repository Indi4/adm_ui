import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/images/brand/Kizuna.svg'
import logolight from '../../../../assets/images/brand/KizunaWhiteLogo.svg'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap'

const print = () => {
  window.print()
}
export default function Invoice() {
  const breadcrumbs = ["Pages", "Extension", "Invoice"];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />
      <Row>
        <Col md={12}>
          <Card>
            <Card.Header className=" border-bottom d-block">
              <Row>
                <Col sm={6}>
                  <Link className="header-brand" to={`${import.meta.env.BASE_URL}dashboard/sales`}>
                    <img alt="logo" className="header-brand-img logo-3 float-start" src={logo} />
                    <img alt="logo" className="header-brand-img logo-4 m-0" src={logolight} />
                  </Link>
                </Col>
                <Col sm={6} className="text-sm-end">
                  <h2 className="mb-1">Invoice #4236</h2>
                  <p className="mb-1"><span className="fw-semibold">Invoice Date :</span> 29th
                    April 2019</p>
                  <p className="mb-0"><span className="fw-semibold">Due Date :</span> 10 August 2022</p>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Row className="row-sm">
                <Col lg={6}>
                  <p className="h3">Invoice Form:</p>
                  <address>
                    Street Address<br />
                    State, City<br />
                    Region, Postal Code<br />
                    yourdomain@example.com
                  </address>
                </Col>
                <Col lg={6} className=" text-end">
                  <p className="h3">Invoice To:</p>
                  <address>
                    Street Address<br />
                    State, City<br />
                    Region, Postal Code<br />
                    ypurdomain@example.com
                  </address>
                </Col>
              </Row>
              <div className="table-responsive push">
                <Table className="table table-bordered mb-0">
                  <thead className="text-dark">
                    <tr className=" ">
                      <th className="text-center fw-semibold" style={{ width: '1%' }}>S.NO</th>
                      <th className="fw-semibold">Item</th>
                      <th className="text-center fw-semibold" style={{ width: '1%' }}>Quantity</th>
                      <th className="text-end fw-semibold">Unit Price</th>
                      <th className="text-end fw-semibold">Sub Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td>
                        <p className="fw-semibold mb-1">Logo Design</p>
                        <span className="text-muted fs-13">Sed ut perspiciatis unde omnis
                          iste
                          natus error sit voluptatem accusantium doloremque
                          laudantium
                        </span>
                      </td>
                      <td className="text-center">2</td>
                      <td className="text-end">$674</td>
                      <td className="text-end">$1,308</td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td>
                        <p className="fw-semibold mb-1">Website wireframe for 2 pages</p>
                        <span className="text-muted fs-13">At vero eos et accusamus et iusto
                          odio
                          dignissimos ducimus qui blanditiis praesentium
                          voluptatum
                        </span>
                      </td>
                      <td className="text-center">4</td>
                      <td className="text-end">$1,500</td>
                      <td className="text-end">$6,000</td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td>
                        <p className="fw-semibold mb-1">PSD to HTML coding</p>
                        <span className="text-muted fs-13">Duis aute irure dolor in
                          reprehenderit
                          in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur
                        </span>
                      </td>
                      <td className="text-center">3</td>
                      <td className="text-end">$530</td>
                      <td className="text-end">$1,690</td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td>
                        <p className="fw-semibold mb-1">E-commerce Development</p>
                        <span className="text-muted fs-13">When our power of choice is
                          untrammelled
                          and when nothing prevents our being able
                        </span>
                      </td>
                      <td className="text-center">2</td>
                      <td className="text-end">$800</td>
                      <td className="text-end">$1,600</td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>
                      <td>
                        <p className="fw-semibold mb-1">Design and layout of 2 pages in
                          Photoshop</p>
                        <span className="text-muted fs-13">Lorem ipsum dolor sit amet,
                          consectetur
                          adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore
                        </span>
                      </td>
                      <td className="text-center">2</td>
                      <td className="text-end">$720</td>
                      <td className="text-end">$1,440</td>
                    </tr>
                    <tr>
                      <td colSpan="4"
                        className="fw-bold text-primary text-uppercase text-end">Total
                      </td>
                      <td className="fw-bolder text-primary text-end">
                        <h4 className="mb-0 fw-semibold">$12,038</h4>
                      </td>
                    </tr>
                  </tbody>

                </Table>
              </div>
              <Form.Group className=" mt-5">
                <Form.Label className=" fw-semibold">Note :</Form.Label>
                <Form.Control as='textarea' className="form-control text-dark" rows={3} defaultValue='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem distinctio suscipit sapiente. Culpa veniam, sapiente nam omnis odit voluptatum quia reprehenderit odio repudiandae. Deleniti totam delectus autem assumenda veritatis impedit excepturi animi vitae in praesentium.'></Form.Control>
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <div className="text-end">
                <Button type="button" variant='primary ' className="btn btn- me-2 mb-2"><i className="bi bi-wallet2 me-1"></i>
                  Pay
                  Invoice</Button>
                <Button type="button" variant='success' className="btn me-2  mb-2"><i className="bi bi-share me-1"></i>
                  Send Invoice</Button>
                <Button type="button" variant='info' className="btn me-2 mb-2" onClick={() => print()}
                ><i className="bi bi-printer me-1"></i> Print
                  Invoice</Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>


      </Row>


    </Fragment>
  )
}
