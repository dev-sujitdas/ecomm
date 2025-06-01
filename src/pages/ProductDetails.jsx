import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { prodData } = useContext(ProductContext);

  // Convert id from string to number (optional depending on how you store it)
  const product = prodData.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full px-6 py-10 bg-blue-50">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg flex flex-col md:flex-row gap-10 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-[400px] object-contain rounded-md"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-3">{product.title}</h2>
          <p className="text-gray-700 text-sm mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-green-600 mb-2">${product.price}</p>
          <p className="text-sm text-gray-600 mb-1">Category: {product.category}</p>
          <p className="text-sm text-yellow-500 mb-1">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
          <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
