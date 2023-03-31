//Next
import NotFoundTemplate from "@/components/templates/NotFoundTemplate";
import Head from "next/head";

export default function NotFound() {
	return (
		<>
			<Head>
				<title>Oops! - Mehmet Konukçu</title>
				<meta
					name="description"
					content="Yayınlar - Mehmet Konukçu - Personal Website"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NotFoundTemplate />
		</>
	);
}
