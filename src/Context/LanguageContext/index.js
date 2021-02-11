import { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
	const isLocal = localStorage.getItem('lang');
	if (isLocal === undefined) {
		const defaultlang = navigator.language;
		localStorage.setItem('lang', defaultlang);
	}
	const locallang = localStorage.getItem('lang');
	const [lang, setLang] = useState(locallang);
	const localChange = (changeLang) => {
		localStorage.setItem('lang', changeLang);
	};
	const values = {
		lang,
		setLang,
		localChange,
	};

	return <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>;
};
export default LanguageContext;
