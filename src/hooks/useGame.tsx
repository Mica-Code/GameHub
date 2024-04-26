import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

const useGame = () => {
	interface Games {
		id: number;
		name: string;
	}
	interface FetchGameResponse {
		count: number;
		results: Games[];
	}

	const [games, setGames] = useState<Games[]>([]);
	const [error, setError] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		apiClient
			.get<FetchGameResponse>("/games", { signal: controller.signal })
			.then((res) => setGames(res.data.results))
			.catch((err) => {
				if (err instanceof CanceledError) {
					return;
				} else {
					setError(err.message);
				}
			});

		return () => controller.abort();
	}, []);

	return { games, error };
};

export default useGame;
