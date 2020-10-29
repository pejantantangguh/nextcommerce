import { createMuiTheme } from "@material-ui/core/styles";
import brown from "@material-ui/core/colors/brown";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: brown[800],
		},
	},
});

const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
	},
});

export default theme;
