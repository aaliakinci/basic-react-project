import {useContext} from 'react'
import { FormattedMessage } from 'react-intl';
import {UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem} from 'reactstrap'
import CookieContext from '../../Context/CookieContext';
	import ThemeContext from '../../Context/ThemeContext'
	import {Link} from 'react-router-dom'
function Profile() {
	const { theme } = useContext(ThemeContext);
	const {deleteCookie} = useContext(CookieContext)
	const logout = () => {
		deleteCookie('UserBasicReact');
		window.location.reload();
	}
	return (
			<UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={`${theme === 'light' ? 'text-dark' : 'text-white'}`} style={{fontSize:'1.25rem'}}>
                <FormattedMessage id="header.profile" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className={` nav-link ${theme === 'light' ? 'text-dark' : 'text-white bg-dark'}`}>
                 <Link to="/user-detail" className={` nav-link ${theme === 'light' ? 'text-dark' : 'text-white bg-dark'}`}> <FormattedMessage id="profile.userDetail"/></Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className={`nav-link ${theme === 'light' ? 'text-dark' : 'text-white bg-dark'}`}  onClick={logout}>
                  <FormattedMessage id="profile.logout"/>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
	)
}
export default Profile
