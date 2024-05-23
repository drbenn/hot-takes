'use server';

import { getAllContributors } from "../lib/mysqldb";
import Card from "./components/card";

export default async function Contributors() {

  const result = await getAllContributors();

  return (
    <main  className="w-full text-center">
        <div className="text-5xl py-12">Contributors</div>
        <Card contributors={result} />
    </main>
  )
}
