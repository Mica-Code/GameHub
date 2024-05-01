import { SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface GameGridProps {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
	const { datas, error, isLoading } = useGame(gameQuery);

	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && ""}
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} padding="10px">
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{datas.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
