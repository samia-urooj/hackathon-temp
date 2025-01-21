// "use client"

// import { useState } from 'react';

// const SearchBar = ({ products }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase(); // Search term ko lowercase karo
//     setSearchTerm(value);

//     // Filter products based on search term
//     const results = products.filter((product) =>
//       product.name.toLowerCase().includes(value)
//     );
//     setFilteredProducts(results);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={handleSearch}
//         className="border p-2 rounded w-full"
//       />
//       <div className="mt-4">
//         {filteredProducts.map((product) => (
//           <div key={product._id} className="p-2 border-b">
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-20 h-20 object-cover"
//             />
//             <h3>{product.name}</h3>
//             <p>${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

