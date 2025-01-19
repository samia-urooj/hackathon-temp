import Link from "next/link"

export default function Hero(){
    return (
        <div className="xl:h-[400px]   m-10 xl:mx-[200px] bg-gray-200 flex ">
            <div className="w-[30%] m-8 lg:m-20">
            <h1 className="text-sm  text-gray-400">WELCOME TO CHAIRY</h1><br></br>
            <h1 className="text-md sm:text-3xl text-bold text-black"><b>Best Furniture Collection For Your Interior.</b></h1><br></br>
            <Link href="/product"><button className="rounded-md hover:bg-sky-700 bg-sky-500 text-white text-bold text-sm w-28 h-6">Shop Now </button></Link></div>
            <img className="xl:m-4 my-[50px] sm:m-2 h-[140px] sm:mt-2 lg:ml-60 xl:ml-40 2xl:ml-[200px] sm:h-[360px] lg:ml-24" src="/image/finalChair.png"></img>
        </div>
    )
}