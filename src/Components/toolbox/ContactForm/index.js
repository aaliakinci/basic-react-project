import {useEffect,useContext,useState} from 'react'
import {FormattedMessage} from 'react-intl'
import styles from './styles.module.css'
import {country} from './countryInitialState';
import LanguageContext from '../../../Context/LanguageContext';
function ContactForm() {
	const {lang} = useContext(LanguageContext);
	const [countrys, setCountrys] = useState([])
	useEffect(() => {
		 if(lang==="en-US")
		{
			setCountrys(country.en)
			return 0
		}
		  setCountrys(country.tr)
	}, [lang])
	return (
		<form>
			<div className="form-group">
				<label className="form-control-label"><FormattedMessage id="contact.title"/></label>
				<input className="form-control"/>
				<span></span>
			</div>
			<div className="form-group">
				<label className="form-control-label"><FormattedMessage id="contact.name"/></label>
				<input className="form-control"/>
				<span></span>
			</div>
			<div className="form-group">
				<label className="form-control-label"><FormattedMessage id="contact.email"/></label>
				<input className="form-control"/>
				<span></span>
			</div>
			<div className="form-group">
				<label className="form-control-label"><FormattedMessage id="contact.phoneNumber"/></label>
				<input className="form-control"/>
				<span></span>
			</div>
			{
				countrys.length>0?<div className="form-group">
				<label className="form-control-label"><FormattedMessage id="contact.phoneNumber"/></label>
				<select className="form-control">
					{countrys.map(country=>(<option key={country.id} value={country.name}>{country.name}</option>))}
				</select>
			</div>:""
			}
			<div className="form-group">
				<label className="form-control-label"><FormattedMessage id="contact.body"/></label>
				<textarea className={`form-control ${styles.textArea}`}></textarea>
				<span></span>
			</div>
			<button type="submit" className="btn btn-block btn-success"><FormattedMessage id="contact.button"/></button>
		</form>
	)
}

export default ContactForm
