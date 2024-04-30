'use server'

import { getAllPosts } from '../lib/mysqldb';

import { Button } from "@/components/ui/button"
import { IoBeerSharp } from "react-icons/io5";

import PostsList from './components/posts-list';
import PostForm from './components/post-form';
import UpdateForm from './components/update-form';


export default async function MySqlCrud() {
    
  const result = await getAllPosts()

  return (
    <main className="container  cursor-default">
        <h1 className='text-3xl font-bold pt-24 pb-16'>MySQL CRUD</h1>

        <section className='flex flex-col justify-start items-start'>
          {/* TODO: add click fuctionality for individual view */}
          <h2 className='text-xl font-semibold'>Posts</h2>
          {/* <Button className="bg-zinc-900 hover:bg-zinc-600
            transition text-white rounded py-2 px-3 my-4"
            >
            <IoBeerSharp className="mr-2 h-4 w-4" /> GET Posts
          </Button> */}

          <PostsList posts={result} />

          <div>
            
            {/* {JSON.stringify(result)} */}
            {/* { 
              result?.map((post: any)=> (
                <div key={post.id}> {post.post} </div>
              )) 
            } */}
          </div>
        </section>

        <section>
          <h2 className='text-xl font-semibold pt-16'>Create Post</h2>
          <div>
            <PostForm />
          </div>
        </section>

        <section className='pt-16 pb-32'>
        <h2 className='text-xl font-semibold'>Update Post</h2>
          <div>
            <UpdateForm />
          </div>
        </section>


    </main>
  )
}
