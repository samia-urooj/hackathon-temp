"use client"
import CartContext from "../context";
import { useContext } from "react";


export default function Cart(){

    const obj = useContext(CartContext)

    return(
        <div>
             <div className="featured gap-6  mt-[20px] mx-6 ">
        {obj?.cart?.length > 0 &&
        obj.cart.map((product:any) => (
      
          
           

            <div className="flex ">
            <img className="rounded-xl w-[140px] mt-6" src={product.imageUrl}></img>
              <div className="ml-8 mt-10 ">
                <h1>{product.title}</h1>
                <h2 className="text-bold   mt-1">
                  <b>${product.price}</b>
                </h2>
                <button className="mt-5 text-sm  text-center  bg-sky-400 hover:bg-sky-200 rounded-2xl h-6 w-[130px]"  onClick = {()=> obj.del(product.title)}>Delete from cart</button>
              </div>
               </div>
        ))}


        </div>
        </div>
    )
}