import prisma from "@repo/db/client"

export default async function UserCard(props:{id:String}){
    const userDetails = await prisma.user.findFirst({
        where:{
            id:Number(props.id)
        }
    })

    return <div>{userDetails?.email}</div>
}