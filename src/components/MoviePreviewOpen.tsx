import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { useMovie } from "../context/movieContext";
import Loader from "./Loader";
import Unselected from "./Unselected";
import { Link } from "react-router-dom";

// Shared Tailwind CSS class strings
const cardContainerClasses =
	"flex flex-col bg-textSecondary w-full max-w-screen-sm mx-auto rounded-lg shadow-md overflow-hidden sm:flex-row";
const textMutedClasses = "text-muted-foreground mb-4";

// MoviePoster Component
const MoviePoster = ({ src, alt }: { src: string; alt: string }) => (
	<div className="min-w-44 poster-aspect sm:w-1/3 h-auto sm:h-full object-cover">
		<img src={src} alt={alt} className="w-full h-full object-cover" />
	</div>
);

// MovieDetails Component
const MovieDetails = ({
	title,
	releaseDate,
	rating,
}: {
	title: string;
	releaseDate: string;
	rating: string;
}) => {
	return (
		<div className="p-4 flex flex-col justify-between grow">
			<div>
				<h2 className="text-xl font-bold mb-2">{title}</h2>
				<p className={textMutedClasses}>Release Date: {releaseDate}</p>
				<p className={textMutedClasses}>IMDB Rating: {rating}</p>
			</div>
			<div>
				<Link to="/details">
					<Button >
						See Details
						<FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-400 ease-in-out" />
					</Button>
				</Link>
			</div>
		</div>
	);
};

// Main MovieCard Component
const MovieCard = () => {
	const { movie, loading } = useMovie();
	if (loading) return <Loader />;
	if (!movie) return <Unselected />;
	return (
		<div className={cardContainerClasses}>
			<MoviePoster src={movie?.Poster} alt="Movie Poster" />
			<MovieDetails
				title={movie.Title}
				releaseDate={movie.Released}
				rating={movie.imdbRating}
			/>
		</div>
	);
};

export default MovieCard;
