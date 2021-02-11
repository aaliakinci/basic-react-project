import {useState,useContext} from 'react';
import {FormattedMessage} from 'react-intl';
import CookieContext from '../../../Context/CookieContext';
import ValidationContext from '../../../Context/Validation';

function LoginForm() {
	const {validater} = useContext(ValidationContext)
	const {setCookie} = useContext(CookieContext);
	const [user,setUser] = useState({
		name:"",
		email:"",
		password:""
	})
	const [error, setError] = useState("")
	const handleSubmit = (e)=> {
		e.preventDefault();
		console.log('submitting...');
		const trimPassword = user.password.replace(/\s+/g,'').length;
		const password = user.password.length;
	  if(trimPassword<password)
		{
			setError(<FormattedMessage id="login.errorPasswordSpace" />)
			return 0
		}
		const validate = validater(user);
		if(validate===0)
		{
			setError(<FormattedMessage id="login.error"/>)
			return 0
		}
		setCookie('UserBasicReact',user,20);
		window.location.reload();
	}
 const handleChange = (e) =>{
	 setUser({...user,[e.target.name]:e.target.value})	
 }
	return (
		<div>
				<form className="w-100 p-4 border shadow" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="name"><FormattedMessage id="login.name" /><span className="text-danger">*</span></label>
				<input name="name" className="form-control" onChange={handleChange} />
			</div>
			<div className="form-group">
				<label htmlFor="email" className="form-control-label">
				<FormattedMessage id="login.email" /> <span className="text-danger">*</span>
				</label>
				<input name="email" type="email" className="form-control" onChange={handleChange} />
			</div>
			<div className="form-group">
				<label htmlFor="password" className="form-control-label">
				<FormattedMessage id="login.password" /> <span className="text-danger">*</span>
				</label>
				<input name="password" type="password" className="form-control" onChange={handleChange}/>
			</div>
			<button type="submit" className="btn btn-block bg-dark text-white my-2">
			<FormattedMessage id="login.button" />
			</button>
		<small className="text-danger lead">{error}</small>
		</form>
		</div>
	)
}

export default LoginForm
