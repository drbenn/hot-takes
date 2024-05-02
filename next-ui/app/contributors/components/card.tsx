'use client';
import Image from "next/image";
import Link from "next/link";

export default function Card({ contributors }: { contributors: any[] } ) {  
  console.log(contributors);
  return (
    <>
      <ul>
        {contributors.map((contributor:any) => (
            <div key={contributor.id * Math.random()} className="w-full bg-red-100 p-8 text-left flex flex-col">
              {/* Must update next.config to allow external image sources */}
              <section className="flex flex-row justify-start items-center bg-green-200">
                <div>
                  <Image
                      src={contributor.profile_img_url}
                      alt={contributor.profile_img_url.toString()}
                      width="150"
                      height="150"
                      layout="responsive"
                  />
                </div>
                <div>
                  <h2 className="text-5xl font-semibold pl-4">{contributor.name}</h2>
                </div>

              </section>
            <p>{contributor.biography}</p>
          </div>
        ))}
      </ul>
    </>
  )
}