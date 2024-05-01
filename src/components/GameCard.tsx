import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import noImage from "../assets/no-image.png";

interface GameCardProps {
	game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
	return (
		<Card>
			<Image
				src={
					game.background_image
						? getCroppedImageUrl(game.background_image)
						: noImage
				}
			/>
			<CardBody>
				<HStack justifyContent="space-between" marginBottom={3}>
					<PlatformIconList
						platforms={game.parent_platforms.map(({ platform }) => platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading fontSize="2xl">{game.name}</Heading>
			</CardBody>
		</Card>
	);
};

export default GameCard;
