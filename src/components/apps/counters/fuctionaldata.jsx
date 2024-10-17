import React, { useState, useEffect, useRef } from 'react'
import TimeFormat from 'hh-mm-ss'
import Countdown from 'react-countdown'
import { Col, Row } from 'react-bootstrap'
export function Uptimer () {
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

  <div className="example border  ">
     
      <h3 className='mb-0  ms-30 text-primary d-flex t-center'> <i className="bi bi-alarm text-primary me-2"></i>
      <span className=' mb-0 h3 text-primary'><IntervalTimerFunctional/></span>
      </h3>
    </div>
  )
}

// Time Counting From 60 to 20
export const Timers = ({ min }) => {
  let mainTime
  const secondsLeft = () => {
    const left = Number(min) * 60
    return left
  }

  const [seconds, setSeconds] = useState(secondsLeft())
  useEffect(() => {
    startTime()
    return () => {
      stopTimer()
    }
  })

  const startTime = () => {
    if (seconds && seconds > 20) {
      mainTime = setInterval(tick, 1000)
    }
  }

  const stopTimer = () => {
    clearInterval(mainTime)
  }

  const tick = () => {
    setSeconds((seconds) => {
      const updatedSeconds = seconds - 1
      if (updatedSeconds < 1) {
        stopTimer()
      }
      return updatedSeconds
    })
  }

  const display = TimeFormat.fromS(seconds, 'hh:mm:ss')
  const [h, m, s] = display.split(':')
  return (
    <>
     <span className=' mb-0 h3 text-success'>{h}Days : {m} : {s}</span>
    </>
  )
}

// timer 1 minute counter
export function Middle () {
  const intervalRef = useRef(null)

  const [timer, setTimer] = useState('00:00:00')
  useEffect(() => {
    function getTimeRemaining (endtime) {
      const i = new Date()
      const total = Date.parse(endtime) - Date.parse(i)
      const seconds = Math.floor((total / 1000) % 60)
      const minutes = Math.floor((total / 1000 / 60) % 60)
      const hours = Math.floor(((total / 1000) * 60 * 60) % 60)

      return {
        total,
        hours,
        minutes,
        seconds
      }
    }
    function startTimer (deadline) {
      const { total, hours, minutes, seconds } = getTimeRemaining(deadline)
      if (total >= 0) {
        setTimer(
          (hours || '0' + hours) +
            ':' +
            (minutes || '0' + minutes) +
            ':' +
            (seconds || '0' + seconds)
        )
      } else {
        clearInterval(intervalRef.current)
      }
    }

    function clearTimer (endtime) {
      setTimer('00:00:60')
      if (intervalRef.current) clearInterval(intervalRef.current)
      const id = setInterval(() => {
        startTimer(endtime)
      }, 1000)
      intervalRef.current = id
    }
    function getDeadlineTime () {
      const deadline = new Date()
      deadline.setSeconds(deadline.getSeconds() + 60)
      return deadline
    }

    clearTimer(getDeadlineTime())
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])
  return <><span className=' mb-0 h3 text-info'>{timer}</span></>
}

// TimeCountingdaysLimit
const AfterCompletion = () => <span>You are good to go!</span>

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterCompletion />
  } else {
    // Render a countdown
    return (
<span>
{days} Days {hours} Hours:{minutes} Minutes:{seconds} Seconds
</span>
    )
  }
}
export function TimeCountingdaysLimit () {
  return (<Countdown date={Date.now() + 259200000} renderer={renderer} />)
}
// end
// DayCounter
// Random component
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
       <Row className="count-down">
       <Col sm={12} md={12} xl={3} className="col-12">
                       <div className="countdown alert-primary">
                         <span className="days text-primary ">{days}</span>
                         <span className="text-primary">Days</span>
                       </div>
                     </Col>
                     <Col sm={12} md={12} xl={3} className="col-12">
                       <div className="countdown alert-success">
                         <span className="hours text-success">{hours}</span>
                         <span className="text-success">Hours</span>
                       </div>
                     </Col>

                     <Col sm={12} md={12} xl={3} className="col-12">
                       <div className="countdown alert-info">
                         <span className="minutes text-info">{minutes}</span>
                         <span className="text-info">Minutes</span>
                       </div>
                     </Col>
                     <Col sm={12} md={12} xl={3} className="col-12">
                       <div className="countdown alert-warning">
                         <span className="seconds text-warning">{seconds}</span>
                         <span className="text-warning">Seconds</span>
                       </div>
                     </Col>
       </Row>
     </span>
    )
  }
}

export function DayCounter () {
  return (<Countdown date={Date.now() + 3088800000} renderer={rendering} />)
}
