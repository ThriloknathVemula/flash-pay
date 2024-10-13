import FlashPayBtn from "./FlashPayBtn";

export default function NoTransactions(){
    return <div className="flex flex-col md:pt-32 pt-20 items-center h-full">
        <div className="flex flex-col items-center gap-3 bg-white shadow-lg border-2 border-gray-200 rounded-xl p-6">
            <h1 className="font-semibold text-2xl">No Transactions yet</h1>
            <p className="font-semibold text-gray-500">Get started now on <span className="font-bold text-cyan-700 text-xl">FlashPay</span></p>
            <FlashPayBtn text={"FlashPay"} routePage="transfer"/>
        </div>
    </div>
}