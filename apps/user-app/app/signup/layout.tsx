"use client"

import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }): JSX.Element {
    const session = useSession();
    return (
      <div>
        <Appbar onSignin = {signIn} onSignout = {signOut} user={session.data?.user}/>  
        {children}
      </div>
    );
  }