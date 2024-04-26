import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "5cbcb4addd7c409e8040db102bc5276a",
	},
});
