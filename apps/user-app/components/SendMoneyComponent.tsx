import { InputBar } from "@repo/ui/inputbar"
import { ChangeEvent } from "react";
import { toast } from "react-toastify";

interface sendMoneyProps{
    onChangeFunc:(e: ChangeEvent<HTMLInputElement>) => void,
    onChangeNumber:(e: ChangeEvent<HTMLInputElement>) => void,
    amount:number | string,
    number:number | string
}


export const SendMoneyComponent = (props:sendMoneyProps) =>{
    const {onChangeFunc,amount,onChangeNumber,number} = props;

    const onClickSendMoney = ()=>{
        console.log(amount);
        console.log(number);
        if(isNaN(amount) || isNaN(number)){
            toast.error('Invalid inputs')
        }
    }

    return <div className="flex flex-col gap-2">
        <div className="flex flex-col">
            <label className="font-semibold">To Phone Number</label>
            <input className="outline-none border-solid border-2 rounded-md p-1" name="To" onChange={onChangeNumber} placeholder="Enter phone number"/>
        </div>
        <div className="flex flex-col">
            <label className="font-semibold">Amount</label>
            <input className="outline-none border-solid border-2 rounded-md p-1" name="amount" onChange={onChangeFunc} placeholder="Enter amount"/>
        </div>
        <button className="cursor-pointer rounded-md mt-2 p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-100" onClick={onClickSendMoney}>Send Money</button>
    </div>
}