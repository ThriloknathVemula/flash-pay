"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DashboardComponent } from "../../../components/DashboardComponent";

export default function Dashboard(){
    const router = useRouter();
    const session = useSession();
    if(session.status!=="authenticated"){
        router.push('/signin');
    }
    // if(session.status==="authenticated"){
    //     return <div>Dashboard</div>
    // }
    return <div className="bg-[#F5F7F8] h-full w-screen"><DashboardComponent/></div>  
}