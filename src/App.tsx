import { Box, Grid, GridItem, Hide, Show } from "@chakra-ui/react";

function App() {
	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" "main"`,
					lg: `"nav nav" "aside main"`,
				}}>
				<GridItem area={"nav"} bg={"coral"}>
					NavBar
				</GridItem>
				<Show above="lg">
					<GridItem area={"aside"} bg={"green"}>
						Aside
					</GridItem>
				</Show>
				<GridItem area={"main"} bg={"blue"}>
					Main
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
