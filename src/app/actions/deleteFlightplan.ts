"use server"

import { db } from "@/lib/db"
import { flightplans } from "@/lib/schema"
import { eq } from "drizzle-orm"

export async function deleteFlightplan({ flightplanId }: { flightplanId: number }) {
  if (!flightplanId) {
    console.log("Missing id")
    return false
  }

  try {
    await db.delete(flightplans).where(eq(flightplans.id, flightplanId))
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
