// convex/addPost.ts
import { mutation } from './_generated/server'

export default mutation(
    async (
        { db, auth },
        post: { author: string; body: string; title: string }
    ) => {
      const identity = await auth.getUserIdentity()
      if (!identity) {
        throw new Error('Called addPosts without authentication present!')
      }
      await db.insert('posts', post)
    }
)
