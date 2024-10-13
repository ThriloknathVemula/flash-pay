import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { TransactionCard } from "../../../components/TransactionCard";
import NoTransactions from "../../../components/NoTransactions";

export default async function Transaction(){
    const session = await getServerSession(authOptions);
    if(!session?.user){
        return redirect('/signin')
    }

    const transactions = await prisma.transactions.findMany({
        where:{
            userId: Number(session.user.id)
        },
        orderBy:{
            startTime:"desc"
        }
    })

    const txns = transactions.map(eachTransaction => ({
        amount: eachTransaction.amount,
        time: eachTransaction.startTime,
        bankName: eachTransaction.provider,
        receiver: eachTransaction.receiver,
        status:eachTransaction.status,
        uniqueId:eachTransaction.id
    }))

    return <div className="bg-[#F5F7F8] w-[100vw] flex flex-col px-5 pr-10 pt-5 gap-1">
        <h1 className="font-bold text-3xl text-cyan-800">Transactions</h1>
        {txns.length!==0 ? 
        txns.map(eachItem=>(
            <TransactionCard transactionDetails={eachItem} key={eachItem.uniqueId}/>
        )) :
        <NoTransactions/>}
    </div>
}