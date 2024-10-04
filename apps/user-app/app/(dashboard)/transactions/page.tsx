import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Transaction(){
    const session = await getServerSession();
    if(!session?.user){
        redirect('/signin')
    }
    if(!session?.user){
        return <div>Redirecting...</div>
    }
    return <div>Transaction page</div>
}