import {
	Button,
	Card,
	CardBody,
	HStack,
	Image,
	List,
	ListItem,
	Skeleton,
	SkeletonCircle,
	SkeletonText,
	Spinner,
	Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";
import { GenreSkeleton } from "./GenreSkeleton";

interface GenreListProps {
    selectedGenre : (selectedGenre : Genre) => void;
}

const GenreList = ({selectedGenre} : GenreListProps) => {
	const { datas, error, isLoading } = useGenre();

	return (
		<>
			{error && null}
			{/* {isLoading && <Spinner/>} Adding Spinner instead of skeleton */}
			{isLoading && <GenreSkeleton />}
			<List>
				{datas.map((genre) => (
					<ListItem key={genre.id} paddingY={2}>
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button fontSize="xl" variant={"link"} onClick={()=> selectedGenre(genre)}>
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
