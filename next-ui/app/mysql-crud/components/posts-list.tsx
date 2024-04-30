'use client';
import { deletePostById } from "@/app/lib/mysqldb";
import { FaRegTrashCan } from "react-icons/fa6";

export default function PostsList({ posts }: { posts: any[] } ) {

  const handleDelete = async (postId: number) => {
    try {
      const response = await deletePostById(postId);    
    } catch (error) {
      console.error('Error:', error);
    };
  };
  return (
    <main className="bg-white border rounded-md border-2 border-zinc-400 border-solid mt-4 p-4 w-full">
    <h3 className='text-lg font-medium underline decoration-zinc-600 decoration-2 decoration-single pb-2'>Postings</h3>
      <ul>
        {posts.map((post:any) => (
          <li key={post.id} className="p-2 text-left">
            <div className="w-full flex flex-row justify-between gap-x-3 px-2
            border rounded border border-solid border-zinc-500 hover:border-zinc-600
            bg-orange-100 hover:bg-orange-200
            ease-in duration-75 transition-colors
            ">
              <p className="flex-none font-semibold">{post.id}.</p>
              <p className="flex-grow">{post.post}</p>
              <button className="flex-none" onClick={() => handleDelete(post.id)}>
                <FaRegTrashCan className="text-zinc-500 hover:text-zinc-800 ease-in duration-75 transition-colors"/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
