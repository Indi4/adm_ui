/* eslint-disable no-new */
import React, { Component, Fragment, useEffect, useState } from 'react'
import { Card, Col, Dropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { imagesData } from '../../../common/commomimages/imagedata'
import Pageheader from '../../../layouts/pageheader/pageheader'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import listWeek from '@fullcalendar/list'

const breadcrumbs = ["Apps", "Full Calender"];
class Fulcalender extends Component {
 
  
  state = {
    // Data for ListCalendar******

    calendarEvents1: [
      { id: '1', title: 'Event Now1', start: new Date() },
      { id: '2', title: 'Event Now2', start: new Date() },
      { id: '3', title: 'Event Now3', start: new Date() },
      { id: '4', title: 'Event Now4', start: new Date() },
      { id: '5', title: 'Event Now5', start: new Date() },
      { id: '6', title: 'Event Now6', start: new Date() }
    ],

    // Data for FullCalendar******

    calendarEvents: [
      {
        title: 'Atlanta Monster', start: new Date('2019-04-04 00:00'), id: '99999998'
      },
      {
        title: 'My Favorite Murder', start: new Date('2019-04-05 00:00'), id: '99999999'
      }
    ],

    events: [

      { title: 'My Event 1', id: '1', bg: 'bg-primary', border: 'border-primary' },
      { title: 'My Event 2', id: '2', bg: ' bg-secondary', border: 'border-secondary' },
      { title: 'My Event 3', id: '3', bg: 'bg-warning', border: 'border-warning' },
      { title: 'My Event 4', id: '4', bg: 'bg-success', border: 'border-success' },
      { title: 'My Event 5', id: '5', bg: 'bg-danger', border: 'border-danger' }

    ]
  }

  componentDidMount () {
    const draggableEl = document.getElementById('external-events')
    new Draggable(draggableEl, {
      itemSelector: '.fc-event',
      eventData: function (eventEl) {
        const title = eventEl.getAttribute('title')
        const id = eventEl.getAttribute('data')
        const bg = eventEl.getAttribute('backgroundColor')
        return {
          title,
          id,
          bg
        }
      }
    })
  }

  handleEventClick = (clickInfo) => {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }

  handleDateSelect = (selectInfo) => {
    const title = prompt('Please enter a new title for your event')
    const calendarApi = selectInfo.view.calendar
    calendarApi.unselect() // clear date selection
    if (title) {
      calendarApi.addEvent({
        // id: id,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  render () {
    return (
    <Fragment>


          <Pageheader items={breadcrumbs} />
       
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Calender With different Color Events</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={5} xl={3}>
                     
                           <div id="external-events" style={{ padding: '10px', height: 'auto', maxHeight: '-webkit-fill-available' }}>
                      <h4>Draggable Events</h4>
                      {this.state.events.map(event => (
                        <div className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event ${event.bg} ${event.border}`} title={event.title} data={event.id} key={event.id}>
                          <div className={`fc-event-main ${event.bg}`}> {event.title}</div>
                        </div>
                      ))}
                    </div>

                        <div className="mt-5">
                          <Card.Title className=" mb-4">My Schedules</Card.Title>
                          <div className="card border p-0 ">
                            <Card.Body>
                              <div className="d-flex justify-content-between align-items-center">
                                <h6 className="fw-semibold mb-0">Design Review</h6>
                                <Dropdown className="dropdown">
                                  <Dropdown.Toggle as='a' variant='primary-transparent' className=" no-caret btn bg-primary-transparent float-end"
                                    to="#" data-bs-toggle="dropdown"
                                    role="button" aria-haspopup="true"
                                    aria-expanded="false"><i
                                      className="fe fe-calendar"></i></Dropdown.Toggle>
                                  <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                    <Dropdown.Item className="dropdown-item"
                                      href="#"><i
                                        className="fe fe-edit mx-1"></i> Shedule
                                      Date</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item"
                                      href="#"><i
                                        className="fe fe-trash-2 mx-1"></i> Delete</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <p className="card-subtitle my-2 text-muted">05-09-2021</p>
                              <Link to="#"
                                className="btn btn-primary btn-sm me-3">Urgent</Link>
                              <Link to="#"
                                className="btn btn-secondary btn-sm">Face to Face</Link>
                            </Card.Body>
                            <Card.Footer className=" d-flex justify-content-between align-items-center">
                              <img className="avatar brround avatar-md me-3"
                                src={imagesData('male32')}
                                alt="avatar-img" />
                              <div className="media-body">
                                <Link to={`${import.meta.env.BASE_URL}pages/profile`}
                                  className=" fw-semibold text-dark">John
                                  Paige</Link><br />
                                <Link to={`${import.meta.env.BASE_URL}pages/profile`} className="text-muted mb-0 fs-13"> view
                                  client profile</Link>
                              </div>
                            </Card.Footer>
                          </div>
                          <div className="card border p-0">
                            <Card.Body>
                              <div className="d-flex justify-content-between align-items-center">
                                <h6 className="fw-semibold mb-0">New Project</h6>
                                <Dropdown className="dropdown">
                                  <Dropdown.Toggle as='a' variant='primary-transparent' className=" no-caret float-end btn bg-primary-transparent"
                                    to="#" data-bs-toggle="dropdown"
                                    role="button" aria-haspopup="true"
                                    aria-expanded="false"><i
                                      className="fe fe-calendar"></i></Dropdown.Toggle>
                                  <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                    <Dropdown.Item className="dropdown-item"
                                      to="#"><i
                                        className="fe fe-edit me-1"></i> Shedule
                                      Date</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item"
                                      to="#"><i
                                        className="fe fe-trash-2 me-1"></i> Delete</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                              <p className="card-subtitle my-2 text-muted">14-10-2021</p>
                              <Link to="#"
                                className="btn btn-primary btn-sm me-3">Urgent</Link>
                              <Link to="#"
                                className="btn btn-success btn-sm">Online Meeting</Link>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between align-items-center">
                              <img className="avatar brround avatar-md me-3"
                                src={imagesData('male14')}
                                alt="avatar-img" />
                              <div className="media-body">
                                <Link to={`${import.meta.env.BASE_URL}pages/profile`}
                                  className=" fw-semibold text-dark">Mozelle
                                  Belt</Link><br />
                                <Link to={`${import.meta.env.BASE_URL}pages/profile`} className="text-muted mb-0 fs-13"> view
                                  client profile</Link>
                              </div>
                            </Card.Footer>
                          </div>
                        </div>
                      </Col>
                      <Col md={7} xl={9}>
                        <div id='calendar2'>
                        <FullCalendar initialView="dayGridMonth"
                      headerToolbar={{ start: 'prev,next today', center: 'title', end: 'dayGridMonth,timeGridWeek,timeGridDay' }}
                      rerenderDelay={10}
                      eventDurationEditable={false}
                      editable={true}
                      droppable={true}
                      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                      events={this.state.calendarEvents}
                      eventClick={this.handleEventClick}
                      selectable={true}
                      select={this.handleDateSelect}
                    />
                    </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>List Calendar</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div id='calendar'>
                   

                  <FullCalendar initialView="listWeek" plugins={[listWeek]} events={this.state.calendarEvents1} />


                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          



    </Fragment>
    )
  }
}

export default Fulcalender

