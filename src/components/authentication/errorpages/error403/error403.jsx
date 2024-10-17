import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Error403() {
  return (
    <Fragment>



		<div className="page-content">
			<div className="container text-center">
				<div className="display-1 mb-2">403</div>
				<p className="h5 fw-normal mb-6 leading-normal">Oops! You've Reached the land of the dead..</p>
				<Link className="btn btn-primary" to={`${import.meta.env.BASE_URL}dashboard`}>
					Back To Home
				</Link>
			</div>
		</div>
	


    </Fragment>
  )
}
