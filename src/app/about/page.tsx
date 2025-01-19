import Link from "next/link"


export default function About (){
    return(
        <div>
            <div className="flex grid grid-cols-1 place-items-center xl:grid-cols-2">
                <div className="h-[380px] sm:w-[580px] bg-sky-800 m-2 mt-12 sm:m-8 lg:m-14 sm:ml-[20px] md:ml-[60px] ">
                <h1 className="text-white font-bold text-2xl mx-8 mt-12 ">About us-Comforty</h1>
                <p className="text-white mt-4 mx-8">At comforty, we believe that the right chair can transform your space and evaluate your comfort. Specializing in erogonic design, premium materials, and modern aesthetics, we craft chairs that seamlesly blend style with functionality.</p>
                <Link href="/product"><button className="mt-6 sm:mt-20 mb-2 bg-sky-700 h-12 w-[200px] ml-8 text-white">View Collection</button></Link>
                </div>

                <div className=" mx-2">
              <img className="h-[380px]  sm:w-[580px] sm:ml-[20px] " src="/image/whitechair3.jpg"></img>
                </div>
            </div>


            <div>
                <h1 className="text-center text-xl  lg:text-3xl font-bold mt-14">What Makes Our Brand Different</h1>

             <div className="flex grid lg:grid-cols-3 place-items-center sm:grid-cols-2 xl:grid-cols-4 mx-6  mt-14">
                <div className="bg-gray-100 h-[220px] w-[300px] mb-6 rounded-xl ">
                    <img className="h-10 mt-8 ml-4" src="/image/delivery.webp"></img>
                 
                    <h1 className="text-sky-600 text-xl mt-3 ml-4">Next day as standard</h1>
                    <p className="text-sky-600 text-md mt-2 ml-4">Order before 3pm and get your order the next day as standard</p>
                </div>

                <div className="bg-gray-100 h-[220px] mb-6  rounded-xl w-[300px]">
                    <img className="h-6 lg:h-10 mt-8 ml-4" src="/image/tick icon.png"></img>
                    <h1 className="text-sky-600 text-lg text-xl mt-3 ml-4">Made by true artisans</h1>
                    <p className="text-sky-600 text-sm text-md mt-2 ml-4">Handmade crafted goods made with real passion and craftmanship</p>
                </div>

                <div className="bg-gray-100 h-[220px] mb-6  rounded-xl w-[300px]">
                    <img className="h-10 mt-8 ml-4" src="/image/card.png"></img>
                    <h1 className="text-sky-600 text-xl mt-3 ml-4">Unbeatable price</h1>
                    <p className="text-sky-600 text-md mt-2 ml-4">For our materials and quality you won’t find better prices anywhere</p>
                </div>

                <div className="bg-gray-100 h-[220px] mb-6  rounded-xl  w-[300px]">
                <img className="h-10 mt-8 ml-4" src="/image/leave.png"></img>
                    <h1 className="text-sky-600 text-xl mt-3 ml-4">Recycled packaging</h1>
                    <p className="text-sky-600 text-md mt-2 ml-4">We use 100% recycled to ensure our footprint is more manageable.</p>
                </div>
             </div>
    
            </div>

            <div className=" mt-[140px] mb-8">
                <h1 className=" font-bold ml-[40px] lg:ml-[100px] xl:ml-[300px] text-xl lg:text-3xl ">Our Popular Products</h1>
                <div className="flex gap-6 place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-[40px] mt-12">
                <div>
                    <img className="h-[300px]" src="/image/sofa.jpg"></img>
                    <h1 className="text-md mt-4">The Popular suede sofa</h1>
                    <p className="mt-2 text-md">$99.00</p>
                </div>
                <div>
                    <img className="h-[300px]" src="/image/black.jpg"></img>
                    <h1>The Dandy chair</h1>
                    <p>$99.00</p>
                </div>
                <div>
                    <img className="h-[300px]" src="/image/black2.jpeg"></img>
                    <h1>The Dandy chair</h1>
                    <p>$99.00</p>
                </div>
                </div>

            </div>
        </div>
    )
}


