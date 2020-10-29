import { Box, TextField, Typography } from "@material-ui/core";
import react, { Component } from "react";
import FontBox from "./FontBox";

class TextBox extends Component {
	constructor() {
		super();
		this.state = { value: "" };
	}
	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};
	render() {
		return (
			<>
				<TextField
					id="yourText"
					label="Type here please"
					defaultValue={this.state.value}
					onChange={this.handleChange}
					fullWidth
					required
				/>
				<Box my={3}>
					<FontBox name={this.state.value} />
				</Box>
			</>
		);
	}
}

export default TextBox;
