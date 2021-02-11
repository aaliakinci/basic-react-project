import {createContext,useState,useEffect} from 'react';

const LanguageContext = createContext(null);

export const LanguageProvider = ({children}) => {
	const defaultLang = navigator.language
	const [lang, setLang] = useState(defaultLang)

	// useEffect(() => {
	// 	const isLocal = localStorage.getItem('lang');
	// 	console.log(isLocal);
	// 	if(isLocal===undefined)
	// 	{
	// 		const defaultLang = navigator.language
	// 		setLang(defaultLang)
	// 		localStorage.setItem('lang',lang);
	// 	}
	// 	else{
	// 		localStorage.setItem('lang',lang)
	// 	}
	// }, [lang])


	const values = {
		lang,
		setLang
	}

	return <LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>
}
export default LanguageContext