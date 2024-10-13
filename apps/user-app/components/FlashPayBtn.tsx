"use client"
import { useRouter } from "next/navigation"

export default function FlashPayBtn(){
    const router = useRouter()
    return <button onClick={()=>router.push('/transfer')} className='bg-sky-700 rounded-md mt-2 p-2 cursor-pointer text-slate-100 hover:bg-sky-600'>FlashPay</button>

}