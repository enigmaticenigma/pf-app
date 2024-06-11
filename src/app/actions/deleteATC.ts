"use server"

import { db } from "@/lib/db"
import { atcs } from "@/lib/schema"
import { eq } from "drizzle-orm"

export async function deleteATC({ atcId }: { atcId: number }) {
  if (!atcId) {
    console.error("Invalid data")
    return false
  }

  try {
    await db.delete(atcs).where(eq(atcs.id, atcId))
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

