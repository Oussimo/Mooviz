import { useMovie } from "../context/movieContext";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

const MoviePreview = () => {
	const { movie, loading } = useMovie();

	return (
		<div className="bg-textSecondary w-full rounded flex flex-col gap-2 items-center p-2 sm:flex-row sm:items-stretch">
			<div className="min-w-40 h-64 flex justify-center ">
				<img
					className=" w-full h-full object-cover rounded"
					src={movie?.Poster}
				/>
			</div>
			<div className=" grow w-full p-2 justify-center flex flex-col justify-between ">
				<h1 className="text-2xl font-bold mb-4 ">
					{loading ? "loading..." : movie?.Title}
				</h1>
				<Button>
					Details
					<FaArrowRight className="transform group-hover:translate-x-2 transition-transform duration-400 easi-in-out" />
				</Button>
			</div>
		</div>
	);
};

export default MoviePreview;
