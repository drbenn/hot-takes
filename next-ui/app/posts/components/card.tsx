'use client';
import { AiPost, NumberStringMap } from "@/app/types/types";
import Image from "next/image";
import { useState } from "react";

export default function Card({ posts }: { posts: AiPost[] } ) {  
  console.log(posts);

  
  
  
  
  return (
    <>
      <ul>
        {posts.map((post: AiPost) => (
          <div key={post.id * Math.random()} className="w-full px-8 py-16 text-left flex flex-col">
            {/* Must update next.config to allow external image sources */}
            <section className="flex flex-col sm:flex-row justify-start items-center">
              <div className="min-w-40 max-w-72">
                { post.profile_img_url && post.profile_img_url ? 
                  <Image
                    src={post.profile_img_url}
                    alt={post.profile_img_url.toString()}
                    width="150"
                    height="150"
                    layout="responsive"
                  />
                  : ''
                }
              </div>
              <div>
                <h2 className="text-xl font-normal">{post.headline}</h2>
                <h2 className="text-base font-extralight text-zinc-500">{post.content_snippet}</h2>
              </div>
            </section>
            <div className="font-extralight">{post.post}</div>
          </div>
        ))}
      </ul>
    </>
  )
}