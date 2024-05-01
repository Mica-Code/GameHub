import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
	onSelectSort: (sortOrder: SortOrder) => void;
	selectedSortOrder: SortOrder | null;
}

export interface SortOrder {
	name: string;
	slug: string;
}

const sortOrder = [
	{ name: "Revelance", slug: "" },
	{ name: "Date Added", slug: "-added" },
	{ name: "Name", slug: "-name" },
	{ name: "Realease Date", slug: "-released" },
	{ name: "Popularity", slug: "-metacritic" },
	{ name: "Average Rating", slug: "-rating" },
];

const SortSelector = ({
	onSelectSort,
	selectedSortOrder,
}: SortSelectorProps) => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: {selectedSortOrder ? selectedSortOrder.name : "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrder.map((order) => (
					<MenuItem onClick={() => onSelectSort(order)} key={order.slug}>
						{order.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
