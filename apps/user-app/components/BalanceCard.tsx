export const BalanceCard = ({balance,locked,totalBalance}:{balance:Number,locked:Number,totalBalance:Number})=>{
    return <div className="bg-slate-50 p-7 rounded-lg">
        <h1 className="font-bold text-xl text-cyan-700 mb-2">Wallet Balance</h1>
        <div className="flex justify-between items-center gap-10 border-b-2 border-dashed text-lg">
            <p>Unlocked Balance</p>
            <p className="font-semibold">{balance.toString()} INR</p>
        </div>
        <div className="flex justify-between items-center gap-10 border-b-2 border-dashed text-lg">
            <p>Locked Balance</p>
            <p className="font-semibold">{locked.toString()} INR</p>
        </div>
        <div className="flex justify-between items-center gap-10 border-b-2 border-dashed text-lg">
            <p>Total Balance</p>
            <p className="font-semibold">{(totalBalance).toString()} INR</p>
        </div>
    </div>
}