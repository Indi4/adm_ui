import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import Select from 'react-select'
import SunEditor from 'suneditor-react'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import 'filepond/dist/filepond.min.css'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const Options = [
  { value: 'Electronics', label: 'Electronics' },
  { value: 'Fashion', label: 'Fashion' },
  { value: 'Home Decor', label: 'Home Decor' },
  { value: 'Furniture', label: 'Furniture' }
]
export default function AddProduct() {
  const breadcrumbs = ["Ecommerce", "Add Product"];
  // sun editor
  const htmlWithTableImages = '<center>  </center>'
  const [files, setFiles] = useState([])

  return (
    <Fragment>



      <Pageheader items={breadcrumbs} />

      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="card-header border-bottom">
              <Card.Title>Add New Product</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row className="mb-4">
                <label className="col-md-3 form-label">Product Name :</label>
                <Col md={9} >
                  <input type="text" className="form-control" placeholder="Product Name" />
                </Col>
              </Row>
              <div className="row mb-4">
                <label className="col-md-3 form-label">Price :</label>
                <Col md={9}>
                  <input type="number" className="form-control" />
                </Col>
              </div>
              <div className="row mb-4">
                <label className="col-md-3 form-label">Categories :</label>
                <Col md={9}>

                  <Select classNamePrefix="Select2" options={Options} className="multi-select" 
                    defaultValue={Options[0]} />
                </Col>
              </div>
              <Row>
                <label className="col-md-3 form-label mb-4">Product Description :</label>
                <Col md={9} className="mb-4">

                  <SunEditor />
                </Col>
              </Row>

              <Row>
                <label className="col-md-3 form-label mb-4">Product Upload :</label>
                <Col md={9}>

                  <FilePond
                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    maxFiles={3}
                    server="/api"
                    name="files" /* sets the file input name, it's filepond by default */
                    labelIdle='Drag & Drop your file here or click '
                  />
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col md={3}></Col>
                <Col md={9}>
                  <Button variant='primary' to="#" className="btn btn-primary me-1">Add Product</Button>
                  <Button variant='light' to="#" className="btn btn-light float-end">Discard</Button>
                </Col>
              </Row>

            </Card.Footer>
          </Card>
        </Col>
      </Row>



    </Fragment>
  )
}
