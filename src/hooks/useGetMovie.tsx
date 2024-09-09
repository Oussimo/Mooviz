import Groq from "groq-sdk";
import { AiMovie, Params } from "../types/types";

const apiKey: string = import.meta.env.VITE_GROQ_KEY;
const groq = new Groq({ apiKey, dangerouslyAllowBrowser: true });

const getGroqChatCompletion = async (params: Params, excluded: string[]) => {
	return groq.chat.completions.create({
		messages: [
			{
				role: "system",
				content: `Act as a movie recommendation expert. Given the following details for a movie night suggestion:
Genre: [User-provided genre]
Theme: [User-provided theme]
Category: [User-provided category]
Mood: [User-provided mood]
Duration: [User-provided duration]
Year Range: [User-provided year range]
Audience: [User-provided audience]
Excluded Movies Titles: [User-provided movie titles]
Find a critically acclaimed movie that matches these criteria, excluding the movies titles provided. 
The response should be only a one JSON object without any errors in json Syntax 
containing the movie title and the release year without any explanation or anything,
this is the correct syntax of the json object to return:
{
"title": "Movie Title",
"releaseYear": "Release Year"
}`,
			},
			{
				role: "user",
				content: `genre: ${params.genre}
									category: ${params.category}
									theme: ${params.theme}
									audience: ${params.audience}
									mood: ${params.mood}
									duration: ${params.duration}
									year range: ${params.year}
									excluded: ${excluded.join(", ")}
									`,
			},
		],
		model: "llama-3.1-70b-versatile",
	});
};

const fetchMovie = async (title: string, releaseYear: string) => {
	const response = await fetch(
		`https://www.omdbapi.com/?t=${title}&y=${releaseYear}&apikey=${import.meta.env.VITE_OMDB_KEY}`,
	);
	const data = response.json();
	return data;
};

export const useGetMovie = async (
	params: Params | null,
	excluded: string[],
) => {
	if (!params) {
		return;
	}

	const chatCompletion = await getGroqChatCompletion(params, excluded);
	if (chatCompletion.choices[0].message.content) {
		const response: AiMovie = JSON.parse(
			chatCompletion.choices[0]?.message?.content,
		);
		if (!response.title || !response.releaseYear) {
			throw new Error("Invalid response from Groq API");
		}
		const movie = await fetchMovie(response.title, response.releaseYear);
		return movie;
	}
};
