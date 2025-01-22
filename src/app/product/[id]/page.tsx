"use client"
import CartContext from "@/app/context"
import CartProvider from "@/app/cartProvider"
import { useContext } from "react"
import { sanityFetch } from "@/sanity/lib/fetch"
import { Product } from "@/sanity/lib/type" 
import { productQuery } from "@/sanity/lib/queries"

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product: Product = await sanityFetch({ query: productQuery, params: { id: params.id } })

  
  return (
    <div>
      
      <div key={product._id} className="max-w-4xl flex my-8 mx-4 sm:mx-10 text-center">
 
        <img src={product.imageUrl} alt={product.title} className="md:h-[300px] sm:h-[200px] md:w-[300px] my-14 sm:mt-6 sm:w-[200px] h-[80px] w-[80px] mb-4" />
       <div className="sm:ml-12 ml-2">
        <h1 className="sm:text-3xl text-sm font-bold text-left sm:my-8 mt-4">{product.title}</h1>
        <p className="sm:text-md text-sm sm:my-4 my-1 text-left ">{product.description}</p>
        <p className="sm:text-lg text-sm text-left font-semibold">${product.price}</p>

 

        <ProductPageClient product={product} />



         <p className="text-sm text-left text-gray-600">Tags: {product.tags.join(", ")}</p>
         <p className="text-sm text-left text-gray-600">Inventory: {product.inventory}</p>
        </div>
        
     
       
      </div>
    </div>
  )
}
function ProductPageClient({ product }: { product: Product }) {
  const obj = useContext(CartContext);

  return (
    <div className="flex justify-start">
    <button onClick={() => {
if (obj?.add) {
  obj.add({ title: product.title, imageUrl : product.imageUrl, price: product.price });
} else {
  console.error("add function is not defined in CartContext");
}
}}  className="sm:w-[150px] w-[80px] my-1 text-sm sm:text-lg justify-left  sm:my-6 rounded-xl bg-sky-400 hover:bg-sky-800 hover:text-white">Add to cart</button></div>
  );
}