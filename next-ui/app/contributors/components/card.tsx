'use client';
import { Contributor } from "@/app/types/types";
import Image from "next/image";

export default function Card({ contributors }: { contributors: Contributor[] } ) {  
  console.log(contributors);
  return (
    <>
      <ul>
        {contributors.map((contributor: Contributor) => (
          <div key={contributor.id * Math.random()} className="w-full px-8 py-16 text-left flex flex-col">
            {/* Must update next.config to allow external image sources */}
            <section className="flex flex-col sm:flex-row justify-start items-center">
              <div className="max-w-72">
                <Image
                    src={contributor.profile_img_url}
                    alt={contributor.profile_img_url.toString()}
                    width="150"
                    height="150"
                    layout="responsive"
                />
              </div>
              <div>
                <h2 className="text-4xl font-extralight pl-4 my-4">{contributor.name}</h2>
              </div>
            </section>
            <div className="mt-2 sm:mt-8" dangerouslySetInnerHTML={{ __html: contributor.biography }} />
          </div>
        ))}
      </ul>
    </>
  )
}