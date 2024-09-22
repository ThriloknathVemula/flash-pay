import { ToastContainer } from "react-toastify";
import { LoginForm } from "../../components/Loginform";
import { Quote } from "../../components/Quote";

export default function Signin(){
    const type = "Signin";
    return (
        <div>
            <div className="grid grid-cols-1 mt-20 md:mt-1 md:grid-cols-2 md:h-screen md:bg-login-bg md:bg-cover md:bg-contain md:bg-no-repeat md:bg-center">
                <div className="flex justify-center items-center">
                    <LoginForm pageName={`${type}`}/>
                </div>
                <div className="invisible md:visible flex justify-center self-center">
                    <Quote/>
                </div>
            </div>
        </div>
    )
}