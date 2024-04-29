import { Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
	const { datas, error } = useGenre();
	return (
		<>
        {error && <Text>{error}</Text>}
			<ul>
				{datas.map((genre) => (
					<li key={genre.id}>{genre.name}</li>
				))}
			</ul>
		</>
	);
};

export default GenreList;
