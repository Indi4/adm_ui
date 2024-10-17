import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Countdown from 'react-countdown'
import TimeFormat from 'hh-mm-ss'

const AfterComplete = () => <span>You are good to go!</span>

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />
  } else {
    // Render a countdown
    return (
     <span>
      <div id="count-down" className="center-block text-white mt-3">

                       <div className="clock-presenter days_dash">
                      <div className="digit text-white  ">{days}</div>
                      <p className="mt-2 text-dark">Days</p>
                    </div>
                    <div className="clock-presenter days_dash">
                      <div className="digit text-white  ">{hours}</div>
                      <p className="mt-2 text-dark">Hours</p>
                    </div>
                    <div className="clock-presenter days_dash">
                      <div className="digit text-white  ">{minutes}</div>
                      <p className="mt-2 text-dark">Minutes</p>
                    </div>
                    <div className="clock-presenter days_dash">
                      <div className="digit text-white  ">{seconds}</div>
                      <p className="mt-2 text-dark">Seconds</p>
                    </div>
       </div>
     </span>
    )
  }
}

export function DayCounter () {
  return (<Countdown date={Date.now() + 4499990000} renderer={rendering} />)
}
