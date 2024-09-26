"use client"

import { ChangeEvent, useState } from "react"
import { AddMoneyComponent } from "./AddMoneyComponent";
import { parse } from "path";
import { toast } from "react-toastify";
import { BalanceCard } from "./BalanceCard";
import { SendMoneyComponent } from "./SendMoneyComponent";

const activeBtnStates = {
    addMoney:'addMoney',
    sendMoney:'sendMoney'
}



export const TransferComponent = ()=>{
    const [activeBtn,setActiveBtn] = useState(activeBtnStates.addMoney);
    const [amount,setAmount] = useState<number>(0);
    const [number,setNumber] = useState<number>(0);

    const handleAmountChange = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const value = e.target.value;
        const parsedValue = parseFloat(value);
        if(!isNaN(parsedValue)){
            setAmount(parsedValue);
        }else{
            toast.error("Invalid number entered")
        }
    }

    const handleNumberChange = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        const value = e.target.value;
        const parsedValue = parseInt(value);
        if(!isNaN(parsedValue)){
            setNumber(parsedValue);
        }else{
            toast.error("Invalid number entered")
        }
    }

    return( 
    <div className="flex justify-stretch items-center p-20 gap-10">
        <div>
            <div className="flex justify-center items-center p-5 gap-2">
                <button className="cursor-pointer rounded-md p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-100" onClick={()=>setActiveBtn(activeBtnStates.addMoney)}>Add money to your account</button>
                <button className="cursor-pointer rounded-md p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-100" onClick={()=>setActiveBtn(activeBtnStates.sendMoney)}>Send money to others</button>
            </div>
            <div className="bg-slate-50 rounded-lg p-10 py-5">
                <h1 className="font-bold text-xl text-cyan-700">{activeBtn==='addMoney'?'Add Money to your Account' : 'Send Money to Others'}</h1>
                {activeBtn==="addMoney" ? <AddMoneyComponent onChangeFunc = {handleAmountChange} amount={amount}/> : <SendMoneyComponent onChangeFunc={handleAmountChange} amount={amount} number={number} onChangeNumber={handleNumberChange}/>}
            </div>
        </div>
        <div className="md:ml-20">
            <BalanceCard/>
        </div>
    </div>
    )
}