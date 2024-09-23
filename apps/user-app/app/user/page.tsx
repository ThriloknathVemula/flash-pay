import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { authOptions } from "../lib/auth";

export default async function User(){
    const session = await getServerSession();
    return <div>
        {JSON.stringify(session)}
    </div>
}