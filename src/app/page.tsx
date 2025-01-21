"use client"

import { sanityFetch } from "@/sanity/lib/fetch"
import {  fourProducts } from "@/sanity/lib/queries"
import Hero from "./components/Hero"
import Feature from "./featuredProducts/page"
import Link from "next/link"
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

export default async function Home(){
  const pro : Product[] = await sanityFetch({query : fourProducts})

  return(
    <div>
      <Hero/>
      <div className="text-center font-bold text-2xl my-4 mx-10 sm:mx-6">
        <h1>Our Featured Products</h1>
      </div>
      <div className="grid flex lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 text-center my-6 ">
        {pro.map((prod)=>(
            <div className="border-solid border-black rounded-xl bg-gray-100 mx-4 hover:shadow-md hover:shadow-black">
               
            <img src={prod.imageUrl} className="h-[200px] mt-6 w-[200px] mx-auto"></img>
            <h1 className="text-xl font-bold my-2">{prod.title}</h1>
          
            <h1 className="text-lg my-2">${prod.price}</h1>
            <Link href={`/product/${prod._id}`}>
            <h1 className="text-blue-400 text-center my-4 hover:text-blue-600"><u>View details</u></h1>
            </Link>
          
             </div>
        ))
        }
      </div>
      <Feature/>
    </div>
  )
}



