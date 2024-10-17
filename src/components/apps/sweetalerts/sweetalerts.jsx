import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import Swal from 'sweetalert2'
import icon1 from '../../../assets/images/brand/icon.png'

export default function SweetAlerts() {
  const breadcrumbs = ["Apps", "Sweetalerts"];
  const [title, settitle] = useState('Your message')
  const [message, setmessage] = useState('Your message')
  // BasicAlert
  function Basicsweetalert() {
    Swal.fire({
      text: ' Welcome to Your Admin Page',
      allowOutsideClick: false,
      confirmButtonColor: '#3085d6'
    })
  }


  // SuccessAlert
  function Successalert() {

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Well done!',
      text: 'You Clicked Button!',
      showConfirmButton: true,
      confirmButtonColor: '#3085d6',
      timer: 1500
    })
  }
  // WarningAlert
  function Warningalert() {
    Swal.fire({
      title: 'Are you sure?',
      text: '  Your will not be able to recover this imaginary file!',
      cancelButtonColor: '#d33',
      icon: 'warning',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          confirmButtonColor: '#3085d6',
          text: 'Deleted! Your file has been deleted.success'
        })
      }
    })
  }
  function DangerAlert() {
    Swal.fire({
      title: 'Alert',
      text: 'Danger alert',
      icon: 'error',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    })
  }
  function InfoAlert() {
    Swal.fire({
      title: 'Alert',
      text: 'Info alert',
      icon: 'info',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Stay on the page',
      cancelButtonText: 'Exit',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    })
  }
  function TitleAlert() {
    Swal.fire({
      title: 'Here is Title!',
      text: ' Title Alert',
      confirmButtonColor: '#3085d6'

    })
  }
  function Passingparameter() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success me-2',
        cancelButton: 'btn btn-danger me-2'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  function withloader() {
    Swal.fire({
      icon: 'warning',
      title: 'Ajax Request example',
      text: 'Submit to run ajax request',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'ok',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#d33',

      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.json()
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: 'Ajax request finished',
          confirmButtonColor: '#3085d6'
        })
      }
    })
  }

  // Forms Sweet-Alert
  function SimpleAlert() {
    Swal.fire({

      confirmButtonColor: '#3085d6',
      text: message

    })
  }
  function Alertwithtitle() {
    Swal.fire({
      title,
      text: message,
      confirmButtonColor: '#3085d6'

    })
  }
  function ImageAlert() {
    Swal.fire({
      title:"Lovely!",
      text: "Your image is uploaded",
      imageUrl: icon1,

      imageAlt: 'Custom image',
      confirmButtonColor: '#3085d6'
    })
  }
  function TimerAlert() {
    Swal.fire({

      title,
      text: 'I will Close in 1 second',
      allowOutsideClick: false,
      timer: 1000,
      timerProgressBar: false,
      confirmButtonColor: '#3085d6'

    })
  }
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

      <Row>
        <Col sm={12} >
          <Card>
            <Card.Header>
              <Card.Title>Sample Sweet Alerts</Card.Title>
            </Card.Header>
            <Card.Body>
              <Button type='button' variant='primary' className="me-2 mt-2" id='swal-' onClick={Basicsweetalert}>Basic alert</Button>
              <Button type='button' variant='success' className="me-2 mt-2" id='swal-success' onClick={Successalert}>Success alert</Button>
              <Button type='button' variant='warning' className=" me-2 mt-2" id='swal-warning' onClick={Warningalert}>Warning alert</Button>
              <Button type='button' variant='danger' className="me-2 mt-2" id='swal-danger' onClick={DangerAlert}>Danger alert</Button>
              <Button type='button' variant='info' className="me-2 mt-2" id='swal-info' onClick={InfoAlert}>Info alert</Button>
              <Button type='button' variant='gray' className="me-2 mt-2" id='swal-title' onClick={TitleAlert}>Title alert</Button>
              <Button type='button' variant='dark' className="me-2 mt-2" id='swal-parameter' onClick={Passingparameter}>Passing a parameter</Button>
              <Button type='button' variant='secondary' className="me-2 mt-2" id='swal-ajax' onClick={withloader}>With a loader</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Forms Sweet-alert</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type='text' placeholder='Title text' id='title' className='my-3' onChange={(ele) => { settitle(ele.target.value) }} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control type='text' placeholder='Your message' className='my-3' onChange={(ele) => { setmessage(ele.target.value) }}
                  id='message' />
              </Form.Group>
              <Button type='button' className="btn btn-primary mt-2" value='Simple alert' onClick={SimpleAlert}
                id='but1' >Simple alert</Button>&nbsp;
              <Button type='button' className="btn btn-secondary mt-2" value='Alert with title' onClick={Alertwithtitle}
                id='but2' > Alert with title</Button>&nbsp;
              <Button type='button' className="btn btn-info mt-2" value='Alert with image' onClick={ImageAlert}
                id='swal-image' >Alert with image</Button>&nbsp;
              <Button type='button' className="btn btn-warning mt-2" value='With timer' onClick={TimerAlert}
                id='swal-timer' >With timer</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </Fragment>
  )
}
