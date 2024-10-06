"use client"

import { ChangeEvent, useState } from "react";

interface addMoneyProps {
    onChangeFunc:(e: ChangeEvent<HTMLInputElement>) => void,
    amount: number | string,
    onAddMoney: (bank:string)=>void
}

export const bankOptions = [{
    name:"ICICI Bank",
    redirectUrl:"https://www.icicibank.com/personal-banking/insta-banking/internet-banking"
},{
    name:"HDFC Bank",
    redirectUrl:"https://netbanking.hdfcbank.com/"
},{
    name:"SBI Bank",
    redirectUrl:"https://www.onlinesbi.sbi/"
},{
    name:"Axis Bank",
    redirectUrl:"https://omni.axisbank.co.in/axisretailbanking/"
}
]

export const AddMoneyComponent = (props:addMoneyProps) =>{
    const [redirectUrl,setRedirectUrl] = useState(bankOptions[0]?.redirectUrl);
    const [bank,setBank] = useState(bankOptions[0]?.name || "");
    const {onChangeFunc,amount,onAddMoney}=  props;

    const handleSelectChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        const selectedUrl = e.target.value;
        const selectedBank = bankOptions.find(eachBank => eachBank.redirectUrl === selectedUrl);
        
        if(selectedBank){
            setBank(selectedBank.name);
            setRedirectUrl(selectedUrl);
        }
    }

    const onClickAddMoney = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        window.open(redirectUrl,"_blank")
        onAddMoney(bank);
    }

    return <div className="flex flex-col gap-2">
        <div className="flex flex-col">
            <label className="font-semibold">Amount</label>
            <input className="outline-none border-solid border-2 rounded-md p-1" value={amount} name="amount" onChange={onChangeFunc} placeholder="Enter the amount"/>
        </div>
        <p className="font-semibold">Select your Bank Account</p>
        <select onChange={handleSelectChange} className="outline-none cursor-pointer">
            {bankOptions.map((eachBank => (
                <option key={eachBank.name} value={eachBank.redirectUrl}>{eachBank.name}</option>
            )))}
        </select>
        <button onClick={onClickAddMoney} className="cursor-pointer rounded-md mt-2 p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-100">Add Money</button>
    </div>
}