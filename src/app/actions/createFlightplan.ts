"use server"

import { db } from "@/lib/db"
import { flightplans } from "@/lib/schema"

export type FlightplanInsert = typeof flightplans.$inferInsert

export async function createFlightplan({ data }: { data: FlightplanInsert }) {
  if (Object.keys(data).length === 0) {
    return undefined
  }

  try {
    const res = await db.insert(flightplans).values(data).returning()
    return res
  } catch (error) {
    console.error("Error:", error)
    return undefined
  }
}
