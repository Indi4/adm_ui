import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, OverlayTrigger, PageItem, Pagination, ProgressBar, Row, Table, Tooltip } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { userData } from './data/userdata'
import Select from 'react-select'

export default function Userlist() {
  const breadcrumbs = ["Apps", "User List"];
  // for User search function

  const [allData, setAllData] = useState(userData);

  let userdata = [];

  let myfunction = (idx) => {
    let Data
    for (Data of userData) {
      if (Data.name[0] == " ") {
        Data.name = Data.name.trim()
      }
      if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
        if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
          userdata.push(Data);
        }
      }

    }
    setAllData(userdata);
  };

  // Delete function

  function handleRemove(id) {
    const RemoveData = allData.filter((idx) => idx.id !== id)
    setAllData(RemoveData)
  }
  const Option4 = [
    { value: 'Latest', label: 'Latest' },
    { value: 'Oldest', label: 'Oldest' },


  ]
  return (
    <Fragment>


      <Pageheader items={breadcrumbs} />

      <Row>
        <Col lg={12}>
          <InputGroup className="input-group mb-5 float-end">
            <Form.Control type="text" className="form-control" placeholder="Search here..." onChange={(ele) => { myfunction(ele.target.value) }} />
            <Button type="button" className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </Button>
          </InputGroup>
          <Card className="e-panel">
            <Card.Header>
              <Card.Title>1 - 30 of 546 users</Card.Title>
              <div className="page-options">
                <Select options={Option4} className="multi-select" classNamePrefix='Select2' placeholder="" defaultValue={Option4[0]} /> 
                </div>
            </Card.Header>
            <Card.Body>
              <div className="e-table">
                <div className='table-responsive'>
                  <Table className="table table-bordered text-dark">
                    <thead>
                      <tr>
                        <th className="text-center text-dark fw-semibold">
                          All
                        </th>
                        <th className="text-dark fw-semibold w-25">Person</th>
                        <th className="text-dark fw-semibold">Date</th>
                        <th className="text-dark fw-semibold">Progress</th>
                        <th className="text-center fw-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allData.map((idx, us1) => (
                        <tr key={us1}>
                          <td className="align-middle text-center">
                            <Form.Check type="checkbox" label="" className="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top" /> </td>
                          <td>
                            <div className='d-flex'>
                              <span className="avatar avatar-md"><img alt="image"
                                className="avatar avatar-md rounded-circle"
                                src={idx.src} /></span>

                              <div className="flex-1 my-auto">
                                <h6 className="mb-0 fw-semibold  mx-2">{idx.name}</h6>
                              </div>
                            </div>
                          </td>
                          <td className="text-nowrap align-middle"><span>{idx.date}</span>
                          </td>

                          <td className="text-nowrap align-middle">

                            <ProgressBar className="progress progress-xs mb-0 mt-3" animated now={idx.width} variant={idx.class} />
                          </td>

                          <td className="text-center align-middle">
                            <div className="btn-group align-top br-7">
                              <OverlayTrigger placement="top" overlay={<Tooltip>Edit </Tooltip>}>
                                <Button className="btn btn-sm text-white badge" variant='primary'
                                  type="button"> Edit</Button>
                              </OverlayTrigger>
                              <OverlayTrigger placement="top" overlay={<Tooltip>Delete </Tooltip>}>
                                <Button className="btn btn-sm btn-primary badge" onClick={() => { handleRemove(idx.id) }}
                                  type="button"><i
                                    className="fa fa-trash"></i></Button>
                              </OverlayTrigger>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
                <div className="float-end">
                  <Pagination className="pagination mt-3 mb-0">
                    <Pagination.Prev disabled href="#" tabIndex="-1" />
                    <Pagination.Item href="#" active>1</Pagination.Item>
                    <Pagination.Item href="#" >2</Pagination.Item>
                    <Pagination.Item href="#">3</Pagination.Item>
                    <Pagination.Item href="#">4</Pagination.Item>
                    <Pagination.Next href="#" />
                    <Pagination.Last href="#" />
                  </Pagination>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      


    </Fragment>
  )
}
