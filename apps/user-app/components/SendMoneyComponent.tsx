import { InputBar } from "@repo/ui/inputbar"
import { ChangeEvent } from "react";

interface sendMoneyProps{
    onChangeFunc:(e: ChangeEvent<HTMLInputElement>) => void,
    onChangeNumber:(e: ChangeEvent<HTMLInputElement>) => void,
    amount:number,
    number:number
}


export const SendMoneyComponent = (props:sendMoneyProps) =>{
    const {onChangeFunc,amount,onChangeNumber,number} = props;
    return <div className="flex flex-col gap-2">
        <InputBar label="To" name="To" placeholder="To Mobile Number" value={number} onChangeFunc={onChangeNumber}/>
        <InputBar label="Amount" name="amount" value={amount} placeholder="Enter the amount" onChangeFunc={onChangeFunc}/>
        <button className="cursor-pointer rounded-md mt-2 p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-100">Add Money</button>
    </div>
}