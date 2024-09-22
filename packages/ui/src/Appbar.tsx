"use client"

import {useRouter} from 'next/navigation'
import { Button } from './button';

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
        <div className='flex items-center bg-gray-300 justify-between p-5'>
            <div className="brand flex items-center bg-slate-200">
                <p className="md:text-3xl text-sky-700 p-2 rounded-sm font-bold cursor-pointer text-xl" onClick={()=>{router.push('/')}}>FlashPay</p>
            </div>
            <div>
                <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
            </div>
        </div>
    )
}