"use client"

import { usePathname, useRouter } from "next/navigation";
import { sidebarPropsType } from "./SidebarItem";

export default function ToolBarItem(props:sidebarPropsType){
    const {title,icon,href} = props;
    const router = useRouter();
    const pathname = usePathname();
    const selected = pathname === href;
    return <div onClick={()=>router.push(href)} className="flex flex-col items-center cursor-pointer">
        <div>{icon}</div>
        <p className={`font-bold text-md ${selected ? "text-sky-700": "text-gray-400"} `}>{title}</p>
    </div>
}