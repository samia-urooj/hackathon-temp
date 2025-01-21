"use client"
import { sanityFetch } from "@/sanity/lib/fetch"
import { allProducts } from "@/sanity/lib/queries"
import Link from "next/link"
import { useContext } from "react"
import CartContext from "../context"
import { Product } from "@/sanity/lib/types"

type Product = {
  _id:string,
   title:string,
   price:number,
   priceWithoutDiscount :number,
   badge:string,
   imageUrl:string,
   category:string,
   description:string,
   inventory:string,
   tags:string
 }


export default async function Card(){
   const pro : Product[] = await sanityFetch({query : allProducts})

    return(
      
        <div>

<div className="text-center font-bold text-2xl my-4">
        <h1 className="sm:mt-6 mt-8">All Products</h1>
      </div>
      <div className="grid flex lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4 text-center my-6">
        {pro.map((product)=>(
          
            <div  className="border-solid border-black rounded-xl bg-gray-100 mx-10 sm:mx-4 hover:shadow-md hover:shadow-black">
             
            <img src={product.imageUrl} className="h-[200px] w-[200px] mx-auto mt-6"></img>
            <h1 className="text-xl font-bold my-2">{product.title}</h1>
           
            <h1 className="text-lg my-2">${product.price}</h1>
            <ProductPageClient product={product} />
            {/* <button className="w-[130px] rounded-xl bg-blue-400 text-black hover:bg-blue-600">Add to cart</button> */}
             <Link href={`/product/${product._id}`}>

            <h1 className="text-blue-400 text-center my-4 hover:text-blue-600"><u>View details</u></h1>
            
            
      </Link>
             </div>
             
        ))
        }
      </div>
     
        
        <div className="bg-gray-200 lg:h-[600px] mt-[160px] text-center"><br></br>
            <h1 className="text-bold text-xl lg:text-3xl mt-10 lg:mt-[80px]"><b>Or Subscribe To The Newsletter</b></h1>
            <input className="bg-gray-200 underline mt-[20px] lg:mt-[50px] text-sm lg:text-xl" type="text" placeholder="Email Address...              "></input>
            <button className="ml-8 text-gray-900 "><u>SUBMIT</u></button>
            <h1 className="text-bold text-xl lg:text-3xl  mt-4"><b>Follow Products And Discounts On Instagram</b></h1>
           
           
            <div className="flex gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-4  lg:grid-cols-6  place-items-center my-8">
            <img className="h-[160px] w-[160px]" src="/image/pinkchair.jpeg"></img>   
            <img className="h-[160px] w-[160px]" src="/image/deskchair.jpeg"></img>
            <img className="h-[160px] w-[160px]" src="/image/woodenchair.webp"></img>  
             <img className="h-[160px] w-[160px]" src="/image/wingchairs.webp"></img>
             <img className="h-[160px] w-[160px]" src="/image/orangechair.jpeg"></img>
             <img className="h-[160px] w-[160px]" src="/image/whitechair.jpeg"></img>
            </div>
        </div>
        </div>
       
    )
}

function ProductPageClient({ product }: { product: Product }) {
  const obj = useContext(CartContext);

  return (
    <div className="flex justify-center">
    <button onClick={() => {
if (obj?.add) {
  obj.add({ title: product.title, image: product.imageUrl, price: product.price });
} else {
  console.error("add function is not defined in CartContext");
}
}}  className="w-[150px] justify-center my-2 rounded-xl bg-sky-400 hover:bg-sky-800 hover:text-white">Add to cart</button></div>
  );
}