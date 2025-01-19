import { sanityFetch } from "@/sanity/lib/fetch"
import { allProducts } from "@/sanity/lib/queries"


type Product = {
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
  const pro : Product[] = await sanityFetch({query : allProducts})

  return(
    <div>
      <div className="text-center font-bold text-2xl my-4">
        <h1>All Products</h1>
      </div>
      <div className="grid flex grid-cols-3 gap-4 text-center my-6">
        {pro.map((prod)=>(
            <div className="border-solid border-black rounded-xl bg-gray-100 mx-4">
            <h1 className="text-xl font-bold my-2">{prod.title}</h1>
            <img src={prod.imageUrl} className="h-[300px] w-[300px] mx-auto"></img>
            <h1 className="text-lg my-2">${prod.price}</h1>
            <h2 className="text-sm font-mono my-2 mx-4">{prod.description}</h2>
            
          
             </div>
        ))
        }
      </div>
    </div>
  )
}




// import Hero from "./components/Hero";
// import Feature from "./featuredProducts/page";
// import Card from "./Card/card";

// export default function Home() {
//   return (
//     <div className="flex flex-wrap">
//  <Hero />
//  <div className="flex flex-wrap place-items-center gap-4 md:gap-10 lg:gap-14 xl:gap-16 mx-10 sm:mx-0 sm:ml-[40px] xl:ml-[250px]">
//   <img className="sm:h-8 h-4" src="https://www.pointagram.com/wp-content/uploads/2018/01/zapier-logo.png"></img>
//   <img className="sm:h-14 h-7" src="https://iconape.com/wp-content/png_logo_vector/pipedrive.png"></img>
// <img className="sm:h-16 h-8" src="https://www.eurotransfer.co.uk/wp-content/uploads/2015/03/CIB-bank-logo-300x300.jpg"></img>
// <img className="sm:h-8 h-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PFIbwd3oXBjWwR2VvZ-WtgadHg5vQ4eKhA&s"></img>
// <img className="sm:h-12 h-6" src="https://i.pinimg.com/originals/4f/34/6b/4f346bf4f83de665b5beaf62e5eb546b.gif"></img>

// <img className="sm:h-14 h-7" src="https://logovectordl.com/wp-content/uploads/2020/10/pandadoc-logo-vector.png"></img>
// <img className="sm:h-14 h-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SvaQIIIAOS-kXrAVGev-hU72Nql94d8A_Q&s"></img>
//  </div>
//  <Feature />
//  <img className="my-[200px] xl:my-[280px] items-center w-full" src="/image/main picture.png"></img>
//  <Card/>
 
//     </div>
//   );
// }