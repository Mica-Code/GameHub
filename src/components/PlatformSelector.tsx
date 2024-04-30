import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = () => {
	const { datas } = usePlatform();
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Platforms
			</MenuButton>
			<MenuList>
				{datas.map((platform) => (
					<MenuItem key={platform.id}>{platform.name}</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;