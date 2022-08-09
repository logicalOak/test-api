const Movie = (props) => {
	const { Title: title, Year: year, imdbID: id, Type: type, Poster: poster } = props;

	return (
		<div id={id} className=''>
			<div className=''>
				<img className='' src={poster} />
			</div>
			<div className=''>
				<span className=''>{title}</span>
				<p>
					{year}
					<span className=''>{type}</span>
				</p>
			</div>
		</div>
	);
};

export default Movie;
