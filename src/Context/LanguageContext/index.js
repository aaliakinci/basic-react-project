import { createContext, useState,useEffect} from 'react';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
	const isLocal = localStorage.getItem('lang');
	const defaultlang = navigator.language;
	const [lang, setLang] = useState(defaultlang);

useEffect(() => {
	if (isLocal === null) {
		const defaultlang = navigator.language;
		localStorage.setItem('lang', defaultlang);
		setLang(defaultlang);
	}else{
		const locallang = localStorage.getItem('lang');
		setLang(locallang);
	}
}, [isLocal])
	

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
