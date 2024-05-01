import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platform } from "../hooks/usePlatform";

interface PlatformSelectorProps{
    onSelectPlaform: (platform:Platform) => void;
    selectedPlaform: Platform | null;
}

const PlatformSelector = ({
	onSelectPlaform,
	selectedPlaform,
}: PlatformSelectorProps) => {
	const { datas } = usePlatform();
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlaform ? selectedPlaform.name : "Platforms"}
			</MenuButton>
			<MenuList>
				{datas.map((platform) => (
					<MenuItem onClick={() => onSelectPlaform(platform)} key={platform.id}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
