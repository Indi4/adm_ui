import React, { useState, Fragment } from 'react'
import { Col, Form, ListGroup } from 'react-bootstrap'
//

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import StepContent from '@mui/material/StepContent'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'



// Accordion-Wizard-Form
 const steps = [{
  label: 'Name & Email',
  description: (
    <>
      <ListGroup>
        <ListGroup.Item>
          <Form.Group className='form-group'>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" name="name" />
          </Form.Group>
          <Form.Group className='form-group'>
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" name="email" />
          </Form.Group>
        </ListGroup.Item>
      </ListGroup>
    </>
  )
},
{
  label: 'Contact',
  description: (
    <>
      <ListGroup>
        <ListGroup.Item>
          <Form.Group className='form-group'>
            <Form.Label>Telephone:</Form.Label>
            <Form.Control type="text" name="telephone" className="form-control" />
          </Form.Group>
          <Form.Group className='form-group'>
            <Form.Label>Mobile:</Form.Label>
            <Form.Control type="text" name="mobile" className="form-control" />
          </Form.Group>
        </ListGroup.Item>
      </ListGroup>
    </>
  )
},
{
  label: 'Payment',
  description: (
    <>
      <ListGroup>
        <ListGroup.Item>
          <Form.Group className='form-group'>
            <Form.Label>Credit card:</Form.Label>
            <Form.Control type="text" name="card" />
          </Form.Group>
          <Form.Group className="form-row form-group">
            <Col sm={4}>
              <Form.Label>Expiry:</Form.Label>
              <Form.Control type="text" name="expiry" />
            </Col>
            </Form.Group>
            <Form.Group className="form-row form-group">
            <Col sm={4}>
              <Form.Label>CVV:</Form.Label>
              <Form.Control type="text" name="cvv" />
            </Col>
          </Form.Group>
        </ListGroup.Item>
      </ListGroup>
    </>
  )
}]

export default function Basicformwizard () {
  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set())
  const isStepOptional = (step) => {
    return step === 1
  }
  const isStepSkipped = (step) => {
    return skipped.has(step)
  }
  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.")
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }
  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => {
          const stepProps = {}
         
          if (isStepOptional(index)) {
            if (isStepSkipped(index)) {
              stepProps.completed = false
            }
          }
          return (
            <Step key={label.label} {...stepProps}>
              <StepLabel optional={
                index === 2 ? <Typography variant="caption"></Typography> : null
              }>{label.label}</StepLabel>
              <StepContent>
                {label.description}
                <Fragment>
                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset} variant="contained" color='primary'>Reset</Button>
                  </Box>
                </Fragment>
              </StepContent>
            </Step>
          )
        })}
      </Stepper>
      <Fragment>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="primary" variant="contained"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />

         <div className='aaksh'>
         {isStepOptional(activeStep) && (
            <Button variant="contained" color="primary" onClick={handleSkip} sx={{ mr: 1 }}>
              Skip
            </Button>
          )}
         <Button className='ms-auto' variant="contained" color='primary' onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'SUBMIT' : 'Next'}
          </Button>
         </div>
        </Box>
      </Fragment>

    </Box>
  )
}



