// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json({
		str1: "Gizli bölgeye hoş geldin dostum.",
		str2: "Yalnız, burada sana göre bi' şey yok :)",
	});
}
