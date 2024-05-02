'use server';

import { getAllContributors } from "../lib/mysqldb";
import Card from "./components/card";

export default async function Contributors() {

  const result = await getAllContributors()

  return (
    <main  className="w-full text-center">
        <div className="text-5xl py-12">Contributors</div>
          {/* {JSON.stringify(result)} */}
          {/* { 
            result?.map((contributor: any)=> (
              <div key={contributor.id}> {contributor.name} - {contributor.profile_img_url}</div>
            )) 
          } */}
          <Card contributors={result} />
    </main>
  )
}
