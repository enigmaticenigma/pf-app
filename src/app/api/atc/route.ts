import {NextRequest, NextResponse} from "next/server";
import {db} from "@/lib/db";
import {eq} from "drizzle-orm";
import {atcs} from "@/lib/schema";

export async function GET(req: NextRequest) {
    const reqId = req.nextUrl.searchParams.get("atcId");
    if (!reqId) return NextResponse.json({ error: "ATC ID is required"}, { status: 400 })
    const atcId = parseFloat(reqId)

    const data = await db.query.atcs.findFirst({
        where: eq(atcs.id, atcId),
        with: {
            columns: {
                with: {
                    flightplans: true,
                }
            }
        }
    })

    return NextResponse.json({ data }, { status: 200})
}