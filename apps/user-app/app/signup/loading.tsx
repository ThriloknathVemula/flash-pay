import {Circles} from "react-loader-spinner"

export default function Loading(){
    return <div className="flex justify-center items-center h-[100vh] w-screen"><Circles
    height="80"
    width="80"
    color="#00308F"
    ariaLabel="circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    /></div>
}