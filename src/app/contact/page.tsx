export default function Contact(){
    return(
        <div className="flex flex-wrap flex-col md:flex-row  p-8 rounded-lg shadow-lg">
         
         
        <div className="w-full md:w-1/3 p-4 text-gray-700">
         
          <div className="mb-4">
            <p className="font-medium">Address:</p>
            <p>123 Street Name, City, Country</p>
          </div>
          <div className="mb-4">
            <p className="font-medium">Phone:</p>
            <p>+1 234 567 890</p>
          </div>
          <div>
            <p className="font-medium">Working Hours:</p>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Sat: 10:00 AM - 2:00 PM</p>
          </div>
        </div>
      
   
        <div className="w-full md:w-2/3 p-4">
          <h2 className="text-xl font-bold">Get in Touch with us</h2>
          <p className="text-gray-600 mb-4">For more informtion about our products & services. Please feel free to drop us an E-mail. Our staff always be there to help you out . Do not hesitate!</p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label  className="block text-gray-600 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Message</label>
              <textarea
                id="message"
            
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="justify-items-center lg:h-[200px]  sm:h-[100px] lg:w-[900px] md:mx-[100px] gap-6 lg:mx-[200px] bg-gray-200 m-0  flex grid sm:grid-cols-3">

        <div className="flex mt-6 lg:mt-12">
          <img className="h-10 ml-4 lg:h-20" src="/image/awardicon.png"></img>
          <div>
          <h1 className="font-bold text-sm lg:mt-4">High Quality</h1>
          <p className="text-gray-600 text-sm">Crafted from top materials</p></div>
        </div>

        <div className="flex mt-6 lg:mt-12">
          <img className="h-10 lg:h-20 " src="/image/tick icon.png"></img>
          <div>
          <h1 className="font-bold text-sm lg:mt-4">Warranty Protection</h1>
          <p className="text-gray-600 text-sm">Over 2 years</p></div>
        </div>

        <div className="flex mt-6 mr-4 lg:mt-12 ">
          <img className="h-10 lg:h-20  " src="/image/service.png"></img>
          <div>
          <h1 className="font-bold lg:mt-4 text-sm">24/7 Support</h1>
          <p className="text-gray-600  text-sm mb-4">Dedicated support</p></div>
        </div>

        </div>
      </div>
    )
}