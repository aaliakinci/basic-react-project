import { useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';
function LanguageChanger() {
	const { lang, setLang } = useContext(LanguageContext);
	console.log(lang);
	return (
		<div>
			<select className="form-control-sm" onChange={(e) => setLang(e.target.value)} defaultValue={lang}>
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
