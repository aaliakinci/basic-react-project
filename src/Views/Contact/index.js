import { useContext } from 'react';
import {FormattedMessage} from 'react-intl'
import ContactForm from '../../Components/toolbox/ContactForm';
import ThemeContext from '../../Context/ThemeContext';
function Contact() {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			className={`col-12 col-md-6 mx-auto my-4 ${
				theme === 'light' ? 'text-dark' : 'text-white'
			} p-4`}
		>
			<div className="row">
				<div className="col-12 ">
					<h4 className="text-center"><FormattedMessage id="header.contact"/></h4>
				</div>
				<div className="col-12">
					<ContactForm />
				</div>
			</div>
		</div>
	);
}

export default Contact;
