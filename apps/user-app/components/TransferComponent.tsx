"use client"

import { ChangeEvent, useState } from "react"
import { AddMoneyComponent} from "./AddMoneyComponent";
import { Bounce, toast } from "react-toastify";
import { SendMoneyComponent } from "./SendMoneyComponent";
import sendMoney from "../app/lib/actions/sendMoney";
import { useRouter } from "next/navigation";
import addMoney from "../app/lib/actions/addMoney";

const activeBtnStates = {
    addMoney:'addMoney',
    sendMoney:'sendMoney'
}



export const TransferComponent = ()=>{
    const [activeBtn,setActiveBtn] = useState(activeBtnStates.addMoney);
    const [amount,setAmount] = useState("");
    const [number,setNumber] = useState("");

    const router = useRouter();

    const handleAmountChange = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setAmount(e.target.value);
    }

    const handleNumberChange = (e:ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        setNumber(e.target.value);
    }

    const onSendMoney = async(bank:string) =>{
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
            const {message} = await sendMoney({to:numberNum,amount:amountNum*100,provider:bank});
            if(message === "Insufficient funds"){
                toast.error("Insufficient funds",{
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
            }else if(message === "Success"){
                router.push('/paymentSuccess');
            }else{
                router.push('/paymentFailure');
            }
        }
        setAmount("");
        setNumber("");  
    }

    const onAddMoney = async(bank:string)=>{
        const amountNum = Number(amount);
        const {message} = await addMoney({amount:amountNum*100,provider:bank});
        if(message === "Success"){
            router.push('/paymentSuccess');
        }else{
            router.push('/paymentFailure')
        }
    }

    return( 
    <>
        <div className="md:w-[30vw] w-[60vw] mx-auto mb-5">
            <div className="flex justify-center items-center p-5 gap-2">
                <button className="cursor-pointer rounded-md p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-100" onClick={()=>setActiveBtn(activeBtnStates.addMoney)}>Add money to your account</button>
                <button className="cursor-pointer rounded-md p-2 bg-cyan-500 hover:bg-cyan-600 text-slate-100" onClick={()=>setActiveBtn(activeBtnStates.sendMoney)}>Send money to others</button>
            </div>
            <div className="bg-slate-50 rounded-lg p-10 py-5">
                <h1 className="font-bold text-xl text-cyan-700 mb-2">{activeBtn==='addMoney'?'Add Money to your Account' : 'Send Money to Others'}</h1>
                {activeBtn==="addMoney" ? 
                <AddMoneyComponent onChangeFunc = {handleAmountChange} amount={amount} onAddMoney={onAddMoney}/> : 
                <SendMoneyComponent onChangeFunc={handleAmountChange} number={number} amount={amount} onChangeNumber={handleNumberChange} onSendMoney={onSendMoney}/>}
            </div>
        </div>
    </>
    )
}