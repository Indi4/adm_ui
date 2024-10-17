import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Error503() {
  return (
    <Fragment>



		<div className="page-content">
			<div className="container text-center text-dark">
				<div className="display-1  text-dark mb-2">503</div>
				<p className="h5 fw-normal mb-6 leading-normal">Something went wrong,but we're on it.</p>
				<Link className="btn btn-primary" to={`${import.meta.env.BASE_URL}dashboard`}>
					<i className="fa fa-long-arrow-left me-2"></i>Back To Home
				</Link>
			</div>
		</div>





    </Fragment>
  )
}
