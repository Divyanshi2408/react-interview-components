// import React, { useState } from 'react';

// const productsData = [
//   { id: 1, name: "Smartphone", category: "Electronics", price: 1200 },
//   { id: 2, name: "T-Shirt", category: "Clothing", price: 400 },
//   { id: 3, name: "Laptop", category: "Electronics", price: 35000 },
//   { id: 4, name: "Novel", category: "Books", price: 300 },
//   { id: 5, name: "Jeans", category: "Clothing", price: 800 },
//   { id: 6, name: "Headphones", category: "Electronics", price: 999 },
//   { id: 7, name: "Textbook", category: "Books", price: 1500 },
//   { id: 8, name: "Shoes", category: "Clothing", price: 1200 },
// ];

// const ProductFilter = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedPriceRange, setSelectedPriceRange] = useState("All");

//   const categories = ["All", ...new Set(productsData.map(p => p.category))];
//   const priceRanges = [
//     "All",
//     "Below ₹500",
//     "₹500–₹1000",
//     "Above ₹1000"
//   ];

//   const filterProducts = () => {
//     return productsData.filter(product => {
//       const matchCategory = selectedCategory === "All" || product.category === selectedCategory;

//       const matchPrice = (() => {
//         if (selectedPriceRange === "All") return true;
//         if (selectedPriceRange === "Below ₹500") return product.price < 500;
//         if (selectedPriceRange === "₹500–₹1000") return product.price >= 500 && product.price <= 1000;
//         if (selectedPriceRange === "Above ₹1000") return product.price > 1000;
//         return true;
//       })();

//       return matchCategory && matchPrice;
//     });
//   };

//   const filteredProducts = filterProducts();

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>🛍 Product Filter</h1>

//       <div style={{ marginBottom: '10px' }}>
//         <label>Category: </label>
//         <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
//           {categories.map((cat, idx) => (
//             <option key={idx} value={cat}>{cat}</option>
//           ))}
//         </select>
//       </div>

//       <div style={{ marginBottom: '20px' }}>
//         <label>Price: </label>
//         <select value={selectedPriceRange} onChange={e => setSelectedPriceRange(e.target.value)}>
//           {priceRanges.map((range, idx) => (
//             <option key={idx} value={range}>{range}</option>
//           ))}
//         </select>
//       </div>

//       <h2>Filtered Products ({filteredProducts.length})</h2>
//       <ul>
//         {filteredProducts.map(product => (
//           <li key={product.id}>
//             <strong>{product.name}</strong> - ₹{product.price} ({product.category})
//           </li>
//         ))}
//       </ul>

//       {filteredProducts.length === 0 && <p>No products found.</p>}
//     </div>
//   );
// };

// export default ProductFilter;


import React, { useState } from 'react';

// Sample product data
const productsData = [
  { id: 1, name: "Smartphone", category: "Electronics", price: 1200 },
  { id: 2, name: "T-Shirt", category: "Clothing", price: 400 },
  { id: 3, name: "Laptop", category: "Electronics", price: 35000 },
  { id: 4, name: "Novel", category: "Books", price: 300 },
  { id: 5, name: "Jeans", category: "Clothing", price: 800 },
  { id: 6, name: "Headphones", category: "Electronics", price: 999 },
  { id: 7, name: "Textbook", category: "Books", price: 1500 },
  { id: 8, name: "Shoes", category: "Clothing", price: 1200 },
];

const ProductFilter = () => {
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  const categories = ["All", ...new Set(productsData.map(product => product.category))];
  const priceRanges = ["All", "Below ₹500", "₹500–₹1000", "Above ₹1000"];

  // Filtering logic
  const getFilteredProducts = () => {
    return productsData.filter(product => {
      const matchCategory = category === "All" || product.category === category;

      const matchPrice =
        priceRange === "All" ||
        (priceRange === "Below ₹500" && product.price < 500) ||
        (priceRange === "₹500–₹1000" && product.price >= 500 && product.price <= 1000) ||
        (priceRange === "Above ₹1000" && product.price > 1000);

      return matchCategory && matchPrice;
    });
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>🛍 Product Filter</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>Price: </label>
        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          {priceRanges.map((range, idx) => (
            <option key={idx} value={range}>{range}</option>
          ))}
        </select>
      </div>

      <h3>Filtered Products ({filteredProducts.length})</h3>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ₹{product.price} ({product.category})
          </li>
        ))}
      </ul>

      {filteredProducts.length === 0 && <p>No products found.</p>}
    </div>
  );
};

export default ProductFilter;
