"use client"

import { InputBar } from "@repo/ui/inputbar";
import { ChangeEvent, useState } from "react";
import { LoginBtn } from "./LoginBtn";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 

interface loginFormProps {
    pageName: string
}

const defaultCredentials = {
    email:"",
    password:"",
    username:"",
    number:""
}

export const LoginForm = (props:loginFormProps)=>{
    const {pageName} = props;
    const [credentials, setCredentials] = useState(defaultCredentials);

    const router = useRouter();
    const searchParams = useSearchParams();

    const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
        event.preventDefault();
        const {name, value} = event.target;
        //console.log({[name]:value});
        setCredentials({...credentials,[name]:value});
    }

    const onClickSubmit = async(event:React.SyntheticEvent)=>{
        event.preventDefault()
        console.log('submit func');
        const res = await signIn('credentials',{
            email:credentials.email,
            password:credentials.password,
            username:credentials.username,
            number:credentials.number,
            redirect:false
        });
        if (!res || res.error) {
            toast.error(`Login in failed: ${res?.error}` || "unknown error",{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            setCredentials(defaultCredentials);    
            return;
          }
          toast.success("Login Successful",{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
            const redirect = searchParams.get("redirect");
          if(redirect){
            router.push(redirect)
          }else{
            setTimeout(()=>{router.push('/home')},2000)
          }
    }

    return (
        <div className="flex flex-col bg-slate-50 rounded-lg p-5 w-3/5 md:w-1/2">
            <p className="font-bold text-2xl text-sky-700 pb-1">{pageName==="Signin" ? "Sign In" : "Sign Up"}</p>
            <p className="font-thin text-sm text-gray-600 pb-2">{pageName==="Signin" ? (<>Don't have an account? <LoginBtn content={"Sign up"}/></>) :
            (<>Already have an account? <LoginBtn content={"Sign in"}/></>)}</p>
            <div>
                <InputBar placeholder="johndoe@example.com" type="text" label="Email" name="email" value={credentials.email} onChangeFunc={handleChange}/>
                <InputBar placeholder="Password" type="password" label="Password" name="password" value={credentials.password} onChangeFunc={handleChange}/>
                {pageName==="Signup" ? (<InputBar placeholder="John Doe" type="text" label="Username" name="username" value={credentials.username} onChangeFunc={handleChange}/>) : null}
                {pageName==="Signup" ? (<InputBar placeholder="9876543210" type="text" label="Phone Number" name="number" value={credentials.number} onChangeFunc={handleChange}/>) : null}
                <div className="flex justify-center pt-4">
                    <button onClick={onClickSubmit} type="submit" className="text-sky-700 bg-slate-100 hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{pageName==="Signin"? "Login" : "Sign Up"}</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}