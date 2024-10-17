import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, PageItem, Pagination, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import Select from 'react-select'
import { Selectiondata, Typedata } from './data/shopdata'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { AddToCart } from '../../../common/redux/action';
import { ItemData } from '../data/reduxdata'

function Shop({ local_varaiable, AddToCart }) {
  const breadcrumbs = ["Ecommerce", "Shop"];

  const [allData, setAllData] = useState(ItemData)

	let allElement2 = [];

	let myfunction = (InputData) => {
		let allElement
		for (allElement of ItemData) {
			if (allElement.title[0] == " ") {
				allElement.title = allElement.title.trim()
			}
			if (allElement.title.toLowerCase().includes(InputData.toLowerCase())) {
				if (allElement.title.toLowerCase().startsWith(InputData.toLowerCase())) {
					allElement2.push(allElement);
				}
			}

		}
		setAllData(allElement2);
	};

  return (
    <Fragment>

<Pageheader items={breadcrumbs} />

      
            <Row className=" row-cards">
              <Col lg={12} xl={9}>
              
                <Row>
                  {allData.map((idx)=>
                  <Col lg={4} xl={4} md={4} sm={4} key={idx.id}>
                    <Card className="card item-card ">
                     
                      <div>{idx.ribbon}</div>
                      <Card.Body className="product">
                        <div className="text-center product-img">
                          <Link to={`${import.meta.env.BASE_URL}ecommerce/productdetails/${idx.id}`}>
                            <img src={idx.preview} alt="img"
                              className="img-fluid w-100" />
                          </Link>
                        </div>
                        <div className="text-center mt-4 products-content">
													<div className="text-center text-warning">
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star-half-o"></i>
														<i className="fa fa-star-o"></i>
													</div>
													<a href="#">
														<h5 className="mb-0 mt-2 fw-semibold">{idx.title}</h5>
													</a>
													<div className="price mt-3 h4 mb-0 ">
														<span className="h4 text-muted me-3 text-decoration-line-through d-inline-flex">{idx.oldpr}</span>
														<span>{idx.newpr}</span>
													</div>
												</div>
                        <div className="product-info">
                          <Link to={`${import.meta.env.BASE_URL}ecommerce/wishlist`}
                            className="btn  btn-outline-info my-1 me-1">
                            <i className="fa fa-heart-o"></i>
                          </Link>
                          <Link to={`${import.meta.env.BASE_URL}ecommerce/productdetails`}
                            className="btn btn-icon btn-outline-danger mt-1  mb-1 me-1">
                            <i className="fa fa-search"></i>
                          </Link>
                          <Link to={`${import.meta.env.BASE_URL}ecommerce/shoppingcart`} onClick={() => { AddToCart(idx.id) }}
                            className="btn btn-icon btn-outline-warning mt-1  mb-1">
                            <i className="fa fa-cart-plus"></i>
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  )}
                  
                 
                  <Col md={6} sm={12} className=" mb-3 shop-count">
                    <p>1 - 10 of 234 photos</p>
                  </Col>
                  <Col md={6} sm={12} className=" mb-3 ">
                    <div className="float-end shop-pagination">
                      
                      <Pagination as="ul" className="pagination ">
                        <PageItem disabled href='#' className="" tabIndex="-1">Prev                        
                        </PageItem>
                        <PageItem active href="#" className="page-item ">1</PageItem>
                        <PageItem href="#" className="page-item">2</PageItem>
                        <PageItem href="#" className="page-item">3</PageItem>
                        <PageItem href="#" className="page-item">4</PageItem>
                        <PageItem href="#" className="page-item">5</PageItem>
                        <PageItem href="#" className="page-item page-next">
                          Next
                        </PageItem>
                      </Pagination>
                    </div>
                  </Col>
                </Row>
              
              </Col>
          

              <Col lg={12} xl={3}>
                <Card className="card border-0">
                  <Card.Body className="row card-body p-0">
                    <Col sm={12} className="col-sm-12 p-0">
                      <InputGroup className="input-group">
                        <Form.Control onChange={(ele) => { myfunction(ele.target.value) }} type="text" className="form-control" placeholder="Search ..." />
                        <Button className="btn btn-primary" type="button">Search</Button>
                      </InputGroup>
                    </Col>
                  </Card.Body>
                </Card>
                <Row>
                  <Col md={12} lg={12}>
                    <Card >
                      <Card.Header>
                        <Card.Title > Categories &amp; Fliters</Card.Title>
                      </Card.Header>
                      <Card.Body className="card-body">
                       
                      
                         <Form.Check type='checkbox' id='default-checkbox0' label='Mens' />
                  <Form.Check type='checkbox' id='default-checkbox1' label='$500 - $1000' />
                  <Form.Check type='checkbox' id='default-checkbox2' label='$1000 - $1500' />
                  <Form.Check type='checkbox' id='default-checkbox3' label='Over $2000' />

                        <Form.Group className="form-group mt-3">
                          <Form.Label className="form-label">Category</Form.Label>
                         
                        </Form.Group>
                        <Form.Group className="form-group">
                          <Form.Label className="form-label">Brand</Form.Label>                         
                          <Select options={Selectiondata} classNamePrefix="Select2" className="multi-select"   placeholder="--select---" />

                        </Form.Group>
                        <Form.Group className="form-group">
                          <Form.Label>Type</Form.Label>
                          
                          <Select options={Typedata} classNamePrefix="Select2" className="multi-select"  placeholder="--select---"  />
                        </Form.Group>
                        <Form.Group className="form-group">
                          <Form.Label>Color</Form.Label>
                         
                          <Select options={Selectiondata} classNamePrefix="Select2" className="multi-select"  />
                        </Form.Group>
                        <div className="btn-list">
                          <Button variant="primary" className="btn btn-primary " href="#">Apply Filter</Button>
                          <Button variant="danger" className="btn btn-danger" href="#">Search Now</Button>
                        </div>

                      </Card.Body>
                    </Card>

                   
                    <Card >
                      <Card.Header className="d-flex justify-content-between align-items-center">
                        <Card.Title>
                          Price
                        </Card.Title>
                        <Button variant="info" type="button" className="btn btn-sm btn-info">Apply</Button>
                      </Card.Header>
                      <Card.Body>
                       <Form.Group>
                        <Form.Check type='radio' name="example-radios" defaultValue="option1" label='Under $25'  />                       
                        <Form.Check type='radio' name="example-radios" defaultValue="option2" label='$25 to $50' />                      
                        <Form.Check type='radio' name="example-radios" defaultValue="option2" label='$50 to $100' />
                        <Form.Check type='radio' name="example-radios" defaultValue="option2" label='Other (specify)' />
                        </Form.Group>
                    
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                
              </Col>
            
            </Row>
          
        

    </Fragment>
  )
}
const mapStateToProps = (state) => ({
	local_varaiable: state
})
export default connect(mapStateToProps, { AddToCart }) (Shop);