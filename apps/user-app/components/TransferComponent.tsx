"use client"

import { ChangeEvent, useState } from "react"
import { AddMoneyComponent } from "./AddMoneyComponent";
import { toast } from "react-toastify";
import { BalanceCard } from "./BalanceCard";
import { SendMoneyComponent } from "./SendMoneyComponent";

const activeBtnStates = {
    addMoney:'addMoney',
    sendMoney:'sendMoney'
}



export const TransferComponent = ()=>{
    const [activeBtn,setActiveBtn] = useState(activeBtnStates.addMoney);
    const [amount,setAmount] = useState<number | string>("");
    const [number,setNumber] = useState<number | string>("");

    const handleAmountChange = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const value = e.target.value;
        const parsedValue = parseFloat(value);
        if(!isNaN(parsedValue)){
            setAmount(parsedValue);
        }
    }

    const handleNumberChange = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const value = e.target.value;
        const parsedValue = parseInt(value);
        if(!isNaN(parsedValue)){
            setNumber(parsedValue);
        }
    }

    return( 
    <div className="grid grid-cols-1 justify-items-stretch items-center md:grid-cols-2 p-20 pl-32 gap-10 md:gap-20">
        <div>
            <div className="flex justify-center items-center p-5 gap-2">
                <button className="cursor-pointer rounded-md p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-100" onClick={()=>setActiveBtn(activeBtnStates.addMoney)}>Add money to your account</button>
                <button className="cursor-pointer rounded-md p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-100" onClick={()=>setActiveBtn(activeBtnStates.sendMoney)}>Send money to others</button>
            </div>
            <div className="bg-slate-50 rounded-lg p-10 py-5">
                <h1 className="font-bold text-xl text-cyan-700 mb-2">{activeBtn==='addMoney'?'Add Money to your Account' : 'Send Money to Others'}</h1>
                {activeBtn==="addMoney" ? <AddMoneyComponent onChangeFunc = {handleAmountChange} amount={amount}/> : <SendMoneyComponent onChangeFunc={handleAmountChange} number={number} amount={amount} onChangeNumber={handleNumberChange}/>}
            </div>
        </div>
        <div className="md:ml-20">
            <BalanceCard/>
        </div>
    </div>
    )
}