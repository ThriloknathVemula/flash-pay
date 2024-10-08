import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { TransactionCard } from "../../../components/TransactionCard";

export default async function Transaction(){
    const session = await getServerSession(authOptions);
    if(!session?.user){
        redirect('/signin')
    }

    const userid = Number(session.user.id)
    const ordering = 'desc';

    //const transactions = await prisma.$queryRaw`SELECT * FROM Transactions WHERE userId = ${userid} ORDER BY ${ordering}`

    const transactions = await prisma.transactions.findMany({
        where:{
            userId: Number(session.user.id)
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

    return <div className="bg-[#F5F7F8] w-[100vw] flex flex-col px-5 pt-5 gap-1">
        {txns.map(eachItem=>(
        <TransactionCard transactionDetails={eachItem} key={eachItem.uniqueId}/>
    ))}
    </div>
}