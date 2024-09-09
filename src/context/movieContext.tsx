import { createContext, useContext, useState } from "react";
import { Params, TMovie } from "../types/types";

type TMovieContext = {
	movie: TMovie | null;
	setMovie: React.Dispatch<React.SetStateAction<TMovie | null>>;
	excluded: string[];
	setExcluded: React.Dispatch<React.SetStateAction<string[]>>;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	params: Params;
	setParams: React.Dispatch<React.SetStateAction<Params>>;
};

const context = createContext<TMovieContext | undefined>(undefined);

type TMovieProviderProps = {
	children: React.ReactNode;
};

export const MovieProvider = ({ children }: TMovieProviderProps) => {
	const [movie, setMovie] = useState<TMovie | null>(null);
	const [excluded, setExcluded] = useState<string[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [params, setParams] = useState<Params>({
		genre: "",
		category: "",
		theme: "",
		audience: "",
		mood: "",
		year: "",
		duration: "",
	});

	return (
		<context.Provider
			value={{
				movie,
				setMovie,
				excluded,
				setExcluded,
				loading,
				setLoading,
				params,
				setParams,
			}}
		>
			{children}
		</context.Provider>
	);
};

export const useMovie = () => {
	const movieContext = useContext(context);
	if (movieContext === undefined) {
		throw new Error("useMovie must be used within a MovieProvider");
	}
	return movieContext;
};
