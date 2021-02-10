import { useContext } from 'react';
import LanguageContext from '../../Context/LanguageContext';
import turkey from './turkey.png';
import united from './united-kingdom.png';
function LanguageChanger() {
	const { lang, setLang } = useContext(LanguageContext);
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
