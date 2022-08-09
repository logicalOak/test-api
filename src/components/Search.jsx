import React, { useState } from 'react';

const fakeApi = () => console.log('Api is called');
const Search = (props) => {
	const [timer, setTimer] = useState(null);
	const { searchMovies = Function.propotype } = props;

	const [search, setSearch] = useState('');
	const [type, setType] = useState('all');

	const handleKey = (e) => {
		if (e.key === 'Enter') {
			searchMovies(search, type);
		}
	};

	const inputChanged = (e) => {
		setSearch(e.target.value);

		clearTimeout(timer);

		const newTimer = setTimeout(() => {
			fakeApi();
			searchMovies(search, type);
		}, 500);

		setTimer(newTimer);
	};

	const handleFilter = (e) => {
		setType(e.target.dataset.type);
		searchMovies(search, e.target.dataset.type);
	};
	return (
		<div className=''>
			<div className=''>
				<div className=''>
					<input
						type='search'
						className='validate'
						placeholder='search'
						value={search}
						onChange={inputChanged}
						onKeyDown={handleKey}
					/>
					<button className='' onClick={() => searchMovies(search, type)}>
						Search
					</button>
				</div>
				<div>
					<label className=''>
						<input
							className=''
							name='type'
							type='radio'
							data-type='all'
							onChange={handleFilter}
							checked={type === 'all'}
						/>
						<span>All</span>
					</label>
					<label className=''>
						<input
							className=''
							name='type'
							type='radio'
							data-type='movie'
							onChange={handleFilter}
							checked={type === 'movie'}
						/>
						<span>Movies</span>
					</label>
					<label className=''>
						<input
							className=''
							name='type'
							type='radio'
							data-type='series'
							onChange={handleFilter}
							checked={type === 'series'}
						/>
						<span>Series</span>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Search;
