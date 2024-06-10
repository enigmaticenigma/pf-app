import config from "./src/lib/config"
import { defineConfig } from "drizzle-kit";

let sslmode = "";
if (config.APP_ENV === "prod") {
    sslmode = "?sslmode=require";
}

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/lib/schema.ts",
    dbCredentials: {
        url: config.POSTGRES_URL + sslmode,
    },
})