import {createContext,useState} from 'react';

const LanguageContext = createContext(null);

export const LanguageProvider = ({children}) => {
	const defaultLang = navigator.language
	const [lang, setLang] = useState(defaultLang)

	const values = {
		lang,
		setLang
	}

	return <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>
}
export default LanguageContext