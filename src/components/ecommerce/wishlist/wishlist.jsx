import React, { Fragment, useEffect, useState } from 'react'
import { Button, Card, Col, PageItem, Pagination, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { ItemData } from '../data/reduxdata';
import { connect } from 'react-redux';
import { AddToCart } from '../../../common/redux/action';
import { Link } from 'react-router-dom';

 function Wishlist ({ local_varaiable, AddToCart }) {
  const breadcrumbs = ["Ecommerce", "Wishlist"];

  const [idx, setidx] = useState(ItemData);
  function handleRemove(id) {
    const newList = idx.filter((idx) => idx.id !== id);
    setidx(newList);
  }

  return (
    <Fragment>

<Pageheader items={breadcrumbs}/>

            <Row>
              <Col lg={12}>
                <Row>
                  {idx.map((data, dup)=>(
                  <Col sm={6} lg={4} xl={3} className="alert mb-0" key={dup}>
                    <Card className="item-card">
                      <Card.Body className="product-grid6">
                        <div className="product-image6">
                          <Link to="#"><img className="img-fluid w-70 h-80" src={data.preview} alt="img" /></Link>
                        </div>
                        <div className="product-content text-center op-1">
                          <div className="mb-2 text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                          </div>
                          <h4><Link to="#">{data.title}</Link></h4>
                          <div className="price">
                            <span className="mx-2">{data.newpr}</span>
                            <span className="discount-price">{data.oldpr}</span>
                          </div>
                        </div>
                      </Card.Body>
                      <Card.Footer className="text-center">
                        <div className="btn-list">
                          <Button variant='primary' className="btn btn-primary btn-svgs" href={`${import.meta.env.BASE_URL}ecommerce/shoppingcart`}>
                            <i className="fe fe-shopping-cart mx-2"></i>
                            <span>Add to cart</span>
                          </Button>
                          <Button className="btn btn-light btn-svgs" onClick={() => handleRemove(data.id)}>
                            <i className="fe fe-trash-2 mx-2"></i>
                            <span>Remove</span>
                          </Button>
                        </div>
                      </Card.Footer>
                    </Card>
                  </Col>
                  ))}
                  
                  <div className="my-5">
                    <div className="float-end">
                      
                       <Pagination as="ul" className="pagination ">
                      <PageItem disabled to='#' className="" tabIndex="-1">Prev
                      </PageItem>
                      <PageItem active to="#" className="page-item ">1</PageItem>
                      <PageItem to="#" className="page-item">2</PageItem>
                      <PageItem to="#" className="page-item">3</PageItem>
                      <PageItem to="#" className="page-item">4</PageItem>
                      <PageItem to="#" className="page-item">5</PageItem>
                      <PageItem to="#" className="page-item page-next">
                        Next
                      </PageItem>
                    </Pagination>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          


    </Fragment>
  )
}
export default Wishlist;