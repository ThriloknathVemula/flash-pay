"use client"

import { ChangeEvent, MouseEvent, useState } from "react";
import { bankOptions } from "./AddMoneyComponent";


interface sendMoneyProps{
    onChangeFunc:(e: ChangeEvent<HTMLInputElement>) => void,
    onChangeNumber:(e: ChangeEvent<HTMLInputElement>) => void,
    amount:number | string,
    number:number | string,
    onSendMoney:(bank:string)=>void
}


export const SendMoneyComponent = (props:sendMoneyProps) =>{
    const {onChangeFunc,amount,onChangeNumber,number,onSendMoney} = props;
    const [bank,setBank] = useState(bankOptions[0]?.name || "");
    const [redirectUrl,setRedirectUrl] = useState(bankOptions[0]?.redirectUrl);

    const handleSelectChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        const selectedUrl = e.target.value;
        const selectedBank = bankOptions.find(eachBank => eachBank.redirectUrl === selectedUrl);
        
        if(selectedBank){
            setBank(selectedBank.name);
            setRedirectUrl(selectedUrl);
        }
    }

    const onClickSendMoney = (e:MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        onSendMoney(bank);
    }

    return <div className="flex flex-col gap-2">
        <div className="flex flex-col">
            <label className="font-semibold">To Phone Number</label>
            <input className="outline-none border-solid border-2 rounded-md p-1" name="To" value={number} onChange={onChangeNumber} placeholder="Enter phone number"/>
        </div>
        <div className="flex flex-col">
            <label className="font-semibold">Amount</label>
            <input className="outline-none border-solid border-2 rounded-md p-1" name="amount" value={amount} onChange={onChangeFunc} placeholder="Enter amount"/>
        </div>
        <p>Select your Bank Account</p>
        <select onChange={handleSelectChange} className="outline-none cursor-pointer">
            {bankOptions.map((eachBank)=>(
                <option key={eachBank.name} value={eachBank.redirectUrl}>{eachBank.name}</option>
            ))}
        </select>
        <button className="cursor-pointer rounded-md mt-2 p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-100" onClick={onClickSendMoney}>Send Money</button>
    </div>
}