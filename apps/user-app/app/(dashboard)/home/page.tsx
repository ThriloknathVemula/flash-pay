import { redirect } from "next/navigation";
import { DashboardComponent } from "../../../components/DashboardComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import Footer from "../../../components/Footer";

export default async function Dashboard(){
    const session = await getServerSession(authOptions);
    if(!session?.user){ 
        return redirect('/signin');
    }
    
    return (
        <div className="flex flex-col h-full w-screen">
            <div className="bg-[#F5F7F8] mb-3">
                <DashboardComponent/>
            </div>
            <Footer/>
        </div>
    )  
}