import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import db from '@repo/db/client'

export const authOptions = {
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials:{
                email:{label:'Email',type:'text',placeholder:'johndoe@example.com'},
                password:{label:'Password',type:'password',placeholder:'*******'},
                number:{label:"Number",type:'text',placeholder:'9876543210'},
                username:{label:"Username",type:'text',placeholder:'John Doe'}
            },
            async authorize (credentials: any){
                try{
                    console.log("authorize function")
                    const existingUser = await db.user.findFirst({
                        where:{
                            email:credentials.email
                        }
                    });
                    if(!existingUser){
                        if(!credentials.username || !credentials.number){
                            return null;
                        }else{
                            const hashedPassword = await bcrypt.hash(credentials.password,10);
                            const user = await db.user.create({
                                data:{
                                    email:credentials.email,
                                    password:hashedPassword,
                                    number:credentials.number,
                                    username:credentials.username,
                                    registered_at:new Date()
                                }
                            });

                            await db.balance.create({
                                data:{
                                    userId:user.id
                                }
                            })

                            return{
                                id:user.id.toString(),
                                name:user.username,
                                email:user.email
                            }
                        }    
                    }

                    const passwordValidation = await bcrypt.compare(credentials.password,existingUser.password);
                    if(credentials.username && credentials.number){
                        return null;
                    }

                    if(passwordValidation){
                        return{
                            id:existingUser.id.toString(),
                            name:existingUser.username,
                            email:existingUser.email
                        }
                    }else{
                        return null;
                    }
                    
                }catch(e){
                    console.log(e);
                    return null;
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        jwt: async({user,token}:any)=>{
            if(user){
                token.uid = user.id
            }
            return token;
        },
        session: async({session,token,user}:any)=>{
            if(session.user){
                session.user.id = token.uid;
            }
            return session;
        }
    },
    pages:{
        signIn:'/signup',
    }
}