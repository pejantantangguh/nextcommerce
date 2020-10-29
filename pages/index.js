import { Container, Typography } from "@material-ui/core";
import Head from "next/head";
import TextBox from "../component/TextBox";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Container>
				<TextBox />
			</Container>
		</div>
	);
}
