// convex/getPosts.ts
import { query } from './_generated/server'
import { Document } from './_generated/dataModel'

export default query(async ({ db }): Promise<Document<'posts'>[]> => {
  return await db.table('posts').collect()
})
