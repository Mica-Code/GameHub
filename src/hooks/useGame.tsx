import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatform";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGame = (gameQuery: GameQuery) =>
	useData<Game>(
		"/games",
		{
			params: {
				genres: gameQuery.genre?.id,
				parent_platforms: gameQuery.platform?.id,
				ordering: gameQuery.order?.slug,
				search: gameQuery.search,
			},
		},
		[gameQuery]
	);
export default useGame;
