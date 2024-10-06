"use server"

import prisma from "@repo/db/client"
import { authOptions } from "../auth";
import { getServerSession } from "next-auth";

export default async function sendMoney (props:{to:number,amount:number,provider:string}){
    const {to,amount,provider} = props;
    const session = await getServerSession(authOptions);
    if(!session?.user?.id){
        return {message:"Error while sending"}
    }
    const from = session.user.id;
    
    const receiver = await prisma.user.findFirst({
        where:{
            number: String(to)
        }
    });

    if(!receiver){
        return {message:"User not found"}
    }

    const createToken = ()=>{
        const token = String(from)+Math.random().toString()+String(amount)+String(to);
        return token
    }
    
    const token = createToken();

    await prisma.transactions.create({
        data:{
            userId: Number(from),
            toUserId: Number(receiver.id),
            amount: amount,
            token:token,
            startTime: new Date(),
            provider:provider,
            receiver: receiver.username,
            status: "Processing"
        }
    })

    try{
        await prisma.$transaction(async(tx)=>{
            const sender = await prisma.balance.findFirst({
                where:{
                    userId:Number(from)
                },
                select:{
                    balance:true,
                    locked_amount:true
                }
            })

            if(!sender?.balance || sender.balance < amount){
                throw new Error("Insufficient funds")
            }
            
            await tx.balance.update({
                data:{
                    balance:{decrement:amount}
                },
                where:{
                    userId:Number(from)
                }
            })
    
            await tx.balance.update({
                data:{
                    balance:{
                        increment:amount
                    }
                },
                where:{
                    userId:Number(receiver.id)
                }
            })
    
            await tx.transactions.update({
                data:{
                    status:"Success"
                },
                where:{
                    token:token
                }
            })
        })
        return {message:"Success"}
    }catch(err:any){
        await prisma.transactions.update({
            data:{
                status:"Failure"
            },
            where:{
                token:token
            }
        })
        const message = err.message || "Failed";
        return {message:message}
    }
}