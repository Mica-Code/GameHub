import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import { GenreSkeleton } from "./GenreSkeleton";

interface GenreListProps {
	onSelectedGenre: (selectedGenre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: GenreListProps) => {
	const { datas, error, isLoading } = useGenre();

	return (
		<>
			{error && null}
			{/* {isLoading && <Spinner/>} Adding Spinner instead of skeleton */}
			{isLoading && <GenreSkeleton />}

            <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
			<List>
				{datas.map((genre) => (
					<ListItem key={genre.id} paddingY={2}>
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
                                objectFit={'cover'}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
								fontSize="xl"
								variant={"link"}
                                whiteSpace={'normal'}
                                textAlign={'left'}
								onClick={() => onSelectedGenre(genre)}>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
