import React from 'react'
import LoginForm from '../toolbox/LoginForm';
function Login() {
	return (
		<div className="row d-flex align-content-center my-4">
			<div className="col-12 ">
				<p className="lead text-center w-25 border border-danger border-top-0 border-right-0 border-left-0 mx-auto py-2 font-weight-bold">
					{' '}
					Giriş{' '}
				</p>
			</div>
			<div className="col-12 mx-auto">
				<LoginForm />
			</div>
		</div>
	)
}

export default Login
