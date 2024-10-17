import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Dropdown, DropdownButton, Form, InputGroup, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../common/commomimages/imagedata'
import Pageheader from '../../../layouts/pageheader/pageheader'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { ContactData } from './data/chatdata';

export default function Chat () {
  const breadcrumbs = ["Apps", "Chat"];

	const [allData, setAllData] = useState(ContactData);

	let chatData = [];

	let myfunction = (idx) => {
    let Data
		for (Data of ContactData) {
      if (Data.name[0] == " ") {
        Data.name = Data.name.trim()
			}
			if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
        if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
          chatData.push(Data);
				}
			}

		}
		setAllData(chatData);
	};


  return (
    <Fragment>



          <Pageheader items={breadcrumbs} />

            <Row>
              <Col md={12} lg={5} xl={4}>
                <Card className=" overflow-hidden">
                  <div className="main-chat-list">
                  <PerfectScrollbar className='h-100'>
                                   <Card.Header className=" p-3 border-bottom-0">
                      <InputGroup className="input-group">
                        <Form.Control type="text" placeholder="Search here..." onChange={(ele) => { myfunction(ele.target.value) }} />
                        <Button type="button" variant='primary' >
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </Button>
                      </InputGroup>
                    </Card.Header>
                    <div className="chat">
                      <ul className="contacts mb-0">
                        {allData.map((idx) => (
                        <li className="active" key={Math.random()}>
                          <div className="d-flex bd-highlight">
                            <div className="img_cont me-2">
                              <img src= {idx.src}
                                className="rounded-circle avatar avatar-lg" alt="img" />
                              <span className="online_icon"></span>
                            </div>
                            <div className="user_info">
                              <h6 className="mt-2 mb-0 fw-semibold">{idx.name}</h6>
                              <small className="text-muted">{idx.text}</small>
                            </div>
                            <div className="ms-auto my-auto">
                              <small>{idx.date}</small>
                            </div>
                          </div>
                        </li>
                        ))}
                     </ul>
                    </div>
                    </PerfectScrollbar>
                  </div>

                </Card>
              </Col>
              <Col md={12} lg={7} xl={8} className="chat">
                <Card className="card overflow-hidden">

                  <div className="action-header d-flex justify-content-between">
                    <div className="hidden-xs d-flex align-items-center ms-2">
                      <div className="img_cont me-3">
                        <img src={imagesData('female23')}
                          className="rounded-circle avatar avatar-lg" alt="img" />
                      </div>
                      <div className="mt-1">
                        <h4 className="text-white mb-0 fw-semibold">Jenna Side</h4>
                        <span className="dot-label bg-success"></span><span
                          className="me-3 text-white">online</span>
                      </div>
                    </div>
                    <ul className="ah-actions actions">
                      <li className="call-icon">
                        <OverlayTrigger placement="top" overlay={<Tooltip>call </Tooltip>}>
                            <Link to="#" className="d-done d-md-flex"> <i className="fe fe-phone"></i></Link>
                          </OverlayTrigger></li>
                      <li className="video-icon">
                        <OverlayTrigger placement="top" overlay={<Tooltip>video call </Tooltip>}><Link to="#" className="d-done d-md-flex">
                          <i className="fe fe-video"></i></Link>
                          </OverlayTrigger>
                      </li>
                      <Dropdown as="li">
                        <Dropdown.Toggle as='a' className='no-caret' variant=''>
                          <i className="fe fe-more-vertical"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                          <Dropdown.Item href="#"><i className="fe fe-user text-primary"></i> View profile</Dropdown.Item>
                          <Dropdown.Item href="#"><i className="fe fe-users text-info"></i> Add friends</Dropdown.Item>
                          <Dropdown.Item href="#"><i className="fe fe-plus text-success"></i> Add to group</Dropdown.Item>
                          <Dropdown.Item ><i className="fe fe-slash text-danger"></i> Block</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ul>
                  </div>



                  <div className="main-chat-msgs">
                      <PerfectScrollbar className='h-100'>
                    <Card.Body>
                      <div className="chat-box-single-line">
                        <Link className="timestamp">February 1st, 2019</Link>
                      </div>
                      <div className="d-flex justify-content-start">
                        <div className="img_cont_msg">
                          <img src={imagesData('male28')}
                            className="rounded-circle avatar avatar-md" alt="img" />
                        </div>
                        <div className="msg_cotainer br-7">
                          Hi, how are you Jenna Side?
                          <span className="msg_time">8:40 AM, Today</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end ">
                        <div className="msg_cotainer_send br-7">
                          Hi Connor Paige i am good tnx how about you?
                          <span className="msg_time_send">8:55 AM, Today</span>
                        </div>
                        <div className="img_cont_msg">
                          <img src={imagesData('female23')}
                            className="rounded-circle avatar avatar-md" alt="img" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-start ">
                        <div className="img_cont_msg">
                          <img src={imagesData('male28')}
                            className="rounded-circle avatar avatar-md" alt="img" />
                        </div>
                        <div className="msg_cotainer br-7">
                          I am good too, thank you for your chat template
                          <span className="msg_time">9:00 AM, Today</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end ">
                        <div className="msg_cotainer_send br-7">
                          You welcome Connor Paige
                          <span className="msg_time_send">9:05 AM, Today</span>
                        </div>
                        <div className="img_cont_msg">
                          <img src={imagesData('female23')}
                            className="rounded-circle avatar avatar-md" alt="img" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-start ">
                        <div className="img_cont_msg">
                          <img src={imagesData('male28')}
                            className="rounded-circle avatar avatar-md" alt="img" />
                        </div>
                        <div className="msg_cotainer br-7">
                          Yo, Can you update Views?
                          <span className="msg_time">9:07 AM, Today</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mb-4">
                        <div className="msg_cotainer_send br-7">
                          But I must explain to you how all this mistaken born and I will give
                          <span className="msg_time_send">9:10 AM, Today</span>
                        </div>
                        <div className="img_cont_msg">
                          <img src={imagesData('female23')}
                            className="rounded-circle avatar avatar-md" alt="img" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-start ">
                        <div className="img_cont_msg">
                          <img src={imagesData('male28')}
                            className="rounded-circle avatar avatar-md" alt="img" />
                        </div>
                        <div className="msg_cotainer br-7">
                          Yo, Can you update Views?
                          <span className="msg_time">9:07 AM, Today</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mb-4">
                        <div className="msg_cotainer_send br-7">
                          But I must explain to you how all this mistaken born and I will give
                          <span className="msg_time_send">9:10 AM, Today</span>
                        </div>
                        <div className="img_cont_msg">
                          <img src={imagesData('female23')}
                            className="rounded-circle avatar avatar-md" alt="img" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-start ">
                        <div className="img_cont_msg">
                          <img src={imagesData('male28')}
                            className="rounded-circle avatar avatar-md" alt="img" />
                        </div>
                        <div className="msg_cotainer br-7">
                          Yo, Can you update Views?
                          <span className="msg_time">9:07 AM, Today</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mb-4">
                        <div className="msg_cotainer_send br-7">
                          But I must explain to you how all this mistaken born and I will give
                          <span className="msg_time_send">9:10 AM, Today</span>
                        </div>
                        <div className="img_cont_msg">
                          <img src={imagesData('female23')}
                            className="rounded-circle avatar avatar-md" alt="img" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <div className="img_cont_msg">
                          <img src={imagesData('male28')}
                            className="rounded-circle avatar avatar-md" alt="img" />
                        </div>
                        <div className="msg_cotainer br-7">
                          Okay Bye, text you later..
                          <span className="msg_time">9:12 AM, Today</span>
                        </div>
                      </div>
                    </Card.Body>
                      </PerfectScrollbar>
                  </div>

 
                  <Card.Footer>
                    <div className="msb-reply d-flex">
                      <div className="input-group">
                        <input type="text" className="form-control  bg-white"
                          placeholder="Typing...." />
                        <Button type="button" variant='primary'>
                          <i className="fa fa-send" aria-hidden="true"></i>
                        </Button>
                      </div>
                    </div>
                  </Card.Footer>

                </Card>
              </Col>
            </Row>

         

    </Fragment>
  )
}
