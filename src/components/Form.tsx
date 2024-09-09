import FormField from "./FormField";
import { moviePreferences } from "../utils/moviePrefs";
import Button from "./Button";
import { useMovie } from "../context/movieContext";
import { useGetMovie } from "../hooks/useGetMovie";

const Form = () => {
	const {
		setMovie,
		excluded,
		setExcluded,
		loading,
		setLoading,
		params,
		setParams,
	} = useMovie();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		window.scrollTo({
			top: 0,
		});
		try {
			const fetchedMovie = await useGetMovie(params, excluded);
			console.log(fetchedMovie);
			setMovie(fetchedMovie);
			setExcluded((prev) => [...prev, fetchedMovie?.Title]);
			setLoading(false);
		} catch (error) {
			alert("an error occured");
			setLoading(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full max-w-screen-sm m-auto grid sm:gird-cols-2 gap-4 mt-4"
		>
			{moviePreferences.map((obj, i) => (
				<FormField
					key={i}
					name={obj.label}
					preferance={obj.list}
					params={params}
					onChange={setParams}
				/>
			))}
			<div className="col-start-1 mt-2 sm:col-span-2">
				<Button disabled={loading}>Submit</Button>
			</div>
		</form>
	);
};

export default Form;
