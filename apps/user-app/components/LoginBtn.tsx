import { useRouter } from "next/navigation";

export const LoginBtn = (props : {content:string})=>{
    const {content} = props;
    const router = useRouter();
    return <button onClick={() => {content==="Sign in" ? router.push('/signin'):router.push('/signup')}} className="bg-inherit border-none underline cursor-pointer">
        {content}
    </button>
}