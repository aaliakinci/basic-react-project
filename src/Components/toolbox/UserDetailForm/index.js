import { useEffect, useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import CookieContext from '../../../Context/CookieContext';
function UserDetailForm() {
	const { callCookie, setCookie } = useContext(CookieContext);
	const [error, setError] = useState('');
	const [user, setUser] = useState({
		name: '',
		email: '',
	});
	const goToHome = () => {
		window.location.href="/"
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		if (user.name.trim()!=="" && user.email.trim()!=="" ) {
			setCookie('UserBasicReact', user, 20);
			return 0;
		} 
		setError(<FormattedMessage id="login.error" />);
	};
	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	useEffect(() => {
		const user = callCookie('UserBasicReact');
		setUser(user);
	}, [callCookie]);
	return (
		<>
		{
			user !== undefined?<div>
			<form className="w-100 p-4 border shadow" onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">
						<FormattedMessage id="login.name" />
						<span className="text-danger">*</span>
					</label>
					<input name="name" value={user.name} className="form-control" onChange={handleChange} />
				</div>
				<div className="form-group">
					<label htmlFor="email" className="form-control-label">
						<FormattedMessage id="login.email" /> <span className="text-danger">*</span>
					</label>
					<input
						name="email"
						value={user.email}
						type="email"
						className="form-control"
						onChange={handleChange}
					/>
				</div>
				<button type="submit" className="btn btn-block bg-dark text-white my-2">
					<FormattedMessage id="user.button" />
				</button>
				<small className="text-danger lead">{error}</small>
			</form>
		</div>:goToHome()
		}
		</>
		
	);
}

export default UserDetailForm;
