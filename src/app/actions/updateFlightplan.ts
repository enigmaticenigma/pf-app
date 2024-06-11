import { db } from "@/lib/db";
import { flightplans } from "@/lib/schema";
import { Flightplan } from "@/types/flightplan";
import { eq } from "drizzle-orm";

export async function updateFlightplan({ flightplan }: { flightplan: Flightplan }) {
  if (!flightplan.id) {
    console.error("Invalid data")
    return false
  }

  try {
    await db.update(flightplans).set({ ...flightplan }).where(eq(flightplans.id, flightplan.id))
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
