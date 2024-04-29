import { Badge, Text } from "@chakra-ui/react"

interface CriticScoreProps {
	score:number
}

const CriticScore = ({score} : CriticScoreProps) => {
    const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
		<Badge fontSize='14px' paddingX={2} colorScheme={color} borderRadius={5}>
			<Text>{score}</Text>
		</Badge>
	);
}

export default CriticScore