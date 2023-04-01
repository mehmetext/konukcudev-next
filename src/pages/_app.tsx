//Styles
import "@/styles/globals.css";

//Next
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
