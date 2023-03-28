//Components
import HomeTemplate from "@/components/templates/HomeTemplate";

//Next
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Mehmet Konukçu - Personal Website</title>
				<meta name="description" content="Mehmet Konukçu - Personal Website" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomeTemplate />
		</>
	);
}
