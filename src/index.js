import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './Context/ThemeContext';
import { CookieProvider } from './Context/CookieContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LanguageProvider } from './Context/LanguageContext';
import {BrowserRouter} from 'react-router-dom';
ReactDOM.render(
	<React.Fragment>
		<BrowserRouter>
			<CookieProvider>
				<ThemeProvider>
					<LanguageProvider>
						<App />
					</LanguageProvider>
				</ThemeProvider>
			</CookieProvider>
		</BrowserRouter>
	</React.Fragment>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
