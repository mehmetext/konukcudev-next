//Next
import NotFoundTemplate from "@/components/templates/NotFoundTemplate";
import Head from "next/head";

export default function NotFound() {
	return (
		<>
			<Head>
				<title>Oops! - Mehmet Konukçu</title>
				<meta name="description" content="404 - Mehmet Konukçu" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NotFoundTemplate />
		</>
	);
}
