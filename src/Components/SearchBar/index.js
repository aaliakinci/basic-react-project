import { useState, useEffect, useContext } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import styles from './styles.module.css';
function SearchBar({ setSelectedCountry, data, setData, contactData }) {
	const [search, setSearch] = useState('');
	const [filterCountry, setFilterCountry] = useState([]);
	const { theme } = useContext(ThemeContext);

	const changeFilter = () => {
		if (filterCountry.length > 0) {
			if (filterCountry.length < 2 && search === filterCountry[0].name) {
				setSelectedCountry(filterCountry[0].id);
				setData({ ...contactData, country: filterCountry[0].id });
				setFilterCountry([]);
			}
		}
	}
	const fetchData = async () => {
		setFilterCountry(
			data.filter((country) => {
				return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
			}),
		);
	};
	useEffect(() => {
		fetchData();
		changeFilter();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);
	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const handleClick = (country) => {
		setSelectedCountry(country.id);
		setData({ ...contactData, country: country.id });
		const search = document.getElementById('search');
		search.value = country.name;
		setFilterCountry([]);
	};
	return (
		<div className="form-group">
			<input id="search" autoComplete="off" className="form-control" onChange={handleChange} />
			{filterCountry.length < 200 ? (
				<ul id="countrys" className="list-group list-group-flush">
					{filterCountry.map((country) => (
						<li
							className={`list-group-item ${
								theme === 'light'
									? ''
									: 'text-white bg-transparent border border-top-0 border-left-0 border right-0'
							} ${styles.listItem}`}
							onClick={() => handleClick(country)}
							key={country.id}
						>
							{country.name}
						</li>
					))}
				</ul>
			) : (
				''
			)}
		</div>
	);
}

export default SearchBar;
