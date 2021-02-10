import { useEffect, useContext, useState } from 'react';
import styles from './styles.module.css';
import ThemeContext from '../../Context/ThemeContext';
import Switch from '../../../node_modules/@material-ui/core/Switch/Switch';
function ThemeChanger() {
	const { theme, setTheme } = useContext(ThemeContext);
	const [changerTheme, setChangerTheme] = useState({
		checkedA: false,
	});
	useEffect(() => {
		setChangerTheme({ checkedA: theme === 'light' ? false : true });
	}, [theme]);

	
	const handleChange = (event) => {
		setTheme(theme === 'light' ? 'dark' : 'light');
		setChangerTheme({ ...changerTheme, [event.target.name]: event.target.checked });
	};

	return (
		<div className="row">
			<div className="col-12 d-flex justify-content-between align-items-center">
				<div className="form-group">
					<label className={`${theme==="light"?"text-dark":"text-white"}`} >{theme === 'light' ? 'Açık Tema' : 'Koyu Tema'}</label>
					<Switch
						checked={changerTheme.checkedA}
						onChange={handleChange}
						name="checkedA"
						inputProps={{ 'aria-label': 'secondary checkbox' }}
					/>
				</div>
			</div>
		</div>
	);
}

export default ThemeChanger;