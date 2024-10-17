import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, PageItem, Pagination, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'
import Select from 'react-select'
import { Option1, Option2, Option3, Option4, Shoppingdata } from './data/searchdata'


export default function Search() {
  const breadcrumbs = ["Apps", "Search"];
  const [allData, setAllData] = useState(Shoppingdata);

  let searchdata = [];

  let myfunction = (idx) => {
    let Data
    for (Data of Shoppingdata) {
      if (Data.name[0] == " ") {
        Data.name = Data.name.trim()
      }
      if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
        if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
          searchdata.push(Data);
        }
      }

    }
    setAllData(searchdata);
  };
  return (
    <Fragment>


      <Pageheader items={breadcrumbs} />


      <Row className=" row-cards">
        <Col lg={3}>
          <Row>
            <Col md={6} lg={12}>
              <Card>
                <Card.Header>
                  <Card.Title>Categories</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="search-radio mb-3">

                    <Form.Check type="radio" name="example-radios" label="Mens" defaultChecked />
                    <Form.Check type="radio" name="example-radios" label="Womens" />
                    <Form.Check type="radio" name="example-radios" label="kids" />
                    <Form.Check type="radio" name="example-radios" label="Accessories" />

                  </div>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Category</Form.Label>

                    <Select options={Option1} classNamePrefix='Select2' className="multi-select" placeholder="" defaultValue={Option1[0]} />
                  </Form.Group>
                  <Link className="btn btn-primary btn-sm" to="#">Search</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={12}>
              <Card>
                <Card.Header>
                  <Card.Title>Category Filters</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Brand</Form.Label>

                    <Select options={Option2} classNamePrefix='Select2' menuPlacement='auto' className="multi-select" placeholder="" defaultValue={Option2[0]} />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Color</Form.Label>

                    <Select options={Option3} classNamePrefix='Select2' menuPlacement='auto' className="multi-select" placeholder="" defaultValue={Option3[0]} />
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label className="form-label">Type</Form.Label>

                    <Select options={Option4} classNamePrefix='Select2' menuPlacement='auto' className="multi-select" placeholder="" defaultValue={Option4[0]} />
                  </Form.Group>
                  <Link className="btn btn-success btn-sm" to="#">Apply Filter</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={9}>
          <InputGroup className="input-group w-40 ms-auto">
            <Form.Control type="text" className="form-control bg-white" placeholder="Search here..." onChange={(ele) => { myfunction(ele.target.value) }} />
            <Button type="button" className="btn btn-primary search1">
              <i className="fa fa-search " aria-hidden="true"></i>
            </Button>
          </InputGroup>
          <Card className=" mt-5 users store">
            <div className="table-responsive">
              <Table className="table card-table table-vcenter text-nowrap">
                <thead>
                </thead>
                <tbody className="text-dark">
                  {allData.map((idx, s1) => (
                    <tr className="border-bottom" key={s1}>
                      <td className="w-10 border-top-0">
                        <div>
                          <img src={idx.src} alt="" className="h-8 rounded-3 bg-light" />
                        </div>
                      </td>
                      <td className="w-10 border-top-0 me-2">{idx.name}
                        <div className={`badge bg-${idx.bg} badge-md ms-2`}>{idx.badge}</div></td>
                      <td className="border-top-0">
                        <div className="rating-stars block" id="rating1">
                          <div className="rating-stars-container">
                            <div className={`rating-star sm is--${idx.class1}`}>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className={`rating-star sm is--${idx.class2}`}>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className={`rating-star sm is--${idx.class3}`}>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className={`rating-star sm is--${idx.class4}`}>
                              <i className="fa fa-star"></i>
                            </div>
                            <div className={`rating-star sm is--${idx.class5}`}>
                              <i className="fa fa-star"></i>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className={`text-end text-${idx.color} d-none d-md-table-cell text-nowrap border-top-0`}><span className="">{idx.percentage}</span> </td>

                      <td className="text-end border-top-0">
                        <strong className="">{idx.price}</strong>
                      </td>
                      <td className="text-end border-top-0"><Link className="btn btn-primary btn-sm text-white me-2 border-top-0">{idx.btn}</Link></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>
          <div >
            <Pagination className="pagination mb-5 float-end">
              <PageItem disabled href="#" tabIndex="-1">Prev</PageItem>
              <PageItem className="page-item active" href="#">1</PageItem>
              <PageItem className="page-item" href="#">2</PageItem>
              <PageItem className="page-item" href="#">3</PageItem>
              <PageItem className="page-item" href="#">4</PageItem>
              <PageItem className="page-item" href="#">5</PageItem>

              <PageItem href="#">Next</PageItem>
            </Pagination>
          </div>
        </Col>
      </Row>



    </Fragment>
  )
}
