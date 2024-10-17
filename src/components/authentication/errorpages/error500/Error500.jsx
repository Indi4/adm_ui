import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Error500() {
  return (
    <Fragment>



		<div className="page-content">
			<div className="container text-center text-dark">
				<div className="display-1  text-dark mb-2">500</div>
				<p className="h5 fw-normal mb-6 leading-normal">Internal Server Error...</p>
				<Link className="btn btn-primary" to={`${import.meta.env.BASE_URL}dashboard`}>
					Back To Home
				</Link>
			</div>
		</div>
	



    </Fragment>
  )
}

