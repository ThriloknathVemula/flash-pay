"use client"

import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function PaymentSuccess(){
    const [time,setTime] = useState(5)
    const router = useRouter()

    const timerId = setInterval(()=>{
        setTime(time-1);
    },1000);

    if(time === 1){
        clearInterval(timerId);
        router.push('/transfer');
    }

    return (
        <div className="flex flex-col w-screen gap-1 p-24 items-center">
            <div>
                <FaCheckCircle className="text-green-600 h-20 w-20"/>
            </div>
            <p className="text-2xl font-bold">Your Payment is Successful</p>
            <p className="font-semibold text-xl">Redirecting you in <span className="font-bold">{time}</span> seconds</p>
        </div>
    )
}