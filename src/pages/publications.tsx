//Components
import PublicationsTemplate from "@/components/templates/PublicationsTemplate";

//Next
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Yayınlar - Mehmet Konukçu</title>
				<meta
					name="description"
					content="Yayınlar - Mehmet Konukçu - Personal Website"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PublicationsTemplate />
		</>
	);
}
