//Components
import ReferencesTemplate from "@/components/templates/ReferencesTemplate";

//Next
import Head from "next/head";

export default function References() {
	return (
		<>
			<Head>
				<title>Referanslar - Mehmet Konukçu</title>
				<meta name="description" content="Referanslar - Mehmet Konukçu" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ReferencesTemplate />
		</>
	);
}
