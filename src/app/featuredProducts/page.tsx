
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
]
type Product2={
    id:number,
    title:string,
    img:string,
    price:string,
   
}
const topCategory:Product2[]=[
    {
  id:1,
  title:"Wing Chair",
  price:"3,584 Products",
img:"/image/wingchairs.webp"
},
{
    id:2,
    title:"Wooden Chair",
    price:"184 Products",
  img:"/image/woodenchair.webp"
  },
  {
    id:3,
    title:"Desk Chair",
    price:"284 Products",
  img:"/image/deskchair.jpeg"
  },
]

export default function Feature(){
    return(
        <div> 
       
<div className="my-8 text-bold text-xl sm:text-2xl mx-10 mt-12 lg:text-3xl xl:ml-[200px] "><h1><b>Top Categories</b></h1></div>
        <div className="flex flex-wrap gap-8 grid sm:grid-cols-2 lg:grid-cols-3 mt-4  mx-10 xl:ml-[200px]  ">
            
            {topCategory.map((item,index)=>(
                <div key={index} className="">

                    <div className="relative h-48">
              <img className="object-cover h-[240px] w-[240px] mt-10 lg:mt-0 xl:h-[250px] xl:w-[280px] rounded-xl" src={item.img}></img></div>

              <div className="absolute w-[240px] xl:w-[280px]  lg:mt-2  h-[50px]  bg-black bg-opacity-60 text-white">
              <h1 className="mt-2 ml-2 text-sm">{item.title}</h1>
              <h2 className="text-sm ml-2">{item.price}</h2></div>
                </div>
            ))}
            <div>

            </div>
        </div>
       </div>
    )
}

