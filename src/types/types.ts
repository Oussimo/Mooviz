export type Params = {
	genre: string;
	category: string;
	theme: string;
	audience: string;
	mood: string;
	year: string;
	duration: string;
};

export type Name =
	| "genre"
	| "duration"
	| "year"
	| "category"
	| "mood"
	| "theme"
	| "audience";

export type TMoviePreferences = {
	label: Name;
	list: string[];
}[];

export type AiMovie = {
	title: string;
	releaseYear: string;
};

// export type TMovie = {
// 	Title: string;
// 	Poster: string;
// 	Released: string;
// 	imdbRating: string;
// }
export type TMovie = {
	Title: string;
	Year: string;
	Rated: string;
	Released: string;
	Runtime: string;
	Genre: string;
	Director: string;
	Writer: string;
	Actors: string;
	Plot: string;
	Language: string;
	Country: string;
	Awards: string;
	Poster: string;
	imdbRating: string;
	imdbVotes: string;
	Metascore: string;
};
