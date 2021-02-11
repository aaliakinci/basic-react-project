import { useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';
function LanguageChanger() {
	const { lang, setLang,localChange } = useContext(LanguageContext);
	const handleChange = (e) => {
		setLang(e.target.value)
		localChange(e.target.value);
	}
	return (
		<div>
			<select className="form-control-sm" onChange={handleChange} defaultValue={lang}>
				<option value="tr-TR">
					TR
				</option>
				<option value="en-US">
					EN
				</option>
			</select>
		</div>
	);
}

export default LanguageChanger;
