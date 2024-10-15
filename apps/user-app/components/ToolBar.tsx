import { FaHistory, FaHome, FaRegUserCircle } from "react-icons/fa"
import {GrTransaction} from 'react-icons/gr'
import ToolBarItem from "./ToolBarItem"

const toolbar = [{href:'/home',title:'Home',icon:<FaHome/>},
    {href:'/transfer',title:'Transfer',icon:<GrTransaction/>},
    {href:'/transactions',title:'Transactions',icon:<FaHistory/>},
    {href:'/user',title:'Profile',icon:<FaRegUserCircle/>}
]


export default function ToolBar(){
    return (
        <div className="rounded-lg shadow-lg bg-[#F5F7F8] mt-2 sticky bottom-0 flex justify-between gap-1 items-center block md:hidden p-3">
            {toolbar.map(eachItem => (
                <ToolBarItem href={eachItem.href} icon={eachItem.icon} title={eachItem.title} key={eachItem.title}/>
            ))}
        </div>
    )
}