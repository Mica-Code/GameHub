import useData from "./useData";
import { Platform } from "./usePlatform";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

const useGame = (getSelectedGenreId?: number, getSelectedPlatformId?: number) =>
	useData<Game>(
		"/games",
		{
			params: {
				genres: getSelectedGenreId,
				parent_platforms: getSelectedPlatformId,
			},
		},
		[getSelectedGenreId, getSelectedPlatformId]
	);
export default useGame;
