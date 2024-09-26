import { ChangeEvent } from "react";

interface inputBarProps{
    type?:string,
    label:string,
    name:string,
    value:string | number,
    onChangeFunc:(e: ChangeEvent<HTMLInputElement>) => void,
    placeholder:string
}

export const InputBar = (props:inputBarProps)=>{
    const {label,type,name,value,placeholder,onChangeFunc} = props;
    return <div className="flex flex-col">
        <label className="font-semibold">{label}</label>
        <input className="border-solid border-2 rounded-md p-1 outline-none" type={type} name={name} value={value} placeholder={placeholder} onChange={onChangeFunc}/>
    </div>
}   