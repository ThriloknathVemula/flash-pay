"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import {Appbar} from '@repo/ui/appbar'
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const session = useSession();
  if(session.data===null){
    router.push('/signup');
  }
  return (
    <div>
      <Appbar onSignin = {signIn} onSignout = {signOut} user={session.data?.user}/>
    </div>
  );
}
