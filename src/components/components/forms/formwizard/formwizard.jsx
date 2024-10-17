import React, { Fragment } from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../../layouts/pageheader/pageheader'
import Basicformwizard from './data/wizarddata'
import HorizontalNonLinearStepper from './mainwizard'




export default function FormWizard () {
  const breadcrumbs = ["Components", "Forms", "Form Wizard"];
  return (
    <Fragment>



          <Pageheader items={breadcrumbs}/>
         
            <Row>
              <div className="col-12"> 
                <Card>
                  <Card.Header>
                    <Card.Title>Form Wizard</Card.Title>
                  </Card.Header>
                  <Card.Body>          
                    <HorizontalNonLinearStepper/>
                  
                  </Card.Body>
                </Card>
               </div>
            </Row>
           
            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Accordion-Wizard-Form</Card.Title>
                  </Card.Header>
                  <Card.Body>
                <Basicformwizard/>
                     </Card.Body>
                </Card>
              </Col>
            </Row>

    </Fragment>
  )
}
