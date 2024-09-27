import { InputBar } from "@repo/ui/inputbar"
import { ChangeEvent } from "react";

interface addMoneyProps {
    onChangeFunc:(e: ChangeEvent<HTMLInputElement>) => void,
    amount: number | string
}

export const AddMoneyComponent = (props:addMoneyProps) =>{
    const {onChangeFunc,amount }=  props;
    return <div className="flex flex-col gap-2">
        <div className="flex flex-col">
            <label className="font-semibold">Amount</label>
            <input className="outline-none border-solid border-2 rounded-md p-1" name="amount" onChange={onChangeFunc} placeholder="Enter the amount"/>
        </div>
        <p className="font-semibold">Select your Bank Account</p>
        <select className="outline-none cursor-pointer">
            <option>ICICI Bank</option>
            <option>HDFC Bank</option>
            <option>State Bank of India</option>
        </select>
        <button className="cursor-pointer rounded-md mt-2 p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-100">Add Money</button>
    </div>
}