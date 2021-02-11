import {useContext} from 'react'
import ThemeContext from '../../Context/ThemeContext';
import UserDetailForm from '../../Components/toolbox/UserDetailForm';
import {FormattedMessage} from 'react-intl'
function UserDetail() {
	const { theme } = useContext(ThemeContext);
	
	return (
		<div
			className={`col-12 col-md-6 mx-auto my-4 ${
				theme === 'light' ? 'text-dark' : 'text-white'
			} p-4`}
		>
			<div className="row">
				<div className="col-12 ">
					<h4 className="text-center"><FormattedMessage id="user.header"/></h4>
				</div>
				<div className="col-12">
					<UserDetailForm />
				</div>
			</div>
		</div>
	)
}

export default UserDetail
