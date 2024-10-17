import React from 'react'
import { DayCounter } from './data/constructiondata'
import { Button, ButtonGroup, Form, InputGroup } from 'react-bootstrap'

export default function Underconstruction() {
  document.querySelector('body').classList.add('bg-account', 'light-mode')
  return (
    <div>


      <div className="page h-100">

        <div className="page-content">
          <div className="container text-center text-dark">
            <div className="construction ">
              <div className="text-dark">
                <div className="card-body ">
                  <h2 className="font mb-4">Coming Soon</h2>
                  <h4 className="mt-5 text-dark">Our Website is under construction, follows us for more updates !
                  </h4>
                  <br />

                  <DayCounter />
                  <InputGroup className="input-group ms-auto me-auto mt-6 construction-btn">
                    <Form.Control type="text" placeholder=" Email-id" />
                    <Button type="button" className="btn btn-primary">
                      Subscribe
                    </Button>
                  </InputGroup>
                  <div className="mt-6 btn-list">
                    <Button type="button" variant='facebook' className="btn btn-icon btn-facebook"><i
                      className="fa fa-facebook"></i></Button>
                    <Button type="button" variant="google" className="btn btn-icon btn-google"><i
                      className="fa fa-google"></i></Button>
                    <Button type="button" variant="twitter" className="btn btn-icon btn-twitter"><i
                      className="fa fa-twitter"></i></Button>
                    <Button type="button" variant="dribbble" className="btn btn-icon btn-dribbble"><i
                      className="fa fa-dribbble"></i></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
