// The entire PostsPage is actaully a server component that fetches the data on the server and then passes the data 
// to the PostsList component which is a client component to improve performance
"use server";

import { Suspense } from "react";
import PostsList from "./components/posts-list";
import AddPostForm from "./components/add-posts-form";

export default async function PostsPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // forces web page to act like data is loading so loading screen displays


  const response = await fetch(`https://dummyjson.com/posts?limit=3`);
  const data = await response.json();
  // console.log(data);
  
  return (
    <main className="text-center pt-16 px-5">
      <AddPostForm />
      <h1 className="text-5xl font-semibold mb-7">
        All Posts
      </h1>
      <PostsList posts={data.posts} />
    </main>
  )
}
