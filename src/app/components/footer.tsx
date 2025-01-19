import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-black p-8">
      <hr className="border-gray-300" />
      <div className="container mx-auto grid grid-cols-1 my-8 md:grid-cols-4 gap-8">
        {/* Column 1: Logo and Description */}
        <div>
          <div className="flex items-center">
            <img
              className="h-16"
              src="https://cdn-icons-png.flaticon.com/512/7796/7796701.png"
              alt="Comforty logo"
            />
            <h2 className="text-2xl ml-4 font-bold">Comforty</h2>
          </div>
          <p className="text-sm mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img src="/image/apps.jpg" alt="App store badges" className="h-8 mt-8" />
        </div>

        {/* Column 2: Category */}
        <div>
          <h3 className="text-xl font-semibold text-gray-600">Category</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Office Chair</li>
            <li>Gaming Chair</li>
            <li>Recliner Chair</li>
            <li>Dining Chair</li>
            <li>Rocking Chair</li>
            <li>Bean Bag Chair</li>
            <li>Ergonomic Chair</li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-xl font-semibold text-gray-600">Support</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Returns</li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-gray-600">Newsletter</h3>
          <div className="mt-4 flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 text-gray-600 rounded-l-md focus:outline-none"
            />
            <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8">
        <hr className="border-gray-300 mb-4" />
        <h1 className="text-gray-400">
          ©20-Blogy - Designed by <b className="text-black">Zakirsoft</b>
        </h1>
      </div>
    </footer>
  );
}