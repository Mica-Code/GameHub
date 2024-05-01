import { Image, ImageProps, propNames } from "@chakra-ui/react";
import bullsEye from "../assets/direct-hit.svg"
import neutral from "../assets/neutral.svg"
import thumbsUp from "../assets/thumbs.svg"

interface EmojiProps{
    rating : number;
}

const Emoji = ({rating}: EmojiProps) => {
    if(rating < 3) return null
    const emojiMap: { [key: number]: ImageProps } = {
			3: { src: neutral, alt: "Meh", boxSize: "25px" },
			4: { src: thumbsUp, alt: "Recommend", boxSize: "25px" },
			5: { src: bullsEye, alt: "Exceptional", boxSize: "25px" },
		};
  return (
    <Image {...emojiMap[rating]} marginY={3}/>
  )
}

export default Emoji