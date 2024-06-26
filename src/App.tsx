import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector, { SortOrder } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	order: SortOrder | null;
	search: string | null;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}>
				<GridItem area={"nav"}>
					<NavBar
						onSearch={(search) => setGameQuery({ ...gameQuery, search })}
					/>
				</GridItem>
				<Show above="lg">
					<GridItem area={"aside"} paddingX={5}>
						<GenreList
							selectedGenre={gameQuery.genre}
							onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
						/>
					</GridItem>
				</Show>
				<GridItem area={"main"}>
					<Box paddingLeft={2}>
						<GameHeading gameQuery={gameQuery}/>
						<HStack paddingBottom={5} spacing={5}>
							<PlatformSelector
								selectedPlaform={gameQuery.platform}
								onSelectPlaform={(platform) =>
									setGameQuery({ ...gameQuery, platform })
								}
							/>
							<SortSelector
								selectedSortOrder={gameQuery.order}
								onSelectSort={(order) => setGameQuery({ ...gameQuery, order })}
							/>
						</HStack>
					</Box>
					<GameGrid gameQuery={gameQuery} />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
