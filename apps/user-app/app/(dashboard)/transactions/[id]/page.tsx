"use client"

import { useParams } from "next/navigation";

export default function TransactionDetailsPage(){
    const params = useParams()
    const {id} = params;
    console.log(params)
    

    return <div>Transaction id: {id}</div>
}