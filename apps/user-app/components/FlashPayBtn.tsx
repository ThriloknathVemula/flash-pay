"use client"
import { useRouter } from "next/navigation"

export default function FlashPayBtn(props:{text:string,routePage:string}){
    const router = useRouter()
    return <button onClick={()=>router.push(`/${props.routePage}`)} className='bg-cyan-600 hover:bg-cyan-500 rounded-md mt-2 p-2 cursor-pointer text-slate-100'>{props.text}</button>

}