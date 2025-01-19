import React from "react"
import Link from "next/link"
export default function Header(){
    return(
        
       <div>
     <div className="header text-gray-300 font-sans  text-sm sm:h-8 md:h-10 flex ">
        <div className="w-[50%]">
        <h1 className="text-gray-300 sm:ml-[40px]  xl:ml-[200px] md:mt-2 my-1">✔️Free shipping on all orders over $50</h1></div>


        <div className="flex justify-end mx-2 lg:mx-6 w-[50%] md:mt-2  mt-1 ">
        <h1 className="">Eng</h1>
        <img className="h-5" src="https://icons.veryicon.com/png/o/miscellaneous/simple-and-round-line-mark/down-arrow-56.png"></img>
        <Link href="/Faq"><h1 className="ml-[10px] md:ml-[30px]">Faqs</h1></Link>
        <img className="h-4 ml-[10px] md:ml-[30px] mt-[3px]" src="https://static.vecteezy.com/system/resources/thumbnails/022/488/758/small_2x/3d-information-icon-isolated-on-transparent-background-file-png.png"></img>
        <h1 className="ml-1">Need Help</h1></div>
     </div>


<div className="h-16 bg-gray-200 flex ">
    <div className="w-[70%] flex">
    <img className="xl:ml-[200px] ml-2 sm:ml-8" src="https://cdn-icons-png.flaticon.com/512/7796/7796701.png"></img>
    <h1 className="text-xl  mt-4 ml-3">Comforty</h1></div>

<div className="flex w-[70%] justify-end lg:mx-6">
   <Link href="Cart"> <div className="w-[120px] mx-2 h-10 mt-3 bg-white rounded-md flex">
<img className="h-9" src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-16.png"></img>
<h1 className="mt-2">Cart</h1>
<img className="h-6 mt-2 ml-4" src="https://www.pngitem.com/pimgs/m/81-812506_2-png-green-transparent-png.png"></img>
    </div></Link>
</div>
</div>

<div className="h-9 flex flex-col sm:flex-row">
    <div className=" sm:w-[50%] flex sm:justify-start justify-center ">
    <ul className="flex gap-4 xl:gap-6 text-sm sm:text-md  text-gray-600 ml-2 sm:ml-[40px] xl:ml-[200px] mt-4">
        <Link href="/" ><li className="hover:text-black">Home</li></Link>
     
       <Link href="/product"><li className="hover:text-black">Product</li></Link> 
        <Link href="/contact"><li className="hover:text-black">Contact</li></Link>
        <Link href="/about"><li className="hover:text-black">About</li></Link>
           <Link href="/Faq"><li className="hover:text-black">FAQs</li></Link>
    </ul>
    </div>
    <div className=" sm:w-[50%] flex mx-2 lg:mx-6 justify-center sm:justify-end">
    <h1 className="text-gray-600 sm:mt-4 sm:mb-0 mb-6 mt-2 text-sm sm:text-md">Contact <b className="ttext-black">(808) 555-0111</b></h1></div>
    
</div>


       </div>
    )
}