import React, { Fragment } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { toast, ToastContainer } from 'react-toastify'

export default function Notifications () {
  const breadcrumbs = ["Apps", "Notifications"];
  // Alerts Notifications
  const successNotifier = () =>
    toast.success(
      <h6 className="text-white tx-16 mb-0">Success:Well Done Details Submitted Successfully </h6>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        closeButton: false,
        icon: '',
        theme: 'colored'
      }
    )
  const warningNotifier = () =>
    toast.warn(
      <h6 className="text-white tx-16 mb-0">
        Warning: Something Went Wrong
        </h6>,
      {
        position: toast.POSITION.TOP_LEFT,
        hideProgressBar: true,
        autoClose: 2000,
        closeButton: false,
        icon: '',
        theme: 'colored'
      }
    )

  const top = () =>
    toast.info(
      <h6 className=" text-white mx-2 tx-16 d-flex align-items-center mb-0 ">
     warning:Something went Wrong
      </h6>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        closeButton: false,
        icon: '',
        theme: 'colored'
      }
    )

  const centerDanger = () =>
    toast.error(
      <h6 className="text-white tx-16 mb-0 ms-0" >Error: This Error Will Stay Here Until You click it.</h6>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        closeButton: false,
        icon: '',
        theme: 'colored'
      }
    )
  const centerWarning = () =>
    toast.warn(
      <h6 className="text-white tx-16 mb-0 ms-0" >Error: This Error Will Stay Here Until You click it.</h6>,
      {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2000,
        closeButton: false,
        icon: '',
        theme: 'colored'
      }
    )
  const bottomprimary = () =>

    toast.info(<h6 className="text-white tx-16 mb-0 ms-0" >Default Bottom Notification</h6>, {
      position: toast.POSITION.BOTTOM_CENTER,
      hideProgressBar: true,
      autoClose: 2000,
      closeButton: false,
      theme: 'colored',
      icon: ''

    })
  //  Side Alerts Notifications
  const successLeft = () =>
    toast.success(

      <span className="text-white tx-16 mb-0"> <h6>Notice!<br/> You have 4 notification </h6> </span>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored'
      }

    )
  const warningLeft = () =>
    toast.warn(
      <span className="text-white tx-16 mb-0"><h6>Warning! <br/>read all details carefully </h6></span>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,

        autoClose: 2000,
        theme: 'colored'
      }
    )

  const dangerLeft = () =>
    toast.error(
      <span className="text-white tx-16 mb-0"><h6>Error! <br/>please check Your details ...file is missing </h6></span>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        theme: 'colored'
      }
    )

  // Callback Notification

  const Callback = () =>
    toast.success(
      <span className="text-white tx-16 mb-0"><h6>Are You Sure You Want To Close ? </h6></span>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 2000,
        closeButton: false,
        theme: 'colored'
      }
    )
    const warningNotifier1 = () =>
    toast.warn(
      <h6 className="text-white tx-16 mb-0">
        Warning: Something Went Wrong
        </h6>,
      {
        position: toast.POSITION.TOP_LEFT,
        hideProgressBar: true,
        autoClose: 2000,
        closeButton: false,
        confirmButton:'Stay Here',
        icon: '',
        theme: 'colored'
      }
    )
  //  Notification Styles
  function MultipleLine () {
    toast.info(
    <h6 className="text-white tx-10 mb-0">Testing A Multipleline<br/>  Text. Testing,<br/> One, Two...More</h6>,
    {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      autoclose: true,
      icon: '',
      closeButton: false,
      theme: 'colored'
    }
    )
  }
  function Fadeanimated () {
    toast.success(
      <h6 className="mx-2 tx-16 d-flex align-items-center mb-0 ">
        Fade Mode Activated
      </h6>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        icon: '',
        closeButton: false,
        autoclose: true,
        theme: 'colored'
      }
    )
  }
  function Custom () {
    toast(
    <h6 className="text-white tx-10 mb-0">Customize The TimeOut!</h6>,
    {
      position: toast.POSITION.TOP_LEFT,
      hideProgressBar: true,
      autoclose: true,
      icon: '',
      closeButton: false,
      className: 'toast-message'
    }
    )
  }
  function Timeout () {
    toast.info(
    <h6 className="text-white tx-10 mb-0">Customize The TimeOut!</h6>,
    {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      autoclose: true,
      icon: '',
      closeButton: false,
      theme: 'colored'
    }
    )
  }
  return (
    <Fragment>



          <Pageheader items={breadcrumbs} />
           
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Side Alerts Notifications</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="btn-list">
                      <Button href="#" variant='success notice' className="btn btn-success notice" onClick={successLeft}>Success</Button>
                      <Button href="#" variant='warning warning' className="btn btn-warning warning" onClick={warningLeft}>Warning</Button>
                      <Button href="#" variant='danger error' className="btn btn-danger error" onClick={dangerLeft}>Danger</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
             
            </Row>
          
            <Row>
              <Col md={6}>
                <Card>
                  <Card.Header>
                    <Card.Title>Alerts Notifications</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="btn-list">
                      <Button variant='success' onClick={successNotifier} >Default</Button>
                      <Button variant='warning' onClick={warningNotifier} >Left</Button>
                      <Button variant='info' onClick={top} >Center Info</Button>
                      <Button variant='danger' onClick={centerDanger} >Center Error</Button>
                      <Button variant='warning' onClick={centerWarning} >Center Warning</Button>
                      <Button variant='primary' onClick={bottomprimary} >Bottom Primary</Button>
                      <ToastContainer />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Header>
                    <Card.Title>Notification Styles</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="example border-0 p-0">
                      <div className="btn-list">
                        <Button variant='info' onClick={MultipleLine} >Mutiple lines</Button>
                        <Button variant='success' onClick={Fadeanimated} className="btn btn-success">Fade
                          Animation</Button>
                        <Button variant='primary' onClick={Custom} className="btn btn-primary">Customize
                          Background</Button>
                        <Button variant='info' onClick={Timeout} className="btn btn-info">Timeout</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
         
          

    </Fragment>
  )
}
