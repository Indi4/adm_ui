import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import Select from 'react-select'
import { Babies, Electronics, Menswear, Quantitydata, Sportsdata, Swiperdata, Womenswear } from './data/productdetailsdata'
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { AddToCart } from '../../../common/redux/action';
import product23 from '../../../assets/images/products/23.png';
import product22 from '../../../assets/images/products/22.png';
import product21 from '../../../assets/images/products/21.png';
import product20 from '../../../assets/images/products/20.png';

function ProductDetails({ local_varaiable, AddToCart }) {
  const breadcrumbs = ["Ecommerce", "Product Details"];

  let { id } = useParams();

  const [defaultData, setdefaultData] = useState();

  useEffect(() => {

    if (id != undefined) {
      let data = local_varaiable.filter((ele) => {
        return ele.id == id;
      });
      setdefaultData(data[0]);
    } else {
      setdefaultData({
        id: Math.random(),
        preview: product23,
        images: [
          { img: product23 },
          { img: product22 },
          { img: product21 },
          { img: product20 }
        ],
        title: "Half Hands T-shirt ( for Casual Wear.)",
        price: "$56",
      });
    }
  }, [id]);

  return (
    <Fragment>

            <Pageheader items={breadcrumbs} />

            <Row className="row-cards">
              <Col lg={12} xl={9}>
                <Card>
                  <Card.Body className="single-productslide">
                    <div className="product-carousel product-gallery">
                      <div id="Slider" className="carousel slide border" data-bs-ride="false">
                        <div className="carousel-inner">
                          <div className="carousel-item active product-item text-center mb-5 mt-5 btn-list"><img className={defaultData && defaultData.preview != product23 ? "img-fluid mx-auto d-block" : ""}src={defaultData && defaultData.preview} alt="image"/>
                            
                          </div>
                         
                        </div>
                      </div>
                    </div>
                    <div className="text-center carousel-slider">
                      <div id="thumbcarousel" className="carousel slide" data-bs-interval="t">
                        <div className="carousel-inner">
                          <ul className="carousel-item active product-sm-gallery">
                          {defaultData &&
											defaultData.images.map((ele) => {
												return (
													<li key={Math.random() + ele} className="thumb active m-2 item-gallery">
														<Link to="#" onClick={() => { setdefaultData({ ...defaultData, preview: ele.img });}}>
															<img src={ele.img} alt="image" />
														</Link>
													</li>
												);
											})}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="product-gallery-data mb-0">
                      <h3 className="mb-3 fw-semibold">{defaultData && defaultData.title}</h3>
                      <div className="mb-3">
                        <span className="fw-semibold h1 text-dark">{defaultData && defaultData.price}</span>
                        <span className="text-primary ms-2"><i className="fa fa-info-circle"></i> 20%
                          off</span>
                      </div>
                      <h6 className="fw-semibold mt-3">DESCRIPTION</h6>
                      <p className="text-muted">labore et dolore magna enim ad minim veniam, quis
                        nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu
                        fugiat nulla pariatur.</p>
                      <dl className="product-gallery-data1">
                        <dt>Color</dt>
                        <dd>Navy Blue</dd>
                      </dl>
                      <dl className="product-gallery-data1">
                        <dt>Features</dt>
                        <dd>Fabric Premium made T-shirt</dd>
                      </dl>
                      <dl className="product-gallery-data1">
                        <dt>Delivery</dt>
                        <dd>Russia, USA, and Europe</dd>
                      </dl>
                      <div className="product-gallery-rats">
                        <ul className="product-gallery-rating">
                          <li>
                            <Link to="#"><i className="fa fa-star text-warning"></i></Link>
                            <Link to="#"><i className="fa fa-star text-warning"></i></Link>
                            <Link to="#"><i className="fa fa-star text-warning"></i></Link>
                            <Link to="#"><i className="fa fa-star text-warning"></i></Link>
                            <Link to="#"><i className="fa fa-star-o text-warning"></i></Link>
                          </li>
                        </ul>
                        <div className="label-rating ms-2">793 reviews</div>
                      </div>
                      <Row>
                        <div className="col-12 mb-0">
                          <dl className="product-gallery-quty d-flex align-items-center mx-2 mt-2 mb-0">
                            <dt className="mb-2 me-2">Quantity :</dt>
                            <dd>
                              <div className="form-group mb-0">
                              
                                <Select options={Quantitydata} classNamePrefix="Select2" className="multi-select"
                                  placeholder='' defaultValue={Quantitydata[0]} />

                              </div>
                            </dd>
                          </dl>
                        </div>
                        <div className="col-12">
                          <dl className="product-gallery-size d-flex">
                            <dt className="me-2">Size:</dt>
                            <dd>
                              <div
                                className="product-gallery-checks custom-controls-stacked d-sm-flex">
                                
                                <Form.Check inline name="group1" className="custom-control custom-checkbox ms-0 d-inline-flex" type="checkbox" label='SM' />                                
                                <Form.Check inline name="group1" className="custom-control custom-checkbox ms-0 d-inline-flex" type="checkbox" label='MD' />                                
                                <Form.Check inline name="group1" className="custom-control custom-checkbox ms-0 d-inline-flex" type="checkbox" label='XL' />
                                <Form.Check inline className="custom-control custom-checkbox ms-0 d-inline-flex" type="checkbox" label='XXL' />
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </Row>
                    </div>
                  </Card.Body>
                  <Card.Footer className="text-end">
                    <Button variant='primary' href="checkout" className="me-2"> Buy now </Button>
                    <Link to= {`${import.meta.env.BASE_URL}ecommerce/shoppingcart`} className="btn btn-info me-2" onClick={() => { AddToCart(defaultData.id)}}><i className="fa fa-shopping-cart"></i> Add to cart </Link>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg={12} xl={3}>
                <Card className="card border-0">
                  <Card.Body className="row card-body p-0">
                    <Col sm={12} className="col-sm-12 p-0">
                      <InputGroup className="input-group">
                        <Form.Control type="text" className="form-control" placeholder="Search ..." />
                        <Button variant='primary' className="btn btn-primary" type="button">Search</Button>
                      </InputGroup>
                    </Col>
                  </Card.Body>
                </Card>
                <Row>
                  <Col md={12} lg={12}>
                    <Card>
                      <Card.Header>
                        <Card.Title>
                          Colors
                        </Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <div className="row gutters-xs">
                          <div className="col-auto">
                            <label className="colorinput">
                              <input name="color" type="radio" value="azure"
                                className="colorinput-input" defaultChecked />
                              <span className="colorinput-color bg-azure"></span>
                            </label>
                          </div>
                          <div className="col-auto">
                            <label className="colorinput">
                              <input name="color" type="radio" value="indigo"
                                className="colorinput-input" />
                              <span className="colorinput-color bg-indigo"></span>
                            </label>
                          </div>
                          <div className="col-auto">
                            <label className="colorinput">
                              <input name="color" type="radio" value="purple"
                                className="colorinput-input" />
                              <span className="colorinput-color bg-purple"></span>
                            </label>
                          </div>
                          <div className="col-auto">
                            <label className="colorinput">
                              <input name="color" type="radio" value="pink"
                                className="colorinput-input" />
                              <span className="colorinput-color bg-pink"></span>
                            </label>
                          </div>
                          <div className="col-auto">
                            <label className="colorinput">
                              <input name="color" type="radio" value="red"
                                className="colorinput-input" />
                              <span className="colorinput-color bg-red"></span>
                            </label>
                          </div>
                          <div className="col-auto">
                            <label className="colorinput">
                              <input name="color" type="radio" value="orange"
                                className="colorinput-input" />
                              <span className="colorinput-color bg-orange"></span>
                            </label>
                          </div>
                          <div className="col-auto">
                            <label className="colorinput">
                              <input name="color" type="radio" value="yellow"
                                className="colorinput-input" />
                              <span className="colorinput-color bg-yellow"></span>
                            </label>
                          </div>
                          <div className="col-auto">
                            <label className="colorinput">
                              <input name="color" type="radio" value="lime"
                                className="colorinput-input" />
                              <span className="colorinput-color bg-lime"></span>
                            </label>
                          </div>
                          <div className="col-auto">
                            <label className="colorinput">
                              <input name="color" type="radio" value="green"
                                className="colorinput-input" />
                              <span className="colorinput-color bg-green"></span>
                            </label>
                          </div>
                          <div className="col-auto">
                            <label className="colorinput">
                              <input name="color" type="radio" value="teal"
                                className="colorinput-input" />
                              <span className="colorinput-color bg-teal"></span>
                            </label>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Header>
                        <Card.Title > Categories</Card.Title>
                      </Card.Header>
                      <div className="card-body">
                        <div className="form-group">
                          <label className="form-label">Mens</label>
                        
                          <Select options={Menswear} classNamePrefix="Select2" 
                            placeholder='--Select--'  />

                        </div>
                        <div className="form-group">
                          <label className="form-label">Women</label>
                        
                          <Select options={Womenswear} classNamePrefix="Select2"
                            placeholder='--Select--' />

                        </div>
                        <div className="form-group">
                          <label className="form-label">Baby & Kids</label>
                        
                          <Select options={Babies} classNamePrefix="Select2" className="multi-select"
                            placeholder='' />

                        </div>
                        <div className="form-group">
                          <label className="form-label">Electronics</label>
                         
                          <Select options={Electronics} classNamePrefix="Select2" className="multi-select"
                            placeholder='' />

                        </div>
                        <div className="form-group">
                          <label className="form-label">Sport,Books & More </label>
                        
                          <Select options={Sportsdata} classNamePrefix="Select2" className="multi-select"
                            placeholder='' />

                        </div>
                      </div>
                    </Card>
                  
                    <Card>
                      <Card.Header className="card-header d-flex justify-content-between align-items-center">
                        <Card.Title>
                          Price
                        </Card.Title>
                        <Button variant='info' type="button" className="btn btn-sm btn-info">Apply</Button>
                      </Card.Header>
                      <Card.Body>

                        <Form.Check type="radio" label="Under $25" defaultChecked />
                       
                        <Form.Check type="radio" label="$25 to $50" />
                      
                        <Form.Check type="radio" label="$50 to $100" />
                        
                        <Form.Check type="radio" label="Other (specify)" />
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
  local_varaiable: state,
});

export default connect(mapStateToProps, { AddToCart })(ProductDetails);