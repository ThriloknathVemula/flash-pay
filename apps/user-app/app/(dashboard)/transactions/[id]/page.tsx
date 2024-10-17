import prisma from "@repo/db/client";
import TransactionDetailsCard from "../../../../components/TransactionDetailsCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface TransactionPageProps {
    params: {
      id: string;
    };
  }

export default async function TransactionDetailsPage({params}:TransactionPageProps){
    const session = await getServerSession();
    if(!session?.user){
        redirect('/signin')
    }

    const {id} = params;
    
    
    const details = await prisma.transactions.findFirst({
        where:{
            id: Number(id)
        },
        select:{
            status:true,
            receiver:true,
            amount:true,
            startTime:true
        }
    })
    
    if(details){
        return <div className="w-full h-screen">
            <TransactionDetailsCard details = {details}/>
        </div>
    }
}