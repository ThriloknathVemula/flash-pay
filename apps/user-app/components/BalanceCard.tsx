export const BalanceCard = ()=>{
    return <div className="bg-slate-50 p-5 rounded-lg">
        <h1 className="font-bold text-cyan-700">Balance</h1>
        <div className="flex justify-between items-center gap-10 border-b-2 border-dashed text-lg">
            <p>Unlocked Balance</p>
            <p>200 INR</p>
        </div>
        <div className="flex justify-between items-center gap-10 border-b-2 border-dashed text-lg">
            <p>Locked Balance</p>
            <p>0 INR</p>
        </div>
        <div className="flex justify-between items-center gap-10 border-b-2 border-dashed text-lg">
            <p>Total Balance</p>
            <p>200 INR</p>
        </div>
    </div>
}