import React, { Fragment, useState, useEffect } from 'react'
import { Button, Card, Col, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { AddToCart, ProductReduxData } from "../../../common/redux/action";
import { Shoppingcart } from '../data/maindata'

function ShoppingCart({ local_varaiable, AddToCart, ProductReduxData }) {
  const breadcrumbs = ["Ecommerce", "Shopping Cart"];
  const [FiltercartData, setCartData] = useState([])
  const [Price, setPrice] = useState(0)

  useEffect(() => {
    if (local_varaiable == null) {

      setCartData(Shoppingcart)
      Shoppingcart.filter((ele) => {
        setPrice(Number(ele.Price) + price);
      })
    }
    else if (local_varaiable.length == 0) {

      setCartData(Shoppingcart)
      Shoppingcart.filter((ele) => {
        setPrice(Number(ele.price) + Price);
      })
    }
    else {
      setCartData(local_varaiable)
      local_varaiable.filter((ele) => {
        setPrice(Number(ele.price) + Price);
      })
    }

  }, [local_varaiable])

  function handleRemove(id) {
    if (local_varaiable == undefined) {
      const RemoveData = FiltercartData.filter((ale) => ale.id !== id);
      setCartData(RemoveData);
    }
    else if (local_varaiable.length == 0) {
      const RemoveData = FiltercartData.filter((ale) => ale.id !== id);
      setCartData(RemoveData);
    }
    else {
      const RemoveData = FiltercartData.filter((ale) => ale.id !== id);
      setCartData(RemoveData);
    }
  }

  function dec(el) {
    let unit = el.currentTarget.parentElement.querySelector("input").value;

    if (Number(unit) === 0) {
      return false;
    } else {
      el.currentTarget.parentElement.querySelector("input").value--;
    }
  }
  function inc(el) {
    el.currentTarget.parentElement.querySelector("input").value++;
  }

  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row className="row row-cards">
        <Col lg={12} md={12} sm={12}>

          <Card>
            <Card.Header>
              <Card.Title>Shopping Cart</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table className="table-bordered table-vcenter text-dark text-center">
                  <thead>
                    <tr className="border-top">
                      <th className="fw-semibold">Product</th>
                      <th className="fw-semibold">Title</th>
                      <th className="fw-semibold">Price</th>
                      <th className="fw-semibold">Quantity</th>
                      <th className="fw-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FiltercartData != "" ? FiltercartData.map((idx) => (
                      <tr id="btn" key={Math.random()}>
                        <td>
                          <div className="text-center">
                            <img src={idx.preview} alt="" className="cart-img text-center" />
                          </div>
                        </td>
                        <td>{idx.title}</td>
                        <td className="fw-bold">{idx.newpr}</td>
                        <td>
                          <div className="handle-counter" id="handleCounter1">
                            <Button type="button" className="counter-minus btn btn-white lh-2 shadow-none" variant="light" onClick={dec} >
                              <i className="fa fa-minus text-muted"></i>
                            </Button>
                            <input type="text" defaultValue="2" className="qty" />
                            <Button type="button" className="counter-plus btn btn-white lh-2 shadow-none" variant='light' onClick={inc}>
                              <i className="fa fa-plus text-muted"></i>
                            </Button>
                          </div>
                        </td>
                        <td>
                          <div className=" d-flex justify-content-center">
                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Edit</Tooltip>}>
                              <Link className="btn text-info bg-info-transparent btn-icon py-1 me-2">
                                <span className="bi bi-pencil-square fs-16"></span>
                              </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary' >Delete</Tooltip>}>
                              <Link id='akshi' className="btn text-danger bg-danger-transparent btn-icon py-1" onClick={() => { handleRemove(idx.id) }} >
                                <span className="bi bi-trash fs-16"></span>
                              </Link>
                            </OverlayTrigger>
                          </div>
                        </td>
                      </tr>
                    )) : <tr><td>"There is no product available in the Cart"</td></tr>}

                  </tbody>
                </Table>
              </div>
              <Row>
                <Col sm={6}>
                  <div className="input-group mt-3">
                    <input className="productcart form-control" type="text" placeholder="Coupon Code" />
                    <Link href="#" className="btn btn-primary btn-lg">Apply Coupon</Link>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

        </Col>

        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Order Summery</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <table className="table table-bordered align-items-center">
                  <tbody className="text-dark">
                    <tr>
                      <td>Cart Subtotal</td>
                      <td className="text-end">$485.00</td>
                    </tr>
                    <tr>
                      <td><span>Discount</span></td>
                      <td className="text-end text-success"><span>0.5%</span></td>
                    </tr>
                    <tr>
                      <td><span>Totals</span></td>
                      <td className="text-end text-muted"><span>$456.00</span></td>
                    </tr>
                    <tr>
                      <td><span>Order Total</span></td>
                      <td>
                        <h2 className="price text-end text-primary mb-0">$456.00</h2>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <form className="float-end mt-0">
                <Link to={`${import.meta.env.BASE_URL}ecommerce/shop`} className="btn btn-primary me-2 mt-2"><i
                  className="fa fa-arrow-circle-left"></i> Continue Shopping</Link>
                <Link to={`${import.meta.env.BASE_URL}ecommerce/checkout`} className="btn btn-success me-2 mt-2">Checkout <i
                  className="fa fa-arrow-circle-right"></i></Link>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  local_varaiable: state
})

export default connect(mapStateToProps, { AddToCart, ProductReduxData })(ShoppingCart);