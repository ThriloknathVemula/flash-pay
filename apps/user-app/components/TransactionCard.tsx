export interface transactionProps {
    amount: number,
    time: Date,
    bankName: string,
    receiver: string,
    status: string,
    uniqueId: number
}

export const TransactionCard = ({transactionDetails}: {transactionDetails:transactionProps})=>{
    const {amount,time,bankName,receiver,status} = transactionDetails;

    const receiverName = receiver.charAt(0).toUpperCase() + receiver.slice(1);
    const styling = status==="Success" ? "border-green-500" : "border-red-400"
    return (
        <div className={`rounded-lg bg-slate-100 border-solid border-2 ${styling} mt-2 p-5 flex justify-between items-center`}>
            <div className="font-bold">
                Paid to: {receiverName}
                <p className="font-semibold">From {bankName}</p>
            </div>
            <div>
                <p className="font-bold">{amount/100} INR</p>
                {time.toLocaleDateString()} {time.toLocaleTimeString()}
            </div>
        </div>
    )
}