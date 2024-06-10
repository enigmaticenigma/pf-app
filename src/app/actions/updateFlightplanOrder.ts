"use server"

import { Flightplan } from "@/types/flightplan"
import { db } from "@/lib/db"
import { flightplans } from "@/lib/schema"
import { eq } from "drizzle-orm"

export async function updateFlightplanOrder({
  atcId,
  items,
}: {
  atcId: number
  items: Flightplan[]
}) {
  if (!atcId || !items.length) {
    throw new Error("Invalid data")
  }

  try {
    await Promise.all(
      items.map(async (flightplan) =>
        db
          .update(flightplans)
          .set({
            order: flightplan.order,
            columnId: flightplan.columnId,
          })
          .where(eq(flightplans.id, flightplan.id))
      )
    )
  } catch (error) {
    console.error("Error:", error)
    return false
  }

  return true
}
