import { useEffect, useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './styles.module.css';
import { country } from './countryInitialState';
import LanguageContext from '../../../Context/LanguageContext';
import SearchBar from '../../SearchBar';
function ContactForm() {
	const { lang } = useContext(LanguageContext);
	const [error, setError] = useState('');
	const [selectedCountry, setSelectedCountry] = useState({});
	const [data, setData] = useState({
		name: '',
		email: '',
		phoneNumber: '',
		country: '',
		text: '',
	});
	const [countrys, setCountrys] = useState([]);
	useEffect(() => {
		if (lang === 'en-US') {
			setCountrys(country.en);
			return 0;
		}
		setCountrys(country.tr);
	}, [lang]);
	const handleChange = (e) => {
		setError('');
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, phoneNumber, country, text } = data;
		if (
			name.trim() !== '' &&
			email.trim() !== '' &&
			phoneNumber.trim() !== '' &&
			selectedCountry.trim() !== '' &&
			text.trim() !== ''
		) {
			setData(data);
			console.log(data);
	 
			return 0;
		}
		setError(<FormattedMessage id="contact.error" />);
	};
	return (
		<form onSubmit={handleSubmit}>
			{error && <h6>{error}</h6>}
			<div className="form-group">
				<label className="form-control-label">
					<FormattedMessage id="contact.name" />
				</label>
				<input className="form-control" name="name" onChange={handleChange} />
			</div>
			<div className="form-group">
				<label className="form-control-label">
					<FormattedMessage id="contact.email" />
				</label>
				<input className="form-control" name="email" onChange={handleChange} />
			</div>
			<div className="form-group">
				<label className="form-control-label">
					<FormattedMessage id="contact.phoneNumber" />
				</label>
				<input className="form-control" name="phoneNumber" onChange={handleChange} />
			</div>
			{countrys.length > 0 ? (
				<div className="form-group">
					<label className="form-control-label">
						<FormattedMessage id="contact.countrys" />
					</label>
					<SearchBar setSelectedCountry={setSelectedCountry} data={countrys} setData={setData} contactData={data}/>
				</div>
			) : (
				''
			)}
			<div className="form-group">
				<label className="form-control-label">
					<FormattedMessage id="contact.body" />
				</label>
				<textarea
					className={`form-control ${styles.textArea}`}
					name="text"
					onChange={handleChange}
				></textarea>
			</div>
			<button type="submit" className="btn btn-block bg-dark text-white">
				<FormattedMessage id="contact.button" />
			</button>
		</form>
	);
}

export default ContactForm;
