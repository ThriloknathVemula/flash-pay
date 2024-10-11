import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import UserCard from "../../../components/UserCard";
import { redirect } from "next/navigation";

export default async function User(){
    const session = await getServerSession(authOptions);
    if(!session?.user){
        redirect('/signin')
    }


    if(session.user){
        return <div>
        <UserCard id={session.user.id}/>
    </div>
    }
}