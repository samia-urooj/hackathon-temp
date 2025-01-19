import Feature from "../featuredProducts/page"

export default function ProductDesc(){
    return(
        <div className="flex flex-wrap ">
           <div className="flex flex-wrap sm:flex sm:flex-nowrap">
            <div className="sm:w-[50%] flex items-center justify-center">
                <img className="sm:h-[200px] md:h-[300px] lg:h-[400px] xl:ml-[200px] mt-10 ml-[40px]  xl:m-14" src="/image/pinkchair.jpeg"></img>
            </div>

            <div className="ml-4 mt-10 md:mt-16 sm:w-[50%] ml-[40px] text-left">
                <h1 className="text-bold text-xl lg:text-3xl "><b>Library Stool Chair</b></h1>
                <button className="lg:mt-8 mt-2 bg-sky-500 lg:w-[120px] w-[100px] h-6 sm:text-sm hover:bg-sky-700 lg:h-8 text-bold text-white rounded-3xl">$20.00 USD</button>
                <p className="text-gray-600 mt-2 lg:mt-8 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur aspernatur hic eveniet repellendus quae doloribus. Fugiat quisquam incidunt consectetur velit, atque vitae possimus aut magnam esse distinctio ducimus iure!</p>
                <button  className=" mt-2 lg:mt-8 bg-sky-500 hover:bg-sky-700 w-[100px] lg:w-[120px] h-6 lg:h-8 text-bold text-white rounded-3xl">Add to cart</button>
            </div></div>
<Feature/>
<br></br>
<br></br>
<br></br>
        </div>
    )
}