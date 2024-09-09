import {
	FaFilm,
	FaGlobe,
	FaRegCalendarAlt,
	FaRegClock,
	FaRegStar,
	FaTrophy,
	FaUserAlt,
} from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { useMovie } from "../context/movieContext";

const MovieDetails = () => {
	const { movie } = useMovie();

	if (!movie) {
		return <Navigate to={"/"} />;
	}

	return (
		<div className="p-4 bg-background text-textPrimary max-w-screen-md mx-auto">
			<div className="flex flex-col lg:flex-row items-center lg:items-start">
				<img
					className="w-full lg:w-1/3 rounded-lg"
					src={movie.Poster}
					alt={`${movie.Title} Poster`}
				/>
				<div className="lg:ml-8 mt-4 lg:mt-0 w-full">
					<h1 className="text-3xl font-heading mb-2">{`${movie.Title} (${movie.Year})`}</h1>
					<div className="flex items-center mb-4">
						<span className="bg-secondary text-background text-lg font-bold rounded-full px-3 py-1 mr-2">
							{movie.imdbRating}
						</span>
						<span className="text-textSecondary">{movie.imdbVotes} votes</span>
					</div>
					<p className="mb-4 text-lg">{movie.Plot}</p>
					<div className="grid lg:grid-cols-2 items-start gap-2 text-textPrimary mb-4 ">
						<div className="flex items-start gap-2 ">
							<FaRegClock className="text-lg" /> Runtime: {movie.Runtime}
						</div>
						<div className="flex items-start gap-2 ">
							<FaRegCalendarAlt className="text-lg" /> Released: {movie.Released}
						</div>
						<div className="flex items-start gap-2 ">
							<FaRegStar className="text-lg" /> Genre: {movie.Genre}
						</div>
						<div className="flex items-start gap-2 ">
							<FaUserAlt className="text-lg" /> Director: {movie.Director}
						</div>
						<div className="flex items-start gap-2">
							<FaTrophy className="text-lg" /> Awards: {movie.Awards}
						</div>
						<div className="flex items-start gap-2 ">
							<FaFilm className="text-lg" /> Writer: {movie.Writer}
						</div>
						
					</div>
					<h2 className="text-xl font-heading mb-2">Cast</h2>
					<p>{movie.Actors}</p>
					<div className="mt-4">
						<h2 className="text-xl font-heading mb-2">Country</h2>
						<p>{movie.Country}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
