"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Transfer(){
    const router = useRouter();
    const session = useSession();
    if(!session.data?.user){
        router.push('/api/auth/signin');
    }
    if(!session.data?.user){
        return <div>Redirecting...</div>
    }
    return <div>Transfer page</div>
}