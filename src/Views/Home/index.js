import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import ThemeContext from '../../Context/ThemeContext';

function Home() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`col-12 mx-auto my-4 ${theme === 'light' ? 'text-dark' : 'text-white'} p-4`}>
			<div className="row">
				<div className="col-12 mb-4">
					<h4 className="text-center">
						<FormattedMessage id="header.home" />
					</h4>
				</div>
				<div className="col-12">
					<div className="row ">
						<div className="col-12 col-md-6 mx-auto">
							<h4 className="text-center">
								<FormattedMessage id="home.dummyTextHeaderFirst" />
							</h4>
							<p className="text-justify">
								<FormattedMessage id="home.dummyTextFirst" />
							</p>
						</div>
					</div>
				</div>
				<div className="col-12">
					<div className="row">
						<div className="col-12 col-md-6 mx-auto">
							<h4 className="text-center">
								<FormattedMessage id="home.dummyTextHeaderSecond" />
							</h4>
							<p className="text-center">
								<FormattedMessage id="home.dummyTextSecond" />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
