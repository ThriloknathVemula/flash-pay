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
        redirect('/signin');
    }
    const balanceAmt = await getBalance();
    const totalBalance = balanceAmt.balance + balanceAmt.locked;
    return <div className="grid grid-cols-1 justify-items-stretch items-center md:grid-cols-2 md:p-20 md:pt-0 md:pl-32 md:gap-20">
        <TransferComponent/>
        <div className="md:ml-10"><BalanceCard balance={balanceAmt.balance} locked={balanceAmt.locked} totalBalance={totalBalance}/></div>
        <ToastContainer/>
    </div>
}