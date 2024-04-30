import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaLinux,
	FaApple,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGame";

interface PlatformIconListProps {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
	//We Annotated the IconMap (i.e :) and said it is going to have an Object (i.e {})
	// in the Object we are going to have any number of string Keys (ie key:string ) using an index signature
	//(i.e [key:string] which represents a key or property in the object) and then each key is mapped to the value of
	//iconType (i.e : iconType - which is gotten from the react-icons module)

	// then we get ( iconMap : { [key:string] : iconType} )

	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		linux: FaLinux,
		apple: FaApple,
		android: FaAndroid,
		phone: MdPhoneIphone,
		nintendo: SiNintendo,
		globe: BsGlobe,
	};

	return (
		<>
			<HStack marginY={2}>
				{platforms.map((platform) => (
					<Icon as={iconMap[platform.slug]} color="gray.500" key={platform.id}/>
				))} 
			</HStack>
		</>
	);
};

export default PlatformIconList;
