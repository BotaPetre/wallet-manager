import { char, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

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

  createdBy: uuid("created_by").notNull(),

  categoryId: uuid("category_id").notNull(),

  workspaceId: uuid("workspace_id").notNull(),
});