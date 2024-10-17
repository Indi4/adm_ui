import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import Select from 'react-select'
import { Formik } from 'formik'
// import styles from './FormValidation.module.scss'
import * as Yup from 'yup'
// // Server side
// const { Formik } = formik

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  username: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  zip: Yup.string().required(),
  file: Yup.mixed().required(),
  terms: Yup.bool().required().oneOf([true], 'terms must be accepted')
})

const FormValid = [
  { value: 'One', label: 'One' },
  { value: 'Two', label: 'Two' },
  { value: 'Three', label: 'Three' },
  { value: 'Four', label: 'Four' }
]

export default function FormValidation () {

  const breadcrumbs = ["Components", "Forms", "Form Validation"];
  
  const [validated, setValidated] = useState(false)
  const state = [
    { value: 'Choose....', label: 'Choose...' },
    { value: 'USA', label: 'USA' }
  ]

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  // select

  const Options = [

    { value: 'Choose...', label: 'Choose...' },
    { value: 'USA', label: 'USA' },
    { value: 'Berlin', label: 'Berlin' },
    { value: 'Manchester', label: 'Manchester' },
    { value: 'Flynn', label: 'Flynn' }
  ]

  // server
  const stateValue = [
    { value: 'Choose....', label: 'Choose...' },
    { value: 'USA', label: 'USA' }
  ]

  return (
    <Fragment>

            <Pageheader items={breadcrumbs} />
         
            <Row>
              <Col lg={12} md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Default Validation</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Row className="">
                        <Form.Group as={Col} md="4" controlId="validationCustom01" className='form-group'>
                          <Form.Label>First name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02" className='form-group'>
                          <Form.Label>Last name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            defaultValue="Otto"
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername" className='form-group'>
                          <Form.Label>Username</Form.Label>
                          <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                              type="text"
                              placeholder="Username"
                              aria-describedby="inputGroupPrepend"
                              required
                            />
                            <Form.Control.Feedback type="invalid">
                              Please choose a username.
                            </Form.Control.Feedback>
                          </InputGroup>
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03" className='form-group'>
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" placeholder="City" required />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04" className='form-group'>
                          <Form.Label>State</Form.Label>
                          <Select options={Options} classNamePrefix="Select2" className="multi-select" placeholder='State' />
                     
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05" className='form-group'>
                          <Form.Label>Zip</Form.Label>
                          <Form.Control type="text" placeholder="Zip" required />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Form.Group className="mb-3 form-group">
                        <Form.Check
                          required
                          label="Agree to terms and conditions"
                          feedback="You must agree before submitting."
                          feedbackType="invalid"
                        />
                      </Form.Group>
                      <Button type="submit">Submit form</Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={12} md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Custom Validation</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Row className="">
                        <Form.Group as={Col} xl={6} lg={6} md={12} sm={12} controlId="validationCustom01" className='form-group'>
                          <Form.Label>First name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            defaultValue="Mark"
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} xl={6} lg={6} md={12} sm={12} controlId="validationCustom02" className='form-group'>
                          <Form.Label>Last name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            defaultValue="Otto"
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col} xl={6} lg={6} md={12} sm={12} controlId="validationCustom03" className='form-group'>
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" placeholder="City" required />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} xl={6} lg={6} md={12} sm={12} controlId="validationCustom04" className='form-group'>
                          <Form.Label>State</Form.Label>
                         
                          <Select options={Options} classNamePrefix='Select2' className="multi-select" placeholder='State' />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} xl={6} lg={6} md={12} sm={12} className="mb-3 form-group" controlId="validationCustom05" >
                          <Form.Label>Zip</Form.Label>
                          <Form.Control type="text" placeholder="Zip" required />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid zip.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Form.Group className="mb-3 form-group">
                        <Form.Check
                          required
                          label="Agree to terms and conditions"
                          feedback="You must agree before submitting."
                          feedbackType="invalid"
                        />
                      </Form.Group>
                      <Button type="submit">Submit form</Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={12} md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Server Side Validation</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <div className="form-row">
                        <Col xl={6} className="mb-3">
                          <Form.Label>First name</Form.Label>
                          <Form.Control required isValid type="text" placeholder="First name" defaultValue="Mark" />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Col>
                        <Col xl={6} className="mb-3">
                          <Form.Label>Last name</Form.Label>
                          <Form.Control required isValid type="text" placeholder="Last name" defaultValue="Otto" />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Col>
                      </div>
                      <div className="form-row">
                        <Col xl={6} className="mb-3">
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" placeholder="City" required isInvalid />
                          <Form.Control.Feedback type="invalid"> Please provide a valid city. </Form.Control.Feedback>
                        </Col>
                        <Col xl={6} className="mb-3">
                          <Form.Label>State</Form.Label>
                          <Select className="multi-select" options={stateValue} classNamePrefix='Select2' placeholder='State' />
                          <Form.Control.Feedback type="invalid"> Please provide a valid state.</Form.Control.Feedback>
                        </Col>
                        <Col xl={3} className="mb-3">
                          <Form.Label>Zip</Form.Label>
                          <Form.Control type="text" placeholder="Zip" required isInvalid />
                          <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
                        </Col>
                      </div>
                      <Form.Group>
                        <Form.Check required isInvalid label="Agree to terms and conditions" feedback="You must agree before submitting." feedbackType="invalid" />
                      </Form.Group>
                      <Button type="submit">Submit form</Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={12} md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Supported Elements</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form className="was-validated">
                      <div className="mb-3">
                        <Form.Label htmlFor="validationTextarea" >Textarea</Form.Label>
                        <Form.Control as='textarea' className="" placeholder="Required example textarea" required isInvalid></Form.Control>
                        <Form.Control.Feedback type='invalid' className="">
                          Please enter a message in the textarea.
                        </Form.Control.Feedback>
                      </div>
                      <Form.Check
                        className="mb-3"
                        required
                        label="Check this checkbox"
                        feedback="Example invalid feedback text"
                        feedbackType="invalid"
                      />
                      <Form.Check
                        className=""
                        required
                        label="Toggle this radio"
                      />
                      <Form.Check
                        className="mb-3"
                        required
                        label="Or toggle this other radio"
                        feedback="More example invalid feedback text"
                        feedbackType="invalid"
                      />
                      <div className="mb-3">
                        <Select classNamePrefix='Select2' className="multi-select" options={FormValid} placeholder='Open this select menu' isInvalid />
                        <Form.Control.Feedback className="">Example invalid select feedback</Form.Control.Feedback>
                      </div>
                      <Form.Control type="file" className="file-browser mb-5" multiple />
                      <div className="mb-3">
                        <Button variant='primary' className="" disabled>Submit form</Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={12} md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Tooltips</Card.Title>
                  </Card.Header>
                  <Card.Body className=''>
                    <Formik validationSchema={schema} onSubmit={console.log} initialValues={{ firstName: 'Mark', lastName: 'Otto', username: '', city: '', state: '', zip: '', file: null, terms: false }}>
                      {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                          <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationFormik101" className="position-relative mb-2">
                              <Form.Label>First name</Form.Label>
                              <Form.Control type="text" name="firstName" value={values.firstName} onChange={handleChange} isValid={touched.firstName && !errors.firstName} />
                              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationFormik102" className="position-relative mb-2">
                              <Form.Label>Last name</Form.Label>
                              <Form.Control type="text" name="lastName" value={values.lastName} onChange={handleChange} isValid={touched.lastName && !errors.lastName} />
                              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                          </Row>
                          <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationFormik103" className="position-relative mb-2">
                              <Form.Label>City</Form.Label>
                              <Form.Control type="text" placeholder="City" name="city" value={values.city} onChange={handleChange} isInvalid={!!errors.city} />
                              <Form.Control.Feedback type="invalid" tooltip>{errors.city}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationFormik104" className="position-relative mb-2 ">
                              <Form.Label>State</Form.Label>
                              <Select classNamePrefix='Select2' className="multi-select" options={state} placeholder='State' />
                              <Form.Control.Feedback type="invalid" tooltip> {errors.state}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationFormik105" className="position-relative mb-2">
                              <Form.Label>Zip</Form.Label>
                              <Form.Control type="text" placeholder="Zip" name="zip" value={values.zip} onChange={handleChange} isInvalid={!!errors.zip} />
                              <Form.Control.Feedback type="invalid" tooltip>{errors.zip}</Form.Control.Feedback>
                            </Form.Group>
                          </Row>
                          <Button type="submit">Submit form</Button>
                        </Form>
                      )}
                    </Formik>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
         

         

    </Fragment>
  )
}
