import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { List1, Recenttable, Svgdata } from './data/listdata'
import { FilePond, registerPlugin } from 'react-filepond'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
export default function FilemanagerList () {
  const breadcrumbs = ["Components", "Filemanager", "Filemanager List"];
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [files, setFiles] = useState([])



    //  Search

    const [allData, setAllData] = useState(Svgdata);

    let filemanagerlistdata = [];
  
    let myfunction = (idx) => {
      let Data
      for (Data of Svgdata) {
        if (Data.title[0] == " ") {
          Data.title = Data.title.trim()
        }
        if (Data.title.toLowerCase().includes(idx.toLowerCase())) {
          if (Data.title.toLowerCase().startsWith(idx.toLowerCase())) {
            filemanagerlistdata.push(Data);
          }
        }
  
      }
      setAllData(filemanagerlistdata);
    };
  return (
    <Fragment>



          <Pageheader items={breadcrumbs} />
       
            <Row>
              <Col lg={4} xl={3}>
                <Card className="mb-4">
                  <Card.Header className="border-bottom">
                    <Link className="btn btn-outline-primary btn-block py-2" id="btnCompose" data-bs-target="#Vertically" data-bs-toggle="modal" to="#" onClick={handleShow}>
                      <i className="fa fa-plus me-2"></i>Upload Files</Link>
                      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add file</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                   <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}
        server="/api"
        name="files" /* sets the file input name, it's filepond by default */
        labelIdle='Drag & Drop your file here or click '
      />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
          <Button variant="secondary" onClick={handleClose}>
          Cancel
          </Button>
        </Modal.Footer>
      </Modal>
                  </Card.Header>
                  <Card.Body>
                    <ul className="nav1 nav-column flex-column br-7">
                      {List1.map((idx, lt1) => (
                      <li className="nav-item1 mt-0" key={lt1}>
                        <Link className={`nav-link thumb ${idx.active}`} to="#">
                          <span className="me-2"><i className={`align-middle ri-${idx.icon}-line `}></i></span>
                          <span>{idx.title}</span>
                        </Link>
                      </li>
                      ))}

                    </ul>
                    <Card className="custom-card mt-2 p-2 pb-0 mb-0 shadow-none storage-card">
                      <Card.Header className="px-3 pb-2 border-bottom-0">
                        <span className="me-2"><i className="ri-stack-line align-middle"></i></span>
                        <span>Storage</span>
                      </Card.Header>
                      <Card.Body className="pt-0 pb-0 px-3">
                        <div className="storage-percent">
                          <div className="progress fileprogress h-auto ps-0 mb-2">
                            <div className="progress-bar progress-bar-xs wd-15p"
                              role="progressbar" aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                          <div className="text-muted font-weight-semibold tx-13 mb-1">26.24 GB
                            Used of
                            128GB</div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body className="br-7 upgrade-storage bg-primary-transparent">
                    <Link to="#">
                      <div className="upgrade-main text-center">
                        <svg className="mb-1" xmlns="http://www.w3.org/2000/svg"
                          style={{ width: '3rem' }} data-name="Layer 1" viewBox="0 0 24 24">
                          <path fill="#467fcf"
                            d="M19.97586,10V9a3,3,0,0,0-3-3H10.69678l-.31622-.94868A3,3,0,0,0,7.53451,3H3.97586a3,3,0,0,0-3,3V19a2,2,0,0,0,2,2H3.3067a2,2,0,0,0,1.96774-1.64223l1.40283-7.71554A2,2,0,0,1,8.645,10Z" />
                          <path fill="#6d99d6"
                            d="M22.02386,10H8.645a2,2,0,0,0-1.96777,1.64221L5.27441,19.35773A2,2,0,0,1,3.3067,21H19.55292a2,2,0,0,0,1.96771-1.64227l1.48712-8.17884A1,1,0,0,0,22.02386,10Z" />
                        </svg>
                        <h4 className="mb-1">Upgrade Storage</h4>
                        <span className="text-primary-lit mt-1">Extra 10GB Storage and
                          More...</span>
                      </div>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={8} xl={9}>
                <Row className="mb-2">
                  <Col xl={6} md={6} sm={12}>
                    <div className="tx-18 mb-0 mt-2">
                      Files
                    </div>
                  </Col>
                  <Col xl={6} md={6} sm={12} className="col-auto">
                    <InputGroup className="input-group mb-2">
                      <Form.Control type="text" className="form-control"
                        placeholder="Search in file manager....." onChange={(ele) => { myfunction(ele.target.value) }}  />
                      <InputGroup.Text className="btn ripple btn-primary input-group-text text-white border-0"
                        type="button">Search</InputGroup.Text>
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  {allData.map((idx, lt2) => (
                  <Col xl={3} md={6} sm={12} key={lt2}>
                    <Card>
                      <Link to={`${import.meta.env.BASE_URL}components/filemanager/filedetails`}>
                        <Card.Body>
                          <div className="file-type my-1">
                           
                            {idx.icon}
                         {idx.title}
                            <div className="float-end tx-13 text-muted">{idx.text}</div>
                          </div>
                        </Card.Body>
                      </Link>
                    </Card>
                  </Col>
                  ))}
                 
                </Row>
                <Row>
                  <Col xl={12}>
                    <Card>
                      <Card.Header className="border-bottom">
                        <p className="mb-0">Recent Files</p>
                      </Card.Header>
                      <Card.Body>
                        <div className="table-responsive">
                          <Table
                            className="table  border text-nowrap text-md-nowrap recent-files-container">
                            <thead>
                              <tr className="row-first">
                                <th className="fw-semibold text-dark">File Name</th>
                                <th className="fw-semibold text-dark">Date Modified</th>
                                <th className="fw-semibold text-dark">Type</th>
                                <th className="fw-semibold text-dark">Size</th>
                                <th className="fw-semibold text-dark"></th>
                              </tr>
                            </thead>
                            <tbody className="tabel-border text-dark">
                              {Recenttable.map((idx, lt3) => (
                              <tr key={lt3}>
                                <td>
                                  <div className="recent-files">
                                   
                                    {idx.icon}
                                    <span className="mb-1 font-weight-semibold">{idx.name}</span>
                                  </div>
                                </td>
                                <td>
                                  <span className="text-muted modified-date">{idx.date}</span>
                                </td>
                                <td>
                                  <span>{idx.type}</span>
                                </td>
                                <td>
                                  <span className="text-muted file-size">{idx.size}</span>
                                </td>
                                <td>
                                  <Dropdown className="float-end ms-auto">
                                    <Dropdown.Toggle to="#" as='a' className="no-caret option-dots text-dark" variant='light'
                                      data-bs-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"><i
                                        className="fe fe-more-vertical text-dark"></i></Dropdown.Toggle>
                                    <Dropdown.Menu
                                      className="dropdown-menu dropdown-menu-start recent-files-options">
                                      <Dropdown.Item className="dropdown-item" href="#"><i
                                        className="fe fe-edit me-2"></i>
                                        {idx.dpitem1}</Dropdown.Item>
                                      <Dropdown.Item className="dropdown-item" href="#"><i
                                        className="fe fe-share me-2"></i>
                                        {idx.dpitem2}</Dropdown.Item>
                                      <Dropdown.Item className="dropdown-item" href="#"><i
                                        className="fe fe-download me-2"></i>
                                        {idx.dpitem3}</Dropdown.Item>
                                      <Dropdown.Item className="dropdown-item" href="#"><i
                                        className="fe fe-info me-2"></i>
                                        {idx.dpitem4}</Dropdown.Item>
                                      <Dropdown.Item className="dropdown-item" href="#"><i
                                        className="fe fe-trash me-2"></i>
                                        {idx.dpitem5}</Dropdown.Item>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </td>
                              </tr>
                              ))}
                              
                            </tbody>
                          </Table>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
      


    </Fragment>
  )
}
