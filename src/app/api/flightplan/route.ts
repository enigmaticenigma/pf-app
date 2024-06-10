import { db } from "@/lib/db";
import { flightplans } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const searchId = req.nextUrl.searchParams.get("flightplanId")
	if (!searchId) { return NextResponse.json({ error: "Invalid data" }, { status: 400 }) }
	const id = parseInt(searchId)

	const data = await db.query.flightplans.findFirst({
		where: eq(flightplans.id, id),
	})

	return NextResponse.json(data, { status: 200 })
}
