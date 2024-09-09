import Form from "./components/Form";
import MovieCard from "./components/MoviePreviewOpen";

const Home = () => {
	return (
		<>
			<h1 className="text-[64px] font-bold mb-2 text-center text-primary">
				Mooviz
			</h1>
			<MovieCard />
			<Form />
		</>
	);
};

export default Home;
