import {useContext} from 'react'
import Header from './Components/Header';
import { language } from './Language';
import { IntlProvider } from 'react-intl';
import LanguageContext from './Context/LanguageContext'
import {Switch,Route} from 'react-router-dom'
import Home from './Views/Home';
import Contact from './Views/Contact';
function App() {
	const {lang} = useContext(LanguageContext)
	return (
		<IntlProvider locale={lang} messages={language[lang]}>
				<Header />
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/contact-us" component={Contact}/>
				</Switch>
		</IntlProvider>
	);
}

export default App;
