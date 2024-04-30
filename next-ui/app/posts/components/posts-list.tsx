'use client';

export default function PostsList({ posts }: { posts: any[] } ) {  
  console.log(posts);
  return (
    <>
      <ul>
        {posts.map((post:any) => (
          <li key={post.id} className="p-8 text-left">
            <h2 className="text-2xl font-semibold pb-3">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
