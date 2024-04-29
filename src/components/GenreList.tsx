import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const { datas, error } = useGenre();
	return (
		<>
			{error && <Text>{error}</Text>}
			<List>
				{datas.map((genre) => (
					<ListItem key={genre.id} paddingY={2}>
						<HStack>
                            <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                            <Text fontSize='xl'>{genre.name}</Text>
                        </HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
