"use client"

import { format } from "date-fns";
import { useRouter } from "next/navigation";

export interface transactionProps {
    amount: number,
    time: Date,
    bankName: string,
    receiver: string,
    status: string,
    uniqueId: number
}

export const TransactionCard = ({transactionDetails}: {transactionDetails:transactionProps})=>{
    const {amount,time,bankName,receiver,status,uniqueId} = transactionDetails;

    const router = useRouter();
    const receiverName = receiver.charAt(0).toUpperCase() + receiver.slice(1);
    const formattedDate = format(new Date(time),'dd/MM/yyyy HH:mm:ss')
    const styling = status==="Success" ? "border-green-500" : "border-red-400"
    return (
        <div onClick={()=>router.push(`/transactions/${uniqueId}`)} className={`rounded-lg bg-white shadow-md border-2 ${styling} cursor-pointer mt-3 p-5 flex justify-between items-center transition-transform transform hover:scale-105 hover:shadow-lg`}>
            <div className="font-bold text-gray-700">
                Paid to:<span className="text-gray-900"> {receiverName}</span>
                <p className="font-semibold text-gray-700">From {bankName}</p>
            </div>
            <div className="text-right">
                <p className="font-bold text-gray-900">{amount/100} INR</p>
                <p className="text-sm text-gray-500">{formattedDate}</p>
            </div>
        </div>
    )
}