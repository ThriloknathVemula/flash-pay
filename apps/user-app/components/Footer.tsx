import Image from "next/image";
import logoImg from '../assets/transaction.png'

export default function Footer(){
    return <div className="flex bg-[#F5F7F8] flex-col pt-7 md:pt-12 justify-center items-center">
        <div className="flex flex-row items-center">
            <Image className="h-12 w-12" src={logoImg} alt="logo"/>
            <p className="md:text-3xl text-sky-700 p-2 font-mono font-bold md:font-extrabold text-xl">FlashPay</p>
        </div>
        <p className="font-semibold">Fast, Secure Payments - All in One Place!</p>
        <p className="font-mono">Made by <span className="font-bold">THRILOK</span></p>
    </div>
}