// src/api/index.js

// Fetch all products from backend
export const fetchProducts = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};

// You can add more API functions here later
// e.g., fetch single product, add to cart, etc.
