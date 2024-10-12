export default function Avatar(props:{username:string}){
    const name = props.username;
    return <div className="bg-cyan-800 flex justify-center rounded-full w-20 h-20 py-4">
        <p className="font-bold text-white text-3xl">{name[0]?.toUpperCase()}</p>
    </div>
}