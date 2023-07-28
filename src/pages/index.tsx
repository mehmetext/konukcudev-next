//Components
import HomeTemplate from "@/components/templates/HomeTemplate";

//Next
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Mehmet Konukçu</title>
				<meta name="description" content="Mehmet Konukçu" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomeTemplate />
		</>
	);
}
