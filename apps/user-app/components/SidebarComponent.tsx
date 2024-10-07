import { FaHome,FaHistory  } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { SidebarItem } from "./SidebarItem";

const sidebar = [{href:'/home',title:'Home',icon:<FaHome/>},
    {href:'/transfer',title:'Transfer',icon:<GrTransaction/>},
    {href:'/transactions',title:'Transactions',icon:<FaHistory/>}
]

export default function SidebarComponent(){
    return <div className="px-10 pt-20 bg-[#F5F7F8] min-h-[100vh] border-r-2">
        <div className="flex flex-col items-center justify-center mt-5 gap-1">
            {sidebar.map((eachItem)=>(
                <SidebarItem href={eachItem.href} title={eachItem.title} icon={eachItem.icon} key={eachItem.href}/>
            ))}
        </div>
    </div>
}