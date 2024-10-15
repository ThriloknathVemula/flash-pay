"use client"

import { usePathname, useRouter } from "next/navigation";
import React from "react";

export interface sidebarPropsType {
    href:string;
    title:string;
    icon:React.ReactNode
}

export const SidebarItem = (props:sidebarPropsType)=>{
    const {href,title,icon} = props;
    const pathname = usePathname();
    const selected = pathname === href;
    const router = useRouter()

    return <div className="flex items-center gap-1 cursor-pointer" onClick={()=>router.push(href)}>
        <div>{icon}</div>
        <p className={`font-bold text-xl ${selected ? "text-sky-700": "text-gray-400"} `}>{title}</p>
    </div>
}