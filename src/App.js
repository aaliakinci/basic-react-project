import { useContext } from 'react';
import Header from './Components/Header';
import { language } from './Language';
import { IntlProvider } from 'react-intl';
import LanguageContext from './Context/LanguageContext';
import { Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import Contact from './Views/Contact';
import ThemeContext from './Context/ThemeContext';
import styles from './App.module.css';
function App() {
	const { lang } = useContext(LanguageContext);
	const { theme } = useContext(ThemeContext);

	return (
		<IntlProvider locale={lang} messages={language[lang]}>
			<Header />
			<div className={`${theme === 'light' ? styles.light : styles.dark} container-fluid`}>
				<div className="row">
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/contact-us" component={Contact} />
					</Switch>
				</div>
			</div>
		</IntlProvider>
	);
}

export default App;
