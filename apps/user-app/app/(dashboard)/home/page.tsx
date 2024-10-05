import { redirect } from "next/navigation";
import { DashboardComponent } from "../../../components/DashboardComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

export default async function Dashboard(){
    const session = await getServerSession(authOptions);
    if(!session?.user){ 
        redirect('/signin');
    }
    return <div className="bg-[#F5F7F8] h-full w-screen"><DashboardComponent/></div>  
}