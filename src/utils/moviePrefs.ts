import { TMoviePreferences } from "../types/types";

export const moviePreferences: TMoviePreferences = [
	{
		label: "genre",
		list: [
			"",
			"Action",
			"Adventure",
			"Comedy",
			"Crime",
			"Drama",
			"Fantasy",
			"Historical",
			"Horror",
			"Mystery",
			"Romance",
			"Science Fiction",
			"Thriller",
			"Western",
			"Documentary",
			"Animation",
			"Biographical",
		],
	},
	{
		label: "category",
		list: [
			"",
			"Feature Film",
			"Classic",
			"Blockbuster",
			"Indie",
			"Short Film",
			"Mini-Series",
			"Series",
			"Cult Film",
			"Documentary",
			"Animated Feature",
		],
	},
	{
		label: "theme",
		list: [
			"",
			"Love",
			"Friendship",
			"Betrayal",
			"Courage",
			"Survival",
			"Revenge",
			"Good vs Evil",
			"Coming of Age",
			"Adventure",
			"Mystery",
			"Justice",
			"Redemption",
			"Family",
			"War",
			"Freedom",
			"Identity",
		],
	},
	{
		label: "audience",
		list: ["", "Kids", "Adults", "Families", "General Audience"],
	},
	{
		label: "mood",
		list: [
			"",
			"Happy",
			"Sad",
			"Exciting",
			"Tense",
			"Scary",
			"Inspiring",
			"Relaxing",
			"Funny",
			"Romantic",
			"Dark",
			"Melancholic",
			"Uplifting",
			"Suspenseful",
			"Heartwarming",
			"Thrilling",
		],
	},

	{
		label: "duration",
		list: [
			"",
			"Less than 30 minutes",
			"30 to 60 minutes",
			"60 to 90 minutes",
			"90 to 120 minutes",
			"120 to 150 minutes",
			"More than 150 minutes",
		],
	},
	{
		label: "year",
		list: [
			"",
			"1960-1969",
			"1970-1979",
			"1980-1989",
			"1990-1999",
			"2000-2009",
			"2010-2019",
			"2020-now",
		],
	},
];
