"use server"

import { db } from "@/lib/db"
import { Column } from "@/types/atc"
import { columns } from "@/lib/schema"
import { eq } from "drizzle-orm"

export async function updateListOrder({
  atcId,
  items,
}: {
  atcId: number
  items: Column[]
}): Promise<boolean> {
  if (!atcId || !items.length) {
    throw new Error("Invalid data.")
  }

  try {
    await Promise.all(
      items.map(
        async (column) =>
          await db
            .update(columns)
            .set({ order: column.order })
            .where(eq(columns.id, column.id))
      )
    )
  } catch (error) {
    console.error("Error:", error)
    return false
  }
  return true
}
