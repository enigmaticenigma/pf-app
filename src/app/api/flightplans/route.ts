import {NextRequest, NextResponse} from "next/server";
import {db} from "@/lib/db";
import {eq} from "drizzle-orm";
import {flightplans} from "@/lib/schema";

export async function GET(req: NextRequest) {
    const searchFrequency = req.nextUrl.searchParams.get("freq");
    if (!searchFrequency) return NextResponse.json({ error: "Frequency is required"}, { status: 400 })
    const frequency = parseFloat(searchFrequency)

    const data = await db.query.flightplans.findMany({
        where: eq(flightplans.frequency, frequency)
    })

    return NextResponse.json(data, { status: 200 })
}