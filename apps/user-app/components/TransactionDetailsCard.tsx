import { format } from "date-fns";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import FlashPayBtn from "./FlashPayBtn";

interface transactionDetailsProps{
    details: {status:string,receiver:string,amount:number,startTime:Date}
}

export default function TransactionDetailsCard(props:transactionDetailsProps){
    const {status,receiver,amount,startTime} = props.details;
    const transactionTime = format(new Date(startTime),"dd/MM/yyyy HH:mm:ss");
    const receiverName = receiver.charAt(0).toUpperCase() + receiver.slice(1);

    return (
    <div className="flex flex-col mx-2 md:pt-32 pt-20 items-center h-full">
        <div className="flex mb-2 flex-col items-center gap-1 bg-white shadow-lg border-2 border-gray-200 rounded-xl p-6">
            <div>
                {status === "Failure" ? 
                <FaExclamationCircle className="text-red-600 h-20 w-20"/> :
                <FaCheckCircle className="text-green-600 h-20 w-20"/>}
            </div>
            {status === "Failure" ? <h1 className="font-bold text-2xl">Your Payment is Failed</h1> : <h1 className="font-bold text-2xl">Your Payment was Successful</h1>}
            <p><span className="font-semibold">Receiver:</span> {receiverName}</p>
            <p><span className="font-semibold">Amount:</span> {amount/100}</p>
            <p><span className="font-semibold">Transaction Time:</span> {transactionTime}</p>
        </div>
        <FlashPayBtn text={"Go Back To Transactions Page"} routePage="transactions"/>
    </div>)
}