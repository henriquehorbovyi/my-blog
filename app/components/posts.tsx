import Link from 'next/link'
import { formatDate, getBlogPosts } from '../blog/utils'

function EmptyState() {
  return (
    <p className='p-8 w-full text-center text-stone-400 dark:text-stone-400 '>No posts yet 🤖!!</p>
  )
}

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  if (allBlogs.length == 0) { return <EmptyState></EmptyState> } else { 
    return (
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1
            }
            return 1
          })
          .map((post) => (
            (
              <Link
                key={post.slug}
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                  <p className="text-stone-500 dark:text-stone-400 w-[100px] tabular-nums">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                  <p className="text-stone-800 dark:text-stone-300 tracking-tight">
                    {post.metadata.title}
                  </p>
                </div>
              </Link>
            )
          ))}
      </div>
    )
  }
}