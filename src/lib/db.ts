import config from "@/lib/config"
import { drizzle } from "drizzle-orm/neon-serverless"
import { Pool } from "@neondatabase/serverless"
import * as schema from "@/lib/schema"

let sslmode = ""
if (config.APP_ENV === "prod") {
  sslmode = "?sslmode=require"
}
export const pool = new Pool({
  connectionString: config.POSTGRES_URL + sslmode,
})

//const client = new Client({
//  connectionString: config.POSTGRES_URL + sslmode,
//})
//await client.connect()

export const db = drizzle<typeof schema>(pool, { logger: true, schema })
