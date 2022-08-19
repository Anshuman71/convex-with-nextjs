// convex/schema.ts
import { defineSchema, defineTable, s } from 'convex/schema'

export default defineSchema({
  posts: defineTable({
    title: s.string(),
    author: s.string(),
    body: s.string(),
  }),
})
