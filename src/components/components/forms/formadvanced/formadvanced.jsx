import React, { Fragment, useState } from 'react'
import { Card, Col, Form, FormGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { FilePond, registerPlugin } from 'react-filepond'
import Select from 'react-select'
import { MultiSelect } from 'react-multi-select-component'
import { Uploader } from 'uploader'
import { UploadButton } from 'react-uploader'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
import { Data, Default, groupedOptions, multiDisable } from './data/advanceddata'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default function FormAdvanced () {
  const breadcrumbs = ["Components", "Forms", "Form Advanced"];
  const [files, setFiles] = useState([])
  const [files1, setFiles1] = useState([])
  const [files2, setFiles2] = useState([])
  const [selected2, setSelected2] = useState([])
  const [selected3, setSelected3] = useState([])
  const [selected4, setSelected4] = useState([])
  const [selected5, setSelected5] = useState([])
  const uploader = Uploader({
    // Get production API keys from Upload.io
    apiKey: 'free'
  })
  return (
    <Fragment>



          <Pageheader items={breadcrumbs} />
        
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Dropdowns Select</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="">

                      <Form.Group className='form-group'>
                        <Form.Label htmlFor="default-dropdown">Default Select</Form.Label>
                       
                         <Select
                  options={Default}
                  placeholder='choose one'
                  classNamePrefix='Select2'
                />
                      </Form.Group>
                      <div className='form-group'>
                        <label>Basic Select2</label>
                       
                         <Select
                  options={groupedOptions}
                  classNamePrefix='Select2'
                />
                      </div>
                      <div className='form-group'>
                        <label>Select2 With Search</label>
                    
                         <MultiSelect options={multiDisable} value={selected2} onChange={setSelected2} labelledBy="1" classNamePrefix="Select2" />
                      </div>
                      <div className='form-group'>
                        <label>Multiple Select</label>
                        <Select isMulti name="colors" options={multiDisable} className="basic-multi-select"
                  classNamePrefix="Select2"
                  />
                      </div>
                      <div className='form-group'>
                        <Form.Label>Select2 Disabled</Form.Label>
                        <Select options={multiDisable} className="multi-select" classNamePrefix="Select2"
                             placeholder='Choose one' isDisabled />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Select2 Dropdown Styles</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="">
                      <Row>
                        <Col sm={12}>
                          <div className='form-group'>
                            <label>Select2 Style-01: </label>
                            <ul>
                              <li className="select-client">
                               <MultiSelect options={Data} value={selected3} onChange={setSelected3} labelledBy="1" />
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col sm={12}>
                          <div className='form-group'>
                            <label>Multiple Select: </label>
                            <ul>
                              <li className="select-client">
                                 <MultiSelect options={Data} value={selected4} onChange={setSelected4} labelledBy="1" />
                              </li>
                            </ul>
                          </div>
                        </Col>
                        <Col sm={12}>
                          <div className='form-group'>
                            <label>Select2 With Result: </label>
                            <ul>
                              <li className="select-client">
                                 <MultiSelect options={Data} value={selected5} onChange={setSelected5} labelledBy="1" />
                              </li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Bootstrap Maxlength</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <p className="card-sub-title text-muted">Bootstrap-Maxlength uses a Twitter
                      Bootstrap
                      label to show a visual feedback to the user about the maximum length of the
                      field where the user is inserting text. Uses the HTML5 attribute <code
                        className="highlighter-rouge">maxlength</code> to work.</p>
                    <div className="">
                      <Form className="form-horizontal">
                        <Form.Group className='mb-4'>
                          <Form.Label htmlFor="defaultconfig">Default Usuage</Form.Label>
                          <Form.Control type="text" maxLength="25"
                            id="defaultconfig" />
                        </Form.Group>
                        <Form.Group className='mb-4'>
                          <Form.Label htmlFor="thresholdConfig">Threshold
                            Value</Form.Label>
                          <Form.Control type="text" maxLength="25"
                            id="thresholdConfig" />
                        </Form.Group>
                        <Form.Group className='mb-4'>
                          <Form.Label htmlFor="alloptions">All the options</Form.Label>
                          <Form.Control type="text" maxLength="25"
                            id="alloptions" />
                        </Form.Group>
                        <Row>
                          <Col md={12} xl={3}>
                            <Form.Group className='mb-4'>
                              <Form.Label htmlFor="place-top-left">Top
                                Left</Form.Label>
                              <Form.Control type="text" maxLength="25"
                                id="place-top-left" />
                            </Form.Group>
                          </Col>
                          <Col md={12} xl={3}>
                            <Form.Group>
                              <Form.Label htmlFor="place-top-right">Top
                                Right</Form.Label>
                              <Form.Control type="text" maxLength="25"
                                id="place-top-right" />
                            </Form.Group>
                          </Col>
                          <Col md={12} xl={3}>
                            <Form.Group className='mb-4'>
                              <Form.Label htmlFor="place-bottom-left">Bottom
                                Left</Form.Label>
                              <Form.Control type="text" maxLength="25"
                                id="place-bottom-left" />
                            </Form.Group>
                          </Col>
                          <Col md={12} xl={3}>
                            <Form.Group className='mb-4'>
                              <Form.Label htmlFor="place-bottom-right">Bottom
                                Right</Form.Label>
                              <Form.Control type="text" maxLength="25"
                                id="place-bottom-right" />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Form.Group className='mb-4'>
                          <Form.Label htmlFor="textarea">Textarea</Form.Label>
                          <Form.Control as='textarea' maxLength="225" id="textarea"
                            rows="3"></Form.Control>
                        </Form.Group>
                      </Form>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          
            <Row>
              <Col lg={12} md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>File Upload</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <p className="text-muted card-sub-title">Dropify is a jQuery plugin to create a
                      beautiful file uploader that converts a standard&nbsp;
                      <code>input type="file"</code>&nbsp;into a nice drag & drop zone with previews and custom styles.
                    </p>
                    <Row className="mb-4">
                      <Col sm={12} md={4} className="mb-4 mb-lg-0">
                              <UploadButton uploader={uploader} options={{ multi: true }}>
                 
                    {({ onClick }) =>
                      <Form.Control className='file_input text-center' onClick={onClick} placeholder='click here and upload attachment' />
                    }
                  </UploadButton>

                      </Col>
                      <Col sm={12} md={4} className=" mb-4 mb-lg-0">

                          <FilePond files={files}  onupdatefiles={setFiles} allowMultiple={true}   maxFiles={3} server="/api" name="files" /* sets the file input name, it's filepond by default */  labelIdle='Drag & Drop your file here or click '
                                 />
                      </Col>
                      <Col sm={12} md={4} className="mb-4 mb-lg-0">
                       
                        <FilePond disabled
                           files={files2}
                            onupdatefiles={setFiles2}
                            allowMultiple={true}
                            maxFiles={3}
                            server="/api"
                            name="files" /* sets the file input name, it's filepond by default */
                            labelIdle='Drag & Drop your file here or click '
                           />
                      </Col>
                    </Row>
                    <div>
                     
                        <FilePond
                             files={files1}
                               onupdatefiles={setFiles1}
                                allowMultiple={true}
                               maxFiles={3}
                               server="/api"
                              name="files" /* sets the file input name, it's filepond by default */
                               labelIdle='Drag & Drop your file here or click '
                             />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
           
         

    </Fragment>
  )
}
