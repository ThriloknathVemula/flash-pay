interface transactionProps {
    amount: number,
    time: Date,
    bankName: string,
    receiver: string,
    status: string,
}

export const TransactionCard = ({transactionDetails}: {transactionDetails:transactionProps})=>{
    const {amount,time,bankName,receiver,status} = transactionDetails;

    const receiverName = receiver.charAt(0).toUpperCase() + receiver.slice(1);

    return (
        <div className="rounded-lg bg-slate-100 mt-2 p-5 flex justify-between items-center">
            <div className="font-bold">
                Paid to: {receiverName}
                <p className="font-semibold">From {bankName}</p>
            </div>
            <div>{time.toLocaleDateString()} {time.toLocaleTimeString()}
                <p className="font-bold">{amount/100} INR</p>
            </div>
        </div>
    )
}