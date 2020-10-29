const { Grid, Typography, Box, makeStyles } = require("@material-ui/core");
// const gFont = [roboto, monserrat, oswald];
import { fontList } from "./fontList";

const styles = makeStyles({
	roboto: "font-family: 'Roboto', sans-serif",
	monserrat: "font-family: 'Montserrat', sans-serif",
	oswald: "font-family: 'Oswald', sans-serif",
});

function FontBox(props) {
	return (
		<>
			<style>
				@import
				url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Oswald:wght@500&family=Roboto:wght@500&display=swap');
			</style>

			<pre>{JSON.stringify(fontList)}</pre>
			<Grid container spacing={3}>
				{fontList.map((data, index) => (
					<Grid item lg={3} sm={6} xs={12}>
						<Box key={index}>
							<Typography style={{ fontFamily: data.fontFamily }}>
								{props.name}
							</Typography>
						</Box>
					</Grid>
				))}
			</Grid>
		</>
	);
}

export default FontBox;
