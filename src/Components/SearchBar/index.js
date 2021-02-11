import { useState, useEffect } from 'react';
import styles from './styles.module.css';
function SearchBar({ setSelectedCountry, data }) {
	const [search, setSearch] = useState('');
	const [filterCountry, setFilterCountry] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			setFilterCountry(
				data.filter((country) => {
					return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
				}),
			);
		};
		fetchData();
		if (filterCountry.length > 0) {
			if (filterCountry.length < 2 && search === filterCountry[0].name) {
				setSelectedCountry(filterCountry[0].id);
			}
		}
	}, [search]);
	const handleChange = (e) => {
		setSearch(e.target.value);
	};

 const handleClick = (country) => {
	setSelectedCountry(country.id)
	setFilterCountry([]);
 }
	return (
		<div className="form-group">
			<input className="form-control" onChange={handleChange} />
			{filterCountry.length < 200 ? (
				<ul id="countrys" className="list-group list-group-flush">
					{filterCountry.map((country) => (
						<li
							className={`list-group-item ${styles.listItem}`}
							onClick={()=>handleClick(country)}
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
