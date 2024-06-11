import {
  doublePrecision,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const atcs = pgTable("atc", {
  id: serial("id").primaryKey(),
  airport: text("airport").notNull(),
  towerPosition: text("tower_position").notNull(),
  frequency: doublePrecision("frequency").notNull(),
});

export const columns = pgTable("columns", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  order: integer("order").notNull(),
  atcId: integer("atc_id"),
});

export const flightplans = pgTable("flight_plan", {
  id: serial("id").primaryKey(),
  arrival: text("arrival").notNull(),
  departure: text("departure").notNull(),
  departureTime: integer("departure_time").notNull(),
  callsign: text("callsign").notNull(),
  aircraftType: text("aircraft_type").notNull(),
  flightRule: text("flight_rules").notNull(),
  flightType: text("flight_type").notNull(),
  wakeCategory: text("wake_category").notNull(),
  cruisingSpeed: integer("cruising_speed").notNull(),
  cruisingLevel: integer("cruising_level").notNull(),
  route: text("route").notNull(),
  enRouteTime: integer("en_route_time").notNull(),
  remarks: text("remarks").notNull(),
  frequency: doublePrecision("frequency").notNull(),
  squawk: integer("squawk").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  columnId: integer("column_id").default(-1),
  order: integer("order").notNull().default(-1),
});

export const flightplansRelations = relations(flightplans, ({ one }) => ({
  column: one(columns, {
    fields: [flightplans.columnId],
    references: [columns.id],
  }),
}));

export const columnsRelations = relations(columns, ({ one, many }) => ({
  atc: one(atcs, {
    fields: [columns.atcId],
    references: [atcs.id],
  }),
  flightplans: many(flightplans),

}));

export const atcRelations = relations(atcs, ({ many }) => ({
  columns: many(columns),
}));

