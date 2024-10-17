/* eslint-disable no-tabs */
import React, { Fragment, useState } from 'react'
import { Button, ButtonGroup, Card, Col, Dropdown, Form, InputGroup, Row } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import Select from 'react-select'
import { Basic, Country, CustomisedSelector, Data, Daydata, GroupFilterOption, Groupoption, Hide, Multiple, MultipleGroup, Options, SingleGroup, Singlerow, Yeardata, animatedComponents, groupedOptions, groupfilter, multiDisable, option } from './data/elementsdata'
import { MultiSelect } from 'react-multi-select-component'
import Pickr from '@simonwep/pickr'
import DatePicker from 'react-datepicker'
import TextField from '@mui/material/TextField'
import { BasicDatePicker, BasicTimePicker, CustomTimeFormat, DateTimePickerOpenTo, DaterangePicker, HumanFriendlydates, ResponsiveDatePickers } from './data/datetime'

export default function FormElements() {
  const breadcrumbs = ["Components", "Forms", "Form Elements"];
  const [selected, setSelected] = useState([])
  const [selected2, setSelected2] = useState([])
  const [selected3, setSelected3] = useState([])
  const [selected4, setSelected4] = useState([])
  // Nano color picker
  const colorPicker = React.useRef()

  React.useEffect(() => {
    if (colorPicker.current) {
      const _pickr = Pickr.create({
        el: '.color-picker',
        theme: 'nano',
        default: '#05C3FB',
        swatches: [
          'rgba(156, 39, 176, 0.9)',
          'rgba(103, 58, 183, 0.85)',
          'rgba(63, 81, 181, 0.8)',
          'rgba(33, 150, 243, 0.75)',
          'rgba(3, 169, 244, 0.7)',
          'rgba(0, 188, 212, 0.7)',
          'rgba(0, 150, 136, 0.75)',
          'rgba(76, 175, 80, 0.8)',
          'rgba(244, 67, 54, 1)',
          'rgba(233, 30, 99, 0.95)',
          'rgba(139, 195, 74, 0.85)',
          'rgba(205, 220, 57, 0.9)',
          'rgba(255, 235, 59, 0.95)',
          'rgba(255, 193, 7, 1)'
        ],

        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: false,

          // Input / output Options
          interaction: {
            hex: true,
            input: true,
            clear: true,
            save: true
          }
        }
      })
    }
  }, [])

  // Classic color picker
  const classicPicker = React.useRef()

  React.useEffect(() => {
    if (classicPicker.current) {
      const pickr = Pickr.create({
        el: '.color-picker',
        theme: 'classic',
        default: '#6C5FFC',
        swatches: [
          'rgba(244, 67, 54, 1)',
          'rgba(233, 30, 99, 0.95)',
          'rgba(156, 39, 176, 0.9)',
          'rgba(103, 58, 183, 0.85)',
          'rgba(63, 81, 181, 0.8)',
          'rgba(33, 150, 243, 0.75)',
          'rgba(3, 169, 244, 0.7)',
          'rgba(0, 188, 212, 0.7)',
          'rgba(0, 150, 136, 0.75)',
          'rgba(76, 175, 80, 0.8)',
          'rgba(139, 195, 74, 0.85)',
          'rgba(205, 220, 57, 0.9)',
          'rgba(255, 235, 59, 0.95)',
          'rgba(255, 193, 7, 1)'
        ],

        components: {
          preview: true,
          opacity: true,
          hue: true,

          interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            clear: true,
            save: true
          }
        }

      })
    }
  }, [])

  // Monolith color picker

  const monolithPicker = React.useRef()

  React.useEffect(() => {
    if (monolithPicker.current) {
      const pickr = Pickr.create({
        el: '.color-picker',
        theme: 'classic',
        default: '#FC5296',

        swatches: [
          'rgba(55, 35, 9, 0.5)',
          'rgba(44, 67, 54, 1)',
          'rgba(33, 30, 99, 0.95)',
          'rgba(56, 39, 176, 0.9)',
          'rgba(03, 58, 183, 0.85)',
          'rgba(163, 81, 181, 0.8)',
          'rgba(33, 150, 243, 0.75)',
          'rgba(3, 169, 244, 0.7)',
          'rgba(0, 188, 212, 0.7)',
          'rgba(0, 150, 136, 0.75)',
          'rgba(76, 175, 80, 0.8)',
          'rgba(139, 195, 74, 0.85)',
          'rgba(205, 220, 57, 0.9)',

          'rgba(255, 193, 7, 1)'
        ],

        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: false,

          // Input / output Options
          interaction: {

            input: true,
            clear: true,
            save: true
          }
        }
      })
    }
  }, [])

  // Date picker function

  const [startDate, setStartDate] = React.useState(new Date())

  const [monthYear, setmonthYear] = React.useState(new Date())

  const [Year, setYear] = React.useState(new Date())

  return (
    <Fragment>



      <Pageheader items={breadcrumbs} />

      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title className="mb-0">Default Form Input Fields</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form>
                    <Form.Group className='form-group'>
                      <Form.Control type="text" className="form-control" name="input"
                        placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className='form-group'>
                      <Form.Control readOnly type="text" className="form-control"
                        name="example-disabled-input" placeholder="Read Only Text area."
                        defaultValue="Read Only Text area. " />
                    </Form.Group>
                    <Form.Group className='form-group'>
                      <Form.Control type="text" className="form-control"
                        name="example-disabled-input" placeholder="Disabled text area.."
                        defaultValue="" disabled />
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={6}>
                  <Form>
                    <Form.Group className="form-group has-success">
                      <Form.Control type="text" className="form-control is-valid state-valid"
                        name="example-text-input-valid" placeholder="Valid Email.." />
                    </Form.Group>
                    <Form.Group className="form-group has-danger">
                      <Form.Control type="text" className="form-control is-invalid state-invalid"
                        name="example-text-input-invalid"
                        placeholder="Invalid feedback" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control type="password" className="form-group form-control"
                        name="example-password-input" placeholder="Password.." />
                    </Form.Group>
                  </Form>
                </Col>
                <Col md={12}>
                  <Form.Control as="textarea" id="exampleFormControlTextarea1" rows="4"
                    placeholder="Write a large text here ..."></Form.Control>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
              <Card.Title className="mb-0">Default Form Input Fields with labels</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className='form-group'>
                    <Form.Label>Enter Name</Form.Label>
                    <Form.Control type="text" className="form-control" name="example-text-input"
                      placeholder="Name" />
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>Disabled</Form.Label>
                    <Form.Control type="text" className="form-control"
                      name="example-disabled-input" placeholder="Disabled text area.."
                      defaultValue="" disabled />
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>Readonly</Form.Label>
                    <Form.Control type="text" className="form-control"
                      name="example-disabled-input" placeholder="Read Only Text area."
                      defaultValue="Read Only Text area. " readOnly="" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className='form-group'>
                    <Form.Label>Valid Email</Form.Label>
                    <Form.Control type="text" className="form-control is-valid state-valid"
                      name="example-text-input-valid" placeholder="Valid Email.." />
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>Invalid Number</Form.Label>
                    <Form.Control type="text" className="form-control is-invalid state-invalid"
                      name="example-text-input-invalid"
                      placeholder="Invalid Number.." />
                    <div className="invalid-feedback">Invalid feedback</div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className="form-control"
                      name="example-password-input" placeholder="Password.." />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className='form-group'>
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" className="form-control" name="example-textarea-input"
                      rows="4" placeholder="text here.."></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Different Input Style Forms</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xl={6}>
                  <Form.Group className='form-group'>
                    <Form.Label>Text</Form.Label>
                    <Form.Control type="text" className="form-control" name="example-text-input"
                      placeholder="Text.." />
                  </Form.Group>

                  <Form.Group className='form-group'>
                    <Form.Label>Country</Form.Label>
                    <Country />
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>Input group</Form.Label>
                    <InputGroup className="input-group">
                      <Form.Control type="text" className="form-control"
                        placeholder="Search for..." />
                      <Button className="btn btn-primary" type="button">Go!</Button>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="form-group mb-0">
                    <Form.Label>Input group buttons</Form.Label>
                    <InputGroup className="input-group">
                      <Form.Control type="text" className="form-control" />
                      <Dropdown as={ButtonGroup} >
                        <Button variant='primary'>Action</Button>
                        <Dropdown.Toggle data-bs-toggle="dropdown" type="button" className="btn btn-primary"></Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-end">
                          <Dropdown.Item href="#">News</Dropdown.Item>
                          <Dropdown.Item href="#">Messages</Dropdown.Item>
                          <Dropdown.Item href="#">Edit
                            Profile</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col xl={6}>
                  <Form.Group className='form-group'>
                    <Form.Label>Separated inputs</Form.Label>
                    <div className="row gutters-xs">
                      <div className="col">
                        <Form.Control type="text" className="form-control"
                          placeholder="Search for..." />
                      </div>
                      <span className="col-auto">
                        <Button variant='primary'><i
                          className="fe fe-search"></i></Button>
                      </span>
                    </div>
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>ZIP Code</Form.Label>
                    <div className="row gutters-sm">
                      <div className="col">
                        <Form.Control type="text" className="form-control"
                          placeholder="Search for..." />
                      </div>
                      <span className="col-auto align-self-center">
                        <span className="form-help my-2" data-bs-toggle="popover"
                          data-bs-placement="top" data-bs-content="<p>ZIP Code must be US or CDN format. You can use an extended ZIP+4 code to determine address more accurately.</p>
                                <p className='mb-0'><Link to=''>USP ZIP codes lookup tools</Link></p>
                                " data-bs-original-title="" title="">?</span>
                      </span>
                    </div>
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label className="form-label my-3">Bootstrap's Custom File Input</Form.Label>

                    <Form.Control type="file"
                      className="border-right-0 browse-file" placeholder="Upload Images" readOnly />
                  </Form.Group>
                  <Form.Group className=" m-0 form-group">
                    <Form.Label>Date of birth</Form.Label>
                    <div className="row gutters-xs">
                      <div className="col-sm-5 m-1">
                        <Select options={Options} classNamePrefix='Select2' className="multi-select" placeholder="" defaultValue={Options[5]} />

                      </div>
                      <div className="col-sm-3 m-1">
                        <Daydata />
                      </div>
                      <div className="col-sm-4 m-1">
                        <Yeardata />
                      </div>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Switch & Colors</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group className='form-group'>
                <div>Toggle switch single</div>
                <Form.Label className="custom-switch ">
                  <Form.Check type="switch" id="custom-switch" className="custom-switch-description ms-2" label="I agree with terms and conditions" />
                </Form.Label>
              </Form.Group>
              <Form.Group className='form-group'>
                <div>Toggle switch single checked</div>
                <Form.Label className="custom-switch">
                  <Form.Check type="switch" id="custom-switch" defaultChecked className="custom-switch-description ms-2" label="I agree with terms and conditions" />
                </Form.Label>

              </Form.Group>
              <Form.Group className='form-group' >
                <Form.Label>Your skills</Form.Label>
                <div className="selectgroup selectgroup-pills">
                  <Form.Label className="selectgroup-item">
                    <Form.Control type="checkbox" name="defaultValue" defaultValue="HTML"
                      className="selectgroup-input" defaultChecked="" />
                    <span className="selectgroup-button">HTML</span>
                  </Form.Label>
                  <Form.Label className="selectgroup-item">
                    <Form.Control type="checkbox" name="defaultValue" defaultValue="CSS"
                      className="selectgroup-input" />
                    <span className="selectgroup-button">CSS</span>
                  </Form.Label>
                  <Form.Label className="selectgroup-item">
                    <Form.Control type="checkbox" name="defaultValue" defaultValue="PHP"
                      className="selectgroup-input" />
                    <span className="selectgroup-button">PHP</span>
                  </Form.Label>
                  <Form.Label className="selectgroup-item">
                    <Form.Control type="checkbox" name="defaultValue" defaultValue="JavaScript"
                      className="selectgroup-input" />
                    <span className="selectgroup-button">JavaScript</span>
                  </Form.Label>
                  <Form.Label className="selectgroup-item">
                    <Form.Control type="checkbox" name="defaultValue" defaultValue="Angular"
                      className="selectgroup-input" />
                    <span className="selectgroup-button">Angular</span>
                  </Form.Label>
                  <Form.Label className="selectgroup-item">
                    <Form.Control type="checkbox" name="defaultValue" defaultValue="Java"
                      className="selectgroup-input" />
                    <span className="selectgroup-button">Java</span>
                  </Form.Label>
                  <Form.Label className="selectgroup-item">
                    <Form.Control type="checkbox" name="defaultValue" defaultValue="C++"
                      className="selectgroup-input" />
                    <span className="selectgroup-button">C++</span>
                  </Form.Label>
                </div>
              </Form.Group>
              <Form.Group className="form-group m-0">
                <Form.Label>Select Color</Form.Label>
                <div className="row gutters-xs">
                  <div className="col-auto">
                    <Form.Label className="colorinput">
                      <Form.Control name="color" type="checkbox" defaultValue="azure"
                        className="colorinput-input" defaultChecked />
                      <span className="colorinput-color bg-azure"></span>
                    </Form.Label>
                  </div>
                  <div className="col-auto">
                    <Form.Label className="colorinput">
                      <Form.Control name="color" type="checkbox" defaultValue="indigo"
                        className="colorinput-input" />
                      <span className="colorinput-color bg-indigo"></span>
                    </Form.Label>
                  </div>
                  <div className="col-auto">
                    <Form.Label className="colorinput">
                      <Form.Control name="color" type="checkbox" defaultValue="purple"
                        className="colorinput-input" />
                      <span className="colorinput-color bg-purple"></span>
                    </Form.Label>
                  </div>
                  <div className="col-auto">
                    <Form.Label className="colorinput">
                      <Form.Control name="color" type="checkbox" defaultValue="pink"
                        className="colorinput-input" />
                      <span className="colorinput-color bg-pink"></span>
                    </Form.Label>
                  </div>
                  <div className="col-auto">
                    <Form.Label className="colorinput">
                      <Form.Control name="color" type="checkbox" defaultValue="red"
                        className="colorinput-input" />
                      <span className="colorinput-color bg-red"></span>
                    </Form.Label>
                  </div>
                  <div className="col-auto">
                    <Form.Label className="colorinput">
                      <Form.Control name="color" type="checkbox" defaultValue="orange"
                        className="colorinput-input" />
                      <span className="colorinput-color bg-orange"></span>
                    </Form.Label>
                  </div>
                  <div className="col-auto">
                    <Form.Label className="colorinput">
                      <Form.Control name="color" type="checkbox" defaultValue="yellow"
                        className="colorinput-input" />
                      <span className="colorinput-color bg-yellow"></span>
                    </Form.Label>
                  </div>
                  <div className="col-auto">
                    <Form.Label className="colorinput">
                      <Form.Control name="color" type="checkbox" defaultValue="lime"
                        className="colorinput-input" />
                      <span className="colorinput-color bg-lime"></span>
                    </Form.Label>
                  </div>
                  <div className="col-auto">
                    <Form.Label className="colorinput">
                      <Form.Control name="color" type="checkbox" defaultValue="green"
                        className="colorinput-input" />
                      <span className="colorinput-color bg-green"></span>
                    </Form.Label>
                  </div>
                  <div className="col-auto">
                    <Form.Label className="colorinput">
                      <Form.Control name="color" type="checkbox" defaultValue="teal"
                        className="colorinput-input" />
                      <span className="colorinput-color bg-teal"></span>
                    </Form.Label>
                  </div>
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Radios & Checkboxes</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group className="form-group form-elements">
                <div className='form-label'>Radios</div>
                <div className="custom-controls-stacked">
                  <Form.Check type="radio" name="example-radios" label="Option 1" defaultChecked />
                  <Form.Check type="radio" name="example-radios" label="Option 2" />
                  <Form.Check type="radio" label="Option Disabled" disabled />
                  <Form.Check type="radio" label="Option Disabled checked" disabled defaultChecked />
                </div>
              </Form.Group>

              <Form.Group className="form-group form-elements m-0">
                <div className='form-label'>Checkboxes</div>
                <div className="custom-controls-stacked">
                  <Form.Check type="checkbox" label="Option 1" defaultChecked />
                  <Form.Check type="checkbox" label="Option 2" />
                  <Form.Check type="checkbox" label="Option Disabled" disabled />
                  <Form.Check type="checkbox" label="Option Disabled checked" disabled defaultChecked />
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col md={12}>
          <Card>
            <Card.Header>
              <Card.Title>Multiple Select Styles</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <Form.Group className='form-group'>
                    <Form.Label>Basic MutipleSelect</Form.Label>
                    <MultiSelect
                      options={Options}
                      value={selected}
                      onChange={setSelected}
                      labelledBy="Select"
                    />
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>Disabled MutipleSelect</Form.Label>
                    <Select options={Options} classNamePrefix='Select2' className="multi-select"
                      placeholder='' isDisabled />
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>Single Group Disabled MutipleSelect</Form.Label>
                    <SingleGroup />
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>Multiple Items With Group-Option</Form.Label>
                    <MultipleGroup />
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>Single Row</Form.Label>
                    <MultiSelect options={Singlerow} value={selected} onChange={setSelected} labelledBy="Select" />
                  </Form.Group>
                  <Form.Group className="form-group mb-0">
                    <Form.Label>Group-Option Filter</Form.Label>
                    <MultiSelect options={groupfilter} value={selected4} onChange={setSelected4} labelledBy="1" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className='form-group'>
                    <Form.Label>MutipleSelect</Form.Label>
                    <GroupFilterOption />
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>Group-Option MutipleSelect</Form.Label>
                    <Groupoption />
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>Multiple Items</Form.Label>
                    <Multiple />
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>Hide SelectAll</Form.Label>
                    <MultiSelect options={Hide} value={selected2} onChange={setSelected2} labelledBy="1" />
                  </Form.Group>
                  <Form.Group className='form-group'>
                    <Form.Label>Select Filter</Form.Label>
                    <MultiSelect options={multiDisable} value={selected3} onChange={setSelected3} labelledBy="1" />
                  </Form.Group>
                  <Form.Group className="form-group mb-0">
                    <Form.Label>Custom Style</Form.Label>
                    <CustomisedSelector />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>



      <Row>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Switches </Card.Title>
            </Card.Header>
            <Card.Body>
              <ul className="list-group">
                <li className="list-group-item">
                  Bootstrap Switch Default
                  <div className="material-switch pull-right mt-2">
                    <Form.Control id="someSwitchOptionDefault" name="someSwitchOption001"
                      type="checkbox" />
                    <Form.Label htmlFor="someSwitchOptionDefault" className="label-default"></Form.Label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Primary
                  <div className="material-switch pull-right mt-2">
                    <Form.Control id="someSwitchOptionPrimary" name="someSwitchOption001"
                      type="checkbox" />
                    <Form.Label htmlFor="someSwitchOptionPrimary" className="label-primary"></Form.Label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Success
                  <div className="material-switch pull-right mt-2" >
                    <Form.Control id="someSwitchOptionSuccess" name="someSwitchOption001"
                      type="checkbox" />
                    <Form.Label htmlFor="someSwitchOptionSuccess" className="label-success"></Form.Label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Info
                  <div className="material-switch pull-right mt-2">
                    <Form.Control id="someSwitchOptionInfo" name="someSwitchOption001"
                      type="checkbox" />
                    <Form.Label htmlFor="someSwitchOptionInfo" className="label-info"></Form.Label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Warning
                  <div className="material-switch pull-right mt-2">
                    <Form.Control id="someSwitchOptionWarning" name="someSwitchOption001"
                      type="checkbox" />
                    <Form.Label htmlFor="someSwitchOptionWarning" className="label-warning"></Form.Label>
                  </div>
                </li>
                <li className="list-group-item">
                  Bootstrap Switch Danger
                  <div className="material-switch pull-right mt-2">
                    <Form.Control id="someSwitchOptionDanger" name="someSwitchOption001"
                      type="checkbox" />
                    <Form.Label htmlFor="someSwitchOptionDanger" className="label-danger"></Form.Label>
                  </div>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <form method="post" className="card">
            <Card.Header>
              <Card.Title>Select2 elements</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className='form-group'>
                <Form.Label>Beast</Form.Label>
                <Select options={Basic} placeholder='choose one' classNamePrefix='Select2'
                />
              </div>
              <Form.Group className='form-group'>
                <Form.Label>Basic Select2</Form.Label>
                <Select options={groupedOptions} classNamePrefix='Select2'
                />
              </Form.Group>
              <Form.Group className='form-group'>
                <Form.Label> Select2 with search box</Form.Label>
                <Select
                  className="basic-single"
                  classNamePrefix="Select2"
                  defaultValue={Data[0]}
                  name="color"
                  options={Data}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Users list</Form.Label>
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  defaultValue={2}
                  isMulti
                  options={option}
                  classNamePrefix="Select2"
                />
              </Form.Group>
            </Card.Body>
          </form>
        </Col>

        <Col xxl={3} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Basic Date picker
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <InputGroup className="input-group">
                  <BasicDatePicker />
                </InputGroup>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Date picker With Time
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <div className="input-group">

                  <TextField id="datetime-local" type="datetime-local" defaultValue="2020-01-16T14:22" />
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Human Friendly dates
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <div className="input-group">
                  <div>
                    <HumanFriendlydates />
                  </div>
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Date range picker
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <div className="input-group">
                  <div>
                    <DaterangePicker />
                  </div>
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>



        <Col xxl={3} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Basic Time picker
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <InputGroup className="input-group">

                  <BasicTimePicker />
                </InputGroup>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Time Pickr with 24hr Format
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <div className="input-group">
                  <div className="input-group-text">
                    <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                  </div>
                  <CustomTimeFormat />
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                Time Picker with Limits
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <div className="input-group time-limit">
                  <div className="input-group-text">
                    <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                  </div>

                  <div>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                    />
                  </div>
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3} xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>
                DateTimePicker with Limited Time Range
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <Form.Group>
                <div className="input-group">
                  <div className="input-group-text">
                    <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                  </div>
                  <DateTimePickerOpenTo />
                </div>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={12} xs={12} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title>
                Color Picker
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="container  p-0 p-md-5">
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="theme-container">
                      <Button variant="">Clasic</Button>
                    </div>
                    <div className="pickr-container ms-3 mt-3"><div className="color-picker" ref={classicPicker}></div></div>
                  </div>
                  <div>
                    <div className="theme-container1">
                      <Button variant="">Monolith</Button>
                    </div>
                    <div className="pickr-container1 ms-3 mt-3 ">
                      <div className="color-picker" ref={monolithPicker}></div>
                    </div>
                  </div>
                  <div>
                    <div className="theme-container2">
                      <Button variant="">nano</Button>
                    </div>
                    <div className="pickr-container2 ms-3 mt-3">
                      <div className="color-picker" ref={colorPicker}></div>
                    </div>

                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

      </Row>



    </Fragment>
  )
}
