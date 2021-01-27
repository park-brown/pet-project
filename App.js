import React, { useState, useEffect } from 'react';
import { CardList } from './component/CardList/CardList';
import { SearchBox } from './component/SearchBox/SearchBox';
import './APP.styles.css';

function App() {
	const [monsters, setMonsters] = useState([]);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
			response.json().then((user) => setMonsters(user), []),
		);
	});
	const onSearchFieldChange = (e) => {
		setSearchField(e.target.value);
	};
	const filteredMonster = monsters.filter((monster) =>
		monster.name.includes(searchField.toLowerCase()),
	);
	return (
		<div className='App'>
			<h1>MONSTER ROLODEX</h1>
			<SearchBox
				placeholder='search monsters'
				value={searchField}
				onChange={onSearchFieldChange}
			/>
			<CardList monsters={filteredMonster}></CardList>
		</div>
	);
}

export default App;
