"use client"

import {useRouter} from 'next/navigation'
import { Button } from './button';
import { FaRegUserCircle } from "react-icons/fa";
import LogoImg from './assets/transaction.png'
import Image from 'next/image'

interface AppbarProps {
    user?:{
        name?: string | null;
    },
    onSignin: any,
    onSignout: any 
}

export const Appbar = (props:AppbarProps)=>{
    const {onSignin, onSignout, user} = props;
    const router = useRouter();
    return(
        <div className='flex items-center bg-[#F5F5F7] border-b-2 justify-between p-5'>
            <div className="brand flex cursor-pointer items-center">
                <Image src={LogoImg} className="w-16 h-16" alt="logo"/>
                <p className="md:text-3xl text-sky-700 p-2 rounded-sm font-mono font-bold md:font-extrabold text-xl" onClick={()=>{router.push('/home')}}>FlashPay</p>
            </div>
            <div className='flex items-center'>
                {user && <div>
                    <Button onClick={()=>router.push('/user')}><FaRegUserCircle/></Button>
                </div>}
                <div>
                    <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
                </div>
            </div>
        </div>
    )
}