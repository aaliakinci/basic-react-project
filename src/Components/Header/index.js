import { useState, useContext,useEffect } from 'react';
import styles from './styles.module.css';
import LanguageChanger from '../LanguageChanger';
import { FormattedMessage } from 'react-intl';
import Profile from '../Profile';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavbarText,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from 'reactstrap';

import ThemeChanger from '../ThemeChanger';
import { Link } from 'react-router-dom';
import ThemeContext from '../../Context/ThemeContext';
import CookieContext from '../../Context/CookieContext';
import PageContext from '../../Context/PageContext';
import Login from '../Login';

function Header() {
	const { theme } = useContext(ThemeContext);
	const { selectedPage, setSelectedPage } = useContext(PageContext);
	const {getCookie} = useContext(CookieContext)
	const [modal, setModal] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [isUser, setIsUser] = useState(0);
	const toggle = () => setIsOpen(!isOpen);
	const toggleModal = () => setModal(!modal);
	useEffect(() => {
		const user=getCookie('UserBasicReact')
		if(user)
		 setIsUser(1)
	}, [getCookie])

	return (
		<div>
			<Navbar
				className={`border ${
					theme === 'light' ? 'bg-light' : `border-danger ${styles.bgDark}`
				} border-left-0 border-right-0 border-top-0 `}
				light
				expand="md"
			>
				<Link
					className={`navbar-brand ${theme === 'light' ? 'text-dark' : 'text-white'}`}
					to="/"
					onClick={() => setSelectedPage('')}
				>
					<FormattedMessage id="header.brand" />
				</Link>
				<h4 className={`navbar-brand ${theme === 'light' ? 'text-dark' : 'text-white'}`}>
					{selectedPage}
				</h4>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<Link
								to="/contact-us"
								className={`nav-link ${theme === 'light' ? 'text-dark' : 'text-white'}`}
								style={{ fontSize: '1.25rem' }}
								onClick={() => setSelectedPage(<FormattedMessage id="header.contact" />)}
							>
								{' '}
								<FormattedMessage id="header.contact" />
							</Link>
						</NavItem>
						<NavItem>
							{
								isUser===0?<Button
								className={`btn nav-link bg-transparent border-0 ${
									theme === 'light' ? 'text-dark' : 'text-white'
								}`}
								style={{ fontSize: '1.25rem' }}
								onClick={toggleModal}
							>
								<FormattedMessage id="header.login" />
							</Button>:""
							}
						</NavItem>
						{
						isUser===1?<Profile/> : ""
						}
					</Nav>
					<NavbarText className="ml-4">
						<LanguageChanger />
					</NavbarText>
					<NavbarText className="ml-4">
						<ThemeChanger />
					</NavbarText>
				</Collapse>
			</Navbar>
			<Modal isOpen={modal} toggle={toggleModal}>
				<ModalHeader
					toggle={toggleModal}
					className={`${theme === 'light' ? '' : `${styles.dark}`}`}
				>
					<LanguageChanger />
					<ThemeChanger />
				</ModalHeader>
				<ModalBody className={`${theme === 'light' ? '' : `${styles.dark}`}`}>
					<Login />
				</ModalBody>
				<ModalFooter className={`${theme === 'light' ? '' : `${styles.dark}`}`}>
					<Button color="secondary" onClick={toggleModal}>
						<FormattedMessage id="modal.cancel"/>
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default Header;
