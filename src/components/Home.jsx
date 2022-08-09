import { useEffect, useState } from 'react';
import Movies from './Movies';
import Preloader from './Preloader';
import Search from './Search';

const url = ' https://www.omdbapi.com/?i=tt3896198&apikey=99076e93';

const Home = () => {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);

	const searchMovies = (str, type = 'all') => {
		fetch(`${url}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.Search);
				setLoading(false);
			});
	};

	useEffect(() => {
		fetch(`${url}&s=matrix`)
			.then((response) => response.json())
			.then((data) => {
				setMovies(data.Search);
				setLoading(false);
				console.log(data);
			});
	}, []);

	return (
		<div className='max-w-4xl m-auto grid gap-[20px]'>
			<Search searchMovies={searchMovies} />
			{!loading ? <Movies movies={movies} /> : <Preloader />}
		</div>
	);
};

export default Home;
