"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import prisma from "@repo/db/client";

export default async function addMoney(props:{amount:number,provider:string}){
    const session = await getServerSession(authOptions);
    if(!session?.user){
        return {message:"Unauthenticated request"}
    }
    const {amount,provider} = props;

    const from  = Number(session.user.id);

    const user = await prisma.user.findFirst({
        where:{
            id:from
        }
    })

    const token = String(from)+Math.random().toString()+provider;

    await prisma.transactions.create({
        data:{
            userId:from,
            toUserId:from,
            amount:amount,
            token:token,
            startTime: new Date(),
            provider:provider,
            receiver: `self(${user?.username})`,
            status:"Processing"
        }
    })
    

    try{
        await prisma.$transaction(async(tx)=>{
            await prisma.balance.update({
                data:{
                    balance: {increment:amount}
                },  
                where:{
                    userId: from
                }
            })

            await prisma.transactions.update({
                data:{
                    status:"Success"
                },
                where:{
                    token:token
                }
            })
        })

        return {message:"Success"};
    }catch(err){
        await prisma.transactions.update({
            data:{
                status:"Failure"
            },
            where:{
                token:token
            }
        })

        return {message:"Failed"}
    }
}