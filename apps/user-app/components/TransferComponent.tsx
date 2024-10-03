"use client"

import { ChangeEvent, MouseEvent, useState } from "react"
import { AddMoneyComponent } from "./AddMoneyComponent";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { BalanceCard } from "./BalanceCard";
import { SendMoneyComponent } from "./SendMoneyComponent";

const activeBtnStates = {
    addMoney:'addMoney',
    sendMoney:'sendMoney'
}



export const TransferComponent = ()=>{
    const [activeBtn,setActiveBtn] = useState(activeBtnStates.addMoney);
    const [amount,setAmount] = useState("");
    const [number,setNumber] = useState("");

    const handleAmountChange = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setAmount(e.target.value);
    }

    const handleNumberChange = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setNumber(e.target.value);
    }

    const onSendMoney = (e:MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault;
        const amountNum = Number(amount);
        const numberNum = Number(number);
        if(Number.isNaN(amountNum) || Number.isNaN(numberNum)){
            toast.error("Invalid Inputs",{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
        }else{
            console.log(amountNum, numberNum);
        }
        setAmount("");
        setNumber("");  
    }

    return( 
    <>
        <div className="w-[30vw]">
            <div className="flex justify-center items-center p-5 gap-2">
                <button className="cursor-pointer rounded-md p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-100" onClick={()=>setActiveBtn(activeBtnStates.addMoney)}>Add money to your account</button>
                <button className="cursor-pointer rounded-md p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-100" onClick={()=>setActiveBtn(activeBtnStates.sendMoney)}>Send money to others</button>
            </div>
            <div className="bg-slate-50 rounded-lg p-10 py-5">
                <h1 className="font-bold text-xl text-cyan-700 mb-2">{activeBtn==='addMoney'?'Add Money to your Account' : 'Send Money to Others'}</h1>
                {activeBtn==="addMoney" ? 
                <AddMoneyComponent onChangeFunc = {handleAmountChange} amount={amount}/> : 
                <SendMoneyComponent onChangeFunc={handleAmountChange} number={number} amount={amount} onChangeNumber={handleNumberChange} onSendMoney={onSendMoney}/>}
            </div>
        </div>
    </>
    )
}