
import { useState,useContext} from 'react';
import LanguageChanger from '../LanguageChanger'
import {FormattedMessage} from 'react-intl'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import ThemeChanger from '../ThemeChanger';
import {Link} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext';
function Header () {
	const {theme} = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color={`${theme==="light"?"light":"dark"}`} className={`border border-left-0 border-right-0 border-top-0 `} light expand="md">
				<Link className={`navbar-brand ${theme==="light"?"text-dark":"text-white"}`} to="/"><FormattedMessage id="header.brand"/></Link>
				<Link className={`navbar-brand ${theme==="light"?"text-dark":"text-white"}`} >Sayfa İsmi</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/contact-us" className={`nav-link ${theme==="light"?"text-dark":"text-white"}`} style={{fontSize:'1.25rem'}}> <FormattedMessage id="header.contact"/></Link>
            </NavItem>
            <NavItem>
              <button className={`btn nav-link ${theme==="light"?"text-dark":"text-white"}`} style={{fontSize:'1.25rem'}}><FormattedMessage id="header.login"/></button>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText className="ml-4"><LanguageChanger/></NavbarText>
          <NavbarText className="ml-4"><ThemeChanger/></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;