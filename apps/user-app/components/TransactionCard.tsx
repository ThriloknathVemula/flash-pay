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
        <div onClick={()=>router.push(`/transactions/${uniqueId}`)} className={`rounded-lg bg-slate-100 border-solid border-2 ${styling} cursor-pointer mt-2 p-5 flex justify-between items-center`}>
            <div className="font-bold">
                Paid to: {receiverName}
                <p className="font-semibold">From {bankName}</p>
            </div>
            <div>
                <p className="font-bold">{amount/100} INR</p>
                {formattedDate}
            </div>
        </div>
    )
}