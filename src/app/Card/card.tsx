type Product={
    id:number,
    title:string,
    img:string,
    price:string,
    img2:string,
}
const productData:Product[]=[
    {
   id:1,
   title:"Library stool chair",
   img:"/image/whitechair2.jpeg",
   price:"$20",
   img2:"/image/cart.png"
    },
    {
        id:1,
        title:"Library stool chair",
        img:"/image/pinkchair.jpeg",
        price:"$20",
   img2:"/image/cart.png"
         },
         {
            id:1,
            title:"Library stool chair",
            img:"/image/orangechair.jpeg",
            price:"$20",
   img2:"/image/cart.png"
             },
             {
                id:1,
                title:"Library stool chair",
                img:"/image/whitechair.jpeg",
                price:"$20",
               img2:"/image/cart.png"
                 },


                 {
                    id:1,
                    title:"Library stool chair",
                    img:"/image/wingchairs.webp",
                    price:"$20",
                   img2:"/image/cart.png"
                     },
                     {
                        id:1,
                        title:"Library stool chair",
                        img:"/image/deskchair.jpeg",
                        price:"$20",
                       img2:"/image/cart.png"
                         },
                         {
                            id:1,
                            title:"Library stool chair",
                            img:"/image/woodenchair.webp",
                            price:"$20",
                           img2:"/image/cart.png"
                             },
                             {
                                id:1,
                                title:"Library stool chair",
                                img:"/image/gray.webp",
                                price:"$20",
                               img2:"/image/cart.png"
                                 },
]
export default function Card(){
    return(
        <div>
          <div className=" text-bold text-xl sm:text-2xl mx-10 text-3xl lg:text-3xl xl:ml-[200px]"><h1><b>Our Products</b></h1></div>
        <div className="featured flex flex-wrap grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-4 items-center sm:mx-10 mt-4 m-10 xl:ml-[200px]">
            
     {productData.map((item,index)=>(
      <div key={index} >
         <img  className="rounded-xl w-[240px] mt-6 " src={item.img}></img>
          <div className="flex">
            <div className="w-[80%] mt-4">
         <h1 >{item.title}</h1>
         <h2 className="text-bold  mt-1"><b>{item.price}</b></h2></div>

         <div className="w-[20%]">
         <img className="sm:mt-1 mt-6 sm:h-14  bg-gray-200 m-1 hover:bg-blue-500" src={item.img2}></img></div>
         
         </div>
      </div>
     )
    )}
        </div>
        </div>
       
    )
}
