"use client";

import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { PiSignOut } from "react-icons/pi";

const Session = () => {
  const { data: session } = useSession();

  return (
    <>
      { session ? (
        <main className='flex flex-col justify-center items-center'>
          <img src={ session.user?.image as string } alt="" className='rounded-full h-20'/>
          <h1>Welcome Back!! { session.user?.name } </h1>
          <div>
            { JSON.stringify(session)}
          </div>
          <Button className="bg-zinc-900 hover:bg-zinc-600
            transition text-white rounded py-2 px-3 mb-3"
            onClick={() => signOut()}
            >
              {/* can also use onClick={() => signOut({ callbackUrl: `/contanct` })}  to redirect after sign out*/}
            <PiSignOut className="mr-2 h-4 w-4" /> Sign Out
          </Button>
        </main>
      ) : (
        <main className='flex flex-col justify-center items-center'>
          <h1 className='py-20'>You`re not logged in</h1>
          <Button className="bg-zinc-900 hover:bg-zinc-600
            transition text-white rounded py-2 px-3 mb-3"
            onClick={() => signIn("google")}
            >
            <FcGoogle className="mr-2 h-4 w-4" /> Sign in with Google
          </Button>
          <Button className="bg-zinc-900 hover:bg-zinc-600
            transition text-white rounded py-2 px-3 mb-3"
            onClick={() => signIn("github")}
            >
            <RxGithubLogo className="mr-2 h-4 w-4" /> Sign in with Github
          </Button>
        </main>
      )}
    </>
  )
};

export default Session;
  