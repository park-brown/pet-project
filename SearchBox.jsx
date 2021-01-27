import React from 'react';
import './SearchBox.style.css';

export const SearchBox = (props) => {
	return (
		<div className='search'>
			<input
				// className='search'
				type='search'
				placeholder={props.placeholder}
				value={props.searchField}
				onChange={props.onSearchFieldChange}
			/>
		</div>
	);
};
