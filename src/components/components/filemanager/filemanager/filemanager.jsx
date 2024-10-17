import React, { Fragment, useCallback, useState } from 'react'
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, ProgressBar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../../common/commomimages/imagedata'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import { Defaultdata, Storagedata } from './data/filemanagerdata'

import { FilePond, registerPlugin } from 'react-filepond'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default function Filemanager() {
  const breadcrumbs = ["Components", "Filemanager", "Filemanager"];

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [files, setFiles] = useState([])
  const handleAdd = (newFiles) => {
    newFiles = newFiles.filter(
      (file) => !files.find((f) => f.data === file.data)
    )
    setFiles([...files, ...newFiles])
  }
  const handleDelete = (deleted) => {
    setFiles(files.filter((f) => f !== deleted))
  }


  //  Search

  const [allData, setAllData] = useState(Storagedata);

  let filemanagerdata = [];

  let myfunction = (idx) => {
    let Data
    for (Data of Storagedata) {
      if (Data.title[0] == " ") {
        Data.title = Data.title.trim()
      }
      if (Data.title.toLowerCase().includes(idx.toLowerCase())) {
        if (Data.title.toLowerCase().startsWith(idx.toLowerCase())) {
          filemanagerdata.push(Data);
        }
      }

    }
    setAllData(filemanagerdata);
  };
  return (
    <Fragment>



      <Pageheader items={breadcrumbs} />

  
      <Row>
        <Col lg={4} xl={3} className="col-lg-4 col-xl-3">
          <Card className="mb-4">
            <Card.Header className="border-bottom">
              <Link className="btn btn-outline-primary br-7 btn-block py-1" id="btnCompose" onClick={handleShow}
                data-bs-target="#Vertically" data-bs-toggle="modal" to="#"><i
                  className="fa fa-plus me-2"></i>Upload Files</Link>
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
                {Defaultdata.map((idx, f1) => (
                  <li className="nav-item1" key={f1}>
                    <Link className="nav-link thumb" to="#">
                      <span className="me-2"><i className={` align-middle ri-${idx.icon}-line `}></i></span>
                      <span>{idx.title}</span>
                    </Link>
                  </li>
                ))}

              </ul>
              <Card className="card my-1 custom-card mt-0 p-2 pb-0 mb-0 shadow-none">
                <Card.Header className="card-header font-weight-bold px-3 pb-2 border-bottom-0">
                  <span className="me-2"><i className="ri-folder-5-line align-middle"></i></span>
                  <span>Storage</span>
                </Card.Header>
                <Card.Body className="card-body pt-0 pb-0 px-3">
                  <div className="storage-percent">
                    <ProgressBar className="progress fileprogress h-auto ps-0 mb-2">
                      <ProgressBar className="progress-bar progress-bar-xs wd-15p"
                        role="progressbar" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100"></ProgressBar>
                    </ProgressBar>
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
                    <path fill="#67a719"
                      d="M19.97586,10V9a3,3,0,0,0-3-3H10.69678l-.31622-.94868A3,3,0,0,0,7.53451,3H3.97586a3,3,0,0,0-3,3V19a2,2,0,0,0,2,2H3.3067a2,2,0,0,0,1.96774-1.64223l1.40283-7.71554A2,2,0,0,1,8.645,10Z" />
                    <path fill="#a3ca75"
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

          <Row className=" mb-3">
            <InputGroup className="input-group ms-auto mb-2">
              <Form.Control type="text" className="form-control br-7"
                placeholder="Search in file manager....." onChange={(ele) => { myfunction(ele.target.value) }} />
              <Button className="btn btn-primary border-0 text-white"
                type="button">Search</Button>
            </InputGroup>
          </Row>
          <Row>
            {allData.map((idx, str) => (
              <Col xxl={2} xl={3} md={4} sm={6} key={str}>
                <Card className="p-0 ">
                  <div className="d-flex align-items-center px-3 pt-3">
                    <label className="custom-control custom-checkbox mb-0">
                      <input type="checkbox" className="custom-control-input"
                        name="example-checkbox2" value="option2" />
                      <span className="custom-control-label"></span>
                    </label>
                    <Dropdown className="float-end ms-auto">
                      <Dropdown.Toggle as='a' variant='light' className="no-caret option-dots text-dark" data-bs-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false"><i
                          className="fe fe-more-vertical text-dark"></i></Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown-menu-start folder-options">
                        <Dropdown.Item className="dropdown-item" href="#"><i
                          className="fe fe-edit me-2"></i>
                          {idx.dpitem1}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#"><i
                          className="fe fe-share me-2"></i>
                          {idx.dpitem2}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#"><i
                          className="fe fe-download me-2"></i> {idx.dpitem3}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#"><i
                          className="fe fe-info me-3"></i>
                          {idx.dpitem4}</Dropdown.Item>
                        <Dropdown.Item className="dropdown-item" href="#"><i
                          className="fe fe-trash me-2"></i>
                          {idx.dpitem5}</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <Card.Body className="pt-0 text-center">
                    <div className="file-manger-icon">
                      <Link to={`${import.meta.env.BASE_URL}components/filemanager/filedetails`}>
                        <img src={idx.src} alt="img"
                          className="br-7" />
                      </Link>
                    </div>
                    <h6 className="mb-1 font-weight-semibold">{idx.title}</h6>
                    <span className="text-muted fs-11">{idx.text}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}

          </Row>
        </Col>
      </Row>
   


    </Fragment>
  )
}
