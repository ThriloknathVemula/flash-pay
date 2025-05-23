import { getServerSession } from "next-auth";
import { TransferComponent } from "../../../components/TransferComponent";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { BalanceCard } from "../../../components/BalanceCard";
import { redirect } from "next/navigation";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

const getBalance = async()=>{
    const session = await getServerSession(authOptions);
    const balanceAmt = await prisma.balance.findFirst({
            where:{
                userId: Number(session?.user?.id)
            }
        });
        return {
            balance: balanceAmt?.balance || 0,
            locked: balanceAmt?.locked_amount || 0
    }
}

export default async function Transfer(){
    const session = await getServerSession(authOptions);
    if(!session?.user){
        return redirect('/signin');
    }
    const balanceAmt = await getBalance();
    const {balance,locked} = balanceAmt;
    const totalBalance = balance + locked;
    return <div className="grid grid-cols-1 px-20 mb-5 justify-items-stretch items-center md:grid-cols-2 md:p-20 md:pt-0 md:pl-32 md:gap-20">
        <TransferComponent/>
        <div className="md:ml-10"><BalanceCard balance={balance/100} locked={locked/100} totalBalance={totalBalance/100}/></div>
        <ToastContainer/>
    </div>
}