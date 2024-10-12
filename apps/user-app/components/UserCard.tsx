import prisma from "@repo/db/client"
import Avatar from "./Avatar"
import { format } from "date-fns";

export default async function UserCard(props:{id:String}){
    const userDetails = await prisma.user.findFirst({
        where:{
            id:Number(props.id)
        }
    })

    if(userDetails){
        const {username, number, email, registered_at} = userDetails;
        const registeredAt = format(new Date(registered_at), "MMMM yyyy");
        const capitalizedName = username.charAt(0).toUpperCase() + username.slice(1);

    return (
    <div className="flex flex-col md:pt-32 pt-20 items-center h-full">
        <div className="flex flex-col items-center gap-3 bg-white shadow-lg border-2 border-gray-200 rounded-xl p-6">
            <Avatar username={username} />
        <div className="flex flex-col gap-2 md:text-lg">
            <p><span className="font-bold text-gray-700">User Name</span>: <span className="font-semibold">{capitalizedName}</span></p>
            <p><span className="font-bold text-gray-700">Email Id</span>: <span className="font-semibold">{email}</span></p>
            <p><span className="font-bold text-gray-700">Phone Number</span>: <span className="font-semibold">{number}</span></p>
        </div>
        </div>
        <div className="border-t-2 border-gray-200 md:text-lg mt-4 px-5 py-3 bg-white shadow-md rounded-b-xl">
            Member Since <span className="text-cyan-600 font-bold">{registeredAt}</span>
        </div>
    </div>
    );

    }

    else{
        return <div>
            User Details Not Available
        </div>
    }
    
}