// The entire PostsPage is actaully a server component that fetches the data on the server and then passes the data 
// to the PostsList component which is a client component to improve performance
'use server';

import { getAllAiPosts, getContributorImages, getLatest10AiPosts } from "../lib/mysqldb";
import { AiPost, NumberStringMap } from "../types/types";
import Card from "./components/card";
import { Button } from "@/components/ui/button"

export default async function PostsPage() {
  // const [viewCount, setViewCount] = useState(5);
  // const posts = await getAllAiPosts();
  const posts = await getLatest10AiPosts();

  let count: number = 5;
  
  // console.log(posts);
  
  // const profileImageSources: Promise<any> = await getContributorImages();
  const upClick = () => {
    // setViewCount(previousValue => previousValue + 5);
    count += 5;
    console.log(count);
    
  }
  
  return (
    <main  className="w-full text-center">
        <Card posts={posts} />

        <Button className="bg-zinc-900 hover:bg-zinc-600
        transition text-white rounded py-2 px-3 mb-3"

        >
          Show More Posts
        </Button>
    </main>


  )
}
