import React from 'react'
import {Link} from 'react-router-dom';
function Footer() {
	return (
		<div className="container-fluid">
			<div className="row">
			<div className="col-12 d-flex justify-content-center">
				<Link to="aaliakinci.github.com"><i className="fa fa-5x fa-github"></i></Link>
			</div>
				<div className="col-12 d-flex justify-content-center">
					<p className="lead text-muted font-weight-bolder">Created by Ali Akıncı</p>	
				</div>
		</div>
		</div>
	)
}

export default Footer
