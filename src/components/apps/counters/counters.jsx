import React, { Fragment, useState, useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../../layouts/pageheader/pageheader'
import Countdown from 'react-countdown'
import CountUp from 'react-countup'
import { DayCounter, Middle, TimeCountingdaysLimit, Timers, Uptimer } from './fuctionaldata'


export default function Counters () {
  const breadcrumbs = ["Apps", "Counters"];
  const formatTime = (time) =>
  ` ${String(Math.floor(time / 60)).padStart(2, '0')} : ${String(
    time % 60
  ).padStart(2, '0')}`

  const Timer = ({ time }) => {
  // const  RESET_INTERVAL_S = (time % RESET_INTERVAL_S);

    return (
    <>
      <div> 00 Days 00 :{formatTime(time)}</div>
    </>
    )
  }
  const IntervalTimerFunctional = () => {
    const [time, setTime] = useState(0)

    useEffect(() => {
      const timerId = setInterval(() => {
        setTime((t) => t + 1)
      }, 1000)
      return () => clearInterval(timerId)
    }, [])

    return <Timer time={time} />
  }
  return (
    <Fragment>



          <Pageheader items={breadcrumbs} />


            <Row className=" row-cards">
              <Col md={12} xl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>
                      Time Counting From 0
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className="text-center">
                  <Uptimer />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12} xl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>
                      Time Counting From 60 to 20
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className="text-center">

                  <div className="example border br-7">
                      <span className="fs-24 mx-2"><i className="bi bi-alarm text-success"></i></span>

                  <Timers min={1} />
                  </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12} xl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>
                      Time 1 minute counter
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className=" text-center">
                    <div className="example border br-7">
                      <span className="fs-24 mx-2"><i className="bi bi-alarm text-info"></i></span>

                      <Middle/>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>
                      Time Counting days Limit
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className=" text-center">
                    <div className="example border br-7">
                      <span className="fs-24 mx-2"><i className="bi bi-calendar2-check text-danger"></i></span>

                      <span className="h3 mb-0 text-danger">
                       <TimeCountingdaysLimit/>
                        </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12} lg={4} xl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>
                      Numbers counter
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className=" text-center">
                    <span className="fs-24 mx-1"><i className="bi bi-bar-chart text-success"></i></span>
                    <h5 className="mb-1">Profit</h5>


                    <CountUp className='h2 text-success' end={2569} />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12} lg={4} xl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>
                      Numbers counter
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className=" text-center">
                    <span className="fs-24 mx-1"><i className="bi bi-people text-warning"></i></span>
                    <h5 className="mb-1">Employees</h5>

                    <CountUp className="h2 text-warning" start={0} end={56989.32} prefix="2," decimal="." decimals={2} />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12} lg={4} xl={4}>
                <Card>
                  <Card.Header>
                    <Card.Title>
                      Numbers counter
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className=" text-center">
                    <span className="fs-24 mx-1"><i className="bi bi-bug text-danger"></i></span>
                    <h5 className="mb-1">Errors</h5>

                    <CountUp className='h2 text-danger' end={8998} prefix="0." />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>
                      Day Counter
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className=" text-center">
                   <DayCounter/>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

   

    </Fragment>
  )
}
