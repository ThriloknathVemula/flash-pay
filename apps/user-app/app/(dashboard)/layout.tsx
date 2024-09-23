"use client"

import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SidebarComponent from "../../components/SidebarComponent";

export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }): JSX.Element {
    const session = useSession();
    const router = useRouter();
    return (
      <div>
        <Appbar onSignin = {signIn} onSignout = {signOut} user={session.data?.user}/>
        <div  className="flex">
          <SidebarComponent/>
          {children}
        </div>  
        
      </div>
    );
  }