import { char, pgTable, text, timestamp, uuid, numeric } from "drizzle-orm/pg-core";

export const transactionsTable = pgTable("transactions", {
  id: uuid("id").primaryKey().defaultRandom(), 

  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).notNull(),

  systemCreatedAt: timestamp("system_created_at", {
    withTimezone: true,
  }).notNull().defaultNow(),

  currencyCode: char("currency_code", {
    length: 3,
  }).notNull(),

  note: text(),

  amount: numeric({precision: 12, scale: 2}),

  createdBy: uuid("created_by").notNull(),

  categoryId: uuid("category_id").notNull(),

  workspaceId: uuid("workspace_id").notNull(),
});