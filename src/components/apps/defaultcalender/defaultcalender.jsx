import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default function Defaultcalender () {
  const breadcrumbs = ["Apps", "Default Calender"];
  return (
    <Fragment>



       
            <Row>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Default Calendar</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div>
                  
                    <FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                  }}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                />
                </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
           
         

    </Fragment>
  )
}
