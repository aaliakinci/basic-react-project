import { useContext } from 'react';
import Header from './Components/Header';
import UserDetail from './Views/UserDetail';
import { language } from './Language';
import { IntlProvider } from 'react-intl';
import LanguageContext from './Context/LanguageContext';
import { Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import Contact from './Views/Contact';
import ThemeContext from './Context/ThemeContext';
import styles from './App.module.css';
import Footer from './Components/Footer';
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
						<Route path="/user-detail" component={UserDetail} />
						<Route
						path="/"
						component={() => {
							window.open('https://github.com/aaliakinci', '_blank');
							return null;
						}}
					/>
					</Switch>
				</div>
				<Footer />
			</div>
		</IntlProvider>
	);
}

export default App;
