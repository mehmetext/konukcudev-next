//Components
import PublicationsTemplate from "@/components/templates/PublicationsTemplate";

//Next
import Head from "next/head";

export default function Publications() {
	return (
		<>
			<Head>
				<title>Yayınlar - Mehmet Konukçu</title>
				<meta name="description" content="Yayınlar - Mehmet Konukçu" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PublicationsTemplate />
		</>
	);
}
