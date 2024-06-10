"use server"

import { atcs, columns } from "@/lib/schema"
import { db } from "@/lib/db"

const columnData = [
  { name: "Arrival", order: 0 },
  { name: "Departure", order: 1 },
  { name: "Ground", order: 2 },
  { name: "Airborne", order: 3 },
]

type ATCInsert = typeof atcs.$inferInsert

export async function createATC({ data }: { data: ATCInsert }) {
  if (Object.keys(data).length === 0) {
    return undefined
  }

  try {
    const atcInsert = await db.insert(atcs).values(data).returning()
    await Promise.all(
      columnData.map(async (column) => {
        await db.insert(columns).values({ ...column, atcId: atcInsert[0].id })
      })
    )
    return atcInsert
  } catch (error) {
    console.error(error)
    return undefined
  }
}
